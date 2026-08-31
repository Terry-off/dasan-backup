(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(`/**
 * Swiper 9.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 13, 2023
 */
/* FONT_START */
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
.swiper,
swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide,
swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-horizontal.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-vertical.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}
.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}
.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`)),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
(() => {
	function _mergeNamespaces(n2, m2) {
		for (var i = 0; i < m2.length; i++) {
			const e2 = m2[i];
			if (typeof e2 !== "string" && !Array.isArray(e2)) {
				for (const k2 in e2) {
					if (k2 !== "default" && !(k2 in n2)) {
						const d2 = Object.getOwnPropertyDescriptor(e2, k2);
						if (d2) {
							Object.defineProperty(n2, k2, d2.get ? d2 : {
								enumerable: true,
								get: () => e2[k2]
							});
						}
					}
				}
			}
		}
		return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
	}
	var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
	function getDefaultExportFromCjs(x2) {
		return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
	}
	var reactExports = {};
	var react = {
		get exports() {
			return reactExports;
		},
		set exports(v2) {
			reactExports = v2;
		}
	};
	var react_production_min = {};
	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
	function A$2(a) {
		if (null === a || "object" !== typeof a)
			return null;
		a = z$2 && a[z$2] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B$1 = { isMounted: function() {
			return false;
		}, enqueueForceUpdate: function() {
		}, enqueueReplaceState: function() {
		}, enqueueSetState: function() {
		} }, C$1 = Object.assign, D$1 = {};
	function E$1(a, b2, e2) {
		this.props = a;
		this.context = b2;
		this.refs = D$1;
		this.updater = e2 || B$1;
	}
	E$1.prototype.isReactComponent = {};
	E$1.prototype.setState = function(a, b2) {
		if ("object" !== typeof a && "function" !== typeof a && null != a)
			throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b2, "setState");
	};
	E$1.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {
	}
	F.prototype = E$1.prototype;
	function G$1(a, b2, e2) {
		this.props = a;
		this.context = b2;
		this.refs = D$1;
		this.updater = e2 || B$1;
	}
	var H$1 = G$1.prototype = new F();
	H$1.constructor = G$1;
	C$1(H$1, E$1.prototype);
	H$1.isPureReactComponent = true;
	var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
	function M$1(a, b2, e2) {
		var d2, c2 = {}, k2 = null, h2 = null;
		if (null != b2)
			for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
				J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
		var g2 = arguments.length - 2;
		if (1 === g2)
			c2.children = e2;
		else if (1 < g2) {
			for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
				f2[m2] = arguments[m2 + 2];
			c2.children = f2;
		}
		if (a && a.defaultProps)
			for (d2 in g2 = a.defaultProps, g2)
				void 0 === c2[d2] && (c2[d2] = g2[d2]);
		return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c2, _owner: K$1.current };
	}
	function N$1(a, b2) {
		return { $$typeof: l$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
	}
	function O$1(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l$2;
	}
	function escape(a) {
		var b2 = { "=": "=0", ":": "=2" };
		return "$" + a.replace(/[=:]/g, function(a2) {
			return b2[a2];
		});
	}
	var P$1 = /\/+/g;
	function Q$1(a, b2) {
		return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
	}
	function R$1(a, b2, e2, d2, c2) {
		var k2 = typeof a;
		if ("undefined" === k2 || "boolean" === k2)
			a = null;
		var h2 = false;
		if (null === a)
			h2 = true;
		else
			switch (k2) {
				case "string":
				case "number":
					h2 = true;
					break;
				case "object":
					switch (a.$$typeof) {
						case l$2:
						case n$2:
							h2 = true;
					}
			}
		if (h2)
			return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
				return a2;
			})) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
		h2 = 0;
		d2 = "" === d2 ? "." : d2 + ":";
		if (I$1(a))
			for (var g2 = 0; g2 < a.length; g2++) {
				k2 = a[g2];
				var f2 = d2 + Q$1(k2, g2);
				h2 += R$1(k2, b2, e2, f2, c2);
			}
		else if (f2 = A$2(a), "function" === typeof f2)
			for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
				k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
		else if ("object" === k2)
			throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
		return h2;
	}
	function S$1(a, b2, e2) {
		if (null == a)
			return a;
		var d2 = [], c2 = 0;
		R$1(a, d2, "", "", function(a2) {
			return b2.call(e2, a2, c2++);
		});
		return d2;
	}
	function T$1(a) {
		if (-1 === a._status) {
			var b2 = a._result;
			b2 = b2();
			b2.then(function(b3) {
				if (0 === a._status || -1 === a._status)
					a._status = 1, a._result = b3;
			}, function(b3) {
				if (0 === a._status || -1 === a._status)
					a._status = 2, a._result = b3;
			});
			-1 === a._status && (a._status = 0, a._result = b2);
		}
		if (1 === a._status)
			return a._result.default;
		throw a._result;
	}
	var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
	react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
			S$1(a, function() {
				b2.apply(this, arguments);
			}, e2);
		}, count: function(a) {
			var b2 = 0;
			S$1(a, function() {
				b2++;
			});
			return b2;
		}, toArray: function(a) {
			return S$1(a, function(a2) {
				return a2;
			}) || [];
		}, only: function(a) {
			if (!O$1(a))
				throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		} };
	react_production_min.Component = E$1;
	react_production_min.Fragment = p$3;
	react_production_min.Profiler = r$1;
	react_production_min.PureComponent = G$1;
	react_production_min.StrictMode = q$2;
	react_production_min.Suspense = w$1;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
	react_production_min.cloneElement = function(a, b2, e2) {
		if (null === a || void 0 === a)
			throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
		if (null != b2) {
			void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
			void 0 !== b2.key && (c2 = "" + b2.key);
			if (a.type && a.type.defaultProps)
				var g2 = a.type.defaultProps;
			for (f2 in b2)
				J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
		}
		var f2 = arguments.length - 2;
		if (1 === f2)
			d2.children = e2;
		else if (1 < f2) {
			g2 = Array(f2);
			for (var m2 = 0; m2 < f2; m2++)
				g2[m2] = arguments[m2 + 2];
			d2.children = g2;
		}
		return { $$typeof: l$2, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
	};
	react_production_min.createContext = function(a) {
		a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
		a.Provider = { $$typeof: t$1, _context: a };
		return a.Consumer = a;
	};
	react_production_min.createElement = M$1;
	react_production_min.createFactory = function(a) {
		var b2 = M$1.bind(null, a);
		b2.type = a;
		return b2;
	};
	react_production_min.createRef = function() {
		return { current: null };
	};
	react_production_min.forwardRef = function(a) {
		return { $$typeof: v$2, render: a };
	};
	react_production_min.isValidElement = O$1;
	react_production_min.lazy = function(a) {
		return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$1 };
	};
	react_production_min.memo = function(a, b2) {
		return { $$typeof: x$1, type: a, compare: void 0 === b2 ? null : b2 };
	};
	react_production_min.startTransition = function(a) {
		var b2 = V$1.transition;
		V$1.transition = {};
		try {
			a();
		} finally {
			V$1.transition = b2;
		}
	};
	react_production_min.unstable_act = function() {
		throw Error("act(...) is not supported in production builds of React.");
	};
	react_production_min.useCallback = function(a, b2) {
		return U$1.current.useCallback(a, b2);
	};
	react_production_min.useContext = function(a) {
		return U$1.current.useContext(a);
	};
	react_production_min.useDebugValue = function() {
	};
	react_production_min.useDeferredValue = function(a) {
		return U$1.current.useDeferredValue(a);
	};
	react_production_min.useEffect = function(a, b2) {
		return U$1.current.useEffect(a, b2);
	};
	react_production_min.useId = function() {
		return U$1.current.useId();
	};
	react_production_min.useImperativeHandle = function(a, b2, e2) {
		return U$1.current.useImperativeHandle(a, b2, e2);
	};
	react_production_min.useInsertionEffect = function(a, b2) {
		return U$1.current.useInsertionEffect(a, b2);
	};
	react_production_min.useLayoutEffect = function(a, b2) {
		return U$1.current.useLayoutEffect(a, b2);
	};
	react_production_min.useMemo = function(a, b2) {
		return U$1.current.useMemo(a, b2);
	};
	react_production_min.useReducer = function(a, b2, e2) {
		return U$1.current.useReducer(a, b2, e2);
	};
	react_production_min.useRef = function(a) {
		return U$1.current.useRef(a);
	};
	react_production_min.useState = function(a) {
		return U$1.current.useState(a);
	};
	react_production_min.useSyncExternalStore = function(a, b2, e2) {
		return U$1.current.useSyncExternalStore(a, b2, e2);
	};
	react_production_min.useTransition = function() {
		return U$1.current.useTransition();
	};
	react_production_min.version = "18.2.0";
	(function(module) {
		{
			module.exports = react_production_min;
		}
	})(react);
	const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
	const React$1 = /* @__PURE__ */ _mergeNamespaces({
		__proto__: null,
		default: React
	}, [reactExports]);
	function sheetForTag(tag) {
		if (tag.sheet) {
			return tag.sheet;
		}
		for (var i = 0; i < document.styleSheets.length; i++) {
			if (document.styleSheets[i].ownerNode === tag) {
				return document.styleSheets[i];
			}
		}
	}
	function createStyleElement(options) {
		var tag = document.createElement("style");
		tag.setAttribute("data-emotion", options.key);
		if (options.nonce !== void 0) {
			tag.setAttribute("nonce", options.nonce);
		}
		tag.appendChild(document.createTextNode(""));
		tag.setAttribute("data-s", "");
		return tag;
	}
	var StyleSheet = /* @__PURE__ */ function() {
		function StyleSheet2(options) {
			var _this = this;
			this._insertTag = function(tag) {
				var before;
				if (_this.tags.length === 0) {
					if (_this.insertionPoint) {
						before = _this.insertionPoint.nextSibling;
					} else if (_this.prepend) {
						before = _this.container.firstChild;
					} else {
						before = _this.before;
					}
				} else {
					before = _this.tags[_this.tags.length - 1].nextSibling;
				}
				_this.container.insertBefore(tag, before);
				_this.tags.push(tag);
			};
			this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
			this.tags = [];
			this.ctr = 0;
			this.nonce = options.nonce;
			this.key = options.key;
			this.container = options.container;
			this.prepend = options.prepend;
			this.insertionPoint = options.insertionPoint;
			this.before = null;
		}
		var _proto = StyleSheet2.prototype;
		_proto.hydrate = function hydrate(nodes) {
			nodes.forEach(this._insertTag);
		};
		_proto.insert = function insert(rule) {
			if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
				this._insertTag(createStyleElement(this));
			}
			var tag = this.tags[this.tags.length - 1];
			if (this.isSpeedy) {
				var sheet = sheetForTag(tag);
				try {
					sheet.insertRule(rule, sheet.cssRules.length);
				} catch (e2) {
				}
			} else {
				tag.appendChild(document.createTextNode(rule));
			}
			this.ctr++;
		};
		_proto.flush = function flush() {
			this.tags.forEach(function(tag) {
				return tag.parentNode && tag.parentNode.removeChild(tag);
			});
			this.tags = [];
			this.ctr = 0;
		};
		return StyleSheet2;
	}();
	var MS = "-ms-";
	var MOZ = "-moz-";
	var WEBKIT = "-webkit-";
	var COMMENT = "comm";
	var RULESET = "rule";
	var DECLARATION = "decl";
	var IMPORT = "@import";
	var KEYFRAMES = "@keyframes";
	var abs = Math.abs;
	var from = String.fromCharCode;
	var assign = Object.assign;
	function hash(value, length2) {
		return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
	}
	function trim(value) {
		return value.trim();
	}
	function match(value, pattern) {
		return (value = pattern.exec(value)) ? value[0] : value;
	}
	function replace(value, pattern, replacement) {
		return value.replace(pattern, replacement);
	}
	function indexof(value, search) {
		return value.indexOf(search);
	}
	function charat(value, index) {
		return value.charCodeAt(index) | 0;
	}
	function substr(value, begin, end) {
		return value.slice(begin, end);
	}
	function strlen(value) {
		return value.length;
	}
	function sizeof(value) {
		return value.length;
	}
	function append(value, array) {
		return array.push(value), value;
	}
	function combine(array, callback) {
		return array.map(callback).join("");
	}
	var line = 1;
	var column = 1;
	var length = 0;
	var position = 0;
	var character = 0;
	var characters = "";
	function node(value, root, parent, type, props, children, length2) {
		return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
	}
	function copy(root, props) {
		return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
	}
	function char() {
		return character;
	}
	function prev() {
		character = position > 0 ? charat(characters, --position) : 0;
		if (column--, character === 10)
			column = 1, line--;
		return character;
	}
	function next() {
		character = position < length ? charat(characters, position++) : 0;
		if (column++, character === 10)
			column = 1, line++;
		return character;
	}
	function peek() {
		return charat(characters, position);
	}
	function caret() {
		return position;
	}
	function slice(begin, end) {
		return substr(characters, begin, end);
	}
	function token(type) {
		switch (type) {
			case 0:
			case 9:
			case 10:
			case 13:
			case 32:
				return 5;
			case 33:
			case 43:
			case 44:
			case 47:
			case 62:
			case 64:
			case 126:
			case 59:
			case 123:
			case 125:
				return 4;
			case 58:
				return 3;
			case 34:
			case 39:
			case 40:
			case 91:
				return 2;
			case 41:
			case 93:
				return 1;
		}
		return 0;
	}
	function alloc(value) {
		return line = column = 1, length = strlen(characters = value), position = 0, [];
	}
	function dealloc(value) {
		return characters = "", value;
	}
	function delimit(type) {
		return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
	}
	function whitespace(type) {
		while (character = peek())
			if (character < 33)
				next();
			else
				break;
		return token(type) > 2 || token(character) > 3 ? "" : " ";
	}
	function escaping(index, count) {
		while (--count && next())
			if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
				break;
		return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
	}
	function delimiter(type) {
		while (next())
			switch (character) {
				case type:
					return position;
				case 34:
				case 39:
					if (type !== 34 && type !== 39)
						delimiter(character);
					break;
				case 40:
					if (type === 41)
						delimiter(type);
					break;
				case 92:
					next();
					break;
			}
		return position;
	}
	function commenter(type, index) {
		while (next())
			if (type + character === 47 + 10)
				break;
			else if (type + character === 42 + 42 && peek() === 47)
				break;
		return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
	}
	function identifier(index) {
		while (!token(peek()))
			next();
		return slice(index, position);
	}
	function compile(value) {
		return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
	}
	function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
		var index = 0;
		var offset = 0;
		var length2 = pseudo;
		var atrule = 0;
		var property = 0;
		var previous = 0;
		var variable = 1;
		var scanning = 1;
		var ampersand = 1;
		var character2 = 0;
		var type = "";
		var props = rules;
		var children = rulesets;
		var reference = rule;
		var characters2 = type;
		while (scanning)
			switch (previous = character2, character2 = next()) {
				case 40:
					if (previous != 108 && charat(characters2, length2 - 1) == 58) {
						if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
							ampersand = -1;
						break;
					}
				case 34:
				case 39:
				case 91:
					characters2 += delimit(character2);
					break;
				case 9:
				case 10:
				case 13:
				case 32:
					characters2 += whitespace(previous);
					break;
				case 92:
					characters2 += escaping(caret() - 1, 7);
					continue;
				case 47:
					switch (peek()) {
						case 42:
						case 47:
							append(comment(commenter(next(), caret()), root, parent), declarations);
							break;
						default:
							characters2 += "/";
					}
					break;
				case 123 * variable:
					points[index++] = strlen(characters2) * ampersand;
				case 125 * variable:
				case 59:
				case 0:
					switch (character2) {
						case 0:
						case 125:
							scanning = 0;
						case 59 + offset:
							if (property > 0 && strlen(characters2) - length2)
								append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
							break;
						case 59:
							characters2 += ";";
						default:
							append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
							if (character2 === 123)
								if (offset === 0)
									parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
								else
									switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
										case 100:
										case 109:
										case 115:
											parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
											break;
										default:
											parse(characters2, reference, reference, reference, [""], children, 0, points, children);
									}
					}
					index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
					break;
				case 58:
					length2 = 1 + strlen(characters2), property = previous;
				default:
					if (variable < 1) {
						if (character2 == 123)
							--variable;
						else if (character2 == 125 && variable++ == 0 && prev() == 125)
							continue;
					}
					switch (characters2 += from(character2), character2 * variable) {
						case 38:
							ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
							break;
						case 44:
							points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
							break;
						case 64:
							if (peek() === 45)
								characters2 += delimit(next());
							atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
							break;
						case 45:
							if (previous === 45 && strlen(characters2) == 2)
								variable = 0;
					}
			}
		return rulesets;
	}
	function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
		var post = offset - 1;
		var rule = offset === 0 ? rules : [""];
		var size = sizeof(rule);
		for (var i = 0, j = 0, k2 = 0; i < index; ++i)
			for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size; ++x2)
				if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
					props[k2++] = z2;
		return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
	}
	function comment(value, root, parent) {
		return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
	}
	function declaration(value, root, parent, length2) {
		return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
	}
	function serialize(children, callback) {
		var output = "";
		var length2 = sizeof(children);
		for (var i = 0; i < length2; i++)
			output += callback(children[i], i, children, callback) || "";
		return output;
	}
	function stringify(element, index, children, callback) {
		switch (element.type) {
			case IMPORT:
			case DECLARATION:
				return element.return = element.return || element.value;
			case COMMENT:
				return "";
			case KEYFRAMES:
				return element.return = element.value + "{" + serialize(element.children, callback) + "}";
			case RULESET:
				element.value = element.props.join(",");
		}
		return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
	}
	function middleware(collection) {
		var length2 = sizeof(collection);
		return function(element, index, children, callback) {
			var output = "";
			for (var i = 0; i < length2; i++)
				output += collection[i](element, index, children, callback) || "";
			return output;
		};
	}
	function rulesheet(callback) {
		return function(element) {
			if (!element.root) {
				if (element = element.return)
					callback(element);
			}
		};
	}
	function memoize(fn) {
		var cache = /* @__PURE__ */ Object.create(null);
		return function(arg) {
			if (cache[arg] === void 0)
				cache[arg] = fn(arg);
			return cache[arg];
		};
	}
	var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
		var previous = 0;
		var character2 = 0;
		while (true) {
			previous = character2;
			character2 = peek();
			if (previous === 38 && character2 === 12) {
				points[index] = 1;
			}
			if (token(character2)) {
				break;
			}
			next();
		}
		return slice(begin, position);
	};
	var toRules = function toRules2(parsed, points) {
		var index = -1;
		var character2 = 44;
		do {
			switch (token(character2)) {
				case 0:
					if (character2 === 38 && peek() === 12) {
						points[index] = 1;
					}
					parsed[index] += identifierWithPointTracking(position - 1, points, index);
					break;
				case 2:
					parsed[index] += delimit(character2);
					break;
				case 4:
					if (character2 === 44) {
						parsed[++index] = peek() === 58 ? "&\f" : "";
						points[index] = parsed[index].length;
						break;
					}
				default:
					parsed[index] += from(character2);
			}
		} while (character2 = next());
		return parsed;
	};
	var getRules = function getRules2(value, points) {
		return dealloc(toRules(alloc(value), points));
	};
	var fixedElements = /* @__PURE__ */ new WeakMap();
	var compat = function compat2(element) {
		if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
		    // negative .length indicates that this rule has been already prefixed
		    element.length < 1) {
			return;
		}
		var value = element.value, parent = element.parent;
		var isImplicitRule = element.column === parent.column && element.line === parent.line;
		while (parent.type !== "rule") {
			parent = parent.parent;
			if (!parent)
				return;
		}
		if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
			return;
		}
		if (isImplicitRule) {
			return;
		}
		fixedElements.set(element, true);
		var points = [];
		var rules = getRules(value, points);
		var parentRules = parent.props;
		for (var i = 0, k2 = 0; i < rules.length; i++) {
			for (var j = 0; j < parentRules.length; j++, k2++) {
				element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
			}
		}
	};
	var removeLabel = function removeLabel2(element) {
		if (element.type === "decl") {
			var value = element.value;
			if (
					// charcode for l
					value.charCodeAt(0) === 108 && // charcode for b
					value.charCodeAt(2) === 98
			) {
				element["return"] = "";
				element.value = "";
			}
		}
	};
	function prefix(value, length2) {
		switch (hash(value, length2)) {
			case 5103:
				return WEBKIT + "print-" + value + value;
			case 5737:
			case 4201:
			case 3177:
			case 3433:
			case 1641:
			case 4457:
			case 2921:
			case 5572:
			case 6356:
			case 5844:
			case 3191:
			case 6645:
			case 3005:
			case 6391:
			case 5879:
			case 5623:
			case 6135:
			case 4599:
			case 4855:
			case 4215:
			case 6389:
			case 5109:
			case 5365:
			case 5621:
			case 3829:
				return WEBKIT + value + value;
			case 5349:
			case 4246:
			case 4810:
			case 6968:
			case 2756:
				return WEBKIT + value + MOZ + value + MS + value + value;
			case 6828:
			case 4268:
				return WEBKIT + value + MS + value + value;
			case 6165:
				return WEBKIT + value + MS + "flex-" + value + value;
			case 5187:
				return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
			case 5443:
				return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
			case 4675:
				return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
			case 5548:
				return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
			case 5292:
				return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
			case 6060:
				return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
			case 4554:
				return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
			case 6187:
				return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
			case 5495:
			case 3959:
				return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
			case 4968:
				return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
			case 4095:
			case 3583:
			case 4068:
			case 2532:
				return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
			case 8116:
			case 7059:
			case 5753:
			case 5535:
			case 5445:
			case 5701:
			case 4933:
			case 4677:
			case 5533:
			case 5789:
			case 5021:
			case 4765:
				if (strlen(value) - 1 - length2 > 6)
					switch (charat(value, length2 + 1)) {
						case 109:
							if (charat(value, length2 + 4) !== 45)
								break;
						case 102:
							return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
						case 115:
							return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
					}
				break;
			case 4949:
				if (charat(value, length2 + 1) !== 115)
					break;
			case 6444:
				switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
					case 107:
						return replace(value, ":", ":" + WEBKIT) + value;
					case 101:
						return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
				}
				break;
			case 5936:
				switch (charat(value, length2 + 11)) {
					case 114:
						return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
					case 108:
						return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
					case 45:
						return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
				}
				return WEBKIT + value + MS + value + value;
		}
		return value;
	}
	var prefixer = function prefixer2(element, index, children, callback) {
		if (element.length > -1) {
			if (!element["return"])
				switch (element.type) {
					case DECLARATION:
						element["return"] = prefix(element.value, element.length);
						break;
					case KEYFRAMES:
						return serialize([copy(element, {
							value: replace(element.value, "@", "@" + WEBKIT)
						})], callback);
					case RULESET:
						if (element.length)
							return combine(element.props, function(value) {
								switch (match(value, /(::plac\w+|:read-\w+)/)) {
									case ":read-only":
									case ":read-write":
										return serialize([copy(element, {
											props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
										})], callback);
									case "::placeholder":
										return serialize([copy(element, {
											props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
										}), copy(element, {
											props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
										}), copy(element, {
											props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
										})], callback);
								}
								return "";
							});
				}
		}
	};
	var defaultStylisPlugins = [prefixer];
	var createCache = function createCache2(options) {
		var key = options.key;
		if (key === "css") {
			var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
			Array.prototype.forEach.call(ssrStyles, function(node2) {
				var dataEmotionAttribute = node2.getAttribute("data-emotion");
				if (dataEmotionAttribute.indexOf(" ") === -1) {
					return;
				}
				document.head.appendChild(node2);
				node2.setAttribute("data-s", "");
			});
		}
		var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
		var inserted = {};
		var container;
		var nodesToHydrate = [];
		{
			container = options.container || document.head;
			Array.prototype.forEach.call(
					// this means we will ignore elements which don't have a space in them which
					// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
					document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
					function(node2) {
						var attrib = node2.getAttribute("data-emotion").split(" ");
						for (var i = 1; i < attrib.length; i++) {
							inserted[attrib[i]] = true;
						}
						nodesToHydrate.push(node2);
					}
			);
		}
		var _insert;
		var omnipresentPlugins = [compat, removeLabel];
		{
			var currentSheet;
			var finalizingPlugins = [stringify, rulesheet(function(rule) {
				currentSheet.insert(rule);
			})];
			var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
			var stylis = function stylis2(styles) {
				return serialize(compile(styles), serializer);
			};
			_insert = function insert(selector, serialized, sheet, shouldCache) {
				currentSheet = sheet;
				stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
				if (shouldCache) {
					cache.inserted[serialized.name] = true;
				}
			};
		}
		var cache = {
			key,
			sheet: new StyleSheet({
				key,
				container,
				nonce: options.nonce,
				speedy: options.speedy,
				prepend: options.prepend,
				insertionPoint: options.insertionPoint
			}),
			nonce: options.nonce,
			inserted,
			registered: {},
			insert: _insert
		};
		cache.sheet.hydrate(nodesToHydrate);
		return cache;
	};
	function _extends$2() {
		_extends$2 = Object.assign ? Object.assign.bind() : function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		};
		return _extends$2.apply(this, arguments);
	}
	var reactIsExports = {};
	var reactIs$1 = {
		get exports() {
			return reactIsExports;
		},
		set exports(v2) {
			reactIsExports = v2;
		}
	};
	var reactIs_production_min = {};
	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f$1 = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k$1 = b ? Symbol.for("react.context") : 60110, l$1 = b ? Symbol.for("react.async_mode") : 60111, m$2 = b ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b ? Symbol.for("react.forward_ref") : 60112, p$2 = b ? Symbol.for("react.suspense") : 60113, q$1 = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v$1 = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
	function z$1(a) {
		if ("object" === typeof a && null !== a) {
			var u2 = a.$$typeof;
			switch (u2) {
				case c:
					switch (a = a.type, a) {
						case l$1:
						case m$2:
						case e:
						case g:
						case f$1:
						case p$2:
							return a;
						default:
							switch (a = a && a.$$typeof, a) {
								case k$1:
								case n$1:
								case t:
								case r:
								case h:
									return a;
								default:
									return u2;
							}
					}
				case d:
					return u2;
			}
		}
	}
	function A$1(a) {
		return z$1(a) === m$2;
	}
	reactIs_production_min.AsyncMode = l$1;
	reactIs_production_min.ConcurrentMode = m$2;
	reactIs_production_min.ContextConsumer = k$1;
	reactIs_production_min.ContextProvider = h;
	reactIs_production_min.Element = c;
	reactIs_production_min.ForwardRef = n$1;
	reactIs_production_min.Fragment = e;
	reactIs_production_min.Lazy = t;
	reactIs_production_min.Memo = r;
	reactIs_production_min.Portal = d;
	reactIs_production_min.Profiler = g;
	reactIs_production_min.StrictMode = f$1;
	reactIs_production_min.Suspense = p$2;
	reactIs_production_min.isAsyncMode = function(a) {
		return A$1(a) || z$1(a) === l$1;
	};
	reactIs_production_min.isConcurrentMode = A$1;
	reactIs_production_min.isContextConsumer = function(a) {
		return z$1(a) === k$1;
	};
	reactIs_production_min.isContextProvider = function(a) {
		return z$1(a) === h;
	};
	reactIs_production_min.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	reactIs_production_min.isForwardRef = function(a) {
		return z$1(a) === n$1;
	};
	reactIs_production_min.isFragment = function(a) {
		return z$1(a) === e;
	};
	reactIs_production_min.isLazy = function(a) {
		return z$1(a) === t;
	};
	reactIs_production_min.isMemo = function(a) {
		return z$1(a) === r;
	};
	reactIs_production_min.isPortal = function(a) {
		return z$1(a) === d;
	};
	reactIs_production_min.isProfiler = function(a) {
		return z$1(a) === g;
	};
	reactIs_production_min.isStrictMode = function(a) {
		return z$1(a) === f$1;
	};
	reactIs_production_min.isSuspense = function(a) {
		return z$1(a) === p$2;
	};
	reactIs_production_min.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m$2 || a === g || a === f$1 || a === p$2 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v$1);
	};
	reactIs_production_min.typeOf = z$1;
	(function(module) {
		{
			module.exports = reactIs_production_min;
		}
	})(reactIs$1);
	var reactIs = reactIsExports;
	var FORWARD_REF_STATICS = {
		"$$typeof": true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		"$$typeof": true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	var isBrowser = true;
	function getRegisteredStyles(registered, registeredStyles, classNames) {
		var rawClassName = "";
		classNames.split(" ").forEach(function(className) {
			if (registered[className] !== void 0) {
				registeredStyles.push(registered[className] + ";");
			} else {
				rawClassName += className + " ";
			}
		});
		return rawClassName;
	}
	var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
		var className = cache.key + "-" + serialized.name;
		if (
				// we only need to add the styles to the registered cache if the
				// class name could be used further down
				// the tree but if it's a string tag, we know it won't
				// so we don't have to add it to registered cache.
				// this improves memory usage since we can avoid storing the whole style string
				(isStringTag === false || // we need to always store it if we're in compat mode and
				 // in node since emotion-server relies on whether a style is in
				 // the registered cache to know whether a style is global or not
				 // also, note that this check will be dead code eliminated in the browser
				 isBrowser === false) && cache.registered[className] === void 0
		) {
			cache.registered[className] = serialized.styles;
		}
	};
	var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
		registerStyles(cache, serialized, isStringTag);
		var className = cache.key + "-" + serialized.name;
		if (cache.inserted[serialized.name] === void 0) {
			var current = serialized;
			do {
				cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
				current = current.next;
			} while (current !== void 0);
		}
	};
	function murmur2(str) {
		var h2 = 0;
		var k2, i = 0, len = str.length;
		for (; len >= 4; ++i, len -= 4) {
			k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
			k2 = /* Math.imul(k, m): */
					(k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
			k2 ^= /* k >>> r: */
					k2 >>> 24;
			h2 = /* Math.imul(k, m): */
					(k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
					(h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
		}
		switch (len) {
			case 3:
				h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
			case 2:
				h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
			case 1:
				h2 ^= str.charCodeAt(i) & 255;
				h2 = /* Math.imul(h, m): */
						(h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
		}
		h2 ^= h2 >>> 13;
		h2 = /* Math.imul(h, m): */
				(h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
		return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
	}
	var unitlessKeys = {
		animationIterationCount: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		// SVG-related properties
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	};
	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
	var isCustomProperty = function isCustomProperty2(property) {
		return property.charCodeAt(1) === 45;
	};
	var isProcessableValue = function isProcessableValue2(value) {
		return value != null && typeof value !== "boolean";
	};
	var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
		return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
	});
	var processStyleValue = function processStyleValue2(key, value) {
		switch (key) {
			case "animation":
			case "animationName": {
				if (typeof value === "string") {
					return value.replace(animationRegex, function(match2, p1, p2) {
						cursor = {
							name: p1,
							styles: p2,
							next: cursor
						};
						return p1;
					});
				}
			}
		}
		if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
			return value + "px";
		}
		return value;
	};
	var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
	function handleInterpolation(mergedProps, registered, interpolation) {
		if (interpolation == null) {
			return "";
		}
		if (interpolation.__emotion_styles !== void 0) {
			return interpolation;
		}
		switch (typeof interpolation) {
			case "boolean": {
				return "";
			}
			case "object": {
				if (interpolation.anim === 1) {
					cursor = {
						name: interpolation.name,
						styles: interpolation.styles,
						next: cursor
					};
					return interpolation.name;
				}
				if (interpolation.styles !== void 0) {
					var next2 = interpolation.next;
					if (next2 !== void 0) {
						while (next2 !== void 0) {
							cursor = {
								name: next2.name,
								styles: next2.styles,
								next: cursor
							};
							next2 = next2.next;
						}
					}
					var styles = interpolation.styles + ";";
					return styles;
				}
				return createStringFromObject(mergedProps, registered, interpolation);
			}
			case "function": {
				if (mergedProps !== void 0) {
					var previousCursor = cursor;
					var result = interpolation(mergedProps);
					cursor = previousCursor;
					return handleInterpolation(mergedProps, registered, result);
				}
				break;
			}
		}
		if (registered == null) {
			return interpolation;
		}
		var cached = registered[interpolation];
		return cached !== void 0 ? cached : interpolation;
	}
	function createStringFromObject(mergedProps, registered, obj) {
		var string = "";
		if (Array.isArray(obj)) {
			for (var i = 0; i < obj.length; i++) {
				string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
			}
		} else {
			for (var _key in obj) {
				var value = obj[_key];
				if (typeof value !== "object") {
					if (registered != null && registered[value] !== void 0) {
						string += _key + "{" + registered[value] + "}";
					} else if (isProcessableValue(value)) {
						string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
					}
				} else {
					if (_key === "NO_COMPONENT_SELECTOR" && false) {
						throw new Error(noComponentSelectorMessage);
					}
					if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
						for (var _i = 0; _i < value.length; _i++) {
							if (isProcessableValue(value[_i])) {
								string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
							}
						}
					} else {
						var interpolated = handleInterpolation(mergedProps, registered, value);
						switch (_key) {
							case "animation":
							case "animationName": {
								string += processStyleName(_key) + ":" + interpolated + ";";
								break;
							}
							default: {
								string += _key + "{" + interpolated + "}";
							}
						}
					}
				}
			}
		}
		return string;
	}
	var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
	var cursor;
	var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
		if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
			return args[0];
		}
		var stringMode = true;
		var styles = "";
		cursor = void 0;
		var strings = args[0];
		if (strings == null || strings.raw === void 0) {
			stringMode = false;
			styles += handleInterpolation(mergedProps, registered, strings);
		} else {
			styles += strings[0];
		}
		for (var i = 1; i < args.length; i++) {
			styles += handleInterpolation(mergedProps, registered, args[i]);
			if (stringMode) {
				styles += strings[i];
			}
		}
		labelPattern.lastIndex = 0;
		var identifierName = "";
		var match2;
		while ((match2 = labelPattern.exec(styles)) !== null) {
			identifierName += "-" + // $FlowFixMe we know it's not null
			                  match2[1];
		}
		var name = murmur2(styles) + identifierName;
		return {
			name,
			styles,
			next: cursor
		};
	};
	var syncFallback = function syncFallback2(create) {
		return create();
	};
	var useInsertionEffect = React$1["useInsertionEffect"] ? React$1["useInsertionEffect"] : false;
	var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
	var hasOwnProperty = {}.hasOwnProperty;
	var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
			// we're doing this to avoid preconstruct's dead code elimination in this one case
			// because this module is primarily intended for the browser and node
			// but it's also required in react native and similar environments sometimes
			// and we could have a special build just for that
			// but this is much easier and the native packages
			// might use a different theme context in the future anyway
			typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
				key: "css"
			}) : null
	);
	EmotionCacheContext.Provider;
	var withEmotionCache = function withEmotionCache2(func) {
		return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
			var cache = reactExports.useContext(EmotionCacheContext);
			return func(props, cache, ref);
		});
	};
	var ThemeContext = /* @__PURE__ */ reactExports.createContext({});
	var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
	var createEmotionProps = function createEmotionProps2(type, props) {
		var newProps = {};
		for (var key in props) {
			if (hasOwnProperty.call(props, key)) {
				newProps[key] = props[key];
			}
		}
		newProps[typePropName] = type;
		return newProps;
	};
	var Insertion = function Insertion2(_ref35) {
		var cache = _ref35.cache, serialized = _ref35.serialized, isStringTag = _ref35.isStringTag;
		registerStyles(cache, serialized, isStringTag);
		useInsertionEffectAlwaysWithSyncFallback(function() {
			return insertStyles(cache, serialized, isStringTag);
		});
		return null;
	};
	var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
		var cssProp = props.css;
		if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
			cssProp = cache.registered[cssProp];
		}
		var WrappedComponent = props[typePropName];
		var registeredStyles = [cssProp];
		var className = "";
		if (typeof props.className === "string") {
			className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
		} else if (props.className != null) {
			className = props.className + " ";
		}
		var serialized = serializeStyles(registeredStyles, void 0, reactExports.useContext(ThemeContext));
		className += cache.key + "-" + serialized.name;
		var newProps = {};
		for (var key in props) {
			if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && true) {
				newProps[key] = props[key];
			}
		}
		newProps.ref = ref;
		newProps.className = className;
		return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion, {
			cache,
			serialized,
			isStringTag: typeof WrappedComponent === "string"
		}), /* @__PURE__ */ reactExports.createElement(WrappedComponent, newProps));
	});
	var jsxRuntimeExports = {};
	var jsxRuntime = {
		get exports() {
			return jsxRuntimeExports;
		},
		set exports(v2) {
			jsxRuntimeExports = v2;
		}
	};
	var reactJsxRuntime_production_min = {};
	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
	function q(c2, a, g2) {
		var b2, d2 = {}, e2 = null, h2 = null;
		void 0 !== g2 && (e2 = "" + g2);
		void 0 !== a.key && (e2 = "" + a.key);
		void 0 !== a.ref && (h2 = a.ref);
		for (b2 in a)
			m$1.call(a, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a[b2]);
		if (c2 && c2.defaultProps)
			for (b2 in a = c2.defaultProps, a)
				void 0 === d2[b2] && (d2[b2] = a[b2]);
		return { $$typeof: k, type: c2, key: e2, ref: h2, props: d2, _owner: n.current };
	}
	reactJsxRuntime_production_min.Fragment = l;
	reactJsxRuntime_production_min.jsx = q;
	reactJsxRuntime_production_min.jsxs = q;
	(function(module) {
		{
			module.exports = reactJsxRuntime_production_min;
		}
	})(jsxRuntime);
	const Fragment$1 = jsxRuntimeExports.Fragment;
	const jsx$1 = jsxRuntimeExports.jsx;
	const jsxs$1 = jsxRuntimeExports.jsxs;
	var Fragment = Fragment$1;
	function jsx(type, props, key) {
		if (!hasOwnProperty.call(props, "css")) {
			return jsx$1(type, props, key);
		}
		return jsx$1(Emotion, createEmotionProps(type, props), key);
	}
	function jsxs(type, props, key) {
		if (!hasOwnProperty.call(props, "css")) {
			return jsxs$1(type, props, key);
		}
		return jsxs$1(Emotion, createEmotionProps(type, props), key);
	}
	var client = {};
	var reactDomExports = {};
	var reactDom = {
		get exports() {
			return reactDomExports;
		},
		set exports(v2) {
			reactDomExports = v2;
		}
	};
	var reactDom_production_min = {};
	var schedulerExports = {};
	var scheduler = {
		get exports() {
			return schedulerExports;
		},
		set exports(v2) {
			schedulerExports = v2;
		}
	};
	var scheduler_production_min = {};
	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	(function(exports) {
		function f2(a, b2) {
			var c2 = a.length;
			a.push(b2);
			a:
					for (; 0 < c2; ) {
						var d2 = c2 - 1 >>> 1, e2 = a[d2];
						if (0 < g2(e2, b2))
							a[d2] = b2, a[c2] = e2, c2 = d2;
						else
							break a;
					}
		}
		function h2(a) {
			return 0 === a.length ? null : a[0];
		}
		function k2(a) {
			if (0 === a.length)
				return null;
			var b2 = a[0], c2 = a.pop();
			if (c2 !== b2) {
				a[0] = c2;
				a:
						for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
							var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
							if (0 > g2(C2, c2))
								n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
							else if (n2 < e2 && 0 > g2(x2, c2))
								a[d2] = x2, a[n2] = c2, d2 = n2;
							else
								break a;
						}
			}
			return b2;
		}
		function g2(a, b2) {
			var c2 = a.sortIndex - b2.sortIndex;
			return 0 !== c2 ? c2 : a.id - b2.id;
		}
		if ("object" === typeof performance && "function" === typeof performance.now) {
			var l2 = performance;
			exports.unstable_now = function() {
				return l2.now();
			};
		} else {
			var p2 = Date, q2 = p2.now();
			exports.unstable_now = function() {
				return p2.now() - q2;
			};
		}
		var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
		"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
		function G2(a) {
			for (var b2 = h2(t2); null !== b2; ) {
				if (null === b2.callback)
					k2(t2);
				else if (b2.startTime <= a)
					k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
				else
					break;
				b2 = h2(t2);
			}
		}
		function H2(a) {
			B2 = false;
			G2(a);
			if (!A2)
				if (null !== h2(r2))
					A2 = true, I2(J2);
				else {
					var b2 = h2(t2);
					null !== b2 && K2(H2, b2.startTime - a);
				}
		}
		function J2(a, b2) {
			A2 = false;
			B2 && (B2 = false, E2(L2), L2 = -1);
			z2 = true;
			var c2 = y2;
			try {
				G2(b2);
				for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
					var d2 = v2.callback;
					if ("function" === typeof d2) {
						v2.callback = null;
						y2 = v2.priorityLevel;
						var e2 = d2(v2.expirationTime <= b2);
						b2 = exports.unstable_now();
						"function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
						G2(b2);
					} else
						k2(r2);
					v2 = h2(r2);
				}
				if (null !== v2)
					var w2 = true;
				else {
					var m2 = h2(t2);
					null !== m2 && K2(H2, m2.startTime - b2);
					w2 = false;
				}
				return w2;
			} finally {
				v2 = null, y2 = c2, z2 = false;
			}
		}
		var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
		function M2() {
			return exports.unstable_now() - Q2 < P2 ? false : true;
		}
		function R2() {
			if (null !== O2) {
				var a = exports.unstable_now();
				Q2 = a;
				var b2 = true;
				try {
					b2 = O2(true, a);
				} finally {
					b2 ? S2() : (N2 = false, O2 = null);
				}
			} else
				N2 = false;
		}
		var S2;
		if ("function" === typeof F2)
			S2 = function() {
				F2(R2);
			};
		else if ("undefined" !== typeof MessageChannel) {
			var T2 = new MessageChannel(), U2 = T2.port2;
			T2.port1.onmessage = R2;
			S2 = function() {
				U2.postMessage(null);
			};
		} else
			S2 = function() {
				D2(R2, 0);
			};
		function I2(a) {
			O2 = a;
			N2 || (N2 = true, S2());
		}
		function K2(a, b2) {
			L2 = D2(function() {
				a(exports.unstable_now());
			}, b2);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function(a) {
			a.callback = null;
		};
		exports.unstable_continueExecution = function() {
			A2 || z2 || (A2 = true, I2(J2));
		};
		exports.unstable_forceFrameRate = function(a) {
			0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
		};
		exports.unstable_getCurrentPriorityLevel = function() {
			return y2;
		};
		exports.unstable_getFirstCallbackNode = function() {
			return h2(r2);
		};
		exports.unstable_next = function(a) {
			switch (y2) {
				case 1:
				case 2:
				case 3:
					var b2 = 3;
					break;
				default:
					b2 = y2;
			}
			var c2 = y2;
			y2 = b2;
			try {
				return a();
			} finally {
				y2 = c2;
			}
		};
		exports.unstable_pauseExecution = function() {
		};
		exports.unstable_requestPaint = function() {
		};
		exports.unstable_runWithPriority = function(a, b2) {
			switch (a) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					a = 3;
			}
			var c2 = y2;
			y2 = a;
			try {
				return b2();
			} finally {
				y2 = c2;
			}
		};
		exports.unstable_scheduleCallback = function(a, b2, c2) {
			var d2 = exports.unstable_now();
			"object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
			switch (a) {
				case 1:
					var e2 = -1;
					break;
				case 2:
					e2 = 250;
					break;
				case 5:
					e2 = 1073741823;
					break;
				case 4:
					e2 = 1e4;
					break;
				default:
					e2 = 5e3;
			}
			e2 = c2 + e2;
			a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
			c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
			return a;
		};
		exports.unstable_shouldYield = M2;
		exports.unstable_wrapCallback = function(a) {
			var b2 = y2;
			return function() {
				var c2 = y2;
				y2 = b2;
				try {
					return a.apply(this, arguments);
				} finally {
					y2 = c2;
				}
			};
		};
	})(scheduler_production_min);
	(function(module) {
		{
			module.exports = scheduler_production_min;
		}
	})(scheduler);
	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var aa = reactExports, ca = schedulerExports;
	function p(a) {
		for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
			b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
		return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = /* @__PURE__ */ new Set(), ea = {};
	function fa(a, b2) {
		ha(a, b2);
		ha(a + "Capture", b2);
	}
	function ha(a, b2) {
		ea[a] = b2;
		for (a = 0; a < b2.length; a++)
			da.add(b2[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
	function oa(a) {
		if (ja.call(ma, a))
			return true;
		if (ja.call(la, a))
			return false;
		if (ka.test(a))
			return ma[a] = true;
		la[a] = true;
		return false;
	}
	function pa(a, b2, c2, d2) {
		if (null !== c2 && 0 === c2.type)
			return false;
		switch (typeof b2) {
			case "function":
			case "symbol":
				return true;
			case "boolean":
				if (d2)
					return false;
				if (null !== c2)
					return !c2.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default:
				return false;
		}
	}
	function qa(a, b2, c2, d2) {
		if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2))
			return true;
		if (d2)
			return false;
		if (null !== c2)
			switch (c2.type) {
				case 3:
					return !b2;
				case 4:
					return false === b2;
				case 5:
					return isNaN(b2);
				case 6:
					return isNaN(b2) || 1 > b2;
			}
		return false;
	}
	function v(a, b2, c2, d2, e2, f2, g2) {
		this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
		this.attributeName = d2;
		this.attributeNamespace = e2;
		this.mustUseProperty = c2;
		this.propertyName = a;
		this.type = b2;
		this.sanitizeURL = f2;
		this.removeEmptyString = g2;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, false, a, null, false, false);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
		var b2 = a[0];
		z[b2] = new v(b2, 1, false, a[1], null, false, false);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
		z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
		z[a] = new v(a, 2, false, a, null, false, false);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
	});
	["checked", "multiple", "muted", "selected"].forEach(function(a) {
		z[a] = new v(a, 3, true, a, null, false, false);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, false, a, null, false, false);
	});
	["cols", "rows", "size", "span"].forEach(function(a) {
		z[a] = new v(a, 6, false, a, null, false, false);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b2 = a.replace(
				ra,
				sa
		);
		z[b2] = new v(b2, 1, false, a, null, false, false);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b2 = a.replace(ra, sa);
		z[b2] = new v(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
		var b2 = a.replace(ra, sa);
		z[b2] = new v(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
	});
	z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
	["src", "href", "action", "formAction"].forEach(function(a) {
		z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
	});
	function ta(a, b2, c2, d2) {
		var e2 = z.hasOwnProperty(b2) ? z[b2] : null;
		if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
			qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a)
			return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign, La;
	function Ma(a) {
		if (void 0 === La)
			try {
				throw Error();
			} catch (c2) {
				var b2 = c2.stack.trim().match(/\n( *(at )?)/);
				La = b2 && b2[1] || "";
			}
		return "\n" + La + a;
	}
	var Na = false;
	function Oa(a, b2) {
		if (!a || Na)
			return "";
		Na = true;
		var c2 = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b2)
				if (b2 = function() {
					throw Error();
				}, Object.defineProperty(b2.prototype, "props", { set: function() {
						throw Error();
					} }), "object" === typeof Reflect && Reflect.construct) {
					try {
						Reflect.construct(b2, []);
					} catch (l2) {
						var d2 = l2;
					}
					Reflect.construct(a, [], b2);
				} else {
					try {
						b2.call();
					} catch (l2) {
						d2 = l2;
					}
					a.call(b2.prototype);
				}
			else {
				try {
					throw Error();
				} catch (l2) {
					d2 = l2;
				}
				a();
			}
		} catch (l2) {
			if (l2 && d2 && "string" === typeof l2.stack) {
				for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
					h2--;
				for (; 1 <= g2 && 0 <= h2; g2--, h2--)
					if (e2[g2] !== f2[h2]) {
						if (1 !== g2 || 1 !== h2) {
							do
								if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
									var k2 = "\n" + e2[g2].replace(" at new ", " at ");
									a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
									return k2;
								}
							while (1 <= g2 && 0 <= h2);
						}
						break;
					}
			}
		} finally {
			Na = false, Error.prepareStackTrace = c2;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5:
				return Ma(a.type);
			case 16:
				return Ma("Lazy");
			case 13:
				return Ma("Suspense");
			case 19:
				return Ma("SuspenseList");
			case 0:
			case 2:
			case 15:
				return a = Oa(a.type, false), a;
			case 11:
				return a = Oa(a.type.render, false), a;
			case 1:
				return a = Oa(a.type, true), a;
			default:
				return "";
		}
	}
	function Qa(a) {
		if (null == a)
			return null;
		if ("function" === typeof a)
			return a.displayName || a.name || null;
		if ("string" === typeof a)
			return a;
		switch (a) {
			case ya:
				return "Fragment";
			case wa:
				return "Portal";
			case Aa:
				return "Profiler";
			case za:
				return "StrictMode";
			case Ea:
				return "Suspense";
			case Fa:
				return "SuspenseList";
		}
		if ("object" === typeof a)
			switch (a.$$typeof) {
				case Ca:
					return (a.displayName || "Context") + ".Consumer";
				case Ba:
					return (a._context.displayName || "Context") + ".Provider";
				case Da:
					var b2 = a.render;
					a = a.displayName;
					a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
					return a;
				case Ga:
					return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
				case Ha:
					b2 = a._payload;
					a = a._init;
					try {
						return Qa(a(b2));
					} catch (c2) {
					}
			}
		return null;
	}
	function Ra(a) {
		var b2 = a.type;
		switch (a.tag) {
			case 24:
				return "Cache";
			case 9:
				return (b2.displayName || "Context") + ".Consumer";
			case 10:
				return (b2._context.displayName || "Context") + ".Provider";
			case 18:
				return "DehydratedFragment";
			case 11:
				return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7:
				return "Fragment";
			case 5:
				return b2;
			case 4:
				return "Portal";
			case 3:
				return "Root";
			case 6:
				return "Text";
			case 16:
				return Qa(b2);
			case 8:
				return b2 === za ? "StrictMode" : "Mode";
			case 22:
				return "Offscreen";
			case 12:
				return "Profiler";
			case 21:
				return "Scope";
			case 13:
				return "Suspense";
			case 19:
				return "SuspenseList";
			case 25:
				return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b2)
					return b2.displayName || b2.name || null;
				if ("string" === typeof b2)
					return b2;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return a;
			case "object":
				return a;
			default:
				return "";
		}
	}
	function Ta(a) {
		var b2 = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
	}
	function Ua(a) {
		var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
		if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
			var e2 = c2.get, f2 = c2.set;
			Object.defineProperty(a, b2, { configurable: true, get: function() {
					return e2.call(this);
				}, set: function(a2) {
					d2 = "" + a2;
					f2.call(this, a2);
				} });
			Object.defineProperty(a, b2, { enumerable: c2.enumerable });
			return { getValue: function() {
					return d2;
				}, setValue: function(a2) {
					d2 = "" + a2;
				}, stopTracking: function() {
					a._valueTracker = null;
					delete a[b2];
				} };
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a)
			return false;
		var b2 = a._valueTracker;
		if (!b2)
			return true;
		var c2 = b2.getValue();
		var d2 = "";
		a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d2;
		return a !== c2 ? (b2.setValue(a), true) : false;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a)
			return null;
		try {
			return a.activeElement || a.body;
		} catch (b2) {
			return a.body;
		}
	}
	function Ya(a, b2) {
		var c2 = b2.checked;
		return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
	}
	function Za(a, b2) {
		var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
		c2 = Sa(null != b2.value ? b2.value : c2);
		a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
	}
	function ab(a, b2) {
		b2 = b2.checked;
		null != b2 && ta(a, "checked", b2, false);
	}
	function bb(a, b2) {
		ab(a, b2);
		var c2 = Sa(b2.value), d2 = b2.type;
		if (null != c2)
			if ("number" === d2) {
				if (0 === c2 && "" === a.value || a.value != c2)
					a.value = "" + c2;
			} else
				a.value !== "" + c2 && (a.value = "" + c2);
		else if ("submit" === d2 || "reset" === d2) {
			a.removeAttribute("value");
			return;
		}
		b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
		null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
	}
	function db(a, b2, c2) {
		if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
			var d2 = b2.type;
			if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
				return;
			b2 = "" + a._wrapperState.initialValue;
			c2 || b2 === a.value || (a.value = b2);
			a.defaultValue = b2;
		}
		c2 = a.name;
		"" !== c2 && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c2 && (a.name = c2);
	}
	function cb(a, b2, c2) {
		if ("number" !== b2 || Xa(a.ownerDocument) !== a)
			null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
	}
	var eb = Array.isArray;
	function fb(a, b2, c2, d2) {
		a = a.options;
		if (b2) {
			b2 = {};
			for (var e2 = 0; e2 < c2.length; e2++)
				b2["$" + c2[e2]] = true;
			for (c2 = 0; c2 < a.length; c2++)
				e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
		} else {
			c2 = "" + Sa(c2);
			b2 = null;
			for (e2 = 0; e2 < a.length; e2++) {
				if (a[e2].value === c2) {
					a[e2].selected = true;
					d2 && (a[e2].defaultSelected = true);
					return;
				}
				null !== b2 || a[e2].disabled || (b2 = a[e2]);
			}
			null !== b2 && (b2.selected = true);
		}
	}
	function gb(a, b2) {
		if (null != b2.dangerouslySetInnerHTML)
			throw Error(p(91));
		return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
	}
	function hb(a, b2) {
		var c2 = b2.value;
		if (null == c2) {
			c2 = b2.children;
			b2 = b2.defaultValue;
			if (null != c2) {
				if (null != b2)
					throw Error(p(92));
				if (eb(c2)) {
					if (1 < c2.length)
						throw Error(p(93));
					c2 = c2[0];
				}
				b2 = c2;
			}
			null == b2 && (b2 = "");
			c2 = b2;
		}
		a._wrapperState = { initialValue: Sa(c2) };
	}
	function ib(a, b2) {
		var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
		null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
		null != d2 && (a.defaultValue = "" + d2);
	}
	function jb(a) {
		var b2 = a.textContent;
		b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
	}
	function kb(a) {
		switch (a) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b2) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb, nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b2, c2, d2, e2);
			});
		} : a;
	}(function(a, b2) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
			a.innerHTML = b2;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
			for (b2 = mb.firstChild; a.firstChild; )
				a.removeChild(a.firstChild);
			for (; b2.firstChild; )
				a.appendChild(b2.firstChild);
		}
	});
	function ob(a, b2) {
		if (b2) {
			var c2 = a.firstChild;
			if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
				c2.nodeValue = b2;
				return;
			}
		}
		a.textContent = b2;
	}
	var pb = {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageOutset: true,
		borderImageSlice: true,
		borderImageWidth: true,
		boxFlex: true,
		boxFlexGroup: true,
		boxOrdinalGroup: true,
		columnCount: true,
		columns: true,
		flex: true,
		flexGrow: true,
		flexPositive: true,
		flexShrink: true,
		flexNegative: true,
		flexOrder: true,
		gridArea: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowSpan: true,
		gridRowStart: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnSpan: true,
		gridColumnStart: true,
		fontWeight: true,
		lineClamp: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		tabSize: true,
		widows: true,
		zIndex: true,
		zoom: true,
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeDasharray: true,
		strokeDashoffset: true,
		strokeMiterlimit: true,
		strokeOpacity: true,
		strokeWidth: true
	}, qb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b2) {
			b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b2] = pb[a];
		});
	});
	function rb(a, b2, c2) {
		return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
	}
	function sb(a, b2) {
		a = a.style;
		for (var c2 in b2)
			if (b2.hasOwnProperty(c2)) {
				var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
				"float" === c2 && (c2 = "cssFloat");
				d2 ? a.setProperty(c2, e2) : a[c2] = e2;
			}
	}
	var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
	function ub(a, b2) {
		if (b2) {
			if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
				throw Error(p(137, a));
			if (null != b2.dangerouslySetInnerHTML) {
				if (null != b2.children)
					throw Error(p(60));
				if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
					throw Error(p(61));
			}
			if (null != b2.style && "object" !== typeof b2.style)
				throw Error(p(62));
		}
	}
	function vb(a, b2) {
		if (-1 === a.indexOf("-"))
			return "string" === typeof b2.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return false;
			default:
				return true;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null, zb = null, Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb)
				throw Error(p(280));
			var b2 = a.stateNode;
			b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b2 = Ab;
			Ab = zb = null;
			Bb(a);
			if (b2)
				for (a = 0; a < b2.length; a++)
					Bb(b2[a]);
		}
	}
	function Gb(a, b2) {
		return a(b2);
	}
	function Hb() {
	}
	var Ib = false;
	function Jb(a, b2, c2) {
		if (Ib)
			return a(b2, c2);
		Ib = true;
		try {
			return Gb(a, b2, c2);
		} finally {
			if (Ib = false, null !== zb || null !== Ab)
				Hb(), Fb();
		}
	}
	function Kb(a, b2) {
		var c2 = a.stateNode;
		if (null === c2)
			return null;
		var d2 = Db(c2);
		if (null === d2)
			return null;
		c2 = d2[b2];
		a:
				switch (b2) {
					case "onClick":
					case "onClickCapture":
					case "onDoubleClick":
					case "onDoubleClickCapture":
					case "onMouseDown":
					case "onMouseDownCapture":
					case "onMouseMove":
					case "onMouseMoveCapture":
					case "onMouseUp":
					case "onMouseUpCapture":
					case "onMouseEnter":
						(d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
						a = !d2;
						break a;
					default:
						a = false;
				}
		if (a)
			return null;
		if (c2 && "function" !== typeof c2)
			throw Error(p(231, b2, typeof c2));
		return c2;
	}
	var Lb = false;
	if (ia)
		try {
			var Mb = {};
			Object.defineProperty(Mb, "passive", { get: function() {
					Lb = true;
				} });
			window.addEventListener("test", Mb, Mb);
			window.removeEventListener("test", Mb, Mb);
		} catch (a) {
			Lb = false;
		}
	function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
		var l2 = Array.prototype.slice.call(arguments, 3);
		try {
			b2.apply(c2, l2);
		} catch (m2) {
			this.onError(m2);
		}
	}
	var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
			Ob = true;
			Pb = a;
		} };
	function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
		Ob = false;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l2 = Pb;
				Ob = false;
				Pb = null;
			} else
				throw Error(p(198));
			Qb || (Qb = true, Rb = l2);
		}
	}
	function Vb(a) {
		var b2 = a, c2 = a;
		if (a.alternate)
			for (; b2.return; )
				b2 = b2.return;
		else {
			a = b2;
			do
				b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
			while (a);
		}
		return 3 === b2.tag ? c2 : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b2 = a.memoizedState;
			null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
			if (null !== b2)
				return b2.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a)
			throw Error(p(188));
	}
	function Yb(a) {
		var b2 = a.alternate;
		if (!b2) {
			b2 = Vb(a);
			if (null === b2)
				throw Error(p(188));
			return b2 !== a ? null : a;
		}
		for (var c2 = a, d2 = b2; ; ) {
			var e2 = c2.return;
			if (null === e2)
				break;
			var f2 = e2.alternate;
			if (null === f2) {
				d2 = e2.return;
				if (null !== d2) {
					c2 = d2;
					continue;
				}
				break;
			}
			if (e2.child === f2.child) {
				for (f2 = e2.child; f2; ) {
					if (f2 === c2)
						return Xb(e2), a;
					if (f2 === d2)
						return Xb(e2), b2;
					f2 = f2.sibling;
				}
				throw Error(p(188));
			}
			if (c2.return !== d2.return)
				c2 = e2, d2 = f2;
			else {
				for (var g2 = false, h2 = e2.child; h2; ) {
					if (h2 === c2) {
						g2 = true;
						c2 = e2;
						d2 = f2;
						break;
					}
					if (h2 === d2) {
						g2 = true;
						d2 = e2;
						c2 = f2;
						break;
					}
					h2 = h2.sibling;
				}
				if (!g2) {
					for (h2 = f2.child; h2; ) {
						if (h2 === c2) {
							g2 = true;
							c2 = f2;
							d2 = e2;
							break;
						}
						if (h2 === d2) {
							g2 = true;
							d2 = f2;
							c2 = e2;
							break;
						}
						h2 = h2.sibling;
					}
					if (!g2)
						throw Error(p(189));
				}
			}
			if (c2.alternate !== d2)
				throw Error(p(190));
		}
		if (3 !== c2.tag)
			throw Error(p(188));
		return c2.stateNode.current === c2 ? a : b2;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag)
			return a;
		for (a = a.child; null !== a; ) {
			var b2 = $b(a);
			if (null !== b2)
				return b2;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot)
			try {
				lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
			} catch (b2) {
			}
	}
	var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64, sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return a & 130023424;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return a;
		}
	}
	function uc(a, b2) {
		var c2 = a.pendingLanes;
		if (0 === c2)
			return 0;
		var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
		if (0 !== g2) {
			var h2 = g2 & ~e2;
			0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
		} else
			g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
		if (0 === d2)
			return 0;
		if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
			return b2;
		0 !== (d2 & 4) && (d2 |= c2 & 16);
		b2 = a.entangledLanes;
		if (0 !== b2)
			for (a = a.entanglements, b2 &= d2; 0 < b2; )
				c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
		return d2;
	}
	function vc(a, b2) {
		switch (a) {
			case 1:
			case 2:
			case 4:
				return b2 + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return b2 + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function wc(a, b2) {
		for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
			var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
			if (-1 === k2) {
				if (0 === (h2 & c2) || 0 !== (h2 & d2))
					e2[g2] = vc(h2, b2);
			} else
				k2 <= b2 && (a.expiredLanes |= h2);
			f2 &= ~h2;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b2 = [], c2 = 0; 31 > c2; c2++)
			b2.push(a);
		return b2;
	}
	function Ac(a, b2, c2) {
		a.pendingLanes |= b2;
		536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b2 = 31 - oc(b2);
		a[b2] = c2;
	}
	function Bc(a, b2) {
		var c2 = a.pendingLanes & ~b2;
		a.pendingLanes = b2;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b2;
		a.mutableReadLanes &= b2;
		a.entangledLanes &= b2;
		b2 = a.entanglements;
		var d2 = a.eventTimes;
		for (a = a.expirationTimes; 0 < c2; ) {
			var e2 = 31 - oc(c2), f2 = 1 << e2;
			b2[e2] = 0;
			d2[e2] = -1;
			a[e2] = -1;
			c2 &= ~f2;
		}
	}
	function Cc(a, b2) {
		var c2 = a.entangledLanes |= b2;
		for (a = a.entanglements; c2; ) {
			var d2 = 31 - oc(c2), e2 = 1 << d2;
			e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
			c2 &= ~e2;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b2) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b2.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Pc.delete(b2.pointerId);
		}
	}
	function Tc(a, b2, c2, d2, e2, f2) {
		if (null === a || a.nativeEvent !== f2)
			return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
		a.eventSystemFlags |= d2;
		b2 = a.targetContainers;
		null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
		return a;
	}
	function Uc(a, b2, c2, d2, e2) {
		switch (b2) {
			case "focusin":
				return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
			case "dragenter":
				return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
			case "mouseover":
				return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
			case "pointerover":
				var f2 = e2.pointerId;
				Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
				return true;
			case "gotpointercapture":
				return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
		}
		return false;
	}
	function Vc(a) {
		var b2 = Wc(a.target);
		if (null !== b2) {
			var c2 = Vb(b2);
			if (null !== c2) {
				if (b2 = c2.tag, 13 === b2) {
					if (b2 = Wb(c2), null !== b2) {
						a.blockedOn = b2;
						Ic(a.priority, function() {
							Gc(c2);
						});
						return;
					}
				} else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn)
			return false;
		for (var b2 = a.targetContainers; 0 < b2.length; ) {
			var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
			if (null === c2) {
				c2 = a.nativeEvent;
				var d2 = new c2.constructor(c2.type, c2);
				wb = d2;
				c2.target.dispatchEvent(d2);
				wb = null;
			} else
				return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
			b2.shift();
		}
		return true;
	}
	function Zc(a, b2, c2) {
		Xc(a) && c2.delete(b2);
	}
	function $c() {
		Jc = false;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b2) {
		a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b2(b3) {
			return ad(b3, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c2 = 1; c2 < Kc.length; c2++) {
				var d2 = Kc[c2];
				d2.blockedOn === a && (d2.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b2);
		Pc.forEach(b2);
		for (c2 = 0; c2 < Qc.length; c2++)
			d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
		for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
			Vc(c2), null === c2.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig, dd = true;
	function ed(a, b2, c2, d2) {
		var e2 = C, f2 = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b2, c2, d2);
		} finally {
			C = e2, cd.transition = f2;
		}
	}
	function gd(a, b2, c2, d2) {
		var e2 = C, f2 = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b2, c2, d2);
		} finally {
			C = e2, cd.transition = f2;
		}
	}
	function fd(a, b2, c2, d2) {
		if (dd) {
			var e2 = Yc(a, b2, c2, d2);
			if (null === e2)
				hd(a, b2, d2, id, c2), Sc(a, d2);
			else if (Uc(e2, a, b2, c2, d2))
				d2.stopPropagation();
			else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e2; ) {
					var f2 = Cb(e2);
					null !== f2 && Ec(f2);
					f2 = Yc(a, b2, c2, d2);
					null === f2 && hd(a, b2, d2, id, c2);
					if (f2 === e2)
						break;
					e2 = f2;
				}
				null !== e2 && d2.stopPropagation();
			} else
				hd(a, b2, d2, null, c2);
		}
	}
	var id = null;
	function Yc(a, b2, c2, d2) {
		id = null;
		a = xb(d2);
		a = Wc(a);
		if (null !== a)
			if (b2 = Vb(a), null === b2)
				a = null;
			else if (c2 = b2.tag, 13 === c2) {
				a = Wb(b2);
				if (null !== a)
					return a;
				a = null;
			} else if (3 === c2) {
				if (b2.stateNode.current.memoizedState.isDehydrated)
					return 3 === b2.tag ? b2.stateNode.containerInfo : null;
				a = null;
			} else
				b2 !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 4;
			case "message":
				switch (ec()) {
					case fc:
						return 1;
					case gc:
						return 4;
					case hc:
					case ic:
						return 16;
					case jc:
						return 536870912;
					default:
						return 16;
				}
			default:
				return 16;
		}
	}
	var kd = null, ld = null, md = null;
	function nd() {
		if (md)
			return md;
		var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
		for (a = 0; a < c2 && b2[a] === e2[a]; a++)
			;
		var g2 = c2 - a;
		for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
			;
		return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
	}
	function od(a) {
		var b2 = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return true;
	}
	function qd() {
		return false;
	}
	function rd(a) {
		function b2(b3, d2, e2, f2, g2) {
			this._reactName = b3;
			this._targetInst = e2;
			this.type = d2;
			this.nativeEvent = f2;
			this.target = g2;
			this.currentTarget = null;
			for (var c2 in a)
				a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
			this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b2.prototype, { preventDefault: function() {
				this.defaultPrevented = true;
				var a2 = this.nativeEvent;
				a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
			}, stopPropagation: function() {
				var a2 = this.nativeEvent;
				a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
			}, persist: function() {
			}, isPersistent: pd });
		return b2;
	}
	var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
			return a.timeStamp || Date.now();
		}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		}, movementX: function(a) {
			if ("movementX" in a)
				return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		}, movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
			return "clipboardData" in a ? a.clipboardData : window.clipboardData;
		} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
	function Pd(a) {
		var b2 = this.nativeEvent;
		return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
	}
	function zd() {
		return Pd;
	}
	var Qd = A({}, ud, { key: function(a) {
			if (a.key) {
				var b2 = Md[a.key] || a.key;
				if ("Unidentified" !== b2)
					return b2;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		}, keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}, which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
	function ge(a, b2) {
		switch (a) {
			case "keyup":
				return -1 !== $d.indexOf(b2.keyCode);
			case "keydown":
				return 229 !== b2.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout":
				return true;
			default:
				return false;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = false;
	function je(a, b2) {
		switch (a) {
			case "compositionend":
				return he(b2);
			case "keypress":
				if (32 !== b2.which)
					return null;
				fe = true;
				return ee;
			case "textInput":
				return a = b2.data, a === ee && fe ? null : a;
			default:
				return null;
		}
	}
	function ke(a, b2) {
		if (ie)
			return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
		switch (a) {
			case "paste":
				return null;
			case "keypress":
				if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
					if (b2.char && 1 < b2.char.length)
						return b2.char;
					if (b2.which)
						return String.fromCharCode(b2.which);
				}
				return null;
			case "compositionend":
				return de && "ko" !== b2.locale ? null : b2.data;
			default:
				return null;
		}
	}
	var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
	function me(a) {
		var b2 = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
	}
	function ne(a, b2, c2, d2) {
		Eb(d2);
		b2 = oe(b2, "onChange");
		0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
	}
	var pe = null, qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		var b2 = ue(a);
		if (Wa(b2))
			return a;
	}
	function ve(a, b2) {
		if ("change" === a)
			return b2;
	}
	var we = false;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else
			xe = false;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b2 = [];
			ne(b2, qe, a, xb(a));
			Jb(re, b2);
		}
	}
	function Ce(a, b2, c2) {
		"focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a)
			return te(qe);
	}
	function Ee(a, b2) {
		if ("click" === a)
			return te(b2);
	}
	function Fe(a, b2) {
		if ("input" === a || "change" === a)
			return te(b2);
	}
	function Ge(a, b2) {
		return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b2) {
		if (He(a, b2))
			return true;
		if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
			return false;
		var c2 = Object.keys(a), d2 = Object.keys(b2);
		if (c2.length !== d2.length)
			return false;
		for (d2 = 0; d2 < c2.length; d2++) {
			var e2 = c2[d2];
			if (!ja.call(b2, e2) || !He(a[e2], b2[e2]))
				return false;
		}
		return true;
	}
	function Je(a) {
		for (; a && a.firstChild; )
			a = a.firstChild;
		return a;
	}
	function Ke(a, b2) {
		var c2 = Je(a);
		a = 0;
		for (var d2; c2; ) {
			if (3 === c2.nodeType) {
				d2 = a + c2.textContent.length;
				if (a <= b2 && d2 >= b2)
					return { node: c2, offset: b2 - a };
				a = d2;
			}
			a: {
				for (; c2; ) {
					if (c2.nextSibling) {
						c2 = c2.nextSibling;
						break a;
					}
					c2 = c2.parentNode;
				}
				c2 = void 0;
			}
			c2 = Je(c2);
		}
	}
	function Le(a, b2) {
		return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
	}
	function Me() {
		for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
			try {
				var c2 = "string" === typeof b2.contentWindow.location.href;
			} catch (d2) {
				c2 = false;
			}
			if (c2)
				a = b2.contentWindow;
			else
				break;
			b2 = Xa(a.document);
		}
		return b2;
	}
	function Ne(a) {
		var b2 = a && a.nodeName && a.nodeName.toLowerCase();
		return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
		if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
			if (null !== d2 && Ne(c2)) {
				if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2)
					c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
				else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
					d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
					!a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
					e2 = Ke(c2, f2);
					var g2 = Ke(
							c2,
							d2
					);
					e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
				}
			}
			b2 = [];
			for (a = c2; a = a.parentNode; )
				1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
			"function" === typeof c2.focus && c2.focus();
			for (c2 = 0; c2 < b2.length; c2++)
				a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
	function Ue(a, b2, c2) {
		var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
		Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
	}
	function Ve(a, b2) {
		var c2 = {};
		c2[a.toLowerCase()] = b2.toLowerCase();
		c2["Webkit" + a] = "webkit" + b2;
		c2["Moz" + a] = "moz" + b2;
		return c2;
	}
	var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a])
			return Xe[a];
		if (!We[a])
			return a;
		var b2 = We[a], c2;
		for (c2 in b2)
			if (b2.hasOwnProperty(c2) && c2 in Ye)
				return Xe[a] = b2[c2];
		return a;
	}
	var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b2) {
		df.set(a, b2);
		fa(b2, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
		ff(jf, "on" + kf);
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b2, c2) {
		var d2 = a.type || "unknown-event";
		a.currentTarget = c2;
		Ub(d2, b2, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b2) {
		b2 = 0 !== (b2 & 4);
		for (var c2 = 0; c2 < a.length; c2++) {
			var d2 = a[c2], e2 = d2.event;
			d2 = d2.listeners;
			a: {
				var f2 = void 0;
				if (b2)
					for (var g2 = d2.length - 1; 0 <= g2; g2--) {
						var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
						h2 = h2.listener;
						if (k2 !== f2 && e2.isPropagationStopped())
							break a;
						nf(e2, h2, l2);
						f2 = k2;
					}
				else
					for (g2 = 0; g2 < d2.length; g2++) {
						h2 = d2[g2];
						k2 = h2.instance;
						l2 = h2.currentTarget;
						h2 = h2.listener;
						if (k2 !== f2 && e2.isPropagationStopped())
							break a;
						nf(e2, h2, l2);
						f2 = k2;
					}
			}
		}
		if (Qb)
			throw a = Rb, Qb = false, Rb = null, a;
	}
	function D(a, b2) {
		var c2 = b2[of];
		void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
		var d2 = a + "__bubble";
		c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
	}
	function qf(a, b2, c2) {
		var d2 = 0;
		b2 && (d2 |= 4);
		pf(c2, a, d2, b2);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = true;
			da.forEach(function(b3) {
				"selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
			});
			var b2 = 9 === a.nodeType ? a : a.ownerDocument;
			null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
		}
	}
	function pf(a, b2, c2, d2) {
		switch (jd(b2)) {
			case 1:
				var e2 = ed;
				break;
			case 4:
				e2 = gd;
				break;
			default:
				e2 = fd;
		}
		c2 = e2.bind(null, b2, c2, a);
		e2 = void 0;
		!Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
		d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
	}
	function hd(a, b2, c2, d2, e2) {
		var f2 = d2;
		if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
			a:
					for (; ; ) {
						if (null === d2)
							return;
						var g2 = d2.tag;
						if (3 === g2 || 4 === g2) {
							var h2 = d2.stateNode.containerInfo;
							if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
								break;
							if (4 === g2)
								for (g2 = d2.return; null !== g2; ) {
									var k2 = g2.tag;
									if (3 === k2 || 4 === k2) {
										if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
											return;
									}
									g2 = g2.return;
								}
							for (; null !== h2; ) {
								g2 = Wc(h2);
								if (null === g2)
									return;
								k2 = g2.tag;
								if (5 === k2 || 6 === k2) {
									d2 = f2 = g2;
									continue a;
								}
								h2 = h2.parentNode;
							}
						}
						d2 = d2.return;
					}
		Jb(function() {
			var d3 = f2, e3 = xb(c2), g3 = [];
			a: {
				var h3 = df.get(a);
				if (void 0 !== h3) {
					var k3 = td, n2 = a;
					switch (a) {
						case "keypress":
							if (0 === od(c2))
								break a;
						case "keydown":
						case "keyup":
							k3 = Rd;
							break;
						case "focusin":
							n2 = "focus";
							k3 = Fd;
							break;
						case "focusout":
							n2 = "blur";
							k3 = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k3 = Fd;
							break;
						case "click":
							if (2 === c2.button)
								break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k3 = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k3 = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k3 = Vd;
							break;
						case $e:
						case af:
						case bf:
							k3 = Hd;
							break;
						case cf:
							k3 = Xd;
							break;
						case "scroll":
							k3 = vd;
							break;
						case "wheel":
							k3 = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k3 = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							k3 = Td;
					}
					var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
					t2 = [];
					for (var w2 = d3, u2; null !== w2; ) {
						u2 = w2;
						var F2 = u2.stateNode;
						5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
						if (J2)
							break;
						w2 = w2.return;
					}
					0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
				}
			}
			if (0 === (b2 & 7)) {
				a: {
					h3 = "mouseover" === a || "pointerover" === a;
					k3 = "mouseout" === a || "pointerout" === a;
					if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
						break a;
					if (k3 || h3) {
						h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
						if (k3) {
							if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
								n2 = null;
						} else
							k3 = null, n2 = d3;
						if (k3 !== n2) {
							t2 = Bd;
							F2 = "onMouseLeave";
							x2 = "onMouseEnter";
							w2 = "mouse";
							if ("pointerout" === a || "pointerover" === a)
								t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
							J2 = null == k3 ? h3 : ue(k3);
							u2 = null == n2 ? h3 : ue(n2);
							h3 = new t2(F2, w2 + "leave", k3, c2, e3);
							h3.target = J2;
							h3.relatedTarget = u2;
							F2 = null;
							Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
							J2 = F2;
							if (k3 && n2)
								b: {
									t2 = k3;
									x2 = n2;
									w2 = 0;
									for (u2 = t2; u2; u2 = vf(u2))
										w2++;
									u2 = 0;
									for (F2 = x2; F2; F2 = vf(F2))
										u2++;
									for (; 0 < w2 - u2; )
										t2 = vf(t2), w2--;
									for (; 0 < u2 - w2; )
										x2 = vf(x2), u2--;
									for (; w2--; ) {
										if (t2 === x2 || null !== x2 && t2 === x2.alternate)
											break b;
										t2 = vf(t2);
										x2 = vf(x2);
									}
									t2 = null;
								}
							else
								t2 = null;
							null !== k3 && wf(g3, h3, k3, t2, false);
							null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
						}
					}
				}
				a: {
					h3 = d3 ? ue(d3) : window;
					k3 = h3.nodeName && h3.nodeName.toLowerCase();
					if ("select" === k3 || "input" === k3 && "file" === h3.type)
						var na = ve;
					else if (me(h3))
						if (we)
							na = Fe;
						else {
							na = De;
							var xa = Ce;
						}
					else
						(k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
					if (na && (na = na(a, d3))) {
						ne(g3, na, c2, e3);
						break a;
					}
					xa && xa(a, h3, d3);
					"focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
				}
				xa = d3 ? ue(d3) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable)
							Qe = xa, Re = d3, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = true;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = false;
						Ue(g3, c2, e3);
						break;
					case "selectionchange":
						if (Pe)
							break;
					case "keydown":
					case "keyup":
						Ue(g3, c2, e3);
				}
				var $a;
				if (ae)
					b: {
						switch (a) {
							case "compositionstart":
								var ba = "onCompositionStart";
								break b;
							case "compositionend":
								ba = "onCompositionEnd";
								break b;
							case "compositionupdate":
								ba = "onCompositionUpdate";
								break b;
						}
						ba = void 0;
					}
				else
					ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c2) : ke(a, c2))
					d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
			}
			se(g3, b2);
		});
	}
	function tf(a, b2, c2) {
		return { instance: a, listener: b2, currentTarget: c2 };
	}
	function oe(a, b2) {
		for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
			var e2 = a, f2 = e2.stateNode;
			5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
			a = a.return;
		}
		return d2;
	}
	function vf(a) {
		if (null === a)
			return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b2, c2, d2, e2) {
		for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
			var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
			if (null !== k2 && k2 === d2)
				break;
			5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
			c2 = c2.return;
		}
		0 !== g2.length && a.push({ event: b2, listeners: g2 });
	}
	var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b2, c2) {
		b2 = zf(b2);
		if (zf(a) !== b2 && c2)
			throw Error(p(425));
	}
	function Bf() {
	}
	var Cf = null, Df = null;
	function Ef(a, b2) {
		return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b2) {
		var c2 = b2, d2 = 0;
		do {
			var e2 = c2.nextSibling;
			a.removeChild(c2);
			if (e2 && 8 === e2.nodeType)
				if (c2 = e2.data, "/$" === c2) {
					if (0 === d2) {
						a.removeChild(e2);
						bd(b2);
						return;
					}
					d2--;
				} else
					"$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
			c2 = e2;
		} while (c2);
		bd(b2);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b2 = a.nodeType;
			if (1 === b2 || 3 === b2)
				break;
			if (8 === b2) {
				b2 = a.data;
				if ("$" === b2 || "$!" === b2 || "$?" === b2)
					break;
				if ("/$" === b2)
					return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b2 = 0; a; ) {
			if (8 === a.nodeType) {
				var c2 = a.data;
				if ("$" === c2 || "$!" === c2 || "$?" === c2) {
					if (0 === b2)
						return a;
					b2--;
				} else
					"/$" === c2 && b2++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b2 = a[Of];
		if (b2)
			return b2;
		for (var c2 = a.parentNode; c2; ) {
			if (b2 = c2[uf] || c2[Of]) {
				c2 = b2.alternate;
				if (null !== b2.child || null !== c2 && null !== c2.child)
					for (a = Mf(a); null !== a; ) {
						if (c2 = a[Of])
							return c2;
						a = Mf(a);
					}
				return b2;
			}
			a = c2;
			c2 = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag)
			return a.stateNode;
		throw Error(p(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [], Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b2) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b2;
	}
	var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
	function Yf(a, b2) {
		var c2 = a.type.contextTypes;
		if (!c2)
			return Vf;
		var d2 = a.stateNode;
		if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
			return d2.__reactInternalMemoizedMaskedChildContext;
		var e2 = {}, f2;
		for (f2 in c2)
			e2[f2] = b2[f2];
		d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
		return e2;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b2, c2) {
		if (H.current !== Vf)
			throw Error(p(168));
		G(H, b2);
		G(Wf, c2);
	}
	function bg(a, b2, c2) {
		var d2 = a.stateNode;
		b2 = b2.childContextTypes;
		if ("function" !== typeof d2.getChildContext)
			return c2;
		d2 = d2.getChildContext();
		for (var e2 in d2)
			if (!(e2 in b2))
				throw Error(p(108, Ra(a) || "Unknown", e2));
		return A({}, c2, d2);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return true;
	}
	function dg(a, b2, c2) {
		var d2 = a.stateNode;
		if (!d2)
			throw Error(p(169));
		c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c2);
	}
	var eg = null, fg = false, gg = false;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = true;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = true;
			var a = 0, b2 = C;
			try {
				var c2 = eg;
				for (C = 1; a < c2.length; a++) {
					var d2 = c2[a];
					do
						d2 = d2(true);
					while (null !== d2);
				}
				eg = null;
				fg = false;
			} catch (e2) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
			} finally {
				C = b2, gg = false;
			}
		}
		return null;
	}
	var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
	function tg(a, b2) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b2;
	}
	function ug(a, b2, c2) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d2 = rg;
		a = sg;
		var e2 = 32 - oc(d2) - 1;
		d2 &= ~(1 << e2);
		c2 += 1;
		var f2 = 32 - oc(b2) + e2;
		if (30 < f2) {
			var g2 = e2 - e2 % 5;
			f2 = (d2 & (1 << g2) - 1).toString(32);
			d2 >>= g2;
			e2 -= g2;
			rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
			sg = f2 + a;
		} else
			rg = 1 << f2 | c2 << e2 | d2, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg; )
			mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg; )
			qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null, yg = null, I = false, zg = null;
	function Ag(a, b2) {
		var c2 = Bg(5, null, null, 0);
		c2.elementType = "DELETED";
		c2.stateNode = b2;
		c2.return = a;
		b2 = a.deletions;
		null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
	}
	function Cg(a, b2) {
		switch (a.tag) {
			case 5:
				var c2 = a.type;
				b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
				return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
			case 6:
				return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
			case 13:
				return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
			default:
				return false;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b2 = yg;
			if (b2) {
				var c2 = b2;
				if (!Cg(a, b2)) {
					if (Dg(a))
						throw Error(p(418));
					b2 = Lf(c2.nextSibling);
					var d2 = xg;
					b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
				}
			} else {
				if (Dg(a))
					throw Error(p(418));
				a.flags = a.flags & -4097 | 2;
				I = false;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
			a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg)
			return false;
		if (!I)
			return Fg(a), I = true, false;
		var b2;
		(b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
		if (b2 && (b2 = yg)) {
			if (Dg(a))
				throw Hg(), Error(p(418));
			for (; b2; )
				Ag(a, b2), b2 = Lf(b2.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a)
				throw Error(p(317));
			a: {
				a = a.nextSibling;
				for (b2 = 0; a; ) {
					if (8 === a.nodeType) {
						var c2 = a.data;
						if ("/$" === c2) {
							if (0 === b2) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b2--;
						} else
							"$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else
			yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return true;
	}
	function Hg() {
		for (var a = yg; a; )
			a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = false;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b2) {
		if (a && a.defaultProps) {
			b2 = A({}, b2);
			a = a.defaultProps;
			for (var c2 in a)
				void 0 === b2[c2] && (b2[c2] = a[c2]);
			return b2;
		}
		return b2;
	}
	var Mg = Uf(null), Ng = null, Og = null, Pg = null;
	function Qg() {
		Pg = Og = Ng = null;
	}
	function Rg(a) {
		var b2 = Mg.current;
		E(Mg);
		a._currentValue = b2;
	}
	function Sg(a, b2, c2) {
		for (; null !== a; ) {
			var d2 = a.alternate;
			(a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
			if (a === c2)
				break;
			a = a.return;
		}
	}
	function Tg(a, b2) {
		Ng = a;
		Pg = Og = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
	}
	function Vg(a) {
		var b2 = a._currentValue;
		if (Pg !== a)
			if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
				if (null === Ng)
					throw Error(p(308));
				Og = a;
				Ng.dependencies = { lanes: 0, firstContext: a };
			} else
				Og = Og.next = a;
		return b2;
	}
	var Wg = null;
	function Xg(a) {
		null === Wg ? Wg = [a] : Wg.push(a);
	}
	function Yg(a, b2, c2, d2) {
		var e2 = b2.interleaved;
		null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
		b2.interleaved = c2;
		return Zg(a, d2);
	}
	function Zg(a, b2) {
		a.lanes |= b2;
		var c2 = a.alternate;
		null !== c2 && (c2.lanes |= b2);
		c2 = a;
		for (a = a.return; null !== a; )
			a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
		return 3 === c2.tag ? c2.stateNode : null;
	}
	var $g = false;
	function ah(a) {
		a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
	}
	function bh(a, b2) {
		a = a.updateQueue;
		b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
	}
	function ch(a, b2) {
		return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
	}
	function dh(a, b2, c2) {
		var d2 = a.updateQueue;
		if (null === d2)
			return null;
		d2 = d2.shared;
		if (0 !== (K & 2)) {
			var e2 = d2.pending;
			null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
			d2.pending = b2;
			return Zg(a, c2);
		}
		e2 = d2.interleaved;
		null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
		d2.interleaved = b2;
		return Zg(a, c2);
	}
	function eh(a, b2, c2) {
		b2 = b2.updateQueue;
		if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
			var d2 = b2.lanes;
			d2 &= a.pendingLanes;
			c2 |= d2;
			b2.lanes = c2;
			Cc(a, c2);
		}
	}
	function fh(a, b2) {
		var c2 = a.updateQueue, d2 = a.alternate;
		if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
			var e2 = null, f2 = null;
			c2 = c2.firstBaseUpdate;
			if (null !== c2) {
				do {
					var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
					null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
					c2 = c2.next;
				} while (null !== c2);
				null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
			} else
				e2 = f2 = b2;
			c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
			a.updateQueue = c2;
			return;
		}
		a = c2.lastBaseUpdate;
		null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
		c2.lastBaseUpdate = b2;
	}
	function gh(a, b2, c2, d2) {
		var e2 = a.updateQueue;
		$g = false;
		var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
		if (null !== h2) {
			e2.shared.pending = null;
			var k2 = h2, l2 = k2.next;
			k2.next = null;
			null === g2 ? f2 = l2 : g2.next = l2;
			g2 = k2;
			var m2 = a.alternate;
			null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
		}
		if (null !== f2) {
			var q2 = e2.baseState;
			g2 = 0;
			m2 = l2 = k2 = null;
			h2 = f2;
			do {
				var r2 = h2.lane, y2 = h2.eventTime;
				if ((d2 & r2) === r2) {
					null !== m2 && (m2 = m2.next = {
						eventTime: y2,
						lane: 0,
						tag: h2.tag,
						payload: h2.payload,
						callback: h2.callback,
						next: null
					});
					a: {
						var n2 = a, t2 = h2;
						r2 = b2;
						y2 = c2;
						switch (t2.tag) {
							case 1:
								n2 = t2.payload;
								if ("function" === typeof n2) {
									q2 = n2.call(y2, q2, r2);
									break a;
								}
								q2 = n2;
								break a;
							case 3:
								n2.flags = n2.flags & -65537 | 128;
							case 0:
								n2 = t2.payload;
								r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
								if (null === r2 || void 0 === r2)
									break a;
								q2 = A({}, q2, r2);
								break a;
							case 2:
								$g = true;
						}
					}
					null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
				} else
					y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
				h2 = h2.next;
				if (null === h2)
					if (h2 = e2.shared.pending, null === h2)
						break;
					else
						r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
			} while (1);
			null === m2 && (k2 = q2);
			e2.baseState = k2;
			e2.firstBaseUpdate = l2;
			e2.lastBaseUpdate = m2;
			b2 = e2.shared.interleaved;
			if (null !== b2) {
				e2 = b2;
				do
					g2 |= e2.lane, e2 = e2.next;
				while (e2 !== b2);
			} else
				null === f2 && (e2.shared.lanes = 0);
			hh |= g2;
			a.lanes = g2;
			a.memoizedState = q2;
		}
	}
	function ih(a, b2, c2) {
		a = b2.effects;
		b2.effects = null;
		if (null !== a)
			for (b2 = 0; b2 < a.length; b2++) {
				var d2 = a[b2], e2 = d2.callback;
				if (null !== e2) {
					d2.callback = null;
					d2 = c2;
					if ("function" !== typeof e2)
						throw Error(p(191, e2));
					e2.call(d2);
				}
			}
	}
	var jh = new aa.Component().refs;
	function kh(a, b2, c2, d2) {
		b2 = a.memoizedState;
		c2 = c2(d2, b2);
		c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
		a.memoizedState = c2;
		0 === a.lanes && (a.updateQueue.baseState = c2);
	}
	var nh = { isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : false;
		}, enqueueSetState: function(a, b2, c2) {
			a = a._reactInternals;
			var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
			f2.payload = b2;
			void 0 !== c2 && null !== c2 && (f2.callback = c2);
			b2 = dh(a, f2, e2);
			null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
		}, enqueueReplaceState: function(a, b2, c2) {
			a = a._reactInternals;
			var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
			f2.tag = 1;
			f2.payload = b2;
			void 0 !== c2 && null !== c2 && (f2.callback = c2);
			b2 = dh(a, f2, e2);
			null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
		}, enqueueForceUpdate: function(a, b2) {
			a = a._reactInternals;
			var c2 = L(), d2 = lh(a), e2 = ch(c2, d2);
			e2.tag = 2;
			void 0 !== b2 && null !== b2 && (e2.callback = b2);
			b2 = dh(a, e2, d2);
			null !== b2 && (mh(b2, a, d2, c2), eh(b2, a, d2));
		} };
	function oh(a, b2, c2, d2, e2, f2, g2) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
	}
	function ph(a, b2, c2) {
		var d2 = false, e2 = Vf;
		var f2 = b2.contextType;
		"object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
		b2 = new b2(c2, f2);
		a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
		b2.updater = nh;
		a.stateNode = b2;
		b2._reactInternals = a;
		d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
		return b2;
	}
	function qh(a, b2, c2, d2) {
		a = b2.state;
		"function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
		"function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
		b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
	}
	function rh(a, b2, c2, d2) {
		var e2 = a.stateNode;
		e2.props = c2;
		e2.state = a.memoizedState;
		e2.refs = jh;
		ah(a);
		var f2 = b2.contextType;
		"object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
		e2.state = a.memoizedState;
		f2 = b2.getDerivedStateFromProps;
		"function" === typeof f2 && (kh(a, b2, f2, c2), e2.state = a.memoizedState);
		"function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c2, e2, d2), e2.state = a.memoizedState);
		"function" === typeof e2.componentDidMount && (a.flags |= 4194308);
	}
	function sh(a, b2, c2) {
		a = c2.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c2._owner) {
				c2 = c2._owner;
				if (c2) {
					if (1 !== c2.tag)
						throw Error(p(309));
					var d2 = c2.stateNode;
				}
				if (!d2)
					throw Error(p(147, a));
				var e2 = d2, f2 = "" + a;
				if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
					return b2.ref;
				b2 = function(a2) {
					var b3 = e2.refs;
					b3 === jh && (b3 = e2.refs = {});
					null === a2 ? delete b3[f2] : b3[f2] = a2;
				};
				b2._stringRef = f2;
				return b2;
			}
			if ("string" !== typeof a)
				throw Error(p(284));
			if (!c2._owner)
				throw Error(p(290, a));
		}
		return a;
	}
	function th(a, b2) {
		a = Object.prototype.toString.call(b2);
		throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
	}
	function uh(a) {
		var b2 = a._init;
		return b2(a._payload);
	}
	function vh(a) {
		function b2(b3, c3) {
			if (a) {
				var d3 = b3.deletions;
				null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
			}
		}
		function c2(c3, d3) {
			if (!a)
				return null;
			for (; null !== d3; )
				b2(c3, d3), d3 = d3.sibling;
			return null;
		}
		function d2(a2, b3) {
			for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
				null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
			return a2;
		}
		function e2(a2, b3) {
			a2 = wh(a2, b3);
			a2.index = 0;
			a2.sibling = null;
			return a2;
		}
		function f2(b3, c3, d3) {
			b3.index = d3;
			if (!a)
				return b3.flags |= 1048576, c3;
			d3 = b3.alternate;
			if (null !== d3)
				return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
			b3.flags |= 2;
			return c3;
		}
		function g2(b3) {
			a && null === b3.alternate && (b3.flags |= 2);
			return b3;
		}
		function h2(a2, b3, c3, d3) {
			if (null === b3 || 6 !== b3.tag)
				return b3 = xh(c3, a2.mode, d3), b3.return = a2, b3;
			b3 = e2(b3, c3);
			b3.return = a2;
			return b3;
		}
		function k2(a2, b3, c3, d3) {
			var f3 = c3.type;
			if (f3 === ya)
				return m2(a2, b3, c3.props.children, d3, c3.key);
			if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
				return d3 = e2(b3, c3.props), d3.ref = sh(a2, b3, c3), d3.return = a2, d3;
			d3 = yh(c3.type, c3.key, c3.props, null, a2.mode, d3);
			d3.ref = sh(a2, b3, c3);
			d3.return = a2;
			return d3;
		}
		function l2(a2, b3, c3, d3) {
			if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
				return b3 = zh(c3, a2.mode, d3), b3.return = a2, b3;
			b3 = e2(b3, c3.children || []);
			b3.return = a2;
			return b3;
		}
		function m2(a2, b3, c3, d3, f3) {
			if (null === b3 || 7 !== b3.tag)
				return b3 = Ah(c3, a2.mode, d3, f3), b3.return = a2, b3;
			b3 = e2(b3, c3);
			b3.return = a2;
			return b3;
		}
		function q2(a2, b3, c3) {
			if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
				return b3 = xh("" + b3, a2.mode, c3), b3.return = a2, b3;
			if ("object" === typeof b3 && null !== b3) {
				switch (b3.$$typeof) {
					case va:
						return c3 = yh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = sh(a2, null, b3), c3.return = a2, c3;
					case wa:
						return b3 = zh(b3, a2.mode, c3), b3.return = a2, b3;
					case Ha:
						var d3 = b3._init;
						return q2(a2, d3(b3._payload), c3);
				}
				if (eb(b3) || Ka(b3))
					return b3 = Ah(b3, a2.mode, c3, null), b3.return = a2, b3;
				th(a2, b3);
			}
			return null;
		}
		function r2(a2, b3, c3, d3) {
			var e3 = null !== b3 ? b3.key : null;
			if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
				return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
			if ("object" === typeof c3 && null !== c3) {
				switch (c3.$$typeof) {
					case va:
						return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
					case wa:
						return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
					case Ha:
						return e3 = c3._init, r2(
								a2,
								b3,
								e3(c3._payload),
								d3
						);
				}
				if (eb(c3) || Ka(c3))
					return null !== e3 ? null : m2(a2, b3, c3, d3, null);
				th(a2, c3);
			}
			return null;
		}
		function y2(a2, b3, c3, d3, e3) {
			if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
				return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
			if ("object" === typeof d3 && null !== d3) {
				switch (d3.$$typeof) {
					case va:
						return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
					case wa:
						return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
					case Ha:
						var f3 = d3._init;
						return y2(a2, b3, c3, f3(d3._payload), e3);
				}
				if (eb(d3) || Ka(d3))
					return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
				th(b3, d3);
			}
			return null;
		}
		function n2(e3, g3, h3, k3) {
			for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
				u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
				var n3 = r2(e3, u2, h3[w2], k3);
				if (null === n3) {
					null === u2 && (u2 = x2);
					break;
				}
				a && u2 && null === n3.alternate && b2(e3, u2);
				g3 = f2(n3, g3, w2);
				null === m3 ? l3 = n3 : m3.sibling = n3;
				m3 = n3;
				u2 = x2;
			}
			if (w2 === h3.length)
				return c2(e3, u2), I && tg(e3, w2), l3;
			if (null === u2) {
				for (; w2 < h3.length; w2++)
					u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
				I && tg(e3, w2);
				return l3;
			}
			for (u2 = d2(e3, u2); w2 < h3.length; w2++)
				x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
			a && u2.forEach(function(a2) {
				return b2(e3, a2);
			});
			I && tg(e3, w2);
			return l3;
		}
		function t2(e3, g3, h3, k3) {
			var l3 = Ka(h3);
			if ("function" !== typeof l3)
				throw Error(p(150));
			h3 = l3.call(h3);
			if (null == h3)
				throw Error(p(151));
			for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
				m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
				var t3 = r2(e3, m3, n3.value, k3);
				if (null === t3) {
					null === m3 && (m3 = x2);
					break;
				}
				a && m3 && null === t3.alternate && b2(e3, m3);
				g3 = f2(t3, g3, w2);
				null === u2 ? l3 = t3 : u2.sibling = t3;
				u2 = t3;
				m3 = x2;
			}
			if (n3.done)
				return c2(
						e3,
						m3
				), I && tg(e3, w2), l3;
			if (null === m3) {
				for (; !n3.done; w2++, n3 = h3.next())
					n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
				I && tg(e3, w2);
				return l3;
			}
			for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
				n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
			a && m3.forEach(function(a2) {
				return b2(e3, a2);
			});
			I && tg(e3, w2);
			return l3;
		}
		function J2(a2, d3, f3, h3) {
			"object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
			if ("object" === typeof f3 && null !== f3) {
				switch (f3.$$typeof) {
					case va:
						a: {
							for (var k3 = f3.key, l3 = d3; null !== l3; ) {
								if (l3.key === k3) {
									k3 = f3.type;
									if (k3 === ya) {
										if (7 === l3.tag) {
											c2(a2, l3.sibling);
											d3 = e2(l3, f3.props.children);
											d3.return = a2;
											a2 = d3;
											break a;
										}
									} else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
										c2(a2, l3.sibling);
										d3 = e2(l3, f3.props);
										d3.ref = sh(a2, l3, f3);
										d3.return = a2;
										a2 = d3;
										break a;
									}
									c2(a2, l3);
									break;
								} else
									b2(a2, l3);
								l3 = l3.sibling;
							}
							f3.type === ya ? (d3 = Ah(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d3, f3), h3.return = a2, a2 = h3);
						}
						return g2(a2);
					case wa:
						a: {
							for (l3 = f3.key; null !== d3; ) {
								if (d3.key === l3)
									if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
										c2(a2, d3.sibling);
										d3 = e2(d3, f3.children || []);
										d3.return = a2;
										a2 = d3;
										break a;
									} else {
										c2(a2, d3);
										break;
									}
								else
									b2(a2, d3);
								d3 = d3.sibling;
							}
							d3 = zh(f3, a2.mode, h3);
							d3.return = a2;
							a2 = d3;
						}
						return g2(a2);
					case Ha:
						return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
				}
				if (eb(f3))
					return n2(a2, d3, f3, h3);
				if (Ka(f3))
					return t2(a2, d3, f3, h3);
				th(a2, f3);
			}
			return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = xh(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
		}
		return J2;
	}
	var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
	function Hh(a) {
		if (a === Dh)
			throw Error(p(174));
		return a;
	}
	function Ih(a, b2) {
		G(Gh, b2);
		G(Fh, a);
		G(Eh, Dh);
		a = b2.nodeType;
		switch (a) {
			case 9:
			case 11:
				b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
				break;
			default:
				a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
		}
		E(Eh);
		G(Eh, b2);
	}
	function Jh() {
		E(Eh);
		E(Fh);
		E(Gh);
	}
	function Kh(a) {
		Hh(Gh.current);
		var b2 = Hh(Eh.current);
		var c2 = lb(b2, a.type);
		b2 !== c2 && (G(Fh, a), G(Eh, c2));
	}
	function Lh(a) {
		Fh.current === a && (E(Eh), E(Fh));
	}
	var M = Uf(0);
	function Mh(a) {
		for (var b2 = a; null !== b2; ) {
			if (13 === b2.tag) {
				var c2 = b2.memoizedState;
				if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
					return b2;
			} else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
				if (0 !== (b2.flags & 128))
					return b2;
			} else if (null !== b2.child) {
				b2.child.return = b2;
				b2 = b2.child;
				continue;
			}
			if (b2 === a)
				break;
			for (; null === b2.sibling; ) {
				if (null === b2.return || b2.return === a)
					return null;
				b2 = b2.return;
			}
			b2.sibling.return = b2.return;
			b2 = b2.sibling;
		}
		return null;
	}
	var Nh = [];
	function Oh() {
		for (var a = 0; a < Nh.length; a++)
			Nh[a]._workInProgressVersionPrimary = null;
		Nh.length = 0;
	}
	var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
	function Q() {
		throw Error(p(321));
	}
	function Wh(a, b2) {
		if (null === b2)
			return false;
		for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
			if (!He(a[c2], b2[c2]))
				return false;
		return true;
	}
	function Xh(a, b2, c2, d2, e2, f2) {
		Rh = f2;
		N = b2;
		b2.memoizedState = null;
		b2.updateQueue = null;
		b2.lanes = 0;
		Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
		a = c2(d2, e2);
		if (Th) {
			f2 = 0;
			do {
				Th = false;
				Uh = 0;
				if (25 <= f2)
					throw Error(p(301));
				f2 += 1;
				P = O = null;
				b2.updateQueue = null;
				Ph.current = $h;
				a = c2(d2, e2);
			} while (Th);
		}
		Ph.current = ai;
		b2 = null !== O && null !== O.next;
		Rh = 0;
		P = O = N = null;
		Sh = false;
		if (b2)
			throw Error(p(300));
		return a;
	}
	function bi() {
		var a = 0 !== Uh;
		Uh = 0;
		return a;
	}
	function ci() {
		var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
		null === P ? N.memoizedState = P = a : P = P.next = a;
		return P;
	}
	function di() {
		if (null === O) {
			var a = N.alternate;
			a = null !== a ? a.memoizedState : null;
		} else
			a = O.next;
		var b2 = null === P ? N.memoizedState : P.next;
		if (null !== b2)
			P = b2, O = a;
		else {
			if (null === a)
				throw Error(p(310));
			O = a;
			a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
			null === P ? N.memoizedState = P = a : P = P.next = a;
		}
		return P;
	}
	function ei(a, b2) {
		return "function" === typeof b2 ? b2(a) : b2;
	}
	function fi(a) {
		var b2 = di(), c2 = b2.queue;
		if (null === c2)
			throw Error(p(311));
		c2.lastRenderedReducer = a;
		var d2 = O, e2 = d2.baseQueue, f2 = c2.pending;
		if (null !== f2) {
			if (null !== e2) {
				var g2 = e2.next;
				e2.next = f2.next;
				f2.next = g2;
			}
			d2.baseQueue = e2 = f2;
			c2.pending = null;
		}
		if (null !== e2) {
			f2 = e2.next;
			d2 = d2.baseState;
			var h2 = g2 = null, k2 = null, l2 = f2;
			do {
				var m2 = l2.lane;
				if ((Rh & m2) === m2)
					null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
				else {
					var q2 = {
						lane: m2,
						action: l2.action,
						hasEagerState: l2.hasEagerState,
						eagerState: l2.eagerState,
						next: null
					};
					null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
					N.lanes |= m2;
					hh |= m2;
				}
				l2 = l2.next;
			} while (null !== l2 && l2 !== f2);
			null === k2 ? g2 = d2 : k2.next = h2;
			He(d2, b2.memoizedState) || (Ug = true);
			b2.memoizedState = d2;
			b2.baseState = g2;
			b2.baseQueue = k2;
			c2.lastRenderedState = d2;
		}
		a = c2.interleaved;
		if (null !== a) {
			e2 = a;
			do
				f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
			while (e2 !== a);
		} else
			null === e2 && (c2.lanes = 0);
		return [b2.memoizedState, c2.dispatch];
	}
	function gi(a) {
		var b2 = di(), c2 = b2.queue;
		if (null === c2)
			throw Error(p(311));
		c2.lastRenderedReducer = a;
		var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
		if (null !== e2) {
			c2.pending = null;
			var g2 = e2 = e2.next;
			do
				f2 = a(f2, g2.action), g2 = g2.next;
			while (g2 !== e2);
			He(f2, b2.memoizedState) || (Ug = true);
			b2.memoizedState = f2;
			null === b2.baseQueue && (b2.baseState = f2);
			c2.lastRenderedState = f2;
		}
		return [f2, d2];
	}
	function hi() {
	}
	function ii(a, b2) {
		var c2 = N, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
		f2 && (d2.memoizedState = e2, Ug = true);
		d2 = d2.queue;
		ji(ki.bind(null, c2, d2, a), [a]);
		if (d2.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
			c2.flags |= 2048;
			li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
			if (null === R)
				throw Error(p(349));
			0 !== (Rh & 30) || ni(c2, b2, e2);
		}
		return e2;
	}
	function ni(a, b2, c2) {
		a.flags |= 16384;
		a = { getSnapshot: b2, value: c2 };
		b2 = N.updateQueue;
		null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
	}
	function mi(a, b2, c2, d2) {
		b2.value = c2;
		b2.getSnapshot = d2;
		oi(b2) && pi(a);
	}
	function ki(a, b2, c2) {
		return c2(function() {
			oi(b2) && pi(a);
		});
	}
	function oi(a) {
		var b2 = a.getSnapshot;
		a = a.value;
		try {
			var c2 = b2();
			return !He(a, c2);
		} catch (d2) {
			return true;
		}
	}
	function pi(a) {
		var b2 = Zg(a, 1);
		null !== b2 && mh(b2, a, 1, -1);
	}
	function qi(a) {
		var b2 = ci();
		"function" === typeof a && (a = a());
		b2.memoizedState = b2.baseState = a;
		a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
		b2.queue = a;
		a = a.dispatch = ri.bind(null, N, a);
		return [b2.memoizedState, a];
	}
	function li(a, b2, c2, d2) {
		a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
		b2 = N.updateQueue;
		null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
		return a;
	}
	function si() {
		return di().memoizedState;
	}
	function ti(a, b2, c2, d2) {
		var e2 = ci();
		N.flags |= a;
		e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
	}
	function ui(a, b2, c2, d2) {
		var e2 = di();
		d2 = void 0 === d2 ? null : d2;
		var f2 = void 0;
		if (null !== O) {
			var g2 = O.memoizedState;
			f2 = g2.destroy;
			if (null !== d2 && Wh(d2, g2.deps)) {
				e2.memoizedState = li(b2, c2, f2, d2);
				return;
			}
		}
		N.flags |= a;
		e2.memoizedState = li(1 | b2, c2, f2, d2);
	}
	function vi(a, b2) {
		return ti(8390656, 8, a, b2);
	}
	function ji(a, b2) {
		return ui(2048, 8, a, b2);
	}
	function wi(a, b2) {
		return ui(4, 2, a, b2);
	}
	function xi(a, b2) {
		return ui(4, 4, a, b2);
	}
	function yi(a, b2) {
		if ("function" === typeof b2)
			return a = a(), b2(a), function() {
				b2(null);
			};
		if (null !== b2 && void 0 !== b2)
			return a = a(), b2.current = a, function() {
				b2.current = null;
			};
	}
	function zi(a, b2, c2) {
		c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
		return ui(4, 4, yi.bind(null, b2, a), c2);
	}
	function Ai() {
	}
	function Bi(a, b2) {
		var c2 = di();
		b2 = void 0 === b2 ? null : b2;
		var d2 = c2.memoizedState;
		if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
			return d2[0];
		c2.memoizedState = [a, b2];
		return a;
	}
	function Ci(a, b2) {
		var c2 = di();
		b2 = void 0 === b2 ? null : b2;
		var d2 = c2.memoizedState;
		if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
			return d2[0];
		a = a();
		c2.memoizedState = [a, b2];
		return a;
	}
	function Di(a, b2, c2) {
		if (0 === (Rh & 21))
			return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c2;
		He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a.baseState = true);
		return b2;
	}
	function Ei(a, b2) {
		var c2 = C;
		C = 0 !== c2 && 4 > c2 ? c2 : 4;
		a(true);
		var d2 = Qh.transition;
		Qh.transition = {};
		try {
			a(false), b2();
		} finally {
			C = c2, Qh.transition = d2;
		}
	}
	function Fi() {
		return di().memoizedState;
	}
	function Gi(a, b2, c2) {
		var d2 = lh(a);
		c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
		if (Hi(a))
			Ii(b2, c2);
		else if (c2 = Yg(a, b2, c2, d2), null !== c2) {
			var e2 = L();
			mh(c2, a, d2, e2);
			Ji(c2, b2, d2);
		}
	}
	function ri(a, b2, c2) {
		var d2 = lh(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
		if (Hi(a))
			Ii(b2, e2);
		else {
			var f2 = a.alternate;
			if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
				try {
					var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
					e2.hasEagerState = true;
					e2.eagerState = h2;
					if (He(h2, g2)) {
						var k2 = b2.interleaved;
						null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
						b2.interleaved = e2;
						return;
					}
				} catch (l2) {
				} finally {
				}
			c2 = Yg(a, b2, e2, d2);
			null !== c2 && (e2 = L(), mh(c2, a, d2, e2), Ji(c2, b2, d2));
		}
	}
	function Hi(a) {
		var b2 = a.alternate;
		return a === N || null !== b2 && b2 === N;
	}
	function Ii(a, b2) {
		Th = Sh = true;
		var c2 = a.pending;
		null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
		a.pending = b2;
	}
	function Ji(a, b2, c2) {
		if (0 !== (c2 & 4194240)) {
			var d2 = b2.lanes;
			d2 &= a.pendingLanes;
			c2 |= d2;
			b2.lanes = c2;
			Cc(a, c2);
		}
	}
	var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b2) {
			ci().memoizedState = [a, void 0 === b2 ? null : b2];
			return a;
		}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c2) {
			c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
			return ti(
					4194308,
					4,
					yi.bind(null, b2, a),
					c2
			);
		}, useLayoutEffect: function(a, b2) {
			return ti(4194308, 4, a, b2);
		}, useInsertionEffect: function(a, b2) {
			return ti(4, 2, a, b2);
		}, useMemo: function(a, b2) {
			var c2 = ci();
			b2 = void 0 === b2 ? null : b2;
			a = a();
			c2.memoizedState = [a, b2];
			return a;
		}, useReducer: function(a, b2, c2) {
			var d2 = ci();
			b2 = void 0 !== c2 ? c2(b2) : b2;
			d2.memoizedState = d2.baseState = b2;
			a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
			d2.queue = a;
			a = a.dispatch = Gi.bind(null, N, a);
			return [d2.memoizedState, a];
		}, useRef: function(a) {
			var b2 = ci();
			a = { current: a };
			return b2.memoizedState = a;
		}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
			return ci().memoizedState = a;
		}, useTransition: function() {
			var a = qi(false), b2 = a[0];
			a = Ei.bind(null, a[1]);
			ci().memoizedState = a;
			return [b2, a];
		}, useMutableSource: function() {
		}, useSyncExternalStore: function(a, b2, c2) {
			var d2 = N, e2 = ci();
			if (I) {
				if (void 0 === c2)
					throw Error(p(407));
				c2 = c2();
			} else {
				c2 = b2();
				if (null === R)
					throw Error(p(349));
				0 !== (Rh & 30) || ni(d2, b2, c2);
			}
			e2.memoizedState = c2;
			var f2 = { value: c2, getSnapshot: b2 };
			e2.queue = f2;
			vi(ki.bind(
					null,
					d2,
					f2,
					a
			), [a]);
			d2.flags |= 2048;
			li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
			return c2;
		}, useId: function() {
			var a = ci(), b2 = R.identifierPrefix;
			if (I) {
				var c2 = sg;
				var d2 = rg;
				c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
				b2 = ":" + b2 + "R" + c2;
				c2 = Uh++;
				0 < c2 && (b2 += "H" + c2.toString(32));
				b2 += ":";
			} else
				c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
			return a.memoizedState = b2;
		}, unstable_isNewReconciler: false }, Zh = {
		readContext: Vg,
		useCallback: Bi,
		useContext: Vg,
		useEffect: ji,
		useImperativeHandle: zi,
		useInsertionEffect: wi,
		useLayoutEffect: xi,
		useMemo: Ci,
		useReducer: fi,
		useRef: si,
		useState: function() {
			return fi(ei);
		},
		useDebugValue: Ai,
		useDeferredValue: function(a) {
			var b2 = di();
			return Di(b2, O.memoizedState, a);
		},
		useTransition: function() {
			var a = fi(ei)[0], b2 = di().memoizedState;
			return [a, b2];
		},
		useMutableSource: hi,
		useSyncExternalStore: ii,
		useId: Fi,
		unstable_isNewReconciler: false
	}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
			return gi(ei);
		}, useDebugValue: Ai, useDeferredValue: function(a) {
			var b2 = di();
			return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
		}, useTransition: function() {
			var a = gi(ei)[0], b2 = di().memoizedState;
			return [a, b2];
		}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
	function Ki(a, b2) {
		try {
			var c2 = "", d2 = b2;
			do
				c2 += Pa(d2), d2 = d2.return;
			while (d2);
			var e2 = c2;
		} catch (f2) {
			e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
		}
		return { value: a, source: b2, stack: e2, digest: null };
	}
	function Li(a, b2, c2) {
		return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
	}
	function Mi(a, b2) {
		try {
			console.error(b2.value);
		} catch (c2) {
			setTimeout(function() {
				throw c2;
			});
		}
	}
	var Ni = "function" === typeof WeakMap ? WeakMap : Map;
	function Oi(a, b2, c2) {
		c2 = ch(-1, c2);
		c2.tag = 3;
		c2.payload = { element: null };
		var d2 = b2.value;
		c2.callback = function() {
			Pi || (Pi = true, Qi = d2);
			Mi(a, b2);
		};
		return c2;
	}
	function Ri(a, b2, c2) {
		c2 = ch(-1, c2);
		c2.tag = 3;
		var d2 = a.type.getDerivedStateFromError;
		if ("function" === typeof d2) {
			var e2 = b2.value;
			c2.payload = function() {
				return d2(e2);
			};
			c2.callback = function() {
				Mi(a, b2);
			};
		}
		var f2 = a.stateNode;
		null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
			Mi(a, b2);
			"function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
			var c3 = b2.stack;
			this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
		});
		return c2;
	}
	function Ti(a, b2, c2) {
		var d2 = a.pingCache;
		if (null === d2) {
			d2 = a.pingCache = new Ni();
			var e2 = /* @__PURE__ */ new Set();
			d2.set(b2, e2);
		} else
			e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
		e2.has(c2) || (e2.add(c2), a = Ui.bind(null, a, b2, c2), b2.then(a, a));
	}
	function Vi(a) {
		do {
			var b2;
			if (b2 = 13 === a.tag)
				b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
			if (b2)
				return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Wi(a, b2, c2, d2, e2) {
		if (0 === (a.mode & 1))
			return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e2;
		return a;
	}
	var Xi = ua.ReactCurrentOwner, Ug = false;
	function Yi(a, b2, c2, d2) {
		b2.child = null === a ? Ch(b2, null, c2, d2) : Bh(b2, a.child, c2, d2);
	}
	function Zi(a, b2, c2, d2, e2) {
		c2 = c2.render;
		var f2 = b2.ref;
		Tg(b2, e2);
		d2 = Xh(a, b2, c2, d2, f2, e2);
		c2 = bi();
		if (null !== a && !Ug)
			return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
		I && c2 && vg(b2);
		b2.flags |= 1;
		Yi(a, b2, d2, e2);
		return b2.child;
	}
	function aj(a, b2, c2, d2, e2) {
		if (null === a) {
			var f2 = c2.type;
			if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
				return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d2, e2);
			a = yh(c2.type, null, d2, b2, b2.mode, e2);
			a.ref = b2.ref;
			a.return = b2;
			return b2.child = a;
		}
		f2 = a.child;
		if (0 === (a.lanes & e2)) {
			var g2 = f2.memoizedProps;
			c2 = c2.compare;
			c2 = null !== c2 ? c2 : Ie;
			if (c2(g2, d2) && a.ref === b2.ref)
				return $i(a, b2, e2);
		}
		b2.flags |= 1;
		a = wh(f2, d2);
		a.ref = b2.ref;
		a.return = b2;
		return b2.child = a;
	}
	function cj(a, b2, c2, d2, e2) {
		if (null !== a) {
			var f2 = a.memoizedProps;
			if (Ie(f2, d2) && a.ref === b2.ref)
				if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2))
					0 !== (a.flags & 131072) && (Ug = true);
				else
					return b2.lanes = a.lanes, $i(a, b2, e2);
		}
		return dj(a, b2, c2, d2, e2);
	}
	function ej(a, b2, c2) {
		var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
		if ("hidden" === d2.mode)
			if (0 === (b2.mode & 1))
				b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
			else {
				if (0 === (c2 & 1073741824))
					return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a, null;
				b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
				d2 = null !== f2 ? f2.baseLanes : c2;
				G(fj, gj);
				gj |= d2;
			}
		else
			null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
		Yi(a, b2, e2, c2);
		return b2.child;
	}
	function hj(a, b2) {
		var c2 = b2.ref;
		if (null === a && null !== c2 || null !== a && a.ref !== c2)
			b2.flags |= 512, b2.flags |= 2097152;
	}
	function dj(a, b2, c2, d2, e2) {
		var f2 = Zf(c2) ? Xf : H.current;
		f2 = Yf(b2, f2);
		Tg(b2, e2);
		c2 = Xh(a, b2, c2, d2, f2, e2);
		d2 = bi();
		if (null !== a && !Ug)
			return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
		I && d2 && vg(b2);
		b2.flags |= 1;
		Yi(a, b2, c2, e2);
		return b2.child;
	}
	function ij(a, b2, c2, d2, e2) {
		if (Zf(c2)) {
			var f2 = true;
			cg(b2);
		} else
			f2 = false;
		Tg(b2, e2);
		if (null === b2.stateNode)
			jj(a, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
		else if (null === a) {
			var g2 = b2.stateNode, h2 = b2.memoizedProps;
			g2.props = h2;
			var k2 = g2.context, l2 = c2.contextType;
			"object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
			var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
			q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
			$g = false;
			var r2 = b2.memoizedState;
			g2.state = r2;
			gh(b2, d2, g2, e2);
			k2 = b2.memoizedState;
			h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
		} else {
			g2 = b2.stateNode;
			bh(a, b2);
			h2 = b2.memoizedProps;
			l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
			g2.props = l2;
			q2 = b2.pendingProps;
			r2 = g2.context;
			k2 = c2.contextType;
			"object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
			var y2 = c2.getDerivedStateFromProps;
			(m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
			$g = false;
			r2 = b2.memoizedState;
			g2.state = r2;
			gh(b2, d2, g2, e2);
			var n2 = b2.memoizedState;
			h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
		}
		return kj(a, b2, c2, d2, f2, e2);
	}
	function kj(a, b2, c2, d2, e2, f2) {
		hj(a, b2);
		var g2 = 0 !== (b2.flags & 128);
		if (!d2 && !g2)
			return e2 && dg(b2, c2, false), $i(a, b2, f2);
		d2 = b2.stateNode;
		Xi.current = b2;
		var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
		b2.flags |= 1;
		null !== a && g2 ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a, b2, h2, f2);
		b2.memoizedState = d2.state;
		e2 && dg(b2, c2, true);
		return b2.child;
	}
	function lj(a) {
		var b2 = a.stateNode;
		b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
		Ih(a, b2.containerInfo);
	}
	function mj(a, b2, c2, d2, e2) {
		Ig();
		Jg(e2);
		b2.flags |= 256;
		Yi(a, b2, c2, d2);
		return b2.child;
	}
	var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
	function oj(a) {
		return { baseLanes: a, cachePool: null, transitions: null };
	}
	function pj(a, b2, c2) {
		var d2 = b2.pendingProps, e2 = M.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
		(h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
		if (h2)
			f2 = true, b2.flags &= -129;
		else if (null === a || null !== a.memoizedState)
			e2 |= 1;
		G(M, e2 & 1);
		if (null === a) {
			Eg(b2);
			a = b2.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a))
				return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
			g2 = d2.children;
			a = d2.fallback;
			return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a = Ah(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a) : rj(b2, g2);
		}
		e2 = a.memoizedState;
		if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
			return sj(a, b2, g2, d2, h2, e2, c2);
		if (f2) {
			f2 = d2.fallback;
			g2 = b2.mode;
			e2 = a.child;
			h2 = e2.sibling;
			var k2 = { mode: "hidden", children: d2.children };
			0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
			null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
			f2.return = b2;
			d2.return = b2;
			d2.sibling = f2;
			b2.child = d2;
			d2 = f2;
			f2 = b2.child;
			g2 = a.child.memoizedState;
			g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
			f2.memoizedState = g2;
			f2.childLanes = a.childLanes & ~c2;
			b2.memoizedState = nj;
			return d2;
		}
		f2 = a.child;
		a = f2.sibling;
		d2 = wh(f2, { mode: "visible", children: d2.children });
		0 === (b2.mode & 1) && (d2.lanes = c2);
		d2.return = b2;
		d2.sibling = null;
		null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
		b2.child = d2;
		b2.memoizedState = null;
		return d2;
	}
	function rj(a, b2) {
		b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
		b2.return = a;
		return a.child = b2;
	}
	function tj(a, b2, c2, d2) {
		null !== d2 && Jg(d2);
		Bh(b2, a.child, null, c2);
		a = rj(b2, b2.pendingProps.children);
		a.flags |= 2;
		b2.memoizedState = null;
		return a;
	}
	function sj(a, b2, c2, d2, e2, f2, g2) {
		if (c2) {
			if (b2.flags & 256)
				return b2.flags &= -257, d2 = Li(Error(p(422))), tj(a, b2, g2, d2);
			if (null !== b2.memoizedState)
				return b2.child = a.child, b2.flags |= 128, null;
			f2 = d2.fallback;
			e2 = b2.mode;
			d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
			f2 = Ah(f2, e2, g2, null);
			f2.flags |= 2;
			d2.return = b2;
			f2.return = b2;
			d2.sibling = f2;
			b2.child = d2;
			0 !== (b2.mode & 1) && Bh(b2, a.child, null, g2);
			b2.child.memoizedState = oj(g2);
			b2.memoizedState = nj;
			return f2;
		}
		if (0 === (b2.mode & 1))
			return tj(a, b2, g2, null);
		if ("$!" === e2.data) {
			d2 = e2.nextSibling && e2.nextSibling.dataset;
			if (d2)
				var h2 = d2.dgst;
			d2 = h2;
			f2 = Error(p(419));
			d2 = Li(f2, d2, void 0);
			return tj(a, b2, g2, d2);
		}
		h2 = 0 !== (g2 & a.childLanes);
		if (Ug || h2) {
			d2 = R;
			if (null !== d2) {
				switch (g2 & -g2) {
					case 4:
						e2 = 2;
						break;
					case 16:
						e2 = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e2 = 32;
						break;
					case 536870912:
						e2 = 268435456;
						break;
					default:
						e2 = 0;
				}
				e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
				0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d2, a, e2, -1));
			}
			uj();
			d2 = Li(Error(p(421)));
			return tj(a, b2, g2, d2);
		}
		if ("$?" === e2.data)
			return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e2._reactRetry = b2, null;
		a = f2.treeContext;
		yg = Lf(e2.nextSibling);
		xg = b2;
		I = true;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
		b2 = rj(b2, d2.children);
		b2.flags |= 4096;
		return b2;
	}
	function wj(a, b2, c2) {
		a.lanes |= b2;
		var d2 = a.alternate;
		null !== d2 && (d2.lanes |= b2);
		Sg(a.return, b2, c2);
	}
	function xj(a, b2, c2, d2, e2) {
		var f2 = a.memoizedState;
		null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
	}
	function yj(a, b2, c2) {
		var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
		Yi(a, b2, d2.children, c2);
		d2 = M.current;
		if (0 !== (d2 & 2))
			d2 = d2 & 1 | 2, b2.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128))
				a:
						for (a = b2.child; null !== a; ) {
							if (13 === a.tag)
								null !== a.memoizedState && wj(a, c2, b2);
							else if (19 === a.tag)
								wj(a, c2, b2);
							else if (null !== a.child) {
								a.child.return = a;
								a = a.child;
								continue;
							}
							if (a === b2)
								break a;
							for (; null === a.sibling; ) {
								if (null === a.return || a.return === b2)
									break a;
								a = a.return;
							}
							a.sibling.return = a.return;
							a = a.sibling;
						}
			d2 &= 1;
		}
		G(M, d2);
		if (0 === (b2.mode & 1))
			b2.memoizedState = null;
		else
			switch (e2) {
				case "forwards":
					c2 = b2.child;
					for (e2 = null; null !== c2; )
						a = c2.alternate, null !== a && null === Mh(a) && (e2 = c2), c2 = c2.sibling;
					c2 = e2;
					null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
					xj(b2, false, e2, c2, f2);
					break;
				case "backwards":
					c2 = null;
					e2 = b2.child;
					for (b2.child = null; null !== e2; ) {
						a = e2.alternate;
						if (null !== a && null === Mh(a)) {
							b2.child = e2;
							break;
						}
						a = e2.sibling;
						e2.sibling = c2;
						c2 = e2;
						e2 = a;
					}
					xj(b2, true, c2, null, f2);
					break;
				case "together":
					xj(b2, false, null, null, void 0);
					break;
				default:
					b2.memoizedState = null;
			}
		return b2.child;
	}
	function jj(a, b2) {
		0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
	}
	function $i(a, b2, c2) {
		null !== a && (b2.dependencies = a.dependencies);
		hh |= b2.lanes;
		if (0 === (c2 & b2.childLanes))
			return null;
		if (null !== a && b2.child !== a.child)
			throw Error(p(153));
		if (null !== b2.child) {
			a = b2.child;
			c2 = wh(a, a.pendingProps);
			b2.child = c2;
			for (c2.return = b2; null !== a.sibling; )
				a = a.sibling, c2 = c2.sibling = wh(a, a.pendingProps), c2.return = b2;
			c2.sibling = null;
		}
		return b2.child;
	}
	function zj(a, b2, c2) {
		switch (b2.tag) {
			case 3:
				lj(b2);
				Ig();
				break;
			case 5:
				Kh(b2);
				break;
			case 1:
				Zf(b2.type) && cg(b2);
				break;
			case 4:
				Ih(b2, b2.stateNode.containerInfo);
				break;
			case 10:
				var d2 = b2.type._context, e2 = b2.memoizedProps.value;
				G(Mg, d2._currentValue);
				d2._currentValue = e2;
				break;
			case 13:
				d2 = b2.memoizedState;
				if (null !== d2) {
					if (null !== d2.dehydrated)
						return G(M, M.current & 1), b2.flags |= 128, null;
					if (0 !== (c2 & b2.child.childLanes))
						return pj(a, b2, c2);
					G(M, M.current & 1);
					a = $i(a, b2, c2);
					return null !== a ? a.sibling : null;
				}
				G(M, M.current & 1);
				break;
			case 19:
				d2 = 0 !== (c2 & b2.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d2)
						return yj(a, b2, c2);
					b2.flags |= 128;
				}
				e2 = b2.memoizedState;
				null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
				G(M, M.current);
				if (d2)
					break;
				else
					return null;
			case 22:
			case 23:
				return b2.lanes = 0, ej(a, b2, c2);
		}
		return $i(a, b2, c2);
	}
	var Aj, Bj, Cj, Dj;
	Aj = function(a, b2) {
		for (var c2 = b2.child; null !== c2; ) {
			if (5 === c2.tag || 6 === c2.tag)
				a.appendChild(c2.stateNode);
			else if (4 !== c2.tag && null !== c2.child) {
				c2.child.return = c2;
				c2 = c2.child;
				continue;
			}
			if (c2 === b2)
				break;
			for (; null === c2.sibling; ) {
				if (null === c2.return || c2.return === b2)
					return;
				c2 = c2.return;
			}
			c2.sibling.return = c2.return;
			c2 = c2.sibling;
		}
	};
	Bj = function() {
	};
	Cj = function(a, b2, c2, d2) {
		var e2 = a.memoizedProps;
		if (e2 !== d2) {
			a = b2.stateNode;
			Hh(Eh.current);
			var f2 = null;
			switch (c2) {
				case "input":
					e2 = Ya(a, e2);
					d2 = Ya(a, d2);
					f2 = [];
					break;
				case "select":
					e2 = A({}, e2, { value: void 0 });
					d2 = A({}, d2, { value: void 0 });
					f2 = [];
					break;
				case "textarea":
					e2 = gb(a, e2);
					d2 = gb(a, d2);
					f2 = [];
					break;
				default:
					"function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
			}
			ub(c2, d2);
			var g2;
			c2 = null;
			for (l2 in e2)
				if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
					if ("style" === l2) {
						var h2 = e2[l2];
						for (g2 in h2)
							h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
					} else
						"dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
			for (l2 in d2) {
				var k2 = d2[l2];
				h2 = null != e2 ? e2[l2] : void 0;
				if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
					if ("style" === l2)
						if (h2) {
							for (g2 in h2)
								!h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
							for (g2 in k2)
								k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
						} else
							c2 || (f2 || (f2 = []), f2.push(
									l2,
									c2
							)), c2 = k2;
					else
						"dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
			}
			c2 && (f2 = f2 || []).push("style", c2);
			var l2 = f2;
			if (b2.updateQueue = l2)
				b2.flags |= 4;
		}
	};
	Dj = function(a, b2, c2, d2) {
		c2 !== d2 && (b2.flags |= 4);
	};
	function Ej(a, b2) {
		if (!I)
			switch (a.tailMode) {
				case "hidden":
					b2 = a.tail;
					for (var c2 = null; null !== b2; )
						null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
					null === c2 ? a.tail = null : c2.sibling = null;
					break;
				case "collapsed":
					c2 = a.tail;
					for (var d2 = null; null !== c2; )
						null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
					null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
			}
	}
	function S(a) {
		var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
		if (b2)
			for (var e2 = a.child; null !== e2; )
				c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
		else
			for (e2 = a.child; null !== e2; )
				c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
		a.subtreeFlags |= d2;
		a.childLanes = c2;
		return b2;
	}
	function Fj(a, b2, c2) {
		var d2 = b2.pendingProps;
		wg(b2);
		switch (b2.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return S(b2), null;
			case 1:
				return Zf(b2.type) && $f(), S(b2), null;
			case 3:
				d2 = b2.stateNode;
				Jh();
				E(Wf);
				E(H);
				Oh();
				d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
				if (null === a || null === a.child)
					Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
				Bj(a, b2);
				S(b2);
				return null;
			case 5:
				Lh(b2);
				var e2 = Hh(Gh.current);
				c2 = b2.type;
				if (null !== a && null != b2.stateNode)
					Cj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
				else {
					if (!d2) {
						if (null === b2.stateNode)
							throw Error(p(166));
						S(b2);
						return null;
					}
					a = Hh(Eh.current);
					if (Gg(b2)) {
						d2 = b2.stateNode;
						c2 = b2.type;
						var f2 = b2.memoizedProps;
						d2[Of] = b2;
						d2[Pf] = f2;
						a = 0 !== (b2.mode & 1);
						switch (c2) {
							case "dialog":
								D("cancel", d2);
								D("close", d2);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d2);
								break;
							case "video":
							case "audio":
								for (e2 = 0; e2 < lf.length; e2++)
									D(lf[e2], d2);
								break;
							case "source":
								D("error", d2);
								break;
							case "img":
							case "image":
							case "link":
								D(
										"error",
										d2
								);
								D("load", d2);
								break;
							case "details":
								D("toggle", d2);
								break;
							case "input":
								Za(d2, f2);
								D("invalid", d2);
								break;
							case "select":
								d2._wrapperState = { wasMultiple: !!f2.multiple };
								D("invalid", d2);
								break;
							case "textarea":
								hb(d2, f2), D("invalid", d2);
						}
						ub(c2, f2);
						e2 = null;
						for (var g2 in f2)
							if (f2.hasOwnProperty(g2)) {
								var h2 = f2[g2];
								"children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
										d2.textContent,
										h2,
										a
								), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
							}
						switch (c2) {
							case "input":
								Va(d2);
								db(d2, f2, true);
								break;
							case "textarea":
								Va(d2);
								jb(d2);
								break;
							case "select":
							case "option":
								break;
							default:
								"function" === typeof f2.onClick && (d2.onclick = Bf);
						}
						d2 = e2;
						b2.updateQueue = d2;
						null !== d2 && (b2.flags |= 4);
					} else {
						g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
						a[Of] = b2;
						a[Pf] = d2;
						Aj(a, b2, false, false);
						b2.stateNode = a;
						a: {
							g2 = vb(c2, d2);
							switch (c2) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e2 = d2;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e2 = d2;
									break;
								case "video":
								case "audio":
									for (e2 = 0; e2 < lf.length; e2++)
										D(lf[e2], a);
									e2 = d2;
									break;
								case "source":
									D("error", a);
									e2 = d2;
									break;
								case "img":
								case "image":
								case "link":
									D(
											"error",
											a
									);
									D("load", a);
									e2 = d2;
									break;
								case "details":
									D("toggle", a);
									e2 = d2;
									break;
								case "input":
									Za(a, d2);
									e2 = Ya(a, d2);
									D("invalid", a);
									break;
								case "option":
									e2 = d2;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d2.multiple };
									e2 = A({}, d2, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d2);
									e2 = gb(a, d2);
									D("invalid", a);
									break;
								default:
									e2 = d2;
							}
							ub(c2, e2);
							h2 = e2;
							for (f2 in h2)
								if (h2.hasOwnProperty(f2)) {
									var k2 = h2[f2];
									"style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
								}
							switch (c2) {
								case "input":
									Va(a);
									db(a, d2, false);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
									break;
								case "select":
									a.multiple = !!d2.multiple;
									f2 = d2.value;
									null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
											a,
											!!d2.multiple,
											d2.defaultValue,
											true
									);
									break;
								default:
									"function" === typeof e2.onClick && (a.onclick = Bf);
							}
							switch (c2) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d2 = !!d2.autoFocus;
									break a;
								case "img":
									d2 = true;
									break a;
								default:
									d2 = false;
							}
						}
						d2 && (b2.flags |= 4);
					}
					null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
				}
				S(b2);
				return null;
			case 6:
				if (a && null != b2.stateNode)
					Dj(a, b2, a.memoizedProps, d2);
				else {
					if ("string" !== typeof d2 && null === b2.stateNode)
						throw Error(p(166));
					c2 = Hh(Gh.current);
					Hh(Eh.current);
					if (Gg(b2)) {
						d2 = b2.stateNode;
						c2 = b2.memoizedProps;
						d2[Of] = b2;
						if (f2 = d2.nodeValue !== c2) {
							if (a = xg, null !== a)
								switch (a.tag) {
									case 3:
										Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
										break;
									case 5:
										true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
								}
						}
						f2 && (b2.flags |= 4);
					} else
						d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
				}
				S(b2);
				return null;
			case 13:
				E(M);
				d2 = b2.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
						Hg(), Ig(), b2.flags |= 98560, f2 = false;
					else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
						if (null === a) {
							if (!f2)
								throw Error(p(318));
							f2 = b2.memoizedState;
							f2 = null !== f2 ? f2.dehydrated : null;
							if (!f2)
								throw Error(p(317));
							f2[Of] = b2;
						} else
							Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
						S(b2);
						f2 = false;
					} else
						null !== zg && (Gj(zg), zg = null), f2 = true;
					if (!f2)
						return b2.flags & 65536 ? b2 : null;
				}
				if (0 !== (b2.flags & 128))
					return b2.lanes = c2, b2;
				d2 = null !== d2;
				d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
				null !== b2.updateQueue && (b2.flags |= 4);
				S(b2);
				return null;
			case 4:
				return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
			case 10:
				return Rg(b2.type._context), S(b2), null;
			case 17:
				return Zf(b2.type) && $f(), S(b2), null;
			case 19:
				E(M);
				f2 = b2.memoizedState;
				if (null === f2)
					return S(b2), null;
				d2 = 0 !== (b2.flags & 128);
				g2 = f2.rendering;
				if (null === g2)
					if (d2)
						Ej(f2, false);
					else {
						if (0 !== T || null !== a && 0 !== (a.flags & 128))
							for (a = b2.child; null !== a; ) {
								g2 = Mh(a);
								if (null !== g2) {
									b2.flags |= 128;
									Ej(f2, false);
									d2 = g2.updateQueue;
									null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
									b2.subtreeFlags = 0;
									d2 = c2;
									for (c2 = b2.child; null !== c2; )
										f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
									G(M, M.current & 1 | 2);
									return b2.child;
								}
								a = a.sibling;
							}
						null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
					}
				else {
					if (!d2)
						if (a = Mh(g2), null !== a) {
							if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I)
								return S(b2), null;
						} else
							2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
					f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
				}
				if (null !== f2.tail)
					return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M.current, G(M, d2 ? c2 & 1 | 2 : c2 & 1), b2;
				S(b2);
				return null;
			case 22:
			case 23:
				return Ij(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
			case 24:
				return null;
			case 25:
				return null;
		}
		throw Error(p(156, b2.tag));
	}
	function Jj(a, b2) {
		wg(b2);
		switch (b2.tag) {
			case 1:
				return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
			case 3:
				return Jh(), E(Wf), E(H), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
			case 5:
				return Lh(b2), null;
			case 13:
				E(M);
				a = b2.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b2.alternate)
						throw Error(p(340));
					Ig();
				}
				a = b2.flags;
				return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
			case 19:
				return E(M), null;
			case 4:
				return Jh(), null;
			case 10:
				return Rg(b2.type._context), null;
			case 22:
			case 23:
				return Ij(), null;
			case 24:
				return null;
			default:
				return null;
		}
	}
	var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
	function Mj(a, b2) {
		var c2 = a.ref;
		if (null !== c2)
			if ("function" === typeof c2)
				try {
					c2(null);
				} catch (d2) {
					W(a, b2, d2);
				}
			else
				c2.current = null;
	}
	function Nj(a, b2, c2) {
		try {
			c2();
		} catch (d2) {
			W(a, b2, d2);
		}
	}
	var Oj = false;
	function Pj(a, b2) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a)
				var c2 = { start: a.selectionStart, end: a.selectionEnd };
			else
				a: {
					c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
					var d2 = c2.getSelection && c2.getSelection();
					if (d2 && 0 !== d2.rangeCount) {
						c2 = d2.anchorNode;
						var e2 = d2.anchorOffset, f2 = d2.focusNode;
						d2 = d2.focusOffset;
						try {
							c2.nodeType, f2.nodeType;
						} catch (F2) {
							c2 = null;
							break a;
						}
						var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
						b:
								for (; ; ) {
									for (var y2; ; ) {
										q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
										q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
										3 === q2.nodeType && (g2 += q2.nodeValue.length);
										if (null === (y2 = q2.firstChild))
											break;
										r2 = q2;
										q2 = y2;
									}
									for (; ; ) {
										if (q2 === a)
											break b;
										r2 === c2 && ++l2 === e2 && (h2 = g2);
										r2 === f2 && ++m2 === d2 && (k2 = g2);
										if (null !== (y2 = q2.nextSibling))
											break;
										q2 = r2;
										r2 = q2.parentNode;
									}
									q2 = y2;
								}
						c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
					} else
						c2 = null;
				}
			c2 = c2 || { start: 0, end: 0 };
		} else
			c2 = null;
		Df = { focusedElem: a, selectionRange: c2 };
		dd = false;
		for (V = b2; null !== V; )
			if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
				a.return = b2, V = a;
			else
				for (; null !== V; ) {
					b2 = V;
					try {
						var n2 = b2.alternate;
						if (0 !== (b2.flags & 1024))
							switch (b2.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (null !== n2) {
										var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
										x2.__reactInternalSnapshotBeforeUpdate = w2;
									}
									break;
								case 3:
									var u2 = b2.stateNode.containerInfo;
									1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(p(163));
							}
					} catch (F2) {
						W(b2, b2.return, F2);
					}
					a = b2.sibling;
					if (null !== a) {
						a.return = b2.return;
						V = a;
						break;
					}
					V = b2.return;
				}
		n2 = Oj;
		Oj = false;
		return n2;
	}
	function Qj(a, b2, c2) {
		var d2 = b2.updateQueue;
		d2 = null !== d2 ? d2.lastEffect : null;
		if (null !== d2) {
			var e2 = d2 = d2.next;
			do {
				if ((e2.tag & a) === a) {
					var f2 = e2.destroy;
					e2.destroy = void 0;
					void 0 !== f2 && Nj(b2, c2, f2);
				}
				e2 = e2.next;
			} while (e2 !== d2);
		}
	}
	function Rj(a, b2) {
		b2 = b2.updateQueue;
		b2 = null !== b2 ? b2.lastEffect : null;
		if (null !== b2) {
			var c2 = b2 = b2.next;
			do {
				if ((c2.tag & a) === a) {
					var d2 = c2.create;
					c2.destroy = d2();
				}
				c2 = c2.next;
			} while (c2 !== b2);
		}
	}
	function Sj(a) {
		var b2 = a.ref;
		if (null !== b2) {
			var c2 = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c2;
					break;
				default:
					a = c2;
			}
			"function" === typeof b2 ? b2(a) : b2.current = a;
		}
	}
	function Tj(a) {
		var b2 = a.alternate;
		null !== b2 && (a.alternate = null, Tj(b2));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Uj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Vj(a) {
		a:
				for (; ; ) {
					for (; null === a.sibling; ) {
						if (null === a.return || Uj(a.return))
							return null;
						a = a.return;
					}
					a.sibling.return = a.return;
					for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
						if (a.flags & 2)
							continue a;
						if (null === a.child || 4 === a.tag)
							continue a;
						else
							a.child.return = a, a = a.child;
					}
					if (!(a.flags & 2))
						return a.stateNode;
				}
	}
	function Wj(a, b2, c2) {
		var d2 = a.tag;
		if (5 === d2 || 6 === d2)
			a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
		else if (4 !== d2 && (a = a.child, null !== a))
			for (Wj(a, b2, c2), a = a.sibling; null !== a; )
				Wj(a, b2, c2), a = a.sibling;
	}
	function Xj(a, b2, c2) {
		var d2 = a.tag;
		if (5 === d2 || 6 === d2)
			a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
		else if (4 !== d2 && (a = a.child, null !== a))
			for (Xj(a, b2, c2), a = a.sibling; null !== a; )
				Xj(a, b2, c2), a = a.sibling;
	}
	var X = null, Yj = false;
	function Zj(a, b2, c2) {
		for (c2 = c2.child; null !== c2; )
			ak(a, b2, c2), c2 = c2.sibling;
	}
	function ak(a, b2, c2) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount)
			try {
				lc.onCommitFiberUnmount(kc, c2);
			} catch (h2) {
			}
		switch (c2.tag) {
			case 5:
				U || Mj(c2, b2);
			case 6:
				var d2 = X, e2 = Yj;
				X = null;
				Zj(a, b2, c2);
				X = d2;
				Yj = e2;
				null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
				break;
			case 18:
				null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
				break;
			case 4:
				d2 = X;
				e2 = Yj;
				X = c2.stateNode.containerInfo;
				Yj = true;
				Zj(a, b2, c2);
				X = d2;
				Yj = e2;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
					e2 = d2 = d2.next;
					do {
						var f2 = e2, g2 = f2.destroy;
						f2 = f2.tag;
						void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
						e2 = e2.next;
					} while (e2 !== d2);
				}
				Zj(a, b2, c2);
				break;
			case 1:
				if (!U && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
					try {
						d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
					} catch (h2) {
						W(c2, b2, h2);
					}
				Zj(a, b2, c2);
				break;
			case 21:
				Zj(a, b2, c2);
				break;
			case 22:
				c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Zj(a, b2, c2), U = d2) : Zj(a, b2, c2);
				break;
			default:
				Zj(a, b2, c2);
		}
	}
	function bk(a) {
		var b2 = a.updateQueue;
		if (null !== b2) {
			a.updateQueue = null;
			var c2 = a.stateNode;
			null === c2 && (c2 = a.stateNode = new Lj());
			b2.forEach(function(b3) {
				var d2 = ck.bind(null, a, b3);
				c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
			});
		}
	}
	function dk(a, b2) {
		var c2 = b2.deletions;
		if (null !== c2)
			for (var d2 = 0; d2 < c2.length; d2++) {
				var e2 = c2[d2];
				try {
					var f2 = a, g2 = b2, h2 = g2;
					a:
							for (; null !== h2; ) {
								switch (h2.tag) {
									case 5:
										X = h2.stateNode;
										Yj = false;
										break a;
									case 3:
										X = h2.stateNode.containerInfo;
										Yj = true;
										break a;
									case 4:
										X = h2.stateNode.containerInfo;
										Yj = true;
										break a;
								}
								h2 = h2.return;
							}
					if (null === X)
						throw Error(p(160));
					ak(f2, g2, e2);
					X = null;
					Yj = false;
					var k2 = e2.alternate;
					null !== k2 && (k2.return = null);
					e2.return = null;
				} catch (l2) {
					W(e2, b2, l2);
				}
			}
		if (b2.subtreeFlags & 12854)
			for (b2 = b2.child; null !== b2; )
				ek(b2, a), b2 = b2.sibling;
	}
	function ek(a, b2) {
		var c2 = a.alternate, d2 = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				dk(b2, a);
				fk(a);
				if (d2 & 4) {
					try {
						Qj(3, a, a.return), Rj(3, a);
					} catch (t2) {
						W(a, a.return, t2);
					}
					try {
						Qj(5, a, a.return);
					} catch (t2) {
						W(a, a.return, t2);
					}
				}
				break;
			case 1:
				dk(b2, a);
				fk(a);
				d2 & 512 && null !== c2 && Mj(c2, c2.return);
				break;
			case 5:
				dk(b2, a);
				fk(a);
				d2 & 512 && null !== c2 && Mj(c2, c2.return);
				if (a.flags & 32) {
					var e2 = a.stateNode;
					try {
						ob(e2, "");
					} catch (t2) {
						W(a, a.return, t2);
					}
				}
				if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
					var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
					a.updateQueue = null;
					if (null !== k2)
						try {
							"input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
							vb(h2, g2);
							var l2 = vb(h2, f2);
							for (g2 = 0; g2 < k2.length; g2 += 2) {
								var m2 = k2[g2], q2 = k2[g2 + 1];
								"style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
							}
							switch (h2) {
								case "input":
									bb(e2, f2);
									break;
								case "textarea":
									ib(e2, f2);
									break;
								case "select":
									var r2 = e2._wrapperState.wasMultiple;
									e2._wrapperState.wasMultiple = !!f2.multiple;
									var y2 = f2.value;
									null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
											e2,
											!!f2.multiple,
											f2.defaultValue,
											true
									) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
							}
							e2[Pf] = f2;
						} catch (t2) {
							W(a, a.return, t2);
						}
				}
				break;
			case 6:
				dk(b2, a);
				fk(a);
				if (d2 & 4) {
					if (null === a.stateNode)
						throw Error(p(162));
					e2 = a.stateNode;
					f2 = a.memoizedProps;
					try {
						e2.nodeValue = f2;
					} catch (t2) {
						W(a, a.return, t2);
					}
				}
				break;
			case 3:
				dk(b2, a);
				fk(a);
				if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
					try {
						bd(b2.containerInfo);
					} catch (t2) {
						W(a, a.return, t2);
					}
				break;
			case 4:
				dk(b2, a);
				fk(a);
				break;
			case 13:
				dk(b2, a);
				fk(a);
				e2 = a.child;
				e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
				d2 & 4 && bk(a);
				break;
			case 22:
				m2 = null !== c2 && null !== c2.memoizedState;
				a.mode & 1 ? (U = (l2 = U) || m2, dk(b2, a), U = l2) : dk(b2, a);
				fk(a);
				if (d2 & 8192) {
					l2 = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
						for (V = a, m2 = a.child; null !== m2; ) {
							for (q2 = V = m2; null !== V; ) {
								r2 = V;
								y2 = r2.child;
								switch (r2.tag) {
									case 0:
									case 11:
									case 14:
									case 15:
										Qj(4, r2, r2.return);
										break;
									case 1:
										Mj(r2, r2.return);
										var n2 = r2.stateNode;
										if ("function" === typeof n2.componentWillUnmount) {
											d2 = r2;
											c2 = r2.return;
											try {
												b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
											} catch (t2) {
												W(d2, c2, t2);
											}
										}
										break;
									case 5:
										Mj(r2, r2.return);
										break;
									case 22:
										if (null !== r2.memoizedState) {
											hk(q2);
											continue;
										}
								}
								null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
							}
							m2 = m2.sibling;
						}
					a:
							for (m2 = null, q2 = a; ; ) {
								if (5 === q2.tag) {
									if (null === m2) {
										m2 = q2;
										try {
											e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
										} catch (t2) {
											W(a, a.return, t2);
										}
									}
								} else if (6 === q2.tag) {
									if (null === m2)
										try {
											q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
										} catch (t2) {
											W(a, a.return, t2);
										}
								} else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
									q2.child.return = q2;
									q2 = q2.child;
									continue;
								}
								if (q2 === a)
									break a;
								for (; null === q2.sibling; ) {
									if (null === q2.return || q2.return === a)
										break a;
									m2 === q2 && (m2 = null);
									q2 = q2.return;
								}
								m2 === q2 && (m2 = null);
								q2.sibling.return = q2.return;
								q2 = q2.sibling;
							}
				}
				break;
			case 19:
				dk(b2, a);
				fk(a);
				d2 & 4 && bk(a);
				break;
			case 21:
				break;
			default:
				dk(
						b2,
						a
				), fk(a);
		}
	}
	function fk(a) {
		var b2 = a.flags;
		if (b2 & 2) {
			try {
				a: {
					for (var c2 = a.return; null !== c2; ) {
						if (Uj(c2)) {
							var d2 = c2;
							break a;
						}
						c2 = c2.return;
					}
					throw Error(p(160));
				}
				switch (d2.tag) {
					case 5:
						var e2 = d2.stateNode;
						d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
						var f2 = Vj(a);
						Xj(a, f2, e2);
						break;
					case 3:
					case 4:
						var g2 = d2.stateNode.containerInfo, h2 = Vj(a);
						Wj(a, h2, g2);
						break;
					default:
						throw Error(p(161));
				}
			} catch (k2) {
				W(a, a.return, k2);
			}
			a.flags &= -3;
		}
		b2 & 4096 && (a.flags &= -4097);
	}
	function ik(a, b2, c2) {
		V = a;
		jk(a);
	}
	function jk(a, b2, c2) {
		for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
			var e2 = V, f2 = e2.child;
			if (22 === e2.tag && d2) {
				var g2 = null !== e2.memoizedState || Kj;
				if (!g2) {
					var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
					h2 = Kj;
					var l2 = U;
					Kj = g2;
					if ((U = k2) && !l2)
						for (V = e2; null !== V; )
							g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
					for (; null !== f2; )
						V = f2, jk(f2), f2 = f2.sibling;
					V = e2;
					Kj = h2;
					U = l2;
				}
				lk(a);
			} else
				0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
		}
	}
	function lk(a) {
		for (; null !== V; ) {
			var b2 = V;
			if (0 !== (b2.flags & 8772)) {
				var c2 = b2.alternate;
				try {
					if (0 !== (b2.flags & 8772))
						switch (b2.tag) {
							case 0:
							case 11:
							case 15:
								U || Rj(5, b2);
								break;
							case 1:
								var d2 = b2.stateNode;
								if (b2.flags & 4 && !U)
									if (null === c2)
										d2.componentDidMount();
									else {
										var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
										d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
									}
								var f2 = b2.updateQueue;
								null !== f2 && ih(b2, f2, d2);
								break;
							case 3:
								var g2 = b2.updateQueue;
								if (null !== g2) {
									c2 = null;
									if (null !== b2.child)
										switch (b2.child.tag) {
											case 5:
												c2 = b2.child.stateNode;
												break;
											case 1:
												c2 = b2.child.stateNode;
										}
									ih(b2, g2, c2);
								}
								break;
							case 5:
								var h2 = b2.stateNode;
								if (null === c2 && b2.flags & 4) {
									c2 = h2;
									var k2 = b2.memoizedProps;
									switch (b2.type) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											k2.autoFocus && c2.focus();
											break;
										case "img":
											k2.src && (c2.src = k2.src);
									}
								}
								break;
							case 6:
								break;
							case 4:
								break;
							case 12:
								break;
							case 13:
								if (null === b2.memoizedState) {
									var l2 = b2.alternate;
									if (null !== l2) {
										var m2 = l2.memoizedState;
										if (null !== m2) {
											var q2 = m2.dehydrated;
											null !== q2 && bd(q2);
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25:
								break;
							default:
								throw Error(p(163));
						}
					U || b2.flags & 512 && Sj(b2);
				} catch (r2) {
					W(b2, b2.return, r2);
				}
			}
			if (b2 === a) {
				V = null;
				break;
			}
			c2 = b2.sibling;
			if (null !== c2) {
				c2.return = b2.return;
				V = c2;
				break;
			}
			V = b2.return;
		}
	}
	function hk(a) {
		for (; null !== V; ) {
			var b2 = V;
			if (b2 === a) {
				V = null;
				break;
			}
			var c2 = b2.sibling;
			if (null !== c2) {
				c2.return = b2.return;
				V = c2;
				break;
			}
			V = b2.return;
		}
	}
	function kk(a) {
		for (; null !== V; ) {
			var b2 = V;
			try {
				switch (b2.tag) {
					case 0:
					case 11:
					case 15:
						var c2 = b2.return;
						try {
							Rj(4, b2);
						} catch (k2) {
							W(b2, c2, k2);
						}
						break;
					case 1:
						var d2 = b2.stateNode;
						if ("function" === typeof d2.componentDidMount) {
							var e2 = b2.return;
							try {
								d2.componentDidMount();
							} catch (k2) {
								W(b2, e2, k2);
							}
						}
						var f2 = b2.return;
						try {
							Sj(b2);
						} catch (k2) {
							W(b2, f2, k2);
						}
						break;
					case 5:
						var g2 = b2.return;
						try {
							Sj(b2);
						} catch (k2) {
							W(b2, g2, k2);
						}
				}
			} catch (k2) {
				W(b2, b2.return, k2);
			}
			if (b2 === a) {
				V = null;
				break;
			}
			var h2 = b2.sibling;
			if (null !== h2) {
				h2.return = b2.return;
				V = h2;
				break;
			}
			V = b2.return;
		}
	}
	var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
	function L() {
		return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
	}
	function lh(a) {
		if (0 === (a.mode & 1))
			return 1;
		if (0 !== (K & 2) && 0 !== Z)
			return Z & -Z;
		if (null !== Kg.transition)
			return 0 === Ck && (Ck = yc()), Ck;
		a = C;
		if (0 !== a)
			return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function mh(a, b2, c2, d2) {
		if (50 < zk)
			throw zk = 0, Ak = null, Error(p(185));
		Ac(a, c2, d2);
		if (0 === (K & 2) || a !== R)
			a === R && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a, Z)), Ek(a, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
	}
	function Ek(a, b2) {
		var c2 = a.callbackNode;
		wc(a, b2);
		var d2 = uc(a, a === R ? Z : 0);
		if (0 === d2)
			null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
		else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
			null != c2 && bc(c2);
			if (1 === b2)
				0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
					0 === (K & 6) && jg();
				}), c2 = null;
			else {
				switch (Dc(d2)) {
					case 1:
						c2 = fc;
						break;
					case 4:
						c2 = gc;
						break;
					case 16:
						c2 = hc;
						break;
					case 536870912:
						c2 = jc;
						break;
					default:
						c2 = hc;
				}
				c2 = Gk(c2, Hk.bind(null, a));
			}
			a.callbackPriority = b2;
			a.callbackNode = c2;
		}
	}
	function Hk(a, b2) {
		Bk = -1;
		Ck = 0;
		if (0 !== (K & 6))
			throw Error(p(327));
		var c2 = a.callbackNode;
		if (Ik() && a.callbackNode !== c2)
			return null;
		var d2 = uc(a, a === R ? Z : 0);
		if (0 === d2)
			return null;
		if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2)
			b2 = Jk(a, d2);
		else {
			b2 = d2;
			var e2 = K;
			K |= 2;
			var f2 = Kk();
			if (R !== a || Z !== b2)
				vk = null, Hj = B() + 500, Lk(a, b2);
			do
				try {
					Mk();
					break;
				} catch (h2) {
					Nk(a, h2);
				}
			while (1);
			Qg();
			nk.current = f2;
			K = e2;
			null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
		}
		if (0 !== b2) {
			2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Ok(a, e2)));
			if (1 === b2)
				throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
			if (6 === b2)
				Dk(a, d2);
			else {
				e2 = a.current.alternate;
				if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Ok(a, f2))), 1 === b2))
					throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
				a.finishedWork = e2;
				a.finishedLanes = d2;
				switch (b2) {
					case 0:
					case 1:
						throw Error(p(345));
					case 2:
						Qk(a, uk, vk);
						break;
					case 3:
						Dk(a, d2);
						if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
							if (0 !== uc(a, 0))
								break;
							e2 = a.suspendedLanes;
							if ((e2 & d2) !== d2) {
								L();
								a.pingedLanes |= a.suspendedLanes & e2;
								break;
							}
							a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
							break;
						}
						Qk(a, uk, vk);
						break;
					case 4:
						Dk(a, d2);
						if ((d2 & 4194240) === d2)
							break;
						b2 = a.eventTimes;
						for (e2 = -1; 0 < d2; ) {
							var g2 = 31 - oc(d2);
							f2 = 1 << g2;
							g2 = b2[g2];
							g2 > e2 && (e2 = g2);
							d2 &= ~f2;
						}
						d2 = e2;
						d2 = B() - d2;
						d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
						if (10 < d2) {
							a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d2);
							break;
						}
						Qk(a, uk, vk);
						break;
					case 5:
						Qk(a, uk, vk);
						break;
					default:
						throw Error(p(329));
				}
			}
		}
		Ek(a, B());
		return a.callbackNode === c2 ? Hk.bind(null, a) : null;
	}
	function Ok(a, b2) {
		var c2 = tk;
		a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
		a = Jk(a, b2);
		2 !== a && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
		return a;
	}
	function Gj(a) {
		null === uk ? uk = a : uk.push.apply(uk, a);
	}
	function Pk(a) {
		for (var b2 = a; ; ) {
			if (b2.flags & 16384) {
				var c2 = b2.updateQueue;
				if (null !== c2 && (c2 = c2.stores, null !== c2))
					for (var d2 = 0; d2 < c2.length; d2++) {
						var e2 = c2[d2], f2 = e2.getSnapshot;
						e2 = e2.value;
						try {
							if (!He(f2(), e2))
								return false;
						} catch (g2) {
							return false;
						}
					}
			}
			c2 = b2.child;
			if (b2.subtreeFlags & 16384 && null !== c2)
				c2.return = b2, b2 = c2;
			else {
				if (b2 === a)
					break;
				for (; null === b2.sibling; ) {
					if (null === b2.return || b2.return === a)
						return true;
					b2 = b2.return;
				}
				b2.sibling.return = b2.return;
				b2 = b2.sibling;
			}
		}
		return true;
	}
	function Dk(a, b2) {
		b2 &= ~sk;
		b2 &= ~rk;
		a.suspendedLanes |= b2;
		a.pingedLanes &= ~b2;
		for (a = a.expirationTimes; 0 < b2; ) {
			var c2 = 31 - oc(b2), d2 = 1 << c2;
			a[c2] = -1;
			b2 &= ~d2;
		}
	}
	function Fk(a) {
		if (0 !== (K & 6))
			throw Error(p(327));
		Ik();
		var b2 = uc(a, 0);
		if (0 === (b2 & 1))
			return Ek(a, B()), null;
		var c2 = Jk(a, b2);
		if (0 !== a.tag && 2 === c2) {
			var d2 = xc(a);
			0 !== d2 && (b2 = d2, c2 = Ok(a, d2));
		}
		if (1 === c2)
			throw c2 = qk, Lk(a, 0), Dk(a, b2), Ek(a, B()), c2;
		if (6 === c2)
			throw Error(p(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b2;
		Qk(a, uk, vk);
		Ek(a, B());
		return null;
	}
	function Rk(a, b2) {
		var c2 = K;
		K |= 1;
		try {
			return a(b2);
		} finally {
			K = c2, 0 === K && (Hj = B() + 500, fg && jg());
		}
	}
	function Sk(a) {
		null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
		var b2 = K;
		K |= 1;
		var c2 = pk.transition, d2 = C;
		try {
			if (pk.transition = null, C = 1, a)
				return a();
		} finally {
			C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
		}
	}
	function Ij() {
		gj = fj.current;
		E(fj);
	}
	function Lk(a, b2) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c2 = a.timeoutHandle;
		-1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
		if (null !== Y)
			for (c2 = Y.return; null !== c2; ) {
				var d2 = c2;
				wg(d2);
				switch (d2.tag) {
					case 1:
						d2 = d2.type.childContextTypes;
						null !== d2 && void 0 !== d2 && $f();
						break;
					case 3:
						Jh();
						E(Wf);
						E(H);
						Oh();
						break;
					case 5:
						Lh(d2);
						break;
					case 4:
						Jh();
						break;
					case 13:
						E(M);
						break;
					case 19:
						E(M);
						break;
					case 10:
						Rg(d2.type._context);
						break;
					case 22:
					case 23:
						Ij();
				}
				c2 = c2.return;
			}
		R = a;
		Y = a = wh(a.current, null);
		Z = gj = b2;
		T = 0;
		qk = null;
		sk = rk = hh = 0;
		uk = tk = null;
		if (null !== Wg) {
			for (b2 = 0; b2 < Wg.length; b2++)
				if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
					c2.interleaved = null;
					var e2 = d2.next, f2 = c2.pending;
					if (null !== f2) {
						var g2 = f2.next;
						f2.next = e2;
						d2.next = g2;
					}
					c2.pending = d2;
				}
			Wg = null;
		}
		return a;
	}
	function Nk(a, b2) {
		do {
			var c2 = Y;
			try {
				Qg();
				Ph.current = ai;
				if (Sh) {
					for (var d2 = N.memoizedState; null !== d2; ) {
						var e2 = d2.queue;
						null !== e2 && (e2.pending = null);
						d2 = d2.next;
					}
					Sh = false;
				}
				Rh = 0;
				P = O = N = null;
				Th = false;
				Uh = 0;
				ok.current = null;
				if (null === c2 || null === c2.return) {
					T = 1;
					qk = b2;
					Y = null;
					break;
				}
				a: {
					var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
					b2 = Z;
					h2.flags |= 32768;
					if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
						var l2 = k2, m2 = h2, q2 = m2.tag;
						if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
							var r2 = m2.alternate;
							r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
						}
						var y2 = Vi(g2);
						if (null !== y2) {
							y2.flags &= -257;
							Wi(y2, g2, h2, f2, b2);
							y2.mode & 1 && Ti(f2, l2, b2);
							b2 = y2;
							k2 = l2;
							var n2 = b2.updateQueue;
							if (null === n2) {
								var t2 = /* @__PURE__ */ new Set();
								t2.add(k2);
								b2.updateQueue = t2;
							} else
								n2.add(k2);
							break a;
						} else {
							if (0 === (b2 & 1)) {
								Ti(f2, l2, b2);
								uj();
								break a;
							}
							k2 = Error(p(426));
						}
					} else if (I && h2.mode & 1) {
						var J2 = Vi(g2);
						if (null !== J2) {
							0 === (J2.flags & 65536) && (J2.flags |= 256);
							Wi(J2, g2, h2, f2, b2);
							Jg(Ki(k2, h2));
							break a;
						}
					}
					f2 = k2 = Ki(k2, h2);
					4 !== T && (T = 2);
					null === tk ? tk = [f2] : tk.push(f2);
					f2 = g2;
					do {
						switch (f2.tag) {
							case 3:
								f2.flags |= 65536;
								b2 &= -b2;
								f2.lanes |= b2;
								var x2 = Oi(f2, k2, b2);
								fh(f2, x2);
								break a;
							case 1:
								h2 = k2;
								var w2 = f2.type, u2 = f2.stateNode;
								if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
									f2.flags |= 65536;
									b2 &= -b2;
									f2.lanes |= b2;
									var F2 = Ri(f2, h2, b2);
									fh(f2, F2);
									break a;
								}
						}
						f2 = f2.return;
					} while (null !== f2);
				}
				Tk(c2);
			} catch (na) {
				b2 = na;
				Y === c2 && null !== c2 && (Y = c2 = c2.return);
				continue;
			}
			break;
		} while (1);
	}
	function Kk() {
		var a = nk.current;
		nk.current = ai;
		return null === a ? ai : a;
	}
	function uj() {
		if (0 === T || 3 === T || 2 === T)
			T = 4;
		null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
	}
	function Jk(a, b2) {
		var c2 = K;
		K |= 2;
		var d2 = Kk();
		if (R !== a || Z !== b2)
			vk = null, Lk(a, b2);
		do
			try {
				Uk();
				break;
			} catch (e2) {
				Nk(a, e2);
			}
		while (1);
		Qg();
		K = c2;
		nk.current = d2;
		if (null !== Y)
			throw Error(p(261));
		R = null;
		Z = 0;
		return T;
	}
	function Uk() {
		for (; null !== Y; )
			Vk(Y);
	}
	function Mk() {
		for (; null !== Y && !cc(); )
			Vk(Y);
	}
	function Vk(a) {
		var b2 = Wk(a.alternate, a, gj);
		a.memoizedProps = a.pendingProps;
		null === b2 ? Tk(a) : Y = b2;
		ok.current = null;
	}
	function Tk(a) {
		var b2 = a;
		do {
			var c2 = b2.alternate;
			a = b2.return;
			if (0 === (b2.flags & 32768)) {
				if (c2 = Fj(c2, b2, gj), null !== c2) {
					Y = c2;
					return;
				}
			} else {
				c2 = Jj(c2, b2);
				if (null !== c2) {
					c2.flags &= 32767;
					Y = c2;
					return;
				}
				if (null !== a)
					a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b2 = b2.sibling;
			if (null !== b2) {
				Y = b2;
				return;
			}
			Y = b2 = a;
		} while (null !== b2);
		0 === T && (T = 5);
	}
	function Qk(a, b2, c2) {
		var d2 = C, e2 = pk.transition;
		try {
			pk.transition = null, C = 1, Xk(a, b2, c2, d2);
		} finally {
			pk.transition = e2, C = d2;
		}
		return null;
	}
	function Xk(a, b2, c2, d2) {
		do
			Ik();
		while (null !== xk);
		if (0 !== (K & 6))
			throw Error(p(327));
		c2 = a.finishedWork;
		var e2 = a.finishedLanes;
		if (null === c2)
			return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c2 === a.current)
			throw Error(p(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f2 = c2.lanes | c2.childLanes;
		Bc(a, f2);
		a === R && (Y = R = null, Z = 0);
		0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
			Ik();
			return null;
		}));
		f2 = 0 !== (c2.flags & 15990);
		if (0 !== (c2.subtreeFlags & 15990) || f2) {
			f2 = pk.transition;
			pk.transition = null;
			var g2 = C;
			C = 1;
			var h2 = K;
			K |= 4;
			ok.current = null;
			Pj(a, c2);
			ek(c2, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c2;
			ik(c2);
			dc();
			K = h2;
			C = g2;
			pk.transition = f2;
		} else
			a.current = c2;
		wk && (wk = false, xk = a, yk = e2);
		f2 = a.pendingLanes;
		0 === f2 && (Si = null);
		mc(c2.stateNode);
		Ek(a, B());
		if (null !== b2)
			for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
				e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
		if (Pi)
			throw Pi = false, a = Qi, Qi = null, a;
		0 !== (yk & 1) && 0 !== a.tag && Ik();
		f2 = a.pendingLanes;
		0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
		jg();
		return null;
	}
	function Ik() {
		if (null !== xk) {
			var a = Dc(yk), b2 = pk.transition, c2 = C;
			try {
				pk.transition = null;
				C = 16 > a ? 16 : a;
				if (null === xk)
					var d2 = false;
				else {
					a = xk;
					xk = null;
					yk = 0;
					if (0 !== (K & 6))
						throw Error(p(331));
					var e2 = K;
					K |= 4;
					for (V = a.current; null !== V; ) {
						var f2 = V, g2 = f2.child;
						if (0 !== (V.flags & 16)) {
							var h2 = f2.deletions;
							if (null !== h2) {
								for (var k2 = 0; k2 < h2.length; k2++) {
									var l2 = h2[k2];
									for (V = l2; null !== V; ) {
										var m2 = V;
										switch (m2.tag) {
											case 0:
											case 11:
											case 15:
												Qj(8, m2, f2);
										}
										var q2 = m2.child;
										if (null !== q2)
											q2.return = m2, V = q2;
										else
											for (; null !== V; ) {
												m2 = V;
												var r2 = m2.sibling, y2 = m2.return;
												Tj(m2);
												if (m2 === l2) {
													V = null;
													break;
												}
												if (null !== r2) {
													r2.return = y2;
													V = r2;
													break;
												}
												V = y2;
											}
									}
								}
								var n2 = f2.alternate;
								if (null !== n2) {
									var t2 = n2.child;
									if (null !== t2) {
										n2.child = null;
										do {
											var J2 = t2.sibling;
											t2.sibling = null;
											t2 = J2;
										} while (null !== t2);
									}
								}
								V = f2;
							}
						}
						if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
							g2.return = f2, V = g2;
						else
							b:
									for (; null !== V; ) {
										f2 = V;
										if (0 !== (f2.flags & 2048))
											switch (f2.tag) {
												case 0:
												case 11:
												case 15:
													Qj(9, f2, f2.return);
											}
										var x2 = f2.sibling;
										if (null !== x2) {
											x2.return = f2.return;
											V = x2;
											break b;
										}
										V = f2.return;
									}
					}
					var w2 = a.current;
					for (V = w2; null !== V; ) {
						g2 = V;
						var u2 = g2.child;
						if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
							u2.return = g2, V = u2;
						else
							b:
									for (g2 = w2; null !== V; ) {
										h2 = V;
										if (0 !== (h2.flags & 2048))
											try {
												switch (h2.tag) {
													case 0:
													case 11:
													case 15:
														Rj(9, h2);
												}
											} catch (na) {
												W(h2, h2.return, na);
											}
										if (h2 === g2) {
											V = null;
											break b;
										}
										var F2 = h2.sibling;
										if (null !== F2) {
											F2.return = h2.return;
											V = F2;
											break b;
										}
										V = h2.return;
									}
					}
					K = e2;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot)
						try {
							lc.onPostCommitFiberRoot(kc, a);
						} catch (na) {
						}
					d2 = true;
				}
				return d2;
			} finally {
				C = c2, pk.transition = b2;
			}
		}
		return false;
	}
	function Yk(a, b2, c2) {
		b2 = Ki(c2, b2);
		b2 = Oi(a, b2, 1);
		a = dh(a, b2, 1);
		b2 = L();
		null !== a && (Ac(a, 1, b2), Ek(a, b2));
	}
	function W(a, b2, c2) {
		if (3 === a.tag)
			Yk(a, a, c2);
		else
			for (; null !== b2; ) {
				if (3 === b2.tag) {
					Yk(b2, a, c2);
					break;
				} else if (1 === b2.tag) {
					var d2 = b2.stateNode;
					if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
						a = Ki(c2, a);
						a = Ri(b2, a, 1);
						b2 = dh(b2, a, 1);
						a = L();
						null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
						break;
					}
				}
				b2 = b2.return;
			}
	}
	function Ui(a, b2, c2) {
		var d2 = a.pingCache;
		null !== d2 && d2.delete(b2);
		b2 = L();
		a.pingedLanes |= a.suspendedLanes & c2;
		R === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c2);
		Ek(a, b2);
	}
	function Zk(a, b2) {
		0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c2 = L();
		a = Zg(a, b2);
		null !== a && (Ac(a, b2, c2), Ek(a, c2));
	}
	function vj(a) {
		var b2 = a.memoizedState, c2 = 0;
		null !== b2 && (c2 = b2.retryLane);
		Zk(a, c2);
	}
	function ck(a, b2) {
		var c2 = 0;
		switch (a.tag) {
			case 13:
				var d2 = a.stateNode;
				var e2 = a.memoizedState;
				null !== e2 && (c2 = e2.retryLane);
				break;
			case 19:
				d2 = a.stateNode;
				break;
			default:
				throw Error(p(314));
		}
		null !== d2 && d2.delete(b2);
		Zk(a, c2);
	}
	var Wk;
	Wk = function(a, b2, c2) {
		if (null !== a)
			if (a.memoizedProps !== b2.pendingProps || Wf.current)
				Ug = true;
			else {
				if (0 === (a.lanes & c2) && 0 === (b2.flags & 128))
					return Ug = false, zj(a, b2, c2);
				Ug = 0 !== (a.flags & 131072) ? true : false;
			}
		else
			Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
		b2.lanes = 0;
		switch (b2.tag) {
			case 2:
				var d2 = b2.type;
				jj(a, b2);
				a = b2.pendingProps;
				var e2 = Yf(b2, H.current);
				Tg(b2, c2);
				e2 = Xh(null, b2, d2, a, e2, c2);
				var f2 = bi();
				b2.flags |= 1;
				"object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
				return b2;
			case 16:
				d2 = b2.elementType;
				a: {
					jj(a, b2);
					a = b2.pendingProps;
					e2 = d2._init;
					d2 = e2(d2._payload);
					b2.type = d2;
					e2 = b2.tag = $k(d2);
					a = Lg(d2, a);
					switch (e2) {
						case 0:
							b2 = dj(null, b2, d2, a, c2);
							break a;
						case 1:
							b2 = ij(null, b2, d2, a, c2);
							break a;
						case 11:
							b2 = Zi(null, b2, d2, a, c2);
							break a;
						case 14:
							b2 = aj(null, b2, d2, Lg(d2.type, a), c2);
							break a;
					}
					throw Error(p(
							306,
							d2,
							""
					));
				}
				return b2;
			case 0:
				return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a, b2, d2, e2, c2);
			case 1:
				return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a, b2, d2, e2, c2);
			case 3:
				a: {
					lj(b2);
					if (null === a)
						throw Error(p(387));
					d2 = b2.pendingProps;
					f2 = b2.memoizedState;
					e2 = f2.element;
					bh(a, b2);
					gh(b2, d2, null, c2);
					var g2 = b2.memoizedState;
					d2 = g2.element;
					if (f2.isDehydrated)
						if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
							e2 = Ki(Error(p(423)), b2);
							b2 = mj(a, b2, d2, c2, e2);
							break a;
						} else if (d2 !== e2) {
							e2 = Ki(Error(p(424)), b2);
							b2 = mj(a, b2, d2, c2, e2);
							break a;
						} else
							for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
								c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
					else {
						Ig();
						if (d2 === e2) {
							b2 = $i(a, b2, c2);
							break a;
						}
						Yi(a, b2, d2, c2);
					}
					b2 = b2.child;
				}
				return b2;
			case 5:
				return Kh(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g2, c2), b2.child;
			case 6:
				return null === a && Eg(b2), null;
			case 13:
				return pj(a, b2, c2);
			case 4:
				return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d2, c2) : Yi(a, b2, d2, c2), b2.child;
			case 11:
				return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a, b2, d2, e2, c2);
			case 7:
				return Yi(a, b2, b2.pendingProps, c2), b2.child;
			case 8:
				return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
			case 12:
				return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
			case 10:
				a: {
					d2 = b2.type._context;
					e2 = b2.pendingProps;
					f2 = b2.memoizedProps;
					g2 = e2.value;
					G(Mg, d2._currentValue);
					d2._currentValue = g2;
					if (null !== f2)
						if (He(f2.value, g2)) {
							if (f2.children === e2.children && !Wf.current) {
								b2 = $i(a, b2, c2);
								break a;
							}
						} else
							for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
								var h2 = f2.dependencies;
								if (null !== h2) {
									g2 = f2.child;
									for (var k2 = h2.firstContext; null !== k2; ) {
										if (k2.context === d2) {
											if (1 === f2.tag) {
												k2 = ch(-1, c2 & -c2);
												k2.tag = 2;
												var l2 = f2.updateQueue;
												if (null !== l2) {
													l2 = l2.shared;
													var m2 = l2.pending;
													null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
													l2.pending = k2;
												}
											}
											f2.lanes |= c2;
											k2 = f2.alternate;
											null !== k2 && (k2.lanes |= c2);
											Sg(
													f2.return,
													c2,
													b2
											);
											h2.lanes |= c2;
											break;
										}
										k2 = k2.next;
									}
								} else if (10 === f2.tag)
									g2 = f2.type === b2.type ? null : f2.child;
								else if (18 === f2.tag) {
									g2 = f2.return;
									if (null === g2)
										throw Error(p(341));
									g2.lanes |= c2;
									h2 = g2.alternate;
									null !== h2 && (h2.lanes |= c2);
									Sg(g2, c2, b2);
									g2 = f2.sibling;
								} else
									g2 = f2.child;
								if (null !== g2)
									g2.return = f2;
								else
									for (g2 = f2; null !== g2; ) {
										if (g2 === b2) {
											g2 = null;
											break;
										}
										f2 = g2.sibling;
										if (null !== f2) {
											f2.return = g2.return;
											g2 = f2;
											break;
										}
										g2 = g2.return;
									}
								f2 = g2;
							}
					Yi(a, b2, e2.children, c2);
					b2 = b2.child;
				}
				return b2;
			case 9:
				return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a, b2, d2, c2), b2.child;
			case 14:
				return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a, b2, d2, e2, c2);
			case 15:
				return cj(a, b2, b2.type, b2.pendingProps, c2);
			case 17:
				return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a, c2);
			case 19:
				return yj(a, b2, c2);
			case 22:
				return ej(a, b2, c2);
		}
		throw Error(p(156, b2.tag));
	};
	function Gk(a, b2) {
		return ac(a, b2);
	}
	function al(a, b2, c2, d2) {
		this.tag = a;
		this.key = c2;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b2;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d2;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b2, c2, d2) {
		return new al(a, b2, c2, d2);
	}
	function bj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function $k(a) {
		if ("function" === typeof a)
			return bj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da)
				return 11;
			if (a === Ga)
				return 14;
		}
		return 2;
	}
	function wh(a, b2) {
		var c2 = a.alternate;
		null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
		c2.flags = a.flags & 14680064;
		c2.childLanes = a.childLanes;
		c2.lanes = a.lanes;
		c2.child = a.child;
		c2.memoizedProps = a.memoizedProps;
		c2.memoizedState = a.memoizedState;
		c2.updateQueue = a.updateQueue;
		b2 = a.dependencies;
		c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
		c2.sibling = a.sibling;
		c2.index = a.index;
		c2.ref = a.ref;
		return c2;
	}
	function yh(a, b2, c2, d2, e2, f2) {
		var g2 = 2;
		d2 = a;
		if ("function" === typeof a)
			bj(a) && (g2 = 1);
		else if ("string" === typeof a)
			g2 = 5;
		else
			a:
					switch (a) {
						case ya:
							return Ah(c2.children, e2, f2, b2);
						case za:
							g2 = 8;
							e2 |= 8;
							break;
						case Aa:
							return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
						case Ea:
							return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
						case Fa:
							return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
						case Ia:
							return qj(c2, e2, f2, b2);
						default:
							if ("object" === typeof a && null !== a)
								switch (a.$$typeof) {
									case Ba:
										g2 = 10;
										break a;
									case Ca:
										g2 = 9;
										break a;
									case Da:
										g2 = 11;
										break a;
									case Ga:
										g2 = 14;
										break a;
									case Ha:
										g2 = 16;
										d2 = null;
										break a;
								}
							throw Error(p(130, null == a ? a : typeof a, ""));
					}
		b2 = Bg(g2, c2, b2, e2);
		b2.elementType = a;
		b2.type = d2;
		b2.lanes = f2;
		return b2;
	}
	function Ah(a, b2, c2, d2) {
		a = Bg(7, a, d2, b2);
		a.lanes = c2;
		return a;
	}
	function qj(a, b2, c2, d2) {
		a = Bg(22, a, d2, b2);
		a.elementType = Ia;
		a.lanes = c2;
		a.stateNode = { isHidden: false };
		return a;
	}
	function xh(a, b2, c2) {
		a = Bg(6, a, null, b2);
		a.lanes = c2;
		return a;
	}
	function zh(a, b2, c2) {
		b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
		b2.lanes = c2;
		b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
		return b2;
	}
	function bl(a, b2, c2, d2, e2) {
		this.tag = b2;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d2;
		this.onRecoverableError = e2;
		this.mutableSourceEagerHydrationData = null;
	}
	function cl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
		a = new bl(a, b2, c2, h2, k2);
		1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
		f2 = Bg(3, null, null, b2);
		a.current = f2;
		f2.stateNode = a;
		f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
		ah(f2);
		return a;
	}
	function dl(a, b2, c2) {
		var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
	}
	function el(a) {
		if (!a)
			return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag)
				throw Error(p(170));
			var b2 = a;
			do {
				switch (b2.tag) {
					case 3:
						b2 = b2.stateNode.context;
						break a;
					case 1:
						if (Zf(b2.type)) {
							b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
							break a;
						}
				}
				b2 = b2.return;
			} while (null !== b2);
			throw Error(p(171));
		}
		if (1 === a.tag) {
			var c2 = a.type;
			if (Zf(c2))
				return bg(a, c2, b2);
		}
		return b2;
	}
	function fl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
		a = cl(c2, d2, true, a, e2, f2, g2, h2, k2);
		a.context = el(null);
		c2 = a.current;
		d2 = L();
		e2 = lh(c2);
		f2 = ch(d2, e2);
		f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
		dh(c2, f2, e2);
		a.current.lanes = e2;
		Ac(a, e2, d2);
		Ek(a, d2);
		return a;
	}
	function gl(a, b2, c2, d2) {
		var e2 = b2.current, f2 = L(), g2 = lh(e2);
		c2 = el(c2);
		null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
		b2 = ch(f2, g2);
		b2.payload = { element: a };
		d2 = void 0 === d2 ? null : d2;
		null !== d2 && (b2.callback = d2);
		a = dh(e2, b2, g2);
		null !== a && (mh(a, e2, g2, f2), eh(a, e2, g2));
		return g2;
	}
	function hl(a) {
		a = a.current;
		if (!a.child)
			return null;
		switch (a.child.tag) {
			case 5:
				return a.child.stateNode;
			default:
				return a.child.stateNode;
		}
	}
	function il(a, b2) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c2 = a.retryLane;
			a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
		}
	}
	function jl(a, b2) {
		il(a, b2);
		(a = a.alternate) && il(a, b2);
	}
	function kl() {
		return null;
	}
	var ll = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ml(a) {
		this._internalRoot = a;
	}
	nl.prototype.render = ml.prototype.render = function(a) {
		var b2 = this._internalRoot;
		if (null === b2)
			throw Error(p(409));
		gl(a, b2, null, null);
	};
	nl.prototype.unmount = ml.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b2 = a.containerInfo;
			Sk(function() {
				gl(null, a, null, null);
			});
			b2[uf] = null;
		}
	};
	function nl(a) {
		this._internalRoot = a;
	}
	nl.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b2 = Hc();
			a = { blockedOn: null, target: a, priority: b2 };
			for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
				;
			Qc.splice(c2, 0, a);
			0 === c2 && Vc(a);
		}
	};
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function pl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function ql() {
	}
	function rl(a, b2, c2, d2, e2) {
		if (e2) {
			if ("function" === typeof d2) {
				var f2 = d2;
				d2 = function() {
					var a2 = hl(g2);
					f2.call(a2);
				};
			}
			var g2 = fl(b2, d2, a, 0, null, false, false, "", ql);
			a._reactRootContainer = g2;
			a[uf] = g2.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Sk();
			return g2;
		}
		for (; e2 = a.lastChild; )
			a.removeChild(e2);
		if ("function" === typeof d2) {
			var h2 = d2;
			d2 = function() {
				var a2 = hl(k2);
				h2.call(a2);
			};
		}
		var k2 = cl(a, 0, false, null, null, false, false, "", ql);
		a._reactRootContainer = k2;
		a[uf] = k2.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Sk(function() {
			gl(b2, k2, c2, d2);
		});
		return k2;
	}
	function sl(a, b2, c2, d2, e2) {
		var f2 = c2._reactRootContainer;
		if (f2) {
			var g2 = f2;
			if ("function" === typeof e2) {
				var h2 = e2;
				e2 = function() {
					var a2 = hl(g2);
					h2.call(a2);
				};
			}
			gl(b2, g2, a, e2);
		} else
			g2 = rl(c2, b2, a, e2, d2);
		return hl(g2);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b2 = a.stateNode;
				if (b2.current.memoizedState.isDehydrated) {
					var c2 = tc(b2.pendingLanes);
					0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
				}
				break;
			case 13:
				Sk(function() {
					var b3 = Zg(a, 1);
					if (null !== b3) {
						var c3 = L();
						mh(b3, a, 1, c3);
					}
				}), jl(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b2 = Zg(a, 134217728);
			if (null !== b2) {
				var c2 = L();
				mh(b2, a, 134217728, c2);
			}
			jl(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b2 = lh(a), c2 = Zg(a, b2);
			if (null !== c2) {
				var d2 = L();
				mh(c2, a, b2, d2);
			}
			jl(a, b2);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b2) {
		var c2 = C;
		try {
			return C = a, b2();
		} finally {
			C = c2;
		}
	};
	yb = function(a, b2, c2) {
		switch (b2) {
			case "input":
				bb(a, c2);
				b2 = c2.name;
				if ("radio" === c2.type && null != b2) {
					for (c2 = a; c2.parentNode; )
						c2 = c2.parentNode;
					c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
					for (b2 = 0; b2 < c2.length; b2++) {
						var d2 = c2[b2];
						if (d2 !== a && d2.form === a.form) {
							var e2 = Db(d2);
							if (!e2)
								throw Error(p(90));
							Wa(d2);
							bb(d2, e2);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c2);
				break;
			case "select":
				b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
		}
	};
	Gb = Rk;
	Hb = Sk;
	var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
	var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!wl.isDisabled && wl.supportsFiber)
			try {
				kc = wl.inject(vl), lc = wl;
			} catch (a) {
			}
	}
	reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
	reactDom_production_min.createPortal = function(a, b2) {
		var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!ol(b2))
			throw Error(p(200));
		return dl(a, b2, null, c2);
	};
	reactDom_production_min.createRoot = function(a, b2) {
		if (!ol(a))
			throw Error(p(299));
		var c2 = false, d2 = "", e2 = ll;
		null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
		b2 = cl(a, 1, false, null, null, c2, false, d2, e2);
		a[uf] = b2.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ml(b2);
	};
	reactDom_production_min.findDOMNode = function(a) {
		if (null == a)
			return null;
		if (1 === a.nodeType)
			return a;
		var b2 = a._reactInternals;
		if (void 0 === b2) {
			if ("function" === typeof a.render)
				throw Error(p(188));
			a = Object.keys(a).join(",");
			throw Error(p(268, a));
		}
		a = Zb(b2);
		a = null === a ? null : a.stateNode;
		return a;
	};
	reactDom_production_min.flushSync = function(a) {
		return Sk(a);
	};
	reactDom_production_min.hydrate = function(a, b2, c2) {
		if (!pl(b2))
			throw Error(p(200));
		return sl(null, a, b2, true, c2);
	};
	reactDom_production_min.hydrateRoot = function(a, b2, c2) {
		if (!ol(a))
			throw Error(p(405));
		var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
		null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
		b2 = fl(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
		a[uf] = b2.current;
		sf(a);
		if (d2)
			for (a = 0; a < d2.length; a++)
				c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
						c2,
						e2
				);
		return new nl(b2);
	};
	reactDom_production_min.render = function(a, b2, c2) {
		if (!pl(b2))
			throw Error(p(200));
		return sl(null, a, b2, false, c2);
	};
	reactDom_production_min.unmountComponentAtNode = function(a) {
		if (!pl(a))
			throw Error(p(40));
		return a._reactRootContainer ? (Sk(function() {
			sl(null, null, a, false, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), true) : false;
	};
	reactDom_production_min.unstable_batchedUpdates = Rk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
		if (!pl(c2))
			throw Error(p(200));
		if (null == a || void 0 === a._reactInternals)
			throw Error(p(38));
		return sl(a, b2, c2, false, d2);
	};
	reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
	(function(module) {
		function checkDCE() {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
				return;
			}
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
			} catch (err) {
				console.error(err);
			}
		}
		{
			checkDCE();
			module.exports = reactDom_production_min;
		}
	})(reactDom);
	const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
	var m = reactDomExports;
	{
		client.createRoot = m.createRoot;
		client.hydrateRoot = m.hydrateRoot;
	}
	function isObject$2(obj) {
		return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
	}
	function extend$2(target = {}, src = {}) {
		Object.keys(src).forEach((key) => {
			if (typeof target[key] === "undefined")
				target[key] = src[key];
			else if (isObject$2(src[key]) && isObject$2(target[key]) && Object.keys(src[key]).length > 0) {
				extend$2(target[key], src[key]);
			}
		});
	}
	const ssrDocument = {
		body: {},
		addEventListener() {
		},
		removeEventListener() {
		},
		activeElement: {
			blur() {
			},
			nodeName: ""
		},
		querySelector() {
			return null;
		},
		querySelectorAll() {
			return [];
		},
		getElementById() {
			return null;
		},
		createEvent() {
			return {
				initEvent() {
				}
			};
		},
		createElement() {
			return {
				children: [],
				childNodes: [],
				style: {},
				setAttribute() {
				},
				getElementsByTagName() {
					return [];
				}
			};
		},
		createElementNS() {
			return {};
		},
		importNode() {
			return null;
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		}
	};
	function getDocument() {
		const doc = typeof document !== "undefined" ? document : {};
		extend$2(doc, ssrDocument);
		return doc;
	}
	const ssrWindow = {
		document: ssrDocument,
		navigator: {
			userAgent: ""
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		},
		history: {
			replaceState() {
			},
			pushState() {
			},
			go() {
			},
			back() {
			}
		},
		CustomEvent: function CustomEvent() {
			return this;
		},
		addEventListener() {
		},
		removeEventListener() {
		},
		getComputedStyle() {
			return {
				getPropertyValue() {
					return "";
				}
			};
		},
		Image() {
		},
		Date() {
		},
		screen: {},
		setTimeout() {
		},
		clearTimeout() {
		},
		matchMedia() {
			return {};
		},
		requestAnimationFrame(callback) {
			if (typeof setTimeout === "undefined") {
				callback();
				return null;
			}
			return setTimeout(callback, 0);
		},
		cancelAnimationFrame(id2) {
			if (typeof setTimeout === "undefined") {
				return;
			}
			clearTimeout(id2);
		}
	};
	function getWindow() {
		const win = typeof window !== "undefined" ? window : {};
		extend$2(win, ssrWindow);
		return win;
	}
	function deleteProps(obj) {
		const object = obj;
		Object.keys(object).forEach((key) => {
			try {
				object[key] = null;
			} catch (e2) {
			}
			try {
				delete object[key];
			} catch (e2) {
			}
		});
	}
	function nextTick(callback, delay = 0) {
		return setTimeout(callback, delay);
	}
	function now() {
		return Date.now();
	}
	function getComputedStyle$1(el2) {
		const window2 = getWindow();
		let style;
		if (window2.getComputedStyle) {
			style = window2.getComputedStyle(el2, null);
		}
		if (!style && el2.currentStyle) {
			style = el2.currentStyle;
		}
		if (!style) {
			style = el2.style;
		}
		return style;
	}
	function getTranslate(el2, axis = "x") {
		const window2 = getWindow();
		let matrix;
		let curTransform;
		let transformMatrix;
		const curStyle = getComputedStyle$1(el2);
		if (window2.WebKitCSSMatrix) {
			curTransform = curStyle.transform || curStyle.webkitTransform;
			if (curTransform.split(",").length > 6) {
				curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
			}
			transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
		} else {
			transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
			matrix = transformMatrix.toString().split(",");
		}
		if (axis === "x") {
			if (window2.WebKitCSSMatrix)
				curTransform = transformMatrix.m41;
			else if (matrix.length === 16)
				curTransform = parseFloat(matrix[12]);
			else
				curTransform = parseFloat(matrix[4]);
		}
		if (axis === "y") {
			if (window2.WebKitCSSMatrix)
				curTransform = transformMatrix.m42;
			else if (matrix.length === 16)
				curTransform = parseFloat(matrix[13]);
			else
				curTransform = parseFloat(matrix[5]);
		}
		return curTransform || 0;
	}
	function isObject$1(o) {
		return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
	}
	function isNode(node2) {
		if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
			return node2 instanceof HTMLElement;
		}
		return node2 && (node2.nodeType === 1 || node2.nodeType === 11);
	}
	function extend$1(...args) {
		const to = Object(args[0]);
		const noExtend = ["__proto__", "constructor", "prototype"];
		for (let i = 1; i < args.length; i += 1) {
			const nextSource = args[i];
			if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
				const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
				for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
					const nextKey = keysArray[nextIndex];
					const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
					if (desc !== void 0 && desc.enumerable) {
						if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
							if (nextSource[nextKey].__swiper__) {
								to[nextKey] = nextSource[nextKey];
							} else {
								extend$1(to[nextKey], nextSource[nextKey]);
							}
						} else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
							to[nextKey] = {};
							if (nextSource[nextKey].__swiper__) {
								to[nextKey] = nextSource[nextKey];
							} else {
								extend$1(to[nextKey], nextSource[nextKey]);
							}
						} else {
							to[nextKey] = nextSource[nextKey];
						}
					}
				}
			}
		}
		return to;
	}
	function setCSSProperty(el2, varName, varValue) {
		el2.style.setProperty(varName, varValue);
	}
	function animateCSSModeScroll({
		swiper: swiper2,
		targetPosition,
		side
	}) {
		const window2 = getWindow();
		const startPosition = -swiper2.translate;
		let startTime = null;
		let time;
		const duration = swiper2.params.speed;
		swiper2.wrapperEl.style.scrollSnapType = "none";
		window2.cancelAnimationFrame(swiper2.cssModeFrameID);
		const dir = targetPosition > startPosition ? "next" : "prev";
		const isOutOfBound = (current, target) => {
			return dir === "next" && current >= target || dir === "prev" && current <= target;
		};
		const animate = () => {
			time = new Date().getTime();
			if (startTime === null) {
				startTime = time;
			}
			const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
			const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
			let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
			if (isOutOfBound(currentPosition, targetPosition)) {
				currentPosition = targetPosition;
			}
			swiper2.wrapperEl.scrollTo({
				[side]: currentPosition
			});
			if (isOutOfBound(currentPosition, targetPosition)) {
				swiper2.wrapperEl.style.overflow = "hidden";
				swiper2.wrapperEl.style.scrollSnapType = "";
				setTimeout(() => {
					swiper2.wrapperEl.style.overflow = "";
					swiper2.wrapperEl.scrollTo({
						[side]: currentPosition
					});
				});
				window2.cancelAnimationFrame(swiper2.cssModeFrameID);
				return;
			}
			swiper2.cssModeFrameID = window2.requestAnimationFrame(animate);
		};
		animate();
	}
	function elementChildren(element, selector = "") {
		return [...element.children].filter((el2) => el2.matches(selector));
	}
	function createElement(tag, classes2 = []) {
		const el2 = document.createElement(tag);
		el2.classList.add(...Array.isArray(classes2) ? classes2 : [classes2]);
		return el2;
	}
	function elementPrevAll(el2, selector) {
		const prevEls = [];
		while (el2.previousElementSibling) {
			const prev2 = el2.previousElementSibling;
			if (selector) {
				if (prev2.matches(selector))
					prevEls.push(prev2);
			} else
				prevEls.push(prev2);
			el2 = prev2;
		}
		return prevEls;
	}
	function elementNextAll(el2, selector) {
		const nextEls = [];
		while (el2.nextElementSibling) {
			const next2 = el2.nextElementSibling;
			if (selector) {
				if (next2.matches(selector))
					nextEls.push(next2);
			} else
				nextEls.push(next2);
			el2 = next2;
		}
		return nextEls;
	}
	function elementStyle(el2, prop) {
		const window2 = getWindow();
		return window2.getComputedStyle(el2, null).getPropertyValue(prop);
	}
	function elementIndex(el2) {
		let child = el2;
		let i;
		if (child) {
			i = 0;
			while ((child = child.previousSibling) !== null) {
				if (child.nodeType === 1)
					i += 1;
			}
			return i;
		}
		return void 0;
	}
	function elementParents(el2, selector) {
		const parents = [];
		let parent = el2.parentElement;
		while (parent) {
			if (selector) {
				if (parent.matches(selector))
					parents.push(parent);
			} else {
				parents.push(parent);
			}
			parent = parent.parentElement;
		}
		return parents;
	}
	function elementOuterSize(el2, size, includeMargins) {
		const window2 = getWindow();
		if (includeMargins) {
			return el2[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el2, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el2, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
		}
		return el2.offsetWidth;
	}
	let support;
	function calcSupport() {
		const window2 = getWindow();
		const document2 = getDocument();
		return {
			smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
			touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
		};
	}
	function getSupport() {
		if (!support) {
			support = calcSupport();
		}
		return support;
	}
	let deviceCached;
	function calcDevice({
		userAgent
	} = {}) {
		const support2 = getSupport();
		const window2 = getWindow();
		const platform = window2.navigator.platform;
		const ua2 = userAgent || window2.navigator.userAgent;
		const device = {
			ios: false,
			android: false
		};
		const screenWidth = window2.screen.width;
		const screenHeight = window2.screen.height;
		const android = ua2.match(/(Android);?[\s\/]+([\d.]+)?/);
		let ipad = ua2.match(/(iPad).*OS\s([\d_]+)/);
		const ipod = ua2.match(/(iPod)(.*OS\s([\d_]+))?/);
		const iphone = !ipad && ua2.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
		const windows = platform === "Win32";
		let macos = platform === "MacIntel";
		const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
		if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
			ipad = ua2.match(/(Version)\/([\d.]+)/);
			if (!ipad)
				ipad = [0, 1, "13_0_0"];
			macos = false;
		}
		if (android && !windows) {
			device.os = "android";
			device.android = true;
		}
		if (ipad || iphone || ipod) {
			device.os = "ios";
			device.ios = true;
		}
		return device;
	}
	function getDevice(overrides = {}) {
		if (!deviceCached) {
			deviceCached = calcDevice(overrides);
		}
		return deviceCached;
	}
	let browser;
	function calcBrowser() {
		const window2 = getWindow();
		let needPerspectiveFix = false;
		function isSafari() {
			const ua2 = window2.navigator.userAgent.toLowerCase();
			return ua2.indexOf("safari") >= 0 && ua2.indexOf("chrome") < 0 && ua2.indexOf("android") < 0;
		}
		if (isSafari()) {
			const ua2 = String(window2.navigator.userAgent);
			if (ua2.includes("Version/")) {
				const [major, minor] = ua2.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
				needPerspectiveFix = major < 16 || major === 16 && minor < 2;
			}
		}
		return {
			isSafari: needPerspectiveFix || isSafari(),
			needPerspectiveFix,
			isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
		};
	}
	function getBrowser() {
		if (!browser) {
			browser = calcBrowser();
		}
		return browser;
	}
	function Resize({
		swiper: swiper2,
		on,
		emit
	}) {
		const window2 = getWindow();
		let observer = null;
		let animationFrame = null;
		const resizeHandler = () => {
			if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
				return;
			emit("beforeResize");
			emit("resize");
		};
		const createObserver = () => {
			if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
				return;
			observer = new ResizeObserver((entries) => {
				animationFrame = window2.requestAnimationFrame(() => {
					const {
						width,
						height
					} = swiper2;
					let newWidth = width;
					let newHeight = height;
					entries.forEach(({
						contentBoxSize,
						contentRect,
						target
					}) => {
						if (target && target !== swiper2.el)
							return;
						newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
						newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
					});
					if (newWidth !== width || newHeight !== height) {
						resizeHandler();
					}
				});
			});
			observer.observe(swiper2.el);
		};
		const removeObserver = () => {
			if (animationFrame) {
				window2.cancelAnimationFrame(animationFrame);
			}
			if (observer && observer.unobserve && swiper2.el) {
				observer.unobserve(swiper2.el);
				observer = null;
			}
		};
		const orientationChangeHandler = () => {
			if (!swiper2 || swiper2.destroyed || !swiper2.initialized)
				return;
			emit("orientationchange");
		};
		on("init", () => {
			if (swiper2.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
				createObserver();
				return;
			}
			window2.addEventListener("resize", resizeHandler);
			window2.addEventListener("orientationchange", orientationChangeHandler);
		});
		on("destroy", () => {
			removeObserver();
			window2.removeEventListener("resize", resizeHandler);
			window2.removeEventListener("orientationchange", orientationChangeHandler);
		});
	}
	function Observer({
		swiper: swiper2,
		extendParams,
		on,
		emit
	}) {
		const observers = [];
		const window2 = getWindow();
		const attach = (target, options = {}) => {
			const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
			const observer = new ObserverFunc((mutations) => {
				if (swiper2.__preventObserver__)
					return;
				if (mutations.length === 1) {
					emit("observerUpdate", mutations[0]);
					return;
				}
				const observerUpdate = function observerUpdate2() {
					emit("observerUpdate", mutations[0]);
				};
				if (window2.requestAnimationFrame) {
					window2.requestAnimationFrame(observerUpdate);
				} else {
					window2.setTimeout(observerUpdate, 0);
				}
			});
			observer.observe(target, {
				attributes: typeof options.attributes === "undefined" ? true : options.attributes,
				childList: typeof options.childList === "undefined" ? true : options.childList,
				characterData: typeof options.characterData === "undefined" ? true : options.characterData
			});
			observers.push(observer);
		};
		const init = () => {
			if (!swiper2.params.observer)
				return;
			if (swiper2.params.observeParents) {
				const containerParents = elementParents(swiper2.el);
				for (let i = 0; i < containerParents.length; i += 1) {
					attach(containerParents[i]);
				}
			}
			attach(swiper2.el, {
				childList: swiper2.params.observeSlideChildren
			});
			attach(swiper2.wrapperEl, {
				attributes: false
			});
		};
		const destroy = () => {
			observers.forEach((observer) => {
				observer.disconnect();
			});
			observers.splice(0, observers.length);
		};
		extendParams({
			observer: false,
			observeParents: false,
			observeSlideChildren: false
		});
		on("init", init);
		on("destroy", destroy);
	}
	const eventsEmitter = {
		on(events2, handler, priority) {
			const self2 = this;
			if (!self2.eventsListeners || self2.destroyed)
				return self2;
			if (typeof handler !== "function")
				return self2;
			const method = priority ? "unshift" : "push";
			events2.split(" ").forEach((event) => {
				if (!self2.eventsListeners[event])
					self2.eventsListeners[event] = [];
				self2.eventsListeners[event][method](handler);
			});
			return self2;
		},
		once(events2, handler, priority) {
			const self2 = this;
			if (!self2.eventsListeners || self2.destroyed)
				return self2;
			if (typeof handler !== "function")
				return self2;
			function onceHandler(...args) {
				self2.off(events2, onceHandler);
				if (onceHandler.__emitterProxy) {
					delete onceHandler.__emitterProxy;
				}
				handler.apply(self2, args);
			}
			onceHandler.__emitterProxy = handler;
			return self2.on(events2, onceHandler, priority);
		},
		onAny(handler, priority) {
			const self2 = this;
			if (!self2.eventsListeners || self2.destroyed)
				return self2;
			if (typeof handler !== "function")
				return self2;
			const method = priority ? "unshift" : "push";
			if (self2.eventsAnyListeners.indexOf(handler) < 0) {
				self2.eventsAnyListeners[method](handler);
			}
			return self2;
		},
		offAny(handler) {
			const self2 = this;
			if (!self2.eventsListeners || self2.destroyed)
				return self2;
			if (!self2.eventsAnyListeners)
				return self2;
			const index = self2.eventsAnyListeners.indexOf(handler);
			if (index >= 0) {
				self2.eventsAnyListeners.splice(index, 1);
			}
			return self2;
		},
		off(events2, handler) {
			const self2 = this;
			if (!self2.eventsListeners || self2.destroyed)
				return self2;
			if (!self2.eventsListeners)
				return self2;
			events2.split(" ").forEach((event) => {
				if (typeof handler === "undefined") {
					self2.eventsListeners[event] = [];
				} else if (self2.eventsListeners[event]) {
					self2.eventsListeners[event].forEach((eventHandler, index) => {
						if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
							self2.eventsListeners[event].splice(index, 1);
						}
					});
				}
			});
			return self2;
		},
		emit(...args) {
			const self2 = this;
			if (!self2.eventsListeners || self2.destroyed)
				return self2;
			if (!self2.eventsListeners)
				return self2;
			let events2;
			let data;
			let context;
			if (typeof args[0] === "string" || Array.isArray(args[0])) {
				events2 = args[0];
				data = args.slice(1, args.length);
				context = self2;
			} else {
				events2 = args[0].events;
				data = args[0].data;
				context = args[0].context || self2;
			}
			data.unshift(context);
			const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
			eventsArray.forEach((event) => {
				if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
					self2.eventsAnyListeners.forEach((eventHandler) => {
						eventHandler.apply(context, [event, ...data]);
					});
				}
				if (self2.eventsListeners && self2.eventsListeners[event]) {
					self2.eventsListeners[event].forEach((eventHandler) => {
						eventHandler.apply(context, data);
					});
				}
			});
			return self2;
		}
	};
	function updateSize() {
		const swiper2 = this;
		let width;
		let height;
		const el2 = swiper2.el;
		if (typeof swiper2.params.width !== "undefined" && swiper2.params.width !== null) {
			width = swiper2.params.width;
		} else {
			width = el2.clientWidth;
		}
		if (typeof swiper2.params.height !== "undefined" && swiper2.params.height !== null) {
			height = swiper2.params.height;
		} else {
			height = el2.clientHeight;
		}
		if (width === 0 && swiper2.isHorizontal() || height === 0 && swiper2.isVertical()) {
			return;
		}
		width = width - parseInt(elementStyle(el2, "padding-left") || 0, 10) - parseInt(elementStyle(el2, "padding-right") || 0, 10);
		height = height - parseInt(elementStyle(el2, "padding-top") || 0, 10) - parseInt(elementStyle(el2, "padding-bottom") || 0, 10);
		if (Number.isNaN(width))
			width = 0;
		if (Number.isNaN(height))
			height = 0;
		Object.assign(swiper2, {
			width,
			height,
			size: swiper2.isHorizontal() ? width : height
		});
	}
	function updateSlides() {
		const swiper2 = this;
		function getDirectionLabel(property) {
			if (swiper2.isHorizontal()) {
				return property;
			}
			return {
				"width": "height",
				"margin-top": "margin-left",
				"margin-bottom ": "margin-right",
				"margin-left": "margin-top",
				"margin-right": "margin-bottom",
				"padding-left": "padding-top",
				"padding-right": "padding-bottom",
				"marginRight": "marginBottom"
			}[property];
		}
		function getDirectionPropertyValue(node2, label) {
			return parseFloat(node2.getPropertyValue(getDirectionLabel(label)) || 0);
		}
		const params = swiper2.params;
		const {
			wrapperEl,
			slidesEl,
			size: swiperSize,
			rtlTranslate: rtl,
			wrongRTL
		} = swiper2;
		const isVirtual = swiper2.virtual && params.virtual.enabled;
		const previousSlidesLength = isVirtual ? swiper2.virtual.slides.length : swiper2.slides.length;
		const slides = elementChildren(slidesEl, `.${swiper2.params.slideClass}, swiper-slide`);
		const slidesLength = isVirtual ? swiper2.virtual.slides.length : slides.length;
		let snapGrid = [];
		const slidesGrid = [];
		const slidesSizesGrid = [];
		let offsetBefore = params.slidesOffsetBefore;
		if (typeof offsetBefore === "function") {
			offsetBefore = params.slidesOffsetBefore.call(swiper2);
		}
		let offsetAfter = params.slidesOffsetAfter;
		if (typeof offsetAfter === "function") {
			offsetAfter = params.slidesOffsetAfter.call(swiper2);
		}
		const previousSnapGridLength = swiper2.snapGrid.length;
		const previousSlidesGridLength = swiper2.slidesGrid.length;
		let spaceBetween = params.spaceBetween;
		let slidePosition = -offsetBefore;
		let prevSlideSize = 0;
		let index = 0;
		if (typeof swiperSize === "undefined") {
			return;
		}
		if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
			spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
		} else if (typeof spaceBetween === "string") {
			spaceBetween = parseFloat(spaceBetween);
		}
		swiper2.virtualSize = -spaceBetween;
		slides.forEach((slideEl) => {
			if (rtl) {
				slideEl.style.marginLeft = "";
			} else {
				slideEl.style.marginRight = "";
			}
			slideEl.style.marginBottom = "";
			slideEl.style.marginTop = "";
		});
		if (params.centeredSlides && params.cssMode) {
			setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
			setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
		}
		const gridEnabled = params.grid && params.grid.rows > 1 && swiper2.grid;
		if (gridEnabled) {
			swiper2.grid.initSlides(slidesLength);
		}
		let slideSize;
		const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
			return typeof params.breakpoints[key].slidesPerView !== "undefined";
		}).length > 0;
		for (let i = 0; i < slidesLength; i += 1) {
			slideSize = 0;
			let slide2;
			if (slides[i])
				slide2 = slides[i];
			if (gridEnabled) {
				swiper2.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
			}
			if (slides[i] && elementStyle(slide2, "display") === "none")
				continue;
			if (params.slidesPerView === "auto") {
				if (shouldResetSlideSize) {
					slides[i].style[getDirectionLabel("width")] = ``;
				}
				const slideStyles = getComputedStyle(slide2);
				const currentTransform = slide2.style.transform;
				const currentWebKitTransform = slide2.style.webkitTransform;
				if (currentTransform) {
					slide2.style.transform = "none";
				}
				if (currentWebKitTransform) {
					slide2.style.webkitTransform = "none";
				}
				if (params.roundLengths) {
					slideSize = swiper2.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
				} else {
					const width = getDirectionPropertyValue(slideStyles, "width");
					const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
					const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
					const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
					const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
					const boxSizing = slideStyles.getPropertyValue("box-sizing");
					if (boxSizing && boxSizing === "border-box") {
						slideSize = width + marginLeft + marginRight;
					} else {
						const {
							clientWidth,
							offsetWidth
						} = slide2;
						slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
					}
				}
				if (currentTransform) {
					slide2.style.transform = currentTransform;
				}
				if (currentWebKitTransform) {
					slide2.style.webkitTransform = currentWebKitTransform;
				}
				if (params.roundLengths)
					slideSize = Math.floor(slideSize);
			} else {
				slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
				if (params.roundLengths)
					slideSize = Math.floor(slideSize);
				if (slides[i]) {
					slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
				}
			}
			if (slides[i]) {
				slides[i].swiperSlideSize = slideSize;
			}
			slidesSizesGrid.push(slideSize);
			if (params.centeredSlides) {
				slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
				if (prevSlideSize === 0 && i !== 0)
					slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
				if (i === 0)
					slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
				if (Math.abs(slidePosition) < 1 / 1e3)
					slidePosition = 0;
				if (params.roundLengths)
					slidePosition = Math.floor(slidePosition);
				if (index % params.slidesPerGroup === 0)
					snapGrid.push(slidePosition);
				slidesGrid.push(slidePosition);
			} else {
				if (params.roundLengths)
					slidePosition = Math.floor(slidePosition);
				if ((index - Math.min(swiper2.params.slidesPerGroupSkip, index)) % swiper2.params.slidesPerGroup === 0)
					snapGrid.push(slidePosition);
				slidesGrid.push(slidePosition);
				slidePosition = slidePosition + slideSize + spaceBetween;
			}
			swiper2.virtualSize += slideSize + spaceBetween;
			prevSlideSize = slideSize;
			index += 1;
		}
		swiper2.virtualSize = Math.max(swiper2.virtualSize, swiperSize) + offsetAfter;
		if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
			wrapperEl.style.width = `${swiper2.virtualSize + spaceBetween}px`;
		}
		if (params.setWrapperSize) {
			wrapperEl.style[getDirectionLabel("width")] = `${swiper2.virtualSize + spaceBetween}px`;
		}
		if (gridEnabled) {
			swiper2.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
		}
		if (!params.centeredSlides) {
			const newSlidesGrid = [];
			for (let i = 0; i < snapGrid.length; i += 1) {
				let slidesGridItem = snapGrid[i];
				if (params.roundLengths)
					slidesGridItem = Math.floor(slidesGridItem);
				if (snapGrid[i] <= swiper2.virtualSize - swiperSize) {
					newSlidesGrid.push(slidesGridItem);
				}
			}
			snapGrid = newSlidesGrid;
			if (Math.floor(swiper2.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
				snapGrid.push(swiper2.virtualSize - swiperSize);
			}
		}
		if (isVirtual && params.loop) {
			const size = slidesSizesGrid[0] + spaceBetween;
			if (params.slidesPerGroup > 1) {
				const groups = Math.ceil((swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter) / params.slidesPerGroup);
				const groupSize = size * params.slidesPerGroup;
				for (let i = 0; i < groups; i += 1) {
					snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
				}
			}
			for (let i = 0; i < swiper2.virtual.slidesBefore + swiper2.virtual.slidesAfter; i += 1) {
				if (params.slidesPerGroup === 1) {
					snapGrid.push(snapGrid[snapGrid.length - 1] + size);
				}
				slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
				swiper2.virtualSize += size;
			}
		}
		if (snapGrid.length === 0)
			snapGrid = [0];
		if (spaceBetween !== 0) {
			const key = swiper2.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
			slides.filter((_, slideIndex) => {
				if (!params.cssMode || params.loop)
					return true;
				if (slideIndex === slides.length - 1) {
					return false;
				}
				return true;
			}).forEach((slideEl) => {
				slideEl.style[key] = `${spaceBetween}px`;
			});
		}
		if (params.centeredSlides && params.centeredSlidesBounds) {
			let allSlidesSize = 0;
			slidesSizesGrid.forEach((slideSizeValue) => {
				allSlidesSize += slideSizeValue + (spaceBetween || 0);
			});
			allSlidesSize -= spaceBetween;
			const maxSnap = allSlidesSize - swiperSize;
			snapGrid = snapGrid.map((snap) => {
				if (snap <= 0)
					return -offsetBefore;
				if (snap > maxSnap)
					return maxSnap + offsetAfter;
				return snap;
			});
		}
		if (params.centerInsufficientSlides) {
			let allSlidesSize = 0;
			slidesSizesGrid.forEach((slideSizeValue) => {
				allSlidesSize += slideSizeValue + (spaceBetween || 0);
			});
			allSlidesSize -= spaceBetween;
			if (allSlidesSize < swiperSize) {
				const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
				snapGrid.forEach((snap, snapIndex) => {
					snapGrid[snapIndex] = snap - allSlidesOffset;
				});
				slidesGrid.forEach((snap, snapIndex) => {
					slidesGrid[snapIndex] = snap + allSlidesOffset;
				});
			}
		}
		Object.assign(swiper2, {
			slides,
			snapGrid,
			slidesGrid,
			slidesSizesGrid
		});
		if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
			setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
			setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper2.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
			const addToSnapGrid = -swiper2.snapGrid[0];
			const addToSlidesGrid = -swiper2.slidesGrid[0];
			swiper2.snapGrid = swiper2.snapGrid.map((v2) => v2 + addToSnapGrid);
			swiper2.slidesGrid = swiper2.slidesGrid.map((v2) => v2 + addToSlidesGrid);
		}
		if (slidesLength !== previousSlidesLength) {
			swiper2.emit("slidesLengthChange");
		}
		if (snapGrid.length !== previousSnapGridLength) {
			if (swiper2.params.watchOverflow)
				swiper2.checkOverflow();
			swiper2.emit("snapGridLengthChange");
		}
		if (slidesGrid.length !== previousSlidesGridLength) {
			swiper2.emit("slidesGridLengthChange");
		}
		if (params.watchSlidesProgress) {
			swiper2.updateSlidesOffset();
		}
		if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
			const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
			const hasClassBackfaceClassAdded = swiper2.el.classList.contains(backFaceHiddenClass);
			if (slidesLength <= params.maxBackfaceHiddenSlides) {
				if (!hasClassBackfaceClassAdded)
					swiper2.el.classList.add(backFaceHiddenClass);
			} else if (hasClassBackfaceClassAdded) {
				swiper2.el.classList.remove(backFaceHiddenClass);
			}
		}
	}
	function updateAutoHeight(speed) {
		const swiper2 = this;
		const activeSlides = [];
		const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
		let newHeight = 0;
		let i;
		if (typeof speed === "number") {
			swiper2.setTransition(speed);
		} else if (speed === true) {
			swiper2.setTransition(swiper2.params.speed);
		}
		const getSlideByIndex = (index) => {
			if (isVirtual) {
				return swiper2.slides[swiper2.getSlideIndexByData(index)];
			}
			return swiper2.slides[index];
		};
		if (swiper2.params.slidesPerView !== "auto" && swiper2.params.slidesPerView > 1) {
			if (swiper2.params.centeredSlides) {
				(swiper2.visibleSlides || []).forEach((slide2) => {
					activeSlides.push(slide2);
				});
			} else {
				for (i = 0; i < Math.ceil(swiper2.params.slidesPerView); i += 1) {
					const index = swiper2.activeIndex + i;
					if (index > swiper2.slides.length && !isVirtual)
						break;
					activeSlides.push(getSlideByIndex(index));
				}
			}
		} else {
			activeSlides.push(getSlideByIndex(swiper2.activeIndex));
		}
		for (i = 0; i < activeSlides.length; i += 1) {
			if (typeof activeSlides[i] !== "undefined") {
				const height = activeSlides[i].offsetHeight;
				newHeight = height > newHeight ? height : newHeight;
			}
		}
		if (newHeight || newHeight === 0)
			swiper2.wrapperEl.style.height = `${newHeight}px`;
	}
	function updateSlidesOffset() {
		const swiper2 = this;
		const slides = swiper2.slides;
		const minusOffset = swiper2.isElement ? swiper2.isHorizontal() ? swiper2.wrapperEl.offsetLeft : swiper2.wrapperEl.offsetTop : 0;
		for (let i = 0; i < slides.length; i += 1) {
			slides[i].swiperSlideOffset = (swiper2.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper2.cssOverflowAdjustment();
		}
	}
	function updateSlidesProgress(translate2 = this && this.translate || 0) {
		const swiper2 = this;
		const params = swiper2.params;
		const {
			slides,
			rtlTranslate: rtl,
			snapGrid
		} = swiper2;
		if (slides.length === 0)
			return;
		if (typeof slides[0].swiperSlideOffset === "undefined")
			swiper2.updateSlidesOffset();
		let offsetCenter = -translate2;
		if (rtl)
			offsetCenter = translate2;
		slides.forEach((slideEl) => {
			slideEl.classList.remove(params.slideVisibleClass);
		});
		swiper2.visibleSlidesIndexes = [];
		swiper2.visibleSlides = [];
		let spaceBetween = params.spaceBetween;
		if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
			spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper2.size;
		} else if (typeof spaceBetween === "string") {
			spaceBetween = parseFloat(spaceBetween);
		}
		for (let i = 0; i < slides.length; i += 1) {
			const slide2 = slides[i];
			let slideOffset = slide2.swiperSlideOffset;
			if (params.cssMode && params.centeredSlides) {
				slideOffset -= slides[0].swiperSlideOffset;
			}
			const slideProgress = (offsetCenter + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
			const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper2.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
			const slideBefore = -(offsetCenter - slideOffset);
			const slideAfter = slideBefore + swiper2.slidesSizesGrid[i];
			const isVisible = slideBefore >= 0 && slideBefore < swiper2.size - 1 || slideAfter > 1 && slideAfter <= swiper2.size || slideBefore <= 0 && slideAfter >= swiper2.size;
			if (isVisible) {
				swiper2.visibleSlides.push(slide2);
				swiper2.visibleSlidesIndexes.push(i);
				slides[i].classList.add(params.slideVisibleClass);
			}
			slide2.progress = rtl ? -slideProgress : slideProgress;
			slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
		}
	}
	function updateProgress(translate2) {
		const swiper2 = this;
		if (typeof translate2 === "undefined") {
			const multiplier = swiper2.rtlTranslate ? -1 : 1;
			translate2 = swiper2 && swiper2.translate && swiper2.translate * multiplier || 0;
		}
		const params = swiper2.params;
		const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
		let {
			progress,
			isBeginning,
			isEnd,
			progressLoop
		} = swiper2;
		const wasBeginning = isBeginning;
		const wasEnd = isEnd;
		if (translatesDiff === 0) {
			progress = 0;
			isBeginning = true;
			isEnd = true;
		} else {
			progress = (translate2 - swiper2.minTranslate()) / translatesDiff;
			const isBeginningRounded = Math.abs(translate2 - swiper2.minTranslate()) < 1;
			const isEndRounded = Math.abs(translate2 - swiper2.maxTranslate()) < 1;
			isBeginning = isBeginningRounded || progress <= 0;
			isEnd = isEndRounded || progress >= 1;
			if (isBeginningRounded)
				progress = 0;
			if (isEndRounded)
				progress = 1;
		}
		if (params.loop) {
			const firstSlideIndex = swiper2.getSlideIndexByData(0);
			const lastSlideIndex = swiper2.getSlideIndexByData(swiper2.slides.length - 1);
			const firstSlideTranslate = swiper2.slidesGrid[firstSlideIndex];
			const lastSlideTranslate = swiper2.slidesGrid[lastSlideIndex];
			const translateMax = swiper2.slidesGrid[swiper2.slidesGrid.length - 1];
			const translateAbs = Math.abs(translate2);
			if (translateAbs >= firstSlideTranslate) {
				progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
			} else {
				progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
			}
			if (progressLoop > 1)
				progressLoop -= 1;
		}
		Object.assign(swiper2, {
			progress,
			progressLoop,
			isBeginning,
			isEnd
		});
		if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
			swiper2.updateSlidesProgress(translate2);
		if (isBeginning && !wasBeginning) {
			swiper2.emit("reachBeginning toEdge");
		}
		if (isEnd && !wasEnd) {
			swiper2.emit("reachEnd toEdge");
		}
		if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
			swiper2.emit("fromEdge");
		}
		swiper2.emit("progress", progress);
	}
	function updateSlidesClasses() {
		const swiper2 = this;
		const {
			slides,
			params,
			slidesEl,
			activeIndex
		} = swiper2;
		const isVirtual = swiper2.virtual && params.virtual.enabled;
		const getFilteredSlide = (selector) => {
			return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
		};
		slides.forEach((slideEl) => {
			slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
		});
		let activeSlide;
		if (isVirtual) {
			if (params.loop) {
				let slideIndex = activeIndex - swiper2.virtual.slidesBefore;
				if (slideIndex < 0)
					slideIndex = swiper2.virtual.slides.length + slideIndex;
				if (slideIndex >= swiper2.virtual.slides.length)
					slideIndex -= swiper2.virtual.slides.length;
				activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
			} else {
				activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
			}
		} else {
			activeSlide = slides[activeIndex];
		}
		if (activeSlide) {
			activeSlide.classList.add(params.slideActiveClass);
			let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
			if (params.loop && !nextSlide) {
				nextSlide = slides[0];
			}
			if (nextSlide) {
				nextSlide.classList.add(params.slideNextClass);
			}
			let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
			if (params.loop && !prevSlide === 0) {
				prevSlide = slides[slides.length - 1];
			}
			if (prevSlide) {
				prevSlide.classList.add(params.slidePrevClass);
			}
		}
		swiper2.emitSlidesClasses();
	}
	const processLazyPreloader = (swiper2, imageEl) => {
		if (!swiper2 || swiper2.destroyed || !swiper2.params)
			return;
		const slideSelector = () => swiper2.isElement ? `swiper-slide` : `.${swiper2.params.slideClass}`;
		const slideEl = imageEl.closest(slideSelector());
		if (slideEl) {
			const lazyEl = slideEl.querySelector(`.${swiper2.params.lazyPreloaderClass}`);
			if (lazyEl)
				lazyEl.remove();
		}
	};
	const unlazy = (swiper2, index) => {
		if (!swiper2.slides[index])
			return;
		const imageEl = swiper2.slides[index].querySelector('[loading="lazy"]');
		if (imageEl)
			imageEl.removeAttribute("loading");
	};
	const preload = (swiper2) => {
		if (!swiper2 || swiper2.destroyed || !swiper2.params)
			return;
		let amount = swiper2.params.lazyPreloadPrevNext;
		const len = swiper2.slides.length;
		if (!len || !amount || amount < 0)
			return;
		amount = Math.min(amount, len);
		const slidesPerView = swiper2.params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(swiper2.params.slidesPerView);
		const activeIndex = swiper2.activeIndex;
		if (swiper2.params.grid && swiper2.params.grid.rows > 1) {
			const activeColumn = activeIndex;
			const preloadColumns = [activeColumn - amount];
			preloadColumns.push(...Array.from({
				length: amount
			}).map((_, i) => {
				return activeColumn + slidesPerView + i;
			}));
			swiper2.slides.forEach((slideEl, i) => {
				if (preloadColumns.includes(slideEl.column))
					unlazy(swiper2, i);
			});
			return;
		}
		const slideIndexLastInView = activeIndex + slidesPerView - 1;
		if (swiper2.params.rewind || swiper2.params.loop) {
			for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
				const realIndex = (i % len + len) % len;
				if (realIndex < activeIndex || realIndex > slideIndexLastInView)
					unlazy(swiper2, realIndex);
			}
		} else {
			for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
				if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
					unlazy(swiper2, i);
				}
			}
		}
	};
	function getActiveIndexByTranslate(swiper2) {
		const {
			slidesGrid,
			params
		} = swiper2;
		const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
		let activeIndex;
		for (let i = 0; i < slidesGrid.length; i += 1) {
			if (typeof slidesGrid[i + 1] !== "undefined") {
				if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
					activeIndex = i;
				} else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
					activeIndex = i + 1;
				}
			} else if (translate2 >= slidesGrid[i]) {
				activeIndex = i;
			}
		}
		if (params.normalizeSlideIndex) {
			if (activeIndex < 0 || typeof activeIndex === "undefined")
				activeIndex = 0;
		}
		return activeIndex;
	}
	function updateActiveIndex(newActiveIndex) {
		const swiper2 = this;
		const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
		const {
			snapGrid,
			params,
			activeIndex: previousIndex,
			realIndex: previousRealIndex,
			snapIndex: previousSnapIndex
		} = swiper2;
		let activeIndex = newActiveIndex;
		let snapIndex;
		const getVirtualRealIndex = (aIndex) => {
			let realIndex2 = aIndex - swiper2.virtual.slidesBefore;
			if (realIndex2 < 0) {
				realIndex2 = swiper2.virtual.slides.length + realIndex2;
			}
			if (realIndex2 >= swiper2.virtual.slides.length) {
				realIndex2 -= swiper2.virtual.slides.length;
			}
			return realIndex2;
		};
		if (typeof activeIndex === "undefined") {
			activeIndex = getActiveIndexByTranslate(swiper2);
		}
		if (snapGrid.indexOf(translate2) >= 0) {
			snapIndex = snapGrid.indexOf(translate2);
		} else {
			const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
			snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
		}
		if (snapIndex >= snapGrid.length)
			snapIndex = snapGrid.length - 1;
		if (activeIndex === previousIndex) {
			if (snapIndex !== previousSnapIndex) {
				swiper2.snapIndex = snapIndex;
				swiper2.emit("snapIndexChange");
			}
			if (swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
				swiper2.realIndex = getVirtualRealIndex(activeIndex);
			}
			return;
		}
		let realIndex;
		if (swiper2.virtual && params.virtual.enabled && params.loop) {
			realIndex = getVirtualRealIndex(activeIndex);
		} else if (swiper2.slides[activeIndex]) {
			realIndex = parseInt(swiper2.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
		} else {
			realIndex = activeIndex;
		}
		Object.assign(swiper2, {
			previousSnapIndex,
			snapIndex,
			previousRealIndex,
			realIndex,
			previousIndex,
			activeIndex
		});
		if (swiper2.initialized) {
			preload(swiper2);
		}
		swiper2.emit("activeIndexChange");
		swiper2.emit("snapIndexChange");
		if (previousRealIndex !== realIndex) {
			swiper2.emit("realIndexChange");
		}
		if (swiper2.initialized || swiper2.params.runCallbacksOnInit) {
			swiper2.emit("slideChange");
		}
	}
	function updateClickedSlide(e2) {
		const swiper2 = this;
		const params = swiper2.params;
		const slide2 = e2.closest(`.${params.slideClass}, swiper-slide`);
		let slideFound = false;
		let slideIndex;
		if (slide2) {
			for (let i = 0; i < swiper2.slides.length; i += 1) {
				if (swiper2.slides[i] === slide2) {
					slideFound = true;
					slideIndex = i;
					break;
				}
			}
		}
		if (slide2 && slideFound) {
			swiper2.clickedSlide = slide2;
			if (swiper2.virtual && swiper2.params.virtual.enabled) {
				swiper2.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
			} else {
				swiper2.clickedIndex = slideIndex;
			}
		} else {
			swiper2.clickedSlide = void 0;
			swiper2.clickedIndex = void 0;
			return;
		}
		if (params.slideToClickedSlide && swiper2.clickedIndex !== void 0 && swiper2.clickedIndex !== swiper2.activeIndex) {
			swiper2.slideToClickedSlide();
		}
	}
	const update = {
		updateSize,
		updateSlides,
		updateAutoHeight,
		updateSlidesOffset,
		updateSlidesProgress,
		updateProgress,
		updateSlidesClasses,
		updateActiveIndex,
		updateClickedSlide
	};
	function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
		const swiper2 = this;
		const {
			params,
			rtlTranslate: rtl,
			translate: translate2,
			wrapperEl
		} = swiper2;
		if (params.virtualTranslate) {
			return rtl ? -translate2 : translate2;
		}
		if (params.cssMode) {
			return translate2;
		}
		let currentTranslate = getTranslate(wrapperEl, axis);
		currentTranslate += swiper2.cssOverflowAdjustment();
		if (rtl)
			currentTranslate = -currentTranslate;
		return currentTranslate || 0;
	}
	function setTranslate(translate2, byController) {
		const swiper2 = this;
		const {
			rtlTranslate: rtl,
			params,
			wrapperEl,
			progress
		} = swiper2;
		let x2 = 0;
		let y2 = 0;
		const z2 = 0;
		if (swiper2.isHorizontal()) {
			x2 = rtl ? -translate2 : translate2;
		} else {
			y2 = translate2;
		}
		if (params.roundLengths) {
			x2 = Math.floor(x2);
			y2 = Math.floor(y2);
		}
		swiper2.previousTranslate = swiper2.translate;
		swiper2.translate = swiper2.isHorizontal() ? x2 : y2;
		if (params.cssMode) {
			wrapperEl[swiper2.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper2.isHorizontal() ? -x2 : -y2;
		} else if (!params.virtualTranslate) {
			if (swiper2.isHorizontal()) {
				x2 -= swiper2.cssOverflowAdjustment();
			} else {
				y2 -= swiper2.cssOverflowAdjustment();
			}
			wrapperEl.style.transform = `translate3d(${x2}px, ${y2}px, ${z2}px)`;
		}
		let newProgress;
		const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
		if (translatesDiff === 0) {
			newProgress = 0;
		} else {
			newProgress = (translate2 - swiper2.minTranslate()) / translatesDiff;
		}
		if (newProgress !== progress) {
			swiper2.updateProgress(translate2);
		}
		swiper2.emit("setTranslate", swiper2.translate, byController);
	}
	function minTranslate() {
		return -this.snapGrid[0];
	}
	function maxTranslate() {
		return -this.snapGrid[this.snapGrid.length - 1];
	}
	function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
		const swiper2 = this;
		const {
			params,
			wrapperEl
		} = swiper2;
		if (swiper2.animating && params.preventInteractionOnTransition) {
			return false;
		}
		const minTranslate2 = swiper2.minTranslate();
		const maxTranslate2 = swiper2.maxTranslate();
		let newTranslate;
		if (translateBounds && translate2 > minTranslate2)
			newTranslate = minTranslate2;
		else if (translateBounds && translate2 < maxTranslate2)
			newTranslate = maxTranslate2;
		else
			newTranslate = translate2;
		swiper2.updateProgress(newTranslate);
		if (params.cssMode) {
			const isH = swiper2.isHorizontal();
			if (speed === 0) {
				wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
			} else {
				if (!swiper2.support.smoothScroll) {
					animateCSSModeScroll({
						swiper: swiper2,
						targetPosition: -newTranslate,
						side: isH ? "left" : "top"
					});
					return true;
				}
				wrapperEl.scrollTo({
					[isH ? "left" : "top"]: -newTranslate,
					behavior: "smooth"
				});
			}
			return true;
		}
		if (speed === 0) {
			swiper2.setTransition(0);
			swiper2.setTranslate(newTranslate);
			if (runCallbacks) {
				swiper2.emit("beforeTransitionStart", speed, internal);
				swiper2.emit("transitionEnd");
			}
		} else {
			swiper2.setTransition(speed);
			swiper2.setTranslate(newTranslate);
			if (runCallbacks) {
				swiper2.emit("beforeTransitionStart", speed, internal);
				swiper2.emit("transitionStart");
			}
			if (!swiper2.animating) {
				swiper2.animating = true;
				if (!swiper2.onTranslateToWrapperTransitionEnd) {
					swiper2.onTranslateToWrapperTransitionEnd = function transitionEnd2(e2) {
						if (!swiper2 || swiper2.destroyed)
							return;
						if (e2.target !== this)
							return;
						swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
						swiper2.onTranslateToWrapperTransitionEnd = null;
						delete swiper2.onTranslateToWrapperTransitionEnd;
						if (runCallbacks) {
							swiper2.emit("transitionEnd");
						}
					};
				}
				swiper2.wrapperEl.addEventListener("transitionend", swiper2.onTranslateToWrapperTransitionEnd);
			}
		}
		return true;
	}
	const translate = {
		getTranslate: getSwiperTranslate,
		setTranslate,
		minTranslate,
		maxTranslate,
		translateTo
	};
	function setTransition(duration, byController) {
		const swiper2 = this;
		if (!swiper2.params.cssMode) {
			swiper2.wrapperEl.style.transitionDuration = `${duration}ms`;
		}
		swiper2.emit("setTransition", duration, byController);
	}
	function transitionEmit({
		swiper: swiper2,
		runCallbacks,
		direction,
		step
	}) {
		const {
			activeIndex,
			previousIndex
		} = swiper2;
		let dir = direction;
		if (!dir) {
			if (activeIndex > previousIndex)
				dir = "next";
			else if (activeIndex < previousIndex)
				dir = "prev";
			else
				dir = "reset";
		}
		swiper2.emit(`transition${step}`);
		if (runCallbacks && activeIndex !== previousIndex) {
			if (dir === "reset") {
				swiper2.emit(`slideResetTransition${step}`);
				return;
			}
			swiper2.emit(`slideChangeTransition${step}`);
			if (dir === "next") {
				swiper2.emit(`slideNextTransition${step}`);
			} else {
				swiper2.emit(`slidePrevTransition${step}`);
			}
		}
	}
	function transitionStart(runCallbacks = true, direction) {
		const swiper2 = this;
		const {
			params
		} = swiper2;
		if (params.cssMode)
			return;
		if (params.autoHeight) {
			swiper2.updateAutoHeight();
		}
		transitionEmit({
			swiper: swiper2,
			runCallbacks,
			direction,
			step: "Start"
		});
	}
	function transitionEnd(runCallbacks = true, direction) {
		const swiper2 = this;
		const {
			params
		} = swiper2;
		swiper2.animating = false;
		if (params.cssMode)
			return;
		swiper2.setTransition(0);
		transitionEmit({
			swiper: swiper2,
			runCallbacks,
			direction,
			step: "End"
		});
	}
	const transition = {
		setTransition,
		transitionStart,
		transitionEnd
	};
	function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
		if (typeof index === "string") {
			index = parseInt(index, 10);
		}
		const swiper2 = this;
		let slideIndex = index;
		if (slideIndex < 0)
			slideIndex = 0;
		const {
			params,
			snapGrid,
			slidesGrid,
			previousIndex,
			activeIndex,
			rtlTranslate: rtl,
			wrapperEl,
			enabled
		} = swiper2;
		if (swiper2.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
			return false;
		}
		const skip = Math.min(swiper2.params.slidesPerGroupSkip, slideIndex);
		let snapIndex = skip + Math.floor((slideIndex - skip) / swiper2.params.slidesPerGroup);
		if (snapIndex >= snapGrid.length)
			snapIndex = snapGrid.length - 1;
		const translate2 = -snapGrid[snapIndex];
		if (params.normalizeSlideIndex) {
			for (let i = 0; i < slidesGrid.length; i += 1) {
				const normalizedTranslate = -Math.floor(translate2 * 100);
				const normalizedGrid = Math.floor(slidesGrid[i] * 100);
				const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
				if (typeof slidesGrid[i + 1] !== "undefined") {
					if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
						slideIndex = i;
					} else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
						slideIndex = i + 1;
					}
				} else if (normalizedTranslate >= normalizedGrid) {
					slideIndex = i;
				}
			}
		}
		if (swiper2.initialized && slideIndex !== activeIndex) {
			if (!swiper2.allowSlideNext && (rtl ? translate2 > swiper2.translate && translate2 > swiper2.minTranslate() : translate2 < swiper2.translate && translate2 < swiper2.minTranslate())) {
				return false;
			}
			if (!swiper2.allowSlidePrev && translate2 > swiper2.translate && translate2 > swiper2.maxTranslate()) {
				if ((activeIndex || 0) !== slideIndex) {
					return false;
				}
			}
		}
		if (slideIndex !== (previousIndex || 0) && runCallbacks) {
			swiper2.emit("beforeSlideChangeStart");
		}
		swiper2.updateProgress(translate2);
		let direction;
		if (slideIndex > activeIndex)
			direction = "next";
		else if (slideIndex < activeIndex)
			direction = "prev";
		else
			direction = "reset";
		if (rtl && -translate2 === swiper2.translate || !rtl && translate2 === swiper2.translate) {
			swiper2.updateActiveIndex(slideIndex);
			if (params.autoHeight) {
				swiper2.updateAutoHeight();
			}
			swiper2.updateSlidesClasses();
			if (params.effect !== "slide") {
				swiper2.setTranslate(translate2);
			}
			if (direction !== "reset") {
				swiper2.transitionStart(runCallbacks, direction);
				swiper2.transitionEnd(runCallbacks, direction);
			}
			return false;
		}
		if (params.cssMode) {
			const isH = swiper2.isHorizontal();
			const t2 = rtl ? translate2 : -translate2;
			if (speed === 0) {
				const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
				if (isVirtual) {
					swiper2.wrapperEl.style.scrollSnapType = "none";
					swiper2._immediateVirtual = true;
				}
				if (isVirtual && !swiper2._cssModeVirtualInitialSet && swiper2.params.initialSlide > 0) {
					swiper2._cssModeVirtualInitialSet = true;
					requestAnimationFrame(() => {
						wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
					});
				} else {
					wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
				}
				if (isVirtual) {
					requestAnimationFrame(() => {
						swiper2.wrapperEl.style.scrollSnapType = "";
						swiper2._immediateVirtual = false;
					});
				}
			} else {
				if (!swiper2.support.smoothScroll) {
					animateCSSModeScroll({
						swiper: swiper2,
						targetPosition: t2,
						side: isH ? "left" : "top"
					});
					return true;
				}
				wrapperEl.scrollTo({
					[isH ? "left" : "top"]: t2,
					behavior: "smooth"
				});
			}
			return true;
		}
		swiper2.setTransition(speed);
		swiper2.setTranslate(translate2);
		swiper2.updateActiveIndex(slideIndex);
		swiper2.updateSlidesClasses();
		swiper2.emit("beforeTransitionStart", speed, internal);
		swiper2.transitionStart(runCallbacks, direction);
		if (speed === 0) {
			swiper2.transitionEnd(runCallbacks, direction);
		} else if (!swiper2.animating) {
			swiper2.animating = true;
			if (!swiper2.onSlideToWrapperTransitionEnd) {
				swiper2.onSlideToWrapperTransitionEnd = function transitionEnd2(e2) {
					if (!swiper2 || swiper2.destroyed)
						return;
					if (e2.target !== this)
						return;
					swiper2.wrapperEl.removeEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
					swiper2.onSlideToWrapperTransitionEnd = null;
					delete swiper2.onSlideToWrapperTransitionEnd;
					swiper2.transitionEnd(runCallbacks, direction);
				};
			}
			swiper2.wrapperEl.addEventListener("transitionend", swiper2.onSlideToWrapperTransitionEnd);
		}
		return true;
	}
	function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
		if (typeof index === "string") {
			const indexAsNumber = parseInt(index, 10);
			index = indexAsNumber;
		}
		const swiper2 = this;
		let newIndex = index;
		if (swiper2.params.loop) {
			if (swiper2.virtual && swiper2.params.virtual.enabled) {
				newIndex = newIndex + swiper2.virtual.slidesBefore;
			} else {
				newIndex = swiper2.getSlideIndexByData(newIndex);
			}
		}
		return swiper2.slideTo(newIndex, speed, runCallbacks, internal);
	}
	function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
		const swiper2 = this;
		const {
			enabled,
			params,
			animating
		} = swiper2;
		if (!enabled)
			return swiper2;
		let perGroup = params.slidesPerGroup;
		if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
			perGroup = Math.max(swiper2.slidesPerViewDynamic("current", true), 1);
		}
		const increment = swiper2.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
		const isVirtual = swiper2.virtual && params.virtual.enabled;
		if (params.loop) {
			if (animating && !isVirtual && params.loopPreventsSliding)
				return false;
			swiper2.loopFix({
				direction: "next"
			});
			swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
		}
		if (params.rewind && swiper2.isEnd) {
			return swiper2.slideTo(0, speed, runCallbacks, internal);
		}
		return swiper2.slideTo(swiper2.activeIndex + increment, speed, runCallbacks, internal);
	}
	function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
		const swiper2 = this;
		const {
			params,
			snapGrid,
			slidesGrid,
			rtlTranslate,
			enabled,
			animating
		} = swiper2;
		if (!enabled)
			return swiper2;
		const isVirtual = swiper2.virtual && params.virtual.enabled;
		if (params.loop) {
			if (animating && !isVirtual && params.loopPreventsSliding)
				return false;
			swiper2.loopFix({
				direction: "prev"
			});
			swiper2._clientLeft = swiper2.wrapperEl.clientLeft;
		}
		const translate2 = rtlTranslate ? swiper2.translate : -swiper2.translate;
		function normalize(val) {
			if (val < 0)
				return -Math.floor(Math.abs(val));
			return Math.floor(val);
		}
		const normalizedTranslate = normalize(translate2);
		const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
		let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
		if (typeof prevSnap === "undefined" && params.cssMode) {
			let prevSnapIndex;
			snapGrid.forEach((snap, snapIndex) => {
				if (normalizedTranslate >= snap) {
					prevSnapIndex = snapIndex;
				}
			});
			if (typeof prevSnapIndex !== "undefined") {
				prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
			}
		}
		let prevIndex = 0;
		if (typeof prevSnap !== "undefined") {
			prevIndex = slidesGrid.indexOf(prevSnap);
			if (prevIndex < 0)
				prevIndex = swiper2.activeIndex - 1;
			if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
				prevIndex = prevIndex - swiper2.slidesPerViewDynamic("previous", true) + 1;
				prevIndex = Math.max(prevIndex, 0);
			}
		}
		if (params.rewind && swiper2.isBeginning) {
			const lastIndex = swiper2.params.virtual && swiper2.params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
			return swiper2.slideTo(lastIndex, speed, runCallbacks, internal);
		}
		return swiper2.slideTo(prevIndex, speed, runCallbacks, internal);
	}
	function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
		const swiper2 = this;
		return swiper2.slideTo(swiper2.activeIndex, speed, runCallbacks, internal);
	}
	function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
		const swiper2 = this;
		let index = swiper2.activeIndex;
		const skip = Math.min(swiper2.params.slidesPerGroupSkip, index);
		const snapIndex = skip + Math.floor((index - skip) / swiper2.params.slidesPerGroup);
		const translate2 = swiper2.rtlTranslate ? swiper2.translate : -swiper2.translate;
		if (translate2 >= swiper2.snapGrid[snapIndex]) {
			const currentSnap = swiper2.snapGrid[snapIndex];
			const nextSnap = swiper2.snapGrid[snapIndex + 1];
			if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
				index += swiper2.params.slidesPerGroup;
			}
		} else {
			const prevSnap = swiper2.snapGrid[snapIndex - 1];
			const currentSnap = swiper2.snapGrid[snapIndex];
			if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
				index -= swiper2.params.slidesPerGroup;
			}
		}
		index = Math.max(index, 0);
		index = Math.min(index, swiper2.slidesGrid.length - 1);
		return swiper2.slideTo(index, speed, runCallbacks, internal);
	}
	function slideToClickedSlide() {
		const swiper2 = this;
		const {
			params,
			slidesEl
		} = swiper2;
		const slidesPerView = params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : params.slidesPerView;
		let slideToIndex = swiper2.clickedIndex;
		let realIndex;
		const slideSelector = swiper2.isElement ? `swiper-slide` : `.${params.slideClass}`;
		if (params.loop) {
			if (swiper2.animating)
				return;
			realIndex = parseInt(swiper2.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
			if (params.centeredSlides) {
				if (slideToIndex < swiper2.loopedSlides - slidesPerView / 2 || slideToIndex > swiper2.slides.length - swiper2.loopedSlides + slidesPerView / 2) {
					swiper2.loopFix();
					slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
					nextTick(() => {
						swiper2.slideTo(slideToIndex);
					});
				} else {
					swiper2.slideTo(slideToIndex);
				}
			} else if (slideToIndex > swiper2.slides.length - slidesPerView) {
				swiper2.loopFix();
				slideToIndex = swiper2.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
				nextTick(() => {
					swiper2.slideTo(slideToIndex);
				});
			} else {
				swiper2.slideTo(slideToIndex);
			}
		} else {
			swiper2.slideTo(slideToIndex);
		}
	}
	const slide = {
		slideTo,
		slideToLoop,
		slideNext,
		slidePrev,
		slideReset,
		slideToClosest,
		slideToClickedSlide
	};
	function loopCreate(slideRealIndex) {
		const swiper2 = this;
		const {
			params,
			slidesEl
		} = swiper2;
		if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled)
			return;
		const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
		slides.forEach((el2, index) => {
			el2.setAttribute("data-swiper-slide-index", index);
		});
		swiper2.loopFix({
			slideRealIndex,
			direction: params.centeredSlides ? void 0 : "next"
		});
	}
	function loopFix({
		slideRealIndex,
		slideTo: slideTo2 = true,
		direction,
		setTranslate: setTranslate2,
		activeSlideIndex,
		byController,
		byMousewheel
	} = {}) {
		const swiper2 = this;
		if (!swiper2.params.loop)
			return;
		swiper2.emit("beforeLoopFix");
		const {
			slides,
			allowSlidePrev,
			allowSlideNext,
			slidesEl,
			params
		} = swiper2;
		swiper2.allowSlidePrev = true;
		swiper2.allowSlideNext = true;
		if (swiper2.virtual && params.virtual.enabled) {
			if (slideTo2) {
				if (!params.centeredSlides && swiper2.snapIndex === 0) {
					swiper2.slideTo(swiper2.virtual.slides.length, 0, false, true);
				} else if (params.centeredSlides && swiper2.snapIndex < params.slidesPerView) {
					swiper2.slideTo(swiper2.virtual.slides.length + swiper2.snapIndex, 0, false, true);
				} else if (swiper2.snapIndex === swiper2.snapGrid.length - 1) {
					swiper2.slideTo(swiper2.virtual.slidesBefore, 0, false, true);
				}
			}
			swiper2.allowSlidePrev = allowSlidePrev;
			swiper2.allowSlideNext = allowSlideNext;
			swiper2.emit("loopFix");
			return;
		}
		const slidesPerView = params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
		let loopedSlides = params.loopedSlides || slidesPerView;
		if (loopedSlides % params.slidesPerGroup !== 0) {
			loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
		}
		swiper2.loopedSlides = loopedSlides;
		const prependSlidesIndexes = [];
		const appendSlidesIndexes = [];
		let activeIndex = swiper2.activeIndex;
		if (typeof activeSlideIndex === "undefined") {
			activeSlideIndex = swiper2.getSlideIndex(swiper2.slides.filter((el2) => el2.classList.contains(params.slideActiveClass))[0]);
		} else {
			activeIndex = activeSlideIndex;
		}
		const isNext = direction === "next" || !direction;
		const isPrev = direction === "prev" || !direction;
		let slidesPrepended = 0;
		let slidesAppended = 0;
		if (activeSlideIndex < loopedSlides) {
			slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
			for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
				const index = i - Math.floor(i / slides.length) * slides.length;
				prependSlidesIndexes.push(slides.length - index - 1);
			}
		} else if (activeSlideIndex > swiper2.slides.length - loopedSlides * 2) {
			slidesAppended = Math.max(activeSlideIndex - (swiper2.slides.length - loopedSlides * 2), params.slidesPerGroup);
			for (let i = 0; i < slidesAppended; i += 1) {
				const index = i - Math.floor(i / slides.length) * slides.length;
				appendSlidesIndexes.push(index);
			}
		}
		if (isPrev) {
			prependSlidesIndexes.forEach((index) => {
				swiper2.slides[index].swiperLoopMoveDOM = true;
				slidesEl.prepend(swiper2.slides[index]);
				swiper2.slides[index].swiperLoopMoveDOM = false;
			});
		}
		if (isNext) {
			appendSlidesIndexes.forEach((index) => {
				swiper2.slides[index].swiperLoopMoveDOM = true;
				slidesEl.append(swiper2.slides[index]);
				swiper2.slides[index].swiperLoopMoveDOM = false;
			});
		}
		swiper2.recalcSlides();
		if (params.slidesPerView === "auto") {
			swiper2.updateSlides();
		}
		if (params.watchSlidesProgress) {
			swiper2.updateSlidesOffset();
		}
		if (slideTo2) {
			if (prependSlidesIndexes.length > 0 && isPrev) {
				if (typeof slideRealIndex === "undefined") {
					const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
					const newSlideTranslate = swiper2.slidesGrid[activeIndex + slidesPrepended];
					const diff = newSlideTranslate - currentSlideTranslate;
					if (byMousewheel) {
						swiper2.setTranslate(swiper2.translate - diff);
					} else {
						swiper2.slideTo(activeIndex + slidesPrepended, 0, false, true);
						if (setTranslate2) {
							swiper2.touches[swiper2.isHorizontal() ? "startX" : "startY"] += diff;
						}
					}
				} else {
					if (setTranslate2) {
						swiper2.slideToLoop(slideRealIndex, 0, false, true);
					}
				}
			} else if (appendSlidesIndexes.length > 0 && isNext) {
				if (typeof slideRealIndex === "undefined") {
					const currentSlideTranslate = swiper2.slidesGrid[activeIndex];
					const newSlideTranslate = swiper2.slidesGrid[activeIndex - slidesAppended];
					const diff = newSlideTranslate - currentSlideTranslate;
					if (byMousewheel) {
						swiper2.setTranslate(swiper2.translate - diff);
					} else {
						swiper2.slideTo(activeIndex - slidesAppended, 0, false, true);
						if (setTranslate2) {
							swiper2.touches[swiper2.isHorizontal() ? "startX" : "startY"] += diff;
						}
					}
				} else {
					swiper2.slideToLoop(slideRealIndex, 0, false, true);
				}
			}
		}
		swiper2.allowSlidePrev = allowSlidePrev;
		swiper2.allowSlideNext = allowSlideNext;
		if (swiper2.controller && swiper2.controller.control && !byController) {
			const loopParams = {
				slideRealIndex,
				slideTo: false,
				direction,
				setTranslate: setTranslate2,
				activeSlideIndex,
				byController: true
			};
			if (Array.isArray(swiper2.controller.control)) {
				swiper2.controller.control.forEach((c2) => {
					if (!c2.destroyed && c2.params.loop)
						c2.loopFix(loopParams);
				});
			} else if (swiper2.controller.control instanceof swiper2.constructor && swiper2.controller.control.params.loop) {
				swiper2.controller.control.loopFix(loopParams);
			}
		}
		swiper2.emit("loopFix");
	}
	function loopDestroy() {
		const swiper2 = this;
		const {
			params,
			slidesEl
		} = swiper2;
		if (!params.loop || swiper2.virtual && swiper2.params.virtual.enabled)
			return;
		swiper2.recalcSlides();
		const newSlidesOrder = [];
		swiper2.slides.forEach((slideEl) => {
			const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
			newSlidesOrder[index] = slideEl;
		});
		swiper2.slides.forEach((slideEl) => {
			slideEl.removeAttribute("data-swiper-slide-index");
		});
		newSlidesOrder.forEach((slideEl) => {
			slidesEl.append(slideEl);
		});
		swiper2.recalcSlides();
		swiper2.slideTo(swiper2.realIndex, 0);
	}
	const loop = {
		loopCreate,
		loopFix,
		loopDestroy
	};
	function setGrabCursor(moving) {
		const swiper2 = this;
		if (!swiper2.params.simulateTouch || swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode)
			return;
		const el2 = swiper2.params.touchEventsTarget === "container" ? swiper2.el : swiper2.wrapperEl;
		if (swiper2.isElement) {
			swiper2.__preventObserver__ = true;
		}
		el2.style.cursor = "move";
		el2.style.cursor = moving ? "grabbing" : "grab";
		if (swiper2.isElement) {
			requestAnimationFrame(() => {
				swiper2.__preventObserver__ = false;
			});
		}
	}
	function unsetGrabCursor() {
		const swiper2 = this;
		if (swiper2.params.watchOverflow && swiper2.isLocked || swiper2.params.cssMode) {
			return;
		}
		if (swiper2.isElement) {
			swiper2.__preventObserver__ = true;
		}
		swiper2[swiper2.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
		if (swiper2.isElement) {
			requestAnimationFrame(() => {
				swiper2.__preventObserver__ = false;
			});
		}
	}
	const grabCursor = {
		setGrabCursor,
		unsetGrabCursor
	};
	function closestElement(selector, base = this) {
		function __closestFrom(el2) {
			if (!el2 || el2 === getDocument() || el2 === getWindow())
				return null;
			if (el2.assignedSlot)
				el2 = el2.assignedSlot;
			const found = el2.closest(selector);
			if (!found && !el2.getRootNode) {
				return null;
			}
			return found || __closestFrom(el2.getRootNode().host);
		}
		return __closestFrom(base);
	}
	function onTouchStart(event) {
		const swiper2 = this;
		const document2 = getDocument();
		const window2 = getWindow();
		const data = swiper2.touchEventsData;
		data.evCache.push(event);
		const {
			params,
			touches,
			enabled
		} = swiper2;
		if (!enabled)
			return;
		if (!params.simulateTouch && event.pointerType === "mouse")
			return;
		if (swiper2.animating && params.preventInteractionOnTransition) {
			return;
		}
		if (!swiper2.animating && params.cssMode && params.loop) {
			swiper2.loopFix();
		}
		let e2 = event;
		if (e2.originalEvent)
			e2 = e2.originalEvent;
		let targetEl = e2.target;
		if (params.touchEventsTarget === "wrapper") {
			if (!swiper2.wrapperEl.contains(targetEl))
				return;
		}
		if ("which" in e2 && e2.which === 3)
			return;
		if ("button" in e2 && e2.button > 0)
			return;
		if (data.isTouched && data.isMoved)
			return;
		const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
		const eventPath = event.composedPath ? event.composedPath() : event.path;
		if (swipingClassHasValue && e2.target && e2.target.shadowRoot && eventPath) {
			targetEl = eventPath[0];
		}
		const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
		const isTargetShadow = !!(e2.target && e2.target.shadowRoot);
		if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
			swiper2.allowClick = true;
			return;
		}
		if (params.swipeHandler) {
			if (!targetEl.closest(params.swipeHandler))
				return;
		}
		touches.currentX = e2.pageX;
		touches.currentY = e2.pageY;
		const startX = touches.currentX;
		const startY = touches.currentY;
		const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
		const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
		if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
			if (edgeSwipeDetection === "prevent") {
				event.preventDefault();
			} else {
				return;
			}
		}
		Object.assign(data, {
			isTouched: true,
			isMoved: false,
			allowTouchCallbacks: true,
			isScrolling: void 0,
			startMoving: void 0
		});
		touches.startX = startX;
		touches.startY = startY;
		data.touchStartTime = now();
		swiper2.allowClick = true;
		swiper2.updateSize();
		swiper2.swipeDirection = void 0;
		if (params.threshold > 0)
			data.allowThresholdMove = false;
		let preventDefault = true;
		if (targetEl.matches(data.focusableElements)) {
			preventDefault = false;
			if (targetEl.nodeName === "SELECT") {
				data.isTouched = false;
			}
		}
		if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
			document2.activeElement.blur();
		}
		const shouldPreventDefault = preventDefault && swiper2.allowTouchMove && params.touchStartPreventDefault;
		if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
			e2.preventDefault();
		}
		if (params.freeMode && params.freeMode.enabled && swiper2.freeMode && swiper2.animating && !params.cssMode) {
			swiper2.freeMode.onTouchStart();
		}
		swiper2.emit("touchStart", e2);
	}
	function onTouchMove(event) {
		const document2 = getDocument();
		const swiper2 = this;
		const data = swiper2.touchEventsData;
		const {
			params,
			touches,
			rtlTranslate: rtl,
			enabled
		} = swiper2;
		if (!enabled)
			return;
		if (!params.simulateTouch && event.pointerType === "mouse")
			return;
		let e2 = event;
		if (e2.originalEvent)
			e2 = e2.originalEvent;
		if (!data.isTouched) {
			if (data.startMoving && data.isScrolling) {
				swiper2.emit("touchMoveOpposite", e2);
			}
			return;
		}
		const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === e2.pointerId);
		if (pointerIndex >= 0)
			data.evCache[pointerIndex] = e2;
		const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e2;
		const pageX = targetTouch.pageX;
		const pageY = targetTouch.pageY;
		if (e2.preventedByNestedSwiper) {
			touches.startX = pageX;
			touches.startY = pageY;
			return;
		}
		if (!swiper2.allowTouchMove) {
			if (!e2.target.matches(data.focusableElements)) {
				swiper2.allowClick = false;
			}
			if (data.isTouched) {
				Object.assign(touches, {
					startX: pageX,
					startY: pageY,
					prevX: swiper2.touches.currentX,
					prevY: swiper2.touches.currentY,
					currentX: pageX,
					currentY: pageY
				});
				data.touchStartTime = now();
			}
			return;
		}
		if (params.touchReleaseOnEdges && !params.loop) {
			if (swiper2.isVertical()) {
				if (pageY < touches.startY && swiper2.translate <= swiper2.maxTranslate() || pageY > touches.startY && swiper2.translate >= swiper2.minTranslate()) {
					data.isTouched = false;
					data.isMoved = false;
					return;
				}
			} else if (pageX < touches.startX && swiper2.translate <= swiper2.maxTranslate() || pageX > touches.startX && swiper2.translate >= swiper2.minTranslate()) {
				return;
			}
		}
		if (document2.activeElement) {
			if (e2.target === document2.activeElement && e2.target.matches(data.focusableElements)) {
				data.isMoved = true;
				swiper2.allowClick = false;
				return;
			}
		}
		if (data.allowTouchCallbacks) {
			swiper2.emit("touchMove", e2);
		}
		if (e2.targetTouches && e2.targetTouches.length > 1)
			return;
		touches.currentX = pageX;
		touches.currentY = pageY;
		const diffX = touches.currentX - touches.startX;
		const diffY = touches.currentY - touches.startY;
		if (swiper2.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper2.params.threshold)
			return;
		if (typeof data.isScrolling === "undefined") {
			let touchAngle;
			if (swiper2.isHorizontal() && touches.currentY === touches.startY || swiper2.isVertical() && touches.currentX === touches.startX) {
				data.isScrolling = false;
			} else {
				if (diffX * diffX + diffY * diffY >= 25) {
					touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
					data.isScrolling = swiper2.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
				}
			}
		}
		if (data.isScrolling) {
			swiper2.emit("touchMoveOpposite", e2);
		}
		if (typeof data.startMoving === "undefined") {
			if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
				data.startMoving = true;
			}
		}
		if (data.isScrolling || swiper2.zoom && swiper2.params.zoom && swiper2.params.zoom.enabled && data.evCache.length > 1) {
			data.isTouched = false;
			return;
		}
		if (!data.startMoving) {
			return;
		}
		swiper2.allowClick = false;
		if (!params.cssMode && e2.cancelable) {
			e2.preventDefault();
		}
		if (params.touchMoveStopPropagation && !params.nested) {
			e2.stopPropagation();
		}
		let diff = swiper2.isHorizontal() ? diffX : diffY;
		let touchesDiff = swiper2.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
		if (params.oneWayMovement) {
			diff = Math.abs(diff) * (rtl ? 1 : -1);
			touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
		}
		touches.diff = diff;
		diff *= params.touchRatio;
		if (rtl) {
			diff = -diff;
			touchesDiff = -touchesDiff;
		}
		const prevTouchesDirection = swiper2.touchesDirection;
		swiper2.swipeDirection = diff > 0 ? "prev" : "next";
		swiper2.touchesDirection = touchesDiff > 0 ? "prev" : "next";
		const isLoop = swiper2.params.loop && !params.cssMode;
		if (!data.isMoved) {
			if (isLoop) {
				swiper2.loopFix({
					direction: swiper2.swipeDirection
				});
			}
			data.startTranslate = swiper2.getTranslate();
			swiper2.setTransition(0);
			if (swiper2.animating) {
				const evt = new window.CustomEvent("transitionend", {
					bubbles: true,
					cancelable: true
				});
				swiper2.wrapperEl.dispatchEvent(evt);
			}
			data.allowMomentumBounce = false;
			if (params.grabCursor && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
				swiper2.setGrabCursor(true);
			}
			swiper2.emit("sliderFirstMove", e2);
		}
		let loopFixed;
		if (data.isMoved && prevTouchesDirection !== swiper2.touchesDirection && isLoop && Math.abs(diff) >= 1) {
			swiper2.loopFix({
				direction: swiper2.swipeDirection,
				setTranslate: true
			});
			loopFixed = true;
		}
		swiper2.emit("sliderMove", e2);
		data.isMoved = true;
		data.currentTranslate = diff + data.startTranslate;
		let disableParentSwiper = true;
		let resistanceRatio = params.resistanceRatio;
		if (params.touchReleaseOnEdges) {
			resistanceRatio = 0;
		}
		if (diff > 0) {
			if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper2.minTranslate() - swiper2.size / 2 : swiper2.minTranslate())) {
				swiper2.loopFix({
					direction: "prev",
					setTranslate: true,
					activeSlideIndex: 0
				});
			}
			if (data.currentTranslate > swiper2.minTranslate()) {
				disableParentSwiper = false;
				if (params.resistance) {
					data.currentTranslate = swiper2.minTranslate() - 1 + (-swiper2.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
				}
			}
		} else if (diff < 0) {
			if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper2.maxTranslate() + swiper2.size / 2 : swiper2.maxTranslate())) {
				swiper2.loopFix({
					direction: "next",
					setTranslate: true,
					activeSlideIndex: swiper2.slides.length - (params.slidesPerView === "auto" ? swiper2.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
				});
			}
			if (data.currentTranslate < swiper2.maxTranslate()) {
				disableParentSwiper = false;
				if (params.resistance) {
					data.currentTranslate = swiper2.maxTranslate() + 1 - (swiper2.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
				}
			}
		}
		if (disableParentSwiper) {
			e2.preventedByNestedSwiper = true;
		}
		if (!swiper2.allowSlideNext && swiper2.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
			data.currentTranslate = data.startTranslate;
		}
		if (!swiper2.allowSlidePrev && swiper2.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
			data.currentTranslate = data.startTranslate;
		}
		if (!swiper2.allowSlidePrev && !swiper2.allowSlideNext) {
			data.currentTranslate = data.startTranslate;
		}
		if (params.threshold > 0) {
			if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
				if (!data.allowThresholdMove) {
					data.allowThresholdMove = true;
					touches.startX = touches.currentX;
					touches.startY = touches.currentY;
					data.currentTranslate = data.startTranslate;
					touches.diff = swiper2.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
					return;
				}
			} else {
				data.currentTranslate = data.startTranslate;
				return;
			}
		}
		if (!params.followFinger || params.cssMode)
			return;
		if (params.freeMode && params.freeMode.enabled && swiper2.freeMode || params.watchSlidesProgress) {
			swiper2.updateActiveIndex();
			swiper2.updateSlidesClasses();
		}
		if (params.freeMode && params.freeMode.enabled && swiper2.freeMode) {
			swiper2.freeMode.onTouchMove();
		}
		swiper2.updateProgress(data.currentTranslate);
		swiper2.setTranslate(data.currentTranslate);
	}
	function onTouchEnd(event) {
		const swiper2 = this;
		const data = swiper2.touchEventsData;
		const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === event.pointerId);
		if (pointerIndex >= 0) {
			data.evCache.splice(pointerIndex, 1);
		}
		if (["pointercancel", "pointerout", "pointerleave"].includes(event.type)) {
			const proceed = event.type === "pointercancel" && (swiper2.browser.isSafari || swiper2.browser.isWebView);
			if (!proceed) {
				return;
			}
		}
		const {
			params,
			touches,
			rtlTranslate: rtl,
			slidesGrid,
			enabled
		} = swiper2;
		if (!enabled)
			return;
		if (!params.simulateTouch && event.pointerType === "mouse")
			return;
		let e2 = event;
		if (e2.originalEvent)
			e2 = e2.originalEvent;
		if (data.allowTouchCallbacks) {
			swiper2.emit("touchEnd", e2);
		}
		data.allowTouchCallbacks = false;
		if (!data.isTouched) {
			if (data.isMoved && params.grabCursor) {
				swiper2.setGrabCursor(false);
			}
			data.isMoved = false;
			data.startMoving = false;
			return;
		}
		if (params.grabCursor && data.isMoved && data.isTouched && (swiper2.allowSlideNext === true || swiper2.allowSlidePrev === true)) {
			swiper2.setGrabCursor(false);
		}
		const touchEndTime = now();
		const timeDiff = touchEndTime - data.touchStartTime;
		if (swiper2.allowClick) {
			const pathTree = e2.path || e2.composedPath && e2.composedPath();
			swiper2.updateClickedSlide(pathTree && pathTree[0] || e2.target);
			swiper2.emit("tap click", e2);
			if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
				swiper2.emit("doubleTap doubleClick", e2);
			}
		}
		data.lastClickTime = now();
		nextTick(() => {
			if (!swiper2.destroyed)
				swiper2.allowClick = true;
		});
		if (!data.isTouched || !data.isMoved || !swiper2.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
			data.isTouched = false;
			data.isMoved = false;
			data.startMoving = false;
			return;
		}
		data.isTouched = false;
		data.isMoved = false;
		data.startMoving = false;
		let currentPos;
		if (params.followFinger) {
			currentPos = rtl ? swiper2.translate : -swiper2.translate;
		} else {
			currentPos = -data.currentTranslate;
		}
		if (params.cssMode) {
			return;
		}
		if (params.freeMode && params.freeMode.enabled) {
			swiper2.freeMode.onTouchEnd({
				currentPos
			});
			return;
		}
		let stopIndex = 0;
		let groupSize = swiper2.slidesSizesGrid[0];
		for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
			const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
			if (typeof slidesGrid[i + increment2] !== "undefined") {
				if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
					stopIndex = i;
					groupSize = slidesGrid[i + increment2] - slidesGrid[i];
				}
			} else if (currentPos >= slidesGrid[i]) {
				stopIndex = i;
				groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
			}
		}
		let rewindFirstIndex = null;
		let rewindLastIndex = null;
		if (params.rewind) {
			if (swiper2.isBeginning) {
				rewindLastIndex = params.virtual && params.virtual.enabled && swiper2.virtual ? swiper2.virtual.slides.length - 1 : swiper2.slides.length - 1;
			} else if (swiper2.isEnd) {
				rewindFirstIndex = 0;
			}
		}
		const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
		const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
		if (timeDiff > params.longSwipesMs) {
			if (!params.longSwipes) {
				swiper2.slideTo(swiper2.activeIndex);
				return;
			}
			if (swiper2.swipeDirection === "next") {
				if (ratio >= params.longSwipesRatio)
					swiper2.slideTo(params.rewind && swiper2.isEnd ? rewindFirstIndex : stopIndex + increment);
				else
					swiper2.slideTo(stopIndex);
			}
			if (swiper2.swipeDirection === "prev") {
				if (ratio > 1 - params.longSwipesRatio) {
					swiper2.slideTo(stopIndex + increment);
				} else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
					swiper2.slideTo(rewindLastIndex);
				} else {
					swiper2.slideTo(stopIndex);
				}
			}
		} else {
			if (!params.shortSwipes) {
				swiper2.slideTo(swiper2.activeIndex);
				return;
			}
			const isNavButtonTarget = swiper2.navigation && (e2.target === swiper2.navigation.nextEl || e2.target === swiper2.navigation.prevEl);
			if (!isNavButtonTarget) {
				if (swiper2.swipeDirection === "next") {
					swiper2.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
				}
				if (swiper2.swipeDirection === "prev") {
					swiper2.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
				}
			} else if (e2.target === swiper2.navigation.nextEl) {
				swiper2.slideTo(stopIndex + increment);
			} else {
				swiper2.slideTo(stopIndex);
			}
		}
	}
	function onResize() {
		const swiper2 = this;
		const {
			params,
			el: el2
		} = swiper2;
		if (el2 && el2.offsetWidth === 0)
			return;
		if (params.breakpoints) {
			swiper2.setBreakpoint();
		}
		const {
			allowSlideNext,
			allowSlidePrev,
			snapGrid
		} = swiper2;
		const isVirtual = swiper2.virtual && swiper2.params.virtual.enabled;
		swiper2.allowSlideNext = true;
		swiper2.allowSlidePrev = true;
		swiper2.updateSize();
		swiper2.updateSlides();
		swiper2.updateSlidesClasses();
		const isVirtualLoop = isVirtual && params.loop;
		if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !swiper2.isBeginning && !swiper2.params.centeredSlides && !isVirtualLoop) {
			swiper2.slideTo(swiper2.slides.length - 1, 0, false, true);
		} else {
			if (swiper2.params.loop && !isVirtual) {
				swiper2.slideToLoop(swiper2.realIndex, 0, false, true);
			} else {
				swiper2.slideTo(swiper2.activeIndex, 0, false, true);
			}
		}
		if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
			clearTimeout(swiper2.autoplay.resizeTimeout);
			swiper2.autoplay.resizeTimeout = setTimeout(() => {
				if (swiper2.autoplay && swiper2.autoplay.running && swiper2.autoplay.paused) {
					swiper2.autoplay.resume();
				}
			}, 500);
		}
		swiper2.allowSlidePrev = allowSlidePrev;
		swiper2.allowSlideNext = allowSlideNext;
		if (swiper2.params.watchOverflow && snapGrid !== swiper2.snapGrid) {
			swiper2.checkOverflow();
		}
	}
	function onClick(e2) {
		const swiper2 = this;
		if (!swiper2.enabled)
			return;
		if (!swiper2.allowClick) {
			if (swiper2.params.preventClicks)
				e2.preventDefault();
			if (swiper2.params.preventClicksPropagation && swiper2.animating) {
				e2.stopPropagation();
				e2.stopImmediatePropagation();
			}
		}
	}
	function onScroll() {
		const swiper2 = this;
		const {
			wrapperEl,
			rtlTranslate,
			enabled
		} = swiper2;
		if (!enabled)
			return;
		swiper2.previousTranslate = swiper2.translate;
		if (swiper2.isHorizontal()) {
			swiper2.translate = -wrapperEl.scrollLeft;
		} else {
			swiper2.translate = -wrapperEl.scrollTop;
		}
		if (swiper2.translate === 0)
			swiper2.translate = 0;
		swiper2.updateActiveIndex();
		swiper2.updateSlidesClasses();
		let newProgress;
		const translatesDiff = swiper2.maxTranslate() - swiper2.minTranslate();
		if (translatesDiff === 0) {
			newProgress = 0;
		} else {
			newProgress = (swiper2.translate - swiper2.minTranslate()) / translatesDiff;
		}
		if (newProgress !== swiper2.progress) {
			swiper2.updateProgress(rtlTranslate ? -swiper2.translate : swiper2.translate);
		}
		swiper2.emit("setTranslate", swiper2.translate, false);
	}
	function onLoad(e2) {
		const swiper2 = this;
		processLazyPreloader(swiper2, e2.target);
		if (swiper2.params.cssMode || swiper2.params.slidesPerView !== "auto" && !swiper2.params.autoHeight) {
			return;
		}
		swiper2.update();
	}
	let dummyEventAttached = false;
	function dummyEventListener() {
	}
	const events = (swiper2, method) => {
		const document2 = getDocument();
		const {
			params,
			el: el2,
			wrapperEl,
			device
		} = swiper2;
		const capture = !!params.nested;
		const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
		const swiperMethod = method;
		el2[domMethod]("pointerdown", swiper2.onTouchStart, {
			passive: false
		});
		document2[domMethod]("pointermove", swiper2.onTouchMove, {
			passive: false,
			capture
		});
		document2[domMethod]("pointerup", swiper2.onTouchEnd, {
			passive: true
		});
		document2[domMethod]("pointercancel", swiper2.onTouchEnd, {
			passive: true
		});
		document2[domMethod]("pointerout", swiper2.onTouchEnd, {
			passive: true
		});
		document2[domMethod]("pointerleave", swiper2.onTouchEnd, {
			passive: true
		});
		if (params.preventClicks || params.preventClicksPropagation) {
			el2[domMethod]("click", swiper2.onClick, true);
		}
		if (params.cssMode) {
			wrapperEl[domMethod]("scroll", swiper2.onScroll);
		}
		if (params.updateOnWindowResize) {
			swiper2[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
		} else {
			swiper2[swiperMethod]("observerUpdate", onResize, true);
		}
		el2[domMethod]("load", swiper2.onLoad, {
			capture: true
		});
	};
	function attachEvents() {
		const swiper2 = this;
		const document2 = getDocument();
		const {
			params
		} = swiper2;
		swiper2.onTouchStart = onTouchStart.bind(swiper2);
		swiper2.onTouchMove = onTouchMove.bind(swiper2);
		swiper2.onTouchEnd = onTouchEnd.bind(swiper2);
		if (params.cssMode) {
			swiper2.onScroll = onScroll.bind(swiper2);
		}
		swiper2.onClick = onClick.bind(swiper2);
		swiper2.onLoad = onLoad.bind(swiper2);
		if (!dummyEventAttached) {
			document2.addEventListener("touchstart", dummyEventListener);
			dummyEventAttached = true;
		}
		events(swiper2, "on");
	}
	function detachEvents() {
		const swiper2 = this;
		events(swiper2, "off");
	}
	const events$1 = {
		attachEvents,
		detachEvents
	};
	const isGridEnabled = (swiper2, params) => {
		return swiper2.grid && params.grid && params.grid.rows > 1;
	};
	function setBreakpoint() {
		const swiper2 = this;
		const {
			realIndex,
			initialized,
			params,
			el: el2
		} = swiper2;
		const breakpoints2 = params.breakpoints;
		if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
			return;
		const breakpoint = swiper2.getBreakpoint(breakpoints2, swiper2.params.breakpointsBase, swiper2.el);
		if (!breakpoint || swiper2.currentBreakpoint === breakpoint)
			return;
		const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
		const breakpointParams = breakpointOnlyParams || swiper2.originalParams;
		const wasMultiRow = isGridEnabled(swiper2, params);
		const isMultiRow = isGridEnabled(swiper2, breakpointParams);
		const wasEnabled = params.enabled;
		if (wasMultiRow && !isMultiRow) {
			el2.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
			swiper2.emitContainerClasses();
		} else if (!wasMultiRow && isMultiRow) {
			el2.classList.add(`${params.containerModifierClass}grid`);
			if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
				el2.classList.add(`${params.containerModifierClass}grid-column`);
			}
			swiper2.emitContainerClasses();
		}
		["navigation", "pagination", "scrollbar"].forEach((prop) => {
			if (typeof breakpointParams[prop] === "undefined")
				return;
			const wasModuleEnabled = params[prop] && params[prop].enabled;
			const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
			if (wasModuleEnabled && !isModuleEnabled) {
				swiper2[prop].disable();
			}
			if (!wasModuleEnabled && isModuleEnabled) {
				swiper2[prop].enable();
			}
		});
		const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
		const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
		if (directionChanged && initialized) {
			swiper2.changeDirection();
		}
		extend$1(swiper2.params, breakpointParams);
		const isEnabled = swiper2.params.enabled;
		Object.assign(swiper2, {
			allowTouchMove: swiper2.params.allowTouchMove,
			allowSlideNext: swiper2.params.allowSlideNext,
			allowSlidePrev: swiper2.params.allowSlidePrev
		});
		if (wasEnabled && !isEnabled) {
			swiper2.disable();
		} else if (!wasEnabled && isEnabled) {
			swiper2.enable();
		}
		swiper2.currentBreakpoint = breakpoint;
		swiper2.emit("_beforeBreakpoint", breakpointParams);
		if (needsReLoop && initialized) {
			swiper2.loopDestroy();
			swiper2.loopCreate(realIndex);
			swiper2.updateSlides();
		}
		swiper2.emit("breakpoint", breakpointParams);
	}
	function getBreakpoint(breakpoints2, base = "window", containerEl) {
		if (!breakpoints2 || base === "container" && !containerEl)
			return void 0;
		let breakpoint = false;
		const window2 = getWindow();
		const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
		const points = Object.keys(breakpoints2).map((point) => {
			if (typeof point === "string" && point.indexOf("@") === 0) {
				const minRatio = parseFloat(point.substr(1));
				const value = currentHeight * minRatio;
				return {
					value,
					point
				};
			}
			return {
				value: point,
				point
			};
		});
		points.sort((a, b2) => parseInt(a.value, 10) - parseInt(b2.value, 10));
		for (let i = 0; i < points.length; i += 1) {
			const {
				point,
				value
			} = points[i];
			if (base === "window") {
				if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
					breakpoint = point;
				}
			} else if (value <= containerEl.clientWidth) {
				breakpoint = point;
			}
		}
		return breakpoint || "max";
	}
	const breakpoints = {
		setBreakpoint,
		getBreakpoint
	};
	function prepareClasses(entries, prefix2) {
		const resultClasses = [];
		entries.forEach((item) => {
			if (typeof item === "object") {
				Object.keys(item).forEach((classNames) => {
					if (item[classNames]) {
						resultClasses.push(prefix2 + classNames);
					}
				});
			} else if (typeof item === "string") {
				resultClasses.push(prefix2 + item);
			}
		});
		return resultClasses;
	}
	function addClasses() {
		const swiper2 = this;
		const {
			classNames,
			params,
			rtl,
			el: el2,
			device
		} = swiper2;
		const suffixes = prepareClasses(["initialized", params.direction, {
			"free-mode": swiper2.params.freeMode && params.freeMode.enabled
		}, {
			"autoheight": params.autoHeight
		}, {
			"rtl": rtl
		}, {
			"grid": params.grid && params.grid.rows > 1
		}, {
			"grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
		}, {
			"android": device.android
		}, {
			"ios": device.ios
		}, {
			"css-mode": params.cssMode
		}, {
			"centered": params.cssMode && params.centeredSlides
		}, {
			"watch-progress": params.watchSlidesProgress
		}], params.containerModifierClass);
		classNames.push(...suffixes);
		el2.classList.add(...classNames);
		swiper2.emitContainerClasses();
	}
	function removeClasses() {
		const swiper2 = this;
		const {
			el: el2,
			classNames
		} = swiper2;
		el2.classList.remove(...classNames);
		swiper2.emitContainerClasses();
	}
	const classes = {
		addClasses,
		removeClasses
	};
	function checkOverflow() {
		const swiper2 = this;
		const {
			isLocked: wasLocked,
			params
		} = swiper2;
		const {
			slidesOffsetBefore
		} = params;
		if (slidesOffsetBefore) {
			const lastSlideIndex = swiper2.slides.length - 1;
			const lastSlideRightEdge = swiper2.slidesGrid[lastSlideIndex] + swiper2.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
			swiper2.isLocked = swiper2.size > lastSlideRightEdge;
		} else {
			swiper2.isLocked = swiper2.snapGrid.length === 1;
		}
		if (params.allowSlideNext === true) {
			swiper2.allowSlideNext = !swiper2.isLocked;
		}
		if (params.allowSlidePrev === true) {
			swiper2.allowSlidePrev = !swiper2.isLocked;
		}
		if (wasLocked && wasLocked !== swiper2.isLocked) {
			swiper2.isEnd = false;
		}
		if (wasLocked !== swiper2.isLocked) {
			swiper2.emit(swiper2.isLocked ? "lock" : "unlock");
		}
	}
	const checkOverflow$1 = {
		checkOverflow
	};
	const defaults = {
		init: true,
		direction: "horizontal",
		oneWayMovement: false,
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: false,
		updateOnWindowResize: true,
		resizeObserver: true,
		nested: false,
		createElements: false,
		enabled: true,
		focusableElements: "input, select, option, textarea, button, video, label",
		// Overrides
		width: null,
		height: null,
		//
		preventInteractionOnTransition: false,
		// ssr
		userAgent: null,
		url: null,
		// To support iOS's swipe-to-go-back gesture (when being used in-app).
		edgeSwipeDetection: false,
		edgeSwipeThreshold: 20,
		// Autoheight
		autoHeight: false,
		// Set wrapper width
		setWrapperSize: false,
		// Virtual Translate
		virtualTranslate: false,
		// Effects
		effect: "slide",
		// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
		// Breakpoints
		breakpoints: void 0,
		breakpointsBase: "window",
		// Slides grid
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: false,
		centeredSlides: false,
		centeredSlidesBounds: false,
		slidesOffsetBefore: 0,
		// in px
		slidesOffsetAfter: 0,
		// in px
		normalizeSlideIndex: true,
		centerInsufficientSlides: false,
		// Disable swiper and hide navigation when container not overflow
		watchOverflow: true,
		// Round length
		roundLengths: false,
		// Touches
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: true,
		shortSwipes: true,
		longSwipes: true,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: true,
		allowTouchMove: true,
		threshold: 5,
		touchMoveStopPropagation: false,
		touchStartPreventDefault: true,
		touchStartForcePreventDefault: false,
		touchReleaseOnEdges: false,
		// Unique Navigation Elements
		uniqueNavElements: true,
		// Resistance
		resistance: true,
		resistanceRatio: 0.85,
		// Progress
		watchSlidesProgress: false,
		// Cursor
		grabCursor: false,
		// Clicks
		preventClicks: true,
		preventClicksPropagation: true,
		slideToClickedSlide: false,
		// loop
		loop: false,
		loopedSlides: null,
		loopPreventsSliding: true,
		// rewind
		rewind: false,
		// Swiping/no swiping
		allowSlidePrev: true,
		allowSlideNext: true,
		swipeHandler: null,
		// '.swipe-handler',
		noSwiping: true,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		// Passive Listeners
		passiveListeners: true,
		maxBackfaceHiddenSlides: 10,
		// NS
		containerModifierClass: "swiper-",
		// NEW
		slideClass: "swiper-slide",
		slideActiveClass: "swiper-slide-active",
		slideVisibleClass: "swiper-slide-visible",
		slideNextClass: "swiper-slide-next",
		slidePrevClass: "swiper-slide-prev",
		wrapperClass: "swiper-wrapper",
		lazyPreloaderClass: "swiper-lazy-preloader",
		lazyPreloadPrevNext: 0,
		// Callbacks
		runCallbacksOnInit: true,
		// Internals
		_emitClasses: false
	};
	function moduleExtendParams(params, allModulesParams) {
		return function extendParams(obj = {}) {
			const moduleParamName = Object.keys(obj)[0];
			const moduleParams = obj[moduleParamName];
			if (typeof moduleParams !== "object" || moduleParams === null) {
				extend$1(allModulesParams, obj);
				return;
			}
			if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
				params[moduleParamName] = {
					auto: true
				};
			}
			if (!(moduleParamName in params && "enabled" in moduleParams)) {
				extend$1(allModulesParams, obj);
				return;
			}
			if (params[moduleParamName] === true) {
				params[moduleParamName] = {
					enabled: true
				};
			}
			if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
				params[moduleParamName].enabled = true;
			}
			if (!params[moduleParamName])
				params[moduleParamName] = {
					enabled: false
				};
			extend$1(allModulesParams, obj);
		};
	}
	const prototypes = {
		eventsEmitter,
		update,
		translate,
		transition,
		slide,
		loop,
		grabCursor,
		events: events$1,
		breakpoints,
		checkOverflow: checkOverflow$1,
		classes
	};
	const extendedDefaults = {};
	let Swiper$1 = class Swiper {
		constructor(...args) {
			let el2;
			let params;
			if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
				params = args[0];
			} else {
				[el2, params] = args;
			}
			if (!params)
				params = {};
			params = extend$1({}, params);
			if (el2 && !params.el)
				params.el = el2;
			const document2 = getDocument();
			if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
				const swipers = [];
				document2.querySelectorAll(params.el).forEach((containerEl) => {
					const newParams = extend$1({}, params, {
						el: containerEl
					});
					swipers.push(new Swiper$1(newParams));
				});
				return swipers;
			}
			const swiper2 = this;
			swiper2.__swiper__ = true;
			swiper2.support = getSupport();
			swiper2.device = getDevice({
				userAgent: params.userAgent
			});
			swiper2.browser = getBrowser();
			swiper2.eventsListeners = {};
			swiper2.eventsAnyListeners = [];
			swiper2.modules = [...swiper2.__modules__];
			if (params.modules && Array.isArray(params.modules)) {
				swiper2.modules.push(...params.modules);
			}
			const allModulesParams = {};
			swiper2.modules.forEach((mod) => {
				mod({
					params,
					swiper: swiper2,
					extendParams: moduleExtendParams(params, allModulesParams),
					on: swiper2.on.bind(swiper2),
					once: swiper2.once.bind(swiper2),
					off: swiper2.off.bind(swiper2),
					emit: swiper2.emit.bind(swiper2)
				});
			});
			const swiperParams = extend$1({}, defaults, allModulesParams);
			swiper2.params = extend$1({}, swiperParams, extendedDefaults, params);
			swiper2.originalParams = extend$1({}, swiper2.params);
			swiper2.passedParams = extend$1({}, params);
			if (swiper2.params && swiper2.params.on) {
				Object.keys(swiper2.params.on).forEach((eventName) => {
					swiper2.on(eventName, swiper2.params.on[eventName]);
				});
			}
			if (swiper2.params && swiper2.params.onAny) {
				swiper2.onAny(swiper2.params.onAny);
			}
			Object.assign(swiper2, {
				enabled: swiper2.params.enabled,
				el: el2,
				// Classes
				classNames: [],
				// Slides
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				// isDirection
				isHorizontal() {
					return swiper2.params.direction === "horizontal";
				},
				isVertical() {
					return swiper2.params.direction === "vertical";
				},
				// Indexes
				activeIndex: 0,
				realIndex: 0,
				//
				isBeginning: true,
				isEnd: false,
				// Props
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: false,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
				},
				// Locks
				allowSlideNext: swiper2.params.allowSlideNext,
				allowSlidePrev: swiper2.params.allowSlidePrev,
				// Touch Events
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					// Form elements to match
					focusableElements: swiper2.params.focusableElements,
					// Last click time
					lastClickTime: 0,
					clickTimeout: void 0,
					// Velocities
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					evCache: []
				},
				// Clicks
				allowClick: true,
				// Touches
				allowTouchMove: swiper2.params.allowTouchMove,
				touches: {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				},
				// Images
				imagesToLoad: [],
				imagesLoaded: 0
			});
			swiper2.emit("_swiper");
			if (swiper2.params.init) {
				swiper2.init();
			}
			return swiper2;
		}
		getSlideIndex(slideEl) {
			const {
				slidesEl,
				params
			} = this;
			const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
			const firstSlideIndex = elementIndex(slides[0]);
			return elementIndex(slideEl) - firstSlideIndex;
		}
		getSlideIndexByData(index) {
			return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
		}
		recalcSlides() {
			const swiper2 = this;
			const {
				slidesEl,
				params
			} = swiper2;
			swiper2.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
		}
		enable() {
			const swiper2 = this;
			if (swiper2.enabled)
				return;
			swiper2.enabled = true;
			if (swiper2.params.grabCursor) {
				swiper2.setGrabCursor();
			}
			swiper2.emit("enable");
		}
		disable() {
			const swiper2 = this;
			if (!swiper2.enabled)
				return;
			swiper2.enabled = false;
			if (swiper2.params.grabCursor) {
				swiper2.unsetGrabCursor();
			}
			swiper2.emit("disable");
		}
		setProgress(progress, speed) {
			const swiper2 = this;
			progress = Math.min(Math.max(progress, 0), 1);
			const min = swiper2.minTranslate();
			const max = swiper2.maxTranslate();
			const current = (max - min) * progress + min;
			swiper2.translateTo(current, typeof speed === "undefined" ? 0 : speed);
			swiper2.updateActiveIndex();
			swiper2.updateSlidesClasses();
		}
		emitContainerClasses() {
			const swiper2 = this;
			if (!swiper2.params._emitClasses || !swiper2.el)
				return;
			const cls = swiper2.el.className.split(" ").filter((className) => {
				return className.indexOf("swiper") === 0 || className.indexOf(swiper2.params.containerModifierClass) === 0;
			});
			swiper2.emit("_containerClasses", cls.join(" "));
		}
		getSlideClasses(slideEl) {
			const swiper2 = this;
			if (swiper2.destroyed)
				return "";
			return slideEl.className.split(" ").filter((className) => {
				return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper2.params.slideClass) === 0;
			}).join(" ");
		}
		emitSlidesClasses() {
			const swiper2 = this;
			if (!swiper2.params._emitClasses || !swiper2.el)
				return;
			const updates = [];
			swiper2.slides.forEach((slideEl) => {
				const classNames = swiper2.getSlideClasses(slideEl);
				updates.push({
					slideEl,
					classNames
				});
				swiper2.emit("_slideClass", slideEl, classNames);
			});
			swiper2.emit("_slideClasses", updates);
		}
		slidesPerViewDynamic(view = "current", exact = false) {
			const swiper2 = this;
			const {
				params,
				slides,
				slidesGrid,
				slidesSizesGrid,
				size: swiperSize,
				activeIndex
			} = swiper2;
			let spv = 1;
			if (params.centeredSlides) {
				let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
				let breakLoop;
				for (let i = activeIndex + 1; i < slides.length; i += 1) {
					if (slides[i] && !breakLoop) {
						slideSize += slides[i].swiperSlideSize;
						spv += 1;
						if (slideSize > swiperSize)
							breakLoop = true;
					}
				}
				for (let i = activeIndex - 1; i >= 0; i -= 1) {
					if (slides[i] && !breakLoop) {
						slideSize += slides[i].swiperSlideSize;
						spv += 1;
						if (slideSize > swiperSize)
							breakLoop = true;
					}
				}
			} else {
				if (view === "current") {
					for (let i = activeIndex + 1; i < slides.length; i += 1) {
						const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
						if (slideInView) {
							spv += 1;
						}
					}
				} else {
					for (let i = activeIndex - 1; i >= 0; i -= 1) {
						const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
						if (slideInView) {
							spv += 1;
						}
					}
				}
			}
			return spv;
		}
		update() {
			const swiper2 = this;
			if (!swiper2 || swiper2.destroyed)
				return;
			const {
				snapGrid,
				params
			} = swiper2;
			if (params.breakpoints) {
				swiper2.setBreakpoint();
			}
			[...swiper2.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
				if (imageEl.complete) {
					processLazyPreloader(swiper2, imageEl);
				}
			});
			swiper2.updateSize();
			swiper2.updateSlides();
			swiper2.updateProgress();
			swiper2.updateSlidesClasses();
			function setTranslate2() {
				const translateValue = swiper2.rtlTranslate ? swiper2.translate * -1 : swiper2.translate;
				const newTranslate = Math.min(Math.max(translateValue, swiper2.maxTranslate()), swiper2.minTranslate());
				swiper2.setTranslate(newTranslate);
				swiper2.updateActiveIndex();
				swiper2.updateSlidesClasses();
			}
			let translated;
			if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
				setTranslate2();
				if (params.autoHeight) {
					swiper2.updateAutoHeight();
				}
			} else {
				if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper2.isEnd && !params.centeredSlides) {
					const slides = swiper2.virtual && params.virtual.enabled ? swiper2.virtual.slides : swiper2.slides;
					translated = swiper2.slideTo(slides.length - 1, 0, false, true);
				} else {
					translated = swiper2.slideTo(swiper2.activeIndex, 0, false, true);
				}
				if (!translated) {
					setTranslate2();
				}
			}
			if (params.watchOverflow && snapGrid !== swiper2.snapGrid) {
				swiper2.checkOverflow();
			}
			swiper2.emit("update");
		}
		changeDirection(newDirection, needUpdate = true) {
			const swiper2 = this;
			const currentDirection = swiper2.params.direction;
			if (!newDirection) {
				newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
			}
			if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
				return swiper2;
			}
			swiper2.el.classList.remove(`${swiper2.params.containerModifierClass}${currentDirection}`);
			swiper2.el.classList.add(`${swiper2.params.containerModifierClass}${newDirection}`);
			swiper2.emitContainerClasses();
			swiper2.params.direction = newDirection;
			swiper2.slides.forEach((slideEl) => {
				if (newDirection === "vertical") {
					slideEl.style.width = "";
				} else {
					slideEl.style.height = "";
				}
			});
			swiper2.emit("changeDirection");
			if (needUpdate)
				swiper2.update();
			return swiper2;
		}
		changeLanguageDirection(direction) {
			const swiper2 = this;
			if (swiper2.rtl && direction === "rtl" || !swiper2.rtl && direction === "ltr")
				return;
			swiper2.rtl = direction === "rtl";
			swiper2.rtlTranslate = swiper2.params.direction === "horizontal" && swiper2.rtl;
			if (swiper2.rtl) {
				swiper2.el.classList.add(`${swiper2.params.containerModifierClass}rtl`);
				swiper2.el.dir = "rtl";
			} else {
				swiper2.el.classList.remove(`${swiper2.params.containerModifierClass}rtl`);
				swiper2.el.dir = "ltr";
			}
			swiper2.update();
		}
		mount(element) {
			const swiper2 = this;
			if (swiper2.mounted)
				return true;
			let el2 = element || swiper2.params.el;
			if (typeof el2 === "string") {
				el2 = document.querySelector(el2);
			}
			if (!el2) {
				return false;
			}
			el2.swiper = swiper2;
			if (el2.shadowEl) {
				swiper2.isElement = true;
			}
			const getWrapperSelector = () => {
				return `.${(swiper2.params.wrapperClass || "").trim().split(" ").join(".")}`;
			};
			const getWrapper = () => {
				if (el2 && el2.shadowRoot && el2.shadowRoot.querySelector) {
					const res = el2.shadowRoot.querySelector(getWrapperSelector());
					return res;
				}
				return elementChildren(el2, getWrapperSelector())[0];
			};
			let wrapperEl = getWrapper();
			if (!wrapperEl && swiper2.params.createElements) {
				wrapperEl = createElement("div", swiper2.params.wrapperClass);
				el2.append(wrapperEl);
				elementChildren(el2, `.${swiper2.params.slideClass}`).forEach((slideEl) => {
					wrapperEl.append(slideEl);
				});
			}
			Object.assign(swiper2, {
				el: el2,
				wrapperEl,
				slidesEl: swiper2.isElement ? el2 : wrapperEl,
				mounted: true,
				// RTL
				rtl: el2.dir.toLowerCase() === "rtl" || elementStyle(el2, "direction") === "rtl",
				rtlTranslate: swiper2.params.direction === "horizontal" && (el2.dir.toLowerCase() === "rtl" || elementStyle(el2, "direction") === "rtl"),
				wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
			});
			return true;
		}
		init(el2) {
			const swiper2 = this;
			if (swiper2.initialized)
				return swiper2;
			const mounted = swiper2.mount(el2);
			if (mounted === false)
				return swiper2;
			swiper2.emit("beforeInit");
			if (swiper2.params.breakpoints) {
				swiper2.setBreakpoint();
			}
			swiper2.addClasses();
			swiper2.updateSize();
			swiper2.updateSlides();
			if (swiper2.params.watchOverflow) {
				swiper2.checkOverflow();
			}
			if (swiper2.params.grabCursor && swiper2.enabled) {
				swiper2.setGrabCursor();
			}
			if (swiper2.params.loop && swiper2.virtual && swiper2.params.virtual.enabled) {
				swiper2.slideTo(swiper2.params.initialSlide + swiper2.virtual.slidesBefore, 0, swiper2.params.runCallbacksOnInit, false, true);
			} else {
				swiper2.slideTo(swiper2.params.initialSlide, 0, swiper2.params.runCallbacksOnInit, false, true);
			}
			if (swiper2.params.loop) {
				swiper2.loopCreate();
			}
			swiper2.attachEvents();
			[...swiper2.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
				if (imageEl.complete) {
					processLazyPreloader(swiper2, imageEl);
				} else {
					imageEl.addEventListener("load", (e2) => {
						processLazyPreloader(swiper2, e2.target);
					});
				}
			});
			preload(swiper2);
			swiper2.initialized = true;
			preload(swiper2);
			swiper2.emit("init");
			swiper2.emit("afterInit");
			return swiper2;
		}
		destroy(deleteInstance = true, cleanStyles = true) {
			const swiper2 = this;
			const {
				params,
				el: el2,
				wrapperEl,
				slides
			} = swiper2;
			if (typeof swiper2.params === "undefined" || swiper2.destroyed) {
				return null;
			}
			swiper2.emit("beforeDestroy");
			swiper2.initialized = false;
			swiper2.detachEvents();
			if (params.loop) {
				swiper2.loopDestroy();
			}
			if (cleanStyles) {
				swiper2.removeClasses();
				el2.removeAttribute("style");
				wrapperEl.removeAttribute("style");
				if (slides && slides.length) {
					slides.forEach((slideEl) => {
						slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
						slideEl.removeAttribute("style");
						slideEl.removeAttribute("data-swiper-slide-index");
					});
				}
			}
			swiper2.emit("destroy");
			Object.keys(swiper2.eventsListeners).forEach((eventName) => {
				swiper2.off(eventName);
			});
			if (deleteInstance !== false) {
				swiper2.el.swiper = null;
				deleteProps(swiper2);
			}
			swiper2.destroyed = true;
			return null;
		}
		static extendDefaults(newDefaults) {
			extend$1(extendedDefaults, newDefaults);
		}
		static get extendedDefaults() {
			return extendedDefaults;
		}
		static get defaults() {
			return defaults;
		}
		static installModule(mod) {
			if (!Swiper$1.prototype.__modules__)
				Swiper$1.prototype.__modules__ = [];
			const modules = Swiper$1.prototype.__modules__;
			if (typeof mod === "function" && modules.indexOf(mod) < 0) {
				modules.push(mod);
			}
		}
		static use(module) {
			if (Array.isArray(module)) {
				module.forEach((m2) => Swiper$1.installModule(m2));
				return Swiper$1;
			}
			Swiper$1.installModule(module);
			return Swiper$1;
		}
	};
	Object.keys(prototypes).forEach((prototypeGroup) => {
		Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
			Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
		});
	});
	Swiper$1.use([Resize, Observer]);
	function Virtual({
		swiper: swiper2,
		extendParams,
		on,
		emit
	}) {
		extendParams({
			virtual: {
				enabled: false,
				slides: [],
				cache: true,
				renderSlide: null,
				renderExternal: null,
				renderExternalUpdate: true,
				addSlidesBefore: 0,
				addSlidesAfter: 0
			}
		});
		let cssModeTimeout;
		const document2 = getDocument();
		swiper2.virtual = {
			cache: {},
			from: void 0,
			to: void 0,
			slides: [],
			offset: 0,
			slidesGrid: []
		};
		const tempDOM = document2.createElement("div");
		function renderSlide(slide2, index) {
			const params = swiper2.params.virtual;
			if (params.cache && swiper2.virtual.cache[index]) {
				return swiper2.virtual.cache[index];
			}
			let slideEl;
			if (params.renderSlide) {
				slideEl = params.renderSlide.call(swiper2, slide2, index);
				if (typeof slideEl === "string") {
					tempDOM.innerHTML = slideEl;
					slideEl = tempDOM.children[0];
				}
			} else if (swiper2.isElement) {
				slideEl = createElement("swiper-slide");
			} else {
				slideEl = createElement("div", swiper2.params.slideClass);
			}
			slideEl.setAttribute("data-swiper-slide-index", index);
			if (!params.renderSlide) {
				slideEl.innerHTML = slide2;
			}
			if (params.cache)
				swiper2.virtual.cache[index] = slideEl;
			return slideEl;
		}
		function update2(force) {
			const {
				slidesPerView,
				slidesPerGroup,
				centeredSlides,
				loop: isLoop
			} = swiper2.params;
			const {
				addSlidesBefore,
				addSlidesAfter
			} = swiper2.params.virtual;
			const {
				from: previousFrom,
				to: previousTo,
				slides,
				slidesGrid: previousSlidesGrid,
				offset: previousOffset
			} = swiper2.virtual;
			if (!swiper2.params.cssMode) {
				swiper2.updateActiveIndex();
			}
			const activeIndex = swiper2.activeIndex || 0;
			let offsetProp;
			if (swiper2.rtlTranslate)
				offsetProp = "right";
			else
				offsetProp = swiper2.isHorizontal() ? "left" : "top";
			let slidesAfter;
			let slidesBefore;
			if (centeredSlides) {
				slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
				slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
			} else {
				slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
				slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
			}
			let from2 = activeIndex - slidesBefore;
			let to = activeIndex + slidesAfter;
			if (!isLoop) {
				from2 = Math.max(from2, 0);
				to = Math.min(to, slides.length - 1);
			}
			let offset = (swiper2.slidesGrid[from2] || 0) - (swiper2.slidesGrid[0] || 0);
			if (isLoop && activeIndex >= slidesBefore) {
				from2 -= slidesBefore;
				if (!centeredSlides)
					offset += swiper2.slidesGrid[0];
			} else if (isLoop && activeIndex < slidesBefore) {
				from2 = -slidesBefore;
				if (centeredSlides)
					offset += swiper2.slidesGrid[0];
			}
			Object.assign(swiper2.virtual, {
				from: from2,
				to,
				offset,
				slidesGrid: swiper2.slidesGrid,
				slidesBefore,
				slidesAfter
			});
			function onRendered() {
				swiper2.updateSlides();
				swiper2.updateProgress();
				swiper2.updateSlidesClasses();
				emit("virtualUpdate");
			}
			if (previousFrom === from2 && previousTo === to && !force) {
				if (swiper2.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
					swiper2.slides.forEach((slideEl) => {
						slideEl.style[offsetProp] = `${offset - Math.abs(swiper2.cssOverflowAdjustment())}px`;
					});
				}
				swiper2.updateProgress();
				emit("virtualUpdate");
				return;
			}
			if (swiper2.params.virtual.renderExternal) {
				swiper2.params.virtual.renderExternal.call(swiper2, {
					offset,
					from: from2,
					to,
					slides: function getSlides() {
						const slidesToRender = [];
						for (let i = from2; i <= to; i += 1) {
							slidesToRender.push(slides[i]);
						}
						return slidesToRender;
					}()
				});
				if (swiper2.params.virtual.renderExternalUpdate) {
					onRendered();
				} else {
					emit("virtualUpdate");
				}
				return;
			}
			const prependIndexes = [];
			const appendIndexes = [];
			const getSlideIndex = (index) => {
				let slideIndex = index;
				if (index < 0) {
					slideIndex = slides.length + index;
				} else if (slideIndex >= slides.length) {
					slideIndex = slideIndex - slides.length;
				}
				return slideIndex;
			};
			if (force) {
				swiper2.slidesEl.querySelectorAll(`.${swiper2.params.slideClass}, swiper-slide`).forEach((slideEl) => {
					slideEl.remove();
				});
			} else {
				for (let i = previousFrom; i <= previousTo; i += 1) {
					if (i < from2 || i > to) {
						const slideIndex = getSlideIndex(i);
						swiper2.slidesEl.querySelectorAll(`.${swiper2.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`).forEach((slideEl) => {
							slideEl.remove();
						});
					}
				}
			}
			const loopFrom = isLoop ? -slides.length : 0;
			const loopTo = isLoop ? slides.length * 2 : slides.length;
			for (let i = loopFrom; i < loopTo; i += 1) {
				if (i >= from2 && i <= to) {
					const slideIndex = getSlideIndex(i);
					if (typeof previousTo === "undefined" || force) {
						appendIndexes.push(slideIndex);
					} else {
						if (i > previousTo)
							appendIndexes.push(slideIndex);
						if (i < previousFrom)
							prependIndexes.push(slideIndex);
					}
				}
			}
			appendIndexes.forEach((index) => {
				swiper2.slidesEl.append(renderSlide(slides[index], index));
			});
			if (isLoop) {
				for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
					const index = prependIndexes[i];
					swiper2.slidesEl.prepend(renderSlide(slides[index], index));
				}
			} else {
				prependIndexes.sort((a, b2) => b2 - a);
				prependIndexes.forEach((index) => {
					swiper2.slidesEl.prepend(renderSlide(slides[index], index));
				});
			}
			elementChildren(swiper2.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
				slideEl.style[offsetProp] = `${offset - Math.abs(swiper2.cssOverflowAdjustment())}px`;
			});
			onRendered();
		}
		function appendSlide(slides) {
			if (typeof slides === "object" && "length" in slides) {
				for (let i = 0; i < slides.length; i += 1) {
					if (slides[i])
						swiper2.virtual.slides.push(slides[i]);
				}
			} else {
				swiper2.virtual.slides.push(slides);
			}
			update2(true);
		}
		function prependSlide(slides) {
			const activeIndex = swiper2.activeIndex;
			let newActiveIndex = activeIndex + 1;
			let numberOfNewSlides = 1;
			if (Array.isArray(slides)) {
				for (let i = 0; i < slides.length; i += 1) {
					if (slides[i])
						swiper2.virtual.slides.unshift(slides[i]);
				}
				newActiveIndex = activeIndex + slides.length;
				numberOfNewSlides = slides.length;
			} else {
				swiper2.virtual.slides.unshift(slides);
			}
			if (swiper2.params.virtual.cache) {
				const cache = swiper2.virtual.cache;
				const newCache = {};
				Object.keys(cache).forEach((cachedIndex) => {
					const cachedEl = cache[cachedIndex];
					const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
					if (cachedElIndex) {
						cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
					}
					newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
				});
				swiper2.virtual.cache = newCache;
			}
			update2(true);
			swiper2.slideTo(newActiveIndex, 0);
		}
		function removeSlide(slidesIndexes) {
			if (typeof slidesIndexes === "undefined" || slidesIndexes === null)
				return;
			let activeIndex = swiper2.activeIndex;
			if (Array.isArray(slidesIndexes)) {
				for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
					swiper2.virtual.slides.splice(slidesIndexes[i], 1);
					if (swiper2.params.virtual.cache) {
						delete swiper2.virtual.cache[slidesIndexes[i]];
					}
					if (slidesIndexes[i] < activeIndex)
						activeIndex -= 1;
					activeIndex = Math.max(activeIndex, 0);
				}
			} else {
				swiper2.virtual.slides.splice(slidesIndexes, 1);
				if (swiper2.params.virtual.cache) {
					delete swiper2.virtual.cache[slidesIndexes];
				}
				if (slidesIndexes < activeIndex)
					activeIndex -= 1;
				activeIndex = Math.max(activeIndex, 0);
			}
			update2(true);
			swiper2.slideTo(activeIndex, 0);
		}
		function removeAllSlides() {
			swiper2.virtual.slides = [];
			if (swiper2.params.virtual.cache) {
				swiper2.virtual.cache = {};
			}
			update2(true);
			swiper2.slideTo(0, 0);
		}
		on("beforeInit", () => {
			if (!swiper2.params.virtual.enabled)
				return;
			let domSlidesAssigned;
			if (typeof swiper2.passedParams.virtual.slides === "undefined") {
				const slides = [...swiper2.slidesEl.children].filter((el2) => el2.matches(`.${swiper2.params.slideClass}, swiper-slide`));
				if (slides && slides.length) {
					swiper2.virtual.slides = [...slides];
					domSlidesAssigned = true;
					slides.forEach((slideEl, slideIndex) => {
						slideEl.setAttribute("data-swiper-slide-index", slideIndex);
						swiper2.virtual.cache[slideIndex] = slideEl;
						slideEl.remove();
					});
				}
			}
			if (!domSlidesAssigned) {
				swiper2.virtual.slides = swiper2.params.virtual.slides;
			}
			swiper2.classNames.push(`${swiper2.params.containerModifierClass}virtual`);
			swiper2.params.watchSlidesProgress = true;
			swiper2.originalParams.watchSlidesProgress = true;
			if (!swiper2.params.initialSlide) {
				update2();
			}
		});
		on("setTranslate", () => {
			if (!swiper2.params.virtual.enabled)
				return;
			if (swiper2.params.cssMode && !swiper2._immediateVirtual) {
				clearTimeout(cssModeTimeout);
				cssModeTimeout = setTimeout(() => {
					update2();
				}, 100);
			} else {
				update2();
			}
		});
		on("init update resize", () => {
			if (!swiper2.params.virtual.enabled)
				return;
			if (swiper2.params.cssMode) {
				setCSSProperty(swiper2.wrapperEl, "--swiper-virtual-size", `${swiper2.virtualSize}px`);
			}
		});
		Object.assign(swiper2.virtual, {
			appendSlide,
			prependSlide,
			removeSlide,
			removeAllSlides,
			update: update2
		});
	}
	function createElementIfNotDefined(swiper2, originalParams, params, checkProps) {
		if (swiper2.params.createElements) {
			Object.keys(checkProps).forEach((key) => {
				if (!params[key] && params.auto === true) {
					let element = elementChildren(swiper2.el, `.${checkProps[key]}`)[0];
					if (!element) {
						element = createElement("div", checkProps[key]);
						element.className = checkProps[key];
						swiper2.el.append(element);
					}
					params[key] = element;
					originalParams[key] = element;
				}
			});
		}
		return params;
	}
	function Navigation({
		swiper: swiper2,
		extendParams,
		on,
		emit
	}) {
		extendParams({
			navigation: {
				nextEl: null,
				prevEl: null,
				hideOnClick: false,
				disabledClass: "swiper-button-disabled",
				hiddenClass: "swiper-button-hidden",
				lockClass: "swiper-button-lock",
				navigationDisabledClass: "swiper-navigation-disabled"
			}
		});
		swiper2.navigation = {
			nextEl: null,
			prevEl: null
		};
		const makeElementsArray = (el2) => {
			if (!Array.isArray(el2))
				el2 = [el2].filter((e2) => !!e2);
			return el2;
		};
		function getEl(el2) {
			let res;
			if (el2 && typeof el2 === "string" && swiper2.isElement) {
				res = swiper2.el.shadowRoot.querySelector(el2);
				if (res)
					return res;
			}
			if (el2) {
				if (typeof el2 === "string")
					res = [...document.querySelectorAll(el2)];
				if (swiper2.params.uniqueNavElements && typeof el2 === "string" && res.length > 1 && swiper2.el.querySelectorAll(el2).length === 1) {
					res = swiper2.el.querySelector(el2);
				}
			}
			if (el2 && !res)
				return el2;
			return res;
		}
		function toggleEl(el2, disabled) {
			const params = swiper2.params.navigation;
			el2 = makeElementsArray(el2);
			el2.forEach((subEl) => {
				if (subEl) {
					subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
					if (subEl.tagName === "BUTTON")
						subEl.disabled = disabled;
					if (swiper2.params.watchOverflow && swiper2.enabled) {
						subEl.classList[swiper2.isLocked ? "add" : "remove"](params.lockClass);
					}
				}
			});
		}
		function update2() {
			const {
				nextEl,
				prevEl
			} = swiper2.navigation;
			if (swiper2.params.loop) {
				toggleEl(prevEl, false);
				toggleEl(nextEl, false);
				return;
			}
			toggleEl(prevEl, swiper2.isBeginning && !swiper2.params.rewind);
			toggleEl(nextEl, swiper2.isEnd && !swiper2.params.rewind);
		}
		function onPrevClick(e2) {
			e2.preventDefault();
			if (swiper2.isBeginning && !swiper2.params.loop && !swiper2.params.rewind)
				return;
			swiper2.slidePrev();
			emit("navigationPrev");
		}
		function onNextClick(e2) {
			e2.preventDefault();
			if (swiper2.isEnd && !swiper2.params.loop && !swiper2.params.rewind)
				return;
			swiper2.slideNext();
			emit("navigationNext");
		}
		function init() {
			const params = swiper2.params.navigation;
			swiper2.params.navigation = createElementIfNotDefined(swiper2, swiper2.originalParams.navigation, swiper2.params.navigation, {
				nextEl: "swiper-button-next",
				prevEl: "swiper-button-prev"
			});
			if (!(params.nextEl || params.prevEl))
				return;
			let nextEl = getEl(params.nextEl);
			let prevEl = getEl(params.prevEl);
			Object.assign(swiper2.navigation, {
				nextEl,
				prevEl
			});
			nextEl = makeElementsArray(nextEl);
			prevEl = makeElementsArray(prevEl);
			const initButton = (el2, dir) => {
				if (el2) {
					el2.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
				}
				if (!swiper2.enabled && el2) {
					el2.classList.add(...params.lockClass.split(" "));
				}
			};
			nextEl.forEach((el2) => initButton(el2, "next"));
			prevEl.forEach((el2) => initButton(el2, "prev"));
		}
		function destroy() {
			let {
				nextEl,
				prevEl
			} = swiper2.navigation;
			nextEl = makeElementsArray(nextEl);
			prevEl = makeElementsArray(prevEl);
			const destroyButton = (el2, dir) => {
				el2.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
				el2.classList.remove(...swiper2.params.navigation.disabledClass.split(" "));
			};
			nextEl.forEach((el2) => destroyButton(el2, "next"));
			prevEl.forEach((el2) => destroyButton(el2, "prev"));
		}
		on("init", () => {
			if (swiper2.params.navigation.enabled === false) {
				disable();
			} else {
				init();
				update2();
			}
		});
		on("toEdge fromEdge lock unlock", () => {
			update2();
		});
		on("destroy", () => {
			destroy();
		});
		on("enable disable", () => {
			let {
				nextEl,
				prevEl
			} = swiper2.navigation;
			nextEl = makeElementsArray(nextEl);
			prevEl = makeElementsArray(prevEl);
			[...nextEl, ...prevEl].filter((el2) => !!el2).forEach((el2) => el2.classList[swiper2.enabled ? "remove" : "add"](swiper2.params.navigation.lockClass));
		});
		on("click", (_s, e2) => {
			let {
				nextEl,
				prevEl
			} = swiper2.navigation;
			nextEl = makeElementsArray(nextEl);
			prevEl = makeElementsArray(prevEl);
			const targetEl = e2.target;
			if (swiper2.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
				if (swiper2.pagination && swiper2.params.pagination && swiper2.params.pagination.clickable && (swiper2.pagination.el === targetEl || swiper2.pagination.el.contains(targetEl)))
					return;
				let isHidden;
				if (nextEl.length) {
					isHidden = nextEl[0].classList.contains(swiper2.params.navigation.hiddenClass);
				} else if (prevEl.length) {
					isHidden = prevEl[0].classList.contains(swiper2.params.navigation.hiddenClass);
				}
				if (isHidden === true) {
					emit("navigationShow");
				} else {
					emit("navigationHide");
				}
				[...nextEl, ...prevEl].filter((el2) => !!el2).forEach((el2) => el2.classList.toggle(swiper2.params.navigation.hiddenClass));
			}
		});
		const enable = () => {
			swiper2.el.classList.remove(...swiper2.params.navigation.navigationDisabledClass.split(" "));
			init();
			update2();
		};
		const disable = () => {
			swiper2.el.classList.add(...swiper2.params.navigation.navigationDisabledClass.split(" "));
			destroy();
		};
		Object.assign(swiper2.navigation, {
			enable,
			disable,
			update: update2,
			init,
			destroy
		});
	}
	function classesToSelector(classes2 = "") {
		return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
	}
	function Pagination({
		swiper: swiper2,
		extendParams,
		on,
		emit
	}) {
		const pfx = "swiper-pagination";
		extendParams({
			pagination: {
				el: null,
				bulletElement: "span",
				clickable: false,
				hideOnClick: false,
				renderBullet: null,
				renderProgressbar: null,
				renderFraction: null,
				renderCustom: null,
				progressbarOpposite: false,
				type: "bullets",
				// 'bullets' or 'progressbar' or 'fraction' or 'custom'
				dynamicBullets: false,
				dynamicMainBullets: 1,
				formatFractionCurrent: (number) => number,
				formatFractionTotal: (number) => number,
				bulletClass: `${pfx}-bullet`,
				bulletActiveClass: `${pfx}-bullet-active`,
				modifierClass: `${pfx}-`,
				currentClass: `${pfx}-current`,
				totalClass: `${pfx}-total`,
				hiddenClass: `${pfx}-hidden`,
				progressbarFillClass: `${pfx}-progressbar-fill`,
				progressbarOppositeClass: `${pfx}-progressbar-opposite`,
				clickableClass: `${pfx}-clickable`,
				lockClass: `${pfx}-lock`,
				horizontalClass: `${pfx}-horizontal`,
				verticalClass: `${pfx}-vertical`,
				paginationDisabledClass: `${pfx}-disabled`
			}
		});
		swiper2.pagination = {
			el: null,
			bullets: []
		};
		let bulletSize;
		let dynamicBulletIndex = 0;
		const makeElementsArray = (el2) => {
			if (!Array.isArray(el2))
				el2 = [el2].filter((e2) => !!e2);
			return el2;
		};
		function isPaginationDisabled() {
			return !swiper2.params.pagination.el || !swiper2.pagination.el || Array.isArray(swiper2.pagination.el) && swiper2.pagination.el.length === 0;
		}
		function setSideBullets(bulletEl, position2) {
			const {
				bulletActiveClass
			} = swiper2.params.pagination;
			if (!bulletEl)
				return;
			bulletEl = bulletEl[`${position2 === "prev" ? "previous" : "next"}ElementSibling`];
			if (bulletEl) {
				bulletEl.classList.add(`${bulletActiveClass}-${position2}`);
				bulletEl = bulletEl[`${position2 === "prev" ? "previous" : "next"}ElementSibling`];
				if (bulletEl) {
					bulletEl.classList.add(`${bulletActiveClass}-${position2}-${position2}`);
				}
			}
		}
		function onBulletClick(e2) {
			const bulletEl = e2.target.closest(classesToSelector(swiper2.params.pagination.bulletClass));
			if (!bulletEl) {
				return;
			}
			e2.preventDefault();
			const index = elementIndex(bulletEl) * swiper2.params.slidesPerGroup;
			if (swiper2.params.loop) {
				if (swiper2.realIndex === index)
					return;
				const newSlideIndex = swiper2.getSlideIndexByData(index);
				const currentSlideIndex = swiper2.getSlideIndexByData(swiper2.realIndex);
				if (newSlideIndex > swiper2.slides.length - swiper2.loopedSlides) {
					swiper2.loopFix({
						direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
						activeSlideIndex: newSlideIndex,
						slideTo: false
					});
				}
				swiper2.slideToLoop(index);
			} else {
				swiper2.slideTo(index);
			}
		}
		function update2() {
			const rtl = swiper2.rtl;
			const params = swiper2.params.pagination;
			if (isPaginationDisabled())
				return;
			let el2 = swiper2.pagination.el;
			el2 = makeElementsArray(el2);
			let current;
			let previousIndex;
			const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
			const total = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
			if (swiper2.params.loop) {
				previousIndex = swiper2.previousRealIndex || 0;
				current = swiper2.params.slidesPerGroup > 1 ? Math.floor(swiper2.realIndex / swiper2.params.slidesPerGroup) : swiper2.realIndex;
			} else if (typeof swiper2.snapIndex !== "undefined") {
				current = swiper2.snapIndex;
				previousIndex = swiper2.previousSnapIndex;
			} else {
				previousIndex = swiper2.previousIndex || 0;
				current = swiper2.activeIndex || 0;
			}
			if (params.type === "bullets" && swiper2.pagination.bullets && swiper2.pagination.bullets.length > 0) {
				const bullets = swiper2.pagination.bullets;
				let firstIndex;
				let lastIndex;
				let midIndex;
				if (params.dynamicBullets) {
					bulletSize = elementOuterSize(bullets[0], swiper2.isHorizontal() ? "width" : "height", true);
					el2.forEach((subEl) => {
						subEl.style[swiper2.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
					});
					if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
						dynamicBulletIndex += current - (previousIndex || 0);
						if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
							dynamicBulletIndex = params.dynamicMainBullets - 1;
						} else if (dynamicBulletIndex < 0) {
							dynamicBulletIndex = 0;
						}
					}
					firstIndex = Math.max(current - dynamicBulletIndex, 0);
					lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
					midIndex = (lastIndex + firstIndex) / 2;
				}
				bullets.forEach((bulletEl) => {
					const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
					bulletEl.classList.remove(...classesToRemove);
				});
				if (el2.length > 1) {
					bullets.forEach((bullet) => {
						const bulletIndex = elementIndex(bullet);
						if (bulletIndex === current) {
							bullet.classList.add(...params.bulletActiveClass.split(" "));
						} else if (swiper2.isElement) {
							bullet.setAttribute("part", "bullet");
						}
						if (params.dynamicBullets) {
							if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
								bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
							}
							if (bulletIndex === firstIndex) {
								setSideBullets(bullet, "prev");
							}
							if (bulletIndex === lastIndex) {
								setSideBullets(bullet, "next");
							}
						}
					});
				} else {
					const bullet = bullets[current];
					if (bullet) {
						bullet.classList.add(...params.bulletActiveClass.split(" "));
					}
					if (swiper2.isElement) {
						bullets.forEach((bulletEl, bulletIndex) => {
							bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
						});
					}
					if (params.dynamicBullets) {
						const firstDisplayedBullet = bullets[firstIndex];
						const lastDisplayedBullet = bullets[lastIndex];
						for (let i = firstIndex; i <= lastIndex; i += 1) {
							if (bullets[i]) {
								bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
							}
						}
						setSideBullets(firstDisplayedBullet, "prev");
						setSideBullets(lastDisplayedBullet, "next");
					}
				}
				if (params.dynamicBullets) {
					const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
					const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
					const offsetProp = rtl ? "right" : "left";
					bullets.forEach((bullet) => {
						bullet.style[swiper2.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
					});
				}
			}
			el2.forEach((subEl, subElIndex) => {
				if (params.type === "fraction") {
					subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
						fractionEl.textContent = params.formatFractionCurrent(current + 1);
					});
					subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
						totalEl.textContent = params.formatFractionTotal(total);
					});
				}
				if (params.type === "progressbar") {
					let progressbarDirection;
					if (params.progressbarOpposite) {
						progressbarDirection = swiper2.isHorizontal() ? "vertical" : "horizontal";
					} else {
						progressbarDirection = swiper2.isHorizontal() ? "horizontal" : "vertical";
					}
					const scale = (current + 1) / total;
					let scaleX = 1;
					let scaleY = 1;
					if (progressbarDirection === "horizontal") {
						scaleX = scale;
					} else {
						scaleY = scale;
					}
					subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
						progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
						progressEl.style.transitionDuration = `${swiper2.params.speed}ms`;
					});
				}
				if (params.type === "custom" && params.renderCustom) {
					subEl.innerHTML = params.renderCustom(swiper2, current + 1, total);
					if (subElIndex === 0)
						emit("paginationRender", subEl);
				} else {
					if (subElIndex === 0)
						emit("paginationRender", subEl);
					emit("paginationUpdate", subEl);
				}
				if (swiper2.params.watchOverflow && swiper2.enabled) {
					subEl.classList[swiper2.isLocked ? "add" : "remove"](params.lockClass);
				}
			});
		}
		function render() {
			const params = swiper2.params.pagination;
			if (isPaginationDisabled())
				return;
			const slidesLength = swiper2.virtual && swiper2.params.virtual.enabled ? swiper2.virtual.slides.length : swiper2.slides.length;
			let el2 = swiper2.pagination.el;
			el2 = makeElementsArray(el2);
			let paginationHTML = "";
			if (params.type === "bullets") {
				let numberOfBullets = swiper2.params.loop ? Math.ceil(slidesLength / swiper2.params.slidesPerGroup) : swiper2.snapGrid.length;
				if (swiper2.params.freeMode && swiper2.params.freeMode.enabled && numberOfBullets > slidesLength) {
					numberOfBullets = slidesLength;
				}
				for (let i = 0; i < numberOfBullets; i += 1) {
					if (params.renderBullet) {
						paginationHTML += params.renderBullet.call(swiper2, i, params.bulletClass);
					} else {
						paginationHTML += `<${params.bulletElement} ${swiper2.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
					}
				}
			}
			if (params.type === "fraction") {
				if (params.renderFraction) {
					paginationHTML = params.renderFraction.call(swiper2, params.currentClass, params.totalClass);
				} else {
					paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
				}
			}
			if (params.type === "progressbar") {
				if (params.renderProgressbar) {
					paginationHTML = params.renderProgressbar.call(swiper2, params.progressbarFillClass);
				} else {
					paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
				}
			}
			swiper2.pagination.bullets = [];
			el2.forEach((subEl) => {
				if (params.type !== "custom") {
					subEl.innerHTML = paginationHTML || "";
				}
				if (params.type === "bullets") {
					swiper2.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
				}
			});
			if (params.type !== "custom") {
				emit("paginationRender", el2[0]);
			}
		}
		function init() {
			swiper2.params.pagination = createElementIfNotDefined(swiper2, swiper2.originalParams.pagination, swiper2.params.pagination, {
				el: "swiper-pagination"
			});
			const params = swiper2.params.pagination;
			if (!params.el)
				return;
			let el2;
			if (typeof params.el === "string" && swiper2.isElement) {
				el2 = swiper2.el.shadowRoot.querySelector(params.el);
			}
			if (!el2 && typeof params.el === "string") {
				el2 = [...document.querySelectorAll(params.el)];
			}
			if (!el2) {
				el2 = params.el;
			}
			if (!el2 || el2.length === 0)
				return;
			if (swiper2.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el2) && el2.length > 1) {
				el2 = [...swiper2.el.querySelectorAll(params.el)];
				if (el2.length > 1) {
					el2 = el2.filter((subEl) => {
						if (elementParents(subEl, ".swiper")[0] !== swiper2.el)
							return false;
						return true;
					})[0];
				}
			}
			if (Array.isArray(el2) && el2.length === 1)
				el2 = el2[0];
			Object.assign(swiper2.pagination, {
				el: el2
			});
			el2 = makeElementsArray(el2);
			el2.forEach((subEl) => {
				if (params.type === "bullets" && params.clickable) {
					subEl.classList.add(params.clickableClass);
				}
				subEl.classList.add(params.modifierClass + params.type);
				subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
				if (params.type === "bullets" && params.dynamicBullets) {
					subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
					dynamicBulletIndex = 0;
					if (params.dynamicMainBullets < 1) {
						params.dynamicMainBullets = 1;
					}
				}
				if (params.type === "progressbar" && params.progressbarOpposite) {
					subEl.classList.add(params.progressbarOppositeClass);
				}
				if (params.clickable) {
					subEl.addEventListener("click", onBulletClick);
				}
				if (!swiper2.enabled) {
					subEl.classList.add(params.lockClass);
				}
			});
		}
		function destroy() {
			const params = swiper2.params.pagination;
			if (isPaginationDisabled())
				return;
			let el2 = swiper2.pagination.el;
			if (el2) {
				el2 = makeElementsArray(el2);
				el2.forEach((subEl) => {
					subEl.classList.remove(params.hiddenClass);
					subEl.classList.remove(params.modifierClass + params.type);
					subEl.classList.remove(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
					if (params.clickable) {
						subEl.removeEventListener("click", onBulletClick);
					}
				});
			}
			if (swiper2.pagination.bullets)
				swiper2.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
		}
		on("changeDirection", () => {
			if (!swiper2.pagination || !swiper2.pagination.el)
				return;
			const params = swiper2.params.pagination;
			let {
				el: el2
			} = swiper2.pagination;
			el2 = makeElementsArray(el2);
			el2.forEach((subEl) => {
				subEl.classList.remove(params.horizontalClass, params.verticalClass);
				subEl.classList.add(swiper2.isHorizontal() ? params.horizontalClass : params.verticalClass);
			});
		});
		on("init", () => {
			if (swiper2.params.pagination.enabled === false) {
				disable();
			} else {
				init();
				render();
				update2();
			}
		});
		on("activeIndexChange", () => {
			if (typeof swiper2.snapIndex === "undefined") {
				update2();
			}
		});
		on("snapIndexChange", () => {
			update2();
		});
		on("snapGridLengthChange", () => {
			render();
			update2();
		});
		on("destroy", () => {
			destroy();
		});
		on("enable disable", () => {
			let {
				el: el2
			} = swiper2.pagination;
			if (el2) {
				el2 = makeElementsArray(el2);
				el2.forEach((subEl) => subEl.classList[swiper2.enabled ? "remove" : "add"](swiper2.params.pagination.lockClass));
			}
		});
		on("lock unlock", () => {
			update2();
		});
		on("click", (_s, e2) => {
			const targetEl = e2.target;
			let {
				el: el2
			} = swiper2.pagination;
			if (!Array.isArray(el2))
				el2 = [el2].filter((element) => !!element);
			if (swiper2.params.pagination.el && swiper2.params.pagination.hideOnClick && el2 && el2.length > 0 && !targetEl.classList.contains(swiper2.params.pagination.bulletClass)) {
				if (swiper2.navigation && (swiper2.navigation.nextEl && targetEl === swiper2.navigation.nextEl || swiper2.navigation.prevEl && targetEl === swiper2.navigation.prevEl))
					return;
				const isHidden = el2[0].classList.contains(swiper2.params.pagination.hiddenClass);
				if (isHidden === true) {
					emit("paginationShow");
				} else {
					emit("paginationHide");
				}
				el2.forEach((subEl) => subEl.classList.toggle(swiper2.params.pagination.hiddenClass));
			}
		});
		const enable = () => {
			swiper2.el.classList.remove(swiper2.params.pagination.paginationDisabledClass);
			let {
				el: el2
			} = swiper2.pagination;
			if (el2) {
				el2 = makeElementsArray(el2);
				el2.forEach((subEl) => subEl.classList.remove(swiper2.params.pagination.paginationDisabledClass));
			}
			init();
			render();
			update2();
		};
		const disable = () => {
			swiper2.el.classList.add(swiper2.params.pagination.paginationDisabledClass);
			let {
				el: el2
			} = swiper2.pagination;
			if (el2) {
				el2 = makeElementsArray(el2);
				el2.forEach((subEl) => subEl.classList.add(swiper2.params.pagination.paginationDisabledClass));
			}
			destroy();
		};
		Object.assign(swiper2.pagination, {
			enable,
			disable,
			render,
			update: update2,
			init,
			destroy
		});
	}
	function isObject(o) {
		return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
	}
	function extend(target, src) {
		const noExtend = ["__proto__", "constructor", "prototype"];
		Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
			if (typeof target[key] === "undefined")
				target[key] = src[key];
			else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
				if (src[key].__swiper__)
					target[key] = src[key];
				else
					extend(target[key], src[key]);
			} else {
				target[key] = src[key];
			}
		});
	}
	function needsNavigation(params = {}) {
		return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
	}
	function needsPagination(params = {}) {
		return params.pagination && typeof params.pagination.el === "undefined";
	}
	function needsScrollbar(params = {}) {
		return params.scrollbar && typeof params.scrollbar.el === "undefined";
	}
	function uniqueClasses(classNames = "") {
		const classes2 = classNames.split(" ").map((c2) => c2.trim()).filter((c2) => !!c2);
		const unique = [];
		classes2.forEach((c2) => {
			if (unique.indexOf(c2) < 0)
				unique.push(c2);
		});
		return unique.join(" ");
	}
	function wrapperClass(className = "") {
		if (!className)
			return "swiper-wrapper";
		if (!className.includes("swiper-wrapper"))
			return `swiper-wrapper ${className}`;
		return className;
	}
	const paramsList = [
		"eventsPrefix",
		"injectStyles",
		"injectStylesUrls",
		"modules",
		"init",
		"_direction",
		"oneWayMovement",
		"touchEventsTarget",
		"initialSlide",
		"_speed",
		"cssMode",
		"updateOnWindowResize",
		"resizeObserver",
		"nested",
		"focusableElements",
		"_enabled",
		"_width",
		"_height",
		"preventInteractionOnTransition",
		"userAgent",
		"url",
		"_edgeSwipeDetection",
		"_edgeSwipeThreshold",
		"_freeMode",
		"_autoHeight",
		"setWrapperSize",
		"virtualTranslate",
		"_effect",
		"breakpoints",
		"_spaceBetween",
		"_slidesPerView",
		"maxBackfaceHiddenSlides",
		"_grid",
		"_slidesPerGroup",
		"_slidesPerGroupSkip",
		"_slidesPerGroupAuto",
		"_centeredSlides",
		"_centeredSlidesBounds",
		"_slidesOffsetBefore",
		"_slidesOffsetAfter",
		"normalizeSlideIndex",
		"_centerInsufficientSlides",
		"_watchOverflow",
		"roundLengths",
		"touchRatio",
		"touchAngle",
		"simulateTouch",
		"_shortSwipes",
		"_longSwipes",
		"longSwipesRatio",
		"longSwipesMs",
		"_followFinger",
		"allowTouchMove",
		"_threshold",
		"touchMoveStopPropagation",
		"touchStartPreventDefault",
		"touchStartForcePreventDefault",
		"touchReleaseOnEdges",
		"uniqueNavElements",
		"_resistance",
		"_resistanceRatio",
		"_watchSlidesProgress",
		"_grabCursor",
		"preventClicks",
		"preventClicksPropagation",
		"_slideToClickedSlide",
		"_loop",
		"loopedSlides",
		"loopPreventsSliding",
		"_rewind",
		"_allowSlidePrev",
		"_allowSlideNext",
		"_swipeHandler",
		"_noSwiping",
		"noSwipingClass",
		"noSwipingSelector",
		"passiveListeners",
		"containerModifierClass",
		"slideClass",
		"slideActiveClass",
		"slideVisibleClass",
		"slideNextClass",
		"slidePrevClass",
		"wrapperClass",
		"lazyPreloaderClass",
		"lazyPreloadPrevNext",
		"runCallbacksOnInit",
		"observer",
		"observeParents",
		"observeSlideChildren",
		// modules
		"a11y",
		"_autoplay",
		"_controller",
		"coverflowEffect",
		"cubeEffect",
		"fadeEffect",
		"flipEffect",
		"creativeEffect",
		"cardsEffect",
		"hashNavigation",
		"history",
		"keyboard",
		"mousewheel",
		"_navigation",
		"_pagination",
		"parallax",
		"_scrollbar",
		"_thumbs",
		"virtual",
		"zoom",
		"control"
	];
	function getParams(obj = {}, splitEvents = true) {
		const params = {
			on: {}
		};
		const events2 = {};
		const passedParams = {};
		extend(params, Swiper$1.defaults);
		extend(params, Swiper$1.extendedDefaults);
		params._emitClasses = true;
		params.init = false;
		const rest = {};
		const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
		const plainObj = Object.assign({}, obj);
		Object.keys(plainObj).forEach((key) => {
			if (typeof obj[key] === "undefined")
				return;
			if (allowedParams.indexOf(key) >= 0) {
				if (isObject(obj[key])) {
					params[key] = {};
					passedParams[key] = {};
					extend(params[key], obj[key]);
					extend(passedParams[key], obj[key]);
				} else {
					params[key] = obj[key];
					passedParams[key] = obj[key];
				}
			} else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
				if (splitEvents) {
					events2[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
				} else {
					params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
				}
			} else {
				rest[key] = obj[key];
			}
		});
		["navigation", "pagination", "scrollbar"].forEach((key) => {
			if (params[key] === true)
				params[key] = {};
			if (params[key] === false)
				delete params[key];
		});
		return {
			params,
			passedParams,
			rest,
			events: events2
		};
	}
	function mountSwiper({
		el: el2,
		nextEl,
		prevEl,
		paginationEl,
		scrollbarEl,
		swiper: swiper2
	}, swiperParams) {
		if (needsNavigation(swiperParams) && nextEl && prevEl) {
			swiper2.params.navigation.nextEl = nextEl;
			swiper2.originalParams.navigation.nextEl = nextEl;
			swiper2.params.navigation.prevEl = prevEl;
			swiper2.originalParams.navigation.prevEl = prevEl;
		}
		if (needsPagination(swiperParams) && paginationEl) {
			swiper2.params.pagination.el = paginationEl;
			swiper2.originalParams.pagination.el = paginationEl;
		}
		if (needsScrollbar(swiperParams) && scrollbarEl) {
			swiper2.params.scrollbar.el = scrollbarEl;
			swiper2.originalParams.scrollbar.el = scrollbarEl;
		}
		swiper2.init(el2);
	}
	function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
		const keys = [];
		if (!oldParams)
			return keys;
		const addKey = (key) => {
			if (keys.indexOf(key) < 0)
				keys.push(key);
		};
		if (children && oldChildren) {
			const oldChildrenKeys = oldChildren.map(getKey);
			const childrenKeys = children.map(getKey);
			if (oldChildrenKeys.join("") !== childrenKeys.join(""))
				addKey("children");
			if (oldChildren.length !== children.length)
				addKey("children");
		}
		const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
		watchParams.forEach((key) => {
			if (key in swiperParams && key in oldParams) {
				if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
					const newKeys = Object.keys(swiperParams[key]);
					const oldKeys = Object.keys(oldParams[key]);
					if (newKeys.length !== oldKeys.length) {
						addKey(key);
					} else {
						newKeys.forEach((newKey) => {
							if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
								addKey(key);
							}
						});
						oldKeys.forEach((oldKey) => {
							if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
								addKey(key);
						});
					}
				} else if (swiperParams[key] !== oldParams[key]) {
					addKey(key);
				}
			}
		});
		return keys;
	}
	function isChildSwiperSlide(child) {
		return child.type && child.type.displayName && child.type.displayName.includes("SwiperSlide");
	}
	function processChildren(c2) {
		const slides = [];
		React.Children.toArray(c2).forEach((child) => {
			if (isChildSwiperSlide(child)) {
				slides.push(child);
			} else if (child.props && child.props.children) {
				processChildren(child.props.children).forEach((slide2) => slides.push(slide2));
			}
		});
		return slides;
	}
	function getChildren(c2) {
		const slides = [];
		const slots = {
			"container-start": [],
			"container-end": [],
			"wrapper-start": [],
			"wrapper-end": []
		};
		React.Children.toArray(c2).forEach((child) => {
			if (isChildSwiperSlide(child)) {
				slides.push(child);
			} else if (child.props && child.props.slot && slots[child.props.slot]) {
				slots[child.props.slot].push(child);
			} else if (child.props && child.props.children) {
				const foundSlides = processChildren(child.props.children);
				if (foundSlides.length > 0) {
					foundSlides.forEach((slide2) => slides.push(slide2));
				} else {
					slots["container-end"].push(child);
				}
			} else {
				slots["container-end"].push(child);
			}
		});
		return {
			slides,
			slots
		};
	}
	function updateSwiper({
		swiper: swiper2,
		slides,
		passedParams,
		changedParams,
		nextEl,
		prevEl,
		scrollbarEl,
		paginationEl
	}) {
		const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
		const {
			params: currentParams,
			pagination,
			navigation,
			scrollbar,
			virtual,
			thumbs
		} = swiper2;
		let needThumbsInit;
		let needControllerInit;
		let needPaginationInit;
		let needScrollbarInit;
		let needNavigationInit;
		let loopNeedDestroy;
		let loopNeedEnable;
		let loopNeedReloop;
		if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
			needThumbsInit = true;
		}
		if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
			needControllerInit = true;
		}
		if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
			needPaginationInit = true;
		}
		if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
			needScrollbarInit = true;
		}
		if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
			needNavigationInit = true;
		}
		const destroyModule = (mod) => {
			if (!swiper2[mod])
				return;
			swiper2[mod].destroy();
			if (mod === "navigation") {
				if (swiper2.isElement) {
					swiper2[mod].prevEl.remove();
					swiper2[mod].nextEl.remove();
				}
				currentParams[mod].prevEl = void 0;
				currentParams[mod].nextEl = void 0;
				swiper2[mod].prevEl = void 0;
				swiper2[mod].nextEl = void 0;
			} else {
				if (swiper2.isElement) {
					swiper2[mod].el.remove();
				}
				currentParams[mod].el = void 0;
				swiper2[mod].el = void 0;
			}
		};
		if (changedParams.includes("loop") && swiper2.isElement) {
			if (currentParams.loop && !passedParams.loop) {
				loopNeedDestroy = true;
			} else if (!currentParams.loop && passedParams.loop) {
				loopNeedEnable = true;
			} else {
				loopNeedReloop = true;
			}
		}
		updateParams.forEach((key) => {
			if (isObject(currentParams[key]) && isObject(passedParams[key])) {
				extend(currentParams[key], passedParams[key]);
				if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
					destroyModule(key);
				}
			} else {
				const newValue = passedParams[key];
				if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
					if (newValue === false) {
						destroyModule(key);
					}
				} else {
					currentParams[key] = passedParams[key];
				}
			}
		});
		if (updateParams.includes("controller") && !needControllerInit && swiper2.controller && swiper2.controller.control && currentParams.controller && currentParams.controller.control) {
			swiper2.controller.control = currentParams.controller.control;
		}
		if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
			virtual.slides = slides;
			virtual.update(true);
		}
		if (changedParams.includes("children") && slides && currentParams.loop) {
			loopNeedReloop = true;
		}
		if (needThumbsInit) {
			const initialized = thumbs.init();
			if (initialized)
				thumbs.update(true);
		}
		if (needControllerInit) {
			swiper2.controller.control = currentParams.controller.control;
		}
		if (needPaginationInit) {
			if (swiper2.isElement && (!paginationEl || typeof paginationEl === "string")) {
				paginationEl = document.createElement("div");
				paginationEl.classList.add("swiper-pagination");
				swiper2.el.shadowEl.appendChild(paginationEl);
			}
			if (paginationEl)
				currentParams.pagination.el = paginationEl;
			pagination.init();
			pagination.render();
			pagination.update();
		}
		if (needScrollbarInit) {
			if (swiper2.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
				scrollbarEl = document.createElement("div");
				scrollbarEl.classList.add("swiper-scrollbar");
				swiper2.el.shadowEl.appendChild(scrollbarEl);
			}
			if (scrollbarEl)
				currentParams.scrollbar.el = scrollbarEl;
			scrollbar.init();
			scrollbar.updateSize();
			scrollbar.setTranslate();
		}
		if (needNavigationInit) {
			if (swiper2.isElement) {
				if (!nextEl || typeof nextEl === "string") {
					nextEl = document.createElement("div");
					nextEl.classList.add("swiper-button-next");
					swiper2.el.shadowEl.appendChild(nextEl);
				}
				if (!prevEl || typeof prevEl === "string") {
					prevEl = document.createElement("div");
					prevEl.classList.add("swiper-button-prev");
					swiper2.el.shadowEl.appendChild(prevEl);
				}
			}
			if (nextEl)
				currentParams.navigation.nextEl = nextEl;
			if (prevEl)
				currentParams.navigation.prevEl = prevEl;
			navigation.init();
			navigation.update();
		}
		if (changedParams.includes("allowSlideNext")) {
			swiper2.allowSlideNext = passedParams.allowSlideNext;
		}
		if (changedParams.includes("allowSlidePrev")) {
			swiper2.allowSlidePrev = passedParams.allowSlidePrev;
		}
		if (changedParams.includes("direction")) {
			swiper2.changeDirection(passedParams.direction, false);
		}
		if (loopNeedDestroy || loopNeedReloop) {
			swiper2.loopDestroy();
		}
		if (loopNeedEnable || loopNeedReloop) {
			swiper2.loopCreate();
		}
		swiper2.update();
	}
	function renderVirtual(swiper2, slides, virtualData) {
		if (!virtualData)
			return null;
		const getSlideIndex = (index) => {
			let slideIndex = index;
			if (index < 0) {
				slideIndex = slides.length + index;
			} else if (slideIndex >= slides.length) {
				slideIndex = slideIndex - slides.length;
			}
			return slideIndex;
		};
		const style = swiper2.isHorizontal() ? {
			[swiper2.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
		} : {
			top: `${virtualData.offset}px`
		};
		const {
			from: from2,
			to
		} = virtualData;
		const loopFrom = swiper2.params.loop ? -slides.length : 0;
		const loopTo = swiper2.params.loop ? slides.length * 2 : slides.length;
		const slidesToRender = [];
		for (let i = loopFrom; i < loopTo; i += 1) {
			if (i >= from2 && i <= to) {
				slidesToRender.push(slides[getSlideIndex(i)]);
			}
		}
		return slidesToRender.map((child, index) => {
			return /* @__PURE__ */ React.cloneElement(child, {
				swiper: swiper2,
				style,
				key: `slide-${index}`
			});
		});
	}
	const updateOnVirtualData = (swiper2) => {
		if (!swiper2 || swiper2.destroyed || !swiper2.params.virtual || swiper2.params.virtual && !swiper2.params.virtual.enabled)
			return;
		swiper2.updateSlides();
		swiper2.updateProgress();
		swiper2.updateSlidesClasses();
		if (swiper2.parallax && swiper2.params.parallax && swiper2.params.parallax.enabled) {
			swiper2.parallax.setTranslate();
		}
	};
	function useIsomorphicLayoutEffect(callback, deps) {
		if (typeof window === "undefined")
			return reactExports.useEffect(callback, deps);
		return reactExports.useLayoutEffect(callback, deps);
	}
	const SwiperSlideContext = /* @__PURE__ */ reactExports.createContext(null);
	const SwiperContext = /* @__PURE__ */ reactExports.createContext(null);
	function _extends$1() {
		_extends$1 = Object.assign ? Object.assign.bind() : function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		};
		return _extends$1.apply(this, arguments);
	}
	const Swiper2 = /* @__PURE__ */ reactExports.forwardRef(function(_temp, externalElRef) {
		let {
			className,
			tag: Tag = "div",
			wrapperTag: WrapperTag = "div",
			children,
			onSwiper,
			...rest
		} = _temp === void 0 ? {} : _temp;
		let eventsAssigned = false;
		const [containerClasses, setContainerClasses] = reactExports.useState("swiper");
		const [virtualData, setVirtualData] = reactExports.useState(null);
		const [breakpointChanged, setBreakpointChanged] = reactExports.useState(false);
		const initializedRef = reactExports.useRef(false);
		const swiperElRef = reactExports.useRef(null);
		const swiperRef = reactExports.useRef(null);
		const oldPassedParamsRef = reactExports.useRef(null);
		const oldSlides = reactExports.useRef(null);
		const nextElRef = reactExports.useRef(null);
		const prevElRef = reactExports.useRef(null);
		const paginationElRef = reactExports.useRef(null);
		const scrollbarElRef = reactExports.useRef(null);
		const {
			params: swiperParams,
			passedParams,
			rest: restProps,
			events: events2
		} = getParams(rest);
		const {
			slides,
			slots
		} = getChildren(children);
		const onBeforeBreakpoint = () => {
			setBreakpointChanged(!breakpointChanged);
		};
		Object.assign(swiperParams.on, {
			_containerClasses(swiper2, classes2) {
				setContainerClasses(classes2);
			}
		});
		const initSwiper = () => {
			Object.assign(swiperParams.on, events2);
			eventsAssigned = true;
			const passParams = {
				...swiperParams
			};
			delete passParams.wrapperClass;
			swiperRef.current = new Swiper$1(passParams);
			if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
				swiperRef.current.virtual.slides = slides;
				const extendWith = {
					cache: false,
					slides,
					renderExternal: setVirtualData,
					renderExternalUpdate: false
				};
				extend(swiperRef.current.params.virtual, extendWith);
				extend(swiperRef.current.originalParams.virtual, extendWith);
			}
		};
		if (!swiperElRef.current) {
			initSwiper();
		}
		if (swiperRef.current) {
			swiperRef.current.on("_beforeBreakpoint", onBeforeBreakpoint);
		}
		const attachEvents2 = () => {
			if (eventsAssigned || !events2 || !swiperRef.current)
				return;
			Object.keys(events2).forEach((eventName) => {
				swiperRef.current.on(eventName, events2[eventName]);
			});
		};
		const detachEvents2 = () => {
			if (!events2 || !swiperRef.current)
				return;
			Object.keys(events2).forEach((eventName) => {
				swiperRef.current.off(eventName, events2[eventName]);
			});
		};
		reactExports.useEffect(() => {
			return () => {
				if (swiperRef.current)
					swiperRef.current.off("_beforeBreakpoint", onBeforeBreakpoint);
			};
		});
		reactExports.useEffect(() => {
			if (!initializedRef.current && swiperRef.current) {
				swiperRef.current.emitSlidesClasses();
				initializedRef.current = true;
			}
		});
		useIsomorphicLayoutEffect(() => {
			if (externalElRef) {
				externalElRef.current = swiperElRef.current;
			}
			if (!swiperElRef.current)
				return;
			if (swiperRef.current.destroyed) {
				initSwiper();
			}
			mountSwiper({
				el: swiperElRef.current,
				nextEl: nextElRef.current,
				prevEl: prevElRef.current,
				paginationEl: paginationElRef.current,
				scrollbarEl: scrollbarElRef.current,
				swiper: swiperRef.current
			}, swiperParams);
			if (onSwiper)
				onSwiper(swiperRef.current);
			return () => {
				if (swiperRef.current && !swiperRef.current.destroyed) {
					swiperRef.current.destroy(true, false);
				}
			};
		}, []);
		useIsomorphicLayoutEffect(() => {
			attachEvents2();
			const changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, (c2) => c2.key);
			oldPassedParamsRef.current = passedParams;
			oldSlides.current = slides;
			if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
				updateSwiper({
					swiper: swiperRef.current,
					slides,
					passedParams,
					changedParams,
					nextEl: nextElRef.current,
					prevEl: prevElRef.current,
					scrollbarEl: scrollbarElRef.current,
					paginationEl: paginationElRef.current
				});
			}
			return () => {
				detachEvents2();
			};
		});
		useIsomorphicLayoutEffect(() => {
			updateOnVirtualData(swiperRef.current);
		}, [virtualData]);
		function renderSlides() {
			if (swiperParams.virtual) {
				return renderVirtual(swiperRef.current, slides, virtualData);
			}
			return slides.map((child, index) => {
				return /* @__PURE__ */ React.cloneElement(child, {
					swiper: swiperRef.current,
					swiperSlideIndex: index
				});
			});
		}
		return /* @__PURE__ */ React.createElement(Tag, _extends$1({
			ref: swiperElRef,
			className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`)
		}, restProps), /* @__PURE__ */ React.createElement(SwiperContext.Provider, {
			value: swiperRef.current
		}, slots["container-start"], /* @__PURE__ */ React.createElement(WrapperTag, {
			className: wrapperClass(swiperParams.wrapperClass)
		}, slots["wrapper-start"], renderSlides(), slots["wrapper-end"]), needsNavigation(swiperParams) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
			ref: prevElRef,
			className: "swiper-button-prev"
		}), /* @__PURE__ */ React.createElement("div", {
			ref: nextElRef,
			className: "swiper-button-next"
		})), needsScrollbar(swiperParams) && /* @__PURE__ */ React.createElement("div", {
			ref: scrollbarElRef,
			className: "swiper-scrollbar"
		}), needsPagination(swiperParams) && /* @__PURE__ */ React.createElement("div", {
			ref: paginationElRef,
			className: "swiper-pagination"
		}), slots["container-end"]));
	});
	Swiper2.displayName = "Swiper";
	function _extends() {
		_extends = Object.assign ? Object.assign.bind() : function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		};
		return _extends.apply(this, arguments);
	}
	const SwiperSlide = /* @__PURE__ */ reactExports.forwardRef(function(_temp, externalRef) {
		let {
			tag: Tag = "div",
			children,
			className = "",
			swiper: swiper2,
			zoom,
			lazy,
			virtualIndex,
			swiperSlideIndex,
			...rest
		} = _temp === void 0 ? {} : _temp;
		const slideElRef = reactExports.useRef(null);
		const [slideClasses, setSlideClasses] = reactExports.useState("swiper-slide");
		const [lazyLoaded, setLazyLoaded] = reactExports.useState(false);
		function updateClasses(_s, el2, classNames) {
			if (el2 === slideElRef.current) {
				setSlideClasses(classNames);
			}
		}
		useIsomorphicLayoutEffect(() => {
			if (typeof swiperSlideIndex !== "undefined") {
				slideElRef.current.swiperSlideIndex = swiperSlideIndex;
			}
			if (externalRef) {
				externalRef.current = slideElRef.current;
			}
			if (!slideElRef.current || !swiper2) {
				return;
			}
			if (swiper2.destroyed) {
				if (slideClasses !== "swiper-slide") {
					setSlideClasses("swiper-slide");
				}
				return;
			}
			swiper2.on("_slideClass", updateClasses);
			return () => {
				if (!swiper2)
					return;
				swiper2.off("_slideClass", updateClasses);
			};
		});
		useIsomorphicLayoutEffect(() => {
			if (swiper2 && slideElRef.current && !swiper2.destroyed) {
				setSlideClasses(swiper2.getSlideClasses(slideElRef.current));
			}
		}, [swiper2]);
		const slideData = {
			isActive: slideClasses.indexOf("swiper-slide-active") >= 0,
			isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
			isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0,
			isNext: slideClasses.indexOf("swiper-slide-next") >= 0
		};
		const renderChildren = () => {
			return typeof children === "function" ? children(slideData) : children;
		};
		const onLoad2 = () => {
			setLazyLoaded(true);
		};
		return /* @__PURE__ */ React.createElement(Tag, _extends({
			ref: slideElRef,
			className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`),
			"data-swiper-slide-index": virtualIndex,
			onLoad: onLoad2
		}, rest), zoom && /* @__PURE__ */ React.createElement(SwiperSlideContext.Provider, {
			value: slideData
		}, /* @__PURE__ */ React.createElement("div", {
			className: "swiper-zoom-container",
			"data-swiper-zoom": typeof zoom === "number" ? zoom : void 0
		}, renderChildren(), lazy && !lazyLoaded && /* @__PURE__ */ React.createElement("div", {
			className: "swiper-lazy-preloader"
		}))), !zoom && /* @__PURE__ */ React.createElement(SwiperSlideContext.Provider, {
			value: slideData
		}, renderChildren(), lazy && !lazyLoaded && /* @__PURE__ */ React.createElement("div", {
			className: "swiper-lazy-preloader"
		})));
	});
	SwiperSlide.displayName = "SwiperSlide";
	const getPhotoReviews = async ({
		queryKey
	}) => {
		const PROD_IDX = queryKey[1].prodCode;
		const result = await fetch(`/ajax/shop/get_photo_review_list.cm?prod_idx=${PROD_IDX}`).then((res) => res.json()).catch((err) => console.error(err));
		return result;
	};
	function _setPrototypeOf(o, p2) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
			o2.__proto__ = p3;
			return o2;
		};
		return _setPrototypeOf(o, p2);
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	var Subscribable = /* @__PURE__ */ function() {
		function Subscribable2() {
			this.listeners = [];
		}
		var _proto = Subscribable2.prototype;
		_proto.subscribe = function subscribe(listener) {
			var _this = this;
			var callback = listener || function() {
				return void 0;
			};
			this.listeners.push(callback);
			this.onSubscribe();
			return function() {
				_this.listeners = _this.listeners.filter(function(x2) {
					return x2 !== callback;
				});
				_this.onUnsubscribe();
			};
		};
		_proto.hasListeners = function hasListeners() {
			return this.listeners.length > 0;
		};
		_proto.onSubscribe = function onSubscribe() {
		};
		_proto.onUnsubscribe = function onUnsubscribe() {
		};
		return Subscribable2;
	}();
	var isServer = typeof window === "undefined";
	function noop() {
		return void 0;
	}
	function functionalUpdate(updater, input) {
		return typeof updater === "function" ? updater(input) : updater;
	}
	function isValidTimeout(value) {
		return typeof value === "number" && value >= 0 && value !== Infinity;
	}
	function ensureQueryKeyArray(value) {
		return Array.isArray(value) ? value : [value];
	}
	function timeUntilStale(updatedAt, staleTime) {
		return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
	}
	function parseQueryArgs(arg1, arg2, arg3) {
		if (!isQueryKey(arg1)) {
			return arg1;
		}
		if (typeof arg2 === "function") {
			return _extends$2({}, arg3, {
				queryKey: arg1,
				queryFn: arg2
			});
		}
		return _extends$2({}, arg2, {
			queryKey: arg1
		});
	}
	function parseFilterArgs(arg1, arg2, arg3) {
		return isQueryKey(arg1) ? [_extends$2({}, arg2, {
			queryKey: arg1
		}), arg3] : [arg1 || {}, arg2];
	}
	function mapQueryStatusFilter(active, inactive) {
		if (active === true && inactive === true || active == null && inactive == null) {
			return "all";
		} else if (active === false && inactive === false) {
			return "none";
		} else {
			var isActive = active != null ? active : !inactive;
			return isActive ? "active" : "inactive";
		}
	}
	function matchQuery(filters, query) {
		var active = filters.active, exact = filters.exact, fetching = filters.fetching, inactive = filters.inactive, predicate = filters.predicate, queryKey = filters.queryKey, stale = filters.stale;
		if (isQueryKey(queryKey)) {
			if (exact) {
				if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
					return false;
				}
			} else if (!partialMatchKey(query.queryKey, queryKey)) {
				return false;
			}
		}
		var queryStatusFilter = mapQueryStatusFilter(active, inactive);
		if (queryStatusFilter === "none") {
			return false;
		} else if (queryStatusFilter !== "all") {
			var isActive = query.isActive();
			if (queryStatusFilter === "active" && !isActive) {
				return false;
			}
			if (queryStatusFilter === "inactive" && isActive) {
				return false;
			}
		}
		if (typeof stale === "boolean" && query.isStale() !== stale) {
			return false;
		}
		if (typeof fetching === "boolean" && query.isFetching() !== fetching) {
			return false;
		}
		if (predicate && !predicate(query)) {
			return false;
		}
		return true;
	}
	function matchMutation(filters, mutation) {
		var exact = filters.exact, fetching = filters.fetching, predicate = filters.predicate, mutationKey = filters.mutationKey;
		if (isQueryKey(mutationKey)) {
			if (!mutation.options.mutationKey) {
				return false;
			}
			if (exact) {
				if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
					return false;
				}
			} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
				return false;
			}
		}
		if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
			return false;
		}
		if (predicate && !predicate(mutation)) {
			return false;
		}
		return true;
	}
	function hashQueryKeyByOptions(queryKey, options) {
		var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
		return hashFn(queryKey);
	}
	function hashQueryKey(queryKey) {
		var asArray = ensureQueryKeyArray(queryKey);
		return stableValueHash(asArray);
	}
	function stableValueHash(value) {
		return JSON.stringify(value, function(_, val) {
			return isPlainObject(val) ? Object.keys(val).sort().reduce(function(result, key) {
				result[key] = val[key];
				return result;
			}, {}) : val;
		});
	}
	function partialMatchKey(a, b2) {
		return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b2));
	}
	function partialDeepEqual(a, b2) {
		if (a === b2) {
			return true;
		}
		if (typeof a !== typeof b2) {
			return false;
		}
		if (a && b2 && typeof a === "object" && typeof b2 === "object") {
			return !Object.keys(b2).some(function(key) {
				return !partialDeepEqual(a[key], b2[key]);
			});
		}
		return false;
	}
	function replaceEqualDeep(a, b2) {
		if (a === b2) {
			return a;
		}
		var array = Array.isArray(a) && Array.isArray(b2);
		if (array || isPlainObject(a) && isPlainObject(b2)) {
			var aSize = array ? a.length : Object.keys(a).length;
			var bItems = array ? b2 : Object.keys(b2);
			var bSize = bItems.length;
			var copy2 = array ? [] : {};
			var equalItems = 0;
			for (var i = 0; i < bSize; i++) {
				var key = array ? i : bItems[i];
				copy2[key] = replaceEqualDeep(a[key], b2[key]);
				if (copy2[key] === a[key]) {
					equalItems++;
				}
			}
			return aSize === bSize && equalItems === aSize ? a : copy2;
		}
		return b2;
	}
	function shallowEqualObjects(a, b2) {
		if (a && !b2 || b2 && !a) {
			return false;
		}
		for (var key in a) {
			if (a[key] !== b2[key]) {
				return false;
			}
		}
		return true;
	}
	function isPlainObject(o) {
		if (!hasObjectPrototype(o)) {
			return false;
		}
		var ctor = o.constructor;
		if (typeof ctor === "undefined") {
			return true;
		}
		var prot = ctor.prototype;
		if (!hasObjectPrototype(prot)) {
			return false;
		}
		if (!prot.hasOwnProperty("isPrototypeOf")) {
			return false;
		}
		return true;
	}
	function hasObjectPrototype(o) {
		return Object.prototype.toString.call(o) === "[object Object]";
	}
	function isQueryKey(value) {
		return typeof value === "string" || Array.isArray(value);
	}
	function sleep(timeout) {
		return new Promise(function(resolve) {
			setTimeout(resolve, timeout);
		});
	}
	function scheduleMicrotask(callback) {
		Promise.resolve().then(callback).catch(function(error) {
			return setTimeout(function() {
				throw error;
			});
		});
	}
	function getAbortController() {
		if (typeof AbortController === "function") {
			return new AbortController();
		}
	}
	var FocusManager = /* @__PURE__ */ function(_Subscribable) {
		_inheritsLoose(FocusManager2, _Subscribable);
		function FocusManager2() {
			var _this;
			_this = _Subscribable.call(this) || this;
			_this.setup = function(onFocus) {
				var _window;
				if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
					var listener = function listener2() {
						return onFocus();
					};
					window.addEventListener("visibilitychange", listener, false);
					window.addEventListener("focus", listener, false);
					return function() {
						window.removeEventListener("visibilitychange", listener);
						window.removeEventListener("focus", listener);
					};
				}
			};
			return _this;
		}
		var _proto = FocusManager2.prototype;
		_proto.onSubscribe = function onSubscribe() {
			if (!this.cleanup) {
				this.setEventListener(this.setup);
			}
		};
		_proto.onUnsubscribe = function onUnsubscribe() {
			if (!this.hasListeners()) {
				var _this$cleanup;
				(_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
				this.cleanup = void 0;
			}
		};
		_proto.setEventListener = function setEventListener(setup) {
			var _this$cleanup2, _this2 = this;
			this.setup = setup;
			(_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
			this.cleanup = setup(function(focused) {
				if (typeof focused === "boolean") {
					_this2.setFocused(focused);
				} else {
					_this2.onFocus();
				}
			});
		};
		_proto.setFocused = function setFocused(focused) {
			this.focused = focused;
			if (focused) {
				this.onFocus();
			}
		};
		_proto.onFocus = function onFocus() {
			this.listeners.forEach(function(listener) {
				listener();
			});
		};
		_proto.isFocused = function isFocused() {
			if (typeof this.focused === "boolean") {
				return this.focused;
			}
			if (typeof document === "undefined") {
				return true;
			}
			return [void 0, "visible", "prerender"].includes(document.visibilityState);
		};
		return FocusManager2;
	}(Subscribable);
	var focusManager = new FocusManager();
	var OnlineManager = /* @__PURE__ */ function(_Subscribable) {
		_inheritsLoose(OnlineManager2, _Subscribable);
		function OnlineManager2() {
			var _this;
			_this = _Subscribable.call(this) || this;
			_this.setup = function(onOnline) {
				var _window;
				if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
					var listener = function listener2() {
						return onOnline();
					};
					window.addEventListener("online", listener, false);
					window.addEventListener("offline", listener, false);
					return function() {
						window.removeEventListener("online", listener);
						window.removeEventListener("offline", listener);
					};
				}
			};
			return _this;
		}
		var _proto = OnlineManager2.prototype;
		_proto.onSubscribe = function onSubscribe() {
			if (!this.cleanup) {
				this.setEventListener(this.setup);
			}
		};
		_proto.onUnsubscribe = function onUnsubscribe() {
			if (!this.hasListeners()) {
				var _this$cleanup;
				(_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
				this.cleanup = void 0;
			}
		};
		_proto.setEventListener = function setEventListener(setup) {
			var _this$cleanup2, _this2 = this;
			this.setup = setup;
			(_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
			this.cleanup = setup(function(online) {
				if (typeof online === "boolean") {
					_this2.setOnline(online);
				} else {
					_this2.onOnline();
				}
			});
		};
		_proto.setOnline = function setOnline(online) {
			this.online = online;
			if (online) {
				this.onOnline();
			}
		};
		_proto.onOnline = function onOnline() {
			this.listeners.forEach(function(listener) {
				listener();
			});
		};
		_proto.isOnline = function isOnline() {
			if (typeof this.online === "boolean") {
				return this.online;
			}
			if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
				return true;
			}
			return navigator.onLine;
		};
		return OnlineManager2;
	}(Subscribable);
	var onlineManager = new OnlineManager();
	function defaultRetryDelay(failureCount) {
		return Math.min(1e3 * Math.pow(2, failureCount), 3e4);
	}
	function isCancelable(value) {
		return typeof (value == null ? void 0 : value.cancel) === "function";
	}
	var CancelledError = function CancelledError2(options) {
		this.revert = options == null ? void 0 : options.revert;
		this.silent = options == null ? void 0 : options.silent;
	};
	function isCancelledError(value) {
		return value instanceof CancelledError;
	}
	var Retryer = function Retryer2(config) {
		var _this = this;
		var cancelRetry = false;
		var cancelFn;
		var continueFn;
		var promiseResolve;
		var promiseReject;
		this.abort = config.abort;
		this.cancel = function(cancelOptions) {
			return cancelFn == null ? void 0 : cancelFn(cancelOptions);
		};
		this.cancelRetry = function() {
			cancelRetry = true;
		};
		this.continueRetry = function() {
			cancelRetry = false;
		};
		this.continue = function() {
			return continueFn == null ? void 0 : continueFn();
		};
		this.failureCount = 0;
		this.isPaused = false;
		this.isResolved = false;
		this.isTransportCancelable = false;
		this.promise = new Promise(function(outerResolve, outerReject) {
			promiseResolve = outerResolve;
			promiseReject = outerReject;
		});
		var resolve = function resolve2(value) {
			if (!_this.isResolved) {
				_this.isResolved = true;
				config.onSuccess == null ? void 0 : config.onSuccess(value);
				continueFn == null ? void 0 : continueFn();
				promiseResolve(value);
			}
		};
		var reject = function reject2(value) {
			if (!_this.isResolved) {
				_this.isResolved = true;
				config.onError == null ? void 0 : config.onError(value);
				continueFn == null ? void 0 : continueFn();
				promiseReject(value);
			}
		};
		var pause = function pause2() {
			return new Promise(function(continueResolve) {
				continueFn = continueResolve;
				_this.isPaused = true;
				config.onPause == null ? void 0 : config.onPause();
			}).then(function() {
				continueFn = void 0;
				_this.isPaused = false;
				config.onContinue == null ? void 0 : config.onContinue();
			});
		};
		var run = function run2() {
			if (_this.isResolved) {
				return;
			}
			var promiseOrValue;
			try {
				promiseOrValue = config.fn();
			} catch (error) {
				promiseOrValue = Promise.reject(error);
			}
			cancelFn = function cancelFn2(cancelOptions) {
				if (!_this.isResolved) {
					reject(new CancelledError(cancelOptions));
					_this.abort == null ? void 0 : _this.abort();
					if (isCancelable(promiseOrValue)) {
						try {
							promiseOrValue.cancel();
						} catch (_unused) {
						}
					}
				}
			};
			_this.isTransportCancelable = isCancelable(promiseOrValue);
			Promise.resolve(promiseOrValue).then(resolve).catch(function(error) {
				var _config$retry, _config$retryDelay;
				if (_this.isResolved) {
					return;
				}
				var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
				var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
				var delay = typeof retryDelay === "function" ? retryDelay(_this.failureCount, error) : retryDelay;
				var shouldRetry = retry === true || typeof retry === "number" && _this.failureCount < retry || typeof retry === "function" && retry(_this.failureCount, error);
				if (cancelRetry || !shouldRetry) {
					reject(error);
					return;
				}
				_this.failureCount++;
				config.onFail == null ? void 0 : config.onFail(_this.failureCount, error);
				sleep(delay).then(function() {
					if (!focusManager.isFocused() || !onlineManager.isOnline()) {
						return pause();
					}
				}).then(function() {
					if (cancelRetry) {
						reject(error);
					} else {
						run2();
					}
				});
			});
		};
		run();
	};
	var NotifyManager = /* @__PURE__ */ function() {
		function NotifyManager2() {
			this.queue = [];
			this.transactions = 0;
			this.notifyFn = function(callback) {
				callback();
			};
			this.batchNotifyFn = function(callback) {
				callback();
			};
		}
		var _proto = NotifyManager2.prototype;
		_proto.batch = function batch(callback) {
			var result;
			this.transactions++;
			try {
				result = callback();
			} finally {
				this.transactions--;
				if (!this.transactions) {
					this.flush();
				}
			}
			return result;
		};
		_proto.schedule = function schedule(callback) {
			var _this = this;
			if (this.transactions) {
				this.queue.push(callback);
			} else {
				scheduleMicrotask(function() {
					_this.notifyFn(callback);
				});
			}
		};
		_proto.batchCalls = function batchCalls(callback) {
			var _this2 = this;
			return function() {
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
				_this2.schedule(function() {
					callback.apply(void 0, args);
				});
			};
		};
		_proto.flush = function flush() {
			var _this3 = this;
			var queue = this.queue;
			this.queue = [];
			if (queue.length) {
				scheduleMicrotask(function() {
					_this3.batchNotifyFn(function() {
						queue.forEach(function(callback) {
							_this3.notifyFn(callback);
						});
					});
				});
			}
		};
		_proto.setNotifyFunction = function setNotifyFunction(fn) {
			this.notifyFn = fn;
		};
		_proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
			this.batchNotifyFn = fn;
		};
		return NotifyManager2;
	}();
	var notifyManager = new NotifyManager();
	var logger$1 = console;
	function getLogger() {
		return logger$1;
	}
	function setLogger(newLogger) {
		logger$1 = newLogger;
	}
	var Query = /* @__PURE__ */ function() {
		function Query2(config) {
			this.abortSignalConsumed = false;
			this.hadObservers = false;
			this.defaultOptions = config.defaultOptions;
			this.setOptions(config.options);
			this.observers = [];
			this.cache = config.cache;
			this.queryKey = config.queryKey;
			this.queryHash = config.queryHash;
			this.initialState = config.state || this.getDefaultState(this.options);
			this.state = this.initialState;
			this.meta = config.meta;
			this.scheduleGc();
		}
		var _proto = Query2.prototype;
		_proto.setOptions = function setOptions(options) {
			var _this$options$cacheTi;
			this.options = _extends$2({}, this.defaultOptions, options);
			this.meta = options == null ? void 0 : options.meta;
			this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1e3);
		};
		_proto.setDefaultOptions = function setDefaultOptions(options) {
			this.defaultOptions = options;
		};
		_proto.scheduleGc = function scheduleGc() {
			var _this = this;
			this.clearGcTimeout();
			if (isValidTimeout(this.cacheTime)) {
				this.gcTimeout = setTimeout(function() {
					_this.optionalRemove();
				}, this.cacheTime);
			}
		};
		_proto.clearGcTimeout = function clearGcTimeout() {
			if (this.gcTimeout) {
				clearTimeout(this.gcTimeout);
				this.gcTimeout = void 0;
			}
		};
		_proto.optionalRemove = function optionalRemove() {
			if (!this.observers.length) {
				if (this.state.isFetching) {
					if (this.hadObservers) {
						this.scheduleGc();
					}
				} else {
					this.cache.remove(this);
				}
			}
		};
		_proto.setData = function setData(updater, options) {
			var _this$options$isDataE, _this$options;
			var prevData = this.state.data;
			var data = functionalUpdate(updater, prevData);
			if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
				data = prevData;
			} else if (this.options.structuralSharing !== false) {
				data = replaceEqualDeep(prevData, data);
			}
			this.dispatch({
				data,
				type: "success",
				dataUpdatedAt: options == null ? void 0 : options.updatedAt
			});
			return data;
		};
		_proto.setState = function setState(state, setStateOptions) {
			this.dispatch({
				type: "setState",
				state,
				setStateOptions
			});
		};
		_proto.cancel = function cancel(options) {
			var _this$retryer;
			var promise = this.promise;
			(_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
			return promise ? promise.then(noop).catch(noop) : Promise.resolve();
		};
		_proto.destroy = function destroy() {
			this.clearGcTimeout();
			this.cancel({
				silent: true
			});
		};
		_proto.reset = function reset() {
			this.destroy();
			this.setState(this.initialState);
		};
		_proto.isActive = function isActive() {
			return this.observers.some(function(observer) {
				return observer.options.enabled !== false;
			});
		};
		_proto.isFetching = function isFetching() {
			return this.state.isFetching;
		};
		_proto.isStale = function isStale2() {
			return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(observer) {
				return observer.getCurrentResult().isStale;
			});
		};
		_proto.isStaleByTime = function isStaleByTime(staleTime) {
			if (staleTime === void 0) {
				staleTime = 0;
			}
			return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
		};
		_proto.onFocus = function onFocus() {
			var _this$retryer2;
			var observer = this.observers.find(function(x2) {
				return x2.shouldFetchOnWindowFocus();
			});
			if (observer) {
				observer.refetch();
			}
			(_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
		};
		_proto.onOnline = function onOnline() {
			var _this$retryer3;
			var observer = this.observers.find(function(x2) {
				return x2.shouldFetchOnReconnect();
			});
			if (observer) {
				observer.refetch();
			}
			(_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
		};
		_proto.addObserver = function addObserver(observer) {
			if (this.observers.indexOf(observer) === -1) {
				this.observers.push(observer);
				this.hadObservers = true;
				this.clearGcTimeout();
				this.cache.notify({
					type: "observerAdded",
					query: this,
					observer
				});
			}
		};
		_proto.removeObserver = function removeObserver(observer) {
			if (this.observers.indexOf(observer) !== -1) {
				this.observers = this.observers.filter(function(x2) {
					return x2 !== observer;
				});
				if (!this.observers.length) {
					if (this.retryer) {
						if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
							this.retryer.cancel({
								revert: true
							});
						} else {
							this.retryer.cancelRetry();
						}
					}
					if (this.cacheTime) {
						this.scheduleGc();
					} else {
						this.cache.remove(this);
					}
				}
				this.cache.notify({
					type: "observerRemoved",
					query: this,
					observer
				});
			}
		};
		_proto.getObserversCount = function getObserversCount() {
			return this.observers.length;
		};
		_proto.invalidate = function invalidate() {
			if (!this.state.isInvalidated) {
				this.dispatch({
					type: "invalidate"
				});
			}
		};
		_proto.fetch = function fetch2(options, fetchOptions) {
			var _this2 = this, _this$options$behavio, _context$fetchOptions, _abortController$abor;
			if (this.state.isFetching) {
				if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
					this.cancel({
						silent: true
					});
				} else if (this.promise) {
					var _this$retryer4;
					(_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry();
					return this.promise;
				}
			}
			if (options) {
				this.setOptions(options);
			}
			if (!this.options.queryFn) {
				var observer = this.observers.find(function(x2) {
					return x2.options.queryFn;
				});
				if (observer) {
					this.setOptions(observer.options);
				}
			}
			var queryKey = ensureQueryKeyArray(this.queryKey);
			var abortController = getAbortController();
			var queryFnContext = {
				queryKey,
				pageParam: void 0,
				meta: this.meta
			};
			Object.defineProperty(queryFnContext, "signal", {
				enumerable: true,
				get: function get() {
					if (abortController) {
						_this2.abortSignalConsumed = true;
						return abortController.signal;
					}
					return void 0;
				}
			});
			var fetchFn = function fetchFn2() {
				if (!_this2.options.queryFn) {
					return Promise.reject("Missing queryFn");
				}
				_this2.abortSignalConsumed = false;
				return _this2.options.queryFn(queryFnContext);
			};
			var context = {
				fetchOptions,
				options: this.options,
				queryKey,
				state: this.state,
				fetchFn,
				meta: this.meta
			};
			if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
				var _this$options$behavio2;
				(_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
			}
			this.revertState = this.state;
			if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
				var _context$fetchOptions2;
				this.dispatch({
					type: "fetch",
					meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
				});
			}
			this.retryer = new Retryer({
				fn: context.fetchFn,
				abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
				onSuccess: function onSuccess(data) {
					_this2.setData(data);
					_this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2);
					if (_this2.cacheTime === 0) {
						_this2.optionalRemove();
					}
				},
				onError: function onError(error) {
					if (!(isCancelledError(error) && error.silent)) {
						_this2.dispatch({
							type: "error",
							error
						});
					}
					if (!isCancelledError(error)) {
						_this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2);
						getLogger().error(error);
					}
					if (_this2.cacheTime === 0) {
						_this2.optionalRemove();
					}
				},
				onFail: function onFail() {
					_this2.dispatch({
						type: "failed"
					});
				},
				onPause: function onPause() {
					_this2.dispatch({
						type: "pause"
					});
				},
				onContinue: function onContinue() {
					_this2.dispatch({
						type: "continue"
					});
				},
				retry: context.options.retry,
				retryDelay: context.options.retryDelay
			});
			this.promise = this.retryer.promise;
			return this.promise;
		};
		_proto.dispatch = function dispatch(action) {
			var _this3 = this;
			this.state = this.reducer(this.state, action);
			notifyManager.batch(function() {
				_this3.observers.forEach(function(observer) {
					observer.onQueryUpdate(action);
				});
				_this3.cache.notify({
					query: _this3,
					type: "queryUpdated",
					action
				});
			});
		};
		_proto.getDefaultState = function getDefaultState2(options) {
			var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
			var hasInitialData = typeof options.initialData !== "undefined";
			var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
			var hasData = typeof data !== "undefined";
			return {
				data,
				dataUpdateCount: 0,
				dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
				error: null,
				errorUpdateCount: 0,
				errorUpdatedAt: 0,
				fetchFailureCount: 0,
				fetchMeta: null,
				isFetching: false,
				isInvalidated: false,
				isPaused: false,
				status: hasData ? "success" : "idle"
			};
		};
		_proto.reducer = function reducer2(state, action) {
			var _action$meta, _action$dataUpdatedAt;
			switch (action.type) {
				case "failed":
					return _extends$2({}, state, {
						fetchFailureCount: state.fetchFailureCount + 1
					});
				case "pause":
					return _extends$2({}, state, {
						isPaused: true
					});
				case "continue":
					return _extends$2({}, state, {
						isPaused: false
					});
				case "fetch":
					return _extends$2({}, state, {
						fetchFailureCount: 0,
						fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
						isFetching: true,
						isPaused: false
					}, !state.dataUpdatedAt && {
						error: null,
						status: "loading"
					});
				case "success":
					return _extends$2({}, state, {
						data: action.data,
						dataUpdateCount: state.dataUpdateCount + 1,
						dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
						error: null,
						fetchFailureCount: 0,
						isFetching: false,
						isInvalidated: false,
						isPaused: false,
						status: "success"
					});
				case "error":
					var error = action.error;
					if (isCancelledError(error) && error.revert && this.revertState) {
						return _extends$2({}, this.revertState);
					}
					return _extends$2({}, state, {
						error,
						errorUpdateCount: state.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: state.fetchFailureCount + 1,
						isFetching: false,
						isPaused: false,
						status: "error"
					});
				case "invalidate":
					return _extends$2({}, state, {
						isInvalidated: true
					});
				case "setState":
					return _extends$2({}, state, action.state);
				default:
					return state;
			}
		};
		return Query2;
	}();
	var QueryCache = /* @__PURE__ */ function(_Subscribable) {
		_inheritsLoose(QueryCache2, _Subscribable);
		function QueryCache2(config) {
			var _this;
			_this = _Subscribable.call(this) || this;
			_this.config = config || {};
			_this.queries = [];
			_this.queriesMap = {};
			return _this;
		}
		var _proto = QueryCache2.prototype;
		_proto.build = function build(client2, options, state) {
			var _options$queryHash;
			var queryKey = options.queryKey;
			var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
			var query = this.get(queryHash);
			if (!query) {
				query = new Query({
					cache: this,
					queryKey,
					queryHash,
					options: client2.defaultQueryOptions(options),
					state,
					defaultOptions: client2.getQueryDefaults(queryKey),
					meta: options.meta
				});
				this.add(query);
			}
			return query;
		};
		_proto.add = function add(query) {
			if (!this.queriesMap[query.queryHash]) {
				this.queriesMap[query.queryHash] = query;
				this.queries.push(query);
				this.notify({
					type: "queryAdded",
					query
				});
			}
		};
		_proto.remove = function remove(query) {
			var queryInMap = this.queriesMap[query.queryHash];
			if (queryInMap) {
				query.destroy();
				this.queries = this.queries.filter(function(x2) {
					return x2 !== query;
				});
				if (queryInMap === query) {
					delete this.queriesMap[query.queryHash];
				}
				this.notify({
					type: "queryRemoved",
					query
				});
			}
		};
		_proto.clear = function clear() {
			var _this2 = this;
			notifyManager.batch(function() {
				_this2.queries.forEach(function(query) {
					_this2.remove(query);
				});
			});
		};
		_proto.get = function get(queryHash) {
			return this.queriesMap[queryHash];
		};
		_proto.getAll = function getAll() {
			return this.queries;
		};
		_proto.find = function find(arg1, arg2) {
			var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
			if (typeof filters.exact === "undefined") {
				filters.exact = true;
			}
			return this.queries.find(function(query) {
				return matchQuery(filters, query);
			});
		};
		_proto.findAll = function findAll(arg1, arg2) {
			var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
			return Object.keys(filters).length > 0 ? this.queries.filter(function(query) {
				return matchQuery(filters, query);
			}) : this.queries;
		};
		_proto.notify = function notify(event) {
			var _this3 = this;
			notifyManager.batch(function() {
				_this3.listeners.forEach(function(listener) {
					listener(event);
				});
			});
		};
		_proto.onFocus = function onFocus() {
			var _this4 = this;
			notifyManager.batch(function() {
				_this4.queries.forEach(function(query) {
					query.onFocus();
				});
			});
		};
		_proto.onOnline = function onOnline() {
			var _this5 = this;
			notifyManager.batch(function() {
				_this5.queries.forEach(function(query) {
					query.onOnline();
				});
			});
		};
		return QueryCache2;
	}(Subscribable);
	var Mutation = /* @__PURE__ */ function() {
		function Mutation2(config) {
			this.options = _extends$2({}, config.defaultOptions, config.options);
			this.mutationId = config.mutationId;
			this.mutationCache = config.mutationCache;
			this.observers = [];
			this.state = config.state || getDefaultState();
			this.meta = config.meta;
		}
		var _proto = Mutation2.prototype;
		_proto.setState = function setState(state) {
			this.dispatch({
				type: "setState",
				state
			});
		};
		_proto.addObserver = function addObserver(observer) {
			if (this.observers.indexOf(observer) === -1) {
				this.observers.push(observer);
			}
		};
		_proto.removeObserver = function removeObserver(observer) {
			this.observers = this.observers.filter(function(x2) {
				return x2 !== observer;
			});
		};
		_proto.cancel = function cancel() {
			if (this.retryer) {
				this.retryer.cancel();
				return this.retryer.promise.then(noop).catch(noop);
			}
			return Promise.resolve();
		};
		_proto.continue = function _continue() {
			if (this.retryer) {
				this.retryer.continue();
				return this.retryer.promise;
			}
			return this.execute();
		};
		_proto.execute = function execute() {
			var _this = this;
			var data;
			var restored = this.state.status === "loading";
			var promise = Promise.resolve();
			if (!restored) {
				this.dispatch({
					type: "loading",
					variables: this.options.variables
				});
				promise = promise.then(function() {
					_this.mutationCache.config.onMutate == null ? void 0 : _this.mutationCache.config.onMutate(_this.state.variables, _this);
				}).then(function() {
					return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
				}).then(function(context) {
					if (context !== _this.state.context) {
						_this.dispatch({
							type: "loading",
							context,
							variables: _this.state.variables
						});
					}
				});
			}
			return promise.then(function() {
				return _this.executeMutation();
			}).then(function(result) {
				data = result;
				_this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
			}).then(function() {
				return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
			}).then(function() {
				return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
			}).then(function() {
				_this.dispatch({
					type: "success",
					data
				});
				return data;
			}).catch(function(error) {
				_this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this);
				getLogger().error(error);
				return Promise.resolve().then(function() {
					return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
				}).then(function() {
					return _this.options.onSettled == null ? void 0 : _this.options.onSettled(void 0, error, _this.state.variables, _this.state.context);
				}).then(function() {
					_this.dispatch({
						type: "error",
						error
					});
					throw error;
				});
			});
		};
		_proto.executeMutation = function executeMutation() {
			var _this2 = this, _this$options$retry;
			this.retryer = new Retryer({
				fn: function fn() {
					if (!_this2.options.mutationFn) {
						return Promise.reject("No mutationFn found");
					}
					return _this2.options.mutationFn(_this2.state.variables);
				},
				onFail: function onFail() {
					_this2.dispatch({
						type: "failed"
					});
				},
				onPause: function onPause() {
					_this2.dispatch({
						type: "pause"
					});
				},
				onContinue: function onContinue() {
					_this2.dispatch({
						type: "continue"
					});
				},
				retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
				retryDelay: this.options.retryDelay
			});
			return this.retryer.promise;
		};
		_proto.dispatch = function dispatch(action) {
			var _this3 = this;
			this.state = reducer(this.state, action);
			notifyManager.batch(function() {
				_this3.observers.forEach(function(observer) {
					observer.onMutationUpdate(action);
				});
				_this3.mutationCache.notify(_this3);
			});
		};
		return Mutation2;
	}();
	function getDefaultState() {
		return {
			context: void 0,
			data: void 0,
			error: null,
			failureCount: 0,
			isPaused: false,
			status: "idle",
			variables: void 0
		};
	}
	function reducer(state, action) {
		switch (action.type) {
			case "failed":
				return _extends$2({}, state, {
					failureCount: state.failureCount + 1
				});
			case "pause":
				return _extends$2({}, state, {
					isPaused: true
				});
			case "continue":
				return _extends$2({}, state, {
					isPaused: false
				});
			case "loading":
				return _extends$2({}, state, {
					context: action.context,
					data: void 0,
					error: null,
					isPaused: false,
					status: "loading",
					variables: action.variables
				});
			case "success":
				return _extends$2({}, state, {
					data: action.data,
					error: null,
					status: "success",
					isPaused: false
				});
			case "error":
				return _extends$2({}, state, {
					data: void 0,
					error: action.error,
					failureCount: state.failureCount + 1,
					isPaused: false,
					status: "error"
				});
			case "setState":
				return _extends$2({}, state, action.state);
			default:
				return state;
		}
	}
	var MutationCache = /* @__PURE__ */ function(_Subscribable) {
		_inheritsLoose(MutationCache2, _Subscribable);
		function MutationCache2(config) {
			var _this;
			_this = _Subscribable.call(this) || this;
			_this.config = config || {};
			_this.mutations = [];
			_this.mutationId = 0;
			return _this;
		}
		var _proto = MutationCache2.prototype;
		_proto.build = function build(client2, options, state) {
			var mutation = new Mutation({
				mutationCache: this,
				mutationId: ++this.mutationId,
				options: client2.defaultMutationOptions(options),
				state,
				defaultOptions: options.mutationKey ? client2.getMutationDefaults(options.mutationKey) : void 0,
				meta: options.meta
			});
			this.add(mutation);
			return mutation;
		};
		_proto.add = function add(mutation) {
			this.mutations.push(mutation);
			this.notify(mutation);
		};
		_proto.remove = function remove(mutation) {
			this.mutations = this.mutations.filter(function(x2) {
				return x2 !== mutation;
			});
			mutation.cancel();
			this.notify(mutation);
		};
		_proto.clear = function clear() {
			var _this2 = this;
			notifyManager.batch(function() {
				_this2.mutations.forEach(function(mutation) {
					_this2.remove(mutation);
				});
			});
		};
		_proto.getAll = function getAll() {
			return this.mutations;
		};
		_proto.find = function find(filters) {
			if (typeof filters.exact === "undefined") {
				filters.exact = true;
			}
			return this.mutations.find(function(mutation) {
				return matchMutation(filters, mutation);
			});
		};
		_proto.findAll = function findAll(filters) {
			return this.mutations.filter(function(mutation) {
				return matchMutation(filters, mutation);
			});
		};
		_proto.notify = function notify(mutation) {
			var _this3 = this;
			notifyManager.batch(function() {
				_this3.listeners.forEach(function(listener) {
					listener(mutation);
				});
			});
		};
		_proto.onFocus = function onFocus() {
			this.resumePausedMutations();
		};
		_proto.onOnline = function onOnline() {
			this.resumePausedMutations();
		};
		_proto.resumePausedMutations = function resumePausedMutations() {
			var pausedMutations = this.mutations.filter(function(x2) {
				return x2.state.isPaused;
			});
			return notifyManager.batch(function() {
				return pausedMutations.reduce(function(promise, mutation) {
					return promise.then(function() {
						return mutation.continue().catch(noop);
					});
				}, Promise.resolve());
			});
		};
		return MutationCache2;
	}(Subscribable);
	function infiniteQueryBehavior() {
		return {
			onFetch: function onFetch(context) {
				context.fetchFn = function() {
					var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
					var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
					var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
					var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
					var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
					var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
					var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
					var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
					var abortController = getAbortController();
					var abortSignal = abortController == null ? void 0 : abortController.signal;
					var newPageParams = oldPageParams;
					var cancelled = false;
					var queryFn = context.options.queryFn || function() {
						return Promise.reject("Missing queryFn");
					};
					var buildNewPages = function buildNewPages2(pages, param2, page, previous) {
						newPageParams = previous ? [param2].concat(newPageParams) : [].concat(newPageParams, [param2]);
						return previous ? [page].concat(pages) : [].concat(pages, [page]);
					};
					var fetchPage = function fetchPage2(pages, manual2, param2, previous) {
						if (cancelled) {
							return Promise.reject("Cancelled");
						}
						if (typeof param2 === "undefined" && !manual2 && pages.length) {
							return Promise.resolve(pages);
						}
						var queryFnContext = {
							queryKey: context.queryKey,
							signal: abortSignal,
							pageParam: param2,
							meta: context.meta
						};
						var queryFnResult = queryFn(queryFnContext);
						var promise2 = Promise.resolve(queryFnResult).then(function(page) {
							return buildNewPages(pages, param2, page, previous);
						});
						if (isCancelable(queryFnResult)) {
							var promiseAsAny = promise2;
							promiseAsAny.cancel = queryFnResult.cancel;
						}
						return promise2;
					};
					var promise;
					if (!oldPages.length) {
						promise = fetchPage([]);
					} else if (isFetchingNextPage) {
						var manual = typeof pageParam !== "undefined";
						var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
						promise = fetchPage(oldPages, manual, param);
					} else if (isFetchingPreviousPage) {
						var _manual = typeof pageParam !== "undefined";
						var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);
						promise = fetchPage(oldPages, _manual, _param, true);
					} else {
						(function() {
							newPageParams = [];
							var manual2 = typeof context.options.getNextPageParam === "undefined";
							var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
							promise = shouldFetchFirstPage ? fetchPage([], manual2, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
							var _loop = function _loop2(i2) {
								promise = promise.then(function(pages) {
									var shouldFetchNextPage = refetchPage && oldPages[i2] ? refetchPage(oldPages[i2], i2, oldPages) : true;
									if (shouldFetchNextPage) {
										var _param2 = manual2 ? oldPageParams[i2] : getNextPageParam(context.options, pages);
										return fetchPage(pages, manual2, _param2);
									}
									return Promise.resolve(buildNewPages(pages, oldPageParams[i2], oldPages[i2]));
								});
							};
							for (var i = 1; i < oldPages.length; i++) {
								_loop(i);
							}
						})();
					}
					var finalPromise = promise.then(function(pages) {
						return {
							pages,
							pageParams: newPageParams
						};
					});
					var finalPromiseAsAny = finalPromise;
					finalPromiseAsAny.cancel = function() {
						cancelled = true;
						abortController == null ? void 0 : abortController.abort();
						if (isCancelable(promise)) {
							promise.cancel();
						}
					};
					return finalPromise;
				};
			}
		};
	}
	function getNextPageParam(options, pages) {
		return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
	}
	function getPreviousPageParam(options, pages) {
		return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
	}
	var QueryClient = /* @__PURE__ */ function() {
		function QueryClient2(config) {
			if (config === void 0) {
				config = {};
			}
			this.queryCache = config.queryCache || new QueryCache();
			this.mutationCache = config.mutationCache || new MutationCache();
			this.defaultOptions = config.defaultOptions || {};
			this.queryDefaults = [];
			this.mutationDefaults = [];
		}
		var _proto = QueryClient2.prototype;
		_proto.mount = function mount() {
			var _this = this;
			this.unsubscribeFocus = focusManager.subscribe(function() {
				if (focusManager.isFocused() && onlineManager.isOnline()) {
					_this.mutationCache.onFocus();
					_this.queryCache.onFocus();
				}
			});
			this.unsubscribeOnline = onlineManager.subscribe(function() {
				if (focusManager.isFocused() && onlineManager.isOnline()) {
					_this.mutationCache.onOnline();
					_this.queryCache.onOnline();
				}
			});
		};
		_proto.unmount = function unmount() {
			var _this$unsubscribeFocu, _this$unsubscribeOnli;
			(_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
			(_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
		};
		_proto.isFetching = function isFetching(arg1, arg2) {
			var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
			filters.fetching = true;
			return this.queryCache.findAll(filters).length;
		};
		_proto.isMutating = function isMutating(filters) {
			return this.mutationCache.findAll(_extends$2({}, filters, {
				fetching: true
			})).length;
		};
		_proto.getQueryData = function getQueryData(queryKey, filters) {
			var _this$queryCache$find;
			return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
		};
		_proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
			return this.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref35) {
				var queryKey = _ref35.queryKey, state = _ref35.state;
				var data = state.data;
				return [queryKey, data];
			});
		};
		_proto.setQueryData = function setQueryData(queryKey, updater, options) {
			var parsedOptions = parseQueryArgs(queryKey);
			var defaultedOptions = this.defaultQueryOptions(parsedOptions);
			return this.queryCache.build(this, defaultedOptions).setData(updater, options);
		};
		_proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
			var _this2 = this;
			return notifyManager.batch(function() {
				return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref210) {
					var queryKey = _ref210.queryKey;
					return [queryKey, _this2.setQueryData(queryKey, updater, options)];
				});
			});
		};
		_proto.getQueryState = function getQueryState(queryKey, filters) {
			var _this$queryCache$find2;
			return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
		};
		_proto.removeQueries = function removeQueries(arg1, arg2) {
			var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
			var queryCache = this.queryCache;
			notifyManager.batch(function() {
				queryCache.findAll(filters).forEach(function(query) {
					queryCache.remove(query);
				});
			});
		};
		_proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
			var _this3 = this;
			var _parseFilterArgs3 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs3[0], options = _parseFilterArgs3[1];
			var queryCache = this.queryCache;
			var refetchFilters = _extends$2({}, filters, {
				active: true
			});
			return notifyManager.batch(function() {
				queryCache.findAll(filters).forEach(function(query) {
					query.reset();
				});
				return _this3.refetchQueries(refetchFilters, options);
			});
		};
		_proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
			var _this4 = this;
			var _parseFilterArgs4 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs4[0], _parseFilterArgs4$ = _parseFilterArgs4[1], cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;
			if (typeof cancelOptions.revert === "undefined") {
				cancelOptions.revert = true;
			}
			var promises = notifyManager.batch(function() {
				return _this4.queryCache.findAll(filters).map(function(query) {
					return query.cancel(cancelOptions);
				});
			});
			return Promise.all(promises).then(noop).catch(noop);
		};
		_proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
			var _ref35, _filters$refetchActiv, _filters$refetchInact, _this5 = this;
			var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs5[0], options = _parseFilterArgs5[1];
			var refetchFilters = _extends$2({}, filters, {
				// if filters.refetchActive is not provided and filters.active is explicitly false,
				// e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
				active: (_ref35 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref35 : true,
				inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
			});
			return notifyManager.batch(function() {
				_this5.queryCache.findAll(filters).forEach(function(query) {
					query.invalidate();
				});
				return _this5.refetchQueries(refetchFilters, options);
			});
		};
		_proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
			var _this6 = this;
			var _parseFilterArgs6 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs6[0], options = _parseFilterArgs6[1];
			var promises = notifyManager.batch(function() {
				return _this6.queryCache.findAll(filters).map(function(query) {
					return query.fetch(void 0, _extends$2({}, options, {
						meta: {
							refetchPage: filters == null ? void 0 : filters.refetchPage
						}
					}));
				});
			});
			var promise = Promise.all(promises).then(noop);
			if (!(options == null ? void 0 : options.throwOnError)) {
				promise = promise.catch(noop);
			}
			return promise;
		};
		_proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
			var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
			var defaultedOptions = this.defaultQueryOptions(parsedOptions);
			if (typeof defaultedOptions.retry === "undefined") {
				defaultedOptions.retry = false;
			}
			var query = this.queryCache.build(this, defaultedOptions);
			return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
		};
		_proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
			return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
		};
		_proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
			var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
			parsedOptions.behavior = infiniteQueryBehavior();
			return this.fetchQuery(parsedOptions);
		};
		_proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
			return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
		};
		_proto.cancelMutations = function cancelMutations() {
			var _this7 = this;
			var promises = notifyManager.batch(function() {
				return _this7.mutationCache.getAll().map(function(mutation) {
					return mutation.cancel();
				});
			});
			return Promise.all(promises).then(noop).catch(noop);
		};
		_proto.resumePausedMutations = function resumePausedMutations() {
			return this.getMutationCache().resumePausedMutations();
		};
		_proto.executeMutation = function executeMutation(options) {
			return this.mutationCache.build(this, options).execute();
		};
		_proto.getQueryCache = function getQueryCache() {
			return this.queryCache;
		};
		_proto.getMutationCache = function getMutationCache() {
			return this.mutationCache;
		};
		_proto.getDefaultOptions = function getDefaultOptions() {
			return this.defaultOptions;
		};
		_proto.setDefaultOptions = function setDefaultOptions(options) {
			this.defaultOptions = options;
		};
		_proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
			var result = this.queryDefaults.find(function(x2) {
				return hashQueryKey(queryKey) === hashQueryKey(x2.queryKey);
			});
			if (result) {
				result.defaultOptions = options;
			} else {
				this.queryDefaults.push({
					queryKey,
					defaultOptions: options
				});
			}
		};
		_proto.getQueryDefaults = function getQueryDefaults(queryKey) {
			var _this$queryDefaults$f;
			return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function(x2) {
				return partialMatchKey(queryKey, x2.queryKey);
			})) == null ? void 0 : _this$queryDefaults$f.defaultOptions : void 0;
		};
		_proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
			var result = this.mutationDefaults.find(function(x2) {
				return hashQueryKey(mutationKey) === hashQueryKey(x2.mutationKey);
			});
			if (result) {
				result.defaultOptions = options;
			} else {
				this.mutationDefaults.push({
					mutationKey,
					defaultOptions: options
				});
			}
		};
		_proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
			var _this$mutationDefault;
			return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function(x2) {
				return partialMatchKey(mutationKey, x2.mutationKey);
			})) == null ? void 0 : _this$mutationDefault.defaultOptions : void 0;
		};
		_proto.defaultQueryOptions = function defaultQueryOptions(options) {
			if (options == null ? void 0 : options._defaulted) {
				return options;
			}
			var defaultedOptions = _extends$2({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
				_defaulted: true
			});
			if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
				defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
			}
			return defaultedOptions;
		};
		_proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
			return this.defaultQueryOptions(options);
		};
		_proto.defaultMutationOptions = function defaultMutationOptions(options) {
			if (options == null ? void 0 : options._defaulted) {
				return options;
			}
			return _extends$2({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
				_defaulted: true
			});
		};
		_proto.clear = function clear() {
			this.queryCache.clear();
			this.mutationCache.clear();
		};
		return QueryClient2;
	}();
	var QueryObserver = /* @__PURE__ */ function(_Subscribable) {
		_inheritsLoose(QueryObserver2, _Subscribable);
		function QueryObserver2(client2, options) {
			var _this;
			_this = _Subscribable.call(this) || this;
			_this.client = client2;
			_this.options = options;
			_this.trackedProps = [];
			_this.selectError = null;
			_this.bindMethods();
			_this.setOptions(options);
			return _this;
		}
		var _proto = QueryObserver2.prototype;
		_proto.bindMethods = function bindMethods() {
			this.remove = this.remove.bind(this);
			this.refetch = this.refetch.bind(this);
		};
		_proto.onSubscribe = function onSubscribe() {
			if (this.listeners.length === 1) {
				this.currentQuery.addObserver(this);
				if (shouldFetchOnMount(this.currentQuery, this.options)) {
					this.executeFetch();
				}
				this.updateTimers();
			}
		};
		_proto.onUnsubscribe = function onUnsubscribe() {
			if (!this.listeners.length) {
				this.destroy();
			}
		};
		_proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
			return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
		};
		_proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
			return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
		};
		_proto.destroy = function destroy() {
			this.listeners = [];
			this.clearTimers();
			this.currentQuery.removeObserver(this);
		};
		_proto.setOptions = function setOptions(options, notifyOptions) {
			var prevOptions = this.options;
			var prevQuery = this.currentQuery;
			this.options = this.client.defaultQueryObserverOptions(options);
			if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
				throw new Error("Expected enabled to be a boolean");
			}
			if (!this.options.queryKey) {
				this.options.queryKey = prevOptions.queryKey;
			}
			this.updateQuery();
			var mounted = this.hasListeners();
			if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
				this.executeFetch();
			}
			this.updateResult(notifyOptions);
			if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
				this.updateStaleTimeout();
			}
			var nextRefetchInterval = this.computeRefetchInterval();
			if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
				this.updateRefetchInterval(nextRefetchInterval);
			}
		};
		_proto.getOptimisticResult = function getOptimisticResult(options) {
			var defaultedOptions = this.client.defaultQueryObserverOptions(options);
			var query = this.client.getQueryCache().build(this.client, defaultedOptions);
			return this.createResult(query, defaultedOptions);
		};
		_proto.getCurrentResult = function getCurrentResult() {
			return this.currentResult;
		};
		_proto.trackResult = function trackResult(result, defaultedOptions) {
			var _this2 = this;
			var trackedResult = {};
			var trackProp = function trackProp2(key) {
				if (!_this2.trackedProps.includes(key)) {
					_this2.trackedProps.push(key);
				}
			};
			Object.keys(result).forEach(function(key) {
				Object.defineProperty(trackedResult, key, {
					configurable: false,
					enumerable: true,
					get: function get() {
						trackProp(key);
						return result[key];
					}
				});
			});
			if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) {
				trackProp("error");
			}
			return trackedResult;
		};
		_proto.getNextResult = function getNextResult(options) {
			var _this3 = this;
			return new Promise(function(resolve, reject) {
				var unsubscribe = _this3.subscribe(function(result) {
					if (!result.isFetching) {
						unsubscribe();
						if (result.isError && (options == null ? void 0 : options.throwOnError)) {
							reject(result.error);
						} else {
							resolve(result);
						}
					}
				});
			});
		};
		_proto.getCurrentQuery = function getCurrentQuery() {
			return this.currentQuery;
		};
		_proto.remove = function remove() {
			this.client.getQueryCache().remove(this.currentQuery);
		};
		_proto.refetch = function refetch(options) {
			return this.fetch(_extends$2({}, options, {
				meta: {
					refetchPage: options == null ? void 0 : options.refetchPage
				}
			}));
		};
		_proto.fetchOptimistic = function fetchOptimistic(options) {
			var _this4 = this;
			var defaultedOptions = this.client.defaultQueryObserverOptions(options);
			var query = this.client.getQueryCache().build(this.client, defaultedOptions);
			return query.fetch().then(function() {
				return _this4.createResult(query, defaultedOptions);
			});
		};
		_proto.fetch = function fetch2(fetchOptions) {
			var _this5 = this;
			return this.executeFetch(fetchOptions).then(function() {
				_this5.updateResult();
				return _this5.currentResult;
			});
		};
		_proto.executeFetch = function executeFetch(fetchOptions) {
			this.updateQuery();
			var promise = this.currentQuery.fetch(this.options, fetchOptions);
			if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
				promise = promise.catch(noop);
			}
			return promise;
		};
		_proto.updateStaleTimeout = function updateStaleTimeout() {
			var _this6 = this;
			this.clearStaleTimeout();
			if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
				return;
			}
			var time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
			var timeout = time + 1;
			this.staleTimeoutId = setTimeout(function() {
				if (!_this6.currentResult.isStale) {
					_this6.updateResult();
				}
			}, timeout);
		};
		_proto.computeRefetchInterval = function computeRefetchInterval() {
			var _this$options$refetch;
			return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
		};
		_proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
			var _this7 = this;
			this.clearRefetchInterval();
			this.currentRefetchInterval = nextInterval;
			if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
				return;
			}
			this.refetchIntervalId = setInterval(function() {
				if (_this7.options.refetchIntervalInBackground || focusManager.isFocused()) {
					_this7.executeFetch();
				}
			}, this.currentRefetchInterval);
		};
		_proto.updateTimers = function updateTimers() {
			this.updateStaleTimeout();
			this.updateRefetchInterval(this.computeRefetchInterval());
		};
		_proto.clearTimers = function clearTimers() {
			this.clearStaleTimeout();
			this.clearRefetchInterval();
		};
		_proto.clearStaleTimeout = function clearStaleTimeout() {
			if (this.staleTimeoutId) {
				clearTimeout(this.staleTimeoutId);
				this.staleTimeoutId = void 0;
			}
		};
		_proto.clearRefetchInterval = function clearRefetchInterval() {
			if (this.refetchIntervalId) {
				clearInterval(this.refetchIntervalId);
				this.refetchIntervalId = void 0;
			}
		};
		_proto.createResult = function createResult(query, options) {
			var prevQuery = this.currentQuery;
			var prevOptions = this.options;
			var prevResult = this.currentResult;
			var prevResultState = this.currentResultState;
			var prevResultOptions = this.currentResultOptions;
			var queryChange = query !== prevQuery;
			var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
			var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
			var state = query.state;
			var dataUpdatedAt = state.dataUpdatedAt, error = state.error, errorUpdatedAt = state.errorUpdatedAt, isFetching = state.isFetching, status = state.status;
			var isPreviousData = false;
			var isPlaceholderData = false;
			var data;
			if (options.optimisticResults) {
				var mounted = this.hasListeners();
				var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
				var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
				if (fetchOnMount || fetchOptionally) {
					isFetching = true;
					if (!dataUpdatedAt) {
						status = "loading";
					}
				}
			}
			if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== "error") {
				data = prevQueryResult.data;
				dataUpdatedAt = prevQueryResult.dataUpdatedAt;
				status = prevQueryResult.status;
				isPreviousData = true;
			} else if (options.select && typeof state.data !== "undefined") {
				if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
					data = this.selectResult;
				} else {
					try {
						this.selectFn = options.select;
						data = options.select(state.data);
						if (options.structuralSharing !== false) {
							data = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, data);
						}
						this.selectResult = data;
						this.selectError = null;
					} catch (selectError) {
						getLogger().error(selectError);
						this.selectError = selectError;
					}
				}
			} else {
				data = state.data;
			}
			if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && (status === "loading" || status === "idle")) {
				var placeholderData;
				if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
					placeholderData = prevResult.data;
				} else {
					placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
					if (options.select && typeof placeholderData !== "undefined") {
						try {
							placeholderData = options.select(placeholderData);
							if (options.structuralSharing !== false) {
								placeholderData = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, placeholderData);
							}
							this.selectError = null;
						} catch (selectError) {
							getLogger().error(selectError);
							this.selectError = selectError;
						}
					}
				}
				if (typeof placeholderData !== "undefined") {
					status = "success";
					data = placeholderData;
					isPlaceholderData = true;
				}
			}
			if (this.selectError) {
				error = this.selectError;
				data = this.selectResult;
				errorUpdatedAt = Date.now();
				status = "error";
			}
			var result = {
				status,
				isLoading: status === "loading",
				isSuccess: status === "success",
				isError: status === "error",
				isIdle: status === "idle",
				data,
				dataUpdatedAt,
				error,
				errorUpdatedAt,
				failureCount: state.fetchFailureCount,
				errorUpdateCount: state.errorUpdateCount,
				isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
				isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
				isFetching,
				isRefetching: isFetching && status !== "loading",
				isLoadingError: status === "error" && state.dataUpdatedAt === 0,
				isPlaceholderData,
				isPreviousData,
				isRefetchError: status === "error" && state.dataUpdatedAt !== 0,
				isStale: isStale(query, options),
				refetch: this.refetch,
				remove: this.remove
			};
			return result;
		};
		_proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
			if (!prevResult) {
				return true;
			}
			var _this$options = this.options, notifyOnChangeProps = _this$options.notifyOnChangeProps, notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;
			if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
				return true;
			}
			if (notifyOnChangeProps === "tracked" && !this.trackedProps.length) {
				return true;
			}
			var includedProps = notifyOnChangeProps === "tracked" ? this.trackedProps : notifyOnChangeProps;
			return Object.keys(result).some(function(key) {
				var typedKey = key;
				var changed = result[typedKey] !== prevResult[typedKey];
				var isIncluded = includedProps == null ? void 0 : includedProps.some(function(x2) {
					return x2 === key;
				});
				var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function(x2) {
					return x2 === key;
				});
				return changed && !isExcluded && (!includedProps || isIncluded);
			});
		};
		_proto.updateResult = function updateResult(notifyOptions) {
			var prevResult = this.currentResult;
			this.currentResult = this.createResult(this.currentQuery, this.options);
			this.currentResultState = this.currentQuery.state;
			this.currentResultOptions = this.options;
			if (shallowEqualObjects(this.currentResult, prevResult)) {
				return;
			}
			var defaultNotifyOptions = {
				cache: true
			};
			if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
				defaultNotifyOptions.listeners = true;
			}
			this.notify(_extends$2({}, defaultNotifyOptions, notifyOptions));
		};
		_proto.updateQuery = function updateQuery() {
			var query = this.client.getQueryCache().build(this.client, this.options);
			if (query === this.currentQuery) {
				return;
			}
			var prevQuery = this.currentQuery;
			this.currentQuery = query;
			this.currentQueryInitialState = query.state;
			this.previousQueryResult = this.currentResult;
			if (this.hasListeners()) {
				prevQuery == null ? void 0 : prevQuery.removeObserver(this);
				query.addObserver(this);
			}
		};
		_proto.onQueryUpdate = function onQueryUpdate(action) {
			var notifyOptions = {};
			if (action.type === "success") {
				notifyOptions.onSuccess = true;
			} else if (action.type === "error" && !isCancelledError(action.error)) {
				notifyOptions.onError = true;
			}
			this.updateResult(notifyOptions);
			if (this.hasListeners()) {
				this.updateTimers();
			}
		};
		_proto.notify = function notify(notifyOptions) {
			var _this8 = this;
			notifyManager.batch(function() {
				if (notifyOptions.onSuccess) {
					_this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
					_this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
				} else if (notifyOptions.onError) {
					_this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
					_this8.options.onSettled == null ? void 0 : _this8.options.onSettled(void 0, _this8.currentResult.error);
				}
				if (notifyOptions.listeners) {
					_this8.listeners.forEach(function(listener) {
						listener(_this8.currentResult);
					});
				}
				if (notifyOptions.cache) {
					_this8.client.getQueryCache().notify({
						query: _this8.currentQuery,
						type: "observerResultsUpdated"
					});
				}
			});
		};
		return QueryObserver2;
	}(Subscribable);
	function shouldLoadOnMount(query, options) {
		return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
	}
	function shouldFetchOnMount(query, options) {
		return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
	}
	function shouldFetchOn(query, options, field) {
		if (options.enabled !== false) {
			var value = typeof field === "function" ? field(query) : field;
			return value === "always" || value !== false && isStale(query, options);
		}
		return false;
	}
	function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
		return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
	}
	function isStale(query, options) {
		return query.isStaleByTime(options.staleTime);
	}
	var unstable_batchedUpdates = ReactDOM.unstable_batchedUpdates;
	notifyManager.setBatchNotifyFunction(unstable_batchedUpdates);
	var logger = console;
	setLogger(logger);
	var defaultContext = /* @__PURE__ */ React.createContext(void 0);
	var QueryClientSharingContext = /* @__PURE__ */ React.createContext(false);
	function getQueryClientContext(contextSharing) {
		if (contextSharing && typeof window !== "undefined") {
			if (!window.ReactQueryClientContext) {
				window.ReactQueryClientContext = defaultContext;
			}
			return window.ReactQueryClientContext;
		}
		return defaultContext;
	}
	var useQueryClient = function useQueryClient2() {
		var queryClient2 = React.useContext(getQueryClientContext(React.useContext(QueryClientSharingContext)));
		if (!queryClient2) {
			throw new Error("No QueryClient set, use QueryClientProvider to set one");
		}
		return queryClient2;
	};
	var QueryClientProvider = function QueryClientProvider2(_ref35) {
		var client2 = _ref35.client, _ref$contextSharing = _ref35.contextSharing, contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing, children = _ref35.children;
		React.useEffect(function() {
			client2.mount();
			return function() {
				client2.unmount();
			};
		}, [client2]);
		var Context = getQueryClientContext(contextSharing);
		return /* @__PURE__ */ React.createElement(QueryClientSharingContext.Provider, {
			value: contextSharing
		}, /* @__PURE__ */ React.createElement(Context.Provider, {
			value: client2
		}, children));
	};
	function createValue() {
		var _isReset = false;
		return {
			clearReset: function clearReset() {
				_isReset = false;
			},
			reset: function reset() {
				_isReset = true;
			},
			isReset: function isReset() {
				return _isReset;
			}
		};
	}
	var QueryErrorResetBoundaryContext = /* @__PURE__ */ React.createContext(createValue());
	var useQueryErrorResetBoundary = function useQueryErrorResetBoundary2() {
		return React.useContext(QueryErrorResetBoundaryContext);
	};
	function shouldThrowError(suspense, _useErrorBoundary, params) {
		if (typeof _useErrorBoundary === "function") {
			return _useErrorBoundary.apply(void 0, params);
		}
		if (typeof _useErrorBoundary === "boolean")
			return _useErrorBoundary;
		return !!suspense;
	}
	function useBaseQuery(options, Observer2) {
		var mountedRef = React.useRef(false);
		var _React$useState = React.useState(0), forceUpdate = _React$useState[1];
		var queryClient2 = useQueryClient();
		var errorResetBoundary = useQueryErrorResetBoundary();
		var defaultedOptions = queryClient2.defaultQueryObserverOptions(options);
		defaultedOptions.optimisticResults = true;
		if (defaultedOptions.onError) {
			defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
		}
		if (defaultedOptions.onSuccess) {
			defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
		}
		if (defaultedOptions.onSettled) {
			defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
		}
		if (defaultedOptions.suspense) {
			if (typeof defaultedOptions.staleTime !== "number") {
				defaultedOptions.staleTime = 1e3;
			}
			if (defaultedOptions.cacheTime === 0) {
				defaultedOptions.cacheTime = 1;
			}
		}
		if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
			if (!errorResetBoundary.isReset()) {
				defaultedOptions.retryOnMount = false;
			}
		}
		var _React$useState2 = React.useState(function() {
			return new Observer2(queryClient2, defaultedOptions);
		}), observer = _React$useState2[0];
		var result = observer.getOptimisticResult(defaultedOptions);
		React.useEffect(function() {
			mountedRef.current = true;
			errorResetBoundary.clearReset();
			var unsubscribe = observer.subscribe(notifyManager.batchCalls(function() {
				if (mountedRef.current) {
					forceUpdate(function(x2) {
						return x2 + 1;
					});
				}
			}));
			observer.updateResult();
			return function() {
				mountedRef.current = false;
				unsubscribe();
			};
		}, [errorResetBoundary, observer]);
		React.useEffect(function() {
			observer.setOptions(defaultedOptions, {
				listeners: false
			});
		}, [defaultedOptions, observer]);
		if (defaultedOptions.suspense && result.isLoading) {
			throw observer.fetchOptimistic(defaultedOptions).then(function(_ref35) {
				var data = _ref35.data;
				defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
				defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
			}).catch(function(error) {
				errorResetBoundary.clearReset();
				defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
				defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(void 0, error);
			});
		}
		if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, [result.error, observer.getCurrentQuery()])) {
			throw result.error;
		}
		if (defaultedOptions.notifyOnChangeProps === "tracked") {
			result = observer.trackResult(result, defaultedOptions);
		}
		return result;
	}
	function useQuery(arg1, arg2, arg3) {
		var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
		return useBaseQuery(parsedOptions, QueryObserver);
	}
	var lodashExports = {};
	var lodash = {
		get exports() {
			return lodashExports;
		},
		set exports(v2) {
			lodashExports = v2;
		}
	};
	/**
	 * @license
	 * Lodash <https://lodash.com/>
	 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	(function(module, exports) {
		(function() {
			var undefined$1;
			var VERSION = "4.17.21";
			var LARGE_ARRAY_SIZE = 200;
			var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
			var HASH_UNDEFINED = "__lodash_hash_undefined__";
			var MAX_MEMOIZE_SIZE = 500;
			var PLACEHOLDER = "__lodash_placeholder__";
			var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
			var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
			var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
			var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
			var HOT_COUNT = 800, HOT_SPAN = 16;
			var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
			var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
			var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
			var wrapFlags = [
				["ary", WRAP_ARY_FLAG],
				["bind", WRAP_BIND_FLAG],
				["bindKey", WRAP_BIND_KEY_FLAG],
				["curry", WRAP_CURRY_FLAG],
				["curryRight", WRAP_CURRY_RIGHT_FLAG],
				["flip", WRAP_FLIP_FLAG],
				["partial", WRAP_PARTIAL_FLAG],
				["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
				["rearg", WRAP_REARG_FLAG]
			];
			var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
			var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
			var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
			var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
			var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
			var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
			var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
			var reTrimStart = /^\s+/;
			var reWhitespace = /\s/;
			var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
			var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
			var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
			var reEscapeChar = /\\(\\)?/g;
			var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
			var reFlags = /\w*$/;
			var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
			var reIsBinary = /^0b[01]+$/i;
			var reIsHostCtor = /^\[object .+?Constructor\]$/;
			var reIsOctal = /^0o[0-7]+$/i;
			var reIsUint = /^(?:0|[1-9]\d*)$/;
			var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
			var reNoMatch = /($^)/;
			var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
			var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
			var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
			var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
			var reApos = RegExp(rsApos, "g");
			var reComboMark = RegExp(rsCombo, "g");
			var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
			var reUnicodeWord = RegExp([
				rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
				rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
				rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
				rsUpper + "+" + rsOptContrUpper,
				rsOrdUpper,
				rsOrdLower,
				rsDigits,
				rsEmoji
			].join("|"), "g");
			var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
			var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
			var contextProps = [
				"Array",
				"Buffer",
				"DataView",
				"Date",
				"Error",
				"Float32Array",
				"Float64Array",
				"Function",
				"Int8Array",
				"Int16Array",
				"Int32Array",
				"Map",
				"Math",
				"Object",
				"Promise",
				"RegExp",
				"Set",
				"String",
				"Symbol",
				"TypeError",
				"Uint8Array",
				"Uint8ClampedArray",
				"Uint16Array",
				"Uint32Array",
				"WeakMap",
				"_",
				"clearTimeout",
				"isFinite",
				"parseInt",
				"setTimeout"
			];
			var templateCounter = -1;
			var typedArrayTags = {};
			typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
			typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
			var cloneableTags = {};
			cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
			cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
			var deburredLetters = {
				// Latin-1 Supplement block.
				"À": "A",
				"Á": "A",
				"Â": "A",
				"Ã": "A",
				"Ä": "A",
				"Å": "A",
				"à": "a",
				"á": "a",
				"â": "a",
				"ã": "a",
				"ä": "a",
				"å": "a",
				"Ç": "C",
				"ç": "c",
				"Ð": "D",
				"ð": "d",
				"È": "E",
				"É": "E",
				"Ê": "E",
				"Ë": "E",
				"è": "e",
				"é": "e",
				"ê": "e",
				"ë": "e",
				"Ì": "I",
				"Í": "I",
				"Î": "I",
				"Ï": "I",
				"ì": "i",
				"í": "i",
				"î": "i",
				"ï": "i",
				"Ñ": "N",
				"ñ": "n",
				"Ò": "O",
				"Ó": "O",
				"Ô": "O",
				"Õ": "O",
				"Ö": "O",
				"Ø": "O",
				"ò": "o",
				"ó": "o",
				"ô": "o",
				"õ": "o",
				"ö": "o",
				"ø": "o",
				"Ù": "U",
				"Ú": "U",
				"Û": "U",
				"Ü": "U",
				"ù": "u",
				"ú": "u",
				"û": "u",
				"ü": "u",
				"Ý": "Y",
				"ý": "y",
				"ÿ": "y",
				"Æ": "Ae",
				"æ": "ae",
				"Þ": "Th",
				"þ": "th",
				"ß": "ss",
				// Latin Extended-A block.
				"Ā": "A",
				"Ă": "A",
				"Ą": "A",
				"ā": "a",
				"ă": "a",
				"ą": "a",
				"Ć": "C",
				"Ĉ": "C",
				"Ċ": "C",
				"Č": "C",
				"ć": "c",
				"ĉ": "c",
				"ċ": "c",
				"č": "c",
				"Ď": "D",
				"Đ": "D",
				"ď": "d",
				"đ": "d",
				"Ē": "E",
				"Ĕ": "E",
				"Ė": "E",
				"Ę": "E",
				"Ě": "E",
				"ē": "e",
				"ĕ": "e",
				"ė": "e",
				"ę": "e",
				"ě": "e",
				"Ĝ": "G",
				"Ğ": "G",
				"Ġ": "G",
				"Ģ": "G",
				"ĝ": "g",
				"ğ": "g",
				"ġ": "g",
				"ģ": "g",
				"Ĥ": "H",
				"Ħ": "H",
				"ĥ": "h",
				"ħ": "h",
				"Ĩ": "I",
				"Ī": "I",
				"Ĭ": "I",
				"Į": "I",
				"İ": "I",
				"ĩ": "i",
				"ī": "i",
				"ĭ": "i",
				"į": "i",
				"ı": "i",
				"Ĵ": "J",
				"ĵ": "j",
				"Ķ": "K",
				"ķ": "k",
				"ĸ": "k",
				"Ĺ": "L",
				"Ļ": "L",
				"Ľ": "L",
				"Ŀ": "L",
				"Ł": "L",
				"ĺ": "l",
				"ļ": "l",
				"ľ": "l",
				"ŀ": "l",
				"ł": "l",
				"Ń": "N",
				"Ņ": "N",
				"Ň": "N",
				"Ŋ": "N",
				"ń": "n",
				"ņ": "n",
				"ň": "n",
				"ŋ": "n",
				"Ō": "O",
				"Ŏ": "O",
				"Ő": "O",
				"ō": "o",
				"ŏ": "o",
				"ő": "o",
				"Ŕ": "R",
				"Ŗ": "R",
				"Ř": "R",
				"ŕ": "r",
				"ŗ": "r",
				"ř": "r",
				"Ś": "S",
				"Ŝ": "S",
				"Ş": "S",
				"Š": "S",
				"ś": "s",
				"ŝ": "s",
				"ş": "s",
				"š": "s",
				"Ţ": "T",
				"Ť": "T",
				"Ŧ": "T",
				"ţ": "t",
				"ť": "t",
				"ŧ": "t",
				"Ũ": "U",
				"Ū": "U",
				"Ŭ": "U",
				"Ů": "U",
				"Ű": "U",
				"Ų": "U",
				"ũ": "u",
				"ū": "u",
				"ŭ": "u",
				"ů": "u",
				"ű": "u",
				"ų": "u",
				"Ŵ": "W",
				"ŵ": "w",
				"Ŷ": "Y",
				"ŷ": "y",
				"Ÿ": "Y",
				"Ź": "Z",
				"Ż": "Z",
				"Ž": "Z",
				"ź": "z",
				"ż": "z",
				"ž": "z",
				"Ĳ": "IJ",
				"ĳ": "ij",
				"Œ": "Oe",
				"œ": "oe",
				"ŉ": "'n",
				"ſ": "s"
			};
			var htmlEscapes = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			};
			var htmlUnescapes = {
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"',
				"&#39;": "'"
			};
			var stringEscapes = {
				"\\": "\\",
				"'": "'",
				"\n": "n",
				"\r": "r",
				"\u2028": "u2028",
				"\u2029": "u2029"
			};
			var freeParseFloat = parseFloat, freeParseInt = parseInt;
			var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
			var freeSelf = typeof self == "object" && self && self.Object === Object && self;
			var root = freeGlobal || freeSelf || Function("return this")();
			var freeExports = exports && !exports.nodeType && exports;
			var freeModule = freeExports && true && module && !module.nodeType && module;
			var moduleExports = freeModule && freeModule.exports === freeExports;
			var freeProcess = moduleExports && freeGlobal.process;
			var nodeUtil = function() {
				try {
					var types = freeModule && freeModule.require && freeModule.require("util").types;
					if (types) {
						return types;
					}
					return freeProcess && freeProcess.binding && freeProcess.binding("util");
				} catch (e2) {
				}
			}();
			var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
			function apply(func, thisArg, args) {
				switch (args.length) {
					case 0:
						return func.call(thisArg);
					case 1:
						return func.call(thisArg, args[0]);
					case 2:
						return func.call(thisArg, args[0], args[1]);
					case 3:
						return func.call(thisArg, args[0], args[1], args[2]);
				}
				return func.apply(thisArg, args);
			}
			function arrayAggregator(array, setter, iteratee, accumulator) {
				var index = -1, length2 = array == null ? 0 : array.length;
				while (++index < length2) {
					var value = array[index];
					setter(accumulator, value, iteratee(value), array);
				}
				return accumulator;
			}
			function arrayEach(array, iteratee) {
				var index = -1, length2 = array == null ? 0 : array.length;
				while (++index < length2) {
					if (iteratee(array[index], index, array) === false) {
						break;
					}
				}
				return array;
			}
			function arrayEachRight(array, iteratee) {
				var length2 = array == null ? 0 : array.length;
				while (length2--) {
					if (iteratee(array[length2], length2, array) === false) {
						break;
					}
				}
				return array;
			}
			function arrayEvery(array, predicate) {
				var index = -1, length2 = array == null ? 0 : array.length;
				while (++index < length2) {
					if (!predicate(array[index], index, array)) {
						return false;
					}
				}
				return true;
			}
			function arrayFilter(array, predicate) {
				var index = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
				while (++index < length2) {
					var value = array[index];
					if (predicate(value, index, array)) {
						result[resIndex++] = value;
					}
				}
				return result;
			}
			function arrayIncludes(array, value) {
				var length2 = array == null ? 0 : array.length;
				return !!length2 && baseIndexOf(array, value, 0) > -1;
			}
			function arrayIncludesWith(array, value, comparator) {
				var index = -1, length2 = array == null ? 0 : array.length;
				while (++index < length2) {
					if (comparator(value, array[index])) {
						return true;
					}
				}
				return false;
			}
			function arrayMap(array, iteratee) {
				var index = -1, length2 = array == null ? 0 : array.length, result = Array(length2);
				while (++index < length2) {
					result[index] = iteratee(array[index], index, array);
				}
				return result;
			}
			function arrayPush(array, values) {
				var index = -1, length2 = values.length, offset = array.length;
				while (++index < length2) {
					array[offset + index] = values[index];
				}
				return array;
			}
			function arrayReduce(array, iteratee, accumulator, initAccum) {
				var index = -1, length2 = array == null ? 0 : array.length;
				if (initAccum && length2) {
					accumulator = array[++index];
				}
				while (++index < length2) {
					accumulator = iteratee(accumulator, array[index], index, array);
				}
				return accumulator;
			}
			function arrayReduceRight(array, iteratee, accumulator, initAccum) {
				var length2 = array == null ? 0 : array.length;
				if (initAccum && length2) {
					accumulator = array[--length2];
				}
				while (length2--) {
					accumulator = iteratee(accumulator, array[length2], length2, array);
				}
				return accumulator;
			}
			function arraySome(array, predicate) {
				var index = -1, length2 = array == null ? 0 : array.length;
				while (++index < length2) {
					if (predicate(array[index], index, array)) {
						return true;
					}
				}
				return false;
			}
			var asciiSize = baseProperty("length");
			function asciiToArray(string) {
				return string.split("");
			}
			function asciiWords(string) {
				return string.match(reAsciiWord) || [];
			}
			function baseFindKey(collection, predicate, eachFunc) {
				var result;
				eachFunc(collection, function(value, key, collection2) {
					if (predicate(value, key, collection2)) {
						result = key;
						return false;
					}
				});
				return result;
			}
			function baseFindIndex(array, predicate, fromIndex, fromRight) {
				var length2 = array.length, index = fromIndex + (fromRight ? 1 : -1);
				while (fromRight ? index-- : ++index < length2) {
					if (predicate(array[index], index, array)) {
						return index;
					}
				}
				return -1;
			}
			function baseIndexOf(array, value, fromIndex) {
				return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
			}
			function baseIndexOfWith(array, value, fromIndex, comparator) {
				var index = fromIndex - 1, length2 = array.length;
				while (++index < length2) {
					if (comparator(array[index], value)) {
						return index;
					}
				}
				return -1;
			}
			function baseIsNaN(value) {
				return value !== value;
			}
			function baseMean(array, iteratee) {
				var length2 = array == null ? 0 : array.length;
				return length2 ? baseSum(array, iteratee) / length2 : NAN;
			}
			function baseProperty(key) {
				return function(object) {
					return object == null ? undefined$1 : object[key];
				};
			}
			function basePropertyOf(object) {
				return function(key) {
					return object == null ? undefined$1 : object[key];
				};
			}
			function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
				eachFunc(collection, function(value, index, collection2) {
					accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
				});
				return accumulator;
			}
			function baseSortBy(array, comparer) {
				var length2 = array.length;
				array.sort(comparer);
				while (length2--) {
					array[length2] = array[length2].value;
				}
				return array;
			}
			function baseSum(array, iteratee) {
				var result, index = -1, length2 = array.length;
				while (++index < length2) {
					var current = iteratee(array[index]);
					if (current !== undefined$1) {
						result = result === undefined$1 ? current : result + current;
					}
				}
				return result;
			}
			function baseTimes(n2, iteratee) {
				var index = -1, result = Array(n2);
				while (++index < n2) {
					result[index] = iteratee(index);
				}
				return result;
			}
			function baseToPairs(object, props) {
				return arrayMap(props, function(key) {
					return [key, object[key]];
				});
			}
			function baseTrim(string) {
				return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
			}
			function baseUnary(func) {
				return function(value) {
					return func(value);
				};
			}
			function baseValues(object, props) {
				return arrayMap(props, function(key) {
					return object[key];
				});
			}
			function cacheHas(cache, key) {
				return cache.has(key);
			}
			function charsStartIndex(strSymbols, chrSymbols) {
				var index = -1, length2 = strSymbols.length;
				while (++index < length2 && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
				}
				return index;
			}
			function charsEndIndex(strSymbols, chrSymbols) {
				var index = strSymbols.length;
				while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
				}
				return index;
			}
			function countHolders(array, placeholder) {
				var length2 = array.length, result = 0;
				while (length2--) {
					if (array[length2] === placeholder) {
						++result;
					}
				}
				return result;
			}
			var deburrLetter = basePropertyOf(deburredLetters);
			var escapeHtmlChar = basePropertyOf(htmlEscapes);
			function escapeStringChar(chr) {
				return "\\" + stringEscapes[chr];
			}
			function getValue(object, key) {
				return object == null ? undefined$1 : object[key];
			}
			function hasUnicode(string) {
				return reHasUnicode.test(string);
			}
			function hasUnicodeWord(string) {
				return reHasUnicodeWord.test(string);
			}
			function iteratorToArray(iterator) {
				var data, result = [];
				while (!(data = iterator.next()).done) {
					result.push(data.value);
				}
				return result;
			}
			function mapToArray(map) {
				var index = -1, result = Array(map.size);
				map.forEach(function(value, key) {
					result[++index] = [key, value];
				});
				return result;
			}
			function overArg(func, transform) {
				return function(arg) {
					return func(transform(arg));
				};
			}
			function replaceHolders(array, placeholder) {
				var index = -1, length2 = array.length, resIndex = 0, result = [];
				while (++index < length2) {
					var value = array[index];
					if (value === placeholder || value === PLACEHOLDER) {
						array[index] = PLACEHOLDER;
						result[resIndex++] = index;
					}
				}
				return result;
			}
			function setToArray(set) {
				var index = -1, result = Array(set.size);
				set.forEach(function(value) {
					result[++index] = value;
				});
				return result;
			}
			function setToPairs(set) {
				var index = -1, result = Array(set.size);
				set.forEach(function(value) {
					result[++index] = [value, value];
				});
				return result;
			}
			function strictIndexOf(array, value, fromIndex) {
				var index = fromIndex - 1, length2 = array.length;
				while (++index < length2) {
					if (array[index] === value) {
						return index;
					}
				}
				return -1;
			}
			function strictLastIndexOf(array, value, fromIndex) {
				var index = fromIndex + 1;
				while (index--) {
					if (array[index] === value) {
						return index;
					}
				}
				return index;
			}
			function stringSize(string) {
				return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
			}
			function stringToArray(string) {
				return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
			}
			function trimmedEndIndex(string) {
				var index = string.length;
				while (index-- && reWhitespace.test(string.charAt(index))) {
				}
				return index;
			}
			var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
			function unicodeSize(string) {
				var result = reUnicode.lastIndex = 0;
				while (reUnicode.test(string)) {
					++result;
				}
				return result;
			}
			function unicodeToArray(string) {
				return string.match(reUnicode) || [];
			}
			function unicodeWords(string) {
				return string.match(reUnicodeWord) || [];
			}
			var runInContext = function runInContext2(context) {
				context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
				var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError = context.TypeError;
				var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
				var coreJsData = context["__core-js_shared__"];
				var funcToString = funcProto.toString;
				var hasOwnProperty2 = objectProto.hasOwnProperty;
				var idCounter = 0;
				var maskSrcKey = function() {
					var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
					return uid ? "Symbol(src)_1." + uid : "";
				}();
				var nativeObjectToString = objectProto.toString;
				var objectCtorString = funcToString.call(Object2);
				var oldDash = root._;
				var reIsNative = RegExp2(
						"^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
				);
				var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
				var defineProperty = function() {
					try {
						var func = getNative(Object2, "defineProperty");
						func({}, "", {});
						return func;
					} catch (e2) {
					}
				}();
				var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
				var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
				var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
				var metaMap = WeakMap2 && new WeakMap2();
				var realNames = {};
				var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
				var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
				function lodash2(value) {
					if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
						if (value instanceof LodashWrapper) {
							return value;
						}
						if (hasOwnProperty2.call(value, "__wrapped__")) {
							return wrapperClone(value);
						}
					}
					return new LodashWrapper(value);
				}
				var baseCreate = function() {
					function object() {
					}
					return function(proto) {
						if (!isObject2(proto)) {
							return {};
						}
						if (objectCreate) {
							return objectCreate(proto);
						}
						object.prototype = proto;
						var result2 = new object();
						object.prototype = undefined$1;
						return result2;
					};
				}();
				function baseLodash() {
				}
				function LodashWrapper(value, chainAll) {
					this.__wrapped__ = value;
					this.__actions__ = [];
					this.__chain__ = !!chainAll;
					this.__index__ = 0;
					this.__values__ = undefined$1;
				}
				lodash2.templateSettings = {
					/**
					 * Used to detect `data` property values to be HTML-escaped.
					 *
					 * @memberOf _.templateSettings
					 * @type {RegExp}
					 */
					"escape": reEscape,
					/**
					 * Used to detect code to be evaluated.
					 *
					 * @memberOf _.templateSettings
					 * @type {RegExp}
					 */
					"evaluate": reEvaluate,
					/**
					 * Used to detect `data` property values to inject.
					 *
					 * @memberOf _.templateSettings
					 * @type {RegExp}
					 */
					"interpolate": reInterpolate,
					/**
					 * Used to reference the data object in the template text.
					 *
					 * @memberOf _.templateSettings
					 * @type {string}
					 */
					"variable": "",
					/**
					 * Used to import variables into the compiled template.
					 *
					 * @memberOf _.templateSettings
					 * @type {Object}
					 */
					"imports": {
						/**
						 * A reference to the `lodash` function.
						 *
						 * @memberOf _.templateSettings.imports
						 * @type {Function}
						 */
						"_": lodash2
					}
				};
				lodash2.prototype = baseLodash.prototype;
				lodash2.prototype.constructor = lodash2;
				LodashWrapper.prototype = baseCreate(baseLodash.prototype);
				LodashWrapper.prototype.constructor = LodashWrapper;
				function LazyWrapper(value) {
					this.__wrapped__ = value;
					this.__actions__ = [];
					this.__dir__ = 1;
					this.__filtered__ = false;
					this.__iteratees__ = [];
					this.__takeCount__ = MAX_ARRAY_LENGTH;
					this.__views__ = [];
				}
				function lazyClone() {
					var result2 = new LazyWrapper(this.__wrapped__);
					result2.__actions__ = copyArray(this.__actions__);
					result2.__dir__ = this.__dir__;
					result2.__filtered__ = this.__filtered__;
					result2.__iteratees__ = copyArray(this.__iteratees__);
					result2.__takeCount__ = this.__takeCount__;
					result2.__views__ = copyArray(this.__views__);
					return result2;
				}
				function lazyReverse() {
					if (this.__filtered__) {
						var result2 = new LazyWrapper(this);
						result2.__dir__ = -1;
						result2.__filtered__ = true;
					} else {
						result2 = this.clone();
						result2.__dir__ *= -1;
					}
					return result2;
				}
				function lazyValue() {
					var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length2 = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length2, this.__takeCount__);
					if (!isArr || !isRight && arrLength == length2 && takeCount == length2) {
						return baseWrapperValue(array, this.__actions__);
					}
					var result2 = [];
					outer:
							while (length2-- && resIndex < takeCount) {
								index += dir;
								var iterIndex = -1, value = array[index];
								while (++iterIndex < iterLength) {
									var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
									if (type == LAZY_MAP_FLAG) {
										value = computed;
									} else if (!computed) {
										if (type == LAZY_FILTER_FLAG) {
											continue outer;
										} else {
											break outer;
										}
									}
								}
								result2[resIndex++] = value;
							}
					return result2;
				}
				LazyWrapper.prototype = baseCreate(baseLodash.prototype);
				LazyWrapper.prototype.constructor = LazyWrapper;
				function Hash(entries) {
					var index = -1, length2 = entries == null ? 0 : entries.length;
					this.clear();
					while (++index < length2) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}
				function hashClear() {
					this.__data__ = nativeCreate ? nativeCreate(null) : {};
					this.size = 0;
				}
				function hashDelete(key) {
					var result2 = this.has(key) && delete this.__data__[key];
					this.size -= result2 ? 1 : 0;
					return result2;
				}
				function hashGet(key) {
					var data = this.__data__;
					if (nativeCreate) {
						var result2 = data[key];
						return result2 === HASH_UNDEFINED ? undefined$1 : result2;
					}
					return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
				}
				function hashHas(key) {
					var data = this.__data__;
					return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
				}
				function hashSet(key, value) {
					var data = this.__data__;
					this.size += this.has(key) ? 0 : 1;
					data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
					return this;
				}
				Hash.prototype.clear = hashClear;
				Hash.prototype["delete"] = hashDelete;
				Hash.prototype.get = hashGet;
				Hash.prototype.has = hashHas;
				Hash.prototype.set = hashSet;
				function ListCache(entries) {
					var index = -1, length2 = entries == null ? 0 : entries.length;
					this.clear();
					while (++index < length2) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}
				function listCacheClear() {
					this.__data__ = [];
					this.size = 0;
				}
				function listCacheDelete(key) {
					var data = this.__data__, index = assocIndexOf(data, key);
					if (index < 0) {
						return false;
					}
					var lastIndex = data.length - 1;
					if (index == lastIndex) {
						data.pop();
					} else {
						splice.call(data, index, 1);
					}
					--this.size;
					return true;
				}
				function listCacheGet(key) {
					var data = this.__data__, index = assocIndexOf(data, key);
					return index < 0 ? undefined$1 : data[index][1];
				}
				function listCacheHas(key) {
					return assocIndexOf(this.__data__, key) > -1;
				}
				function listCacheSet(key, value) {
					var data = this.__data__, index = assocIndexOf(data, key);
					if (index < 0) {
						++this.size;
						data.push([key, value]);
					} else {
						data[index][1] = value;
					}
					return this;
				}
				ListCache.prototype.clear = listCacheClear;
				ListCache.prototype["delete"] = listCacheDelete;
				ListCache.prototype.get = listCacheGet;
				ListCache.prototype.has = listCacheHas;
				ListCache.prototype.set = listCacheSet;
				function MapCache(entries) {
					var index = -1, length2 = entries == null ? 0 : entries.length;
					this.clear();
					while (++index < length2) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}
				function mapCacheClear() {
					this.size = 0;
					this.__data__ = {
						"hash": new Hash(),
						"map": new (Map2 || ListCache)(),
						"string": new Hash()
					};
				}
				function mapCacheDelete(key) {
					var result2 = getMapData(this, key)["delete"](key);
					this.size -= result2 ? 1 : 0;
					return result2;
				}
				function mapCacheGet(key) {
					return getMapData(this, key).get(key);
				}
				function mapCacheHas(key) {
					return getMapData(this, key).has(key);
				}
				function mapCacheSet(key, value) {
					var data = getMapData(this, key), size2 = data.size;
					data.set(key, value);
					this.size += data.size == size2 ? 0 : 1;
					return this;
				}
				MapCache.prototype.clear = mapCacheClear;
				MapCache.prototype["delete"] = mapCacheDelete;
				MapCache.prototype.get = mapCacheGet;
				MapCache.prototype.has = mapCacheHas;
				MapCache.prototype.set = mapCacheSet;
				function SetCache(values2) {
					var index = -1, length2 = values2 == null ? 0 : values2.length;
					this.__data__ = new MapCache();
					while (++index < length2) {
						this.add(values2[index]);
					}
				}
				function setCacheAdd(value) {
					this.__data__.set(value, HASH_UNDEFINED);
					return this;
				}
				function setCacheHas(value) {
					return this.__data__.has(value);
				}
				SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
				SetCache.prototype.has = setCacheHas;
				function Stack(entries) {
					var data = this.__data__ = new ListCache(entries);
					this.size = data.size;
				}
				function stackClear() {
					this.__data__ = new ListCache();
					this.size = 0;
				}
				function stackDelete(key) {
					var data = this.__data__, result2 = data["delete"](key);
					this.size = data.size;
					return result2;
				}
				function stackGet(key) {
					return this.__data__.get(key);
				}
				function stackHas(key) {
					return this.__data__.has(key);
				}
				function stackSet(key, value) {
					var data = this.__data__;
					if (data instanceof ListCache) {
						var pairs = data.__data__;
						if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
							pairs.push([key, value]);
							this.size = ++data.size;
							return this;
						}
						data = this.__data__ = new MapCache(pairs);
					}
					data.set(key, value);
					this.size = data.size;
					return this;
				}
				Stack.prototype.clear = stackClear;
				Stack.prototype["delete"] = stackDelete;
				Stack.prototype.get = stackGet;
				Stack.prototype.has = stackHas;
				Stack.prototype.set = stackSet;
				function arrayLikeKeys(value, inherited) {
					var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length2 = result2.length;
					for (var key in value) {
						if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
						    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
						     isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
						     isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
						     isIndex(key, length2)))) {
							result2.push(key);
						}
					}
					return result2;
				}
				function arraySample(array) {
					var length2 = array.length;
					return length2 ? array[baseRandom(0, length2 - 1)] : undefined$1;
				}
				function arraySampleSize(array, n2) {
					return shuffleSelf(copyArray(array), baseClamp(n2, 0, array.length));
				}
				function arrayShuffle(array) {
					return shuffleSelf(copyArray(array));
				}
				function assignMergeValue(object, key, value) {
					if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
						baseAssignValue(object, key, value);
					}
				}
				function assignValue(object, key, value) {
					var objValue = object[key];
					if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
						baseAssignValue(object, key, value);
					}
				}
				function assocIndexOf(array, key) {
					var length2 = array.length;
					while (length2--) {
						if (eq(array[length2][0], key)) {
							return length2;
						}
					}
					return -1;
				}
				function baseAggregator(collection, setter, iteratee2, accumulator) {
					baseEach(collection, function(value, key, collection2) {
						setter(accumulator, value, iteratee2(value), collection2);
					});
					return accumulator;
				}
				function baseAssign(object, source) {
					return object && copyObject(source, keys(source), object);
				}
				function baseAssignIn(object, source) {
					return object && copyObject(source, keysIn(source), object);
				}
				function baseAssignValue(object, key, value) {
					if (key == "__proto__" && defineProperty) {
						defineProperty(object, key, {
							"configurable": true,
							"enumerable": true,
							"value": value,
							"writable": true
						});
					} else {
						object[key] = value;
					}
				}
				function baseAt(object, paths) {
					var index = -1, length2 = paths.length, result2 = Array2(length2), skip = object == null;
					while (++index < length2) {
						result2[index] = skip ? undefined$1 : get(object, paths[index]);
					}
					return result2;
				}
				function baseClamp(number, lower, upper) {
					if (number === number) {
						if (upper !== undefined$1) {
							number = number <= upper ? number : upper;
						}
						if (lower !== undefined$1) {
							number = number >= lower ? number : lower;
						}
					}
					return number;
				}
				function baseClone(value, bitmask, customizer, key, object, stack) {
					var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
					if (customizer) {
						result2 = object ? customizer(value, key, object, stack) : customizer(value);
					}
					if (result2 !== undefined$1) {
						return result2;
					}
					if (!isObject2(value)) {
						return value;
					}
					var isArr = isArray(value);
					if (isArr) {
						result2 = initCloneArray(value);
						if (!isDeep) {
							return copyArray(value, result2);
						}
					} else {
						var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
						if (isBuffer(value)) {
							return cloneBuffer(value, isDeep);
						}
						if (tag == objectTag || tag == argsTag || isFunc && !object) {
							result2 = isFlat || isFunc ? {} : initCloneObject(value);
							if (!isDeep) {
								return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
							}
						} else {
							if (!cloneableTags[tag]) {
								return object ? value : {};
							}
							result2 = initCloneByTag(value, tag, isDeep);
						}
					}
					stack || (stack = new Stack());
					var stacked = stack.get(value);
					if (stacked) {
						return stacked;
					}
					stack.set(value, result2);
					if (isSet(value)) {
						value.forEach(function(subValue) {
							result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
						});
					} else if (isMap(value)) {
						value.forEach(function(subValue, key2) {
							result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
						});
					}
					var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
					var props = isArr ? undefined$1 : keysFunc(value);
					arrayEach(props || value, function(subValue, key2) {
						if (props) {
							key2 = subValue;
							subValue = value[key2];
						}
						assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
					});
					return result2;
				}
				function baseConforms(source) {
					var props = keys(source);
					return function(object) {
						return baseConformsTo(object, source, props);
					};
				}
				function baseConformsTo(object, source, props) {
					var length2 = props.length;
					if (object == null) {
						return !length2;
					}
					object = Object2(object);
					while (length2--) {
						var key = props[length2], predicate = source[key], value = object[key];
						if (value === undefined$1 && !(key in object) || !predicate(value)) {
							return false;
						}
					}
					return true;
				}
				function baseDelay(func, wait, args) {
					if (typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					return setTimeout2(function() {
						func.apply(undefined$1, args);
					}, wait);
				}
				function baseDifference(array, values2, iteratee2, comparator) {
					var index = -1, includes2 = arrayIncludes, isCommon = true, length2 = array.length, result2 = [], valuesLength = values2.length;
					if (!length2) {
						return result2;
					}
					if (iteratee2) {
						values2 = arrayMap(values2, baseUnary(iteratee2));
					}
					if (comparator) {
						includes2 = arrayIncludesWith;
						isCommon = false;
					} else if (values2.length >= LARGE_ARRAY_SIZE) {
						includes2 = cacheHas;
						isCommon = false;
						values2 = new SetCache(values2);
					}
					outer:
							while (++index < length2) {
								var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
								value = comparator || value !== 0 ? value : 0;
								if (isCommon && computed === computed) {
									var valuesIndex = valuesLength;
									while (valuesIndex--) {
										if (values2[valuesIndex] === computed) {
											continue outer;
										}
									}
									result2.push(value);
								} else if (!includes2(values2, computed, comparator)) {
									result2.push(value);
								}
							}
					return result2;
				}
				var baseEach = createBaseEach(baseForOwn);
				var baseEachRight = createBaseEach(baseForOwnRight, true);
				function baseEvery(collection, predicate) {
					var result2 = true;
					baseEach(collection, function(value, index, collection2) {
						result2 = !!predicate(value, index, collection2);
						return result2;
					});
					return result2;
				}
				function baseExtremum(array, iteratee2, comparator) {
					var index = -1, length2 = array.length;
					while (++index < length2) {
						var value = array[index], current = iteratee2(value);
						if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
							var computed = current, result2 = value;
						}
					}
					return result2;
				}
				function baseFill(array, value, start, end) {
					var length2 = array.length;
					start = toInteger(start);
					if (start < 0) {
						start = -start > length2 ? 0 : length2 + start;
					}
					end = end === undefined$1 || end > length2 ? length2 : toInteger(end);
					if (end < 0) {
						end += length2;
					}
					end = start > end ? 0 : toLength(end);
					while (start < end) {
						array[start++] = value;
					}
					return array;
				}
				function baseFilter(collection, predicate) {
					var result2 = [];
					baseEach(collection, function(value, index, collection2) {
						if (predicate(value, index, collection2)) {
							result2.push(value);
						}
					});
					return result2;
				}
				function baseFlatten(array, depth, predicate, isStrict, result2) {
					var index = -1, length2 = array.length;
					predicate || (predicate = isFlattenable);
					result2 || (result2 = []);
					while (++index < length2) {
						var value = array[index];
						if (depth > 0 && predicate(value)) {
							if (depth > 1) {
								baseFlatten(value, depth - 1, predicate, isStrict, result2);
							} else {
								arrayPush(result2, value);
							}
						} else if (!isStrict) {
							result2[result2.length] = value;
						}
					}
					return result2;
				}
				var baseFor = createBaseFor();
				var baseForRight = createBaseFor(true);
				function baseForOwn(object, iteratee2) {
					return object && baseFor(object, iteratee2, keys);
				}
				function baseForOwnRight(object, iteratee2) {
					return object && baseForRight(object, iteratee2, keys);
				}
				function baseFunctions(object, props) {
					return arrayFilter(props, function(key) {
						return isFunction(object[key]);
					});
				}
				function baseGet(object, path) {
					path = castPath(path, object);
					var index = 0, length2 = path.length;
					while (object != null && index < length2) {
						object = object[toKey(path[index++])];
					}
					return index && index == length2 ? object : undefined$1;
				}
				function baseGetAllKeys(object, keysFunc, symbolsFunc) {
					var result2 = keysFunc(object);
					return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
				}
				function baseGetTag(value) {
					if (value == null) {
						return value === undefined$1 ? undefinedTag : nullTag;
					}
					return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
				}
				function baseGt(value, other) {
					return value > other;
				}
				function baseHas(object, key) {
					return object != null && hasOwnProperty2.call(object, key);
				}
				function baseHasIn(object, key) {
					return object != null && key in Object2(object);
				}
				function baseInRange(number, start, end) {
					return number >= nativeMin(start, end) && number < nativeMax(start, end);
				}
				function baseIntersection(arrays, iteratee2, comparator) {
					var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length2 = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
					while (othIndex--) {
						var array = arrays[othIndex];
						if (othIndex && iteratee2) {
							array = arrayMap(array, baseUnary(iteratee2));
						}
						maxLength = nativeMin(array.length, maxLength);
						caches[othIndex] = !comparator && (iteratee2 || length2 >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
					}
					array = arrays[0];
					var index = -1, seen = caches[0];
					outer:
							while (++index < length2 && result2.length < maxLength) {
								var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
								value = comparator || value !== 0 ? value : 0;
								if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
									othIndex = othLength;
									while (--othIndex) {
										var cache = caches[othIndex];
										if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
											continue outer;
										}
									}
									if (seen) {
										seen.push(computed);
									}
									result2.push(value);
								}
							}
					return result2;
				}
				function baseInverter(object, setter, iteratee2, accumulator) {
					baseForOwn(object, function(value, key, object2) {
						setter(accumulator, iteratee2(value), key, object2);
					});
					return accumulator;
				}
				function baseInvoke(object, path, args) {
					path = castPath(path, object);
					object = parent(object, path);
					var func = object == null ? object : object[toKey(last(path))];
					return func == null ? undefined$1 : apply(func, object, args);
				}
				function baseIsArguments(value) {
					return isObjectLike(value) && baseGetTag(value) == argsTag;
				}
				function baseIsArrayBuffer(value) {
					return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
				}
				function baseIsDate(value) {
					return isObjectLike(value) && baseGetTag(value) == dateTag;
				}
				function baseIsEqual(value, other, bitmask, customizer, stack) {
					if (value === other) {
						return true;
					}
					if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
						return value !== value && other !== other;
					}
					return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
				}
				function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
					var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
					objTag = objTag == argsTag ? objectTag : objTag;
					othTag = othTag == argsTag ? objectTag : othTag;
					var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
					if (isSameTag && isBuffer(object)) {
						if (!isBuffer(other)) {
							return false;
						}
						objIsArr = true;
						objIsObj = false;
					}
					if (isSameTag && !objIsObj) {
						stack || (stack = new Stack());
						return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
					}
					if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
						var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
						if (objIsWrapped || othIsWrapped) {
							var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
							stack || (stack = new Stack());
							return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
						}
					}
					if (!isSameTag) {
						return false;
					}
					stack || (stack = new Stack());
					return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
				}
				function baseIsMap(value) {
					return isObjectLike(value) && getTag(value) == mapTag;
				}
				function baseIsMatch(object, source, matchData, customizer) {
					var index = matchData.length, length2 = index, noCustomizer = !customizer;
					if (object == null) {
						return !length2;
					}
					object = Object2(object);
					while (index--) {
						var data = matchData[index];
						if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
							return false;
						}
					}
					while (++index < length2) {
						data = matchData[index];
						var key = data[0], objValue = object[key], srcValue = data[1];
						if (noCustomizer && data[2]) {
							if (objValue === undefined$1 && !(key in object)) {
								return false;
							}
						} else {
							var stack = new Stack();
							if (customizer) {
								var result2 = customizer(objValue, srcValue, key, object, source, stack);
							}
							if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
								return false;
							}
						}
					}
					return true;
				}
				function baseIsNative(value) {
					if (!isObject2(value) || isMasked(value)) {
						return false;
					}
					var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
					return pattern.test(toSource(value));
				}
				function baseIsRegExp(value) {
					return isObjectLike(value) && baseGetTag(value) == regexpTag;
				}
				function baseIsSet(value) {
					return isObjectLike(value) && getTag(value) == setTag;
				}
				function baseIsTypedArray(value) {
					return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
				}
				function baseIteratee(value) {
					if (typeof value == "function") {
						return value;
					}
					if (value == null) {
						return identity;
					}
					if (typeof value == "object") {
						return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
					}
					return property(value);
				}
				function baseKeys(object) {
					if (!isPrototype(object)) {
						return nativeKeys(object);
					}
					var result2 = [];
					for (var key in Object2(object)) {
						if (hasOwnProperty2.call(object, key) && key != "constructor") {
							result2.push(key);
						}
					}
					return result2;
				}
				function baseKeysIn(object) {
					if (!isObject2(object)) {
						return nativeKeysIn(object);
					}
					var isProto = isPrototype(object), result2 = [];
					for (var key in object) {
						if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
							result2.push(key);
						}
					}
					return result2;
				}
				function baseLt(value, other) {
					return value < other;
				}
				function baseMap(collection, iteratee2) {
					var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
					baseEach(collection, function(value, key, collection2) {
						result2[++index] = iteratee2(value, key, collection2);
					});
					return result2;
				}
				function baseMatches(source) {
					var matchData = getMatchData(source);
					if (matchData.length == 1 && matchData[0][2]) {
						return matchesStrictComparable(matchData[0][0], matchData[0][1]);
					}
					return function(object) {
						return object === source || baseIsMatch(object, source, matchData);
					};
				}
				function baseMatchesProperty(path, srcValue) {
					if (isKey(path) && isStrictComparable(srcValue)) {
						return matchesStrictComparable(toKey(path), srcValue);
					}
					return function(object) {
						var objValue = get(object, path);
						return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
					};
				}
				function baseMerge(object, source, srcIndex, customizer, stack) {
					if (object === source) {
						return;
					}
					baseFor(source, function(srcValue, key) {
						stack || (stack = new Stack());
						if (isObject2(srcValue)) {
							baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
						} else {
							var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
							if (newValue === undefined$1) {
								newValue = srcValue;
							}
							assignMergeValue(object, key, newValue);
						}
					}, keysIn);
				}
				function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
					var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
					if (stacked) {
						assignMergeValue(object, key, stacked);
						return;
					}
					var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
					var isCommon = newValue === undefined$1;
					if (isCommon) {
						var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
						newValue = srcValue;
						if (isArr || isBuff || isTyped) {
							if (isArray(objValue)) {
								newValue = objValue;
							} else if (isArrayLikeObject(objValue)) {
								newValue = copyArray(objValue);
							} else if (isBuff) {
								isCommon = false;
								newValue = cloneBuffer(srcValue, true);
							} else if (isTyped) {
								isCommon = false;
								newValue = cloneTypedArray(srcValue, true);
							} else {
								newValue = [];
							}
						} else if (isPlainObject2(srcValue) || isArguments(srcValue)) {
							newValue = objValue;
							if (isArguments(objValue)) {
								newValue = toPlainObject(objValue);
							} else if (!isObject2(objValue) || isFunction(objValue)) {
								newValue = initCloneObject(srcValue);
							}
						} else {
							isCommon = false;
						}
					}
					if (isCommon) {
						stack.set(srcValue, newValue);
						mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
						stack["delete"](srcValue);
					}
					assignMergeValue(object, key, newValue);
				}
				function baseNth(array, n2) {
					var length2 = array.length;
					if (!length2) {
						return;
					}
					n2 += n2 < 0 ? length2 : 0;
					return isIndex(n2, length2) ? array[n2] : undefined$1;
				}
				function baseOrderBy(collection, iteratees, orders) {
					if (iteratees.length) {
						iteratees = arrayMap(iteratees, function(iteratee2) {
							if (isArray(iteratee2)) {
								return function(value) {
									return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
								};
							}
							return iteratee2;
						});
					} else {
						iteratees = [identity];
					}
					var index = -1;
					iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
					var result2 = baseMap(collection, function(value, key, collection2) {
						var criteria = arrayMap(iteratees, function(iteratee2) {
							return iteratee2(value);
						});
						return { "criteria": criteria, "index": ++index, "value": value };
					});
					return baseSortBy(result2, function(object, other) {
						return compareMultiple(object, other, orders);
					});
				}
				function basePick(object, paths) {
					return basePickBy(object, paths, function(value, path) {
						return hasIn(object, path);
					});
				}
				function basePickBy(object, paths, predicate) {
					var index = -1, length2 = paths.length, result2 = {};
					while (++index < length2) {
						var path = paths[index], value = baseGet(object, path);
						if (predicate(value, path)) {
							baseSet(result2, castPath(path, object), value);
						}
					}
					return result2;
				}
				function basePropertyDeep(path) {
					return function(object) {
						return baseGet(object, path);
					};
				}
				function basePullAll(array, values2, iteratee2, comparator) {
					var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length2 = values2.length, seen = array;
					if (array === values2) {
						values2 = copyArray(values2);
					}
					if (iteratee2) {
						seen = arrayMap(array, baseUnary(iteratee2));
					}
					while (++index < length2) {
						var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
						while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
							if (seen !== array) {
								splice.call(seen, fromIndex, 1);
							}
							splice.call(array, fromIndex, 1);
						}
					}
					return array;
				}
				function basePullAt(array, indexes) {
					var length2 = array ? indexes.length : 0, lastIndex = length2 - 1;
					while (length2--) {
						var index = indexes[length2];
						if (length2 == lastIndex || index !== previous) {
							var previous = index;
							if (isIndex(index)) {
								splice.call(array, index, 1);
							} else {
								baseUnset(array, index);
							}
						}
					}
					return array;
				}
				function baseRandom(lower, upper) {
					return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
				}
				function baseRange(start, end, step, fromRight) {
					var index = -1, length2 = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length2);
					while (length2--) {
						result2[fromRight ? length2 : ++index] = start;
						start += step;
					}
					return result2;
				}
				function baseRepeat(string, n2) {
					var result2 = "";
					if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER) {
						return result2;
					}
					do {
						if (n2 % 2) {
							result2 += string;
						}
						n2 = nativeFloor(n2 / 2);
						if (n2) {
							string += string;
						}
					} while (n2);
					return result2;
				}
				function baseRest(func, start) {
					return setToString(overRest(func, start, identity), func + "");
				}
				function baseSample(collection) {
					return arraySample(values(collection));
				}
				function baseSampleSize(collection, n2) {
					var array = values(collection);
					return shuffleSelf(array, baseClamp(n2, 0, array.length));
				}
				function baseSet(object, path, value, customizer) {
					if (!isObject2(object)) {
						return object;
					}
					path = castPath(path, object);
					var index = -1, length2 = path.length, lastIndex = length2 - 1, nested = object;
					while (nested != null && ++index < length2) {
						var key = toKey(path[index]), newValue = value;
						if (key === "__proto__" || key === "constructor" || key === "prototype") {
							return object;
						}
						if (index != lastIndex) {
							var objValue = nested[key];
							newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
							if (newValue === undefined$1) {
								newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
							}
						}
						assignValue(nested, key, newValue);
						nested = nested[key];
					}
					return object;
				}
				var baseSetData = !metaMap ? identity : function(func, data) {
					metaMap.set(func, data);
					return func;
				};
				var baseSetToString = !defineProperty ? identity : function(func, string) {
					return defineProperty(func, "toString", {
						"configurable": true,
						"enumerable": false,
						"value": constant(string),
						"writable": true
					});
				};
				function baseShuffle(collection) {
					return shuffleSelf(values(collection));
				}
				function baseSlice(array, start, end) {
					var index = -1, length2 = array.length;
					if (start < 0) {
						start = -start > length2 ? 0 : length2 + start;
					}
					end = end > length2 ? length2 : end;
					if (end < 0) {
						end += length2;
					}
					length2 = start > end ? 0 : end - start >>> 0;
					start >>>= 0;
					var result2 = Array2(length2);
					while (++index < length2) {
						result2[index] = array[index + start];
					}
					return result2;
				}
				function baseSome(collection, predicate) {
					var result2;
					baseEach(collection, function(value, index, collection2) {
						result2 = predicate(value, index, collection2);
						return !result2;
					});
					return !!result2;
				}
				function baseSortedIndex(array, value, retHighest) {
					var low = 0, high = array == null ? low : array.length;
					if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
						while (low < high) {
							var mid = low + high >>> 1, computed = array[mid];
							if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
								low = mid + 1;
							} else {
								high = mid;
							}
						}
						return high;
					}
					return baseSortedIndexBy(array, value, identity, retHighest);
				}
				function baseSortedIndexBy(array, value, iteratee2, retHighest) {
					var low = 0, high = array == null ? 0 : array.length;
					if (high === 0) {
						return 0;
					}
					value = iteratee2(value);
					var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
					while (low < high) {
						var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
						if (valIsNaN) {
							var setLow = retHighest || othIsReflexive;
						} else if (valIsUndefined) {
							setLow = othIsReflexive && (retHighest || othIsDefined);
						} else if (valIsNull) {
							setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
						} else if (valIsSymbol) {
							setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
						} else if (othIsNull || othIsSymbol) {
							setLow = false;
						} else {
							setLow = retHighest ? computed <= value : computed < value;
						}
						if (setLow) {
							low = mid + 1;
						} else {
							high = mid;
						}
					}
					return nativeMin(high, MAX_ARRAY_INDEX);
				}
				function baseSortedUniq(array, iteratee2) {
					var index = -1, length2 = array.length, resIndex = 0, result2 = [];
					while (++index < length2) {
						var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
						if (!index || !eq(computed, seen)) {
							var seen = computed;
							result2[resIndex++] = value === 0 ? 0 : value;
						}
					}
					return result2;
				}
				function baseToNumber(value) {
					if (typeof value == "number") {
						return value;
					}
					if (isSymbol(value)) {
						return NAN;
					}
					return +value;
				}
				function baseToString(value) {
					if (typeof value == "string") {
						return value;
					}
					if (isArray(value)) {
						return arrayMap(value, baseToString) + "";
					}
					if (isSymbol(value)) {
						return symbolToString ? symbolToString.call(value) : "";
					}
					var result2 = value + "";
					return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
				}
				function baseUniq(array, iteratee2, comparator) {
					var index = -1, includes2 = arrayIncludes, length2 = array.length, isCommon = true, result2 = [], seen = result2;
					if (comparator) {
						isCommon = false;
						includes2 = arrayIncludesWith;
					} else if (length2 >= LARGE_ARRAY_SIZE) {
						var set2 = iteratee2 ? null : createSet(array);
						if (set2) {
							return setToArray(set2);
						}
						isCommon = false;
						includes2 = cacheHas;
						seen = new SetCache();
					} else {
						seen = iteratee2 ? [] : result2;
					}
					outer:
							while (++index < length2) {
								var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
								value = comparator || value !== 0 ? value : 0;
								if (isCommon && computed === computed) {
									var seenIndex = seen.length;
									while (seenIndex--) {
										if (seen[seenIndex] === computed) {
											continue outer;
										}
									}
									if (iteratee2) {
										seen.push(computed);
									}
									result2.push(value);
								} else if (!includes2(seen, computed, comparator)) {
									if (seen !== result2) {
										seen.push(computed);
									}
									result2.push(value);
								}
							}
					return result2;
				}
				function baseUnset(object, path) {
					path = castPath(path, object);
					object = parent(object, path);
					return object == null || delete object[toKey(last(path))];
				}
				function baseUpdate(object, path, updater, customizer) {
					return baseSet(object, path, updater(baseGet(object, path)), customizer);
				}
				function baseWhile(array, predicate, isDrop, fromRight) {
					var length2 = array.length, index = fromRight ? length2 : -1;
					while ((fromRight ? index-- : ++index < length2) && predicate(array[index], index, array)) {
					}
					return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length2) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length2 : index);
				}
				function baseWrapperValue(value, actions) {
					var result2 = value;
					if (result2 instanceof LazyWrapper) {
						result2 = result2.value();
					}
					return arrayReduce(actions, function(result3, action) {
						return action.func.apply(action.thisArg, arrayPush([result3], action.args));
					}, result2);
				}
				function baseXor(arrays, iteratee2, comparator) {
					var length2 = arrays.length;
					if (length2 < 2) {
						return length2 ? baseUniq(arrays[0]) : [];
					}
					var index = -1, result2 = Array2(length2);
					while (++index < length2) {
						var array = arrays[index], othIndex = -1;
						while (++othIndex < length2) {
							if (othIndex != index) {
								result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
							}
						}
					}
					return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
				}
				function baseZipObject(props, values2, assignFunc) {
					var index = -1, length2 = props.length, valsLength = values2.length, result2 = {};
					while (++index < length2) {
						var value = index < valsLength ? values2[index] : undefined$1;
						assignFunc(result2, props[index], value);
					}
					return result2;
				}
				function castArrayLikeObject(value) {
					return isArrayLikeObject(value) ? value : [];
				}
				function castFunction(value) {
					return typeof value == "function" ? value : identity;
				}
				function castPath(value, object) {
					if (isArray(value)) {
						return value;
					}
					return isKey(value, object) ? [value] : stringToPath(toString(value));
				}
				var castRest = baseRest;
				function castSlice(array, start, end) {
					var length2 = array.length;
					end = end === undefined$1 ? length2 : end;
					return !start && end >= length2 ? array : baseSlice(array, start, end);
				}
				var clearTimeout2 = ctxClearTimeout || function(id2) {
					return root.clearTimeout(id2);
				};
				function cloneBuffer(buffer, isDeep) {
					if (isDeep) {
						return buffer.slice();
					}
					var length2 = buffer.length, result2 = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
					buffer.copy(result2);
					return result2;
				}
				function cloneArrayBuffer(arrayBuffer) {
					var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
					new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
					return result2;
				}
				function cloneDataView(dataView, isDeep) {
					var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
					return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
				}
				function cloneRegExp(regexp) {
					var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
					result2.lastIndex = regexp.lastIndex;
					return result2;
				}
				function cloneSymbol(symbol) {
					return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
				}
				function cloneTypedArray(typedArray, isDeep) {
					var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
					return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
				}
				function compareAscending(value, other) {
					if (value !== other) {
						var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
						var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
						if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
							return 1;
						}
						if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
							return -1;
						}
					}
					return 0;
				}
				function compareMultiple(object, other, orders) {
					var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length2 = objCriteria.length, ordersLength = orders.length;
					while (++index < length2) {
						var result2 = compareAscending(objCriteria[index], othCriteria[index]);
						if (result2) {
							if (index >= ordersLength) {
								return result2;
							}
							var order = orders[index];
							return result2 * (order == "desc" ? -1 : 1);
						}
					}
					return object.index - other.index;
				}
				function composeArgs(args, partials, holders, isCurried) {
					var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
					while (++leftIndex < leftLength) {
						result2[leftIndex] = partials[leftIndex];
					}
					while (++argsIndex < holdersLength) {
						if (isUncurried || argsIndex < argsLength) {
							result2[holders[argsIndex]] = args[argsIndex];
						}
					}
					while (rangeLength--) {
						result2[leftIndex++] = args[argsIndex++];
					}
					return result2;
				}
				function composeArgsRight(args, partials, holders, isCurried) {
					var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
					while (++argsIndex < rangeLength) {
						result2[argsIndex] = args[argsIndex];
					}
					var offset = argsIndex;
					while (++rightIndex < rightLength) {
						result2[offset + rightIndex] = partials[rightIndex];
					}
					while (++holdersIndex < holdersLength) {
						if (isUncurried || argsIndex < argsLength) {
							result2[offset + holders[holdersIndex]] = args[argsIndex++];
						}
					}
					return result2;
				}
				function copyArray(source, array) {
					var index = -1, length2 = source.length;
					array || (array = Array2(length2));
					while (++index < length2) {
						array[index] = source[index];
					}
					return array;
				}
				function copyObject(source, props, object, customizer) {
					var isNew = !object;
					object || (object = {});
					var index = -1, length2 = props.length;
					while (++index < length2) {
						var key = props[index];
						var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
						if (newValue === undefined$1) {
							newValue = source[key];
						}
						if (isNew) {
							baseAssignValue(object, key, newValue);
						} else {
							assignValue(object, key, newValue);
						}
					}
					return object;
				}
				function copySymbols(source, object) {
					return copyObject(source, getSymbols(source), object);
				}
				function copySymbolsIn(source, object) {
					return copyObject(source, getSymbolsIn(source), object);
				}
				function createAggregator(setter, initializer) {
					return function(collection, iteratee2) {
						var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
						return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
					};
				}
				function createAssigner(assigner) {
					return baseRest(function(object, sources) {
						var index = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : undefined$1, guard = length2 > 2 ? sources[2] : undefined$1;
						customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : undefined$1;
						if (guard && isIterateeCall(sources[0], sources[1], guard)) {
							customizer = length2 < 3 ? undefined$1 : customizer;
							length2 = 1;
						}
						object = Object2(object);
						while (++index < length2) {
							var source = sources[index];
							if (source) {
								assigner(object, source, index, customizer);
							}
						}
						return object;
					});
				}
				function createBaseEach(eachFunc, fromRight) {
					return function(collection, iteratee2) {
						if (collection == null) {
							return collection;
						}
						if (!isArrayLike(collection)) {
							return eachFunc(collection, iteratee2);
						}
						var length2 = collection.length, index = fromRight ? length2 : -1, iterable = Object2(collection);
						while (fromRight ? index-- : ++index < length2) {
							if (iteratee2(iterable[index], index, iterable) === false) {
								break;
							}
						}
						return collection;
					};
				}
				function createBaseFor(fromRight) {
					return function(object, iteratee2, keysFunc) {
						var index = -1, iterable = Object2(object), props = keysFunc(object), length2 = props.length;
						while (length2--) {
							var key = props[fromRight ? length2 : ++index];
							if (iteratee2(iterable[key], key, iterable) === false) {
								break;
							}
						}
						return object;
					};
				}
				function createBind(func, bitmask, thisArg) {
					var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
					function wrapper() {
						var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
						return fn.apply(isBind ? thisArg : this, arguments);
					}
					return wrapper;
				}
				function createCaseFirst(methodName) {
					return function(string) {
						string = toString(string);
						var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
						var chr = strSymbols ? strSymbols[0] : string.charAt(0);
						var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
						return chr[methodName]() + trailing;
					};
				}
				function createCompounder(callback) {
					return function(string) {
						return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
					};
				}
				function createCtor(Ctor) {
					return function() {
						var args = arguments;
						switch (args.length) {
							case 0:
								return new Ctor();
							case 1:
								return new Ctor(args[0]);
							case 2:
								return new Ctor(args[0], args[1]);
							case 3:
								return new Ctor(args[0], args[1], args[2]);
							case 4:
								return new Ctor(args[0], args[1], args[2], args[3]);
							case 5:
								return new Ctor(args[0], args[1], args[2], args[3], args[4]);
							case 6:
								return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
							case 7:
								return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
						}
						var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
						return isObject2(result2) ? result2 : thisBinding;
					};
				}
				function createCurry(func, bitmask, arity) {
					var Ctor = createCtor(func);
					function wrapper() {
						var length2 = arguments.length, args = Array2(length2), index = length2, placeholder = getHolder(wrapper);
						while (index--) {
							args[index] = arguments[index];
						}
						var holders = length2 < 3 && args[0] !== placeholder && args[length2 - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
						length2 -= holders.length;
						if (length2 < arity) {
							return createRecurry(
									func,
									bitmask,
									createHybrid,
									wrapper.placeholder,
									undefined$1,
									args,
									holders,
									undefined$1,
									undefined$1,
									arity - length2
							);
						}
						var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
						return apply(fn, this, args);
					}
					return wrapper;
				}
				function createFind(findIndexFunc) {
					return function(collection, predicate, fromIndex) {
						var iterable = Object2(collection);
						if (!isArrayLike(collection)) {
							var iteratee2 = getIteratee(predicate, 3);
							collection = keys(collection);
							predicate = function(key) {
								return iteratee2(iterable[key], key, iterable);
							};
						}
						var index = findIndexFunc(collection, predicate, fromIndex);
						return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
					};
				}
				function createFlow(fromRight) {
					return flatRest(function(funcs) {
						var length2 = funcs.length, index = length2, prereq = LodashWrapper.prototype.thru;
						if (fromRight) {
							funcs.reverse();
						}
						while (index--) {
							var func = funcs[index];
							if (typeof func != "function") {
								throw new TypeError(FUNC_ERROR_TEXT);
							}
							if (prereq && !wrapper && getFuncName(func) == "wrapper") {
								var wrapper = new LodashWrapper([], true);
							}
						}
						index = wrapper ? index : length2;
						while (++index < length2) {
							func = funcs[index];
							var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
							if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
								wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
							} else {
								wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
							}
						}
						return function() {
							var args = arguments, value = args[0];
							if (wrapper && args.length == 1 && isArray(value)) {
								return wrapper.plant(value).value();
							}
							var index2 = 0, result2 = length2 ? funcs[index2].apply(this, args) : value;
							while (++index2 < length2) {
								result2 = funcs[index2].call(this, result2);
							}
							return result2;
						};
					});
				}
				function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
					var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
					function wrapper() {
						var length2 = arguments.length, args = Array2(length2), index = length2;
						while (index--) {
							args[index] = arguments[index];
						}
						if (isCurried) {
							var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
						}
						if (partials) {
							args = composeArgs(args, partials, holders, isCurried);
						}
						if (partialsRight) {
							args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
						}
						length2 -= holdersCount;
						if (isCurried && length2 < arity) {
							var newHolders = replaceHolders(args, placeholder);
							return createRecurry(
									func,
									bitmask,
									createHybrid,
									wrapper.placeholder,
									thisArg,
									args,
									newHolders,
									argPos,
									ary2,
									arity - length2
							);
						}
						var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
						length2 = args.length;
						if (argPos) {
							args = reorder(args, argPos);
						} else if (isFlip && length2 > 1) {
							args.reverse();
						}
						if (isAry && ary2 < length2) {
							args.length = ary2;
						}
						if (this && this !== root && this instanceof wrapper) {
							fn = Ctor || createCtor(fn);
						}
						return fn.apply(thisBinding, args);
					}
					return wrapper;
				}
				function createInverter(setter, toIteratee) {
					return function(object, iteratee2) {
						return baseInverter(object, setter, toIteratee(iteratee2), {});
					};
				}
				function createMathOperation(operator, defaultValue) {
					return function(value, other) {
						var result2;
						if (value === undefined$1 && other === undefined$1) {
							return defaultValue;
						}
						if (value !== undefined$1) {
							result2 = value;
						}
						if (other !== undefined$1) {
							if (result2 === undefined$1) {
								return other;
							}
							if (typeof value == "string" || typeof other == "string") {
								value = baseToString(value);
								other = baseToString(other);
							} else {
								value = baseToNumber(value);
								other = baseToNumber(other);
							}
							result2 = operator(value, other);
						}
						return result2;
					};
				}
				function createOver(arrayFunc) {
					return flatRest(function(iteratees) {
						iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
						return baseRest(function(args) {
							var thisArg = this;
							return arrayFunc(iteratees, function(iteratee2) {
								return apply(iteratee2, thisArg, args);
							});
						});
					});
				}
				function createPadding(length2, chars) {
					chars = chars === undefined$1 ? " " : baseToString(chars);
					var charsLength = chars.length;
					if (charsLength < 2) {
						return charsLength ? baseRepeat(chars, length2) : chars;
					}
					var result2 = baseRepeat(chars, nativeCeil(length2 / stringSize(chars)));
					return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length2).join("") : result2.slice(0, length2);
				}
				function createPartial(func, bitmask, thisArg, partials) {
					var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
					function wrapper() {
						var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
						while (++leftIndex < leftLength) {
							args[leftIndex] = partials[leftIndex];
						}
						while (argsLength--) {
							args[leftIndex++] = arguments[++argsIndex];
						}
						return apply(fn, isBind ? thisArg : this, args);
					}
					return wrapper;
				}
				function createRange(fromRight) {
					return function(start, end, step) {
						if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
							end = step = undefined$1;
						}
						start = toFinite(start);
						if (end === undefined$1) {
							end = start;
							start = 0;
						} else {
							end = toFinite(end);
						}
						step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
						return baseRange(start, end, step, fromRight);
					};
				}
				function createRelationalOperation(operator) {
					return function(value, other) {
						if (!(typeof value == "string" && typeof other == "string")) {
							value = toNumber(value);
							other = toNumber(other);
						}
						return operator(value, other);
					};
				}
				function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
					var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
					bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
					bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
					if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
						bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
					}
					var newData = [
						func,
						bitmask,
						thisArg,
						newPartials,
						newHolders,
						newPartialsRight,
						newHoldersRight,
						argPos,
						ary2,
						arity
					];
					var result2 = wrapFunc.apply(undefined$1, newData);
					if (isLaziable(func)) {
						setData(result2, newData);
					}
					result2.placeholder = placeholder;
					return setWrapToString(result2, func, bitmask);
				}
				function createRound(methodName) {
					var func = Math2[methodName];
					return function(number, precision) {
						number = toNumber(number);
						precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
						if (precision && nativeIsFinite(number)) {
							var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
							pair = (toString(value) + "e").split("e");
							return +(pair[0] + "e" + (+pair[1] - precision));
						}
						return func(number);
					};
				}
				var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
					return new Set2(values2);
				};
				function createToPairs(keysFunc) {
					return function(object) {
						var tag = getTag(object);
						if (tag == mapTag) {
							return mapToArray(object);
						}
						if (tag == setTag) {
							return setToPairs(object);
						}
						return baseToPairs(object, keysFunc(object));
					};
				}
				function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
					var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
					if (!isBindKey && typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					var length2 = partials ? partials.length : 0;
					if (!length2) {
						bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
						partials = holders = undefined$1;
					}
					ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
					arity = arity === undefined$1 ? arity : toInteger(arity);
					length2 -= holders ? holders.length : 0;
					if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
						var partialsRight = partials, holdersRight = holders;
						partials = holders = undefined$1;
					}
					var data = isBindKey ? undefined$1 : getData(func);
					var newData = [
						func,
						bitmask,
						thisArg,
						partials,
						holders,
						partialsRight,
						holdersRight,
						argPos,
						ary2,
						arity
					];
					if (data) {
						mergeData(newData, data);
					}
					func = newData[0];
					bitmask = newData[1];
					thisArg = newData[2];
					partials = newData[3];
					holders = newData[4];
					arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length2, 0);
					if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
						bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
					}
					if (!bitmask || bitmask == WRAP_BIND_FLAG) {
						var result2 = createBind(func, bitmask, thisArg);
					} else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
						result2 = createCurry(func, bitmask, arity);
					} else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
						result2 = createPartial(func, bitmask, thisArg, partials);
					} else {
						result2 = createHybrid.apply(undefined$1, newData);
					}
					var setter = data ? baseSetData : setData;
					return setWrapToString(setter(result2, newData), func, bitmask);
				}
				function customDefaultsAssignIn(objValue, srcValue, key, object) {
					if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty2.call(object, key)) {
						return srcValue;
					}
					return objValue;
				}
				function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
					if (isObject2(objValue) && isObject2(srcValue)) {
						stack.set(srcValue, objValue);
						baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
						stack["delete"](srcValue);
					}
					return objValue;
				}
				function customOmitClone(value) {
					return isPlainObject2(value) ? undefined$1 : value;
				}
				function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
					var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
					if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
						return false;
					}
					var arrStacked = stack.get(array);
					var othStacked = stack.get(other);
					if (arrStacked && othStacked) {
						return arrStacked == other && othStacked == array;
					}
					var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
					stack.set(array, other);
					stack.set(other, array);
					while (++index < arrLength) {
						var arrValue = array[index], othValue = other[index];
						if (customizer) {
							var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
						}
						if (compared !== undefined$1) {
							if (compared) {
								continue;
							}
							result2 = false;
							break;
						}
						if (seen) {
							if (!arraySome(other, function(othValue2, othIndex) {
								if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
									return seen.push(othIndex);
								}
							})) {
								result2 = false;
								break;
							}
						} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
							result2 = false;
							break;
						}
					}
					stack["delete"](array);
					stack["delete"](other);
					return result2;
				}
				function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
					switch (tag) {
						case dataViewTag:
							if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
								return false;
							}
							object = object.buffer;
							other = other.buffer;
						case arrayBufferTag:
							if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
								return false;
							}
							return true;
						case boolTag:
						case dateTag:
						case numberTag:
							return eq(+object, +other);
						case errorTag:
							return object.name == other.name && object.message == other.message;
						case regexpTag:
						case stringTag:
							return object == other + "";
						case mapTag:
							var convert = mapToArray;
						case setTag:
							var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
							convert || (convert = setToArray);
							if (object.size != other.size && !isPartial) {
								return false;
							}
							var stacked = stack.get(object);
							if (stacked) {
								return stacked == other;
							}
							bitmask |= COMPARE_UNORDERED_FLAG;
							stack.set(object, other);
							var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
							stack["delete"](object);
							return result2;
						case symbolTag:
							if (symbolValueOf) {
								return symbolValueOf.call(object) == symbolValueOf.call(other);
							}
					}
					return false;
				}
				function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
					var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
					if (objLength != othLength && !isPartial) {
						return false;
					}
					var index = objLength;
					while (index--) {
						var key = objProps[index];
						if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
							return false;
						}
					}
					var objStacked = stack.get(object);
					var othStacked = stack.get(other);
					if (objStacked && othStacked) {
						return objStacked == other && othStacked == object;
					}
					var result2 = true;
					stack.set(object, other);
					stack.set(other, object);
					var skipCtor = isPartial;
					while (++index < objLength) {
						key = objProps[index];
						var objValue = object[key], othValue = other[key];
						if (customizer) {
							var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
						}
						if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
							result2 = false;
							break;
						}
						skipCtor || (skipCtor = key == "constructor");
					}
					if (result2 && !skipCtor) {
						var objCtor = object.constructor, othCtor = other.constructor;
						if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
							result2 = false;
						}
					}
					stack["delete"](object);
					stack["delete"](other);
					return result2;
				}
				function flatRest(func) {
					return setToString(overRest(func, undefined$1, flatten), func + "");
				}
				function getAllKeys(object) {
					return baseGetAllKeys(object, keys, getSymbols);
				}
				function getAllKeysIn(object) {
					return baseGetAllKeys(object, keysIn, getSymbolsIn);
				}
				var getData = !metaMap ? noop2 : function(func) {
					return metaMap.get(func);
				};
				function getFuncName(func) {
					var result2 = func.name + "", array = realNames[result2], length2 = hasOwnProperty2.call(realNames, result2) ? array.length : 0;
					while (length2--) {
						var data = array[length2], otherFunc = data.func;
						if (otherFunc == null || otherFunc == func) {
							return data.name;
						}
					}
					return result2;
				}
				function getHolder(func) {
					var object = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
					return object.placeholder;
				}
				function getIteratee() {
					var result2 = lodash2.iteratee || iteratee;
					result2 = result2 === iteratee ? baseIteratee : result2;
					return arguments.length ? result2(arguments[0], arguments[1]) : result2;
				}
				function getMapData(map2, key) {
					var data = map2.__data__;
					return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
				}
				function getMatchData(object) {
					var result2 = keys(object), length2 = result2.length;
					while (length2--) {
						var key = result2[length2], value = object[key];
						result2[length2] = [key, value, isStrictComparable(value)];
					}
					return result2;
				}
				function getNative(object, key) {
					var value = getValue(object, key);
					return baseIsNative(value) ? value : undefined$1;
				}
				function getRawTag(value) {
					var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
					try {
						value[symToStringTag] = undefined$1;
						var unmasked = true;
					} catch (e2) {
					}
					var result2 = nativeObjectToString.call(value);
					if (unmasked) {
						if (isOwn) {
							value[symToStringTag] = tag;
						} else {
							delete value[symToStringTag];
						}
					}
					return result2;
				}
				var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
					if (object == null) {
						return [];
					}
					object = Object2(object);
					return arrayFilter(nativeGetSymbols(object), function(symbol) {
						return propertyIsEnumerable.call(object, symbol);
					});
				};
				var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
					var result2 = [];
					while (object) {
						arrayPush(result2, getSymbols(object));
						object = getPrototype(object);
					}
					return result2;
				};
				var getTag = baseGetTag;
				if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
					getTag = function(value) {
						var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
						if (ctorString) {
							switch (ctorString) {
								case dataViewCtorString:
									return dataViewTag;
								case mapCtorString:
									return mapTag;
								case promiseCtorString:
									return promiseTag;
								case setCtorString:
									return setTag;
								case weakMapCtorString:
									return weakMapTag;
							}
						}
						return result2;
					};
				}
				function getView(start, end, transforms) {
					var index = -1, length2 = transforms.length;
					while (++index < length2) {
						var data = transforms[index], size2 = data.size;
						switch (data.type) {
							case "drop":
								start += size2;
								break;
							case "dropRight":
								end -= size2;
								break;
							case "take":
								end = nativeMin(end, start + size2);
								break;
							case "takeRight":
								start = nativeMax(start, end - size2);
								break;
						}
					}
					return { "start": start, "end": end };
				}
				function getWrapDetails(source) {
					var match2 = source.match(reWrapDetails);
					return match2 ? match2[1].split(reSplitDetails) : [];
				}
				function hasPath(object, path, hasFunc) {
					path = castPath(path, object);
					var index = -1, length2 = path.length, result2 = false;
					while (++index < length2) {
						var key = toKey(path[index]);
						if (!(result2 = object != null && hasFunc(object, key))) {
							break;
						}
						object = object[key];
					}
					if (result2 || ++index != length2) {
						return result2;
					}
					length2 = object == null ? 0 : object.length;
					return !!length2 && isLength(length2) && isIndex(key, length2) && (isArray(object) || isArguments(object));
				}
				function initCloneArray(array) {
					var length2 = array.length, result2 = new array.constructor(length2);
					if (length2 && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
						result2.index = array.index;
						result2.input = array.input;
					}
					return result2;
				}
				function initCloneObject(object) {
					return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
				}
				function initCloneByTag(object, tag, isDeep) {
					var Ctor = object.constructor;
					switch (tag) {
						case arrayBufferTag:
							return cloneArrayBuffer(object);
						case boolTag:
						case dateTag:
							return new Ctor(+object);
						case dataViewTag:
							return cloneDataView(object, isDeep);
						case float32Tag:
						case float64Tag:
						case int8Tag:
						case int16Tag:
						case int32Tag:
						case uint8Tag:
						case uint8ClampedTag:
						case uint16Tag:
						case uint32Tag:
							return cloneTypedArray(object, isDeep);
						case mapTag:
							return new Ctor();
						case numberTag:
						case stringTag:
							return new Ctor(object);
						case regexpTag:
							return cloneRegExp(object);
						case setTag:
							return new Ctor();
						case symbolTag:
							return cloneSymbol(object);
					}
				}
				function insertWrapDetails(source, details) {
					var length2 = details.length;
					if (!length2) {
						return source;
					}
					var lastIndex = length2 - 1;
					details[lastIndex] = (length2 > 1 ? "& " : "") + details[lastIndex];
					details = details.join(length2 > 2 ? ", " : " ");
					return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
				}
				function isFlattenable(value) {
					return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
				}
				function isIndex(value, length2) {
					var type = typeof value;
					length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
					return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
				}
				function isIterateeCall(value, index, object) {
					if (!isObject2(object)) {
						return false;
					}
					var type = typeof index;
					if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
						return eq(object[index], value);
					}
					return false;
				}
				function isKey(value, object) {
					if (isArray(value)) {
						return false;
					}
					var type = typeof value;
					if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
						return true;
					}
					return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
				}
				function isKeyable(value) {
					var type = typeof value;
					return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
				}
				function isLaziable(func) {
					var funcName = getFuncName(func), other = lodash2[funcName];
					if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
						return false;
					}
					if (func === other) {
						return true;
					}
					var data = getData(other);
					return !!data && func === data[0];
				}
				function isMasked(func) {
					return !!maskSrcKey && maskSrcKey in func;
				}
				var isMaskable = coreJsData ? isFunction : stubFalse;
				function isPrototype(value) {
					var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
					return value === proto;
				}
				function isStrictComparable(value) {
					return value === value && !isObject2(value);
				}
				function matchesStrictComparable(key, srcValue) {
					return function(object) {
						if (object == null) {
							return false;
						}
						return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
					};
				}
				function memoizeCapped(func) {
					var result2 = memoize2(func, function(key) {
						if (cache.size === MAX_MEMOIZE_SIZE) {
							cache.clear();
						}
						return key;
					});
					var cache = result2.cache;
					return result2;
				}
				function mergeData(data, source) {
					var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
					var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
					if (!(isCommon || isCombo)) {
						return data;
					}
					if (srcBitmask & WRAP_BIND_FLAG) {
						data[2] = source[2];
						newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
					}
					var value = source[3];
					if (value) {
						var partials = data[3];
						data[3] = partials ? composeArgs(partials, value, source[4]) : value;
						data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
					}
					value = source[5];
					if (value) {
						partials = data[5];
						data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
						data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
					}
					value = source[7];
					if (value) {
						data[7] = value;
					}
					if (srcBitmask & WRAP_ARY_FLAG) {
						data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
					}
					if (data[9] == null) {
						data[9] = source[9];
					}
					data[0] = source[0];
					data[1] = newBitmask;
					return data;
				}
				function nativeKeysIn(object) {
					var result2 = [];
					if (object != null) {
						for (var key in Object2(object)) {
							result2.push(key);
						}
					}
					return result2;
				}
				function objectToString(value) {
					return nativeObjectToString.call(value);
				}
				function overRest(func, start, transform2) {
					start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
					return function() {
						var args = arguments, index = -1, length2 = nativeMax(args.length - start, 0), array = Array2(length2);
						while (++index < length2) {
							array[index] = args[start + index];
						}
						index = -1;
						var otherArgs = Array2(start + 1);
						while (++index < start) {
							otherArgs[index] = args[index];
						}
						otherArgs[start] = transform2(array);
						return apply(func, this, otherArgs);
					};
				}
				function parent(object, path) {
					return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
				}
				function reorder(array, indexes) {
					var arrLength = array.length, length2 = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
					while (length2--) {
						var index = indexes[length2];
						array[length2] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
					}
					return array;
				}
				function safeGet(object, key) {
					if (key === "constructor" && typeof object[key] === "function") {
						return;
					}
					if (key == "__proto__") {
						return;
					}
					return object[key];
				}
				var setData = shortOut(baseSetData);
				var setTimeout2 = ctxSetTimeout || function(func, wait) {
					return root.setTimeout(func, wait);
				};
				var setToString = shortOut(baseSetToString);
				function setWrapToString(wrapper, reference, bitmask) {
					var source = reference + "";
					return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
				}
				function shortOut(func) {
					var count = 0, lastCalled = 0;
					return function() {
						var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
						lastCalled = stamp;
						if (remaining > 0) {
							if (++count >= HOT_COUNT) {
								return arguments[0];
							}
						} else {
							count = 0;
						}
						return func.apply(undefined$1, arguments);
					};
				}
				function shuffleSelf(array, size2) {
					var index = -1, length2 = array.length, lastIndex = length2 - 1;
					size2 = size2 === undefined$1 ? length2 : size2;
					while (++index < size2) {
						var rand = baseRandom(index, lastIndex), value = array[rand];
						array[rand] = array[index];
						array[index] = value;
					}
					array.length = size2;
					return array;
				}
				var stringToPath = memoizeCapped(function(string) {
					var result2 = [];
					if (string.charCodeAt(0) === 46) {
						result2.push("");
					}
					string.replace(rePropName, function(match2, number, quote, subString) {
						result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
					});
					return result2;
				});
				function toKey(value) {
					if (typeof value == "string" || isSymbol(value)) {
						return value;
					}
					var result2 = value + "";
					return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
				}
				function toSource(func) {
					if (func != null) {
						try {
							return funcToString.call(func);
						} catch (e2) {
						}
						try {
							return func + "";
						} catch (e2) {
						}
					}
					return "";
				}
				function updateWrapDetails(details, bitmask) {
					arrayEach(wrapFlags, function(pair) {
						var value = "_." + pair[0];
						if (bitmask & pair[1] && !arrayIncludes(details, value)) {
							details.push(value);
						}
					});
					return details.sort();
				}
				function wrapperClone(wrapper) {
					if (wrapper instanceof LazyWrapper) {
						return wrapper.clone();
					}
					var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
					result2.__actions__ = copyArray(wrapper.__actions__);
					result2.__index__ = wrapper.__index__;
					result2.__values__ = wrapper.__values__;
					return result2;
				}
				function chunk(array, size2, guard) {
					if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
						size2 = 1;
					} else {
						size2 = nativeMax(toInteger(size2), 0);
					}
					var length2 = array == null ? 0 : array.length;
					if (!length2 || size2 < 1) {
						return [];
					}
					var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length2 / size2));
					while (index < length2) {
						result2[resIndex++] = baseSlice(array, index, index += size2);
					}
					return result2;
				}
				function compact(array) {
					var index = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result2 = [];
					while (++index < length2) {
						var value = array[index];
						if (value) {
							result2[resIndex++] = value;
						}
					}
					return result2;
				}
				function concat() {
					var length2 = arguments.length;
					if (!length2) {
						return [];
					}
					var args = Array2(length2 - 1), array = arguments[0], index = length2;
					while (index--) {
						args[index - 1] = arguments[index];
					}
					return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
				}
				var difference = baseRest(function(array, values2) {
					return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
				});
				var differenceBy = baseRest(function(array, values2) {
					var iteratee2 = last(values2);
					if (isArrayLikeObject(iteratee2)) {
						iteratee2 = undefined$1;
					}
					return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
				});
				var differenceWith = baseRest(function(array, values2) {
					var comparator = last(values2);
					if (isArrayLikeObject(comparator)) {
						comparator = undefined$1;
					}
					return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
				});
				function drop(array, n2, guard) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return [];
					}
					n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
					return baseSlice(array, n2 < 0 ? 0 : n2, length2);
				}
				function dropRight(array, n2, guard) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return [];
					}
					n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
					n2 = length2 - n2;
					return baseSlice(array, 0, n2 < 0 ? 0 : n2);
				}
				function dropRightWhile(array, predicate) {
					return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
				}
				function dropWhile(array, predicate) {
					return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
				}
				function fill(array, value, start, end) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return [];
					}
					if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
						start = 0;
						end = length2;
					}
					return baseFill(array, value, start, end);
				}
				function findIndex(array, predicate, fromIndex) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return -1;
					}
					var index = fromIndex == null ? 0 : toInteger(fromIndex);
					if (index < 0) {
						index = nativeMax(length2 + index, 0);
					}
					return baseFindIndex(array, getIteratee(predicate, 3), index);
				}
				function findLastIndex(array, predicate, fromIndex) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return -1;
					}
					var index = length2 - 1;
					if (fromIndex !== undefined$1) {
						index = toInteger(fromIndex);
						index = fromIndex < 0 ? nativeMax(length2 + index, 0) : nativeMin(index, length2 - 1);
					}
					return baseFindIndex(array, getIteratee(predicate, 3), index, true);
				}
				function flatten(array) {
					var length2 = array == null ? 0 : array.length;
					return length2 ? baseFlatten(array, 1) : [];
				}
				function flattenDeep(array) {
					var length2 = array == null ? 0 : array.length;
					return length2 ? baseFlatten(array, INFINITY) : [];
				}
				function flattenDepth(array, depth) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return [];
					}
					depth = depth === undefined$1 ? 1 : toInteger(depth);
					return baseFlatten(array, depth);
				}
				function fromPairs(pairs) {
					var index = -1, length2 = pairs == null ? 0 : pairs.length, result2 = {};
					while (++index < length2) {
						var pair = pairs[index];
						result2[pair[0]] = pair[1];
					}
					return result2;
				}
				function head(array) {
					return array && array.length ? array[0] : undefined$1;
				}
				function indexOf(array, value, fromIndex) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return -1;
					}
					var index = fromIndex == null ? 0 : toInteger(fromIndex);
					if (index < 0) {
						index = nativeMax(length2 + index, 0);
					}
					return baseIndexOf(array, value, index);
				}
				function initial(array) {
					var length2 = array == null ? 0 : array.length;
					return length2 ? baseSlice(array, 0, -1) : [];
				}
				var intersection = baseRest(function(arrays) {
					var mapped = arrayMap(arrays, castArrayLikeObject);
					return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
				});
				var intersectionBy = baseRest(function(arrays) {
					var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
					if (iteratee2 === last(mapped)) {
						iteratee2 = undefined$1;
					} else {
						mapped.pop();
					}
					return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
				});
				var intersectionWith = baseRest(function(arrays) {
					var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
					comparator = typeof comparator == "function" ? comparator : undefined$1;
					if (comparator) {
						mapped.pop();
					}
					return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
				});
				function join(array, separator) {
					return array == null ? "" : nativeJoin.call(array, separator);
				}
				function last(array) {
					var length2 = array == null ? 0 : array.length;
					return length2 ? array[length2 - 1] : undefined$1;
				}
				function lastIndexOf(array, value, fromIndex) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return -1;
					}
					var index = length2;
					if (fromIndex !== undefined$1) {
						index = toInteger(fromIndex);
						index = index < 0 ? nativeMax(length2 + index, 0) : nativeMin(index, length2 - 1);
					}
					return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
				}
				function nth(array, n2) {
					return array && array.length ? baseNth(array, toInteger(n2)) : undefined$1;
				}
				var pull = baseRest(pullAll);
				function pullAll(array, values2) {
					return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
				}
				function pullAllBy(array, values2, iteratee2) {
					return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
				}
				function pullAllWith(array, values2, comparator) {
					return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
				}
				var pullAt = flatRest(function(array, indexes) {
					var length2 = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
					basePullAt(array, arrayMap(indexes, function(index) {
						return isIndex(index, length2) ? +index : index;
					}).sort(compareAscending));
					return result2;
				});
				function remove(array, predicate) {
					var result2 = [];
					if (!(array && array.length)) {
						return result2;
					}
					var index = -1, indexes = [], length2 = array.length;
					predicate = getIteratee(predicate, 3);
					while (++index < length2) {
						var value = array[index];
						if (predicate(value, index, array)) {
							result2.push(value);
							indexes.push(index);
						}
					}
					basePullAt(array, indexes);
					return result2;
				}
				function reverse(array) {
					return array == null ? array : nativeReverse.call(array);
				}
				function slice2(array, start, end) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return [];
					}
					if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
						start = 0;
						end = length2;
					} else {
						start = start == null ? 0 : toInteger(start);
						end = end === undefined$1 ? length2 : toInteger(end);
					}
					return baseSlice(array, start, end);
				}
				function sortedIndex(array, value) {
					return baseSortedIndex(array, value);
				}
				function sortedIndexBy(array, value, iteratee2) {
					return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
				}
				function sortedIndexOf(array, value) {
					var length2 = array == null ? 0 : array.length;
					if (length2) {
						var index = baseSortedIndex(array, value);
						if (index < length2 && eq(array[index], value)) {
							return index;
						}
					}
					return -1;
				}
				function sortedLastIndex(array, value) {
					return baseSortedIndex(array, value, true);
				}
				function sortedLastIndexBy(array, value, iteratee2) {
					return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
				}
				function sortedLastIndexOf(array, value) {
					var length2 = array == null ? 0 : array.length;
					if (length2) {
						var index = baseSortedIndex(array, value, true) - 1;
						if (eq(array[index], value)) {
							return index;
						}
					}
					return -1;
				}
				function sortedUniq(array) {
					return array && array.length ? baseSortedUniq(array) : [];
				}
				function sortedUniqBy(array, iteratee2) {
					return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
				}
				function tail(array) {
					var length2 = array == null ? 0 : array.length;
					return length2 ? baseSlice(array, 1, length2) : [];
				}
				function take(array, n2, guard) {
					if (!(array && array.length)) {
						return [];
					}
					n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
					return baseSlice(array, 0, n2 < 0 ? 0 : n2);
				}
				function takeRight(array, n2, guard) {
					var length2 = array == null ? 0 : array.length;
					if (!length2) {
						return [];
					}
					n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
					n2 = length2 - n2;
					return baseSlice(array, n2 < 0 ? 0 : n2, length2);
				}
				function takeRightWhile(array, predicate) {
					return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
				}
				function takeWhile(array, predicate) {
					return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
				}
				var union = baseRest(function(arrays) {
					return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
				});
				var unionBy = baseRest(function(arrays) {
					var iteratee2 = last(arrays);
					if (isArrayLikeObject(iteratee2)) {
						iteratee2 = undefined$1;
					}
					return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
				});
				var unionWith = baseRest(function(arrays) {
					var comparator = last(arrays);
					comparator = typeof comparator == "function" ? comparator : undefined$1;
					return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
				});
				function uniq(array) {
					return array && array.length ? baseUniq(array) : [];
				}
				function uniqBy(array, iteratee2) {
					return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
				}
				function uniqWith(array, comparator) {
					comparator = typeof comparator == "function" ? comparator : undefined$1;
					return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
				}
				function unzip(array) {
					if (!(array && array.length)) {
						return [];
					}
					var length2 = 0;
					array = arrayFilter(array, function(group) {
						if (isArrayLikeObject(group)) {
							length2 = nativeMax(group.length, length2);
							return true;
						}
					});
					return baseTimes(length2, function(index) {
						return arrayMap(array, baseProperty(index));
					});
				}
				function unzipWith(array, iteratee2) {
					if (!(array && array.length)) {
						return [];
					}
					var result2 = unzip(array);
					if (iteratee2 == null) {
						return result2;
					}
					return arrayMap(result2, function(group) {
						return apply(iteratee2, undefined$1, group);
					});
				}
				var without = baseRest(function(array, values2) {
					return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
				});
				var xor = baseRest(function(arrays) {
					return baseXor(arrayFilter(arrays, isArrayLikeObject));
				});
				var xorBy = baseRest(function(arrays) {
					var iteratee2 = last(arrays);
					if (isArrayLikeObject(iteratee2)) {
						iteratee2 = undefined$1;
					}
					return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
				});
				var xorWith = baseRest(function(arrays) {
					var comparator = last(arrays);
					comparator = typeof comparator == "function" ? comparator : undefined$1;
					return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
				});
				var zip = baseRest(unzip);
				function zipObject(props, values2) {
					return baseZipObject(props || [], values2 || [], assignValue);
				}
				function zipObjectDeep(props, values2) {
					return baseZipObject(props || [], values2 || [], baseSet);
				}
				var zipWith = baseRest(function(arrays) {
					var length2 = arrays.length, iteratee2 = length2 > 1 ? arrays[length2 - 1] : undefined$1;
					iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
					return unzipWith(arrays, iteratee2);
				});
				function chain(value) {
					var result2 = lodash2(value);
					result2.__chain__ = true;
					return result2;
				}
				function tap(value, interceptor) {
					interceptor(value);
					return value;
				}
				function thru(value, interceptor) {
					return interceptor(value);
				}
				var wrapperAt = flatRest(function(paths) {
					var length2 = paths.length, start = length2 ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
						return baseAt(object, paths);
					};
					if (length2 > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
						return this.thru(interceptor);
					}
					value = value.slice(start, +start + (length2 ? 1 : 0));
					value.__actions__.push({
						"func": thru,
						"args": [interceptor],
						"thisArg": undefined$1
					});
					return new LodashWrapper(value, this.__chain__).thru(function(array) {
						if (length2 && !array.length) {
							array.push(undefined$1);
						}
						return array;
					});
				});
				function wrapperChain() {
					return chain(this);
				}
				function wrapperCommit() {
					return new LodashWrapper(this.value(), this.__chain__);
				}
				function wrapperNext() {
					if (this.__values__ === undefined$1) {
						this.__values__ = toArray(this.value());
					}
					var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
					return { "done": done, "value": value };
				}
				function wrapperToIterator() {
					return this;
				}
				function wrapperPlant(value) {
					var result2, parent2 = this;
					while (parent2 instanceof baseLodash) {
						var clone2 = wrapperClone(parent2);
						clone2.__index__ = 0;
						clone2.__values__ = undefined$1;
						if (result2) {
							previous.__wrapped__ = clone2;
						} else {
							result2 = clone2;
						}
						var previous = clone2;
						parent2 = parent2.__wrapped__;
					}
					previous.__wrapped__ = value;
					return result2;
				}
				function wrapperReverse() {
					var value = this.__wrapped__;
					if (value instanceof LazyWrapper) {
						var wrapped = value;
						if (this.__actions__.length) {
							wrapped = new LazyWrapper(this);
						}
						wrapped = wrapped.reverse();
						wrapped.__actions__.push({
							"func": thru,
							"args": [reverse],
							"thisArg": undefined$1
						});
						return new LodashWrapper(wrapped, this.__chain__);
					}
					return this.thru(reverse);
				}
				function wrapperValue() {
					return baseWrapperValue(this.__wrapped__, this.__actions__);
				}
				var countBy = createAggregator(function(result2, value, key) {
					if (hasOwnProperty2.call(result2, key)) {
						++result2[key];
					} else {
						baseAssignValue(result2, key, 1);
					}
				});
				function every(collection, predicate, guard) {
					var func = isArray(collection) ? arrayEvery : baseEvery;
					if (guard && isIterateeCall(collection, predicate, guard)) {
						predicate = undefined$1;
					}
					return func(collection, getIteratee(predicate, 3));
				}
				function filter(collection, predicate) {
					var func = isArray(collection) ? arrayFilter : baseFilter;
					return func(collection, getIteratee(predicate, 3));
				}
				var find = createFind(findIndex);
				var findLast = createFind(findLastIndex);
				function flatMap(collection, iteratee2) {
					return baseFlatten(map(collection, iteratee2), 1);
				}
				function flatMapDeep(collection, iteratee2) {
					return baseFlatten(map(collection, iteratee2), INFINITY);
				}
				function flatMapDepth(collection, iteratee2, depth) {
					depth = depth === undefined$1 ? 1 : toInteger(depth);
					return baseFlatten(map(collection, iteratee2), depth);
				}
				function forEach(collection, iteratee2) {
					var func = isArray(collection) ? arrayEach : baseEach;
					return func(collection, getIteratee(iteratee2, 3));
				}
				function forEachRight(collection, iteratee2) {
					var func = isArray(collection) ? arrayEachRight : baseEachRight;
					return func(collection, getIteratee(iteratee2, 3));
				}
				var groupBy = createAggregator(function(result2, value, key) {
					if (hasOwnProperty2.call(result2, key)) {
						result2[key].push(value);
					} else {
						baseAssignValue(result2, key, [value]);
					}
				});
				function includes(collection, value, fromIndex, guard) {
					collection = isArrayLike(collection) ? collection : values(collection);
					fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
					var length2 = collection.length;
					if (fromIndex < 0) {
						fromIndex = nativeMax(length2 + fromIndex, 0);
					}
					return isString(collection) ? fromIndex <= length2 && collection.indexOf(value, fromIndex) > -1 : !!length2 && baseIndexOf(collection, value, fromIndex) > -1;
				}
				var invokeMap = baseRest(function(collection, path, args) {
					var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
					baseEach(collection, function(value) {
						result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
					});
					return result2;
				});
				var keyBy = createAggregator(function(result2, value, key) {
					baseAssignValue(result2, key, value);
				});
				function map(collection, iteratee2) {
					var func = isArray(collection) ? arrayMap : baseMap;
					return func(collection, getIteratee(iteratee2, 3));
				}
				function orderBy(collection, iteratees, orders, guard) {
					if (collection == null) {
						return [];
					}
					if (!isArray(iteratees)) {
						iteratees = iteratees == null ? [] : [iteratees];
					}
					orders = guard ? undefined$1 : orders;
					if (!isArray(orders)) {
						orders = orders == null ? [] : [orders];
					}
					return baseOrderBy(collection, iteratees, orders);
				}
				var partition = createAggregator(function(result2, value, key) {
					result2[key ? 0 : 1].push(value);
				}, function() {
					return [[], []];
				});
				function reduce(collection, iteratee2, accumulator) {
					var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
					return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
				}
				function reduceRight(collection, iteratee2, accumulator) {
					var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
					return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
				}
				function reject(collection, predicate) {
					var func = isArray(collection) ? arrayFilter : baseFilter;
					return func(collection, negate(getIteratee(predicate, 3)));
				}
				function sample(collection) {
					var func = isArray(collection) ? arraySample : baseSample;
					return func(collection);
				}
				function sampleSize(collection, n2, guard) {
					if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined$1) {
						n2 = 1;
					} else {
						n2 = toInteger(n2);
					}
					var func = isArray(collection) ? arraySampleSize : baseSampleSize;
					return func(collection, n2);
				}
				function shuffle(collection) {
					var func = isArray(collection) ? arrayShuffle : baseShuffle;
					return func(collection);
				}
				function size(collection) {
					if (collection == null) {
						return 0;
					}
					if (isArrayLike(collection)) {
						return isString(collection) ? stringSize(collection) : collection.length;
					}
					var tag = getTag(collection);
					if (tag == mapTag || tag == setTag) {
						return collection.size;
					}
					return baseKeys(collection).length;
				}
				function some(collection, predicate, guard) {
					var func = isArray(collection) ? arraySome : baseSome;
					if (guard && isIterateeCall(collection, predicate, guard)) {
						predicate = undefined$1;
					}
					return func(collection, getIteratee(predicate, 3));
				}
				var sortBy = baseRest(function(collection, iteratees) {
					if (collection == null) {
						return [];
					}
					var length2 = iteratees.length;
					if (length2 > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
						iteratees = [];
					} else if (length2 > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
						iteratees = [iteratees[0]];
					}
					return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
				});
				var now2 = ctxNow || function() {
					return root.Date.now();
				};
				function after(n2, func) {
					if (typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					n2 = toInteger(n2);
					return function() {
						if (--n2 < 1) {
							return func.apply(this, arguments);
						}
					};
				}
				function ary(func, n2, guard) {
					n2 = guard ? undefined$1 : n2;
					n2 = func && n2 == null ? func.length : n2;
					return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n2);
				}
				function before(n2, func) {
					var result2;
					if (typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					n2 = toInteger(n2);
					return function() {
						if (--n2 > 0) {
							result2 = func.apply(this, arguments);
						}
						if (n2 <= 1) {
							func = undefined$1;
						}
						return result2;
					};
				}
				var bind = baseRest(function(func, thisArg, partials) {
					var bitmask = WRAP_BIND_FLAG;
					if (partials.length) {
						var holders = replaceHolders(partials, getHolder(bind));
						bitmask |= WRAP_PARTIAL_FLAG;
					}
					return createWrap(func, bitmask, thisArg, partials, holders);
				});
				var bindKey = baseRest(function(object, key, partials) {
					var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
					if (partials.length) {
						var holders = replaceHolders(partials, getHolder(bindKey));
						bitmask |= WRAP_PARTIAL_FLAG;
					}
					return createWrap(key, bitmask, object, partials, holders);
				});
				function curry(func, arity, guard) {
					arity = guard ? undefined$1 : arity;
					var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
					result2.placeholder = curry.placeholder;
					return result2;
				}
				function curryRight(func, arity, guard) {
					arity = guard ? undefined$1 : arity;
					var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
					result2.placeholder = curryRight.placeholder;
					return result2;
				}
				function debounce(func, wait, options) {
					var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
					if (typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					wait = toNumber(wait) || 0;
					if (isObject2(options)) {
						leading = !!options.leading;
						maxing = "maxWait" in options;
						maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
						trailing = "trailing" in options ? !!options.trailing : trailing;
					}
					function invokeFunc(time) {
						var args = lastArgs, thisArg = lastThis;
						lastArgs = lastThis = undefined$1;
						lastInvokeTime = time;
						result2 = func.apply(thisArg, args);
						return result2;
					}
					function leadingEdge(time) {
						lastInvokeTime = time;
						timerId = setTimeout2(timerExpired, wait);
						return leading ? invokeFunc(time) : result2;
					}
					function remainingWait(time) {
						var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
						return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
					}
					function shouldInvoke(time) {
						var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
						return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
					}
					function timerExpired() {
						var time = now2();
						if (shouldInvoke(time)) {
							return trailingEdge(time);
						}
						timerId = setTimeout2(timerExpired, remainingWait(time));
					}
					function trailingEdge(time) {
						timerId = undefined$1;
						if (trailing && lastArgs) {
							return invokeFunc(time);
						}
						lastArgs = lastThis = undefined$1;
						return result2;
					}
					function cancel() {
						if (timerId !== undefined$1) {
							clearTimeout2(timerId);
						}
						lastInvokeTime = 0;
						lastArgs = lastCallTime = lastThis = timerId = undefined$1;
					}
					function flush() {
						return timerId === undefined$1 ? result2 : trailingEdge(now2());
					}
					function debounced() {
						var time = now2(), isInvoking = shouldInvoke(time);
						lastArgs = arguments;
						lastThis = this;
						lastCallTime = time;
						if (isInvoking) {
							if (timerId === undefined$1) {
								return leadingEdge(lastCallTime);
							}
							if (maxing) {
								clearTimeout2(timerId);
								timerId = setTimeout2(timerExpired, wait);
								return invokeFunc(lastCallTime);
							}
						}
						if (timerId === undefined$1) {
							timerId = setTimeout2(timerExpired, wait);
						}
						return result2;
					}
					debounced.cancel = cancel;
					debounced.flush = flush;
					return debounced;
				}
				var defer = baseRest(function(func, args) {
					return baseDelay(func, 1, args);
				});
				var delay = baseRest(function(func, wait, args) {
					return baseDelay(func, toNumber(wait) || 0, args);
				});
				function flip(func) {
					return createWrap(func, WRAP_FLIP_FLAG);
				}
				function memoize2(func, resolver) {
					if (typeof func != "function" || resolver != null && typeof resolver != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					var memoized = function() {
						var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
						if (cache.has(key)) {
							return cache.get(key);
						}
						var result2 = func.apply(this, args);
						memoized.cache = cache.set(key, result2) || cache;
						return result2;
					};
					memoized.cache = new (memoize2.Cache || MapCache)();
					return memoized;
				}
				memoize2.Cache = MapCache;
				function negate(predicate) {
					if (typeof predicate != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					return function() {
						var args = arguments;
						switch (args.length) {
							case 0:
								return !predicate.call(this);
							case 1:
								return !predicate.call(this, args[0]);
							case 2:
								return !predicate.call(this, args[0], args[1]);
							case 3:
								return !predicate.call(this, args[0], args[1], args[2]);
						}
						return !predicate.apply(this, args);
					};
				}
				function once(func) {
					return before(2, func);
				}
				var overArgs = castRest(function(func, transforms) {
					transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
					var funcsLength = transforms.length;
					return baseRest(function(args) {
						var index = -1, length2 = nativeMin(args.length, funcsLength);
						while (++index < length2) {
							args[index] = transforms[index].call(this, args[index]);
						}
						return apply(func, this, args);
					});
				});
				var partial = baseRest(function(func, partials) {
					var holders = replaceHolders(partials, getHolder(partial));
					return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
				});
				var partialRight = baseRest(function(func, partials) {
					var holders = replaceHolders(partials, getHolder(partialRight));
					return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
				});
				var rearg = flatRest(function(func, indexes) {
					return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
				});
				function rest(func, start) {
					if (typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					start = start === undefined$1 ? start : toInteger(start);
					return baseRest(func, start);
				}
				function spread(func, start) {
					if (typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					start = start == null ? 0 : nativeMax(toInteger(start), 0);
					return baseRest(function(args) {
						var array = args[start], otherArgs = castSlice(args, 0, start);
						if (array) {
							arrayPush(otherArgs, array);
						}
						return apply(func, this, otherArgs);
					});
				}
				function throttle(func, wait, options) {
					var leading = true, trailing = true;
					if (typeof func != "function") {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					if (isObject2(options)) {
						leading = "leading" in options ? !!options.leading : leading;
						trailing = "trailing" in options ? !!options.trailing : trailing;
					}
					return debounce(func, wait, {
						"leading": leading,
						"maxWait": wait,
						"trailing": trailing
					});
				}
				function unary(func) {
					return ary(func, 1);
				}
				function wrap(value, wrapper) {
					return partial(castFunction(wrapper), value);
				}
				function castArray() {
					if (!arguments.length) {
						return [];
					}
					var value = arguments[0];
					return isArray(value) ? value : [value];
				}
				function clone(value) {
					return baseClone(value, CLONE_SYMBOLS_FLAG);
				}
				function cloneWith(value, customizer) {
					customizer = typeof customizer == "function" ? customizer : undefined$1;
					return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
				}
				function cloneDeep(value) {
					return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
				}
				function cloneDeepWith(value, customizer) {
					customizer = typeof customizer == "function" ? customizer : undefined$1;
					return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
				}
				function conformsTo(object, source) {
					return source == null || baseConformsTo(object, source, keys(source));
				}
				function eq(value, other) {
					return value === other || value !== value && other !== other;
				}
				var gt = createRelationalOperation(baseGt);
				var gte = createRelationalOperation(function(value, other) {
					return value >= other;
				});
				var isArguments = baseIsArguments(function() {
					return arguments;
				}()) ? baseIsArguments : function(value) {
					return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
				};
				var isArray = Array2.isArray;
				var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
				function isArrayLike(value) {
					return value != null && isLength(value.length) && !isFunction(value);
				}
				function isArrayLikeObject(value) {
					return isObjectLike(value) && isArrayLike(value);
				}
				function isBoolean(value) {
					return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
				}
				var isBuffer = nativeIsBuffer || stubFalse;
				var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
				function isElement(value) {
					return isObjectLike(value) && value.nodeType === 1 && !isPlainObject2(value);
				}
				function isEmpty(value) {
					if (value == null) {
						return true;
					}
					if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
						return !value.length;
					}
					var tag = getTag(value);
					if (tag == mapTag || tag == setTag) {
						return !value.size;
					}
					if (isPrototype(value)) {
						return !baseKeys(value).length;
					}
					for (var key in value) {
						if (hasOwnProperty2.call(value, key)) {
							return false;
						}
					}
					return true;
				}
				function isEqual(value, other) {
					return baseIsEqual(value, other);
				}
				function isEqualWith(value, other, customizer) {
					customizer = typeof customizer == "function" ? customizer : undefined$1;
					var result2 = customizer ? customizer(value, other) : undefined$1;
					return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
				}
				function isError(value) {
					if (!isObjectLike(value)) {
						return false;
					}
					var tag = baseGetTag(value);
					return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject2(value);
				}
				function isFinite(value) {
					return typeof value == "number" && nativeIsFinite(value);
				}
				function isFunction(value) {
					if (!isObject2(value)) {
						return false;
					}
					var tag = baseGetTag(value);
					return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
				}
				function isInteger(value) {
					return typeof value == "number" && value == toInteger(value);
				}
				function isLength(value) {
					return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
				}
				function isObject2(value) {
					var type = typeof value;
					return value != null && (type == "object" || type == "function");
				}
				function isObjectLike(value) {
					return value != null && typeof value == "object";
				}
				var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
				function isMatch(object, source) {
					return object === source || baseIsMatch(object, source, getMatchData(source));
				}
				function isMatchWith(object, source, customizer) {
					customizer = typeof customizer == "function" ? customizer : undefined$1;
					return baseIsMatch(object, source, getMatchData(source), customizer);
				}
				function isNaN2(value) {
					return isNumber(value) && value != +value;
				}
				function isNative(value) {
					if (isMaskable(value)) {
						throw new Error2(CORE_ERROR_TEXT);
					}
					return baseIsNative(value);
				}
				function isNull(value) {
					return value === null;
				}
				function isNil(value) {
					return value == null;
				}
				function isNumber(value) {
					return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
				}
				function isPlainObject2(value) {
					if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
						return false;
					}
					var proto = getPrototype(value);
					if (proto === null) {
						return true;
					}
					var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
					return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
				}
				var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
				function isSafeInteger(value) {
					return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
				}
				var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
				function isString(value) {
					return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
				}
				function isSymbol(value) {
					return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
				}
				var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
				function isUndefined(value) {
					return value === undefined$1;
				}
				function isWeakMap(value) {
					return isObjectLike(value) && getTag(value) == weakMapTag;
				}
				function isWeakSet(value) {
					return isObjectLike(value) && baseGetTag(value) == weakSetTag;
				}
				var lt = createRelationalOperation(baseLt);
				var lte = createRelationalOperation(function(value, other) {
					return value <= other;
				});
				function toArray(value) {
					if (!value) {
						return [];
					}
					if (isArrayLike(value)) {
						return isString(value) ? stringToArray(value) : copyArray(value);
					}
					if (symIterator && value[symIterator]) {
						return iteratorToArray(value[symIterator]());
					}
					var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
					return func(value);
				}
				function toFinite(value) {
					if (!value) {
						return value === 0 ? value : 0;
					}
					value = toNumber(value);
					if (value === INFINITY || value === -INFINITY) {
						var sign = value < 0 ? -1 : 1;
						return sign * MAX_INTEGER;
					}
					return value === value ? value : 0;
				}
				function toInteger(value) {
					var result2 = toFinite(value), remainder = result2 % 1;
					return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
				}
				function toLength(value) {
					return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
				}
				function toNumber(value) {
					if (typeof value == "number") {
						return value;
					}
					if (isSymbol(value)) {
						return NAN;
					}
					if (isObject2(value)) {
						var other = typeof value.valueOf == "function" ? value.valueOf() : value;
						value = isObject2(other) ? other + "" : other;
					}
					if (typeof value != "string") {
						return value === 0 ? value : +value;
					}
					value = baseTrim(value);
					var isBinary = reIsBinary.test(value);
					return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
				}
				function toPlainObject(value) {
					return copyObject(value, keysIn(value));
				}
				function toSafeInteger(value) {
					return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
				}
				function toString(value) {
					return value == null ? "" : baseToString(value);
				}
				var assign2 = createAssigner(function(object, source) {
					if (isPrototype(source) || isArrayLike(source)) {
						copyObject(source, keys(source), object);
						return;
					}
					for (var key in source) {
						if (hasOwnProperty2.call(source, key)) {
							assignValue(object, key, source[key]);
						}
					}
				});
				var assignIn = createAssigner(function(object, source) {
					copyObject(source, keysIn(source), object);
				});
				var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
					copyObject(source, keysIn(source), object, customizer);
				});
				var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
					copyObject(source, keys(source), object, customizer);
				});
				var at = flatRest(baseAt);
				function create(prototype, properties) {
					var result2 = baseCreate(prototype);
					return properties == null ? result2 : baseAssign(result2, properties);
				}
				var defaults2 = baseRest(function(object, sources) {
					object = Object2(object);
					var index = -1;
					var length2 = sources.length;
					var guard = length2 > 2 ? sources[2] : undefined$1;
					if (guard && isIterateeCall(sources[0], sources[1], guard)) {
						length2 = 1;
					}
					while (++index < length2) {
						var source = sources[index];
						var props = keysIn(source);
						var propsIndex = -1;
						var propsLength = props.length;
						while (++propsIndex < propsLength) {
							var key = props[propsIndex];
							var value = object[key];
							if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty2.call(object, key)) {
								object[key] = source[key];
							}
						}
					}
					return object;
				});
				var defaultsDeep = baseRest(function(args) {
					args.push(undefined$1, customDefaultsMerge);
					return apply(mergeWith, undefined$1, args);
				});
				function findKey(object, predicate) {
					return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
				}
				function findLastKey(object, predicate) {
					return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
				}
				function forIn(object, iteratee2) {
					return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
				}
				function forInRight(object, iteratee2) {
					return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
				}
				function forOwn(object, iteratee2) {
					return object && baseForOwn(object, getIteratee(iteratee2, 3));
				}
				function forOwnRight(object, iteratee2) {
					return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
				}
				function functions(object) {
					return object == null ? [] : baseFunctions(object, keys(object));
				}
				function functionsIn(object) {
					return object == null ? [] : baseFunctions(object, keysIn(object));
				}
				function get(object, path, defaultValue) {
					var result2 = object == null ? undefined$1 : baseGet(object, path);
					return result2 === undefined$1 ? defaultValue : result2;
				}
				function has(object, path) {
					return object != null && hasPath(object, path, baseHas);
				}
				function hasIn(object, path) {
					return object != null && hasPath(object, path, baseHasIn);
				}
				var invert = createInverter(function(result2, value, key) {
					if (value != null && typeof value.toString != "function") {
						value = nativeObjectToString.call(value);
					}
					result2[value] = key;
				}, constant(identity));
				var invertBy = createInverter(function(result2, value, key) {
					if (value != null && typeof value.toString != "function") {
						value = nativeObjectToString.call(value);
					}
					if (hasOwnProperty2.call(result2, value)) {
						result2[value].push(key);
					} else {
						result2[value] = [key];
					}
				}, getIteratee);
				var invoke = baseRest(baseInvoke);
				function keys(object) {
					return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
				}
				function keysIn(object) {
					return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
				}
				function mapKeys(object, iteratee2) {
					var result2 = {};
					iteratee2 = getIteratee(iteratee2, 3);
					baseForOwn(object, function(value, key, object2) {
						baseAssignValue(result2, iteratee2(value, key, object2), value);
					});
					return result2;
				}
				function mapValues(object, iteratee2) {
					var result2 = {};
					iteratee2 = getIteratee(iteratee2, 3);
					baseForOwn(object, function(value, key, object2) {
						baseAssignValue(result2, key, iteratee2(value, key, object2));
					});
					return result2;
				}
				var merge = createAssigner(function(object, source, srcIndex) {
					baseMerge(object, source, srcIndex);
				});
				var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
					baseMerge(object, source, srcIndex, customizer);
				});
				var omit = flatRest(function(object, paths) {
					var result2 = {};
					if (object == null) {
						return result2;
					}
					var isDeep = false;
					paths = arrayMap(paths, function(path) {
						path = castPath(path, object);
						isDeep || (isDeep = path.length > 1);
						return path;
					});
					copyObject(object, getAllKeysIn(object), result2);
					if (isDeep) {
						result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
					}
					var length2 = paths.length;
					while (length2--) {
						baseUnset(result2, paths[length2]);
					}
					return result2;
				});
				function omitBy(object, predicate) {
					return pickBy(object, negate(getIteratee(predicate)));
				}
				var pick = flatRest(function(object, paths) {
					return object == null ? {} : basePick(object, paths);
				});
				function pickBy(object, predicate) {
					if (object == null) {
						return {};
					}
					var props = arrayMap(getAllKeysIn(object), function(prop) {
						return [prop];
					});
					predicate = getIteratee(predicate);
					return basePickBy(object, props, function(value, path) {
						return predicate(value, path[0]);
					});
				}
				function result(object, path, defaultValue) {
					path = castPath(path, object);
					var index = -1, length2 = path.length;
					if (!length2) {
						length2 = 1;
						object = undefined$1;
					}
					while (++index < length2) {
						var value = object == null ? undefined$1 : object[toKey(path[index])];
						if (value === undefined$1) {
							index = length2;
							value = defaultValue;
						}
						object = isFunction(value) ? value.call(object) : value;
					}
					return object;
				}
				function set(object, path, value) {
					return object == null ? object : baseSet(object, path, value);
				}
				function setWith(object, path, value, customizer) {
					customizer = typeof customizer == "function" ? customizer : undefined$1;
					return object == null ? object : baseSet(object, path, value, customizer);
				}
				var toPairs = createToPairs(keys);
				var toPairsIn = createToPairs(keysIn);
				function transform(object, iteratee2, accumulator) {
					var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
					iteratee2 = getIteratee(iteratee2, 4);
					if (accumulator == null) {
						var Ctor = object && object.constructor;
						if (isArrLike) {
							accumulator = isArr ? new Ctor() : [];
						} else if (isObject2(object)) {
							accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
						} else {
							accumulator = {};
						}
					}
					(isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
						return iteratee2(accumulator, value, index, object2);
					});
					return accumulator;
				}
				function unset(object, path) {
					return object == null ? true : baseUnset(object, path);
				}
				function update2(object, path, updater) {
					return object == null ? object : baseUpdate(object, path, castFunction(updater));
				}
				function updateWith(object, path, updater, customizer) {
					customizer = typeof customizer == "function" ? customizer : undefined$1;
					return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
				}
				function values(object) {
					return object == null ? [] : baseValues(object, keys(object));
				}
				function valuesIn(object) {
					return object == null ? [] : baseValues(object, keysIn(object));
				}
				function clamp(number, lower, upper) {
					if (upper === undefined$1) {
						upper = lower;
						lower = undefined$1;
					}
					if (upper !== undefined$1) {
						upper = toNumber(upper);
						upper = upper === upper ? upper : 0;
					}
					if (lower !== undefined$1) {
						lower = toNumber(lower);
						lower = lower === lower ? lower : 0;
					}
					return baseClamp(toNumber(number), lower, upper);
				}
				function inRange(number, start, end) {
					start = toFinite(start);
					if (end === undefined$1) {
						end = start;
						start = 0;
					} else {
						end = toFinite(end);
					}
					number = toNumber(number);
					return baseInRange(number, start, end);
				}
				function random(lower, upper, floating) {
					if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
						upper = floating = undefined$1;
					}
					if (floating === undefined$1) {
						if (typeof upper == "boolean") {
							floating = upper;
							upper = undefined$1;
						} else if (typeof lower == "boolean") {
							floating = lower;
							lower = undefined$1;
						}
					}
					if (lower === undefined$1 && upper === undefined$1) {
						lower = 0;
						upper = 1;
					} else {
						lower = toFinite(lower);
						if (upper === undefined$1) {
							upper = lower;
							lower = 0;
						} else {
							upper = toFinite(upper);
						}
					}
					if (lower > upper) {
						var temp = lower;
						lower = upper;
						upper = temp;
					}
					if (floating || lower % 1 || upper % 1) {
						var rand = nativeRandom();
						return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
					}
					return baseRandom(lower, upper);
				}
				var camelCase = createCompounder(function(result2, word, index) {
					word = word.toLowerCase();
					return result2 + (index ? capitalize(word) : word);
				});
				function capitalize(string) {
					return upperFirst(toString(string).toLowerCase());
				}
				function deburr(string) {
					string = toString(string);
					return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
				}
				function endsWith(string, target, position2) {
					string = toString(string);
					target = baseToString(target);
					var length2 = string.length;
					position2 = position2 === undefined$1 ? length2 : baseClamp(toInteger(position2), 0, length2);
					var end = position2;
					position2 -= target.length;
					return position2 >= 0 && string.slice(position2, end) == target;
				}
				function escape2(string) {
					string = toString(string);
					return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
				}
				function escapeRegExp(string) {
					string = toString(string);
					return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
				}
				var kebabCase = createCompounder(function(result2, word, index) {
					return result2 + (index ? "-" : "") + word.toLowerCase();
				});
				var lowerCase = createCompounder(function(result2, word, index) {
					return result2 + (index ? " " : "") + word.toLowerCase();
				});
				var lowerFirst = createCaseFirst("toLowerCase");
				function pad(string, length2, chars) {
					string = toString(string);
					length2 = toInteger(length2);
					var strLength = length2 ? stringSize(string) : 0;
					if (!length2 || strLength >= length2) {
						return string;
					}
					var mid = (length2 - strLength) / 2;
					return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
				}
				function padEnd(string, length2, chars) {
					string = toString(string);
					length2 = toInteger(length2);
					var strLength = length2 ? stringSize(string) : 0;
					return length2 && strLength < length2 ? string + createPadding(length2 - strLength, chars) : string;
				}
				function padStart(string, length2, chars) {
					string = toString(string);
					length2 = toInteger(length2);
					var strLength = length2 ? stringSize(string) : 0;
					return length2 && strLength < length2 ? createPadding(length2 - strLength, chars) + string : string;
				}
				function parseInt2(string, radix, guard) {
					if (guard || radix == null) {
						radix = 0;
					} else if (radix) {
						radix = +radix;
					}
					return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
				}
				function repeat(string, n2, guard) {
					if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined$1) {
						n2 = 1;
					} else {
						n2 = toInteger(n2);
					}
					return baseRepeat(toString(string), n2);
				}
				function replace2() {
					var args = arguments, string = toString(args[0]);
					return args.length < 3 ? string : string.replace(args[1], args[2]);
				}
				var snakeCase = createCompounder(function(result2, word, index) {
					return result2 + (index ? "_" : "") + word.toLowerCase();
				});
				function split(string, separator, limit) {
					if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
						separator = limit = undefined$1;
					}
					limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
					if (!limit) {
						return [];
					}
					string = toString(string);
					if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
						separator = baseToString(separator);
						if (!separator && hasUnicode(string)) {
							return castSlice(stringToArray(string), 0, limit);
						}
					}
					return string.split(separator, limit);
				}
				var startCase = createCompounder(function(result2, word, index) {
					return result2 + (index ? " " : "") + upperFirst(word);
				});
				function startsWith(string, target, position2) {
					string = toString(string);
					position2 = position2 == null ? 0 : baseClamp(toInteger(position2), 0, string.length);
					target = baseToString(target);
					return string.slice(position2, position2 + target.length) == target;
				}
				function template(string, options, guard) {
					var settings = lodash2.templateSettings;
					if (guard && isIterateeCall(string, options, guard)) {
						options = undefined$1;
					}
					string = toString(string);
					options = assignInWith({}, options, settings, customDefaultsAssignIn);
					var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
					var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
					var reDelimiters = RegExp2(
							(options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
							"g"
					);
					var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
					string.replace(reDelimiters, function(match2, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
						interpolateValue || (interpolateValue = esTemplateValue);
						source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
						if (escapeValue) {
							isEscaping = true;
							source += "' +\n__e(" + escapeValue + ") +\n'";
						}
						if (evaluateValue) {
							isEvaluating = true;
							source += "';\n" + evaluateValue + ";\n__p += '";
						}
						if (interpolateValue) {
							source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
						}
						index = offset + match2.length;
						return match2;
					});
					source += "';\n";
					var variable = hasOwnProperty2.call(options, "variable") && options.variable;
					if (!variable) {
						source = "with (obj) {\n" + source + "\n}\n";
					} else if (reForbiddenIdentifierChars.test(variable)) {
						throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
					}
					source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
					source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
					var result2 = attempt(function() {
						return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
					});
					result2.source = source;
					if (isError(result2)) {
						throw result2;
					}
					return result2;
				}
				function toLower(value) {
					return toString(value).toLowerCase();
				}
				function toUpper(value) {
					return toString(value).toUpperCase();
				}
				function trim2(string, chars, guard) {
					string = toString(string);
					if (string && (guard || chars === undefined$1)) {
						return baseTrim(string);
					}
					if (!string || !(chars = baseToString(chars))) {
						return string;
					}
					var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
					return castSlice(strSymbols, start, end).join("");
				}
				function trimEnd(string, chars, guard) {
					string = toString(string);
					if (string && (guard || chars === undefined$1)) {
						return string.slice(0, trimmedEndIndex(string) + 1);
					}
					if (!string || !(chars = baseToString(chars))) {
						return string;
					}
					var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
					return castSlice(strSymbols, 0, end).join("");
				}
				function trimStart(string, chars, guard) {
					string = toString(string);
					if (string && (guard || chars === undefined$1)) {
						return string.replace(reTrimStart, "");
					}
					if (!string || !(chars = baseToString(chars))) {
						return string;
					}
					var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
					return castSlice(strSymbols, start).join("");
				}
				function truncate(string, options) {
					var length2 = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
					if (isObject2(options)) {
						var separator = "separator" in options ? options.separator : separator;
						length2 = "length" in options ? toInteger(options.length) : length2;
						omission = "omission" in options ? baseToString(options.omission) : omission;
					}
					string = toString(string);
					var strLength = string.length;
					if (hasUnicode(string)) {
						var strSymbols = stringToArray(string);
						strLength = strSymbols.length;
					}
					if (length2 >= strLength) {
						return string;
					}
					var end = length2 - stringSize(omission);
					if (end < 1) {
						return omission;
					}
					var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
					if (separator === undefined$1) {
						return result2 + omission;
					}
					if (strSymbols) {
						end += result2.length - end;
					}
					if (isRegExp(separator)) {
						if (string.slice(end).search(separator)) {
							var match2, substring = result2;
							if (!separator.global) {
								separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
							}
							separator.lastIndex = 0;
							while (match2 = separator.exec(substring)) {
								var newEnd = match2.index;
							}
							result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
						}
					} else if (string.indexOf(baseToString(separator), end) != end) {
						var index = result2.lastIndexOf(separator);
						if (index > -1) {
							result2 = result2.slice(0, index);
						}
					}
					return result2 + omission;
				}
				function unescape(string) {
					string = toString(string);
					return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
				}
				var upperCase = createCompounder(function(result2, word, index) {
					return result2 + (index ? " " : "") + word.toUpperCase();
				});
				var upperFirst = createCaseFirst("toUpperCase");
				function words(string, pattern, guard) {
					string = toString(string);
					pattern = guard ? undefined$1 : pattern;
					if (pattern === undefined$1) {
						return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
					}
					return string.match(pattern) || [];
				}
				var attempt = baseRest(function(func, args) {
					try {
						return apply(func, undefined$1, args);
					} catch (e2) {
						return isError(e2) ? e2 : new Error2(e2);
					}
				});
				var bindAll = flatRest(function(object, methodNames) {
					arrayEach(methodNames, function(key) {
						key = toKey(key);
						baseAssignValue(object, key, bind(object[key], object));
					});
					return object;
				});
				function cond(pairs) {
					var length2 = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
					pairs = !length2 ? [] : arrayMap(pairs, function(pair) {
						if (typeof pair[1] != "function") {
							throw new TypeError(FUNC_ERROR_TEXT);
						}
						return [toIteratee(pair[0]), pair[1]];
					});
					return baseRest(function(args) {
						var index = -1;
						while (++index < length2) {
							var pair = pairs[index];
							if (apply(pair[0], this, args)) {
								return apply(pair[1], this, args);
							}
						}
					});
				}
				function conforms(source) {
					return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
				}
				function constant(value) {
					return function() {
						return value;
					};
				}
				function defaultTo(value, defaultValue) {
					return value == null || value !== value ? defaultValue : value;
				}
				var flow = createFlow();
				var flowRight = createFlow(true);
				function identity(value) {
					return value;
				}
				function iteratee(func) {
					return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
				}
				function matches(source) {
					return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
				}
				function matchesProperty(path, srcValue) {
					return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
				}
				var method = baseRest(function(path, args) {
					return function(object) {
						return baseInvoke(object, path, args);
					};
				});
				var methodOf = baseRest(function(object, args) {
					return function(path) {
						return baseInvoke(object, path, args);
					};
				});
				function mixin(object, source, options) {
					var props = keys(source), methodNames = baseFunctions(source, props);
					if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
						options = source;
						source = object;
						object = this;
						methodNames = baseFunctions(source, keys(source));
					}
					var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
					arrayEach(methodNames, function(methodName) {
						var func = source[methodName];
						object[methodName] = func;
						if (isFunc) {
							object.prototype[methodName] = function() {
								var chainAll = this.__chain__;
								if (chain2 || chainAll) {
									var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
									actions.push({ "func": func, "args": arguments, "thisArg": object });
									result2.__chain__ = chainAll;
									return result2;
								}
								return func.apply(object, arrayPush([this.value()], arguments));
							};
						}
					});
					return object;
				}
				function noConflict() {
					if (root._ === this) {
						root._ = oldDash;
					}
					return this;
				}
				function noop2() {
				}
				function nthArg(n2) {
					n2 = toInteger(n2);
					return baseRest(function(args) {
						return baseNth(args, n2);
					});
				}
				var over = createOver(arrayMap);
				var overEvery = createOver(arrayEvery);
				var overSome = createOver(arraySome);
				function property(path) {
					return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
				}
				function propertyOf(object) {
					return function(path) {
						return object == null ? undefined$1 : baseGet(object, path);
					};
				}
				var range = createRange();
				var rangeRight = createRange(true);
				function stubArray() {
					return [];
				}
				function stubFalse() {
					return false;
				}
				function stubObject() {
					return {};
				}
				function stubString() {
					return "";
				}
				function stubTrue() {
					return true;
				}
				function times(n2, iteratee2) {
					n2 = toInteger(n2);
					if (n2 < 1 || n2 > MAX_SAFE_INTEGER) {
						return [];
					}
					var index = MAX_ARRAY_LENGTH, length2 = nativeMin(n2, MAX_ARRAY_LENGTH);
					iteratee2 = getIteratee(iteratee2);
					n2 -= MAX_ARRAY_LENGTH;
					var result2 = baseTimes(length2, iteratee2);
					while (++index < n2) {
						iteratee2(index);
					}
					return result2;
				}
				function toPath(value) {
					if (isArray(value)) {
						return arrayMap(value, toKey);
					}
					return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
				}
				function uniqueId(prefix2) {
					var id2 = ++idCounter;
					return toString(prefix2) + id2;
				}
				var add = createMathOperation(function(augend, addend) {
					return augend + addend;
				}, 0);
				var ceil = createRound("ceil");
				var divide = createMathOperation(function(dividend, divisor) {
					return dividend / divisor;
				}, 1);
				var floor = createRound("floor");
				function max(array) {
					return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
				}
				function maxBy(array, iteratee2) {
					return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
				}
				function mean(array) {
					return baseMean(array, identity);
				}
				function meanBy(array, iteratee2) {
					return baseMean(array, getIteratee(iteratee2, 2));
				}
				function min(array) {
					return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
				}
				function minBy(array, iteratee2) {
					return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
				}
				var multiply = createMathOperation(function(multiplier, multiplicand) {
					return multiplier * multiplicand;
				}, 1);
				var round = createRound("round");
				var subtract = createMathOperation(function(minuend, subtrahend) {
					return minuend - subtrahend;
				}, 0);
				function sum(array) {
					return array && array.length ? baseSum(array, identity) : 0;
				}
				function sumBy(array, iteratee2) {
					return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
				}
				lodash2.after = after;
				lodash2.ary = ary;
				lodash2.assign = assign2;
				lodash2.assignIn = assignIn;
				lodash2.assignInWith = assignInWith;
				lodash2.assignWith = assignWith;
				lodash2.at = at;
				lodash2.before = before;
				lodash2.bind = bind;
				lodash2.bindAll = bindAll;
				lodash2.bindKey = bindKey;
				lodash2.castArray = castArray;
				lodash2.chain = chain;
				lodash2.chunk = chunk;
				lodash2.compact = compact;
				lodash2.concat = concat;
				lodash2.cond = cond;
				lodash2.conforms = conforms;
				lodash2.constant = constant;
				lodash2.countBy = countBy;
				lodash2.create = create;
				lodash2.curry = curry;
				lodash2.curryRight = curryRight;
				lodash2.debounce = debounce;
				lodash2.defaults = defaults2;
				lodash2.defaultsDeep = defaultsDeep;
				lodash2.defer = defer;
				lodash2.delay = delay;
				lodash2.difference = difference;
				lodash2.differenceBy = differenceBy;
				lodash2.differenceWith = differenceWith;
				lodash2.drop = drop;
				lodash2.dropRight = dropRight;
				lodash2.dropRightWhile = dropRightWhile;
				lodash2.dropWhile = dropWhile;
				lodash2.fill = fill;
				lodash2.filter = filter;
				lodash2.flatMap = flatMap;
				lodash2.flatMapDeep = flatMapDeep;
				lodash2.flatMapDepth = flatMapDepth;
				lodash2.flatten = flatten;
				lodash2.flattenDeep = flattenDeep;
				lodash2.flattenDepth = flattenDepth;
				lodash2.flip = flip;
				lodash2.flow = flow;
				lodash2.flowRight = flowRight;
				lodash2.fromPairs = fromPairs;
				lodash2.functions = functions;
				lodash2.functionsIn = functionsIn;
				lodash2.groupBy = groupBy;
				lodash2.initial = initial;
				lodash2.intersection = intersection;
				lodash2.intersectionBy = intersectionBy;
				lodash2.intersectionWith = intersectionWith;
				lodash2.invert = invert;
				lodash2.invertBy = invertBy;
				lodash2.invokeMap = invokeMap;
				lodash2.iteratee = iteratee;
				lodash2.keyBy = keyBy;
				lodash2.keys = keys;
				lodash2.keysIn = keysIn;
				lodash2.map = map;
				lodash2.mapKeys = mapKeys;
				lodash2.mapValues = mapValues;
				lodash2.matches = matches;
				lodash2.matchesProperty = matchesProperty;
				lodash2.memoize = memoize2;
				lodash2.merge = merge;
				lodash2.mergeWith = mergeWith;
				lodash2.method = method;
				lodash2.methodOf = methodOf;
				lodash2.mixin = mixin;
				lodash2.negate = negate;
				lodash2.nthArg = nthArg;
				lodash2.omit = omit;
				lodash2.omitBy = omitBy;
				lodash2.once = once;
				lodash2.orderBy = orderBy;
				lodash2.over = over;
				lodash2.overArgs = overArgs;
				lodash2.overEvery = overEvery;
				lodash2.overSome = overSome;
				lodash2.partial = partial;
				lodash2.partialRight = partialRight;
				lodash2.partition = partition;
				lodash2.pick = pick;
				lodash2.pickBy = pickBy;
				lodash2.property = property;
				lodash2.propertyOf = propertyOf;
				lodash2.pull = pull;
				lodash2.pullAll = pullAll;
				lodash2.pullAllBy = pullAllBy;
				lodash2.pullAllWith = pullAllWith;
				lodash2.pullAt = pullAt;
				lodash2.range = range;
				lodash2.rangeRight = rangeRight;
				lodash2.rearg = rearg;
				lodash2.reject = reject;
				lodash2.remove = remove;
				lodash2.rest = rest;
				lodash2.reverse = reverse;
				lodash2.sampleSize = sampleSize;
				lodash2.set = set;
				lodash2.setWith = setWith;
				lodash2.shuffle = shuffle;
				lodash2.slice = slice2;
				lodash2.sortBy = sortBy;
				lodash2.sortedUniq = sortedUniq;
				lodash2.sortedUniqBy = sortedUniqBy;
				lodash2.split = split;
				lodash2.spread = spread;
				lodash2.tail = tail;
				lodash2.take = take;
				lodash2.takeRight = takeRight;
				lodash2.takeRightWhile = takeRightWhile;
				lodash2.takeWhile = takeWhile;
				lodash2.tap = tap;
				lodash2.throttle = throttle;
				lodash2.thru = thru;
				lodash2.toArray = toArray;
				lodash2.toPairs = toPairs;
				lodash2.toPairsIn = toPairsIn;
				lodash2.toPath = toPath;
				lodash2.toPlainObject = toPlainObject;
				lodash2.transform = transform;
				lodash2.unary = unary;
				lodash2.union = union;
				lodash2.unionBy = unionBy;
				lodash2.unionWith = unionWith;
				lodash2.uniq = uniq;
				lodash2.uniqBy = uniqBy;
				lodash2.uniqWith = uniqWith;
				lodash2.unset = unset;
				lodash2.unzip = unzip;
				lodash2.unzipWith = unzipWith;
				lodash2.update = update2;
				lodash2.updateWith = updateWith;
				lodash2.values = values;
				lodash2.valuesIn = valuesIn;
				lodash2.without = without;
				lodash2.words = words;
				lodash2.wrap = wrap;
				lodash2.xor = xor;
				lodash2.xorBy = xorBy;
				lodash2.xorWith = xorWith;
				lodash2.zip = zip;
				lodash2.zipObject = zipObject;
				lodash2.zipObjectDeep = zipObjectDeep;
				lodash2.zipWith = zipWith;
				lodash2.entries = toPairs;
				lodash2.entriesIn = toPairsIn;
				lodash2.extend = assignIn;
				lodash2.extendWith = assignInWith;
				mixin(lodash2, lodash2);
				lodash2.add = add;
				lodash2.attempt = attempt;
				lodash2.camelCase = camelCase;
				lodash2.capitalize = capitalize;
				lodash2.ceil = ceil;
				lodash2.clamp = clamp;
				lodash2.clone = clone;
				lodash2.cloneDeep = cloneDeep;
				lodash2.cloneDeepWith = cloneDeepWith;
				lodash2.cloneWith = cloneWith;
				lodash2.conformsTo = conformsTo;
				lodash2.deburr = deburr;
				lodash2.defaultTo = defaultTo;
				lodash2.divide = divide;
				lodash2.endsWith = endsWith;
				lodash2.eq = eq;
				lodash2.escape = escape2;
				lodash2.escapeRegExp = escapeRegExp;
				lodash2.every = every;
				lodash2.find = find;
				lodash2.findIndex = findIndex;
				lodash2.findKey = findKey;
				lodash2.findLast = findLast;
				lodash2.findLastIndex = findLastIndex;
				lodash2.findLastKey = findLastKey;
				lodash2.floor = floor;
				lodash2.forEach = forEach;
				lodash2.forEachRight = forEachRight;
				lodash2.forIn = forIn;
				lodash2.forInRight = forInRight;
				lodash2.forOwn = forOwn;
				lodash2.forOwnRight = forOwnRight;
				lodash2.get = get;
				lodash2.gt = gt;
				lodash2.gte = gte;
				lodash2.has = has;
				lodash2.hasIn = hasIn;
				lodash2.head = head;
				lodash2.identity = identity;
				lodash2.includes = includes;
				lodash2.indexOf = indexOf;
				lodash2.inRange = inRange;
				lodash2.invoke = invoke;
				lodash2.isArguments = isArguments;
				lodash2.isArray = isArray;
				lodash2.isArrayBuffer = isArrayBuffer;
				lodash2.isArrayLike = isArrayLike;
				lodash2.isArrayLikeObject = isArrayLikeObject;
				lodash2.isBoolean = isBoolean;
				lodash2.isBuffer = isBuffer;
				lodash2.isDate = isDate;
				lodash2.isElement = isElement;
				lodash2.isEmpty = isEmpty;
				lodash2.isEqual = isEqual;
				lodash2.isEqualWith = isEqualWith;
				lodash2.isError = isError;
				lodash2.isFinite = isFinite;
				lodash2.isFunction = isFunction;
				lodash2.isInteger = isInteger;
				lodash2.isLength = isLength;
				lodash2.isMap = isMap;
				lodash2.isMatch = isMatch;
				lodash2.isMatchWith = isMatchWith;
				lodash2.isNaN = isNaN2;
				lodash2.isNative = isNative;
				lodash2.isNil = isNil;
				lodash2.isNull = isNull;
				lodash2.isNumber = isNumber;
				lodash2.isObject = isObject2;
				lodash2.isObjectLike = isObjectLike;
				lodash2.isPlainObject = isPlainObject2;
				lodash2.isRegExp = isRegExp;
				lodash2.isSafeInteger = isSafeInteger;
				lodash2.isSet = isSet;
				lodash2.isString = isString;
				lodash2.isSymbol = isSymbol;
				lodash2.isTypedArray = isTypedArray;
				lodash2.isUndefined = isUndefined;
				lodash2.isWeakMap = isWeakMap;
				lodash2.isWeakSet = isWeakSet;
				lodash2.join = join;
				lodash2.kebabCase = kebabCase;
				lodash2.last = last;
				lodash2.lastIndexOf = lastIndexOf;
				lodash2.lowerCase = lowerCase;
				lodash2.lowerFirst = lowerFirst;
				lodash2.lt = lt;
				lodash2.lte = lte;
				lodash2.max = max;
				lodash2.maxBy = maxBy;
				lodash2.mean = mean;
				lodash2.meanBy = meanBy;
				lodash2.min = min;
				lodash2.minBy = minBy;
				lodash2.stubArray = stubArray;
				lodash2.stubFalse = stubFalse;
				lodash2.stubObject = stubObject;
				lodash2.stubString = stubString;
				lodash2.stubTrue = stubTrue;
				lodash2.multiply = multiply;
				lodash2.nth = nth;
				lodash2.noConflict = noConflict;
				lodash2.noop = noop2;
				lodash2.now = now2;
				lodash2.pad = pad;
				lodash2.padEnd = padEnd;
				lodash2.padStart = padStart;
				lodash2.parseInt = parseInt2;
				lodash2.random = random;
				lodash2.reduce = reduce;
				lodash2.reduceRight = reduceRight;
				lodash2.repeat = repeat;
				lodash2.replace = replace2;
				lodash2.result = result;
				lodash2.round = round;
				lodash2.runInContext = runInContext2;
				lodash2.sample = sample;
				lodash2.size = size;
				lodash2.snakeCase = snakeCase;
				lodash2.some = some;
				lodash2.sortedIndex = sortedIndex;
				lodash2.sortedIndexBy = sortedIndexBy;
				lodash2.sortedIndexOf = sortedIndexOf;
				lodash2.sortedLastIndex = sortedLastIndex;
				lodash2.sortedLastIndexBy = sortedLastIndexBy;
				lodash2.sortedLastIndexOf = sortedLastIndexOf;
				lodash2.startCase = startCase;
				lodash2.startsWith = startsWith;
				lodash2.subtract = subtract;
				lodash2.sum = sum;
				lodash2.sumBy = sumBy;
				lodash2.template = template;
				lodash2.times = times;
				lodash2.toFinite = toFinite;
				lodash2.toInteger = toInteger;
				lodash2.toLength = toLength;
				lodash2.toLower = toLower;
				lodash2.toNumber = toNumber;
				lodash2.toSafeInteger = toSafeInteger;
				lodash2.toString = toString;
				lodash2.toUpper = toUpper;
				lodash2.trim = trim2;
				lodash2.trimEnd = trimEnd;
				lodash2.trimStart = trimStart;
				lodash2.truncate = truncate;
				lodash2.unescape = unescape;
				lodash2.uniqueId = uniqueId;
				lodash2.upperCase = upperCase;
				lodash2.upperFirst = upperFirst;
				lodash2.each = forEach;
				lodash2.eachRight = forEachRight;
				lodash2.first = head;
				mixin(lodash2, function() {
					var source = {};
					baseForOwn(lodash2, function(func, methodName) {
						if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
							source[methodName] = func;
						}
					});
					return source;
				}(), { "chain": false });
				lodash2.VERSION = VERSION;
				arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
					lodash2[methodName].placeholder = lodash2;
				});
				arrayEach(["drop", "take"], function(methodName, index) {
					LazyWrapper.prototype[methodName] = function(n2) {
						n2 = n2 === undefined$1 ? 1 : nativeMax(toInteger(n2), 0);
						var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
						if (result2.__filtered__) {
							result2.__takeCount__ = nativeMin(n2, result2.__takeCount__);
						} else {
							result2.__views__.push({
								"size": nativeMin(n2, MAX_ARRAY_LENGTH),
								"type": methodName + (result2.__dir__ < 0 ? "Right" : "")
							});
						}
						return result2;
					};
					LazyWrapper.prototype[methodName + "Right"] = function(n2) {
						return this.reverse()[methodName](n2).reverse();
					};
				});
				arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
					var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
					LazyWrapper.prototype[methodName] = function(iteratee2) {
						var result2 = this.clone();
						result2.__iteratees__.push({
							"iteratee": getIteratee(iteratee2, 3),
							"type": type
						});
						result2.__filtered__ = result2.__filtered__ || isFilter;
						return result2;
					};
				});
				arrayEach(["head", "last"], function(methodName, index) {
					var takeName = "take" + (index ? "Right" : "");
					LazyWrapper.prototype[methodName] = function() {
						return this[takeName](1).value()[0];
					};
				});
				arrayEach(["initial", "tail"], function(methodName, index) {
					var dropName = "drop" + (index ? "" : "Right");
					LazyWrapper.prototype[methodName] = function() {
						return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
					};
				});
				LazyWrapper.prototype.compact = function() {
					return this.filter(identity);
				};
				LazyWrapper.prototype.find = function(predicate) {
					return this.filter(predicate).head();
				};
				LazyWrapper.prototype.findLast = function(predicate) {
					return this.reverse().find(predicate);
				};
				LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
					if (typeof path == "function") {
						return new LazyWrapper(this);
					}
					return this.map(function(value) {
						return baseInvoke(value, path, args);
					});
				});
				LazyWrapper.prototype.reject = function(predicate) {
					return this.filter(negate(getIteratee(predicate)));
				};
				LazyWrapper.prototype.slice = function(start, end) {
					start = toInteger(start);
					var result2 = this;
					if (result2.__filtered__ && (start > 0 || end < 0)) {
						return new LazyWrapper(result2);
					}
					if (start < 0) {
						result2 = result2.takeRight(-start);
					} else if (start) {
						result2 = result2.drop(start);
					}
					if (end !== undefined$1) {
						end = toInteger(end);
						result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
					}
					return result2;
				};
				LazyWrapper.prototype.takeRightWhile = function(predicate) {
					return this.reverse().takeWhile(predicate).reverse();
				};
				LazyWrapper.prototype.toArray = function() {
					return this.take(MAX_ARRAY_LENGTH);
				};
				baseForOwn(LazyWrapper.prototype, function(func, methodName) {
					var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
					if (!lodashFunc) {
						return;
					}
					lodash2.prototype[methodName] = function() {
						var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
						var interceptor = function(value2) {
							var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
							return isTaker && chainAll ? result3[0] : result3;
						};
						if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
							isLazy = useLazy = false;
						}
						var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
						if (!retUnwrapped && useLazy) {
							value = onlyLazy ? value : new LazyWrapper(this);
							var result2 = func.apply(value, args);
							result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
							return new LodashWrapper(result2, chainAll);
						}
						if (isUnwrapped && onlyLazy) {
							return func.apply(this, args);
						}
						result2 = this.thru(interceptor);
						return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
					};
				});
				arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
					var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
					lodash2.prototype[methodName] = function() {
						var args = arguments;
						if (retUnwrapped && !this.__chain__) {
							var value = this.value();
							return func.apply(isArray(value) ? value : [], args);
						}
						return this[chainName](function(value2) {
							return func.apply(isArray(value2) ? value2 : [], args);
						});
					};
				});
				baseForOwn(LazyWrapper.prototype, function(func, methodName) {
					var lodashFunc = lodash2[methodName];
					if (lodashFunc) {
						var key = lodashFunc.name + "";
						if (!hasOwnProperty2.call(realNames, key)) {
							realNames[key] = [];
						}
						realNames[key].push({ "name": methodName, "func": lodashFunc });
					}
				});
				realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
					"name": "wrapper",
					"func": undefined$1
				}];
				LazyWrapper.prototype.clone = lazyClone;
				LazyWrapper.prototype.reverse = lazyReverse;
				LazyWrapper.prototype.value = lazyValue;
				lodash2.prototype.at = wrapperAt;
				lodash2.prototype.chain = wrapperChain;
				lodash2.prototype.commit = wrapperCommit;
				lodash2.prototype.next = wrapperNext;
				lodash2.prototype.plant = wrapperPlant;
				lodash2.prototype.reverse = wrapperReverse;
				lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
				lodash2.prototype.first = lodash2.prototype.head;
				if (symIterator) {
					lodash2.prototype[symIterator] = wrapperToIterator;
				}
				return lodash2;
			};
			var _ = runInContext();
			if (freeModule) {
				(freeModule.exports = _)._ = _;
				freeExports._ = _;
			} else {
				root._ = _;
			}
		}).call(commonjsGlobal);
	})(lodash, lodashExports);
	const swiper = "";
	Swiper$1.use([Virtual, Navigation, Pagination]);
	var _ref = {
		name: "rnnx2x",
		styles: "font-size:12px"
	};
	var _ref2 = {
		name: "rnnx2x",
		styles: "font-size:12px"
	};
	var _ref3 = {
		name: "1a9t3rq",
		styles: "margin-top:40px;margin-bottom:40px;margin-left:0px;margin-right:0px;display:none;border-width:1px;border-style:solid;border-color:rgba(0, 0, 0, 0.1);padding-top:11px;padding-bottom:11px;padding-left:0px;padding-right:0px;@media (min-width: 768px){display:block;}"
	};
	var _ref4 = {
		name: "12b8hmf",
		styles: "margin-top:15px;margin-bottom:15px;margin-left:30px;margin-right:30px;display:flex;justify-content:space-between"
	};
	var _ref5 = {
		name: "1pxl9ke",
		styles: "font-size:15px"
	};
	var _ref6 = {
		name: "bcffy2",
		styles: "display:flex;align-items:center;justify-content:space-between"
	};
	var _ref7 = {
		name: "1e3ylh3",
		styles: "margin-top:0px;margin-bottom:0px;margin-left:12px;margin-right:12px;cursor:pointer;font-size:13px;color:rgba(33,33,33,0.7)"
	};
	var _ref8 = {
		name: "17zr1an",
		styles: "display:inline-block;min-width:70px"
	};
	var _ref9 = {
		name: "szna78",
		styles: "margin-right:-1px;display:inline-flex;height:24px;width:37px;align-items:center;justify-content:center;border-width:1px;border-style:solid;border-color:rgba(0, 0, 0, 0.1);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px;text-align:center;vertical-align:middle;font-size:12px;--tw-text-opacity:1;color:rgb(117 117 117 / var(--tw-text-opacity))"
	};
	var _ref10 = {
		name: "rp5no0",
		styles: "display:inline-flex;height:24px;width:37px;align-items:center;justify-content:center;border-width:1px;border-style:solid;border-color:rgba(0, 0, 0, 0.1);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px;text-align:center;vertical-align:middle;font-size:12px;--tw-text-opacity:1;color:rgb(117 117 117 / var(--tw-text-opacity))"
	};
	var _ref11 = {
		name: "1azpx8r",
		styles: "margin-bottom:20px"
	};
	var _ref12 = {
		name: "4k6r0b",
		styles: "display:grid;height:100%;width:100%;grid-template-columns:repeat(2, minmax(0, 1fr));@media (min-width: 768px){grid-template-rows:repeat(2, minmax(0, 1fr));}"
	};
	var _ref13 = {
		name: "1t5qrcs",
		styles: "margin-top:15px;margin-bottom:15px;margin-left:30px;margin-right:30px;height:120px;cursor:pointer"
	};
	var _ref14 = {
		name: "8ebp35",
		styles: "display:flex;height:100%;justify-content:space-between;gap:24px"
	};
	var _ref15 = {
		name: "vuqbmf",
		styles: "width:calc(100% - 120px);min-width:0px"
	};
	var _ref16 = {
		name: "zjik7",
		styles: "display:flex"
	};
	var _ref17 = {
		name: "2axaja",
		styles: "position:relative;margin-bottom:12px;line-height:12px"
	};
	var _ref18 = {
		name: "cmwn01",
		styles: "overflow:hidden;text-overflow:ellipsis;text-align:left;font-size:13px"
	};
	var _ref19 = {
		name: "be6gxt",
		styles: "display:block;@media (max-width: 768px){margin-bottom:40px;}@media (max-width: 480px){margin-bottom:20px;}@media (min-width: 768px){display:none;}"
	};
	var _ref20 = {
		name: "161u205",
		styles: "margin-bottom:10px;display:flex;justify-content:space-between"
	};
	var _ref21 = {
		name: "1u503xk",
		styles: "@media (max-width: 480px){font-size:13px;}@media (min-width: 481px){font-size:15px;}"
	};
	var _ref22 = {
		name: "bcffy2",
		styles: "display:flex;align-items:center;justify-content:space-between"
	};
	var _ref23 = {
		name: "1e3ylh3",
		styles: "margin-top:0px;margin-bottom:0px;margin-left:12px;margin-right:12px;cursor:pointer;font-size:13px;color:rgba(33,33,33,0.7)"
	};
	var _ref24 = {
		name: "17zr1an",
		styles: "display:inline-block;min-width:70px"
	};
	var _ref25 = {
		name: "szna78",
		styles: "margin-right:-1px;display:inline-flex;height:24px;width:37px;align-items:center;justify-content:center;border-width:1px;border-style:solid;border-color:rgba(0, 0, 0, 0.1);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px;text-align:center;vertical-align:middle;font-size:12px;--tw-text-opacity:1;color:rgb(117 117 117 / var(--tw-text-opacity))"
	};
	var _ref26 = {
		name: "rp5no0",
		styles: "display:inline-flex;height:24px;width:37px;align-items:center;justify-content:center;border-width:1px;border-style:solid;border-color:rgba(0, 0, 0, 0.1);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px;text-align:center;vertical-align:middle;font-size:12px;--tw-text-opacity:1;color:rgb(117 117 117 / var(--tw-text-opacity))"
	};
	var _ref27 = {
		name: "dii3x3",
		styles: "height:100%;width:100%;gap:12px;border-width:1px;border-style:solid;border-color:#0000001A"
	};
	var _ref28 = {
		name: "akbqsm",
		styles: "margin:20px;height:110px;cursor:pointer"
	};
	var _ref29 = {
		name: "8ebp35",
		styles: "display:flex;height:100%;justify-content:space-between;gap:24px"
	};
	var _ref30 = {
		name: "1kmuri9",
		styles: "width:calc(100% - 110px);min-width:0px"
	};
	var _ref31 = {
		name: "148tf1n",
		styles: "display:flex;min-width:70px"
	};
	var _ref32 = {
		name: "2axaja",
		styles: "position:relative;margin-bottom:12px;line-height:12px"
	};
	var _ref33 = {
		name: "cmwn01",
		styles: "overflow:hidden;text-overflow:ellipsis;text-align:left;font-size:13px"
	};
	var _ref34 = {
		name: "1h8q4zv",
		styles: "min-width:110px"
	};
	function CustomSwiper() {
		const root = document.getElementsByClassName("iewb-744")[0];
		const [prodCode, setProdCode] = reactExports.useState(root.dataset.prod_idx);
		const {
			data,
			isLoading,
			error
		} = useQuery(["getPhotoReviews", {
			prodCode
		}], getPhotoReviews, {
			suspense: true
		});
		const [reviewData, setReviewData] = reactExports.useState([]);
		const [reviewData2, setReviewData2] = reactExports.useState([]);
		const [swiper2, setSwiper] = reactExports.useState(null);
		const [swiper22, setSwiper2] = reactExports.useState(null);
		const handleApiData = (originArray, size) => {
			return lodashExports.chunk(originArray, size);
		};
		const handleRatingToStar = (rating) => {
			let starArray = [];
			for (let i = 0; i < rating; i++) {
				starArray.push(/* @__PURE__ */ jsx("div", { css: _ref, className: "bts bt-star active" }));
			}
			if (starArray.length === 5)
				return starArray;
			for (let i = 0; i < 5 - rating; i++) {
				starArray.push(/* @__PURE__ */ jsx("div", { css: _ref2, className: "bts bt-star" }));
			}
			return starArray;
		};
		const handleRemoveTag = (text) => {
			let result = text.replace(/(<([^>]+)>)/gi, "");
			return result;
		};
		const showDetailPhotoReview = (idx) => {
			window.SITE_SHOP_DETAIL.viewReviewDetail(`${idx}`, "1", "Y");
		};
		const viewMorePhotoReview = (isMobile, isOnePage) => {
			window.SITE_SHOP_DETAIL.viewPhotoReviewMore(`${isMobile}`, `${isOnePage}`);
		};
		reactExports.useEffect(() => {
			let result = data == null ? void 0 : data.photo_review_list;
			setReviewData(handleApiData(result, 4));
			setReviewData2(handleApiData(result, 1));
		}, [isLoading, data]);
		return /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsxs("div", { css: _ref3, children: [
						/* @__PURE__ */ jsxs("div", { css: _ref4, children: [
								/* @__PURE__ */ jsxs("div", { css: _ref5, children: [
										data == null ? void 0 : data.title,
										" (",
										data == null ? void 0 : data.photo_review_count,
										")"
									] }),
								/* @__PURE__ */ jsxs("div", { css: _ref6, children: [
										/* @__PURE__ */ jsx("a", { css: _ref7, onClick: () => viewMorePhotoReview("N", data == null ? void 0 : data.is_one_page), children: data == null ? void 0 : data.show_more }),
										/* @__PURE__ */ jsxs("div", { css: _ref8, children: [
												/* @__PURE__ */ jsx("a", { css: _ref9, onClick: () => swiper2.slidePrev(), children: /* @__PURE__ */ jsx("i", { className: "btl bt-angle-left" }) }),
												/* @__PURE__ */ jsx("a", { css: _ref10, onClick: () => swiper2.slideNext(), children: /* @__PURE__ */ jsx("i", { className: "btl bt-angle-right" }) })
											] })
									] })
							] }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { css: _ref11, children: /* @__PURE__ */ jsx(Swiper2, { slidesPerView: 1, virtual: true, onSwiper: (s) => {
										setSwiper(s);
									}, className: "review1", children: reviewData.map((reviews, reviewsIndex) => /* @__PURE__ */ jsx(SwiperSlide, { virtualIndex: reviewsIndex, children: /* @__PURE__ */ jsx("div", { css: _ref12, children: reviews.map((review) => /* @__PURE__ */ jsx("div", { css: _ref13, onClick: () => showDetailPhotoReview(review.photo_review_idx), children: /* @__PURE__ */ jsxs("a", { css: _ref14, children: [
														/* @__PURE__ */ jsxs("div", { css: _ref15, children: [
																/* @__PURE__ */ jsx("div", { css: _ref16, children: /* @__PURE__ */ jsx("div", { className: "interlock_star_point", css: _ref17, children: handleRatingToStar(review.photo_review_rating) }) }),
																/* @__PURE__ */ jsx("span", { style: {
																		display: "-webkit-box",
																		wordWrap: "break-word",
																		WebkitLineClamp: 4,
																		WebkitBoxOrient: "vertical"
																	}, css: _ref18, children: handleRemoveTag(review.photo_review_contents) })
															] }),
														/* @__PURE__ */ jsx("img", { src: review.photo_review_image, alt: "", width: 120, height: 120 })
													] }) })) }) })) }) }) })
					] }),
				/* @__PURE__ */ jsxs("div", { css: _ref19, children: [
						/* @__PURE__ */ jsxs("div", { css: _ref20, children: [
								/* @__PURE__ */ jsxs("div", { css: _ref21, children: [
										data == null ? void 0 : data.title,
										" (",
										data == null ? void 0 : data.photo_review_count,
										")"
									] }),
								/* @__PURE__ */ jsxs("div", { css: _ref22, children: [
										/* @__PURE__ */ jsx("a", { css: _ref23, onClick: () => viewMorePhotoReview("Y", data == null ? void 0 : data.is_one_page), children: data == null ? void 0 : data.show_more }),
										/* @__PURE__ */ jsxs("div", { css: _ref24, children: [
												/* @__PURE__ */ jsx("a", { css: _ref25, onClick: () => swiper22.slidePrev(), children: /* @__PURE__ */ jsx("i", { className: "btl bt-angle-left" }) }),
												/* @__PURE__ */ jsx("a", { css: _ref26, onClick: () => swiper22.slideNext(), children: /* @__PURE__ */ jsx("i", { className: "btl bt-angle-right" }) })
											] })
									] })
							] }),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Swiper2, { slidesPerView: 1, spaceBetween: 12, virtual: true, onSwiper: (s) => {
									setSwiper2(s);
								}, breakpoints: {
									481: {
										slidesPerView: 2
									}
								}, className: "review2", children: reviewData2.map((reviews, reviewsIndex) => /* @__PURE__ */ jsx(SwiperSlide, { virtualIndex: reviewsIndex, children: /* @__PURE__ */ jsx("div", { css: _ref27, children: reviews.map((review) => /* @__PURE__ */ jsx("div", { css: _ref28, onClick: () => showDetailPhotoReview(review.photo_review_idx), children: /* @__PURE__ */ jsxs("a", { css: _ref29, children: [
													/* @__PURE__ */ jsxs("div", { css: _ref30, children: [
															/* @__PURE__ */ jsx("div", { css: _ref31, children: /* @__PURE__ */ jsx("div", { className: "interlock_star_point", css: _ref32, children: handleRatingToStar(review.photo_review_rating) }) }),
															/* @__PURE__ */ jsx("div", { style: {
																	display: "-webkit-box",
																	wordWrap: "break-word",
																	WebkitLineClamp: 4,
																	WebkitBoxOrient: "vertical"
																}, css: _ref33, children: handleRemoveTag(review.photo_review_contents) })
														] }),
													/* @__PURE__ */ jsx("img", { css: _ref34, src: review.photo_review_image, alt: "", width: 110, height: 110 })
												] }) })) }) })) }) })
					] })
			] });
	}
	var cssUnit = {
		cm: true,
		mm: true,
		in: true,
		px: true,
		pt: true,
		pc: true,
		em: true,
		ex: true,
		ch: true,
		rem: true,
		vw: true,
		vh: true,
		vmin: true,
		vmax: true,
		"%": true
	};
	function parseLengthAndUnit(size) {
		if (typeof size === "number") {
			return {
				value: size,
				unit: "px"
			};
		}
		var value;
		var valueString = (size.match(/^[0-9.]*/) || "").toString();
		if (valueString.includes(".")) {
			value = parseFloat(valueString);
		} else {
			value = parseInt(valueString, 10);
		}
		var unit = (size.match(/[^0-9]*$/) || "").toString();
		if (cssUnit[unit]) {
			return {
				value,
				unit
			};
		}
		console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
		return {
			value,
			unit: "px"
		};
	}
	function cssValue(value) {
		var lengthWithunit = parseLengthAndUnit(value);
		return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
	}
	var createAnimation = function(loaderName, frames, suffix) {
		var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
		if (typeof window == "undefined" || !window.document) {
			return animationName;
		}
		var styleEl = document.createElement("style");
		document.head.appendChild(styleEl);
		var styleSheet = styleEl.sheet;
		var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
		if (styleSheet) {
			styleSheet.insertRule(keyFrames, 0);
		}
		return animationName;
	};
	var __assign = globalThis && globalThis.__assign || function() {
		__assign = Object.assign || function(t2) {
			for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
				s = arguments[i];
				for (var p2 in s)
					if (Object.prototype.hasOwnProperty.call(s, p2))
						t2[p2] = s[p2];
			}
			return t2;
		};
		return __assign.apply(this, arguments);
	};
	var __rest = globalThis && globalThis.__rest || function(s, e2) {
		var t2 = {};
		for (var p2 in s)
			if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
				t2[p2] = s[p2];
		if (s != null && typeof Object.getOwnPropertySymbols === "function")
			for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
				if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
					t2[p2[i]] = s[p2[i]];
			}
		return t2;
	};
	var beat = createAnimation("BeatLoader", "50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}", "beat");
	function BeatLoader(_a) {
		var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
		var wrapper = __assign({ display: "inherit" }, cssOverride);
		var style = function(i) {
			return {
				display: "inline-block",
				backgroundColor: color,
				width: cssValue(size),
				height: cssValue(size),
				margin: cssValue(margin),
				borderRadius: "100%",
				animation: "".concat(beat, " ").concat(0.7 / speedMultiplier, "s ").concat(i % 2 ? "0s" : "".concat(0.35 / speedMultiplier, "s"), " infinite linear"),
				animationFillMode: "both"
			};
		};
		if (!loading) {
			return null;
		}
		return reactExports.createElement(
				"span",
				__assign({ style: wrapper }, additionalprops),
				reactExports.createElement("span", { style: style(1) }),
				reactExports.createElement("span", { style: style(2) }),
				reactExports.createElement("span", { style: style(3) })
		);
	}
	function Loader() {
		return /* @__PURE__ */ jsx(BeatLoader, {});
	}
	function App() {
		return /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(Loader, {}), children: /* @__PURE__ */ jsx(CustomSwiper, {}) });
	}
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				suspense: true
			}
		}
	});
	for (let i = 0; i < document.getElementsByClassName("iewb-744").length; i++) {
		client.createRoot(document.getElementsByClassName("iewb-744")[i]).render(/* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(App, {}) }) }));
	}
})()