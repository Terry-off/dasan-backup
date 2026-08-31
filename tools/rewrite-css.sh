#!/bin/bash
# 내려받은 CSS 안의 URL 을 로컬 상대경로로 재작성 (반복 실행해도 안전)
set -e
cd "$(dirname "$0")/.."
find assets -type f \( -name '*.css' -o -name '*.cm' \) | while read -r f; do
  rel="${f#assets/}"
  depth=$(printf '%s' "$rel" | awk -F/ '{print NF-1}')
  up=""; i=0; while [ $i -lt $depth ]; do up="../$up"; i=$((i+1)); done
  hostup=""; j=1; while [ $j -lt $depth ]; do hostup="../$hostup"; j=$((j+1)); done
  perl -0777 -i -pe "
    s{https?://cdn\.imweb\.me/}{${up}cdn.imweb.me/}g;
    s{https?://cdn-optimized\.imweb\.me/}{${up}cdn-optimized.imweb.me/}g;
    s{https?://vendor-cdn\.imweb\.me/}{${up}vendor-cdn.imweb.me/}g;
    s{https?://static\.imweb\.me/}{${up}static.imweb.me/}g;
    s{https?://fonts\.gstatic\.com/}{${up}fonts.gstatic.com/}g;
    s{https?://fonts\.googleapis\.com/}{${up}fonts.googleapis.com/}g;
    s{//fonts\.googleapis\.com/}{${up}fonts.googleapis.com/}g;
    s{https?://(?:www\.)?dasanbaruntong\.(?:imweb\.me|com)/}{${up}dasanbaruntong.imweb.me/}g;
    s{url\((['\"]?)/(?!/)}{url(\$1${hostup}}g;
    s{\\@import\s+(['\"])/(?!/)}{\@import \$1${hostup}}g;
  " "$f"
done
echo "CSS 재작성 완료: $(find assets -type f \( -name '*.css' -o -name '*.cm' \) | wc -l) 개"
