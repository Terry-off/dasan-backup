/* ============================================================
 *  다산바른통의원 백업사이트 관리자
 * ============================================================ */
(function () {
  'use strict';

  /* ---------------- 페이지 목록 ---------------- */
  var PAGES = [
    ['index.html', '홈 (메인화면)'],
    ['26.html', '병원소개 (26)'],
    ['76.html', '인사말 (76)'],
    ['27.html', '의료진 (27)'],
    ['28.html', '진료안내 (28)'],
    ['32.html', '자율신경치료 (32)'],
    ['49.html', '통사치료 (49)'],
    ['50.html', '스네피(SNEPI)주사 (50)'],
    ['51.html', '통증클리닉 (51)'],
    ['52.html', '통증클리닉 › 목 통증 (52)'],
    ['59.html', '통증클리닉 › 목디스크 (59)'],
    ['60.html', '통증클리닉 › 일자목ㆍ거북목 (60)'],
    ['53.html', '통증클리닉 › 허리ㆍ골반 통증 (53)'],
    ['61.html', '통증클리닉 › 허리디스크 (61)'],
    ['62.html', '통증클리닉 › 척추관 협착증 (62)'],
    ['63.html', '통증클리닉 › 척추측만증 (63)'],
    ['54.html', '통증클리닉 › 어깨 통증 (54)'],
    ['64.html', '통증클리닉 › 회전근개파열 (64)'],
    ['65.html', '통증클리닉 › 석회화건염 (65)'],
    ['66.html', '통증클리닉 › 오십견 (66)'],
    ['55.html', '통증클리닉 › 무릎 통증 (55)'],
    ['67.html', '통증클리닉 › 반월판연골 손상 (67)'],
    ['68.html', '통증클리닉 › 퇴행성 관절염 (68)'],
    ['56.html', '통증클리닉 › 상지 통증 (56)'],
    ['70.html', '통증클리닉 › 테니스ㆍ골프 엘보 (70)'],
    ['69.html', '통증클리닉 › 손목터널 증후군 (69)'],
    ['57.html', '통증클리닉 › 발ㆍ발목 통증 (57)'],
    ['71.html', '통증클리닉 › 급성발목염좌 (71)'],
    ['72.html', '통증클리닉 › 족저근막염 (72)'],
    ['73.html', '통증클리닉 › 아킬레스건염 (73)'],
    ['58.html', '통증클리닉 › 신경통 (58)'],
    ['74.html', '통증클리닉 › 신경통 상세 (74)'],
    ['31.html', '내과진료 (31)'],
    ['75.html', '수액클리닉 (75)'],
    ['77.html', '게시판 (77)'],
    ['shop_view_1.html', '상품 상세 1'],
    ['shop_view_2.html', '상품 상세 2']
  ];

  var CONFIG_PATH = 'data/site-config.json';

  /* ---------------- 상태 ---------------- */
  var cfg = { version: 1, popups: [], overrides: {} };
  var baseCfgJson = '';
  var pendingUploads = {};   // repoPath -> base64 (헤더 제외)
  var dirty = false;
  var editing = { key: null, original: null, mode: 'text' };
  var popupDraft = null;
  var popupDraftIndex = -1;

  /* ---------------- 유틸 ---------------- */
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  function toast(msg, isErr) {
    var t = $('#toast');
    t.textContent = msg;
    t.className = 'toast' + (isErr ? ' err' : '');
    t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.hidden = true; }, isErr ? 6000 : 3000);
  }

  function busy(on, text) {
    $('#busy').hidden = !on;
    if (text) $('#busyText').textContent = text;
  }

  function setDirty(v) {
    dirty = v;
    $('#dirtyFlag').hidden = !v;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function b64FromString(str) {
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function pageLabel(file) {
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i][0] === file) return PAGES[i][1];
    return file;
  }

  /* ---------------- 설정(GitHub) ---------------- */
  function loadSettings() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem('dbt_admin_settings') || '{}'); } catch (e) { s = {}; }
    $('#cfgOwner').value = s.owner || '';
    $('#cfgRepo').value = s.repo || '';
    $('#cfgBranch').value = s.branch || 'main';
    $('#cfgToken').value = s.token || '';
    return s;
  }

  function saveSettings() {
    var s = {
      owner: $('#cfgOwner').value.trim(),
      repo: $('#cfgRepo').value.trim(),
      branch: $('#cfgBranch').value.trim() || 'main',
      token: $('#cfgToken').value.trim()
    };
    localStorage.setItem('dbt_admin_settings', JSON.stringify(s));
    return s;
  }

  function settings() {
    return {
      owner: $('#cfgOwner').value.trim(),
      repo: $('#cfgRepo').value.trim(),
      branch: $('#cfgBranch').value.trim() || 'main',
      token: $('#cfgToken').value.trim()
    };
  }

  /* ---------------- GitHub API ---------------- */
  function ghHeaders(s) {
    return {
      'Authorization': 'Bearer ' + s.token,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    };
  }

  function ghUrl(s, path) {
    return 'https://api.github.com/repos/' + encodeURIComponent(s.owner) +
      '/' + encodeURIComponent(s.repo) + '/contents/' + path;
  }

  function ghGetSha(s, path) {
    return fetch(ghUrl(s, path) + '?ref=' + encodeURIComponent(s.branch),
      { headers: ghHeaders(s), cache: 'no-store' })
      .then(function (r) {
        if (r.status === 404) return null;
        if (!r.ok) throw new Error('조회 실패 (' + r.status + ')');
        return r.json().then(function (j) { return j.sha; });
      });
  }

  function ghPut(s, path, contentB64, message) {
    return ghGetSha(s, path).then(function (sha) {
      var body = { message: message, content: contentB64, branch: s.branch };
      if (sha) body.sha = sha;
      return fetch(ghUrl(s, path), {
        method: 'PUT', headers: ghHeaders(s), body: JSON.stringify(body)
      }).then(function (r) {
        if (!r.ok) {
          return r.text().then(function (t) {
            throw new Error(path + ' 저장 실패 (' + r.status + ') ' + t.slice(0, 200));
          });
        }
        return r.json();
      });
    });
  }

  /* ---------------- 설정 파일 로드 ---------------- */
  function loadConfig() {
    return fetch('../' + CONFIG_PATH + '?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (j) cfg = j;
        if (!cfg.popups) cfg.popups = [];
        if (!cfg.overrides) cfg.overrides = {};
        baseCfgJson = JSON.stringify(cfg);
      })
      .catch(function () { baseCfgJson = JSON.stringify(cfg); });
  }

  /* ============================================================
   *  팝업 관리
   * ============================================================ */
  function renderPopupList() {
    var wrap = $('#popupList');
    if (!cfg.popups.length) {
      wrap.innerHTML = '<div class="empty">등록된 팝업이 없습니다. 오른쪽 위 <b>+ 팝업 등록</b>을 눌러 추가하세요.</div>';
      return;
    }
    var today = new Date().toISOString().slice(0, 10);
    wrap.innerHTML = cfg.popups.map(function (p, i) {
      var status, cls;
      if (p.enabled === false) { status = '사용 안 함'; cls = 'gray'; }
      else if (p.startDate && today < p.startDate) { status = '노출 예정'; cls = 'warn'; }
      else if (p.endDate && today > p.endDate) { status = '기간 종료'; cls = 'gray'; }
      else { status = '노출 중'; cls = ''; }

      var period = (p.startDate || p.endDate)
        ? (p.startDate || '제한없음') + ' ~ ' + (p.endDate || '제한없음')
        : '기간 제한 없음';
      var pages = (!p.pages || !p.pages.length || p.pages.indexOf('all') !== -1)
        ? '모든 페이지' : p.pages.map(pageLabel).join(', ');

      return '<div class="popup-card' + (p.enabled === false ? ' off' : '') + '">' +
        (p.image ? '<img src="../' + esc(p.image) + '" alt="">' : '<img alt="">') +
        '<div class="pc-body">' +
        '<h4>' + esc(p.title || '(제목 없음)') + '</h4>' +
        '<div class="meta"><span class="badge ' + cls + '">' + status + '</span></div>' +
        '<div class="meta">기간: ' + esc(period) + '</div>' +
        '<div class="meta">노출: ' + esc(pages) + '</div>' +
        '<div class="pc-btns">' +
        '<button class="btn" data-act="edit" data-i="' + i + '">수정</button>' +
        '<button class="btn" data-act="toggle" data-i="' + i + '">' +
        (p.enabled === false ? '사용' : '사용 중지') + '</button>' +
        '<button class="btn btn-danger" data-act="del" data-i="' + i + '">삭제</button>' +
        '</div></div></div>';
    }).join('');
  }

  function fillPagesSelect(sel, includeAll) {
    sel.innerHTML = (includeAll ? '<option value="all">모든 페이지</option>' : '') +
      PAGES.map(function (p) {
        return '<option value="' + p[0] + '">' + esc(p[1]) + '</option>';
      }).join('');
  }

  function openPopupModal(index) {
    popupDraftIndex = index;
    var p = index >= 0 ? JSON.parse(JSON.stringify(cfg.popups[index])) : {
      id: 'p-' + Date.now().toString(36),
      title: '', enabled: true, image: '', html: '', link: '', linkNewWindow: false,
      startDate: '', endDate: '', pages: ['index.html'],
      left: 100, top: 100, width: 450, hideForDays: 1
    };
    popupDraft = p;

    $('#popupModalTitle').textContent = index >= 0 ? '팝업 수정' : '팝업 등록';
    $('#pTitle').value = p.title || '';
    $('#pHtml').value = p.html || '';
    $('#pLink').value = p.link || '';
    $('#pLinkNew').checked = !!p.linkNewWindow;
    $('#pStart').value = p.startDate || '';
    $('#pEnd').value = p.endDate || '';
    $('#pLeft').value = p.left == null ? 100 : p.left;
    $('#pTop').value = p.top == null ? 100 : p.top;
    $('#pWidth').value = p.width || 450;
    $('#pHideDays').value = p.hideForDays || 1;
    $('#pEnabled').checked = p.enabled !== false;
    $('#pPages').value = (!p.pages || !p.pages.length || p.pages.indexOf('all') !== -1)
      ? 'all' : p.pages[0];

    var img = $('#pImgPreview');
    if (p.image) {
      img.src = pendingUploads[p.image] ? 'data:image/*;base64,' + pendingUploads[p.image] : '../' + p.image;
      img.hidden = false;
    } else { img.hidden = true; img.removeAttribute('src'); }

    $('#popupModal').hidden = false;
  }

  function commitPopupModal() {
    var p = popupDraft;
    p.title = $('#pTitle').value.trim();
    p.html = $('#pHtml').value;
    p.link = $('#pLink').value.trim();
    p.linkNewWindow = $('#pLinkNew').checked;
    p.startDate = $('#pStart').value;
    p.endDate = $('#pEnd').value;
    p.pages = [$('#pPages').value];
    p.left = parseInt($('#pLeft').value, 10) || 0;
    p.top = parseInt($('#pTop').value, 10) || 0;
    p.width = parseInt($('#pWidth').value, 10) || 450;
    p.hideForDays = parseInt($('#pHideDays').value, 10) || 1;
    p.enabled = $('#pEnabled').checked;

    if (!p.image && !p.html.trim()) {
      toast('이미지 또는 내용 중 하나는 입력해 주세요.', true);
      return;
    }
    if (p.startDate && p.endDate && p.startDate > p.endDate) {
      toast('노출 종료일이 시작일보다 빠릅니다.', true);
      return;
    }

    if (popupDraftIndex >= 0) cfg.popups[popupDraftIndex] = p;
    else cfg.popups.push(p);

    $('#popupModal').hidden = true;
    renderPopupList();
    setDirty(true);
    refreshPreviewConfig();
  }

  /* ============================================================
   *  콘텐츠(사진 · 텍스트) 편집
   * ============================================================ */
  function currentPage() { return $('#pageSelect').value; }

  function loadPreview() {
    $('#previewFrame').src = '../' + currentPage() + '?__edit=1&t=' + Date.now();
  }

  function refreshPreviewConfig(previewAll) {
    var f = $('#previewFrame');
    if (f && f.contentWindow) {
      f.contentWindow.postMessage({
        type: 'apply-config', config: cfg, previewAll: !!previewAll
      }, '*');
    }
  }

  function ovs(page) {
    if (!cfg.overrides[page]) cfg.overrides[page] = {};
    return cfg.overrides[page];
  }

  window.addEventListener('message', function (e) {
    var d = e.data || {};
    var f = $('#previewFrame');

    if (d.type === 'ready') {
      f.contentWindow.postMessage({ type: 'set-mode', mode: editing.mode }, '*');
      refreshPreviewConfig(true);
      return;
    }

    if (d.type === 'pick-text') {
      editing.key = d.key;
      editing.original = d.html;
      var saved = (cfg.overrides[currentPage()] || {}).text || {};
      $('#textEditor').value = saved[d.key] != null ? saved[d.key] : d.html;
      $('#textModal').hidden = false;
      return;
    }

    if (d.type === 'pick-image') {
      editing.key = d.key;
      editing.original = d.current;
      var cur = String(d.current || '');
      $('#imgCurrent').src = cur.indexOf('data:') === 0 ? cur
        : '../' + cur.replace(/^\.\//, '').replace(/^\.\.\//, '');
      $('#imgNew').hidden = true;
      $('#imgNewEmpty').hidden = false;
      $('#imgNew').removeAttribute('src');
      $('#imageModal').dataset.newPath = '';
      $('#imageModal').hidden = false;
    }
  });

  /* ---------------- 파일 -> base64 ---------------- */
  function fileToBase64(file) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () { res(String(fr.result).split(',')[1]); };
      fr.onerror = rej;
      fr.readAsDataURL(file);
    });
  }

  function uploadPath(file) {
    var ext = (file.name.match(/\.[a-zA-Z0-9]+$/) || ['.png'])[0].toLowerCase();
    var stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
    var rand = Math.random().toString(36).slice(2, 7);
    return 'data/uploads/' + stamp + '-' + rand + ext;
  }

  /* ============================================================
   *  저장 (GitHub 반영)
   * ============================================================ */
  function save() {
    var s = saveSettings();
    if (!s.owner || !s.repo || !s.token) {
      toast('먼저 [연결 설정] 탭에서 GitHub 정보와 토큰을 입력해 주세요.', true);
      switchTab('setting');
      return;
    }

    cfg.updatedAt = new Date().toISOString();
    var paths = Object.keys(pendingUploads);
    var done = 0;
    var total = paths.length + 1;

    busy(true, '저장 중… (0/' + total + ')');

    var chain = Promise.resolve();
    paths.forEach(function (p) {
      chain = chain.then(function () {
        return ghPut(s, p, pendingUploads[p], '관리자: 이미지 업로드 ' + p)
          .then(function () {
            done++; busy(true, '저장 중… (' + done + '/' + total + ')');
          });
      });
    });

    chain.then(function () {
      return ghPut(s, CONFIG_PATH, b64FromString(JSON.stringify(cfg, null, 2)),
        '관리자: 사이트 내용/팝업 수정');
    }).then(function () {
      pendingUploads = {};
      baseCfgJson = JSON.stringify(cfg);
      setDirty(false);
      busy(false);
      toast('저장했습니다. 실제 사이트에는 약 1분 뒤 반영됩니다.');
    }).catch(function (err) {
      busy(false);
      toast('저장 실패: ' + err.message, true);
    });
  }

  /* ============================================================
   *  탭
   * ============================================================ */
  function switchTab(name) {
    $$('.tab').forEach(function (t) { t.classList.toggle('active', t.dataset.tab === name); });
    $$('.panel').forEach(function (p) { p.classList.toggle('active', p.id === 'panel-' + name); });
    if (name === 'content' && !$('#previewFrame').src) loadPreview();
  }

  /* ============================================================
   *  초기화 / 이벤트
   * ============================================================ */
  function init() {
    loadSettings();
    fillPagesSelect($('#pageSelect'), false);
    fillPagesSelect($('#pPages'), true);

    loadConfig().then(function () {
      renderPopupList();
    });

    $$('.tab').forEach(function (t) {
      t.addEventListener('click', function () { switchTab(t.dataset.tab); });
    });

    /* --- 팝업 --- */
    $('#btnAddPopup').addEventListener('click', function () { openPopupModal(-1); });

    $('#popupList').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act]');
      if (!b) return;
      var i = parseInt(b.dataset.i, 10);
      if (b.dataset.act === 'edit') openPopupModal(i);
      if (b.dataset.act === 'toggle') {
        cfg.popups[i].enabled = cfg.popups[i].enabled === false;
        renderPopupList(); setDirty(true); refreshPreviewConfig();
      }
      if (b.dataset.act === 'del') {
        if (confirm('"' + (cfg.popups[i].title || '이 팝업') + '" 을(를) 삭제할까요?')) {
          cfg.popups.splice(i, 1);
          renderPopupList(); setDirty(true); refreshPreviewConfig();
        }
      }
    });

    $('#btnPickImg').addEventListener('click', function () { $('#pImgFile').click(); });
    $('#pImgFile').addEventListener('change', function () {
      var f = this.files[0]; if (!f) return;
      if (f.size > 5 * 1024 * 1024) { toast('이미지는 5MB 이하로 올려 주세요.', true); return; }
      fileToBase64(f).then(function (b64) {
        var path = uploadPath(f);
        pendingUploads[path] = b64;
        popupDraft.image = path;
        var img = $('#pImgPreview');
        img.src = 'data:' + (f.type || 'image/png') + ';base64,' + b64;
        img.hidden = false;
      });
    });
    $('#btnClearImg').addEventListener('click', function () {
      popupDraft.image = '';
      $('#pImgPreview').hidden = true;
    });
    $('#btnPopupCancel').addEventListener('click', function () { $('#popupModal').hidden = true; });
    $('#btnPopupOk').addEventListener('click', commitPopupModal);

    /* --- 콘텐츠 --- */
    $('#pageSelect').addEventListener('change', loadPreview);
    $$('.mode').forEach(function (m) {
      m.addEventListener('click', function () {
        $$('.mode').forEach(function (x) { x.classList.remove('active'); });
        m.classList.add('active');
        editing.mode = m.dataset.mode;
        $('#contentHint').innerHTML = editing.mode === 'text'
          ? '아래 미리보기에서 바꾸고 싶은 <b>글자를 클릭</b>하세요. 편집창이 열립니다.'
          : '아래 미리보기에서 바꾸고 싶은 <b>사진을 클릭</b>하세요. 새 사진으로 교체할 수 있습니다.';
        var f = $('#previewFrame');
        if (f.contentWindow) f.contentWindow.postMessage({ type: 'set-mode', mode: editing.mode }, '*');
      });
    });

    $('#btnResetPage').addEventListener('click', function () {
      var p = currentPage();
      if (!cfg.overrides[p]) { toast('이 페이지에는 수정한 내용이 없습니다.'); return; }
      if (!confirm(pageLabel(p) + ' 의 수정 내용을 모두 되돌릴까요?')) return;
      delete cfg.overrides[p];
      setDirty(true);
      loadPreview();
      toast('되돌렸습니다. [저장하고 사이트에 반영]을 눌러야 실제 사이트에 적용됩니다.');
    });

    /* --- 텍스트 모달 --- */
    $('#btnTextCancel').addEventListener('click', function () { $('#textModal').hidden = true; });
    $('#btnTextRevert').addEventListener('click', function () {
      var t = (cfg.overrides[currentPage()] || {}).text;
      if (t) delete t[editing.key];
      $('#previewFrame').contentWindow.postMessage(
        { type: 'preview-text', key: editing.key, html: editing.original }, '*');
      $('#textModal').hidden = true;
      setDirty(true);
    });
    $('#btnTextOk').addEventListener('click', function () {
      var v = $('#textEditor').value;
      var o = ovs(currentPage());
      if (!o.text) o.text = {};
      if (v === editing.original) delete o.text[editing.key];
      else o.text[editing.key] = v;
      $('#previewFrame').contentWindow.postMessage(
        { type: 'preview-text', key: editing.key, html: v }, '*');
      $('#textModal').hidden = true;
      setDirty(true);
    });

    /* --- 이미지 모달 --- */
    $('#btnImgPick').addEventListener('click', function () { $('#imgFile').click(); });
    $('#imgFile').addEventListener('change', function () {
      var f = this.files[0]; if (!f) return;
      if (f.size > 5 * 1024 * 1024) { toast('이미지는 5MB 이하로 올려 주세요.', true); return; }
      fileToBase64(f).then(function (b64) {
        var path = uploadPath(f);
        pendingUploads[path] = b64;
        $('#imageModal').dataset.newPath = path;
        var img = $('#imgNew');
        img.src = 'data:' + (f.type || 'image/png') + ';base64,' + b64;
        img.hidden = false;
        $('#imgNewEmpty').hidden = true;
      });
    });
    $('#btnImgCancel').addEventListener('click', function () { $('#imageModal').hidden = true; });
    $('#btnImgRevert').addEventListener('click', function () {
      var im = (cfg.overrides[currentPage()] || {}).image;
      if (im) delete im[editing.key];
      $('#previewFrame').contentWindow.postMessage(
        { type: 'preview-image', key: editing.key, value: editing.original }, '*');
      $('#imageModal').hidden = true;
      setDirty(true);
    });
    $('#btnImgOk').addEventListener('click', function () {
      var path = $('#imageModal').dataset.newPath;
      if (!path) { toast('새 사진을 선택해 주세요.', true); return; }
      var o = ovs(currentPage());
      if (!o.image) o.image = {};
      o.image[editing.key] = path;
      $('#previewFrame').contentWindow.postMessage({
        type: 'preview-image', key: editing.key,
        value: 'data:image/*;base64,' + pendingUploads[path]
      }, '*');
      $('#imageModal').hidden = true;
      setDirty(true);
    });

    /* --- 설정 --- */
    $('#btnTest').addEventListener('click', function () {
      var s = saveSettings();
      var el = $('#testResult');
      if (!s.owner || !s.repo || !s.token) {
        el.textContent = '사용자명 · 저장소 · 토큰을 모두 입력해 주세요.';
        el.className = 'test-result ng';
        return;
      }
      el.textContent = '확인 중…'; el.className = 'test-result';
      ghGetSha(s, CONFIG_PATH).then(function (sha) {
        el.textContent = sha ? '연결되었습니다. 저장할 수 있습니다.' : '저장소는 연결됐지만 설정 파일이 없습니다. 저장하면 새로 만들어집니다.';
        el.className = 'test-result ok';
      }).catch(function (err) {
        el.textContent = '연결 실패: ' + err.message + ' (토큰 권한 Contents: Read and write 확인)';
        el.className = 'test-result ng';
      });
    });

    $('#btnLogout').addEventListener('click', function () {
      $('#cfgToken').value = '';
      saveSettings();
      toast('토큰을 지웠습니다.');
    });

    /* --- 저장 --- */
    $('#btnSave').addEventListener('click', save);

    window.addEventListener('beforeunload', function (e) {
      if (dirty) { e.preventDefault(); e.returnValue = ''; }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
