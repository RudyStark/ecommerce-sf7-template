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
      menu.classList.toggle('show'); // Utilise 'show' pour afficher/masquer le dropdown
    }
  }, {
    key: "toggleLanguage",
    value: function toggleLanguage(event) {
      event.stopPropagation();
      this.closeAllDropdowns();
      this.languageMenuTarget.classList.toggle('show'); // Utilise 'show' pour afficher/masquer le menu
    }
  }, {
    key: "toggleUserMenu",
    value: function toggleUserMenu(event) {
      event.stopPropagation();
      this.closeAllDropdowns();
      this.userDropdownMenuTarget.classList.toggle('show'); // Utilise 'show' pour afficher/masquer le menu utilisateur
    }
  }, {
    key: "selectLanguage",
    value: function selectLanguage(event) {
      event.preventDefault();
      var selectedLanguage = event.currentTarget.textContent.trim();
      this.languageButtonTarget.querySelector('span').textContent = selectedLanguage;
      this.languageButtonTarget.querySelector('img').src = event.currentTarget.querySelector('img').src;
      this.languageMenuTarget.classList.remove('show'); // Ferme le menu après sélection
    }
  }, {
    key: "closeDropdowns",
    value: function closeDropdowns(event) {
      var clickedElement = event.target;
      var isClickInsideDropdown = this.dropdownMenuTargets.some(function (menu) {
        return menu.contains(clickedElement);
      }) || this.hasLanguageMenuTarget && this.languageMenuTarget.contains(clickedElement) || this.hasUserDropdownMenuTarget && this.userDropdownMenuTarget.contains(clickedElement) || this.hasMobileMenuTarget && this.mobileMenuTarget.contains(clickedElement);
      var isClickOnButton = this.dropdownButtonTargets.some(function (button) {
        return button.contains(clickedElement);
      }) || this.hasLanguageButtonTarget && this.languageButtonTarget.contains(clickedElement) || this.hasUserMenuButtonTarget && this.userMenuButtonTarget.contains(clickedElement) || this.hasMobileMenuButtonTarget && this.mobileMenuButtonTarget.contains(clickedElement);
      if (!isClickInsideDropdown && !isClickOnButton) {
        this.closeAllDropdowns();
      }
    }
  }, {
    key: "closeAllDropdowns",
    value: function closeAllDropdowns() {
      this.dropdownMenuTargets.forEach(function (menu) {
        return menu.classList.remove('show');
      }); // Ferme tous les dropdowns
      if (this.hasLanguageMenuTarget) {
        this.languageMenuTarget.classList.remove('show');
      }
      if (this.hasUserDropdownMenuTarget) {
        this.userDropdownMenuTarget.classList.remove('show');
      }
      // Fermer le menu mobile si nécessaire
      if (this.hasMobileMenuTarget) {
        this.mobileMenuTarget.classList.remove('show');
      }
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu(event) {
      event.preventDefault();
      var mobileMenu = document.getElementById("mobileMenu");
      var bsOffcanvas = new bootstrap.Offcanvas(mobileMenu);
      bsOffcanvas.toggle(); // Utilisation du Offcanvas de Bootstrap pour le menu mobile
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnVFO0FBQ0Q7QUFDdEUsaUVBQWU7QUFDZiw4QkFBOEIsbUZBQVk7QUFDMUMsbUNBQW1DLGtGQUFZO0FBQy9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wrQztBQUFBLElBQUFDLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBSzVDLFNBQUFDLE9BQU9BLENBQUEsRUFBRztNQUNOO01BQ0FDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEU7RUFBQztJQUFBTixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTSxVQUFVQSxDQUFBLEVBQUc7TUFDVEosUUFBUSxDQUFDSyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDSCxZQUFZLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RTtFQUFDO0lBQUFOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFRLGFBQWFBLENBQUNDLEtBQUssRUFBRTtNQUFBLElBQUFDLEtBQUE7TUFDakJELEtBQUssQ0FBQ0UsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3pCO01BQ0FULFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBSztRQUNyRSxJQUFJQSxPQUFPLEtBQUtKLEtBQUksQ0FBQ0ssYUFBYSxFQUFFO1VBQ2hDRCxPQUFPLENBQUNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN0QztNQUNKLENBQUMsQ0FBQztNQUNGO01BQ0EsSUFBSSxDQUFDRixhQUFhLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNqRDtFQUFDO0lBQUFuQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSSxZQUFZQSxDQUFDSyxLQUFLLEVBQUU7TUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQ1UsT0FBTyxDQUFDQyxRQUFRLENBQUNYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLEVBQUU7UUFDdEMsSUFBSSxDQUFDTixhQUFhLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNqRDtJQUNKO0VBQUM7QUFBQSxFQTVCd0IxQiwwREFBVTtBQUFBK0IsZUFBQSxDQUFBOUIsUUFBQSxhQUNsQixDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hoQztBQUNnRDtBQUFBLElBQUFBLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBUTVDLFNBQUFDLE9BQU9BLENBQUEsRUFBRztNQUNOdUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7TUFDL0QsSUFBSSxJQUFJLENBQUNBLFlBQVksSUFBSSxJQUFJLENBQUNBLFlBQVksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuRCxJQUFJLENBQUNDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztNQUM5QixDQUFDLE1BQU07UUFDSEosT0FBTyxDQUFDSyxLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDOUM7SUFDSjtFQUFDO0lBQUE5QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNEIsa0JBQWtCQSxDQUFDbkIsS0FBSyxFQUFFO01BQ3RCLElBQUlxQixLQUFLO01BQ1QsSUFBSSxPQUFPckIsS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQnFCLEtBQUssR0FBR3JCLEtBQUs7TUFDakIsQ0FBQyxNQUFNO1FBQ0hxQixLQUFLLEdBQUdDLFFBQVEsQ0FBQ3RCLEtBQUssQ0FBQ3VCLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDQyxjQUFjLENBQUMxQixLQUFLLENBQUN1QixhQUFhLENBQUM7TUFDNUM7TUFFQVIsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVLLEtBQUssQ0FBQztNQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDSixZQUFZLElBQUksQ0FBQ1UsS0FBSyxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDWCxZQUFZLENBQUMsRUFBRTtRQUN6REYsT0FBTyxDQUFDSyxLQUFLLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDSCxZQUFZLENBQUM7UUFDakU7TUFDSjtNQUVBLElBQU1ZLGNBQWMsR0FBRyxJQUFJLENBQUNaLFlBQVksQ0FBQ0ksS0FBSyxDQUFDO01BQy9DTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRWEsY0FBYyxDQUFDO01BRS9DLElBQUksQ0FBQ0EsY0FBYyxFQUFFO1FBQ2pCZCxPQUFPLENBQUNLLEtBQUssQ0FBQywwQkFBMEIsRUFBRUMsS0FBSyxDQUFDO1FBQ2hEO01BQ0o7TUFFQSxJQUFJLENBQUNRLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFO1FBQ3pCZixPQUFPLENBQUNLLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRVMsY0FBYyxDQUFDO1FBQ2hFO01BQ0o7TUFFQSxJQUFJLENBQUNFLHdCQUF3QixDQUFDVixLQUFLLENBQUM7TUFDcEMsSUFBSSxDQUFDVyxjQUFjLENBQUNILGNBQWMsQ0FBQztJQUN2QztFQUFDO0lBQUF2QyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUMsY0FBY0EsQ0FBQ2hCLE9BQU8sRUFBRTtNQUNwQixJQUFJQSxPQUFPLEVBQUU7UUFDVCxJQUFNdUIsU0FBUyxHQUFHdkIsT0FBTyxDQUFDd0IsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUNyRCxJQUFJRCxTQUFTLEVBQUU7VUFDWEEsU0FBUyxDQUFDMUIsU0FBUyxDQUFDNEIsR0FBRyxDQUFDLE9BQU8sQ0FBQztVQUNoQ0MsVUFBVSxDQUFDLFlBQU07WUFDYkgsU0FBUyxDQUFDMUIsU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDO1VBQ3ZDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDWDtNQUNKO0lBQ0o7RUFBQztJQUFBbEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdDLHdCQUF3QkEsQ0FBQ00sYUFBYSxFQUFFO01BQ3BDLElBQUksQ0FBQzNCLE9BQU8sQ0FBQ1AsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNrQyxTQUFTLEVBQUVDLENBQUMsRUFBSztRQUM1RSxJQUFJQSxDQUFDLEtBQUtGLGFBQWEsRUFBRTtVQUNyQkMsU0FBUyxDQUFDL0IsU0FBUyxDQUFDNEIsR0FBRyxDQUFDLG9CQUFvQixDQUFDO1FBQ2pELENBQUMsTUFBTTtVQUNIRyxTQUFTLENBQUMvQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUNwRDtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQWxCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5QyxjQUFjQSxDQUFDSCxjQUFjLEVBQUU7TUFDM0IsSUFBTVcsVUFBVSxnSEFBQUMsTUFBQSxDQUVvQlosY0FBYyxDQUFDQyxPQUFPLHdFQUFBVyxNQUFBLENBQWlFWixjQUFjLENBQUNhLEtBQUssSUFBSSxFQUFFLGdNQUFBRCxNQUFBLENBRW5HWixjQUFjLENBQUNhLEtBQUssSUFBSSxFQUFFLDhEQUFBRCxNQUFBLENBQ25DWixjQUFjLENBQUNjLE9BQU8sSUFBSSxFQUFFLGlIQUFBRixNQUFBLENBRTFDWixjQUFjLENBQUNlLFVBQVUsSUFBSSxHQUFHLDhFQUFBSCxNQUFBLENBQ3JDWixjQUFjLENBQUNnQixXQUFXLElBQUksWUFBWSxxSEFLL0Q7TUFFRCxJQUFJLENBQUNDLGtCQUFrQixDQUFDQyxTQUFTLEdBQUdQLFVBQVU7SUFDbEQ7RUFBQztBQUFBLEVBdkZ3QjFELDBEQUFVO0FBQUErQixlQUFBLENBQUE5QixRQUFBLGFBQ2xCLENBQUMsY0FBYyxDQUFDO0FBQUE4QixlQUFBLENBQUE5QixRQUFBLFlBQ2pCO0VBQ1ppRSxPQUFPLEVBQUVyQjtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AyQztBQUFBLElBQUE1QyxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUc1QyxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTixJQUFNeUQsWUFBWSxHQUFHeEQsUUFBUSxDQUFDeUQsY0FBYyxDQUFDLFdBQVcsQ0FBQztNQUN6RCxJQUFJRCxZQUFZLEVBQUU7UUFDZCxJQUFNRSxLQUFLLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxLQUFLLENBQUNKLFlBQVksQ0FBQztRQUMvQ0UsS0FBSyxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUNoQjtJQUNKO0VBQUM7QUFBQSxFQVB3QnhFLDBEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUztBQUFBLElBQUFDLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBRzVDLFNBQUFDLE9BQU9BLENBQUEsRUFBRztNQUNOdUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkNBQTZDLENBQUM7SUFDOUQ7RUFBQztJQUFBMUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdFLFVBQVVBLENBQUN2RCxLQUFLLEVBQUU7TUFDZEEsS0FBSyxDQUFDd0QsY0FBYyxDQUFDLENBQUM7TUFDdEIsSUFBTUMsU0FBUyxHQUFHaEUsUUFBUSxDQUFDeUQsY0FBYyxDQUFDLFdBQVcsQ0FBQztNQUN0RCxJQUFJTyxTQUFTLENBQUNsRCxTQUFTLENBQUNJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN4QzhDLFNBQVMsQ0FBQ2xELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN4QyxDQUFDLE1BQU07UUFDSGlELFNBQVMsQ0FBQ2xELFNBQVMsQ0FBQzRCLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDckM7SUFDSjtFQUFDO0FBQUEsRUFid0JyRCwwREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlM7QUFBQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUc1QyxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTnVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ04sT0FBTyxDQUFDO01BQzdDZ0QsS0FBSyxDQUFDLGtCQUFrQixDQUFDO01BQ3pCLElBQUksQ0FBQ2hELE9BQU8sQ0FBQ2lELFdBQVcsR0FBRyxtRUFBbUU7SUFDbEc7RUFBQztBQUFBLEVBTHdCN0UsMERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUztBQUFBLElBQUFDLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBSzVDLFNBQUFDLE9BQU9BLENBQUEsRUFBRztNQUNOdUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7SUFDNUM7RUFBQztJQUFBMUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFFLFVBQVVBLENBQUEsRUFBRztNQUNUO01BQ0EsSUFBSSxDQUFDQyxVQUFVLENBQUN0RCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7O01BRTFDO01BQ0EsSUFBTXFELFFBQVEsR0FBRyxJQUFJLENBQUNwRCxPQUFPLENBQUN3QixhQUFhLENBQUMsWUFBWSxDQUFDO01BQ3pELElBQU02QixTQUFTLEdBQUcsSUFBSSxDQUFDckQsT0FBTyxDQUFDd0IsYUFBYSxDQUFDLGFBQWEsQ0FBQztNQUUzRCxJQUFJNEIsUUFBUSxJQUFJQyxTQUFTLEVBQUU7UUFDdkJELFFBQVEsQ0FBQ3ZELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNuQ3NELFNBQVMsQ0FBQ3hELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN4QztJQUNKO0VBQUM7QUFBQSxFQW5Cd0IzQiwwREFBVTtBQUFBK0IsZUFBQSxDQUFBOUIsUUFBQSxhQUNsQixDQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUFBLElBQUFBLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBYzNDLFNBQUFDLE9BQU9BLENBQUEsRUFBRztNQUNOdUIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUNBQXFDLENBQUM7TUFDbEQsSUFBSSxDQUFDZ0QsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwREgsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDc0UsY0FBYyxDQUFDO01BQ3ZELElBQUksQ0FBQ0Msd0JBQXdCLENBQUMsQ0FBQztJQUNuQztFQUFDO0lBQUEzRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTSxVQUFVQSxDQUFBLEVBQUc7TUFDVEosUUFBUSxDQUFDSyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDa0UsY0FBYyxDQUFDO0lBQzlEO0VBQUM7SUFBQTFFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyRSxjQUFjQSxDQUFDbEUsS0FBSyxFQUFFO01BQ2xCQSxLQUFLLENBQUNFLGVBQWUsQ0FBQyxDQUFDO01BQ3ZCLElBQU1pRSxNQUFNLEdBQUduRSxLQUFLLENBQUN1QixhQUFhO01BQ2xDLElBQU02QyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0Usa0JBQWtCO01BQ3RDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztNQUN4QkYsSUFBSSxDQUFDN0QsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRTtJQUNwQztFQUFDO0lBQUFuQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0YsY0FBY0EsQ0FBQ3ZFLEtBQUssRUFBRTtNQUNsQkEsS0FBSyxDQUFDRSxlQUFlLENBQUMsQ0FBQztNQUN2QixJQUFJLENBQUNvRSxpQkFBaUIsQ0FBQyxDQUFDO01BQ3hCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUNqRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFO0lBQ3ZEO0VBQUM7SUFBQW5CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrRixjQUFjQSxDQUFDekUsS0FBSyxFQUFFO01BQ2xCQSxLQUFLLENBQUNFLGVBQWUsQ0FBQyxDQUFDO01BQ3ZCLElBQUksQ0FBQ29FLGlCQUFpQixDQUFDLENBQUM7TUFDeEIsSUFBSSxDQUFDSSxzQkFBc0IsQ0FBQ25FLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUU7SUFDM0Q7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9GLGNBQWNBLENBQUMzRSxLQUFLLEVBQUU7TUFDbEJBLEtBQUssQ0FBQ3dELGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQU1vQixnQkFBZ0IsR0FBRzVFLEtBQUssQ0FBQ3VCLGFBQWEsQ0FBQ29DLFdBQVcsQ0FBQ2tCLElBQUksQ0FBQyxDQUFDO01BQy9ELElBQUksQ0FBQ0Msb0JBQW9CLENBQUM1QyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUN5QixXQUFXLEdBQUdpQixnQkFBZ0I7TUFDOUUsSUFBSSxDQUFDRSxvQkFBb0IsQ0FBQzVDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzZDLEdBQUcsR0FBRy9FLEtBQUssQ0FBQ3VCLGFBQWEsQ0FBQ1csYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDNkMsR0FBRztNQUNqRyxJQUFJLENBQUNQLGtCQUFrQixDQUFDakUsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRTtJQUN2RDtFQUFDO0lBQUFsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBeUUsY0FBY0EsQ0FBQ2hFLEtBQUssRUFBRTtNQUNsQixJQUFNZ0YsY0FBYyxHQUFHaEYsS0FBSyxDQUFDWSxNQUFNO01BQ25DLElBQU1xRSxxQkFBcUIsR0FDdkIsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFmLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUN6RCxRQUFRLENBQUNxRSxjQUFjLENBQUM7TUFBQSxFQUFDLElBQ25FLElBQUksQ0FBQ0kscUJBQXFCLElBQUksSUFBSSxDQUFDWixrQkFBa0IsQ0FBQzdELFFBQVEsQ0FBQ3FFLGNBQWMsQ0FBRSxJQUMvRSxJQUFJLENBQUNLLHlCQUF5QixJQUFJLElBQUksQ0FBQ1gsc0JBQXNCLENBQUMvRCxRQUFRLENBQUNxRSxjQUFjLENBQUUsSUFDdkYsSUFBSSxDQUFDTSxtQkFBbUIsSUFBSSxJQUFJLENBQUNDLGdCQUFnQixDQUFDNUUsUUFBUSxDQUFDcUUsY0FBYyxDQUM3RTtNQUNELElBQU1RLGVBQWUsR0FDakIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ04sSUFBSSxDQUFDLFVBQUFoQixNQUFNO1FBQUEsT0FBSUEsTUFBTSxDQUFDeEQsUUFBUSxDQUFDcUUsY0FBYyxDQUFDO01BQUEsRUFBQyxJQUN6RSxJQUFJLENBQUNVLHVCQUF1QixJQUFJLElBQUksQ0FBQ1osb0JBQW9CLENBQUNuRSxRQUFRLENBQUNxRSxjQUFjLENBQUUsSUFDbkYsSUFBSSxDQUFDVyx1QkFBdUIsSUFBSSxJQUFJLENBQUNDLG9CQUFvQixDQUFDakYsUUFBUSxDQUFDcUUsY0FBYyxDQUFFLElBQ25GLElBQUksQ0FBQ2EseUJBQXlCLElBQUksSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQ25GLFFBQVEsQ0FBQ3FFLGNBQWMsQ0FDekY7TUFFRCxJQUFJLENBQUNDLHFCQUFxQixJQUFJLENBQUNPLGVBQWUsRUFBRTtRQUM1QyxJQUFJLENBQUNsQixpQkFBaUIsQ0FBQyxDQUFDO01BQzVCO0lBQ0o7RUFBQztJQUFBaEYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStFLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2hCLElBQUksQ0FBQ1ksbUJBQW1CLENBQUM5RSxPQUFPLENBQUMsVUFBQWdFLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUM3RCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFBQSxFQUFDLENBQUMsQ0FBRTtNQUMxRSxJQUFJLElBQUksQ0FBQzRFLHFCQUFxQixFQUFFO1FBQzVCLElBQUksQ0FBQ1osa0JBQWtCLENBQUNqRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDcEQ7TUFDQSxJQUFJLElBQUksQ0FBQzZFLHlCQUF5QixFQUFFO1FBQ2hDLElBQUksQ0FBQ1gsc0JBQXNCLENBQUNuRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDeEQ7TUFDQTtNQUNBLElBQUksSUFBSSxDQUFDOEUsbUJBQW1CLEVBQUU7UUFDMUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ2hGLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUNsRDtJQUNKO0VBQUM7SUFBQWxCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3RyxnQkFBZ0JBLENBQUMvRixLQUFLLEVBQUU7TUFDcEJBLEtBQUssQ0FBQ3dELGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQU13QyxVQUFVLEdBQUd2RyxRQUFRLENBQUN5RCxjQUFjLENBQUMsWUFBWSxDQUFDO01BQ3hELElBQU0rQyxXQUFXLEdBQUcsSUFBSTdDLFNBQVMsQ0FBQzhDLFNBQVMsQ0FBQ0YsVUFBVSxDQUFDO01BQ3ZEQyxXQUFXLENBQUN4RixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUU7SUFDM0I7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBFLHdCQUF3QkEsQ0FBQSxFQUFHO01BQ3ZCLElBQUksQ0FBQ0ssaUJBQWlCLENBQUMsQ0FBQztJQUM1QjtFQUFDO0FBQUEsRUE5RndCeEYsMERBQVU7QUFBQStCLGVBQUEsQ0FBQTlCLFFBQUEsYUFDbEIsQ0FDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLENBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjBDO0FBQUEsSUFBQUEsUUFBQSwwQkFBQUMsV0FBQTtFQUFBLFNBQUFELFNBQUE7SUFBQUUsZUFBQSxPQUFBRixRQUFBO0lBQUEsT0FBQUcsVUFBQSxPQUFBSCxRQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLFFBQUEsRUFBQUMsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQU4sUUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFLM0MsU0FBQUMsT0FBT0EsQ0FBQSxFQUFHO01BQ047TUFDQSxJQUFJLENBQUMyRyxhQUFhLENBQUMsQ0FBQzs7TUFFcEI7TUFDQUMsTUFBTSxDQUFDMUcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3lHLGFBQWEsQ0FBQ3ZHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRTtFQUFDO0lBQUFOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFNLFVBQVVBLENBQUEsRUFBRztNQUNUO01BQ0F1RyxNQUFNLENBQUN0RyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDcUcsYUFBYSxDQUFDdkcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFO0VBQUM7SUFBQU4sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRHLGFBQWFBLENBQUEsRUFBRztNQUNaLElBQU1FLGFBQWEsR0FBR0QsTUFBTSxDQUFDRSxXQUFXLEdBQUcsR0FBRztNQUU5QyxJQUFJLENBQUNDLGNBQWMsQ0FBQ25HLE9BQU8sQ0FBQyxVQUFBb0csT0FBTyxFQUFJO1FBQ25DLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUNDLEdBQUc7UUFFdEQsSUFBSUYsVUFBVSxHQUFHSixhQUFhLEVBQUU7VUFDNUJHLE9BQU8sQ0FBQ2pHLFNBQVMsQ0FBQzRCLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDbkM7TUFDSixDQUFDLENBQUM7SUFDTjtFQUFDO0FBQUEsRUExQndCckQsMERBQVU7QUFBQStCLGVBQUEsQ0FBQTlCLFFBQUEsYUFDbEIsQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIc0M7QUFDakQ7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQzBCO0FBRTFCNkgsb0ZBQWlDLENBQUNDLCtFQUEyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWmxDO0FBRXJELElBQU1HLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNGLDRJQUluQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0I7QUFBQTtBQUUxQiw2QkFBZSxvQ0FBVU8sS0FBSyxFQUFFO0VBQzVCLG9CQUFPRCx1REFBQTtJQUFBRSxRQUFBLEdBQUssUUFBTSxFQUFDRCxLQUFLLENBQUNFLFFBQVE7RUFBQSxDQUFNLENBQUM7QUFDNUM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLFNBQVNWLGlDQUFpQ0EsQ0FBQ0UsT0FBTyxFQUFFO0VBQ2hELElBQU1TLGdCQUFnQixHQUFHLENBQUMsQ0FBQztFQUMzQixJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQXdCQSxDQUFJQyxDQUFDLEVBQUs7SUFDcENBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQ3RILE9BQU8sQ0FBQyxVQUFDZCxHQUFHLEVBQUs7TUFDdEJpSSxnQkFBZ0IsQ0FBQ2pJLEdBQUcsQ0FBQyxHQUFHbUksQ0FBQyxDQUFDbkksR0FBRyxDQUFDLFdBQVE7SUFDMUMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNEa0ksd0JBQXdCLENBQUNWLE9BQU8sQ0FBQztFQUNqQ1YsTUFBTSxDQUFDdUIscUJBQXFCLEdBQUcsVUFBQ0MsSUFBSSxFQUFLO0lBQ3JDLElBQU1DLFNBQVMsR0FBR04sZ0JBQWdCLE1BQUE5RSxNQUFBLENBQU1tRixJQUFJLFVBQU8sSUFBSUwsZ0JBQWdCLE1BQUE5RSxNQUFBLENBQU1tRixJQUFJLFVBQU87SUFDeEYsSUFBSSxPQUFPQyxTQUFTLEtBQUssV0FBVyxFQUFFO01BQ2xDLElBQU1DLGNBQWMsR0FBR0MsTUFBTSxDQUFDTCxJQUFJLENBQUNILGdCQUFnQixDQUFDLENBQUNTLEdBQUcsQ0FBQyxVQUFDMUksR0FBRztRQUFBLE9BQUtBLEdBQUcsQ0FBQzJJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUNBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUNBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO01BQUEsRUFBQztNQUNoSSxNQUFNLElBQUlDLEtBQUssdUJBQUF6RixNQUFBLENBQXNCbUYsSUFBSSwwQ0FBQW5GLE1BQUEsQ0FBc0NxRixjQUFjLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO0lBQy9HO0lBQ0EsT0FBT04sU0FBUztFQUNwQixDQUFDO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCMEI7QUFDUztBQUNhO0FBRWhELElBQUlRLFVBQVU7QUFFZCxJQUFJQyxDQUFDLEdBQUdGLHNDQUFVO0FBQ2xCLElBQUlHLEtBQXFDLEVBQUUsRUFHMUMsTUFBTTtFQUNMLElBQUloRyxDQUFDLEdBQUcrRixDQUFDLENBQUNLLGtEQUFrRDtFQUM1RE4sVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQVlPLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQzFCdEcsQ0FBQyxDQUFDdUcscUJBQXFCLEdBQUcsSUFBSTtJQUM5QixJQUFJO01BQ0YsT0FBT1IsQ0FBQyxDQUFDRCxVQUFVLENBQUNPLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQzNCLENBQUMsU0FBUztNQUNSdEcsQ0FBQyxDQUFDdUcscUJBQXFCLEdBQUcsS0FBSztJQUNqQztFQUNGLENBQUM7QUFDSDtBQUFDLElBRUtDLFNBQVMsMEJBQUEvSixXQUFBO0VBQUEsU0FBQStKLFVBQUE7SUFBQTlKLGVBQUEsT0FBQThKLFNBQUE7SUFBQSxPQUFBN0osVUFBQSxPQUFBNkosU0FBQSxFQUFBNUosU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQTJKLFNBQUEsRUFBQS9KLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUEwSixTQUFBO0lBQUF6SixHQUFBO0lBQUFDLEtBQUEsRUFDWCxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTixJQUFNNEgsS0FBSyxHQUFHLElBQUksQ0FBQzRCLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO01BQ3RELElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUFFcEIsU0FBUyxFQUFFLElBQUksQ0FBQ3FCLGNBQWM7UUFBRTlCLEtBQUssRUFBRUE7TUFBTSxDQUFDLENBQUM7TUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQzhCLGNBQWMsRUFBRTtRQUN0QixNQUFNLElBQUloQixLQUFLLENBQUMseUJBQXlCLENBQUM7TUFDOUM7TUFDQSxJQUFNTCxTQUFTLEdBQUd6QixNQUFNLENBQUN1QixxQkFBcUIsQ0FBQyxJQUFJLENBQUN1QixjQUFjLENBQUM7TUFDbkUsSUFBSSxDQUFDQyxtQkFBbUIsY0FBQ2xDLDBEQUFtQixDQUFDWSxTQUFTLEVBQUVULEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNyRSxJQUFJLENBQUM2QixhQUFhLENBQUMsT0FBTyxFQUFFO1FBQ3hCSSxhQUFhLEVBQUUsSUFBSSxDQUFDSCxjQUFjO1FBQ2xDckIsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCVCxLQUFLLEVBQUVBO01BQ1gsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBOUgsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQU0sVUFBVUEsQ0FBQSxFQUFHO01BQ1QsSUFBSSxDQUFDYSxPQUFPLENBQUM0SSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQ04sYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUMxQnBCLFNBQVMsRUFBRSxJQUFJLENBQUNxQixjQUFjO1FBQzlCOUIsS0FBSyxFQUFFLElBQUksQ0FBQzRCLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRztNQUMvQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUExSixHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBNEosbUJBQW1CQSxDQUFDSyxZQUFZLEVBQUU7TUFDOUIsSUFBTTlJLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU87TUFDNUIsSUFBSSxDQUFDQSxPQUFPLENBQUM0SSxJQUFJLEVBQUU7UUFDZjVJLE9BQU8sQ0FBQzRJLElBQUksR0FBR2pCLFVBQVUsQ0FBQyxJQUFJLENBQUMzSCxPQUFPLENBQUM7TUFDM0M7TUFDQUEsT0FBTyxDQUFDNEksSUFBSSxDQUFDRyxNQUFNLENBQUNELFlBQVksQ0FBQztJQUNyQztFQUFDO0lBQUFsSyxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBMEosYUFBYUEsQ0FBQ3JCLElBQUksRUFBRThCLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNDLFFBQVEsQ0FBQy9CLElBQUksRUFBRTtRQUFFZ0MsTUFBTSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FBQztJQUM3RDtFQUFDO0FBQUEsRUEvQm1CL0ssMERBQVU7QUFpQ2xDaUssU0FBUyxDQUFDZSxNQUFNLEdBQUc7RUFDZmpDLFNBQVMsRUFBRWtDLE1BQU07RUFDakIzQyxLQUFLLEVBQUVXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEK0M7QUFDdkI7QUFBQSxJQUVuQmlDLGdCQUFnQiwwQkFBQWhMLFdBQUE7RUFBQSxTQUFBZ0wsaUJBQUE7SUFBQS9LLGVBQUEsT0FBQStLLGdCQUFBO0lBQUEsT0FBQTlLLFVBQUEsT0FBQThLLGdCQUFBLEVBQUE3SyxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBNEssZ0JBQUEsRUFBQWhMLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUEySyxnQkFBQTtBQUFBLEVBQVNsTCwwREFBVTs7Ozs7Ozs7Ozs7OztBQ0h6QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJ0X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9tZW51X3RvZ2dsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcmV2ZWFsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2FydF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2FydF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbWVudV90b2dnbGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL21lbnVfdG9nZ2xlX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3JldmVhbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcmV2ZWFsX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vSGVsbG8uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogY29udHJvbGxlcl8wLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzEsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gWydvdmVybGF5J107XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICAvLyBDbG9zZSBvdmVybGF5IHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPdmVybGF5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU92ZXJsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT3ZlcmxheShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBjbG9zaW5nIHRoZSBvdmVybGF5XG4gICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBvdmVybGF5c1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1jYXJkIC5vdmVybGF5JykuZm9yRWFjaCgob3ZlcmxheSkgPT4ge1xuICAgICAgICAgICAgaWYgKG92ZXJsYXkgIT09IHRoaXMub3ZlcmxheVRhcmdldCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBPdmVybGF5IGlzIGFjdGl2ZVxuICAgICAgICB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgY2xvc2VPdmVybGF5KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIGFzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcInNlbGVjdGVkQ2FyZFwiXVxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgICAgIGhlYWRlcnM6IEFycmF5XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJvdXNlbCBjb250cm9sbGVyIGNvbm5lY3RlZFwiLCB0aGlzLmhlYWRlcnNWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcnNWYWx1ZSAmJiB0aGlzLmhlYWRlcnNWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2FyZCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBoZWFkZXJzIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0ZWRDYXJkKGV2ZW50KSB7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZXZlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJvdXNlbEluZGV4UGFyYW0sIDEwKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHVsc2VFZmZlY3QoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGNhcmQgd2l0aCBpbmRleDpcIiwgaW5kZXgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oZWFkZXJzVmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5oZWFkZXJzVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSGVhZGVycyBkYXRhIGlzIG5vdCBhbiBhcnJheTpcIiwgdGhpcy5oZWFkZXJzVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRIZWFkZXIgPSB0aGlzLmhlYWRlcnNWYWx1ZVtpbmRleF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaGVhZGVyOlwiLCBzZWxlY3RlZEhlYWRlcik7XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZEhlYWRlcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gaGVhZGVyIGZvdW5kIGF0IGluZGV4JywgaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZEhlYWRlci5waWN0dXJlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTZWxlY3RlZCBoZWFkZXIgaGFzIG5vIHBpY3R1cmU6Jywgc2VsZWN0ZWRIZWFkZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24oaW5kZXgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1haW5DYXJkKHNlbGVjdGVkSGVhZGVyKTtcbiAgICB9XG5cbiAgICBhZGRQdWxzZUVmZmVjdChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aHVtYm5haWwnKTtcbiAgICAgICAgICAgIGlmICh0aHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZCgncHVsc2UnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbihzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWJuYWlsLWNvbnRhaW5lcicpLmZvckVhY2goKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10aHVtYm5haWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWFpbkNhcmQoc2VsZWN0ZWRIZWFkZXIpIHtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoLTEwMCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXBsb2Fkcy9oZWFkZXIvJHtzZWxlY3RlZEhlYWRlci5waWN0dXJlfVwiIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdy0xMDAgaC0xMDAgb2JqZWN0LWZpdC1jb3ZlclwiIGFsdD1cIiR7c2VsZWN0ZWRIZWFkZXIudGl0bGUgfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGJvdHRvbS0wIHN0YXJ0LTAgdy0xMDAgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQgcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtd2hpdGUgZnctYm9sZCBtYi0yXCI+JHtzZWxlY3RlZEhlYWRlci50aXRsZSB8fCAnJ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgbWItNFwiPiR7c2VsZWN0ZWRIZWFkZXIuY29udGVudCB8fCAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7c2VsZWN0ZWRIZWFkZXIuYnV0dG9uTGluayB8fCAnIyd9XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgcm91bmRlZC1waWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEhlYWRlci5idXR0b25UaXRsZSB8fCAnQ2xpY2sgaGVyZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRUYXJnZXQuaW5uZXJIVE1MID0gbmV3Q29udGVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHRvYXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlVG9hc3QnKTtcbiAgICAgICAgaWYgKHRvYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgYm9vdHN0cmFwLlRvYXN0KHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGZvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBndWVzdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXN0Rm9ybVwiKTtcbiAgICAgICAgaWYgKGd1ZXN0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpIHtcbiAgICAgICAgICAgIGd1ZXN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3Vlc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbywgU3RpbXVsdXMhXCIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGFsZXJ0KFwiSGVsbG8sIFN0aW11bHVzIVwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gXCJIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wibWVudVwiXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZW51IGNvbnRyb2xsZXIgY29ubmVjdGVkXCIpO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIC8vIFRvZ2dsZSBkLW5vbmUgY2xhc3NcbiAgICAgICAgdGhpcy5tZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBpY29uc1xuICAgICAgICBjb25zdCBtZW51SWNvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtaWNvbicpO1xuXG4gICAgICAgIGlmIChtZW51SWNvbiAmJiBjbG9zZUljb24pIHtcbiAgICAgICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgY2xvc2VJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1xuICAgICAgICBcImRyb3Bkb3duQnV0dG9uXCIsXG4gICAgICAgIFwiZHJvcGRvd25NZW51XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VCdXR0b25cIixcbiAgICAgICAgXCJsYW5ndWFnZU1lbnVcIixcbiAgICAgICAgXCJ1c2VyTWVudUJ1dHRvblwiLFxuICAgICAgICBcInVzZXJEcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJtb2JpbGVNZW51XCIsXG4gICAgICAgIFwibW9iaWxlTWVudUJ1dHRvblwiXG4gICAgXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOYXZiYXJEcm9wZG93biBjb250cm9sbGVyIGNvbm5lY3RlZFwiKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3ducyA9IHRoaXMuY2xvc2VEcm9wZG93bnMuYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25zKTtcbiAgICAgICAgdGhpcy5lbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQoKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bnMpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51ID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTsgIC8vIFV0aWxpc2UgJ3Nob3cnIHBvdXIgYWZmaWNoZXIvbWFzcXVlciBsZSBkcm9wZG93blxuICAgIH1cblxuICAgIHRvZ2dsZUxhbmd1YWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTsgIC8vIFV0aWxpc2UgJ3Nob3cnIHBvdXIgYWZmaWNoZXIvbWFzcXVlciBsZSBtZW51XG4gICAgfVxuXG4gICAgdG9nZ2xlVXNlck1lbnUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTsgIC8vIFV0aWxpc2UgJ3Nob3cnIHBvdXIgYWZmaWNoZXIvbWFzcXVlciBsZSBtZW51IHV0aWxpc2F0ZXVyXG4gICAgfVxuXG4gICAgc2VsZWN0TGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB0aGlzLmxhbmd1YWdlQnV0dG9uVGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkTGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTsgIC8vIEZlcm1lIGxlIG1lbnUgYXByw6hzIHPDqWxlY3Rpb25cbiAgICB9XG5cbiAgICBjbG9zZURyb3Bkb3ducyhldmVudCkge1xuICAgICAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgaXNDbGlja0luc2lkZURyb3Bkb3duID0gKFxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnVUYXJnZXRzLnNvbWUobWVudSA9PiBtZW51LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc0xhbmd1YWdlTWVudVRhcmdldCAmJiB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0ICYmIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNNb2JpbGVNZW51VGFyZ2V0ICYmIHRoaXMubW9iaWxlTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQ2xpY2tPbkJ1dHRvbiA9IChcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CdXR0b25UYXJnZXRzLnNvbWUoYnV0dG9uID0+IGJ1dHRvbi5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNMYW5ndWFnZUJ1dHRvblRhcmdldCAmJiB0aGlzLmxhbmd1YWdlQnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc1VzZXJNZW51QnV0dG9uVGFyZ2V0ICYmIHRoaXMudXNlck1lbnVCdXR0b25UYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzTW9iaWxlTWVudUJ1dHRvblRhcmdldCAmJiB0aGlzLm1vYmlsZU1lbnVCdXR0b25UYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghaXNDbGlja0luc2lkZURyb3Bkb3duICYmICFpc0NsaWNrT25CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlQWxsRHJvcGRvd25zKCkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duTWVudVRhcmdldHMuZm9yRWFjaChtZW51ID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpKTsgIC8vIEZlcm1lIHRvdXMgbGVzIGRyb3Bkb3duc1xuICAgICAgICBpZiAodGhpcy5oYXNMYW5ndWFnZU1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZlcm1lciBsZSBtZW51IG1vYmlsZSBzaSBuw6ljZXNzYWlyZVxuICAgICAgICBpZiAodGhpcy5oYXNNb2JpbGVNZW51VGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTW9iaWxlTWVudShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVNZW51XCIpO1xuICAgICAgICBjb25zdCBic09mZmNhbnZhcyA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKG1vYmlsZU1lbnUpO1xuICAgICAgICBic09mZmNhbnZhcy50b2dnbGUoKTsgIC8vIFV0aWxpc2F0aW9uIGR1IE9mZmNhbnZhcyBkZSBCb290c3RyYXAgcG91ciBsZSBtZW51IG1vYmlsZVxuICAgIH1cblxuICAgIGVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcInNlY3Rpb25cIl1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIFLDqXbDqWxlciBsZXMgc2VjdGlvbnMgdmlzaWJsZXMgYXUgY2hhcmdlbWVudFxuICAgICAgICB0aGlzLnJldmVhbFNlY3Rpb24oKVxuXG4gICAgICAgIC8vIEF0dGFjaGVyIGwnw6l2w6luZW1lbnQgZGUgZMOpZmlsZW1lbnRcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMucmV2ZWFsU2VjdGlvbi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIC8vIE5ldHRveWVyIGwnw6l2w6luZW1lbnQgZGUgZMOpZmlsZW1lbnQgbG9yc3F1J29uIGTDqWNvbm5lY3RlIGxlIGNvbnRyw7RsZXVyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnJldmVhbFNlY3Rpb24uYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICByZXZlYWxTZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB0cmlnZ2VyQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0ICogMC44XG5cbiAgICAgICAgdGhpcy5zZWN0aW9uVGFyZ2V0cy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgICAgIGlmIChzZWN0aW9uVG9wIDwgdHJpZ2dlckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIDxkaXY+SGVsbG8ge3Byb3BzLmZ1bGxOYW1lfTwvZGl2Pjtcbn1cbiIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlVmFsdWVzID0gT2JqZWN0LmtleXMocmVhY3RDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcuanN4JywgJycpLnJlcGxhY2UoJy50c3gnLCAnJykpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdCBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlT3ZlcmxheSIsImJpbmQiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU92ZXJsYXkiLCJldmVudCIsIl90aGlzIiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJvdmVybGF5Iiwib3ZlcmxheVRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZSIsImVsZW1lbnQiLCJjb250YWlucyIsInRhcmdldCIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyc1ZhbHVlIiwibGVuZ3RoIiwidXBkYXRlU2VsZWN0ZWRDYXJkIiwiZXJyb3IiLCJpbmRleCIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjYXJvdXNlbEluZGV4UGFyYW0iLCJhZGRQdWxzZUVmZmVjdCIsIkFycmF5IiwiaXNBcnJheSIsInNlbGVjdGVkSGVhZGVyIiwicGljdHVyZSIsInVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbiIsInVwZGF0ZU1haW5DYXJkIiwidGh1bWJuYWlsIiwicXVlcnlTZWxlY3RvciIsImFkZCIsInNldFRpbWVvdXQiLCJzZWxlY3RlZEluZGV4IiwiY29udGFpbmVyIiwiaSIsIm5ld0NvbnRlbnQiLCJjb25jYXQiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b25MaW5rIiwiYnV0dG9uVGl0bGUiLCJzZWxlY3RlZENhcmRUYXJnZXQiLCJpbm5lckhUTUwiLCJoZWFkZXJzIiwidG9hc3RFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2FzdCIsImJvb3RzdHJhcCIsIlRvYXN0Iiwic2hvdyIsInRvZ2dsZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImd1ZXN0Rm9ybSIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVNZW51IiwibWVudVRhcmdldCIsIm1lbnVJY29uIiwiY2xvc2VJY29uIiwiY2xvc2VEcm9wZG93bnMiLCJlbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQiLCJ0b2dnbGVEcm9wZG93biIsImJ1dHRvbiIsIm1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbG9zZUFsbERyb3Bkb3ducyIsInRvZ2dsZUxhbmd1YWdlIiwibGFuZ3VhZ2VNZW51VGFyZ2V0IiwidG9nZ2xlVXNlck1lbnUiLCJ1c2VyRHJvcGRvd25NZW51VGFyZ2V0Iiwic2VsZWN0TGFuZ3VhZ2UiLCJzZWxlY3RlZExhbmd1YWdlIiwidHJpbSIsImxhbmd1YWdlQnV0dG9uVGFyZ2V0Iiwic3JjIiwiY2xpY2tlZEVsZW1lbnQiLCJpc0NsaWNrSW5zaWRlRHJvcGRvd24iLCJkcm9wZG93bk1lbnVUYXJnZXRzIiwic29tZSIsImhhc0xhbmd1YWdlTWVudVRhcmdldCIsImhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQiLCJoYXNNb2JpbGVNZW51VGFyZ2V0IiwibW9iaWxlTWVudVRhcmdldCIsImlzQ2xpY2tPbkJ1dHRvbiIsImRyb3Bkb3duQnV0dG9uVGFyZ2V0cyIsImhhc0xhbmd1YWdlQnV0dG9uVGFyZ2V0IiwiaGFzVXNlck1lbnVCdXR0b25UYXJnZXQiLCJ1c2VyTWVudUJ1dHRvblRhcmdldCIsImhhc01vYmlsZU1lbnVCdXR0b25UYXJnZXQiLCJtb2JpbGVNZW51QnV0dG9uVGFyZ2V0IiwidG9nZ2xlTW9iaWxlTWVudSIsIm1vYmlsZU1lbnUiLCJic09mZmNhbnZhcyIsIk9mZmNhbnZhcyIsInJldmVhbFNlY3Rpb24iLCJ3aW5kb3ciLCJ0cmlnZ2VyQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJzZWN0aW9uVGFyZ2V0cyIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiUmVhY3QiLCJqc3hzIiwiX2pzeHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiZnVsbE5hbWUiLCJyZWFjdENvbnRyb2xsZXJzIiwiaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzIiwiciIsImtleXMiLCJyZXNvbHZlUmVhY3RDb21wb25lbnQiLCJuYW1lIiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJPYmplY3QiLCJtYXAiLCJyZXBsYWNlIiwiRXJyb3IiLCJqb2luIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHNWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsInJvb3QiLCJ1bm1vdW50IiwicmVhY3RFbGVtZW50IiwicmVuZGVyIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwiU3RyaW5nIiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=