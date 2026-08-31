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

# 실제 서비스 도메인 (canonical / og:url / sitemap 에 사용)
SITE_URL="https://www.dasanbaruntong.com"

echo "[1/3] 기존 생성물 정리"
rm -f index.html shop_view_1.html shop_view_2.html sitemap.xml robots.txt
rm -rf shop_view
for n in $PAGES; do rm -f "$n.html"; done

echo "[2/3] 페이지 변환"
for src in tools/source-pages/*.html; do
  base=$(basename "$src" .html)

  # 이 페이지의 정식 주소(canonical) 계산 — 원본 imweb 의 URL 형식을 그대로 유지
  case "$base" in
    index)         CANON="$SITE_URL/" ;;
    shop_view_[0-9]*) CANON="$SITE_URL/shop_view/${base#shop_view_}" ;;
    *)             CANON="$SITE_URL/$base" ;;
  esac
  export CANON

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

    # ---- canonical / og:url 을 실제 서비스 주소로 재설정 ----
    #  (도메인 치환 과정에서 상대주소가 되어버리므로 여기서 절대주소로 되돌린다)
    s{<link[^>]*rel=["\x27]canonical["\x27][^>]*>}{}gi;
    s{<meta[^>]*name=["\x27]robots["\x27][^>]*>}{}gi;
    s{(<meta[^>]*property=["\x27]og:url["\x27][^>]*content=["\x27])[^"\x27]*}{$1$ENV{CANON}}gi;

    # ---- canonical + 백업 사이트 런타임 주입 ----
    s{</head>}{<link rel="canonical" href="$ENV{CANON}">\n<link rel="stylesheet" href="./css/backup.css">\n<script src="./js/backup-runtime.js"></script>\n</head>}i;
  ' "$src" > "$base.html"
done

echo "[3/3] 원본 URL 호환 · SEO 파일 생성"

# 원본의 /shop_view/1 형식 주소를 살리기 위한 이동 페이지
mkdir -p shop_view
for n in 1 2; do
  cat > "shop_view/$n.html" <<HTML
<!DOCTYPE html>
<html lang="ko"><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/shop_view_$n.html">
<link rel="canonical" href="$SITE_URL/shop_view/$n">
<title>이동 중…</title></head>
<body><script>location.replace('/shop_view_$n.html');</script>
<p><a href="/shop_view_$n.html">페이지로 이동</a></p></body></html>
HTML
done

# robots.txt
cat > robots.txt <<TXT
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: $SITE_URL/sitemap.xml
TXT

# sitemap.xml (원본과 동일한 URL 형식)
{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  echo "  <url><loc>$SITE_URL/</loc><priority>1.0</priority></url>"
  for n in $PAGES; do
    echo "  <url><loc>$SITE_URL/$n</loc><priority>0.8</priority></url>"
  done
  for n in 1 2; do
    echo "  <url><loc>$SITE_URL/shop_view/$n</loc><priority>0.5</priority></url>"
  done
  echo '</urlset>'
} > sitemap.xml

echo "완료: 페이지 $(ls -1 *.html | wc -l) 개, sitemap $(grep -c '<loc>' sitemap.xml) 건"
