# 다산바른통의원 백업 사이트

원본 홈페이지 <https://dasanbaruntong.imweb.me> 를 **화면 그대로** 복사해 GitHub Pages 에서
독립적으로 운영할 수 있게 만든 정적 백업 사이트입니다.

- 전체 **38개 페이지** (메인 + 하위 37개) 미러링
- 이미지 · CSS · JS · 웹폰트 **전부 저장소 안에 포함** (외부 imweb 서버에 의존하지 않음)
- **PC · 모바일 모두** 원본과 동일하게 표시
- 관리자 페이지에서 **사진 · 텍스트 수정** 과 **팝업 등록 / 삭제 / 기간 설정**

---

## 1. 사이트 주소

| 구분 | 주소 |
|---|---|
| 백업 사이트 | <https://terry-off.github.io/dasan-backup/> |
| 관리자 페이지 | <https://terry-off.github.io/dasan-backup/admin/> |
| GitHub 저장소 | <https://github.com/Terry-off/dasan-backup> |

<details>
<summary>처음 설치할 때 했던 작업 (참고용)</summary>

### GitHub 에 올리고 사이트 주소 만들기

### 1-1. 저장소 만들기

1. GitHub 로그인 → 우측 상단 **+** → **New repository**
2. Repository name: `dasan-backup`
3. **Public** 선택 (Private 은 GitHub Pages 유료 요금제에서만 가능)
4. README 등 다른 항목은 체크하지 말고 **Create repository**

### 1-2. 파일 올리기

이 폴더에서 Git Bash 를 열고 아래를 실행합니다.


```bash
git init
git branch -M main
git add -A
git commit -m "다산바른통의원 백업 사이트 최초 등록"
git remote add origin https://github.com/Terry-off/dasan-backup.git
git push -u origin main
```

> 용량이 약 300MB 라 첫 업로드는 몇 분 걸릴 수 있습니다.

### 1-3. GitHub Pages 켜기

1. 저장소 페이지 → **Settings** → 왼쪽 **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / 폴더: **/ (root)** → **Save**
4. 1~2분 뒤 아래 주소로 접속됩니다.

```
https://terry-off.github.io/dasan-backup/
```

관리자 페이지 주소는 여기에 `admin/` 을 붙이면 됩니다.

```
https://terry-off.github.io/dasan-backup/admin/
```

</details>

---

## 2. 관리자 토큰 만들기 (최초 1회)

관리자 페이지에서 수정한 내용을 GitHub 에 바로 저장하려면 토큰이 필요합니다.

1. GitHub → 우측 상단 프로필 → **Settings**
2. 왼쪽 맨 아래 **Developer settings**
3. **Personal access tokens** → **Fine-grained tokens** → **Generate new token**
4. 설정
   - Token name: 아무거나 (예: `dasan-backup-admin`)
   - Expiration: 원하는 기간 (예: 1년)
   - Repository access: **Only select repositories** → 위에서 만든 백업 저장소 선택
   - Permissions → Repository permissions → **Contents** → **Read and write**
5. **Generate token** → 나온 토큰 문자열을 복사

관리자 페이지 → **연결 설정** 탭에 아래처럼 넣고 **연결 확인** 을 누르면 끝입니다.

| 항목 | 값 |
|---|---|
| GitHub 사용자명 | `Terry-off` |
| 저장소 이름 | `dasan-backup` |
| 브랜치 | `main` |
| 액세스 토큰 | 위에서 복사한 토큰 |
(토큰은 그 브라우저에만 저장되고 외부로 전송되지 않습니다.)

---

## 3. 사용 방법

### 팝업 등록 · 삭제 · 기간 설정

관리자 페이지 → **팝업 관리**

| 기능 | 설명 |
|---|---|
| **+ 팝업 등록** | 이미지를 올리거나 글만 써서 팝업을 새로 만듭니다 |
| **노출 시작일 / 종료일** | 정해두면 그 기간에만 자동으로 뜨고, 지나면 자동으로 사라집니다 (비워두면 계속 노출) |
| **노출할 페이지** | 메인화면만, 또는 특정 페이지, 또는 모든 페이지 |
| **가로/세로 위치, 크기** | PC 화면 기준. 모바일에서는 자동으로 화면 가운데 정렬됩니다 |
| **"보지 않음" 기간** | 방문자가 "오늘 하루 보지 않음"을 눌렀을 때 며칠간 숨길지 |
| **사용 중지 / 삭제** | 잠시 끄거나 완전히 지웁니다 |

### 사진 · 텍스트 수정

관리자 페이지 → **사진 · 텍스트 수정**

1. 위쪽에서 **페이지를 선택**합니다.
2. **텍스트 수정** 또는 **사진 교체** 모드를 고릅니다.
3. 아래 미리보기에서 **바꿀 글자나 사진을 클릭**합니다.
4. 편집창에서 내용을 바꾸고 **확인**.
5. 오른쪽 위 **저장하고 사이트에 반영** 클릭 → 약 1분 뒤 실제 사이트에 적용됩니다.

> 원본 HTML 은 건드리지 않습니다. 수정 내용은 `data/site-config.json` 에만 쌓이므로
> **이 페이지 수정 되돌리기** 버튼으로 언제든 원상 복구할 수 있습니다.

---

## 4. 폴더 구조

```
/
├─ index.html, 26.html … 77.html   백업된 페이지 (38개)
├─ 404.html                        없는 주소로 들어왔을 때
├─ assets/                         원본 이미지 · CSS · JS · 웹폰트 (약 280MB)
│   ├─ cdn.imweb.me/               사진 등 콘텐츠 이미지
│   ├─ vendor-cdn.imweb.me/        imweb 공통 CSS/JS/폰트
│   ├─ dasanbaruntong.imweb.me/    사이트 전용 CSS/JS
│   ├─ static.imweb.me/            imweb 위젯 스크립트
│   └─ fonts.googleapis.com/ …     웹폰트
├─ css/backup.css                  팝업 · 편집모드 스타일
├─ js/backup-runtime.js            수정내용 적용 + 팝업 표시
├─ data/
│   ├─ site-config.json            팝업 / 수정내용 (관리자가 저장하는 파일)
│   └─ uploads/                    관리자가 올린 이미지
├─ admin/                          관리자 페이지
├─ .nojekyll                       (GitHub Pages 필수 — 지우지 마세요)
└─ tools/                          재생성용 스크립트 (사이트에는 영향 없음)
    ├─ refresh.sh                  원본에서 전체 다시 가져오기
    ├─ build.sh                    페이지만 다시 빌드
    ├─ patch-assets.sh             imweb JS 패치
    ├─ rewrite-css.sh              CSS 경로 재작성
    ├─ serve.ps1                   내 PC에서 미리보기
    └─ source-pages/               내려받은 imweb 원본 HTML
```

---

## 5. 내 PC 에서 미리보기

```bash
powershell -ExecutionPolicy Bypass -File tools/serve.ps1
```

실행 후 브라우저에서 <http://localhost:8899> 로 접속합니다. (관리자: <http://localhost:8899/admin/>)

---

## 6. 원본 홈페이지가 바뀌었을 때 다시 가져오기

원본 imweb 사이트를 수정한 뒤, 백업 사이트도 최신으로 맞추려면 Git Bash 에서:

```bash
bash tools/refresh.sh
```

원본 페이지 · 이미지 · CSS · JS 를 모두 다시 내려받아 재생성합니다.
`data/site-config.json` (팝업 · 수정내용) 은 그대로 유지됩니다. 끝나면:

```bash
git add -A
git commit -m "원본 사이트 최신 내용 반영"
git push
```

---

## 7. 알아두실 점

- 이 백업 사이트는 **검색엔진 색인을 막아두었습니다** (`noindex`). 원본 사이트가 검색 순위에서
  불이익을 받지 않도록 하기 위함입니다. 백업 사이트도 검색에 노출하고 싶다면
  `tools/build.sh` 의 `noindex, nofollow` 부분을 지우고 다시 빌드하세요.
- **동작하지 않는 기능**: 회원 로그인, 장바구니 · 결제, 게시판 글쓰기, 예약 신청 등
  imweb 서버가 필요한 기능. 백업 사이트는 **보여주기 전용**입니다.
- 메인화면 배경 영상은 유튜브 영상(`YsBSBZKxxA4`)을 그대로 사용합니다. 유튜브에서 영상을
  삭제하거나 비공개로 바꾸면 배경이 비어 보일 수 있습니다.
- 관리자 페이지는 주소만 알면 누구나 열 수 있지만, **토큰이 없으면 아무것도 바꿀 수 없습니다.**
  공용 PC 에서 작업했다면 **연결 설정 → 토큰 지우기** 를 눌러 주세요.
