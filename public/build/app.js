(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./address_card_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/address_card_controller.js",
	"./carousel_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js",
	"./cart_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/cart_controller.js",
	"./form_guest_address_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/form_guest_address_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./navbar_dropdown_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/navbar_dropdown_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Hello.jsx": "./assets/react/controllers/Hello.jsx",
	"./NavBar.jsx": "./assets/react/controllers/NavBar.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js");
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/address_card_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/address_card_controller.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      // Close overlay when clicking outside
      document.addEventListener('click', this.closeOverlay.bind(this));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      document.removeEventListener('click', this.closeOverlay.bind(this));
    }
  }, {
    key: "toggleOverlay",
    value: function toggleOverlay(event) {
      var _this = this;
      event.stopPropagation(); // Prevent closing the overlay
      // Close all other overlays
      document.querySelectorAll('.address-card .overlay').forEach(function (overlay) {
        if (overlay !== _this.overlayTarget) {
          overlay.classList.remove('active');
        }
      });
      // Overlay is active
      this.overlayTarget.classList.toggle('active');
    }
  }, {
    key: "closeOverlay",
    value: function closeOverlay(event) {
      if (!this.element.contains(event.target)) {
        this.overlayTarget.classList.remove('active');
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ['overlay']);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// assets/controllers/carousel_controller.js

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log("Carousel controller connected", this.headersValue);
      if (this.headersValue && this.headersValue.length > 0) {
        this.updateSelectedCard(0);
      } else {
        console.error("No headers data available");
      }
    }
  }, {
    key: "updateSelectedCard",
    value: function updateSelectedCard(event) {
      var index;
      if (typeof event === 'number') {
        index = event;
      } else {
        index = parseInt(event.currentTarget.dataset.carouselIndexParam, 10);
        this.addPulseEffect(event.currentTarget);
      }
      console.log("Updating card with index:", index);
      if (!this.headersValue || !Array.isArray(this.headersValue)) {
        console.error("Headers data is not an array:", this.headersValue);
        return;
      }
      var selectedHeader = this.headersValue[index];
      console.log("Selected header:", selectedHeader);
      if (!selectedHeader) {
        console.error('No header found at index', index);
        return;
      }
      if (!selectedHeader.picture) {
        console.error('Selected header has no picture:', selectedHeader);
        return;
      }
      this.updateThumbnailSelection(index);
      this.updateMainCard(selectedHeader);
    }
  }, {
    key: "addPulseEffect",
    value: function addPulseEffect(element) {
      if (element) {
        var thumbnail = element.querySelector('.thumbnail');
        if (thumbnail) {
          thumbnail.classList.add('pulse');
          setTimeout(function () {
            thumbnail.classList.remove('pulse');
          }, 300);
        }
      }
    }
  }, {
    key: "updateThumbnailSelection",
    value: function updateThumbnailSelection(selectedIndex) {
      this.element.querySelectorAll('.thumbnail-container').forEach(function (container, i) {
        if (i === selectedIndex) {
          container.classList.add('selected-thumbnail');
        } else {
          container.classList.remove('selected-thumbnail');
        }
      });
    }
  }, {
    key: "updateMainCard",
    value: function updateMainCard(selectedHeader) {
      var newContent = "\n            <div class=\"relative h-full fade-in\">\n                <img src=\"/uploads/header/".concat(selectedHeader.picture, "\" class=\"absolute inset-0 w-full h-full object-cover\" alt=\"").concat(selectedHeader.title || '', "\">\n                <div class=\"absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-end p-6\">\n                    <h1 class=\"text-4xl font-bold mb-2 text-white\">").concat(selectedHeader.title || '', "</h1>\n                    <p class=\"text-lg mb-4 text-white\">").concat(selectedHeader.content || '', "</p>\n                    <div class=\"flex justify-center\">\n                        <a href=\"").concat(selectedHeader.buttonLink || '#', "\" class=\"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm inline-block\">\n                            ").concat(selectedHeader.buttonTitle || 'Click here', "\n                        </a>\n                    </div>\n                </div>\n            </div>\n        ");
      this.selectedCardTarget.innerHTML = newContent;
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["selectedCard"]);
_defineProperty(_default, "values", {
  headers: Array
});


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/cart_controller.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/cart_controller.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var toastElement = document.getElementById('liveToast');
      if (toastElement) {
        var toast = new bootstrap.Toast(toastElement);
        toast.show();
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/form_guest_address_controller.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/form_guest_address_controller.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log('Hello from form_guest_address_controller.js');
    }
  }, {
    key: "toggleForm",
    value: function toggleForm(event) {
      event.preventDefault();
      var guestForm = document.getElementById("guestForm");
      if (guestForm.classList.contains("d-none")) {
        guestForm.classList.remove("d-none");
      } else {
        guestForm.classList.add("d-none");
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log("Hello, Stimulus!", this.element);
      alert("Hello, Stimulus!");
      this.element.textContent = "Hello Stimulus! Edit me in assets/controllers/hello_controller.js";
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/navbar_dropdown_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/navbar_dropdown_controller.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log("NavbarDropdown controller connected");
      this.closeDropdowns = this.closeDropdowns.bind(this);
      document.addEventListener('click', this.closeDropdowns);
      this.ensureDropdownsAreClosed();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      document.removeEventListener('click', this.closeDropdowns);
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(event) {
      event.stopPropagation();
      var button = event.currentTarget;
      var menu = button.nextElementSibling;
      this.closeAllDropdowns();
      menu.classList.toggle('hidden');
    }
  }, {
    key: "toggleLanguage",
    value: function toggleLanguage(event) {
      event.stopPropagation();
      this.closeAllDropdowns();
      this.languageMenuTarget.classList.toggle('hidden');
    }
  }, {
    key: "toggleUserMenu",
    value: function toggleUserMenu(event) {
      event.stopPropagation();
      this.closeAllDropdowns();
      this.userDropdownMenuTarget.classList.toggle('hidden');
    }
  }, {
    key: "selectLanguage",
    value: function selectLanguage(event) {
      event.preventDefault();
      var selectedLanguage = event.currentTarget.textContent.trim();
      this.languageButtonTarget.querySelector('span > span').textContent = selectedLanguage;
      this.languageButtonTarget.querySelector('img').src = event.currentTarget.querySelector('img').src;
      this.languageMenuTarget.classList.add('hidden');
    }
  }, {
    key: "closeDropdowns",
    value: function closeDropdowns(event) {
      var clickedElement = event.target;
      var isClickInsideDropdown = this.dropdownMenuTargets.some(function (menu) {
        return menu.contains(clickedElement);
      }) || this.languageMenuTarget.contains(clickedElement) || this.hasUserDropdownMenuTarget && this.userDropdownMenuTarget.contains(clickedElement) || this.mobileMenuTarget.contains(clickedElement);
      var isClickOnButton = this.dropdownButtonTargets.some(function (button) {
        return button.contains(clickedElement);
      }) || this.languageButtonTarget.contains(clickedElement) || this.hasUserMenuButtonTarget && this.userMenuButtonTarget.contains(clickedElement) || this.hasMobileMenuButtonTarget && this.mobileMenuButtonTarget.contains(clickedElement);
      if (!isClickInsideDropdown && !isClickOnButton) {
        this.closeAllDropdowns();
      }
    }
  }, {
    key: "closeAllDropdowns",
    value: function closeAllDropdowns() {
      this.dropdownMenuTargets.forEach(function (menu) {
        return menu.classList.add('hidden');
      });
      this.languageMenuTarget.classList.add('hidden');
      if (this.hasUserDropdownMenuTarget) {
        this.userDropdownMenuTarget.classList.add('hidden');
      }
      // Fermer le menu mobile si nécessaire
      if (this.hasMobileMenuTarget) {
        this.mobileMenuTarget.classList.add('opacity-0', 'pointer-events-none');
        var menuPanel = this.mobileMenuTarget.querySelector('.transform');
        if (menuPanel) {
          menuPanel.classList.add('translate-x-full');
          menuPanel.classList.remove('translate-x-0');
        }
      }
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu(event) {
      event.preventDefault();
      this.mobileMenuTarget.classList.toggle('opacity-0');
      this.mobileMenuTarget.classList.toggle('pointer-events-none');
      var menuPanel = this.mobileMenuTarget.querySelector('.transform');
      if (menuPanel) {
        menuPanel.classList.toggle('translate-x-full');
        menuPanel.classList.toggle('translate-x-0');
      }
      if (this.hasMobileMenuButtonTarget) {
        var hamburgerIcon = this.mobileMenuButtonTarget.querySelector('svg');
        if (hamburgerIcon) {
          hamburgerIcon.classList.toggle('rotate-90');
        }
      }
    }
  }, {
    key: "toggleMobileSubmenu",
    value: function toggleMobileSubmenu(event) {
      var button = event.currentTarget;
      var submenuId = button.dataset.submenuTarget;
      var submenu = document.getElementById("".concat(submenuId, "-submenu"));
      var icon = button.querySelector('svg');
      if (submenu) {
        submenu.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
      }
    }
  }, {
    key: "ensureDropdownsAreClosed",
    value: function ensureDropdownsAreClosed() {
      this.closeAllDropdowns();
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["dropdownButton", "dropdownMenu", "languageButton", "languageMenu", "userMenuButton", "userDropdownMenu", "mobileMenu", "mobileMenuButton"]);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_0__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/react/controllers/Hello.jsx":
/*!********************************************!*\
  !*** ./assets/react/controllers/Hello.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: ["Hello ", props.fullName]
  });
}

/***/ }),

/***/ "./assets/react/controllers/NavBar.jsx":
/*!*********************************************!*\
  !*** ./assets/react/controllers/NavBar.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


function NavBar(_ref) {
  var fullCartQuantity = _ref.fullCartQuantity,
    parentCategories = _ref.parentCategories,
    user = _ref.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolled = _useState2[0],
    setIsScrolled = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    feather.replace();
  });
  var renderCategories = function renderCategories() {
    return parentCategories.map(function (category) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        className: "nav-item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/category/".concat(category.slug),
          className: "nav-link",
          children: category.name
        })
      }, category.slug);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
    className: "navbar navbar-expand-lg fixed-top ".concat(isScrolled ? 'scrolled' : ''),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
        className: "navbar-brand",
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: "https://img.icons8.com/3d-fluency/94/palm-tree--v2.png",
          alt: "Palmier",
          className: "palmier-icon"
        }), "Home"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarNav",
        "aria-controls": "navbarNav",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "collapse navbar-collapse",
        id: "navbarNav",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
          className: "navbar-nav me-auto mb-2 mb-lg-0",
          children: [renderCategories(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              className: "nav-link",
              href: "/about",
              children: "About Us"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              className: "nav-link",
              href: "/contact",
              children: "Contact"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
          className: "navbar-nav",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              className: "nav-link",
              href: "/account",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                "data-feather": "user",
                className: "icon"
              })
            })
          }), user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              className: "nav-link",
              href: "/wishlist",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                "data-feather": "heart",
                className: "icon"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              className: "nav-link",
              href: "/cart",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                "data-feather": "shopping-cart",
                className: "icon"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "badge bg-primary rounded-pill",
                children: fullCartQuantity
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              className: "nav-link",
              href: "#",
              "data-bs-toggle": "offcanvas",
              "data-bs-target": "#offcanvasSearch",
              "aria-controls": "offcanvasSearch",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                "data-feather": "search",
                className: "icon"
              })
            })
          })]
        })]
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerReactControllerComponents: () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      var possibleValues = Object.keys(reactControllers).map(function (key) {
        return key.replace('./', '').replace('.jsx', '').replace('.tsx', '');
      });
      throw new Error("React controller \"".concat(name, "\" does not exist. Possible values: ").concat(possibleValues.join(', ')));
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_1__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  function default_1() {
    _classCallCheck(this, default_1);
    return _callSuper(this, default_1, arguments);
  }
  _inherits(default_1, _Controller);
  return _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _callSuper(this, turbo_controller, arguments);
  }
  _inherits(turbo_controller, _Controller);
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-d99504"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUNyQyxJQUFJLEVBQUU7UUFBRXNDLE1BQU0sRUFBRUYsT0FBTztRQUFFRyxNQUFNLEVBQUU7TUFBUSxDQUFDLENBQUM7SUFDN0Q7RUFBQztBQUFBLEVBL0JtQjlMLDBEQUFVO0FBaUNsQ2dMLFNBQVMsQ0FBQ2UsTUFBTSxHQUFHO0VBQ2YvQixTQUFTLEVBQUVnQyxNQUFNO0VBQ2pCckUsS0FBSyxFQUFFdUM7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUQrQztBQUN2QjtBQUFBLElBRW5CK0IsZ0JBQWdCLDBCQUFBL0wsV0FBQTtFQUFBLFNBQUErTCxpQkFBQTtJQUFBOUwsZUFBQSxPQUFBOEwsZ0JBQUE7SUFBQSxPQUFBN0wsVUFBQSxPQUFBNkwsZ0JBQUEsRUFBQTVMLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUEyTCxnQkFBQSxFQUFBL0wsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQTBMLGdCQUFBO0FBQUEsRUFBU2pNLDBEQUFVOzs7Ozs7Ozs7Ozs7O0FDSHpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9OYXZCYXIuanN4Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2NhcnRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnRfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vSGVsbG8uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4XCIsXG5cdFwiLi9OYXZCYXIuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTmF2QmFyLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGNvbnRyb2xsZXJfMCxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8xLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnb3ZlcmxheSddO1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgLy8gQ2xvc2Ugb3ZlcmxheSB3aGVuIGNsaWNraW5nIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPdmVybGF5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRvZ2dsZU92ZXJsYXkoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgY2xvc2luZyB0aGUgb3ZlcmxheVxuICAgICAgICAvLyBDbG9zZSBhbGwgb3RoZXIgb3ZlcmxheXNcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZHJlc3MtY2FyZCAub3ZlcmxheScpLmZvckVhY2goKG92ZXJsYXkpID0+IHtcbiAgICAgICAgICAgIGlmIChvdmVybGF5ICE9PSB0aGlzLm92ZXJsYXlUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gT3ZlcmxheSBpcyBhY3RpdmVcbiAgICAgICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNsb3NlT3ZlcmxheShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBhc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJzZWxlY3RlZENhcmRcIl1cbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICBoZWFkZXJzOiBBcnJheVxuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fyb3VzZWwgY29udHJvbGxlciBjb25uZWN0ZWRcIiwgdGhpcy5oZWFkZXJzVmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJzVmFsdWUgJiYgdGhpcy5oZWFkZXJzVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENhcmQoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gaGVhZGVycyBkYXRhIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNlbGVjdGVkQ2FyZChldmVudCkge1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpbmRleCA9IGV2ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2Fyb3VzZWxJbmRleFBhcmFtLCAxMCk7XG4gICAgICAgICAgICB0aGlzLmFkZFB1bHNlRWZmZWN0KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBjYXJkIHdpdGggaW5kZXg6XCIsIGluZGV4KTtcblxuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyc1ZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHRoaXMuaGVhZGVyc1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkhlYWRlcnMgZGF0YSBpcyBub3QgYW4gYXJyYXk6XCIsIHRoaXMuaGVhZGVyc1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSGVhZGVyID0gdGhpcy5oZWFkZXJzVmFsdWVbaW5kZXhdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGhlYWRlcjpcIiwgc2VsZWN0ZWRIZWFkZXIpO1xuXG4gICAgICAgIGlmICghc2VsZWN0ZWRIZWFkZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGhlYWRlciBmb3VuZCBhdCBpbmRleCcsIGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0ZWRIZWFkZXIucGljdHVyZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2VsZWN0ZWQgaGVhZGVyIGhhcyBubyBwaWN0dXJlOicsIHNlbGVjdGVkSGVhZGVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy51cGRhdGVNYWluQ2FyZChzZWxlY3RlZEhlYWRlcik7XG4gICAgfVxuXG4gICAgYWRkUHVsc2VFZmZlY3QoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGh1bWJuYWlsJyk7XG4gICAgICAgICAgICBpZiAodGh1bWJuYWlsKSB7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5hZGQoJ3B1bHNlJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZScpO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24oc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRodW1ibmFpbC1jb250YWluZXInKS5mb3JFYWNoKChjb250YWluZXIsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRodW1ibmFpbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZU1haW5DYXJkKHNlbGVjdGVkSGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgaC1mdWxsIGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91cGxvYWRzL2hlYWRlci8ke3NlbGVjdGVkSGVhZGVyLnBpY3R1cmV9XCIgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgYWx0PVwiJHtzZWxlY3RlZEhlYWRlci50aXRsZSB8fCAnJ31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2svNTAgdG8tdHJhbnNwYXJlbnQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZCBwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTIgdGV4dC13aGl0ZVwiPiR7c2VsZWN0ZWRIZWFkZXIudGl0bGUgfHwgJyd9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxnIG1iLTQgdGV4dC13aGl0ZVwiPiR7c2VsZWN0ZWRIZWFkZXIuY29udGVudCB8fCAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtzZWxlY3RlZEhlYWRlci5idXR0b25MaW5rIHx8ICcjJ31cIiBjbGFzcz1cImJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgdGV4dC1zbSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3NlbGVjdGVkSGVhZGVyLmJ1dHRvblRpdGxlIHx8ICdDbGljayBoZXJlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZFRhcmdldC5pbm5lckhUTUwgPSBuZXdDb250ZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgdG9hc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpdmVUb2FzdCcpO1xuICAgICAgICBpZiAodG9hc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBib290c3RyYXAuVG9hc3QodG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHRvYXN0LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMnKTtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGd1ZXN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Vlc3RGb3JtXCIpO1xuICAgICAgICBpZiAoZ3Vlc3RGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICAgICAgZ3Vlc3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndWVzdEZvcm0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvLCBTdGltdWx1cyFcIiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgYWxlcnQoXCJIZWxsbywgU3RpbXVsdXMhXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkhlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1xuICAgICAgICBcImRyb3Bkb3duQnV0dG9uXCIsXG4gICAgICAgIFwiZHJvcGRvd25NZW51XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VCdXR0b25cIixcbiAgICAgICAgXCJsYW5ndWFnZU1lbnVcIixcbiAgICAgICAgXCJ1c2VyTWVudUJ1dHRvblwiLFxuICAgICAgICBcInVzZXJEcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJtb2JpbGVNZW51XCIsXG4gICAgICAgIFwibW9iaWxlTWVudUJ1dHRvblwiXG4gICAgXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOYXZiYXJEcm9wZG93biBjb250cm9sbGVyIGNvbm5lY3RlZFwiKVxuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd25zID0gdGhpcy5jbG9zZURyb3Bkb3ducy5iaW5kKHRoaXMpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3ducylcbiAgICAgICAgdGhpcy5lbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQoKVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3ducylcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wZG93bihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgIGNvbnN0IG1lbnUgPSBidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKVxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgdG9nZ2xlVXNlck1lbnUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpXG4gICAgICAgIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIHNlbGVjdExhbmd1YWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQudHJpbSgpXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbiA+IHNwYW4nKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkTGFuZ3VhZ2VcbiAgICAgICAgdGhpcy5sYW5ndWFnZUJ1dHRvblRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyY1xuICAgICAgICB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIGNsb3NlRHJvcGRvd25zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpc0NsaWNrSW5zaWRlRHJvcGRvd24gPSAoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudVRhcmdldHMuc29tZShtZW51ID0+IG1lbnUuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0ICYmIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQ2xpY2tPbkJ1dHRvbiA9IChcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CdXR0b25UYXJnZXRzLnNvbWUoYnV0dG9uID0+IGJ1dHRvbi5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlQnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzVXNlck1lbnVCdXR0b25UYXJnZXQgJiYgdGhpcy51c2VyTWVudUJ1dHRvblRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICB0aGlzLmhhc01vYmlsZU1lbnVCdXR0b25UYXJnZXQgJiYgdGhpcy5tb2JpbGVNZW51QnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghaXNDbGlja0luc2lkZURyb3Bkb3duICYmICFpc0NsaWNrT25CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VBbGxEcm9wZG93bnMoKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25NZW51VGFyZ2V0cy5mb3JFYWNoKG1lbnUgPT4gbWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSlcbiAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgaWYgKHRoaXMuaGFzVXNlckRyb3Bkb3duTWVudVRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIH1cbiAgICAgICAgLy8gRmVybWVyIGxlIG1lbnUgbW9iaWxlIHNpIG7DqWNlc3NhaXJlXG4gICAgICAgIGlmICh0aGlzLmhhc01vYmlsZU1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudVRhcmdldC5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LTAnLCAncG9pbnRlci1ldmVudHMtbm9uZScpXG4gICAgICAgICAgICBjb25zdCBtZW51UGFuZWwgPSB0aGlzLm1vYmlsZU1lbnVUYXJnZXQucXVlcnlTZWxlY3RvcignLnRyYW5zZm9ybScpXG4gICAgICAgICAgICBpZiAobWVudVBhbmVsKSB7XG4gICAgICAgICAgICAgICAgbWVudVBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zbGF0ZS14LWZ1bGwnKVxuICAgICAgICAgICAgICAgIG1lbnVQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2xhdGUteC0wJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1vYmlsZU1lbnUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BhY2l0eS0wJylcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3BvaW50ZXItZXZlbnRzLW5vbmUnKVxuICAgICAgICBjb25zdCBtZW51UGFuZWwgPSB0aGlzLm1vYmlsZU1lbnVUYXJnZXQucXVlcnlTZWxlY3RvcignLnRyYW5zZm9ybScpXG4gICAgICAgIGlmIChtZW51UGFuZWwpIHtcbiAgICAgICAgICAgIG1lbnVQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKCd0cmFuc2xhdGUteC1mdWxsJylcbiAgICAgICAgICAgIG1lbnVQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKCd0cmFuc2xhdGUteC0wJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc01vYmlsZU1lbnVCdXR0b25UYXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbWJ1cmdlckljb24gPSB0aGlzLm1vYmlsZU1lbnVCdXR0b25UYXJnZXQucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgICAgICAgIGlmIChoYW1idXJnZXJJY29uKSB7XG4gICAgICAgICAgICAgICAgaGFtYnVyZ2VySWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUtOTAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTW9iaWxlU3VibWVudShldmVudCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBzdWJtZW51SWQgPSBidXR0b24uZGF0YXNldC5zdWJtZW51VGFyZ2V0O1xuICAgICAgICBjb25zdCBzdWJtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c3VibWVudUlkfS1zdWJtZW51YCk7XG4gICAgICAgIGNvbnN0IGljb24gPSBidXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbiAgICAgICAgaWYgKHN1Ym1lbnUpIHtcbiAgICAgICAgICAgIHN1Ym1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZS0xODAnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiA8ZGl2PkhlbGxvIHtwcm9wcy5mdWxsTmFtZX08L2Rpdj47XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTmF2QmFyKHsgZnVsbENhcnRRdWFudGl0eSwgcGFyZW50Q2F0ZWdvcmllcywgdXNlciB9KSB7XG4gICAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmVhdGhlci5yZXBsYWNlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50Q2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e2NhdGVnb3J5LnNsdWd9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2NhdGVnb3J5Lm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wICR7aXNTY3JvbGxlZCA/ICdzY3JvbGxlZCcgOiAnJ31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tLzNkLWZsdWVuY3kvOTQvcGFsbS10cmVlLS12Mi5wbmdcIiBhbHQ9XCJQYWxtaWVyXCIgY2xhc3NOYW1lPVwicGFsbWllci1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckNhdGVnb3JpZXMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9hYm91dFwiPkFib3V0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWZlYXRoZXI9XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvd2lzaGxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cImhlYXJ0XCIgY2xhc3NOYW1lPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1mZWF0aGVyPVwic2hvcHBpbmctY2FydFwiIGNsYXNzTmFtZT1cImljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJnLXByaW1hcnkgcm91bmRlZC1waWxsXCI+e2Z1bGxDYXJ0UXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIiBkYXRhLWJzLXRhcmdldD1cIiNvZmZjYW52YXNTZWFyY2hcIiBhcmlhLWNvbnRyb2xzPVwib2ZmY2FudmFzU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVZhbHVlcyA9IE9iamVjdC5rZXlzKHJlYWN0Q29udHJvbGxlcnMpLm1hcCgoa2V5KSA9PiBrZXkucmVwbGFjZSgnLi8nLCAnJykucmVwbGFjZSgnLmpzeCcsICcnKS5yZXBsYWNlKCcudHN4JywgJycpKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVhY3QgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdC4gUG9zc2libGUgdmFsdWVzOiAke3Bvc3NpYmxlVmFsdWVzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAncmVhY3QnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZU92ZXJsYXkiLCJiaW5kIiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVPdmVybGF5IiwiZXZlbnQiLCJfdGhpcyIsInN0b3BQcm9wYWdhdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwib3ZlcmxheSIsIm92ZXJsYXlUYXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGUiLCJlbGVtZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJfZGVmaW5lUHJvcGVydHkiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhlYWRlcnNWYWx1ZSIsImxlbmd0aCIsInVwZGF0ZVNlbGVjdGVkQ2FyZCIsImVycm9yIiwiaW5kZXgiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY2Fyb3VzZWxJbmRleFBhcmFtIiwiYWRkUHVsc2VFZmZlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJzZWxlY3RlZEhlYWRlciIsInBpY3R1cmUiLCJ1cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24iLCJ1cGRhdGVNYWluQ2FyZCIsInRodW1ibmFpbCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWRJbmRleCIsImNvbnRhaW5lciIsImkiLCJuZXdDb250ZW50IiwiY29uY2F0IiwidGl0bGUiLCJjb250ZW50IiwiYnV0dG9uTGluayIsImJ1dHRvblRpdGxlIiwic2VsZWN0ZWRDYXJkVGFyZ2V0IiwiaW5uZXJIVE1MIiwiaGVhZGVycyIsInRvYXN0RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9hc3QiLCJib290c3RyYXAiLCJUb2FzdCIsInNob3ciLCJ0b2dnbGVGb3JtIiwicHJldmVudERlZmF1bHQiLCJndWVzdEZvcm0iLCJhbGVydCIsInRleHRDb250ZW50IiwiY2xvc2VEcm9wZG93bnMiLCJlbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQiLCJ0b2dnbGVEcm9wZG93biIsImJ1dHRvbiIsIm1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbG9zZUFsbERyb3Bkb3ducyIsInRvZ2dsZUxhbmd1YWdlIiwibGFuZ3VhZ2VNZW51VGFyZ2V0IiwidG9nZ2xlVXNlck1lbnUiLCJ1c2VyRHJvcGRvd25NZW51VGFyZ2V0Iiwic2VsZWN0TGFuZ3VhZ2UiLCJzZWxlY3RlZExhbmd1YWdlIiwidHJpbSIsImxhbmd1YWdlQnV0dG9uVGFyZ2V0Iiwic3JjIiwiY2xpY2tlZEVsZW1lbnQiLCJpc0NsaWNrSW5zaWRlRHJvcGRvd24iLCJkcm9wZG93bk1lbnVUYXJnZXRzIiwic29tZSIsImhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQiLCJtb2JpbGVNZW51VGFyZ2V0IiwiaXNDbGlja09uQnV0dG9uIiwiZHJvcGRvd25CdXR0b25UYXJnZXRzIiwiaGFzVXNlck1lbnVCdXR0b25UYXJnZXQiLCJ1c2VyTWVudUJ1dHRvblRhcmdldCIsImhhc01vYmlsZU1lbnVCdXR0b25UYXJnZXQiLCJtb2JpbGVNZW51QnV0dG9uVGFyZ2V0IiwiaGFzTW9iaWxlTWVudVRhcmdldCIsIm1lbnVQYW5lbCIsInRvZ2dsZU1vYmlsZU1lbnUiLCJoYW1idXJnZXJJY29uIiwidG9nZ2xlTW9iaWxlU3VibWVudSIsInN1Ym1lbnVJZCIsInN1Ym1lbnVUYXJnZXQiLCJzdWJtZW51IiwiaWNvbiIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIlJlYWN0IiwianN4cyIsIl9qc3hzIiwicHJvcHMiLCJjaGlsZHJlbiIsImZ1bGxOYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJqc3giLCJfanN4IiwiTmF2QmFyIiwiX3JlZiIsImZ1bGxDYXJ0UXVhbnRpdHkiLCJwYXJlbnRDYXRlZ29yaWVzIiwidXNlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImZlYXRoZXIiLCJyZXBsYWNlIiwicmVuZGVyQ2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNsdWciLCJuYW1lIiwiYWx0IiwidHlwZSIsImlkIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJPYmplY3QiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==