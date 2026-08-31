/* ============================================================
 *  다산바른통의원 백업 사이트 - 런타임
 *  1) data/site-config.json 의 텍스트/이미지 수정사항 적용
 *  2) 팝업 렌더링 (기간 지정, N일 동안 보지 않기)
 *  3) 관리자 편집 모드 (iframe 안에서 클릭 편집)
 * ============================================================ */
(function () {
  'use strict';

  /* ---------- 기준 경로 계산 (admin/ 하위에서도 동작) ---------- */
  var thisScript = document.currentScript ||
    (function () { var s = document.getElementsByTagName('script'); return s[s.length - 1]; })();
  var BASE = (function () {
    var src = thisScript ? thisScript.src : '';
    return src ? src.replace(/js\/backup-runtime\.js.*$/, '') : '';
  })();

  var CONFIG_URL = BASE + 'data/site-config.json';

  /* ---------- 현재 페이지 키 ---------- */
  function pageKey() {
    var p = location.pathname.split('/').pop();
    if (!p || p === '') p = 'index.html';
    return p;
  }
  var PAGE = pageKey();

  /* ---------- 설정 즉시 로드 시작 (렌더 지연 최소화) ---------- */
  var configPromise = fetch(CONFIG_URL, { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .catch(function () { return null; });

  /* ============================================================
   *  요소 고유 키 (텍스트/이미지 수정 대상 식별용)
   *  imweb 위젯 id 를 기준점으로 삼아 재빌드에도 최대한 안정적으로 유지
   * ============================================================ */
  var STABLE_ID = /^(?:text_w|img_w|w20|s20|visual_|img_|text_)/;

  function nthOfTag(el) {
    var i = 1, s = el;
    while ((s = s.previousElementSibling)) { if (s.tagName === el.tagName) i++; }
    return i;
  }

  function keyOf(el) {
    var parts = [];
    var node = el;
    while (node && node.nodeType === 1 && node !== document.body) {
      if (node.id && STABLE_ID.test(node.id)) {
        parts.unshift('#' + node.id);
        return parts.join('>');
      }
      parts.unshift(node.tagName.toLowerCase() + ':' + nthOfTag(node));
      node = node.parentElement;
    }
    parts.unshift('body');
    return parts.join('>');
  }

  function resolveKey(key) {
    var parts = key.split('>');
    var node;
    if (parts[0].charAt(0) === '#') {
      node = document.getElementById(parts[0].slice(1));
    } else {
      node = document.body;
    }
    if (!node) return null;
    for (var i = 1; i < parts.length; i++) {
      var seg = parts[i].split(':');
      var tag = seg[0].toUpperCase();
      var n = parseInt(seg[1], 10);
      var found = null, count = 0;
      for (var c = node.firstElementChild; c; c = c.nextElementSibling) {
        if (c.tagName === tag) { count++; if (count === n) { found = c; break; } }
      }
      if (!found) return null;
      node = found;
    }
    return node;
  }

  /* ============================================================
   *  수정사항 적용
   * ============================================================ */
  function applyOverrides(cfg) {
    if (!cfg || !cfg.overrides) return;
    var page = cfg.overrides[PAGE];
    if (!page) return;

    if (page.text) {
      Object.keys(page.text).forEach(function (k) {
        var el = resolveKey(k);
        if (el) el.innerHTML = page.text[k];
      });
    }
    if (page.image) {
      Object.keys(page.image).forEach(function (k) {
        var el = resolveKey(k);
        if (!el) return;
        var v = page.image[k];
        if (el.tagName === 'IMG') {
          el.setAttribute('src', v);
          el.removeAttribute('srcset');
          el.removeAttribute('data-src');
          el.removeAttribute('data-original');
        } else {
          el.style.backgroundImage = 'url("' + v + '")';
        }
      });
    }
  }

  /* ============================================================
   *  팝업
   * ============================================================ */
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function popupSuppressed(id) {
    try {
      var until = localStorage.getItem('dbt_popup_hide_' + id);
      return !!until && Date.now() < parseInt(until, 10);
    } catch (e) { return false; }
  }

  function suppressPopup(id, days) {
    try {
      localStorage.setItem('dbt_popup_hide_' + id,
        String(Date.now() + (days || 1) * 86400000));
    } catch (e) { /* noop */ }
  }

  function popupActive(p) {
    if (p.enabled === false) return false;
    var t = todayStr();
    if (p.startDate && t < p.startDate) return false;
    if (p.endDate && t > p.endDate) return false;
    if (p.pages && p.pages.length && p.pages.indexOf('all') === -1 &&
        p.pages.indexOf(PAGE) === -1) return false;
    return true;
  }

  function escapeAttr(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderPopups(cfg, opts) {
    opts = opts || {};
    var old = document.getElementById('dbt-popup-layer');
    if (old) old.parentNode.removeChild(old);
    if (!cfg || !cfg.popups || !cfg.popups.length) return;

    var list = cfg.popups.filter(function (p) {
      if (opts.previewAll) return p.enabled !== false;
      return popupActive(p) && !popupSuppressed(p.id);
    });
    if (!list.length) return;

    var layer = document.createElement('div');
    layer.id = 'dbt-popup-layer';

    list.forEach(function (p, idx) {
      var box = document.createElement('div');
      box.className = 'dbt-popup';
      box.setAttribute('data-popup-id', p.id);
      box.style.width = (parseInt(p.width, 10) || 450) + 'px';
      box.style.left = (p.left == null ? 40 + idx * 30 : parseInt(p.left, 10)) + 'px';
      box.style.top = (p.top == null ? 100 + idx * 30 : parseInt(p.top, 10)) + 'px';

      var content = '';
      if (p.image) {
        content += '<img class="dbt-popup-img" src="' + escapeAttr(BASE + p.image) +
          '" alt="' + escapeAttr(p.title || '팝업') + '">';
      }
      if (p.html) { content += '<div class="dbt-popup-html">' + p.html + '</div>'; }
      if (p.link) {
        content = '<a class="dbt-popup-link" href="' + escapeAttr(p.link) + '"' +
          (p.linkNewWindow ? ' target="_blank" rel="noopener"' : '') + '>' + content + '</a>';
      }

      box.innerHTML =
        '<div class="dbt-popup-body">' + content +
        '<button type="button" class="dbt-popup-x" aria-label="닫기">&times;</button></div>' +
        '<div class="dbt-popup-btns">' +
        '<button type="button" class="dbt-popup-today">' +
        ((p.hideForDays || 1) > 1 ? p.hideForDays + '일 동안 보지 않음' : '오늘 하루 보지 않음') +
        '</button>' +
        '<button type="button" class="dbt-popup-close">닫기</button>' +
        '</div>';

      function kill() { if (box.parentNode) box.parentNode.removeChild(box); }
      box.querySelector('.dbt-popup-x').addEventListener('click', kill);
      box.querySelector('.dbt-popup-close').addEventListener('click', kill);
      box.querySelector('.dbt-popup-today').addEventListener('click', function () {
        suppressPopup(p.id, p.hideForDays || 1);
        kill();
      });

      layer.appendChild(box);
    });

    document.body.appendChild(layer);
  }

  /* ============================================================
   *  관리자 편집 모드 (admin 페이지의 iframe 안에서만 활성화)
   * ============================================================ */
  var EDIT = /[?&]__edit=1/.test(location.search);
  var editState = { mode: 'text' };

  function isEditableText(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.closest('#dbt-popup-layer')) return false;
    if (['SCRIPT', 'STYLE', 'IMG', 'IFRAME', 'CANVAS', 'BUTTON', 'INPUT'].indexOf(el.tagName) !== -1) return false;
    var t = (el.textContent || '').trim();
    if (!t) return false;
    for (var c = el.firstElementChild; c; c = c.nextElementSibling) {
      if ((c.textContent || '').trim() === t) return false;
    }
    return true;
  }

  function post(msg) {
    if (window.parent && window.parent !== window) window.parent.postMessage(msg, '*');
  }

  function enableEditMode() {
    document.documentElement.classList.add('dbt-edit-on');

    document.addEventListener('click', function (e) {
      var el = e.target;
      if (el.closest && el.closest('#dbt-popup-layer')) return;

      // 편집 중에는 링크를 눌러도 페이지가 이동하지 않도록 막는다
      if (el.closest && el.closest('a')) e.preventDefault();

      if (editState.mode === 'image') {
        var img = (el.closest && el.closest('img')) ||
          (getComputedStyle(el).backgroundImage !== 'none' ? el : null);
        if (!img) return;
        e.preventDefault(); e.stopPropagation();
        post({
          type: 'pick-image', key: keyOf(img), tag: img.tagName,
          current: img.tagName === 'IMG' ? img.getAttribute('src')
            : getComputedStyle(img).backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '')
        });
        return;
      }

      var target = el;
      while (target && target !== document.body && !isEditableText(target)) {
        target = target.parentElement;
      }
      if (!target || target === document.body) return;
      e.preventDefault(); e.stopPropagation();
      post({
        type: 'pick-text', key: keyOf(target), html: target.innerHTML,
        text: (target.textContent || '').trim().slice(0, 400)
      });
    }, true);

    document.addEventListener('mouseover', function (e) {
      var prev = document.querySelectorAll('.dbt-hover');
      for (var i = 0; i < prev.length; i++) prev[i].classList.remove('dbt-hover');
      var el = e.target;
      if (editState.mode === 'image') {
        var img = el.closest && el.closest('img');
        if (img) img.classList.add('dbt-hover');
      } else {
        var t = el;
        while (t && t !== document.body && !isEditableText(t)) t = t.parentElement;
        if (t && t !== document.body) t.classList.add('dbt-hover');
      }
    }, true);
  }

  window.addEventListener('message', function (e) {
    var d = e.data || {};
    if (d.type === 'set-mode') { editState.mode = d.mode; }
    if (d.type === 'apply-config') {
      applyOverrides(d.config);
      renderPopups(d.config, { previewAll: d.previewAll });
    }
    if (d.type === 'preview-text') {
      var el = resolveKey(d.key); if (el) el.innerHTML = d.html;
    }
    if (d.type === 'preview-image') {
      var t = resolveKey(d.key);
      if (t) {
        if (t.tagName === 'IMG') { t.setAttribute('src', d.value); t.removeAttribute('srcset'); }
        else { t.style.backgroundImage = 'url("' + d.value + '")'; }
      }
    }
  });

  /* ============================================================
   *  부팅
   * ============================================================ */
  function boot() {
    configPromise.then(function (cfg) {
      applyOverrides(cfg);
      renderPopups(cfg);
      if (EDIT) { enableEditMode(); post({ type: 'ready', page: PAGE }); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }

  window.DBT_RUNTIME = { keyOf: keyOf, resolveKey: resolveKey, pageKey: pageKey };
})();
