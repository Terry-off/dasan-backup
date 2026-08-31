#!/bin/bash
# 단일 URL 을 assets/<host>/<path> 로 내려받음 (쿼리스트링 제거)
# 사용: bash tools/fetch.sh "https://cdn.imweb.me/..."   (저장소 루트에서 실행)
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
url="$1"
clean="${url%%\?*}"
host=$(printf '%s' "$clean" | sed -E 's|^https?://([^/]+).*|\1|')
path=$(printf '%s' "$clean" | sed -E 's|^https?://[^/]+||')
[ -z "$path" ] && path="/index"
out="assets/$host$path"
[ -f "$out" ] && exit 0
mkdir -p "$(dirname "$out")"
code=$(curl -s -L -A "$UA" -e "https://dasanbaruntong.imweb.me/" -w '%{http_code}' -o "$out" "$url")
if [ "$code" != "200" ]; then echo "FAIL $code $url" >> tools/lists/fetch_fail.log; rm -f "$out"; fi
