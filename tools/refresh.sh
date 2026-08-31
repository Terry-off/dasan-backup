#!/bin/bash
# ============================================================
#  원본 사이트(imweb)에서 전체를 다시 가져와 백업 사이트를 재생성
#
#  사용법:  bash tools/refresh.sh     (저장소 루트에서 실행, Git Bash)
#
#  주의: data/site-config.json (팝업 · 수정내용) 은 건드리지 않습니다.
# ============================================================
set -e
cd "$(dirname "$0")/.."

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
BASE="https://dasanbaruntong.imweb.me"
PAGES="26 27 28 31 32 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77"

mkdir -p tools/source-pages tools/lists
rm -f tools/lists/fetch_fail.log

echo "=== [1/6] 원본 페이지 다운로드 ==="
curl -s -L -A "$UA" "$BASE/" -o "tools/source-pages/index.html"
for p in $PAGES; do
  curl -s -L -A "$UA" "$BASE/$p" -o "tools/source-pages/$p.html"
  printf '.'
done
for s in 1 2; do curl -s -L -A "$UA" "$BASE/shop_view/$s" -o "tools/source-pages/shop_view_$s.html"; done
echo " 완료"

echo "=== [2/6] 에셋 URL 추출 ==="
cat tools/source-pages/*.html > tools/lists/_all.tmp
grep -ohE 'https?://[A-Za-z0-9._-]*imweb\.me/[^"'"'"' )<>\\]*' tools/lists/_all.tmp \
  | sed 's/&amp;/\&/g' | sort -u \
  | grep -vE 'crm-onsite|crm\.imweb' > tools/lists/urls_abs.txt
grep -ohE '(src|href|data-src|data-original)=["'"'"'](/[^"'"'"']*)["'"'"']' tools/lists/_all.tmp \
  | sed -E 's/^[a-z-]+=["'"'"']//; s/["'"'"']$//' | sed 's/&amp;/\&/g' \
  | grep -E '\.(css|cm|js|png|jpe?g|gif|svg|ico|woff2?|ttf|eot|mp4|webm|webp)(\?|$)' \
  | grep -v '^//' | sed "s|^|$BASE|" | sort -u > tools/lists/urls_rel.txt
{ cat tools/lists/urls_abs.txt tools/lists/urls_rel.txt
  echo "$BASE/css/custom.cm"
  echo "$BASE/common/img/ParticleSmoke.png"
  echo "$BASE/common/img/app_login.png"
  echo "https://vendor-cdn.imweb.me/css/pretendard.css"
  echo "https://static.imweb.me/brand-scope/bs.umd.js"
  echo "https://static.imweb.me/analytics-sdk/a7s.umd.js"
  echo "https://static.imweb.me/design-system/magnet/magnet-shell.js"
  echo "https://static.imweb.me/design-system/magnet/magnet.js"
  echo "https://static.imweb.me/design-system/magnet/magnet-node-webcomponent.js"
  echo "https://static.imweb.me/vendor/js/deploy_strategy.js"
  echo "/_/oms-customer-front-office/app-DVxalUQO.js"
  echo "https://fonts.googleapis.com/earlyaccess/nanumgothic.css"
} | sort -u > tools/lists/dl_all.txt
rm -f tools/lists/_all.tmp
echo "대상: $(wc -l < tools/lists/dl_all.txt) 개"

echo "=== [3/6] 에셋 다운로드 ==="
xargs -P 8 -I{} bash tools/fetch.sh "{}" < tools/lists/dl_all.txt
echo "완료 (실패 $(wc -l < tools/lists/fetch_fail.log 2>/dev/null || echo 0) 건)"

echo "=== [4/6] CSS 안의 폰트 · 이미지 추가 다운로드 ==="
> tools/lists/css_abs_urls.txt
find assets -type f \( -name '*.css' -o -name '*.cm' \) | while read -r f; do
  host=$(printf '%s' "${f#assets/}" | cut -d/ -f1)
  dir=$(dirname "${f#assets/$host}")
  grep -ohE 'url\(["'"'"']?[^)"'"'"']+' "$f" 2>/dev/null | sed -E 's/^url\(["'"'"']?//' | while read -r u; do
    case "$u" in
      data:*|"") continue ;;
      http:*|https:*) echo "$u" >> tools/lists/css_abs_urls.txt ;;
      //*) echo "https:$u" >> tools/lists/css_abs_urls.txt ;;
      /*)  echo "https://$host$u" >> tools/lists/css_abs_urls.txt ;;
      *)   norm=$(printf '%s' "$dir/$u" | awk -F/ '{n=0;for(i=1;i<=NF;i++){if($i==".."){if(n>0)n--}else if($i!="."&&$i!=""){a[++n]=$i}}s="";for(i=1;i<=n;i++)s=s"/"a[i];print s}')
           echo "https://$host$norm" >> tools/lists/css_abs_urls.txt ;;
    esac
  done
done
sort -u tools/lists/css_abs_urls.txt -o tools/lists/css_abs_urls.txt
xargs -P 8 -I{} bash tools/fetch.sh "{}" < tools/lists/css_abs_urls.txt
# gstatic 폰트 2차 수집
grep -rhoE 'https://fonts\.gstatic\.com/[^)]*' assets/fonts.googleapis.com 2>/dev/null | sort -u > tools/lists/gstatic.txt || true
[ -s tools/lists/gstatic.txt ] && xargs -P 8 -I{} bash tools/fetch.sh "{}" < tools/lists/gstatic.txt

echo "=== [5/6] CSS 경로 재작성 + JS 패치 ==="
bash tools/rewrite-css.sh
bash tools/patch-assets.sh

echo "=== [6/6] 페이지 빌드 ==="
bash tools/build.sh

echo
echo "재생성 완료. 이제 git add / commit / push 하세요."
