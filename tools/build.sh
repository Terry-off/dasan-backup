#!/bin/bash
# ============================================================
#  다산바른통의원 백업 사이트 빌드
#  tools/source-pages/*.html (imweb 원본 미러) -> 루트의 정적 HTML
#
#  사용법:  bash tools/build.sh      (저장소 루트에서 실행)
# ============================================================
set -e
cd "$(dirname "$0")/.."

PAGES="26 27 28 31 32 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77"

echo "[1/2] 기존 생성물 정리"
rm -f index.html shop_view_1.html shop_view_2.html
for n in $PAGES; do rm -f "$n.html"; done

echo "[2/2] 페이지 변환"
for src in tools/source-pages/*.html; do
  base=$(basename "$src" .html)
  perl -0777 -pe '
    # ---- 원본 imweb 팝업 블록 제거 (자체 팝업 시스템으로 대체) ----
    s{<div class="popup-banner-wrap">.*?(?=<div id="site_alarm_slidemenu_container")}{}s;

    # ---- 외부 추적/분석/CRM 스크립트 제거 ----
    s{<script[^>]*\bsrc=["\x27][^"\x27]*(?:crm-onsite|crm\.imweb|wcslog|googletagmanager|google-analytics|connect\.facebook|channel\.io)[^"\x27]*["\x27][^>]*>\s*</script>}{}gs;
    s{<script[^>]*>(?:(?!</script>).)*?(?:crm-onsite\.imweb\.me|static-cdn\.crm\.imweb\.me|wcs\.naver\.net|_wcs_do|gtag\()(?:(?!</script>).)*?</script>}{}gs;

    # ---- CDN 호스트 -> 로컬 assets (모듈 스펙파이어 호환 위해 ./ 접두) ----
    s{https://cdn\.imweb\.me/}{./assets/cdn.imweb.me/}g;
    s{https://cdn-optimized\.imweb\.me/}{./assets/cdn-optimized.imweb.me/}g;
    s{https://vendor-cdn\.imweb\.me/}{./assets/vendor-cdn.imweb.me/}g;
    s{https?://static\.imweb\.me/}{./assets/static.imweb.me/}g;
    s{https?://fonts\.googleapis\.com/}{./assets/fonts.googleapis.com/}g;
    s{//fonts\.googleapis\.com/}{./assets/fonts.googleapis.com/}g;
    s{https?://fonts\.gstatic\.com/}{./assets/fonts.gstatic.com/}g;

    # ---- 자사 도메인 절대주소 -> 루트 상대주소 ----
    s{https://(?:www\.)?dasanbaruntong\.(?:imweb\.me|com)/}{/}g;
    s{https://(?:www\.)?dasanbaruntong\.(?:imweb\.me|com)(?![\w./])}{/}g;

    # ---- 루트 상대 에셋 -> 로컬 assets ----
    s{(["\x27(])/(js|css|common|_|images|fonts)/}{$1./assets/dasanbaruntong.imweb.me/$2/}g;

    # ---- 내부 페이지 링크 -> .html ----
    s{(href=["\x27])/(\d+)/\?[^"\x27]*}{$1$2.html}g;
    s{(href=["\x27])/shop_view/(\d+)}{$1shop_view_$2.html}g;
    s{(href=["\x27])/(\d+)(?=["\x27?\#])}{$1$2.html}g;
    s{(href=["\x27])/(?=["\x27])}{$1index.html}g;

    # ---- canonical 제거 + 색인 방지 (원본 사이트 SEO 보호) ----
    s{<link[^>]*rel=["\x27]canonical["\x27][^>]*>}{<meta name="robots" content="noindex, nofollow">}gi;

    # ---- 백업 사이트 런타임 주입 ----
    s{</head>}{<link rel="stylesheet" href="./css/backup.css">\n<script src="./js/backup-runtime.js"></script>\n</head>}i;
  ' "$src" > "$base.html"
done

echo "완료: $(ls -1 *.html | wc -l) 개 페이지"
