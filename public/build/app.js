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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QjtBQUFBLElBRW5CaUMsZ0JBQWdCLDBCQUFBNUssV0FBQTtFQUFBLFNBQUE0SyxpQkFBQTtJQUFBM0ssZUFBQSxPQUFBMkssZ0JBQUE7SUFBQSxPQUFBMUssVUFBQSxPQUFBMEssZ0JBQUEsRUFBQXpLLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUF3SyxnQkFBQSxFQUFBNUssV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQXVLLGdCQUFBO0FBQUEsRUFBUzlLLDBEQUFVOzs7Ozs7Ozs7Ozs7O0FDSHpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yZXZlYWxfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9jYXJ0X2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jYXJ0X2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9yZXZlYWxfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3JldmVhbF9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0hlbGxvLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGNvbnRyb2xsZXJfMCxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8xLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnb3ZlcmxheSddO1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgLy8gQ2xvc2Ugb3ZlcmxheSB3aGVuIGNsaWNraW5nIG91dHNpZGVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPdmVybGF5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRvZ2dsZU92ZXJsYXkoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgY2xvc2luZyB0aGUgb3ZlcmxheVxuICAgICAgICAvLyBDbG9zZSBhbGwgb3RoZXIgb3ZlcmxheXNcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZHJlc3MtY2FyZCAub3ZlcmxheScpLmZvckVhY2goKG92ZXJsYXkpID0+IHtcbiAgICAgICAgICAgIGlmIChvdmVybGF5ICE9PSB0aGlzLm92ZXJsYXlUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gT3ZlcmxheSBpcyBhY3RpdmVcbiAgICAgICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNsb3NlT3ZlcmxheShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBhc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJzZWxlY3RlZENhcmRcIl1cbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICBoZWFkZXJzOiBBcnJheVxuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fyb3VzZWwgY29udHJvbGxlciBjb25uZWN0ZWRcIiwgdGhpcy5oZWFkZXJzVmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJzVmFsdWUgJiYgdGhpcy5oZWFkZXJzVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZENhcmQoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gaGVhZGVycyBkYXRhIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNlbGVjdGVkQ2FyZChldmVudCkge1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpbmRleCA9IGV2ZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2Fyb3VzZWxJbmRleFBhcmFtLCAxMCk7XG4gICAgICAgICAgICB0aGlzLmFkZFB1bHNlRWZmZWN0KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBjYXJkIHdpdGggaW5kZXg6XCIsIGluZGV4KTtcblxuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyc1ZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHRoaXMuaGVhZGVyc1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkhlYWRlcnMgZGF0YSBpcyBub3QgYW4gYXJyYXk6XCIsIHRoaXMuaGVhZGVyc1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSGVhZGVyID0gdGhpcy5oZWFkZXJzVmFsdWVbaW5kZXhdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGhlYWRlcjpcIiwgc2VsZWN0ZWRIZWFkZXIpO1xuXG4gICAgICAgIGlmICghc2VsZWN0ZWRIZWFkZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGhlYWRlciBmb3VuZCBhdCBpbmRleCcsIGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0ZWRIZWFkZXIucGljdHVyZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2VsZWN0ZWQgaGVhZGVyIGhhcyBubyBwaWN0dXJlOicsIHNlbGVjdGVkSGVhZGVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy51cGRhdGVNYWluQ2FyZChzZWxlY3RlZEhlYWRlcik7XG4gICAgfVxuXG4gICAgYWRkUHVsc2VFZmZlY3QoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGh1bWJuYWlsJyk7XG4gICAgICAgICAgICBpZiAodGh1bWJuYWlsKSB7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5hZGQoJ3B1bHNlJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZScpO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24oc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRodW1ibmFpbC1jb250YWluZXInKS5mb3JFYWNoKChjb250YWluZXIsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpID09PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRodW1ibmFpbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZU1haW5DYXJkKHNlbGVjdGVkSGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgaC0xMDAgZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VwbG9hZHMvaGVhZGVyLyR7c2VsZWN0ZWRIZWFkZXIucGljdHVyZX1cIiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHctMTAwIGgtMTAwIG9iamVjdC1maXQtY292ZXJcIiBhbHQ9XCIke3NlbGVjdGVkSGVhZGVyLnRpdGxlIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBib3R0b20tMCBzdGFydC0wIHctMTAwIGgtMTAwIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZ3LWJvbGQgbWItMlwiPiR7c2VsZWN0ZWRIZWFkZXIudGl0bGUgfHwgJyd9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlIG1iLTRcIj4ke3NlbGVjdGVkSGVhZGVyLmNvbnRlbnQgfHwgJyd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3NlbGVjdGVkSGVhZGVyLmJ1dHRvbkxpbmsgfHwgJyMnfVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHJvdW5kZWQtcGlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c2VsZWN0ZWRIZWFkZXIuYnV0dG9uVGl0bGUgfHwgJ0NsaWNrIGhlcmUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkVGFyZ2V0LmlubmVySFRNTCA9IG5ld0NvbnRlbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCB0b2FzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZVRvYXN0Jyk7XG4gICAgICAgIGlmICh0b2FzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdEVsZW1lbnQpO1xuICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBmb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qcycpO1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm0oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZ3Vlc3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWVzdEZvcm1cIik7XG4gICAgICAgIGlmIChndWVzdEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XG4gICAgICAgICAgICBndWVzdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGd1ZXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8sIFN0aW11bHVzIVwiLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICBhbGVydChcIkhlbGxvLCBTdGltdWx1cyFcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IFwiSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXG4gICAgICAgIFwiZHJvcGRvd25CdXR0b25cIixcbiAgICAgICAgXCJkcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJsYW5ndWFnZUJ1dHRvblwiLFxuICAgICAgICBcImxhbmd1YWdlTWVudVwiLFxuICAgICAgICBcInVzZXJNZW51QnV0dG9uXCIsXG4gICAgICAgIFwidXNlckRyb3Bkb3duTWVudVwiLFxuICAgICAgICBcIm1vYmlsZU1lbnVcIixcbiAgICAgICAgXCJtb2JpbGVNZW51QnV0dG9uXCJcbiAgICBdXG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmJhckRyb3Bkb3duIGNvbnRyb2xsZXIgY29ubmVjdGVkXCIpO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd25zID0gdGhpcy5jbG9zZURyb3Bkb3ducy5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bnMpO1xuICAgICAgICB0aGlzLmVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCgpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3ducyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAgLy8gVXRpbGlzZSAnc2hvdycgcG91ciBhZmZpY2hlci9tYXNxdWVyIGxlIGRyb3Bkb3duXG4gICAgfVxuXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAgLy8gVXRpbGlzZSAnc2hvdycgcG91ciBhZmZpY2hlci9tYXNxdWVyIGxlIG1lbnVcbiAgICB9XG5cbiAgICB0b2dnbGVVc2VyTWVudShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgICAgICB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAgLy8gVXRpbGlzZSAnc2hvdycgcG91ciBhZmZpY2hlci9tYXNxdWVyIGxlIG1lbnUgdXRpbGlzYXRldXJcbiAgICB9XG5cbiAgICBzZWxlY3RMYW5ndWFnZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZExhbmd1YWdlID0gZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gc2VsZWN0ZWRMYW5ndWFnZTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUJ1dHRvblRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYztcbiAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpOyAgLy8gRmVybWUgbGUgbWVudSBhcHLDqHMgc8OpbGVjdGlvblxuICAgIH1cblxuICAgIGNsb3NlRHJvcGRvd25zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpc0NsaWNrSW5zaWRlRHJvcGRvd24gPSAoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudVRhcmdldHMuc29tZShtZW51ID0+IG1lbnUuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzTGFuZ3VhZ2VNZW51VGFyZ2V0ICYmIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQgJiYgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc01vYmlsZU1lbnVUYXJnZXQgJiYgdGhpcy5tb2JpbGVNZW51VGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaXNDbGlja09uQnV0dG9uID0gKFxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkJ1dHRvblRhcmdldHMuc29tZShidXR0b24gPT4gYnV0dG9uLmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc0xhbmd1YWdlQnV0dG9uVGFyZ2V0ICYmIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzVXNlck1lbnVCdXR0b25UYXJnZXQgJiYgdGhpcy51c2VyTWVudUJ1dHRvblRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNNb2JpbGVNZW51QnV0dG9uVGFyZ2V0ICYmIHRoaXMubW9iaWxlTWVudUJ1dHRvblRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc0NsaWNrSW5zaWRlRHJvcGRvd24gJiYgIWlzQ2xpY2tPbkJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VBbGxEcm9wZG93bnMoKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25NZW51VGFyZ2V0cy5mb3JFYWNoKG1lbnUgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JykpOyAgLy8gRmVybWUgdG91cyBsZXMgZHJvcGRvd25zXG4gICAgICAgIGlmICh0aGlzLmhhc0xhbmd1YWdlTWVudVRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmVybWVyIGxlIG1lbnUgbW9iaWxlIHNpIG7DqWNlc3NhaXJlXG4gICAgICAgIGlmICh0aGlzLmhhc01vYmlsZU1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNb2JpbGVNZW51KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZU1lbnVcIik7XG4gICAgICAgIGNvbnN0IGJzT2ZmY2FudmFzID0gbmV3IGJvb3RzdHJhcC5PZmZjYW52YXMobW9iaWxlTWVudSk7XG4gICAgICAgIGJzT2ZmY2FudmFzLnRvZ2dsZSgpOyAgLy8gVXRpbGlzYXRpb24gZHUgT2ZmY2FudmFzIGRlIEJvb3RzdHJhcCBwb3VyIGxlIG1lbnUgbW9iaWxlXG4gICAgfVxuXG4gICAgZW5zdXJlRHJvcGRvd25zQXJlQ2xvc2VkKCkge1xuICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wic2VjdGlvblwiXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgLy8gUsOpdsOpbGVyIGxlcyBzZWN0aW9ucyB2aXNpYmxlcyBhdSBjaGFyZ2VtZW50XG4gICAgICAgIHRoaXMucmV2ZWFsU2VjdGlvbigpXG5cbiAgICAgICAgLy8gQXR0YWNoZXIgbCfDqXbDqW5lbWVudCBkZSBkw6lmaWxlbWVudFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5yZXZlYWxTZWN0aW9uLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgLy8gTmV0dG95ZXIgbCfDqXbDqW5lbWVudCBkZSBkw6lmaWxlbWVudCBsb3JzcXUnb24gZMOpY29ubmVjdGUgbGUgY29udHLDtGxldXJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMucmV2ZWFsU2VjdGlvbi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHJldmVhbFNlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJCb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjhcblxuICAgICAgICB0aGlzLnNlY3Rpb25UYXJnZXRzLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICAgICAgaWYgKHNlY3Rpb25Ub3AgPCB0cmlnZ2VyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gPGRpdj5IZWxsbyB7cHJvcHMuZnVsbE5hbWV9PC9kaXY+O1xufVxuIiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBPYmplY3Qua2V5cyhyZWFjdENvbnRyb2xsZXJzKS5tYXAoKGtleSkgPT4ga2V5LnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2UoJy5qc3gnLCAnJykucmVwbGFjZSgnLnRzeCcsICcnKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlYWN0IGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3QuIFBvc3NpYmxlIHZhbHVlczogJHtwb3NzaWJsZVZhbHVlcy5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3JlYWN0JyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VPdmVybGF5IiwiYmluZCIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlT3ZlcmxheSIsImV2ZW50IiwiX3RoaXMiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm92ZXJsYXkiLCJvdmVybGF5VGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlIiwiZWxlbWVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiX2RlZmluZVByb3BlcnR5IiwiZGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzVmFsdWUiLCJsZW5ndGgiLCJ1cGRhdGVTZWxlY3RlZENhcmQiLCJlcnJvciIsImluZGV4IiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNhcm91c2VsSW5kZXhQYXJhbSIsImFkZFB1bHNlRWZmZWN0IiwiQXJyYXkiLCJpc0FycmF5Iiwic2VsZWN0ZWRIZWFkZXIiLCJwaWN0dXJlIiwidXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uIiwidXBkYXRlTWFpbkNhcmQiLCJ0aHVtYm5haWwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkIiwic2V0VGltZW91dCIsInNlbGVjdGVkSW5kZXgiLCJjb250YWluZXIiLCJpIiwibmV3Q29udGVudCIsImNvbmNhdCIsInRpdGxlIiwiY29udGVudCIsImJ1dHRvbkxpbmsiLCJidXR0b25UaXRsZSIsInNlbGVjdGVkQ2FyZFRhcmdldCIsImlubmVySFRNTCIsImhlYWRlcnMiLCJ0b2FzdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvYXN0IiwiYm9vdHN0cmFwIiwiVG9hc3QiLCJzaG93IiwidG9nZ2xlRm9ybSIsInByZXZlbnREZWZhdWx0IiwiZ3Vlc3RGb3JtIiwiYWxlcnQiLCJ0ZXh0Q29udGVudCIsImNsb3NlRHJvcGRvd25zIiwiZW5zdXJlRHJvcGRvd25zQXJlQ2xvc2VkIiwidG9nZ2xlRHJvcGRvd24iLCJidXR0b24iLCJtZW51IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY2xvc2VBbGxEcm9wZG93bnMiLCJ0b2dnbGVMYW5ndWFnZSIsImxhbmd1YWdlTWVudVRhcmdldCIsInRvZ2dsZVVzZXJNZW51IiwidXNlckRyb3Bkb3duTWVudVRhcmdldCIsInNlbGVjdExhbmd1YWdlIiwic2VsZWN0ZWRMYW5ndWFnZSIsInRyaW0iLCJsYW5ndWFnZUJ1dHRvblRhcmdldCIsInNyYyIsImNsaWNrZWRFbGVtZW50IiwiaXNDbGlja0luc2lkZURyb3Bkb3duIiwiZHJvcGRvd25NZW51VGFyZ2V0cyIsInNvbWUiLCJoYXNMYW5ndWFnZU1lbnVUYXJnZXQiLCJoYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0IiwiaGFzTW9iaWxlTWVudVRhcmdldCIsIm1vYmlsZU1lbnVUYXJnZXQiLCJpc0NsaWNrT25CdXR0b24iLCJkcm9wZG93bkJ1dHRvblRhcmdldHMiLCJoYXNMYW5ndWFnZUJ1dHRvblRhcmdldCIsImhhc1VzZXJNZW51QnV0dG9uVGFyZ2V0IiwidXNlck1lbnVCdXR0b25UYXJnZXQiLCJoYXNNb2JpbGVNZW51QnV0dG9uVGFyZ2V0IiwibW9iaWxlTWVudUJ1dHRvblRhcmdldCIsInRvZ2dsZU1vYmlsZU1lbnUiLCJtb2JpbGVNZW51IiwiYnNPZmZjYW52YXMiLCJPZmZjYW52YXMiLCJyZXZlYWxTZWN0aW9uIiwid2luZG93IiwidHJpZ2dlckJvdHRvbSIsImlubmVySGVpZ2h0Iiwic2VjdGlvblRhcmdldHMiLCJzZWN0aW9uIiwic2VjdGlvblRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIlJlYWN0IiwianN4cyIsIl9qc3hzIiwicHJvcHMiLCJjaGlsZHJlbiIsImZ1bGxOYW1lIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwibmFtZSIsImNvbXBvbmVudCIsInBvc3NpYmxlVmFsdWVzIiwiT2JqZWN0IiwibWFwIiwicmVwbGFjZSIsIkVycm9yIiwiam9pbiIsInJlcXVpcmUkJDAiLCJjcmVhdGVSb290IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJjIiwibyIsInVzaW5nQ2xpZW50RW50cnlQb2ludCIsImRlZmF1bHRfMSIsInByb3BzVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50VmFsdWUiLCJfcmVuZGVyUmVhY3RFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsInJlbmRlciIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsInZhbHVlcyIsIlN0cmluZyIsInR1cmJvX2NvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9