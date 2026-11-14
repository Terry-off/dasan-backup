#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
다산바른통의원 SEO / AI 검색 최적화 주입기

  python3 tools/seo/inject.py        (저장소 루트에서, build.sh 가 자동 실행)

하는 일 (여러 번 실행해도 결과가 같도록 idempotent 하게 작성)
  1. 페이지별 고유 <title> / description / keywords / Open Graph / canonical
  2. imweb 이 넣어둔 잘못된 구조화데이터(OnlineStore·배송정책 등) 제거
     → MedicalClinic · Physician · MedicalWebPage · MedicalCondition · FAQPage · BreadcrumbList 로 교체
  3. 이미지로만 되어 있던 질환 설명을 실제 텍스트 섹션으로 본문에 추가 (사람·검색엔진·AI 모두 읽음)
  4. 콘텐츠 이미지 alt 보강, 페이지별 h1
  5. 내부 링크를 정식 주소(/26 형식)로 통일
  6. guide.html(질환 안내 허브), llms.txt, llms-full.txt, sitemap.xml, robots.txt, IndexNow 키 생성
"""
import html
import json
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from seo_data import (SITE_URL, TODAY, CLINIC, DOCTOR, TREATMENTS, APPROACH, CONDITIONS,  # noqa: E402
                      CATEGORIES, PAGES, PARENT, GLOBAL_FAQ, BRAND)

import hashlib  # noqa: E402
ASSET_VER = {k: hashlib.md5(open(os.path.join(ROOT, f), "rb").read()).hexdigest()[:8]
             for k, f in (("css", "css/backup.css"), ("js", "js/backup-runtime.js"))}
INDEXNOW_KEY = "d4f1b9a2c7e84f0a9b3d6e5c1a2f7b80"
E = html.escape


# ------------------------------------------------------------------ 유틸
def url(no):
    return SITE_URL + "/" if no == "index" else f"{SITE_URL}/{no}"


def href(no):
    return "/" if no == "index" else f"/{no}"


def batchim(word):
    w = re.sub(r"[^가-힣A-Za-z0-9]", "", word)
    if not w:
        return False
    ch = w[-1]
    if "가" <= ch <= "힣":
        return (ord(ch) - 0xAC00) % 28 != 0
    return ch in "136780LMNRlmnr"


def j(word, a, b):  # 조사: j("오십견","이란","란")
    return word + (a if batchim(word) else b)


def page_name(no):
    if no == "index":
        return "홈"
    if no in CONDITIONS:
        return CONDITIONS[no]["name"]
    if no in CATEGORIES:
        return CATEGORIES[no]["name"]
    return {"26": "병원소개", "76": "인사말", "27": "의료진", "28": "오시는 길·진료시간", "31": "내과진료",
            "32": "자율신경치료", "49": "통사치료", "50": "스네피(SNEPI) 주사", "75": "수액클리닉",
            "77": "게시판", "guide": "통증 질환 안내"}.get(no, no)


def crumbs(no):
    chain = []
    cur = no
    while cur and cur != "index":
        chain.insert(0, cur)
        cur = PARENT.get(cur)
    return ["index"] + chain


# ------------------------------------------------------------------ 구조화 데이터
def clinic_node():
    c = CLINIC
    return {
        "@type": ["MedicalClinic", "MedicalBusiness"],
        "@id": SITE_URL + "/#clinic",
        "name": c["name"],
        "alternateName": c["alt_names"],
        "slogan": c["slogan"],
        "description": ("경기도 남양주시 다산동(다산신도시)에 있는 통증·내과 의원. 목디스크, 허리디스크, 척추관 협착증, "
                        "오십견, 회전근개 파열, 석회화건염, 무릎 관절염, 손목터널 증후군, 족저근막염, 신경통 등 근골격계 통증을 "
                        "통사치료와 스네피(SNEPI) 자율신경 주사로 수술 없이 치료하고 내과·수액·예방접종을 진료합니다."),
        "url": SITE_URL + "/",
        "logo": c["logo"],
        "image": [c["image"], c["logo"]],
        "telephone": c["phone_intl"],
        "faxNumber": c["fax"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": c["street"],
            "addressLocality": c["locality"],
            "addressRegion": c["region"],
            "addressCountry": "KR",
        },
        "hasMap": c["map"],
        "areaServed": [{"@type": "Place", "name": a} for a in c["areas"]],
        "openingHoursSpecification": [
            {"@type": "OpeningHoursSpecification", "dayOfWeek": "https://schema.org/" + d, "opens": o, "closes": cl}
            for d, o, cl, _ in c["hours"]],
        "isAcceptingNewPatients": True,
        "currenciesAccepted": "KRW",
        "medicalSpecialty": ["https://schema.org/Musculoskeletal", "https://schema.org/PrimaryCare",
                             "https://schema.org/Neurologic"],
        "availableService": [
            {"@type": "MedicalTherapy", "name": n, "description": d, "url": url(p)} for n, p, d in TREATMENTS],
        "knowsAbout": [v["name"] for v in CONDITIONS.values()] +
                      ["목 통증", "허리 통증", "어깨 통증", "무릎 통증", "손목 통증", "발목 통증", "골반 통증",
                       "비수술 통증치료", "자율신경 치료", "도수 없는 통증치료", "만성 통증", "고혈압", "당뇨"],
        "employee": {"@id": SITE_URL + "/#doctor"},
        "founder": {"@id": SITE_URL + "/#doctor"},
        "keywords": "다산 통증의원, 다산동 통증의학, 다산신도시 정형외과 질환 비수술 치료, 남양주 통증클리닉, "
                    "다산 목디스크, 다산 허리디스크, 다산 오십견, 다산 어깨통증, 다산 무릎통증, 다산 내과",
    }


def doctor_node():
    return {
        "@type": "Physician",
        "@id": SITE_URL + "/#doctor",
        "name": DOCTOR["name"],
        "jobTitle": f"{BRAND} {DOCTOR['title']}",
        "description": " / ".join(DOCTOR["career"]),
        "medicalSpecialty": ["https://schema.org/Emergency", "https://schema.org/Musculoskeletal"],
        "alumniOf": [{"@type": "CollegeOrUniversity", "name": "충남대학교 의과대학"},
                     {"@type": "Hospital", "name": "경희의료원"}],
        "memberOf": [{"@type": "Organization", "name": n} for n in
                     ["대한의사협회", "대한응급의학회", "대한정형통증의학회", "대한일차진료학회",
                      "대한충격파재생의학회", "대한정주의학회"]],
        "worksFor": {"@id": SITE_URL + "/#clinic"},
        "url": url("27"),
        "telephone": CLINIC["phone_intl"],
        "address": clinic_node()["address"],
    }


def condition_node(no):
    c = CONDITIONS[no]
    node = {
        "@type": "MedicalCondition",
        "@id": url(no) + "#condition",
        "name": c["name"],
        "alternateName": c["alt"],
        "description": c["summary"],
        "associatedAnatomy": {"@type": "AnatomicalStructure", "name": c["anatomy"]},
        "signOrSymptom": [{"@type": "MedicalSignOrSymptom", "name": s} for s in c["symptoms"]],
        "riskFactor": [{"@type": "MedicalRiskFactor", "name": s} for s in c["causes"]],
        "possibleTreatment": [{"@type": "MedicalTherapy", "name": "통사치료"},
                              {"@type": "MedicalTherapy", "name": "스네피(SNEPI) 자율신경 주사"},
                              {"@type": "MedicalTherapy", "name": "자세·생활습관 교정"}],
    }
    if c.get("stages"):
        node["stage"] = [{"@type": "MedicalConditionStage", "name": s} for s in c["stages"]]
    return node




def jsonld(no):
    p = PAGES.get(no, {})
    canon = url(p.get("canonical", no))
    graph = [clinic_node(), doctor_node(),
             {"@type": "WebSite", "@id": SITE_URL + "/#website", "url": SITE_URL + "/", "name": BRAND,
              "alternateName": ["다산바른통의원 홈페이지", "dasanbaruntong"], "inLanguage": "ko-KR",
              "publisher": {"@id": SITE_URL + "/#clinic"}}]
    cr = crumbs(no)
    graph.append({"@type": "BreadcrumbList", "@id": canon + "#breadcrumb",
                  "itemListElement": [{"@type": "ListItem", "position": i + 1,
                                       "name": BRAND if n == "index" else page_name(n), "item": url(n)}
                                      for i, n in enumerate(cr)]})
    page = {"@type": "MedicalWebPage" if p.get("kind") in ("condition", "category", "service") else "WebPage",
            "@id": canon + "#webpage", "url": canon, "name": p.get("title", BRAND),
            "description": p.get("desc", ""), "inLanguage": "ko-KR",
            "isPartOf": {"@id": SITE_URL + "/#website"}, "about": {"@id": SITE_URL + "/#clinic"},
            "breadcrumb": {"@id": canon + "#breadcrumb"}, "dateModified": TODAY}
    if p.get("kind") in ("condition", "category", "service"):
        page["lastReviewed"] = TODAY
        page["reviewedBy"] = {"@id": SITE_URL + "/#doctor"}
        page["audience"] = {"@type": "Patient"}
    if no in CONDITIONS:
        graph.append(condition_node(no))
        page["about"] = [{"@id": url(no) + "#condition"}, {"@id": SITE_URL + "/#clinic"}]
        page["mainEntity"] = {"@id": url(no) + "#condition"}
    graph.append(page)
    faq = faq_for(no)
    if faq and p.get("kind") != "noindex":
        graph.append({"@type": "FAQPage", "@id": canon + "#faq",
                      "mainEntity": [{"@type": "Question", "name": q,
                                      "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]})
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=1)


# ------------------------------------------------------------------ 본문 텍스트 섹션 (사이트 Q&A 디자인)
LOCWORD = "남양주 다산동"
ALL_COND_LINKS = ["59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74"]
HOURS_TXT = ("월·목·금 09:00~18:00, 화요일 09:00~20:00(야간진료), 수요일 09:00~13:00(오전진료), "
             "토요일 09:00~14:00 / 점심시간 13:00~14:00 / 일요일·공휴일 휴진")


def clinic_box():  # guide.html 전용 (다른 페이지는 원래의 '오시는 길' 섹션이 있음)
    rows = "".join(f"<li>{E(h[3])}</li>" for h in CLINIC["hours"])
    notes = "".join(f"<li class=\"dbt-muted\">{E(n)}</li>" for n in CLINIC["hours_notes"])
    return f"""<div class="dbt-clinic"><div><h3>{BRAND}</h3>
<p>{E(CLINIC['address_full'])}<br>T. <a href="tel:{CLINIC['phone']}">{CLINIC['phone']}</a><br>{E(CLINIC['parking'])}</p></div>
<div><h3>진료시간</h3><ul>{rows}{notes}</ul></div></div>"""


def ul(items):
    return "<ul>" + "".join(f"<li>{E(i)}</li>" for i in items) + "</ul>"


def treat_html():
    return "<ul>" + "".join(
        f'<li><a href="{href(p)}">{E(n)}</a> – {E(d)}</li>' for n, p, d in TREATMENTS) + "</ul>"


def treat_text():
    return " ".join(f"{n}: {d}" for n, _, d in TREATMENTS)


def P(t):
    return f"<p>{E(t)}</p>"


def where_qa(subject):
    return (f"다산동·다산신도시에서 {subject} 진료는 어디서 받을 수 있나요?",
            P(f"{BRAND}에서 진료합니다. 주소는 {CLINIC['address_full']}이며 건물 내 주차가 가능합니다. "
              f"남양주 다산동·지금동·도농동과 구리, 별내 등 인근 지역에서 찾아오십니다. 전화 {CLINIC['phone']}."))


def hours_qa():
    return (f"{BRAND} 진료시간과 위치는 어떻게 되나요?",
            P(f"{HOURS_TXT}. 위치: {CLINIC['address_full']} (건물 내 주차). 전화 {CLINIC['phone']}."))


def qa_items(no):
    """(질문, 답변 HTML) 목록 — 화면의 Q&A 와 FAQPage 구조화데이터가 같은 내용을 쓴다."""
    items = []
    if no in CONDITIONS:
        c = CONDITIONS[no]
        nm = c["name"]
        items.append((f"{j(nm, '이란', '란')} 무엇인가요? ({', '.join(c['alt'][:3])})",
                      P(c["summary"]) + P(f"다른 이름: {', '.join(c['alt'])}. 관련 부위: {c['anatomy']}.")))
        items.append((f"{nm} 증상은 어떤가요?",
                      ul(c["symptoms"]) + P(f"위와 같은 {c['part']} 통증·불편감이 계속된다면 {j(nm, '을', '를')} 의심해 볼 수 있습니다.")))
        items.append((f"{j(nm, '은', '는')} 왜 생기나요? (원인)", ul(c["causes"]) + (P(c["note"]) if c.get("note") else "")))
        if c.get("stages"):
            items.append((f"{nm} 진행 단계는 어떻게 나뉘나요?", ul(c["stages"])))
        if c.get("types"):
            items.append(("신경통에는 어떤 종류가 있나요? (좌골신경통·삼차신경통·늑간신경통)",
                          "<ul>" + "".join(f"<li><b>{E(x)}</b> – {E(y)}</li>" for x, y in c["types"]) + "</ul>"))
        items.append(where_qa(nm))
        items.append((f"{BRAND}에서는 {j(nm, '을', '를')} 어떻게 치료하나요?", P(APPROACH) + treat_html()))
        items.append((f"{j(nm, '은', '는')} 꼭 수술해야 하나요? 비수술 치료가 가능한가요?",
                      P(f"증상과 진행 정도에 따라 다릅니다. 비수술 치료로 호전을 기대할 수 있는 경우가 있어 {BRAND}에서는 "
                        "진찰 후 통사치료, 스네피(SNEPI) 자율신경 주사, 자세·생활습관 교정 중 필요한 치료만 권합니다. "
                        "진찰 결과 정밀 영상검사나 수술이 필요한 소견이 있으면 적합한 상급 의료기관으로 안내합니다.")))
        items.append((f"{j(nm, '이', '가')} 의심되면 언제 병원에 가야 하나요?",
                      P(f"'{c['symptoms'][0]}', '{c['symptoms'][1]}' 같은 증상이 2주 이상 계속되거나 일상생활이 불편하다면 "
                        "진료를 받아 보시는 것이 좋습니다. 초기에 원인을 확인할수록 관리가 수월합니다.")))
        items.append(hours_qa())
    elif no in CATEGORIES:
        cat = CATEGORIES[no]
        names = ", ".join(page_name(x) for x in cat["children"])
        items.append((f"{cat['name']}의 원인 질환에는 무엇이 있나요?",
                      P(cat["intro"]) + "<ul>" + "".join(f'<li><a href="{href(x)}">{E(page_name(x))}</a></li>'
                                                         for x in cat["children"]) + "</ul>"))
        for ch in cat["children"]:
            if ch in CONDITIONS:
                c = CONDITIONS[ch]
                items.append((f"{j(c['name'], '이란', '란')}? 주요 증상은?",
                              P(c["summary"]) + P("주요 증상: " + ", ".join(c["symptoms"]) + ".") +
                              f'<p><a href="{href(ch)}">{E(c["name"])} 자세히 보기</a></p>'))
            else:
                items.append((f"{CATEGORIES[ch]['name']} 진료 안내",
                              P(CATEGORIES[ch]["intro"]) + f'<p><a href="{href(ch)}">자세히 보기</a></p>'))
        items.append(where_qa(cat["name"]))
        items.append((f"{BRAND}의 {cat['name']} 치료 방법은?", P(APPROACH) + treat_html()))
        items.append(hours_qa())
    elif no in ("index", "guide"):
        items.append((f"{j(BRAND, '은', '는')} 어떤 병원인가요?",
                      P(f"{BRAND}은 경기도 남양주시 다산동(다산신도시) 다산지금로 130 하나로프라자II 2층에 있는 통증·내과 의원입니다. "
                        "목·허리·어깨·무릎·팔꿈치·손목·발목 등 정형외과 영역의 근골격계 통증과 신경통을 수술 없이 치료하고, "
                        "만성질환·감기·위장질환 등 내과 진료와 영양수액, 예방접종을 함께 합니다.")))
        parts = "".join(
            f'<li><a href="{href(c)}"><b>{E(CATEGORIES[c]["name"])}</b></a> – ' +
            ", ".join(f'<a href="{href(x)}">{E(CONDITIONS[x]["name"])}</a>' for x in CATEGORIES[c]["children"]) + "</li>"
            for c in ["52", "53", "54", "55", "56", "57", "58"])
        items.append(("어떤 통증 질환을 진료하나요? (목·허리·어깨·무릎·손목·발목)", f"<ul>{parts}</ul>"))
        items.append(("치료 방법은 무엇인가요? (통사치료 · 스네피 주사 · 수액)", P(APPROACH) + treat_html()))
        items.append((f"대표원장은 누구인가요?",
                      P(f"대표원장 {DOCTOR['name']}입니다.") + ul(DOCTOR["career"])))
        items.append(where_qa("목·허리·어깨·무릎 통증"))
        for q, a in GLOBAL_FAQ[1:]:
            items.append((q, P(a)))
    elif PAGES.get(no, {}).get("kind") == "service":
        svc = PAGES[no].get("svc")
        d = {n: x for n, _, x in TREATMENTS}
        what = {"자율신경치료": d["통사치료"] + " " + d["스네피(SNEPI) 자율신경 주사"] + " " + d["자율신경 검사 (SA-3000)"],
                "통사치료": d["통사치료"], "스네피 주사": d["스네피(SNEPI) 자율신경 주사"],
                "수액클리닉": d["영양수액 · 통증케어 수액"] + " 독감·대상포진·파상풍·폐렴구균 예방접종과 SA-3000 자율신경 검사도 합니다.",
                "내과": d["내과 진료"]}[svc]
        nm = page_name(no)
        items.append((f"다산 {nm} – 어떤 진료인가요?", P(what)))
        if svc != "내과":
            items.append((f"{nm}는 어떤 통증에 적용하나요?",
                          P("목·허리·어깨·무릎·손목·발목 통증과 신경통, 손발 저림, 두통 등에 적용합니다.") +
                          "<p>" + " · ".join(f'<a href="{href(x)}">{E(page_name(x))}</a>' for x in ALL_COND_LINKS) + "</p>"))
        items.append(where_qa(nm))
        items.append(hours_qa())
    else:  # about / doctor / contact
        if PAGES.get(no, {}).get("kind") == "doctor":
            items.append((f"{BRAND} 대표원장 {DOCTOR['name']} 약력은?", ul(DOCTOR["career"])))
        items.append((f"{BRAND}의 진료 원칙은 무엇인가요?", P(APPROACH)))
        items.append(("어떤 진료를 하나요?", treat_html()))
        items.append(where_qa("통증"))
        items.append(hours_qa())
        items.append(GLOBAL_FAQ[4][0:1] + (P(GLOBAL_FAQ[4][1]),))
    return items


def faq_for(no):  # 구조화데이터용 (텍스트만)
    return [(q, re.sub(r"\s+", " ", html.unescape(re.sub(r"<li>", " · ", re.sub(r"<(?!li)[^>]+>", " ", a)))
                       .replace("</li>", "")).strip(" ·")) for q, a in qa_items(no)]


def qa_html(no):
    rows = "".join(f'<details class="dbt-qa"><summary><span>{E(q)}</span></summary><div class="dbt-qa-a">{a}</div></details>'
                   for q, a in qa_items(no))
    label = "자주 묻는 질문" if no in ("index", "guide") else f"자주 묻는 질문 · {E(page_name(no))} Q&amp;A"
    rel = []
    if no in CONDITIONS and PARENT.get(no) in CATEGORIES:
        rel = [x for x in CATEGORIES[PARENT[no]]["children"] if x != no] + [PARENT[no]]
    elif no in CATEGORIES:
        rel = list(CATEGORIES[no]["children"])
    rel += ["guide"] if no != "guide" else []
    chips = "".join(f'<a href="{href(n)}">{E(page_name(n))}</a>' for n in rel)
    # 한 줄 버튼(접힘) → 누르면 Q&A 목록이 펼쳐짐. 내용은 HTML 에 그대로 있어 검색엔진·AI 는 모두 읽음
    return (f'<div class="dbt-in"><details class="dbt-fold"><summary><h2>{label}</h2></summary>'
            f'<div class="dbt-fold-body">{rows}'
            + (f'<div class="dbt-chips">{chips}</div>' if chips else "") + "</div></details></div>")


def section(no):
    p = PAGES.get(no, {})
    if p.get("kind") == "noindex":
        return ""
    return ('<!--dbt-seo:body-start--><section class="dbt-seo" id="dbt-seo" aria-label="자주 묻는 질문">'
            + qa_html(no) + "</section><!--dbt-seo:body-end-->")


# ------------------------------------------------------------------ head
def head_block(no, robots=None):
    p = PAGES[no]
    canon = url(p.get("canonical", no))
    kw = p.get("kw")
    name = page_name(no)
    keywords = ", ".join(dict.fromkeys(filter(None, [
        f"다산 {name}", f"다산동 {name}", f"남양주 {name}", f"다산신도시 {name}",
        name if no != "index" else None,
        "다산바른통의원", "다산 통증의원", "다산동 통증치료", "다산 정형외과 질환 비수술 치료", "남양주 통증클리닉"])))
    if no in CONDITIONS:
        keywords += ", " + ", ".join(CONDITIONS[no]["alt"])
    lines = [
        "<!--dbt-seo:head-start-->",
        f'<meta name="description" content="{E(p["desc"])}">',
        f'<meta name="keywords" content="{E(keywords)}">',
        f'<meta name="robots" content="{robots or "index,follow,max-image-preview:large,max-snippet:-1"}">',
        f'<link rel="canonical" href="{canon}">',
        '<meta name="msvalidate.01" content="DECADF80FB530828B261751251BE058E">',
        '<meta property="og:locale" content="ko_KR">',
        f'<meta property="og:site_name" content="{BRAND}">',
        f'<meta property="og:title" content="{E(p["title"])}">',
        f'<meta property="og:description" content="{E(p["desc"])}">',
        f'<meta property="og:image" content="{CLINIC["image"]}">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:title" content="{E(p["title"])}">',
        f'<meta name="twitter:description" content="{E(p["desc"])}">',
        '<meta name="geo.region" content="KR-41">',
        f'<meta name="geo.placename" content="{CLINIC["region"]} {CLINIC["locality"]} 다산동">',
        f'<meta name="author" content="{BRAND}">',
        '<link rel="alternate" type="text/plain" title="LLM 안내" href="/llms.txt">',
        f'<script type="application/ld+json">{jsonld(no)}</script>',
        "<!--dbt-seo:head-end-->",
    ]
    return "\n".join(lines)


# ------------------------------------------------------------------ 페이지 처리
def alts_for(no):
    if no in CONDITIONS:
        c = CONDITIONS[no]
        nm = c["name"]
        return [f"{nm} – {c['tagline']}: {c['summary'][:60]}",
                f"{j(nm, '이란', '란')}? {c['summary'][:80]}",
                f"{nm} 증상: " + ", ".join(c["symptoms"]),
                f"{nm} 원인: " + ", ".join(c["causes"])]
    return []


SEC_RE = re.compile(r'<div\s+doz_type="section"[^>]*class="section_wrap[^"]*"[^>]*>')


def insert_pos(s, no):
    """원래 페이지의 '오시는 길' 섹션 바로 앞 (본문 마지막) 위치. 28번(오시는 길 페이지)은 사이트 하단 메뉴 섹션 앞."""
    starts = [m.start() for m in SEC_RE.finditer(s)]
    if not starts:
        return None
    if no == "28":
        return starts[-1]
    for k, st in enumerate(starts):
        end = starts[k + 1] if k + 1 < len(starts) else len(s)
        txt = re.sub(r"<[^>]+>", "", s[st:end])
        if "오시는 길" in txt or "오시는길" in txt:
            # 바로 앞에 붙어 있는 모바일 전용 섹션(오시는 길 지도 등)은 같은 묶음이므로 그 앞에 넣는다
            while k > 0:
                prev = s[starts[k - 1]:starts[k]]
                head = SEC_RE.match(s, starts[k - 1]).group(0)
                if "mobile_section" in head and not re.sub(r"\s+", "", re.sub(r"<[^>]+>", "", prev.split("dbt-seo:body-start")[0])):
                    k -= 1
                else:
                    break
            return starts[k]
    return starts[-1]


def process(fname, no):
    path = os.path.join(ROOT, fname)
    s = open(path, encoding="utf-8").read()

    # 이전 주입분 제거 (idempotent)
    s = re.sub(r"<!--dbt-seo:head-start-->.*?<!--dbt-seo:head-end-->\n?", "", s, flags=re.S)
    s = re.sub(r"<!--dbt-seo:body-start-->.*?<!--dbt-seo:body-end-->", "", s, flags=re.S)
    s = re.sub(r'<h1 class="dbt-seo-h1">.*?</h1>', "", s, flags=re.S)

    # imweb 의 잘못된 구조화데이터(OnlineStore/배송/ImageObject/Product) 제거
    s = re.sub(r"<script type=['\"]application/ld\+json['\"]>.*?</script>\s*", "", s, flags=re.S)
    # 기존 메타 제거 후 재작성
    s = re.sub(r'<meta[^>]+(?:name|property)=["\'](?:description|keywords|robots|og:title|og:description|og:image|'
               r'og:site_name|og:locale|twitter:[a-z]+|author|geo\.[a-z]+)["\'][^>]*>\s*', "", s, flags=re.I)
    s = re.sub(r'<link[^>]*rel=["\']canonical["\'][^>]*>\s*', "", s, flags=re.I)
    p = PAGES[no]
    s = re.sub(r"<title>.*?</title>", f"<title>{E(p['title'])}</title>", s, count=1, flags=re.S)
    canon = url(p.get("canonical", no))
    s = re.sub(r'(<meta[^>]*property=["\']og:url["\'][^>]*content=["\'])[^"\']*', r"\g<1>" + canon, s, flags=re.I)
    robots = "noindex,follow" if p.get("kind") == "noindex" else None
    s = s.replace("</head>", head_block(no, robots) + "\n</head>", 1)

    # css/js 캐시 무효화 (수정 후 방문자 브라우저에 옛 디자인이 남지 않도록 내용 해시를 붙임)
    s = re.sub(r'(href=["\'](?:\./|/)?css/backup\.css)(?:\?v=[\w]+)?', r"\g<1>?v=" + ASSET_VER["css"], s)
    s = re.sub(r'(src=["\'](?:\./|/)?js/backup-runtime\.js)(?:\?v=[\w]+)?', r"\g<1>?v=" + ASSET_VER["js"], s)

    # 내부 링크 → 정식 주소
    s = re.sub(r'(href=["\'])(?:\./)?(\d+)\.html(?=["\'#?])', r"\1/\2", s)
    s = re.sub(r'(href=["\'])(?:\./)?index\.html(?=["\'#?])', r"\1/", s)

    # 이미지 alt 보강
    alts = alts_for(no)
    common = {"2cd6bac913861", "a76e9165fbc95", "188d7451bea4b", "d84046f7a28b6", "db6f8e033efa8"}
    state = {"i": 0}

    def fix_img(m):
        tag = m.group(0)
        src = re.search(r'src="([^"]+)"', tag)
        if not src or "cdn.imweb.me" not in src.group(1):
            return tag
        if re.search(r'alt="[^"]+"', tag):
            return tag
        base = os.path.basename(src.group(1)).split(".")[0]
        if base in common:
            alt = f"{BRAND} – {LOCWORD} 통증의원"
        elif state["i"] < len(alts):
            alt = alts[state["i"]]
            state["i"] += 1
        else:
            alt = f"{BRAND} {page_name(no)} 안내"
        alt = E(alt[:180])
        if re.search(r'\balt="[^"]*"', tag):
            return re.sub(r'\balt="[^"]*"', f'alt="{alt}"', tag, count=1)
        return tag.replace("<img", f'<img alt="{alt}"', 1)

    cache = {}

    def fix_img_once(m):
        tag = m.group(0)
        src = re.search(r'src="([^"]+)"', tag)
        key = src.group(1) if src else None
        if key in cache:  # 같은 이미지가 PC/모바일용으로 두 번 → 같은 alt
            alt = cache[key]
            if not alt or re.search(r'alt="[^"]+"', tag):
                return tag
            if re.search(r'\balt="[^"]*"', tag):
                return re.sub(r'\balt="[^"]*"', f'alt="{alt}"', tag, count=1)
            return tag.replace("<img", f'<img alt="{alt}"', 1)
        r = fix_img(tag_m(tag))
        mm = re.search(r'alt="([^"]*)"', r)
        cache[key] = mm.group(1) if mm else None
        return r

    class tag_m:
        def __init__(self, t): self.t = t
        def group(self, i): return self.t

    s = re.sub(r"<img\b[^>]*>", fix_img_once, s)

    # h1 (본문 상단, 화면에는 숨김 — 이미지 속 제목과 같은 내용)
    s = re.sub(r"(<body[^>]*>)", r'\1<h1 class="dbt-seo-h1">' + E(p["h1"]) + "</h1>", s, count=1)

    # 텍스트 섹션 (푸터 바로 위)
    sec = section(no)
    if sec:
        pos = insert_pos(s, no)
        if pos is not None:
            s = s[:pos] + sec + s[pos:]
        elif '<footer id="doz_footer_wrap">' in s:
            s = s.replace('<footer id="doz_footer_wrap">', sec + '<footer id="doz_footer_wrap">', 1)
        else:
            s = s.replace("</body>", sec + "</body>", 1)

    open(path, "w", encoding="utf-8").write(s)


def process_noindex(fname, title):
    path = os.path.join(ROOT, fname)
    if not os.path.exists(path):
        return
    s = open(path, encoding="utf-8").read()
    s = re.sub(r"<!--dbt-seo:head-start-->.*?<!--dbt-seo:head-end-->\n?", "", s, flags=re.S)
    s = re.sub(r"<script type=['\"]application/ld\+json['\"]>.*?</script>\s*", "", s, flags=re.S)
    s = re.sub(r'<meta[^>]+name=["\']robots["\'][^>]*>\s*', "", s, flags=re.I)
    s = re.sub(r"<title>.*?</title>", f"<title>{E(title)}</title>", s, count=1, flags=re.S)
    s = s.replace("</head>", '<!--dbt-seo:head-start-->\n<meta name="robots" content="noindex,follow">\n'
                             "<!--dbt-seo:head-end-->\n</head>", 1)
    s = re.sub(r'(href=["\'])(?:\./)?(\d+)\.html(?=["\'#?])', r"\1/\2", s)
    s = re.sub(r'(href=["\'])(?:\./)?index\.html(?=["\'#?])', r"\1/", s)
    open(path, "w", encoding="utf-8").write(s)


# ------------------------------------------------------------------ guide.html (질환 안내 허브)
def build_guide():
    PAGES["guide"] = dict(
        title=f"다산 통증 질환 안내 – 목 · 허리 · 어깨 · 무릎 · 손목 · 발목 | {BRAND} (남양주 다산동)",
        desc=f"남양주 다산동 {BRAND}에서 진료하는 통증 질환 16가지(목디스크, 허리디스크, 척추관 협착증, 오십견, 회전근개 파열, "
             "무릎 관절염, 손목터널 증후군, 족저근막염, 신경통 등)의 증상·원인·비수술 치료를 한 페이지에 정리했습니다.",
        h1=f"다산 통증 질환 안내 – {BRAND}", kind="category")
    PARENT["guide"] = None
    blocks = []
    for cno in ["52", "53", "54", "55", "56", "57", "58"]:
        cat = CATEGORIES[cno]
        blocks.append(f'<section class="g-cat" id="c{cno}"><h2><a href="{href(cno)}">{E(cat["name"])}</a></h2><p>{E(cat["intro"])}</p>')
        for ch in cat["children"]:
            c = CONDITIONS[ch]
            blocks.append(f'<article id="d{ch}"><h3><a href="{href(ch)}">{E(c["name"])}</a> '
                          f'<small>{E(", ".join(c["alt"]))}</small></h3><p>{E(c["summary"])}</p>'
                          f'<p><b>주요 증상</b> {E(" · ".join(c["symptoms"]))}</p>'
                          f'<p><b>원인</b> {E(" · ".join(c["causes"]))}</p>'
                          f'<p><a href="{href(ch)}">{E(c["name"])} 자세히 보기 →</a></p></article>')
        blocks.append("</section>")
    toc = "".join(f'<a href="#c{c}">{E(CATEGORIES[c]["name"])}</a>' for c in ["52", "53", "54", "55", "56", "57", "58"])
    faq = "".join(f"<details><summary>{E(q)}</summary><p>{E(a)}</p></details>" for q, a in GLOBAL_FAQ)
    page = f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{E(PAGES['guide']['title'])}</title>
{head_block('guide')}
<link rel="icon" href="/assets/cdn.imweb.me/upload/S20251209f5fd7d3e70807/ff0c9deefb90a.png">
<link rel="stylesheet" href="/css/backup.css?v={ASSET_VER['css']}">
<style>
:root{{--navy:#12309a;--ink:#222;--muted:#666;--line:#e3e7ef;--bg:#fff;--soft:#f5f7fb}}
@media (prefers-color-scheme:dark){{:root:not([data-theme="light"]){{--ink:#e8e8e8;--muted:#aaa;--line:#333;--bg:#141619;--soft:#1c1f24;--navy:#8fa8ff}}}}
*{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--ink);font-family:'Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif;line-height:1.75;word-break:keep-all}}
a{{color:var(--navy)}}header.g{{border-bottom:1px solid var(--line);padding:14px 16px}}header.g .in,main{{max-width:960px;margin:0 auto}}
header.g a.logo img{{height:34px}}main{{padding:24px 16px 60px}}h1{{font-size:clamp(24px,4vw,34px);line-height:1.35;margin:.2em 0 .4em}}
.lead{{color:var(--muted)}}nav.toc{{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 8px}}nav.toc a{{border:1px solid var(--line);border-radius:20px;padding:4px 12px;text-decoration:none;font-size:14px}}
.g-cat{{margin-top:40px}}.g-cat>h2{{font-size:24px;border-left:4px solid var(--navy);padding-left:10px}}.g-cat>h2 a{{text-decoration:none;color:inherit}}
article{{background:var(--soft);border-radius:10px;padding:16px 18px;margin:14px 0}}article h3{{margin:0 0 6px;font-size:19px}}article h3 small{{font-weight:400;color:var(--muted);font-size:13px}}article p{{margin:.4em 0}}
details{{border-bottom:1px solid var(--line);padding:10px 0}}summary{{cursor:pointer;font-weight:600}}
</style>
</head>
<body>
<header class="g"><div class="in"><a class="logo" href="/"><img src="{CLINIC['logo']}" alt="{BRAND} 로고"></a></div></header>
<main>
<p class="lead">{BRAND} · {LOCWORD} 통증의원</p>
<h1>{E(PAGES['guide']['h1'])}</h1>
<p>{BRAND}({E(CLINIC['address_full'])})은 목·허리·어깨·무릎·팔꿈치·손목·발목 등 근골격계(정형외과 영역) 통증과 신경통을 수술 없이 치료하는 의원입니다. 아래는 저희가 진료하는 대표 질환의 증상과 원인을 정리한 안내입니다. 증상이 비슷해도 원인이 다를 수 있으므로 정확한 진단은 진료를 통해 받으시기 바랍니다.</p>
<nav class="toc">{toc}</nav>
{''.join(blocks)}
<section class="g-cat"><h2>치료 방법</h2><p>{E(APPROACH)}</p>{treat_html()}</section>
</main>
<section class="dbt-seo">{qa_html('guide')}<div class="dbt-in" style="padding-bottom:60px">{clinic_box()}</div></section>
<footer style="text-align:center;padding:24px 16px;color:var(--muted);font-size:13px;border-top:1px solid var(--line)">
{BRAND} · 대표 {DOCTOR['name']} · 사업자등록번호 {CLINIC['biz_no']} · {E(CLINIC['address_full'])} · T. {CLINIC['phone']} · F. {CLINIC['fax']}</footer>
</body>
</html>
"""
    open(os.path.join(ROOT, "guide.html"), "w", encoding="utf-8").write(page)


# ------------------------------------------------------------------ llms.txt
def build_llms():
    c = CLINIC
    hours = "\n".join(f"- {h[3]}" for h in c["hours"]) + "\n" + "\n".join(f"- {n}" for n in c["hours_notes"])
    conds = "\n".join(f"- [{v['name']}]({url(k)}): {v['summary'][:110]}…" for k, v in CONDITIONS.items())
    cats = "\n".join(f"- [{v['name']}]({url(k)}): {v['intro']}" for k, v in CATEGORIES.items())
    treats = "\n".join(f"- [{n}]({url(p)}): {d}" for n, p, d in TREATMENTS)
    faq = "\n\n".join(f"Q. {q}\nA. {a}" for q, a in GLOBAL_FAQ)
    short = f"""# {BRAND} (Dasan Barun Tong Clinic)

> 경기도 남양주시 다산동(다산신도시)에 있는 통증·내과 의원. 목디스크·허리디스크·척추관 협착증·오십견·회전근개 파열·석회화건염·무릎 퇴행성 관절염·반월판연골 손상·손목터널 증후군·테니스/골프 엘보·발목 염좌·족저근막염·아킬레스건염·신경통 등 근골격계(정형외과 영역) 통증을 통사치료와 스네피(SNEPI) 자율신경 주사 등 비수술 방법으로 치료하고, 내과·영양수액·예방접종을 진료합니다.

## 기본 정보
- 이름: {BRAND} (다른 표기: {", ".join(c['alt_names'])})
- 주소: {c['address_full']}
- 전화: {c['phone']} / 팩스 {c['fax']}
- 주차: {c['parking']}
- 진료 지역: {", ".join(c['areas'])}
- 대표원장: {DOCTOR['name']} ({"; ".join(DOCTOR['career'][:4])})
- 홈페이지: {SITE_URL}/
- 진료 원칙: {APPROACH}

## 진료시간
{hours}

## 이런 질문에 해당하는 병원입니다
- "다산 정형외과 질환 통증 치료 병원", "다산동 통증의원 추천", "다산신도시 통증클리닉"
- "다산 어깨 통증 / 허리 통증 / 목 통증 / 무릎 통증 / 손목·팔꿈치 통증 / 발목·발바닥 통증 병원"
- "남양주 다산 목디스크·허리디스크·오십견 비수술 치료"
- "다산동 화요일 야간진료 · 토요일 진료 의원", "다산 내과", "다산 수액"
- 참고: {BRAND}은 정형외과 간판의 의원은 아니며, 정형외과 질환의 통증을 비수술로 진료하는 통증·내과 의원입니다.

## 치료
{treats}

## 부위별 진료
{cats}

## 질환별 안내
{conds}

## 자주 묻는 질문
{faq}

## 더 보기
- [통증 질환 전체 안내]({SITE_URL}/guide)
- [의료진]({url('27')})
- [오시는 길·진료시간]({url('28')})
- [전체 상세 텍스트 (llms-full.txt)]({SITE_URL}/llms-full.txt)
"""
    open(os.path.join(ROOT, "llms.txt"), "w", encoding="utf-8").write(short)

    full = [short, "\n---\n# 질환 상세\n"]
    for k, v in CONDITIONS.items():
        full.append(f"\n## {v['name']} ({', '.join(v['alt'])})\nURL: {url(k)}\n\n{v['summary']}\n")
        if v.get("stages"):
            full.append("\n진행 단계:\n" + "\n".join(f"- {s}" for s in v["stages"]) + "\n")
        if v.get("types"):
            full.append("\n종류:\n" + "\n".join(f"- {a}: {b}" for a, b in v["types"]) + "\n")
        full.append("\n증상:\n" + "\n".join(f"- {s}" for s in v["symptoms"]))
        full.append("\n\n원인:\n" + "\n".join(f"- {s}" for s in v["causes"]))
        if v.get("note"):
            full.append(f"\n\n{v['note']}")
        full.append(f"\n\n{BRAND}의 치료: {APPROACH}\n")
    open(os.path.join(ROOT, "llms-full.txt"), "w", encoding="utf-8").write("".join(full))


# ------------------------------------------------------------------ sitemap / robots / indexnow
def build_sitemap(indexed):
    pri = lambda n: "1.0" if n == "index" else ("0.9" if n in CONDITIONS or n in CATEGORIES or n == "guide" else "0.7")
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for n in indexed:
        lines.append(f"  <url><loc>{url(n)}</loc><lastmod>{TODAY}</lastmod><changefreq>monthly</changefreq>"
                     f"<priority>{pri(n)}</priority></url>")
    lines.append("</urlset>")
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write("\n".join(lines) + "\n")


ROBOTS = f"""# {BRAND} – 검색엔진 · AI 검색 모두 허용
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /shop_view/
Disallow: /shop_view_1.html
Disallow: /shop_view_2.html

# AI 검색 / 답변 엔진 (ChatGPT · Claude · Perplexity · Gemini 등) 명시적 허용
User-agent: GPTBot
Allow: /
Disallow: /admin/

User-agent: OAI-SearchBot
Allow: /
Disallow: /admin/

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /
Disallow: /admin/

User-agent: Claude-SearchBot
Allow: /
Disallow: /admin/

User-agent: Claude-User
Allow: /

User-agent: anthropic-ai
Allow: /
Disallow: /admin/

User-agent: PerplexityBot
Allow: /
Disallow: /admin/

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /
Disallow: /admin/

User-agent: Bingbot
Allow: /
Disallow: /admin/

User-agent: Yeti
Allow: /
Disallow: /admin/

User-agent: Daum
Allow: /
Disallow: /admin/

User-agent: Applebot
Allow: /
Disallow: /admin/

Sitemap: {SITE_URL}/sitemap.xml
"""


def main():
    files = {"index": "index.html"}
    for n in PAGES:
        if n.isdigit():
            files[n] = f"{n}.html"
    for no, f in files.items():
        if os.path.exists(os.path.join(ROOT, f)):
            process(f, no)
        else:
            print("  (없음)", f)
    process_noindex("shop_view_1.html", f"{BRAND}")
    process_noindex("shop_view_2.html", f"{BRAND}")
    build_guide()
    build_llms()
    indexed = ["index", "guide", "26", "27", "28", "51", "52", "53", "54", "55", "56", "57", "58"] + \
              [n for n in ALL_COND_LINKS if n != "74"] + ["32", "49", "50", "31", "75"]
    build_sitemap(indexed)
    open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8").write(ROBOTS)
    open(os.path.join(ROOT, f"{INDEXNOW_KEY}.txt"), "w", encoding="utf-8").write(INDEXNOW_KEY)
    print(f"SEO 주입 완료: 페이지 {len(files)}개, sitemap {len(indexed)}건, guide.html · llms.txt · llms-full.txt · robots.txt")


if __name__ == "__main__":
    main()
