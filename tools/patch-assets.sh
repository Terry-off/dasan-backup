#!/bin/bash
# ============================================================
#  내려받은 imweb 에셋(JS)에 백업사이트용 최소 패치 적용
#  (에셋을 다시 내려받았다면 이 스크립트를 다시 실행하세요)
# ============================================================
set -e
cd "$(dirname "$0")/.."
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
S="assets/dasanbaruntong.imweb.me/js/site_section.js"

echo "[1/3] site_section.js 원본 재다운로드"
curl -s -L -A "$UA" "https://dasanbaruntong.imweb.me/js/site_section.js" -o "$S"

echo "[2/3] 배경 유튜브 영상 자동재생 패치"
# (a) playerVars 에 mute/playsinline 추가 -> 브라우저 음소거 자동재생 정책 통과
perl -0777 -i -pe "s/\{'autoplay': 1, 'autohide': 1/{'autoplay': 1, 'mute': 1, 'playsinline': 1, 'autohide': 1/g" "$S"
# (b) onPlayerReady 이후 재생될 때까지 재시도 (원본 도메인이 아니면 첫 재생이 무시되는 문제 대응)
perl -0777 -i -pe "s/(\t\ttv\.loadVideoById\(vid\[currVid\]\);\n\t\ttv\.mute\(\);)/\$1\n\t\t\/* BACKUP_FORCE_PLAY *\/ (function(){var n=0,t=setInterval(function(){n++;try{tv.mute();tv.playVideo();}catch(e){}if(n>12||(tv.getPlayerState\&\&tv.getPlayerState()===1))clearInterval(t);},600);})();/" "$S"
grep -q "BACKUP_FORCE_PLAY" "$S" && echo "  OK: 자동재생 재시도 삽입" || { echo "  경고: 자동재생 패치 실패"; exit 1; }

echo "[3/3] JS 내 하드코딩 루트경로 -> 로컬 assets 경로"
perl -0777 -i -pe "s{'/common/img/ParticleSmoke\.png'}{'assets/dasanbaruntong.imweb.me/common/img/ParticleSmoke.png'}g" "$S"
find assets -name '*.js' -type f -print0 | xargs -0 perl -0777 -i -pe "s{(['\"])/images/circle-warning\.png}{\$1assets/dasanbaruntong.imweb.me/images/circle-warning.png}g" 2>/dev/null || true

echo "에셋 패치 완료"
