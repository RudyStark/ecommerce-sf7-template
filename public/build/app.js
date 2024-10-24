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
	"./menu_toggle_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/menu_toggle_controller.js",
	"./navbar_dropdown_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/navbar_dropdown_controller.js",
	"./reveal_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/reveal_controller.js"
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
	"./Hello.jsx": "./assets/react/controllers/Hello.jsx"
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
      var newContent = "\n            <div class=\"position-relative h-100 fade-in\">\n                <img src=\"/uploads/header/".concat(selectedHeader.picture, "\" class=\"position-absolute w-100 h-100 object-fit-cover\" alt=\"").concat(selectedHeader.title || '', "\">\n                <div class=\"position-absolute bottom-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4\">\n                    <h1 class=\"text-white fw-bold mb-2\">").concat(selectedHeader.title || '', "</h1>\n                    <p class=\"text-white mb-4\">").concat(selectedHeader.content || '', "</p>\n                    <div class=\"d-flex justify-content-center\">\n                        <a href=\"").concat(selectedHeader.buttonLink || '#', "\" class=\"btn btn-primary rounded-pill\">\n                            ").concat(selectedHeader.buttonTitle || 'Click here', "\n                        </a>\n                    </div>\n                </div>\n            </div>\n        ");
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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/menu_toggle_controller.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/menu_toggle_controller.js ***!
  \************************************************************************************************************************/
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
      console.log("Menu controller connected");
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      // Toggle d-none class
      this.menuTarget.classList.toggle('d-none');

      // Toggle icons
      var menuIcon = this.element.querySelector('.menu-icon');
      var closeIcon = this.element.querySelector('.close-icon');
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('d-none');
        closeIcon.classList.toggle('d-none');
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["menu"]);


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
// navbar_dropdown_controller.js

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      if (this.hasUserDropdownMenuTarget) {
        document.addEventListener('click', this.closeUserDropdown.bind(this));
      }
      if (this.hasLanguageMenuTarget) {
        document.addEventListener('click', this.closeLanguageDropdown.bind(this));
      }

      // Initialiser l'overlay
      var overlay = document.getElementById('menuOverlay');
      overlay.addEventListener('click', function () {
        _this.closeMobileMenu();
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.hasUserDropdownMenuTarget) {
        document.removeEventListener('click', this.closeUserDropdown.bind(this));
      }
      if (this.hasLanguageMenuTarget) {
        document.removeEventListener('click', this.closeLanguageDropdown.bind(this));
      }
      if (this.hasMobileMenuTarget) {
        document.removeEventListener('click', this.closeMobileMenu.bind(this));
      }
    }
  }, {
    key: "toggleUserMenu",
    value: function toggleUserMenu(event) {
      event.stopPropagation();
      this.userDropdownMenuTarget.classList.toggle('show');
    }
  }, {
    key: "closeUserDropdown",
    value: function closeUserDropdown(event) {
      if (!this.userMenuButtonTarget.contains(event.target) && !this.userDropdownMenuTarget.contains(event.target)) {
        this.userDropdownMenuTarget.classList.remove('show');
      }
    }
  }, {
    key: "toggleLanguage",
    value: function toggleLanguage(event) {
      event.stopPropagation();
      this.languageMenuTarget.classList.toggle('show');
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu(event) {
      event.preventDefault();
      var overlay = document.getElementById('menuOverlay');
      if (this.mobileMenuTarget.classList.contains('show')) {
        this.closeMobileMenu();
      } else {
        overlay.classList.add('show');
        this.mobileMenuTarget.classList.add('show');
      }
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      var overlay = document.getElementById('menuOverlay');
      overlay.classList.remove('show');
      this.mobileMenuTarget.classList.remove('show');
    }
  }, {
    key: "closeLanguageDropdown",
    value: function closeLanguageDropdown(event) {
      if (!this.languageButtonTarget.contains(event.target) && !this.languageMenuTarget.contains(event.target)) {
        this.languageMenuTarget.classList.remove('show');
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["dropdownButton", "dropdownMenu", "userMenuButton", "userDropdownMenu", "mobileMenu", "mobileMenuButton", "megaMenu", "languageButton", "languageMenu"]);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/reveal_controller.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/reveal_controller.js ***!
  \*******************************************************************************************************************/
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
      // Révéler les sections visibles au chargement
      this.revealSection();

      // Attacher l'événement de défilement
      window.addEventListener('scroll', this.revealSection.bind(this));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // Nettoyer l'événement de défilement lorsqu'on déconnecte le contrôleur
      window.removeEventListener('scroll', this.revealSection.bind(this));
    }
  }, {
    key: "revealSection",
    value: function revealSection() {
      var triggerBottom = window.innerHeight * 0.8;
      this.sectionTargets.forEach(function (section) {
        var sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add('active');
        }
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["section"]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBM0osV0FBQTtFQUFBLFNBQUEySixpQkFBQTtJQUFBMUosZUFBQSxPQUFBMEosZ0JBQUE7SUFBQSxPQUFBekosVUFBQSxPQUFBeUosZ0JBQUEsRUFBQXhKLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUF1SixnQkFBQSxFQUFBM0osV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQXNKLGdCQUFBO0FBQUEsRUFBUzdKLDBEQUFVOzs7Ozs7Ozs7Ozs7O0FDSHpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL21lbnVfdG9nZ2xlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yZXZlYWxfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2FydF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2FydF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbWVudV90b2dnbGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL21lbnVfdG9nZ2xlX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3JldmVhbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcmV2ZWFsX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vSGVsbG8uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogY29udHJvbGxlcl8wLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzEsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gWydvdmVybGF5J107XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICAvLyBDbG9zZSBvdmVybGF5IHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPdmVybGF5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU92ZXJsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT3ZlcmxheShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBjbG9zaW5nIHRoZSBvdmVybGF5XG4gICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBvdmVybGF5c1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1jYXJkIC5vdmVybGF5JykuZm9yRWFjaCgob3ZlcmxheSkgPT4ge1xuICAgICAgICAgICAgaWYgKG92ZXJsYXkgIT09IHRoaXMub3ZlcmxheVRhcmdldCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBPdmVybGF5IGlzIGFjdGl2ZVxuICAgICAgICB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgY2xvc2VPdmVybGF5KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIGFzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcInNlbGVjdGVkQ2FyZFwiXVxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgICAgIGhlYWRlcnM6IEFycmF5XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJvdXNlbCBjb250cm9sbGVyIGNvbm5lY3RlZFwiLCB0aGlzLmhlYWRlcnNWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcnNWYWx1ZSAmJiB0aGlzLmhlYWRlcnNWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2FyZCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBoZWFkZXJzIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0ZWRDYXJkKGV2ZW50KSB7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZXZlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJvdXNlbEluZGV4UGFyYW0sIDEwKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHVsc2VFZmZlY3QoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGNhcmQgd2l0aCBpbmRleDpcIiwgaW5kZXgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oZWFkZXJzVmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5oZWFkZXJzVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSGVhZGVycyBkYXRhIGlzIG5vdCBhbiBhcnJheTpcIiwgdGhpcy5oZWFkZXJzVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRIZWFkZXIgPSB0aGlzLmhlYWRlcnNWYWx1ZVtpbmRleF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaGVhZGVyOlwiLCBzZWxlY3RlZEhlYWRlcik7XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZEhlYWRlcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gaGVhZGVyIGZvdW5kIGF0IGluZGV4JywgaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZEhlYWRlci5waWN0dXJlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTZWxlY3RlZCBoZWFkZXIgaGFzIG5vIHBpY3R1cmU6Jywgc2VsZWN0ZWRIZWFkZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24oaW5kZXgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1haW5DYXJkKHNlbGVjdGVkSGVhZGVyKTtcbiAgICB9XG5cbiAgICBhZGRQdWxzZUVmZmVjdChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aHVtYm5haWwnKTtcbiAgICAgICAgICAgIGlmICh0aHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZCgncHVsc2UnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbihzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWJuYWlsLWNvbnRhaW5lcicpLmZvckVhY2goKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10aHVtYm5haWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWFpbkNhcmQoc2VsZWN0ZWRIZWFkZXIpIHtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoLTEwMCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXBsb2Fkcy9oZWFkZXIvJHtzZWxlY3RlZEhlYWRlci5waWN0dXJlfVwiIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDAgb2JqZWN0LWZpdC1jb3ZlclwiIGFsdD1cIiR7c2VsZWN0ZWRIZWFkZXIudGl0bGUgfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGJvdHRvbS0wIHN0YXJ0LTAgdy0xMDAgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtd2hpdGUgZnctYm9sZCBtYi0yXCI+JHtzZWxlY3RlZEhlYWRlci50aXRsZSB8fCAnJ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgbWItNFwiPiR7c2VsZWN0ZWRIZWFkZXIuY29udGVudCB8fCAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7c2VsZWN0ZWRIZWFkZXIuYnV0dG9uTGluayB8fCAnIyd9XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgcm91bmRlZC1waWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEhlYWRlci5idXR0b25UaXRsZSB8fCAnQ2xpY2sgaGVyZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRUYXJnZXQuaW5uZXJIVE1MID0gbmV3Q29udGVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHRvYXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlVG9hc3QnKTtcbiAgICAgICAgaWYgKHRvYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgYm9vdHN0cmFwLlRvYXN0KHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGZvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBndWVzdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXN0Rm9ybVwiKTtcbiAgICAgICAgaWYgKGd1ZXN0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpIHtcbiAgICAgICAgICAgIGd1ZXN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3Vlc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbywgU3RpbXVsdXMhXCIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGFsZXJ0KFwiSGVsbG8sIFN0aW11bHVzIVwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gXCJIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wibWVudVwiXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZW51IGNvbnRyb2xsZXIgY29ubmVjdGVkXCIpO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIC8vIFRvZ2dsZSBkLW5vbmUgY2xhc3NcbiAgICAgICAgdGhpcy5tZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBpY29uc1xuICAgICAgICBjb25zdCBtZW51SWNvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xuXG4gICAgICAgIGlmIChtZW51SWNvbiAmJiBjbG9zZUljb24pIHtcbiAgICAgICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgY2xvc2VJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcbiAgICAgICAgXCJkcm9wZG93bkJ1dHRvblwiLFxuICAgICAgICBcImRyb3Bkb3duTWVudVwiLFxuICAgICAgICBcInVzZXJNZW51QnV0dG9uXCIsXG4gICAgICAgIFwidXNlckRyb3Bkb3duTWVudVwiLFxuICAgICAgICBcIm1vYmlsZU1lbnVcIixcbiAgICAgICAgXCJtb2JpbGVNZW51QnV0dG9uXCIsXG4gICAgICAgIFwibWVnYU1lbnVcIixcbiAgICAgICAgXCJsYW5ndWFnZUJ1dHRvblwiLFxuICAgICAgICBcImxhbmd1YWdlTWVudVwiXG4gICAgXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzVXNlckRyb3Bkb3duTWVudVRhcmdldCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlVXNlckRyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzTGFuZ3VhZ2VNZW51VGFyZ2V0KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VMYW5ndWFnZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZXIgbCdvdmVybGF5XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudU92ZXJsYXknKTtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVVzZXJEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc0xhbmd1YWdlTWVudVRhcmdldCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTGFuZ3VhZ2VEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc01vYmlsZU1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vYmlsZU1lbnUuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVVc2VyTWVudShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICBjbG9zZVVzZXJEcm9wZG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlck1lbnVCdXR0b25UYXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICB0b2dnbGVNb2JpbGVNZW51KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudU92ZXJsYXknKTtcblxuICAgICAgICBpZiAodGhpcy5tb2JpbGVNZW51VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVPdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cblxuICAgIGNsb3NlTGFuZ3VhZ2VEcm9wZG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcInNlY3Rpb25cIl1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIFLDqXbDqWxlciBsZXMgc2VjdGlvbnMgdmlzaWJsZXMgYXUgY2hhcmdlbWVudFxuICAgICAgICB0aGlzLnJldmVhbFNlY3Rpb24oKVxuXG4gICAgICAgIC8vIEF0dGFjaGVyIGwnw6l2w6luZW1lbnQgZGUgZMOpZmlsZW1lbnRcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMucmV2ZWFsU2VjdGlvbi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIC8vIE5ldHRveWVyIGwnw6l2w6luZW1lbnQgZGUgZMOpZmlsZW1lbnQgbG9yc3F1J29uIGTDqWNvbm5lY3RlIGxlIGNvbnRyw7RsZXVyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnJldmVhbFNlY3Rpb24uYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICByZXZlYWxTZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB0cmlnZ2VyQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0ICogMC44XG5cbiAgICAgICAgdGhpcy5zZWN0aW9uVGFyZ2V0cy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgICAgIGlmIChzZWN0aW9uVG9wIDwgdHJpZ2dlckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIDxkaXY+SGVsbG8ge3Byb3BzLmZ1bGxOYW1lfTwvZGl2Pjtcbn1cbiIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlVmFsdWVzID0gT2JqZWN0LmtleXMocmVhY3RDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcuanN4JywgJycpLnJlcGxhY2UoJy50c3gnLCAnJykpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdCBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlT3ZlcmxheSIsImJpbmQiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU92ZXJsYXkiLCJldmVudCIsIl90aGlzIiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJvdmVybGF5Iiwib3ZlcmxheVRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZSIsImVsZW1lbnQiLCJjb250YWlucyIsInRhcmdldCIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyc1ZhbHVlIiwibGVuZ3RoIiwidXBkYXRlU2VsZWN0ZWRDYXJkIiwiZXJyb3IiLCJpbmRleCIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjYXJvdXNlbEluZGV4UGFyYW0iLCJhZGRQdWxzZUVmZmVjdCIsIkFycmF5IiwiaXNBcnJheSIsInNlbGVjdGVkSGVhZGVyIiwicGljdHVyZSIsInVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbiIsInVwZGF0ZU1haW5DYXJkIiwidGh1bWJuYWlsIiwicXVlcnlTZWxlY3RvciIsImFkZCIsInNldFRpbWVvdXQiLCJzZWxlY3RlZEluZGV4IiwiY29udGFpbmVyIiwiaSIsIm5ld0NvbnRlbnQiLCJjb25jYXQiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b25MaW5rIiwiYnV0dG9uVGl0bGUiLCJzZWxlY3RlZENhcmRUYXJnZXQiLCJpbm5lckhUTUwiLCJoZWFkZXJzIiwidG9hc3RFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2FzdCIsImJvb3RzdHJhcCIsIlRvYXN0Iiwic2hvdyIsInRvZ2dsZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImd1ZXN0Rm9ybSIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVNZW51IiwibWVudVRhcmdldCIsIm1lbnVJY29uIiwiY2xvc2VJY29uIiwiaGFzVXNlckRyb3Bkb3duTWVudVRhcmdldCIsImNsb3NlVXNlckRyb3Bkb3duIiwiaGFzTGFuZ3VhZ2VNZW51VGFyZ2V0IiwiY2xvc2VMYW5ndWFnZURyb3Bkb3duIiwiY2xvc2VNb2JpbGVNZW51IiwiaGFzTW9iaWxlTWVudVRhcmdldCIsInRvZ2dsZVVzZXJNZW51IiwidXNlckRyb3Bkb3duTWVudVRhcmdldCIsInVzZXJNZW51QnV0dG9uVGFyZ2V0IiwidG9nZ2xlTGFuZ3VhZ2UiLCJsYW5ndWFnZU1lbnVUYXJnZXQiLCJ0b2dnbGVNb2JpbGVNZW51IiwibW9iaWxlTWVudVRhcmdldCIsImxhbmd1YWdlQnV0dG9uVGFyZ2V0IiwicmV2ZWFsU2VjdGlvbiIsIndpbmRvdyIsInRyaWdnZXJCb3R0b20iLCJpbm5lckhlaWdodCIsInNlY3Rpb25UYXJnZXRzIiwic2VjdGlvbiIsInNlY3Rpb25Ub3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJSZWFjdCIsImpzeHMiLCJfanN4cyIsInByb3BzIiwiY2hpbGRyZW4iLCJmdWxsTmFtZSIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwia2V5cyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsIm5hbWUiLCJjb21wb25lbnQiLCJwb3NzaWJsZVZhbHVlcyIsIk9iamVjdCIsIm1hcCIsInJlcGxhY2UiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==