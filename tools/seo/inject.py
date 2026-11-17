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
                      CATEGORIES, PAGES, PARENT, GLOBAL_FAQ, BRAND,
                      SYMPTOM_GROUPS, DIRECTIONS, KNEE_HIP_PART, KNEE_HIP_DURATION, KNEE_HIP_SITUATION)

from landing_data import (ENTITY_SUMMARY, NEARBY_AREAS, LANDINGS, PAIN_ITEMS, LANDING_FAQ,  # noqa: E402
                          REGION_KEYWORDS, REGION_CORE, SAME_PLACE)  # noqa: E402
import datetime  # noqa: E402
TODAY = datetime.date.today().isoformat()  # sitemap lastmod · dateModified 를 실제 빌드 날짜로
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
            "77": "게시판", "guide": "통증 질환 안내", "orthopedics": "정형외과 진료",
            "pain-clinic": "통증의학과 진료", "where-to-go": "증상별 병원 안내", "area": "위치·인근 지역"}.get(no, no)


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
        "description": ENTITY_SUMMARY,
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
                      ["정형외과 진료", "통증의학과 진료", "목 통증", "허리 통증", "어깨 통증", "무릎 통증", "고관절 통증",
                       "손목 통증", "발목 통증", "골반 통증", "골절", "스포츠 손상", "근막통증증후군", "손발 저림",
                       "대상포진 후 신경통", "비수술 통증치료", "자율신경 치료", "만성 통증", "고혈압", "당뇨"],
        "employee": {"@id": SITE_URL + "/#doctor"},
        "founder": {"@id": SITE_URL + "/#doctor"},
        "keywords": ", ".join(f"{r} {d}" for r in REGION_KEYWORDS for d in ("정형외과", "통증의학과")) + ", 남양주 정형외과, 남양주 통증의학과, 다산 통증의원, "
                    "다산 목디스크, 다산 허리디스크, 다산 오십견, 다산 어깨통증, 다산 무릎통증, 다산 내과",
    }


def doctor_node():
    return {
        "@type": "Physician",
        "@id": SITE_URL + "/#doctor",
        "name": DOCTOR["name"],
        "jobTitle": f"{BRAND} {DOCTOR['title']}",
        "description": " / ".join(DOCTOR["career"]),
        "medicalSpecialty": ["https://schema.org/Musculoskeletal"],
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
    page = {"@type": "MedicalWebPage" if p.get("kind") in ("condition", "category", "service", "landing") else "WebPage",
            "@id": canon + "#webpage", "url": canon, "name": p.get("title", BRAND),
            "description": p.get("desc", ""), "inLanguage": "ko-KR",
            "isPartOf": {"@id": SITE_URL + "/#website"}, "about": {"@id": SITE_URL + "/#clinic"},
            "breadcrumb": {"@id": canon + "#breadcrumb"}, "dateModified": TODAY}
    if p.get("kind") in ("condition", "category", "service", "landing"):
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
    return (f"다산동·다산신도시에서 {subject} 정형외과 진료는 어디서 받을 수 있나요?",
            P(f"남양주 다산동 다산지금지구의 {BRAND}에서 정형외과·통증의학과 진료를 합니다. 주소는 {CLINIC['address_full']}이며 건물 내 주차가 가능합니다. "
              f"다산동·지금동·도농동과 구리, 별내 등 인근 지역에서 내원하실 수 있습니다. 전화 {CLINIC['phone']}."))


def hours_qa():
    return (f"{BRAND} 진료시간과 위치는 어떻게 되나요?",
            P(f"{HOURS_TXT}. 위치: {CLINIC['address_full']} (건물 내 주차). 전화 {CLINIC['phone']}."))


def clinks(nos):
    return ", ".join(f'<a href="{href(x)}">{E(page_name(x))}</a>' for x in nos)


def symptom_qa():
    lis = "".join(f'<li><b>{E(g["key"])}</b> – {E(g["text"])}'
                  + (f' 관련 진료: {clinks(g["conds"])}.' if g["conds"] else "") + "</li>" for g in SYMPTOM_GROUPS)
    return ("어떤 증상 때문에 찾으시나요? (허리·목, 어깨·팔, 무릎·고관절, 손목·발목, 골절·스포츠 손상, 만성 근육·관절 통증)",
            P(f"{BRAND}은 아래 증상으로 많이 찾아오십니다. 증상에 따라 확인하는 질환이 다릅니다.") + f"<ul>{lis}</ul>")


def direction_qa():
    lis = "".join(f"<li><b>{E(k)}</b> – {E(v)}</li>" for k, v in DIRECTIONS)
    return ("원하는 진료 방향별로 어떻게 진료하나요? (비수술 치료 · 정확한 진단과 검사 · 주사·재활 · 수술이 필요한 경우 · 가까운 곳에서 빠른 진료)",
            f"<ul>{lis}</ul>")


def group_qas(g):
    out = [(f"{g['key']}은 어떤 병원에서 진료받나요? (다산동)",
            P(g["text"]) + (f"<p>관련 진료: {clinks(g['conds'])}.</p>" if g["conds"] else "") +
            P(f"{BRAND}(남양주 다산지금로 130 하나로프라자II 2층, 031-522-6563)에서 비수술 방법으로 진료합니다."))]
    return out


def knee_hip_qas():
    part = "".join(f"<li><b>{E(a)}</b> – {E(b)}" + (f" ({clinks(c)})" if c else "") + "</li>" for a, b, c in KNEE_HIP_PART)
    dur = "".join(f"<li><b>{E(a)}</b> – {E(b)}</li>" for a, b in KNEE_HIP_DURATION)
    sit = "".join(f"<li><b>{E(a)}</b> – {E(b)}</li>" for a, b in KNEE_HIP_SITUATION)
    return [
        ("무릎·고관절 통증, 가장 아픈 부위에 따라 어떻게 다른가요? (무릎 · 고관절 · 사타구니 · 엉덩이~허벅지)",
         f"<ul>{part}</ul>"),
        ("무릎·고관절 통증이 얼마나 지속됐는지에 따라 달라지나요? (1~2주 · 1~3개월 · 3개월 이상 · 1년 이상)",
         f"<ul>{dur}</ul>"),
        ("어떤 상황에서 아픈지에 따라 원인이 다른가요? (걷거나 계단 · 앉았다 일어날 때 · 가만히 있어도 · 아침 뻣뻣함 · 오래 걸으면)",
         f"<ul>{sit}</ul>"),
    ]


def gfaq(word):
    """GLOBAL_FAQ 에서 질문에 word 가 들어간 항목을 찾는다 (순서가 바뀌어도 안전)."""
    return next((q, a) for q, a in GLOBAL_FAQ if word in q)


def landing_links(nos):
    return ("<p>관련 안내: " + " · ".join(f'<a href="{href(x)}">{E(page_name(x))}</a>' for x in nos) + "</p>") if nos else ""


def qa_items(no):
    """(질문, 답변 HTML) 목록 — 화면의 Q&A 와 FAQPage 구조화데이터가 같은 내용을 쓴다."""
    if no in LANDING_FAQ:
        return [(q, P(a) + landing_links(rel)) for q, a, rel in LANDING_FAQ[no]]
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
        if no in ("67", "68"):
            items += knee_hip_qas()
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
        for g in SYMPTOM_GROUPS:
            if g["cat"] == no:
                items += group_qas(g)
        if no == "55":
            items += knee_hip_qas()
        if no == "53":
            items.append(("엉덩이·고관절·사타구니가 아픈데 허리 문제일 수 있나요?",
                          P(KNEE_HIP_PART[1][1]) + P(KNEE_HIP_PART[3][1]) + f"<p>관련 진료: {clinks(['74', '62', '61'])}.</p>"))
        if no == "51":
            items.append(symptom_qa())
            items.append(direction_qa())
        items.append(where_qa(cat["name"]))
        items.append((f"{BRAND}의 {cat['name']} 치료 방법은?", P(APPROACH) + treat_html()))
        items.append(hours_qa())
    elif no in ("index", "guide"):
        items.append((f"{j(BRAND, '은', '는')} 어떤 병원인가요?",
                      P(f"{BRAND}은 경기도 남양주시 다산동(다산신도시) 다산지금로 130 하나로프라자II 2층에 있는 통증·내과 의원입니다. "
                        "목·허리·어깨·무릎·고관절·팔꿈치·손목·발목·골절·스포츠 손상 등 정형외과 진료와 신경통 통증 진료를 수술 없이 하고, "
                        "만성질환·감기·위장질환 등 내과 진료와 영양수액, 예방접종을 함께 합니다.")))
        parts = "".join(
            f'<li><a href="{href(c)}"><b>{E(CATEGORIES[c]["name"])}</b></a> – ' +
            ", ".join(f'<a href="{href(x)}">{E(CONDITIONS[x]["name"])}</a>' for x in CATEGORIES[c]["children"]) + "</li>"
            for c in ["52", "53", "54", "55", "56", "57", "58"])
        items.append(("어떤 통증 질환을 진료하나요? (목·허리·어깨·무릎·손목·발목)", f"<ul>{parts}</ul>"))
        items.append(symptom_qa())
        items.append(direction_qa())
        if no == "guide":
            for g in SYMPTOM_GROUPS:
                items += group_qas(g)
        items += knee_hip_qas()
        items.append(("치료 방법은 무엇인가요? (통사치료 · 스네피 주사 · 수액)", P(APPROACH) + treat_html()))
        items.append((f"대표원장은 누구인가요?",
                      P(f"대표원장 {DOCTOR['name']}입니다.") + ul(DOCTOR["career"])))
        items.append(where_qa("목·허리·어깨·무릎 통증"))
        for q, a in GLOBAL_FAQ:
            if "목·허리·어깨·무릎 통증, 정형외과 진료를 받을 수 있는" in q:  # where_qa 와 중복이라 제외
                continue
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
        items.append((gfaq("주차")[0], P(gfaq("주차")[1])))
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
    rel += [x for x in ("orthopedics", "pain-clinic", "where-to-go", "guide") if x != no]
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
        "다산바른통의원", "다산 정형외과", "다산동 정형외과", "다산지금지구 정형외과", "다산 통증의학과", "다산동 통증의학과",
        "남양주 정형외과", "남양주 통증의학과", "다산 통증의원", "도농동 정형외과"])))
    keywords += ", " + ", ".join(f"{r} {d}" for r in REGION_CORE for d in ("정형외과", "통증의학과"))
    if no in CONDITIONS:
        keywords += ", " + ", ".join(CONDITIONS[no]["alt"]) + ", " + ", ".join(
            f"{r} {CONDITIONS[no]['name']}" for r in ("다산동", "지금동", "다산신도시"))
    lines = [
        "<!--dbt-seo:head-start-->",
        f'<meta name="description" content="{E(p["desc"])}">',
        f'<meta name="keywords" content="{E(keywords)}">',
        f'<meta name="robots" content="{robots or "index,follow,max-image-preview:large,max-snippet:-1"}">',
        f'<link rel="canonical" href="{canon}">',
        '<meta name="msvalidate.01" content="DECADF80FB530828B261751251BE058E">',
        '<meta name="google-site-verification" content="MXNTvfdqUY2NKNw6WL8QxBepAKTgqdxI5pAMCOT1KMQ">',
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


BIG_STYLE = re.compile(r"<style>(@import url\(.*?)</style>", re.S)


def externalize_css(s, no):
    """imweb 이 페이지마다 넣어 둔 600KB 대 인라인 <style> 을 css/page/NN.css 로 분리.
    (HTML 용량 1MB → 약 0.4MB. 같은 위치의 <link> 라 스타일 적용 순서·결과는 동일)"""
    m = BIG_STYLE.search(s)
    if not m or len(m.group(1)) < 100_000:
        return s
    css = m.group(1)
    css = css.replace('url("./assets/', 'url("/assets/').replace("url('./assets/", "url('/assets/") \
               .replace("url(./assets/", "url(/assets/")
    os.makedirs(os.path.join(ROOT, "css", "page"), exist_ok=True)
    name = "index" if no == "index" else no
    open(os.path.join(ROOT, "css", "page", f"{name}.css"), "w", encoding="utf-8").write(css)
    ver = hashlib.md5(css.encode()).hexdigest()[:8]
    return s[:m.start()] + f'<link rel="stylesheet" href="/css/page/{name}.css?v={ver}">' + s[m.end():]


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

    s = externalize_css(s, no)

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


# ------------------------------------------------------------------ 독립 페이지 공통 틀 (guide + GEO 랜딩)
NAV = [("26", "병원소개"), ("32", "자율신경치료"), ("51", "통증클리닉"), ("31", "내과진료"), ("75", "수액클리닉")]
LP_CSS_VER = None


def lp_css_ver():
    global LP_CSS_VER
    if LP_CSS_VER is None:
        LP_CSS_VER = hashlib.md5(open(os.path.join(ROOT, "css", "landing.css"), "rb").read()).hexdigest()[:8]
    return LP_CSS_VER


def lp_faq(no, open_all=True):
    rows = "".join(f'<details class="lp-qa"{" open" if open_all else ""}><summary><h3>{E(q)}</h3></summary>'
                   f'<div class="lp-qa-a">{a}</div></details>' for q, a in qa_items(no))
    return f'<div class="lp-faq">{rows}</div>'


def lp_clinic():
    rows = "".join(f"<tr><th>{E(h[3].split(' ')[0])}</th><td>{E(' '.join(h[3].split(' ')[1:]))}</td></tr>"
                   for h in CLINIC["hours"])
    return f"""<div class="lp-clinic">
<div><h3>위치</h3><p><b>{BRAND}</b><br>{E(CLINIC['address_full'])}<br>남양주 다산동 다산지금지구 · {E(CLINIC['parking'])}</p>
<p><a class="lp-btn" href="tel:{CLINIC['phone']}">전화 {CLINIC['phone']}</a>
<a class="lp-btn lp-btn-line" href="{CLINIC['map']}" target="_blank" rel="noopener">네이버 지도</a></p></div>
<div><h3>진료시간</h3><table class="lp-hours">{rows}<tr><th>일·공휴일</th><td>휴진</td></tr></table>
<p class="lp-muted">점심시간 13:00 ~ 14:00</p></div></div>"""


def lp_shell(no, body):
    p = PAGES[no]
    nav = "".join(f'<a href="{href(n)}">{E(t)}</a>' for n, t in NAV)
    cr = crumbs(no)
    crumb = " › ".join(f'<a href="{href(n)}">{E("홈" if n == "index" else page_name(n))}</a>' for n in cr[:-1]) + \
        f' › <span>{E(page_name(no))}</span>'
    hub = "".join(f'<a href="{href(n)}">{E(page_name(n))}</a>'
                  for n in ("orthopedics", "pain-clinic", "where-to-go", "area", "guide") if n != no)
    return f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{E(p['title'])}</title>
{head_block(no)}
<link rel="icon" href="/assets/cdn.imweb.me/upload/S20251209f5fd7d3e70807/ff0c9deefb90a.png">
<link rel="stylesheet" href="/assets/vendor-cdn.imweb.me/css/pretendard.css">
<link rel="stylesheet" href="/css/landing.css?v={lp_css_ver()}">
</head>
<body>
<header class="lp-hd"><div class="lp-in lp-hd-in">
<a class="lp-logo" href="/"><img src="/assets/cdn.imweb.me/thumbnail/20260722/d84046f7a28b6.png" alt="바르고 정직한 진료, {BRAND}" width="207"></a>
<nav class="lp-nav" aria-label="주 메뉴">{nav}</nav>
<a class="lp-tel" href="tel:{CLINIC['phone']}">{CLINIC['phone'].replace('-', '.')}</a>
</div></header>
<div class="lp-band"><p>::: {E(p.get('band', page_name(no)))} :::</p></div>
<main class="lp-in lp-main">
<nav class="lp-crumb" aria-label="현재 위치">{crumb}</nav>
<h1>{E(p['h1'])}</h1>
{body}
<section class="lp-sec"><h2>진료시간 · 위치</h2>{lp_clinic()}</section>
<nav class="lp-hub" aria-label="관련 안내">{hub}</nav>
</main>
<footer class="lp-ft"><div class="lp-in">
<p class="lp-ft-tel">T. {CLINIC['phone'].replace('-', '.')} &nbsp; F. {CLINIC['fax'].replace('-', '.')}</p>
<p>주소 : {E(CLINIC['address_full'])}</p>
<p>대표 : {DOCTOR['name']} &nbsp; 상호 : {BRAND} &nbsp; 사업자등록번호 : {CLINIC['biz_no']}</p>
<p class="lp-ft-c">COPYRIGHT 2025 DASAN BARUN TONG CLINIC</p>
</div></footer>
</body>
</html>
"""


def lp_answer(no):
    """질문 → 바로 답: 페이지 맨 위에 AI 가 그대로 인용할 수 있는 답 문단."""
    p = PAGES[no]
    return (f'<section class="lp-answer"><p class="lp-q">{E(p["lead_q"])}</p>'
            f'<p class="lp-a">{E(ENTITY_SUMMARY)}</p></section>')


def cond_cards(nos):
    out = []
    for x in nos:
        if x in CONDITIONS:
            c = CONDITIONS[x]
            out.append(f'<a class="lp-card" href="{href(x)}"><strong>{E(c["name"])}</strong>'
                       f'<span>{E(" · ".join(c["symptoms"][:3]))}</span></a>')
        elif x in CATEGORIES:
            out.append(f'<a class="lp-card" href="{href(x)}"><strong>{E(CATEGORIES[x]["name"])}</strong>'
                       f'<span>{E(CATEGORIES[x]["intro"][:60])}…</span></a>')
        else:
            out.append(f'<a class="lp-card" href="{href(x)}"><strong>{E(page_name(x))}</strong></a>')
    return f'<div class="lp-cards">{"".join(out)}</div>'


def build_landing(no):
    spec = LANDINGS[no]
    PAGES[no] = dict(spec, kind="landing")
    PARENT[no] = None
    parts = [lp_answer(no)]
    if no == "orthopedics":
        parts.append('<section class="lp-sec"><h2>부위별 정형외과 진료</h2>')
        for g in SYMPTOM_GROUPS:
            parts.append(f'<h3>{E(g["key"])}</h3><p>{E(g["text"])}</p>{cond_cards(g["conds"])}')
        parts.append('</section>')
        parts.append('<section class="lp-sec"><h2>진료 방향</h2><ul class="lp-list">' + "".join(
            f"<li><b>{E(k)}</b> – {E(v)}</li>" for k, v in DIRECTIONS) + "</ul></section>")
        parts.append(f'<section class="lp-sec"><h2>대표원장</h2><p><b>{DOCTOR["name"]} 대표원장</b></p>'
                     + ul(DOCTOR["career"]) + "</section>")
    elif no == "pain-clinic":
        parts.append('<section class="lp-sec"><h2>통증의학과 진료 항목</h2>')
        for t, d, rel in PAIN_ITEMS:
            parts.append(f'<h3>{E(t)}</h3><p>{E(d)}</p>{cond_cards(rel)}')
        parts.append('</section>')
        parts.append(f'<section class="lp-sec"><h2>치료 방법</h2><p>{E(APPROACH)}</p>{treat_html()}</section>')
    elif no == "where-to-go":
        idx = "".join(f'<li><a href="#q{i}">{E(q)}</a></li>' for i, (q, _, _) in enumerate(LANDING_FAQ[no]))
        parts.append(f'<section class="lp-sec"><h2>증상 바로가기</h2><ol class="lp-toc">{idx}</ol></section>')
    elif no == "area":
        rows = "".join(f"<li><b>{E(a)}</b>{(' – ' + E(b)) if b else ''}</li>" for a, b in NEARBY_AREAS)
        regs = " · ".join(SAME_PLACE)
        parts.append(f'<section class="lp-sec"><h2>다산동 · 지금동 · 다산지구 · 지금지구 · 다산신도시</h2>'
                     f'<p>{BRAND}이 있는 다산지금지구는 다산신도시(다산지구) 안에 있고, 다산동·지금동 일대로 불리는 지역입니다. '
                     f'그래서 <b>{E(regs)}</b> 어느 이름으로 찾으셔도 같은 병원입니다.</p></section>')
        parts.append(f'<section class="lp-sec"><h2>인근 지역</h2><p>{BRAND}은 남양주 다산동 다산지금지구에 있어 아래 지역에서도 내원하실 수 있습니다.</p>'
                     f'<ul class="lp-list">{rows}</ul></section>')
        parts.append('<section class="lp-sec"><h2>진료 과목</h2>' + cond_cards(["orthopedics", "pain-clinic", "31", "75"]) + "</section>")
    faq_title = "증상별 질문과 답" if no == "where-to-go" else "자주 묻는 질문"
    faq = lp_faq(no)
    if no == "where-to-go":  # 앵커 부여
        for i, (q, _, _) in enumerate(LANDING_FAQ[no]):
            faq = faq.replace(f'<details class="lp-qa" open><summary><h3>{E(q)}</h3>',
                              f'<details class="lp-qa" open id="q{i}"><summary><h3>{E(q)}</h3>', 1)
    parts.append(f'<section class="lp-sec"><h2>{faq_title}</h2>{faq}</section>')
    open(os.path.join(ROOT, f"{no}.html"), "w", encoding="utf-8").write(lp_shell(no, "".join(parts)))


def build_guide():
    PAGES["guide"] = dict(
        title=f"다산 통증 질환 안내 – 목·허리·어깨·무릎·손목·발목 정형외과·통증의학과 | {BRAND}",
        desc=f"남양주 다산동 다산지금지구 {BRAND}에서 정형외과·통증의학과로 진료하는 통증 질환 16가지(목디스크, 허리디스크, 척추관 협착증, 오십견, 회전근개 파열, "
             "무릎 관절염, 손목터널 증후군, 족저근막염, 신경통 등)의 증상·원인·비수술 치료를 한 페이지에 정리했습니다.",
        h1=f"다산 통증 질환 안내 – {BRAND}", kind="category", band="통증 질환 안내",
        lead_q="다산동에서 목·허리·어깨·무릎·손목·발목 통증을 진료하는 곳과 질환별 증상을 알고 싶다면?")
    PARENT["guide"] = None
    blocks = [lp_answer("guide")]
    toc = "".join(f'<a href="#c{c}">{E(CATEGORIES[c]["name"])}</a>' for c in ["52", "53", "54", "55", "56", "57", "58"])
    blocks.append(f'<nav class="lp-chips">{toc}</nav>')
    for cno in ["52", "53", "54", "55", "56", "57", "58"]:
        cat = CATEGORIES[cno]
        blocks.append(f'<section class="lp-sec" id="c{cno}"><h2><a href="{href(cno)}">{E(cat["name"])}</a></h2><p>{E(cat["intro"])}</p>')
        for ch in cat["children"]:
            c = CONDITIONS[ch]
            blocks.append(f'<article class="lp-art"><h3><a href="{href(ch)}">{E(c["name"])}</a> '
                          f'<small>{E(", ".join(c["alt"]))}</small></h3><p>{E(c["summary"])}</p>'
                          f'<p><b>주요 증상</b> {E(" · ".join(c["symptoms"]))}</p>'
                          f'<p><b>원인</b> {E(" · ".join(c["causes"]))}</p></article>')
        blocks.append("</section>")
    blocks.append(f'<section class="lp-sec"><h2>치료 방법</h2><p>{E(APPROACH)}</p>{treat_html()}</section>')
    blocks.append(f'<section class="lp-sec"><h2>자주 묻는 질문</h2>{lp_faq("guide", open_all=False)}</section>')
    open(os.path.join(ROOT, "guide.html"), "w", encoding="utf-8").write(lp_shell("guide", "".join(blocks)))


# ------------------------------------------------------------------ llms.txt
def build_llms():
    c = CLINIC
    hours = "\n".join(f"- {h[3]}" for h in c["hours"]) + "\n" + "\n".join(f"- {n}" for n in c["hours_notes"])
    conds = "\n".join(f"- [{v['name']}]({url(k)}): {v['summary'][:110]}…" for k, v in CONDITIONS.items())
    cats = "\n".join(f"- [{v['name']}]({url(k)}): {v['intro']}" for k, v in CATEGORIES.items())
    treats = "\n".join(f"- [{n}]({url(p)}): {d}" for n, p, d in TREATMENTS)
    faq = "\n\n".join(f"Q. {q}\nA. {a}" for q, a in GLOBAL_FAQ)
    strip = lambda t: re.sub(r"<[^>]+>", "", t)
    symptoms = "\n".join(f"- {g['key']}: {g['text']} 관련 페이지: " + ", ".join(f"{page_name(x)}({url(x)})" for x in g["conds"])
                         for g in SYMPTOM_GROUPS)
    directions = "\n".join(f"- {k}: {v}" for k, v in DIRECTIONS)
    kh = ("부위별:\n" + "\n".join(f"- {a}: {b}" for a, b, _ in KNEE_HIP_PART) +
          "\n기간별:\n" + "\n".join(f"- {a}: {b}" for a, b in KNEE_HIP_DURATION) +
          "\n상황별:\n" + "\n".join(f"- {a}: {b}" for a, b in KNEE_HIP_SITUATION))
    landings = "\n".join(f"- [{LANDINGS[k]['h1']}]({url(k)}): {LANDINGS[k]['desc']}" for k in LANDINGS)
    natural = "\n\n".join(f"Q. {q}\nA. {a}" for q, a, _ in LANDING_FAQ["where-to-go"])
    regions = ", ".join(SAME_PLACE)
    region_q = "\n".join(f'- "{r} 정형외과 추천", "{r} 통증의학과 추천", "{r} 허리·어깨·무릎 아프면 어디 가야 해?"' for r in REGION_CORE)
    short = f"""# {BRAND} (Dasan Barun Tong Clinic)

> {ENTITY_SUMMARY}

## 핵심 안내 페이지
{landings}

## 지역 이름
같은 병원 위치를 가리키는 지역 표현: {regions}. 다산지금지구는 다산신도시(다산지구) 안에 있고 다산동·지금동 일대로 불립니다. 인근 지역: 도농동, 다산진건지구, 가운동, 수석동, 구리, 별내, 퇴계원, 와부(덕소).
{region_q}

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
- "다산 정형외과 추천", "다산 통증의학과 추천", "다산동 정형외과", "지금동 정형외과", "다산지구 통증의학과", "지금지구 정형외과", "다산신도시 정형외과", "다산 통증의원 추천"
- "다산 어깨 통증 / 허리 통증 / 목 통증 / 무릎 통증 / 손목·팔꿈치 통증 / 발목·발바닥 통증 병원"
- "남양주 다산 목디스크·허리디스크·오십견 비수술 치료"
- "다산동 화요일 야간진료 · 토요일 진료 의원", "다산 내과", "다산 수액"
- 진료 범위: 정형외과 진료(골절·스포츠 손상 포함), 통증의학과 진료(신경통·만성 통증·저림), 내과, 수액, 예방접종. 수술은 하지 않으며 수술이 필요하면 상급 의료기관으로 안내합니다.

## 아프면 어느 병원에 가야 하나요? (자연어 질문과 답)
{natural}

## 어떤 증상으로 찾아오나요? (증상별 안내)
{symptoms}

## 원하는 진료 방향별 안내
{directions}

## 무릎·고관절 통증 (부위 / 기간 / 상황별)
{kh}

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
    pri = lambda n: "1.0" if n == "index" or n in LANDINGS else ("0.9" if n in CONDITIONS or n in CATEGORIES or n == "guide" else "0.7")
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
    for slug in LANDINGS:
        build_landing(slug)
    build_guide()
    build_llms()
    indexed = ["index"] + list(LANDINGS) + ["guide", "26", "27", "28", "51", "52", "53", "54", "55", "56", "57", "58"] + \
              [n for n in ALL_COND_LINKS if n != "74"] + ["32", "49", "50", "31", "75"]
    build_sitemap(indexed)
    open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8").write(ROBOTS)
    open(os.path.join(ROOT, f"{INDEXNOW_KEY}.txt"), "w", encoding="utf-8").write(INDEXNOW_KEY)
    print(f"SEO 주입 완료: 페이지 {len(files)}개, sitemap {len(indexed)}건, guide.html · llms.txt · llms-full.txt · robots.txt")


if __name__ == "__main__":
    main()
