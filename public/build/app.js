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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1RTtBQUNEO0FBQ3RFLGlFQUFlO0FBQ2YsOEJBQThCLG1GQUFZO0FBQzFDLG1DQUFtQyxrRkFBWTtBQUMvQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMK0M7QUFBQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUs1QyxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTjtNQUNBQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFO0VBQUM7SUFBQU4sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU0sVUFBVUEsQ0FBQSxFQUFHO01BQ1RKLFFBQVEsQ0FBQ0ssbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0gsWUFBWSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkU7RUFBQztJQUFBTixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUSxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7TUFBQSxJQUFBQyxLQUFBO01BQ2pCRCxLQUFLLENBQUNFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6QjtNQUNBVCxRQUFRLENBQUNVLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7UUFDckUsSUFBSUEsT0FBTyxLQUFLSixLQUFJLENBQUNLLGFBQWEsRUFBRTtVQUNoQ0QsT0FBTyxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDdEM7TUFDSixDQUFDLENBQUM7TUFDRjtNQUNBLElBQUksQ0FBQ0YsYUFBYSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakQ7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUksWUFBWUEsQ0FBQ0ssS0FBSyxFQUFFO01BQ2hCLElBQUksQ0FBQyxJQUFJLENBQUNVLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDWCxLQUFLLENBQUNZLE1BQU0sQ0FBQyxFQUFFO1FBQ3RDLElBQUksQ0FBQ04sYUFBYSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDakQ7SUFDSjtFQUFDO0FBQUEsRUE1QndCMUIsMERBQVU7QUFBQStCLGVBQUEsQ0FBQTlCLFFBQUEsYUFDbEIsQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaEM7QUFDZ0Q7QUFBQSxJQUFBQSxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQVE1QyxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTnVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO01BQy9ELElBQUksSUFBSSxDQUFDQSxZQUFZLElBQUksSUFBSSxDQUFDQSxZQUFZLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkQsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7TUFDOUIsQ0FBQyxNQUFNO1FBQ0hKLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDLDJCQUEyQixDQUFDO01BQzlDO0lBQ0o7RUFBQztJQUFBOUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRCLGtCQUFrQkEsQ0FBQ25CLEtBQUssRUFBRTtNQUN0QixJQUFJcUIsS0FBSztNQUNULElBQUksT0FBT3JCLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDM0JxQixLQUFLLEdBQUdyQixLQUFLO01BQ2pCLENBQUMsTUFBTTtRQUNIcUIsS0FBSyxHQUFHQyxRQUFRLENBQUN0QixLQUFLLENBQUN1QixhQUFhLENBQUNDLE9BQU8sQ0FBQ0Msa0JBQWtCLEVBQUUsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQ0MsY0FBYyxDQUFDMUIsS0FBSyxDQUFDdUIsYUFBYSxDQUFDO01BQzVDO01BRUFSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixFQUFFSyxLQUFLLENBQUM7TUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQ0osWUFBWSxJQUFJLENBQUNVLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ1gsWUFBWSxDQUFDLEVBQUU7UUFDekRGLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQ0gsWUFBWSxDQUFDO1FBQ2pFO01BQ0o7TUFFQSxJQUFNWSxjQUFjLEdBQUcsSUFBSSxDQUFDWixZQUFZLENBQUNJLEtBQUssQ0FBQztNQUMvQ04sT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVhLGNBQWMsQ0FBQztNQUUvQyxJQUFJLENBQUNBLGNBQWMsRUFBRTtRQUNqQmQsT0FBTyxDQUFDSyxLQUFLLENBQUMsMEJBQTBCLEVBQUVDLEtBQUssQ0FBQztRQUNoRDtNQUNKO01BRUEsSUFBSSxDQUFDUSxjQUFjLENBQUNDLE9BQU8sRUFBRTtRQUN6QmYsT0FBTyxDQUFDSyxLQUFLLENBQUMsaUNBQWlDLEVBQUVTLGNBQWMsQ0FBQztRQUNoRTtNQUNKO01BRUEsSUFBSSxDQUFDRSx3QkFBd0IsQ0FBQ1YsS0FBSyxDQUFDO01BQ3BDLElBQUksQ0FBQ1csY0FBYyxDQUFDSCxjQUFjLENBQUM7SUFDdkM7RUFBQztJQUFBdkMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1DLGNBQWNBLENBQUNoQixPQUFPLEVBQUU7TUFDcEIsSUFBSUEsT0FBTyxFQUFFO1FBQ1QsSUFBTXVCLFNBQVMsR0FBR3ZCLE9BQU8sQ0FBQ3dCLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDckQsSUFBSUQsU0FBUyxFQUFFO1VBQ1hBLFNBQVMsQ0FBQzFCLFNBQVMsQ0FBQzRCLEdBQUcsQ0FBQyxPQUFPLENBQUM7VUFDaENDLFVBQVUsQ0FBQyxZQUFNO1lBQ2JILFNBQVMsQ0FBQzFCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztVQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ1g7TUFDSjtJQUNKO0VBQUM7SUFBQWxCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3Qyx3QkFBd0JBLENBQUNNLGFBQWEsRUFBRTtNQUNwQyxJQUFJLENBQUMzQixPQUFPLENBQUNQLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFDa0MsU0FBUyxFQUFFQyxDQUFDLEVBQUs7UUFDNUUsSUFBSUEsQ0FBQyxLQUFLRixhQUFhLEVBQUU7VUFDckJDLFNBQVMsQ0FBQy9CLFNBQVMsQ0FBQzRCLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqRCxDQUFDLE1BQU07VUFDSEcsU0FBUyxDQUFDL0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDcEQ7TUFDSixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBeUMsY0FBY0EsQ0FBQ0gsY0FBYyxFQUFFO01BQzNCLElBQU1XLFVBQVUsZ0hBQUFDLE1BQUEsQ0FFb0JaLGNBQWMsQ0FBQ0MsT0FBTyx3RUFBQVcsTUFBQSxDQUFpRVosY0FBYyxDQUFDYSxLQUFLLElBQUksRUFBRSxnTUFBQUQsTUFBQSxDQUVuR1osY0FBYyxDQUFDYSxLQUFLLElBQUksRUFBRSw4REFBQUQsTUFBQSxDQUNuQ1osY0FBYyxDQUFDYyxPQUFPLElBQUksRUFBRSxpSEFBQUYsTUFBQSxDQUUxQ1osY0FBYyxDQUFDZSxVQUFVLElBQUksR0FBRyw4RUFBQUgsTUFBQSxDQUNyQ1osY0FBYyxDQUFDZ0IsV0FBVyxJQUFJLFlBQVkscUhBSy9EO01BRUQsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0MsU0FBUyxHQUFHUCxVQUFVO0lBQ2xEO0VBQUM7QUFBQSxFQXZGd0IxRCwwREFBVTtBQUFBK0IsZUFBQSxDQUFBOUIsUUFBQSxhQUNsQixDQUFDLGNBQWMsQ0FBQztBQUFBOEIsZUFBQSxDQUFBOUIsUUFBQSxZQUNqQjtFQUNaaUUsT0FBTyxFQUFFckI7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMkM7QUFBQSxJQUFBNUMsUUFBQSwwQkFBQUMsV0FBQTtFQUFBLFNBQUFELFNBQUE7SUFBQUUsZUFBQSxPQUFBRixRQUFBO0lBQUEsT0FBQUcsVUFBQSxPQUFBSCxRQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLFFBQUEsRUFBQUMsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQU4sUUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFHNUMsU0FBQUMsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBTXlELFlBQVksR0FBR3hELFFBQVEsQ0FBQ3lELGNBQWMsQ0FBQyxXQUFXLENBQUM7TUFDekQsSUFBSUQsWUFBWSxFQUFFO1FBQ2QsSUFBTUUsS0FBSyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDSixZQUFZLENBQUM7UUFDL0NFLEtBQUssQ0FBQ0csSUFBSSxDQUFDLENBQUM7TUFDaEI7SUFDSjtFQUFDO0FBQUEsRUFQd0J4RSwwREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlM7QUFBQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUc1QyxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTnVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZDQUE2QyxDQUFDO0lBQzlEO0VBQUM7SUFBQTFCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnRSxVQUFVQSxDQUFDdkQsS0FBSyxFQUFFO01BQ2RBLEtBQUssQ0FBQ3dELGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQU1DLFNBQVMsR0FBR2hFLFFBQVEsQ0FBQ3lELGNBQWMsQ0FBQyxXQUFXLENBQUM7TUFDdEQsSUFBSU8sU0FBUyxDQUFDbEQsU0FBUyxDQUFDSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDeEM4QyxTQUFTLENBQUNsRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDeEMsQ0FBQyxNQUFNO1FBQ0hpRCxTQUFTLENBQUNsRCxTQUFTLENBQUM0QixHQUFHLENBQUMsUUFBUSxDQUFDO01BQ3JDO0lBQ0o7RUFBQztBQUFBLEVBYndCckQsMERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZTO0FBQUEsSUFBQUMsUUFBQSwwQkFBQUMsV0FBQTtFQUFBLFNBQUFELFNBQUE7SUFBQUUsZUFBQSxPQUFBRixRQUFBO0lBQUEsT0FBQUcsVUFBQSxPQUFBSCxRQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLFFBQUEsRUFBQUMsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQU4sUUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFHNUMsU0FBQUMsT0FBT0EsQ0FBQSxFQUFHO01BQ051QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNOLE9BQU8sQ0FBQztNQUM3Q2dELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztNQUN6QixJQUFJLENBQUNoRCxPQUFPLENBQUNpRCxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7QUFBQSxFQUx3QjdFLDBEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlE7QUFBQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQWMzQyxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTnVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUFxQyxDQUFDO01BQ2xELElBQUksQ0FBQzRDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcERILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ2tFLGNBQWMsQ0FBQztNQUN2RCxJQUFJLENBQUNDLHdCQUF3QixDQUFDLENBQUM7SUFDbkM7RUFBQztJQUFBdkUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU0sVUFBVUEsQ0FBQSxFQUFHO01BQ1RKLFFBQVEsQ0FBQ0ssbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzhELGNBQWMsQ0FBQztJQUM5RDtFQUFDO0lBQUF0RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBdUUsY0FBY0EsQ0FBQzlELEtBQUssRUFBRTtNQUNsQkEsS0FBSyxDQUFDRSxlQUFlLENBQUMsQ0FBQztNQUN2QixJQUFNNkQsTUFBTSxHQUFHL0QsS0FBSyxDQUFDdUIsYUFBYTtNQUNsQyxJQUFNeUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLGtCQUFrQjtNQUN0QyxJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7TUFDeEJGLElBQUksQ0FBQ3pELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUU7SUFDcEM7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTRFLGNBQWNBLENBQUNuRSxLQUFLLEVBQUU7TUFDbEJBLEtBQUssQ0FBQ0UsZUFBZSxDQUFDLENBQUM7TUFDdkIsSUFBSSxDQUFDZ0UsaUJBQWlCLENBQUMsQ0FBQztNQUN4QixJQUFJLENBQUNFLGtCQUFrQixDQUFDN0QsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRTtJQUN2RDtFQUFDO0lBQUFuQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBOEUsY0FBY0EsQ0FBQ3JFLEtBQUssRUFBRTtNQUNsQkEsS0FBSyxDQUFDRSxlQUFlLENBQUMsQ0FBQztNQUN2QixJQUFJLENBQUNnRSxpQkFBaUIsQ0FBQyxDQUFDO01BQ3hCLElBQUksQ0FBQ0ksc0JBQXNCLENBQUMvRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFO0lBQzNEO0VBQUM7SUFBQW5CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFnRixjQUFjQSxDQUFDdkUsS0FBSyxFQUFFO01BQ2xCQSxLQUFLLENBQUN3RCxjQUFjLENBQUMsQ0FBQztNQUN0QixJQUFNZ0IsZ0JBQWdCLEdBQUd4RSxLQUFLLENBQUN1QixhQUFhLENBQUNvQyxXQUFXLENBQUNjLElBQUksQ0FBQyxDQUFDO01BQy9ELElBQUksQ0FBQ0Msb0JBQW9CLENBQUN4QyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUN5QixXQUFXLEdBQUdhLGdCQUFnQjtNQUM5RSxJQUFJLENBQUNFLG9CQUFvQixDQUFDeEMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDeUMsR0FBRyxHQUFHM0UsS0FBSyxDQUFDdUIsYUFBYSxDQUFDVyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUN5QyxHQUFHO01BQ2pHLElBQUksQ0FBQ1Asa0JBQWtCLENBQUM3RCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFO0lBQ3ZEO0VBQUM7SUFBQWxCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxRSxjQUFjQSxDQUFDNUQsS0FBSyxFQUFFO01BQ2xCLElBQU00RSxjQUFjLEdBQUc1RSxLQUFLLENBQUNZLE1BQU07TUFDbkMsSUFBTWlFLHFCQUFxQixHQUN2QixJQUFJLENBQUNDLG1CQUFtQixDQUFDQyxJQUFJLENBQUMsVUFBQWYsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ3JELFFBQVEsQ0FBQ2lFLGNBQWMsQ0FBQztNQUFBLEVBQUMsSUFDbkUsSUFBSSxDQUFDSSxxQkFBcUIsSUFBSSxJQUFJLENBQUNaLGtCQUFrQixDQUFDekQsUUFBUSxDQUFDaUUsY0FBYyxDQUFFLElBQy9FLElBQUksQ0FBQ0sseUJBQXlCLElBQUksSUFBSSxDQUFDWCxzQkFBc0IsQ0FBQzNELFFBQVEsQ0FBQ2lFLGNBQWMsQ0FBRSxJQUN2RixJQUFJLENBQUNNLG1CQUFtQixJQUFJLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUN4RSxRQUFRLENBQUNpRSxjQUFjLENBQzdFO01BQ0QsSUFBTVEsZUFBZSxHQUNqQixJQUFJLENBQUNDLHFCQUFxQixDQUFDTixJQUFJLENBQUMsVUFBQWhCLE1BQU07UUFBQSxPQUFJQSxNQUFNLENBQUNwRCxRQUFRLENBQUNpRSxjQUFjLENBQUM7TUFBQSxFQUFDLElBQ3pFLElBQUksQ0FBQ1UsdUJBQXVCLElBQUksSUFBSSxDQUFDWixvQkFBb0IsQ0FBQy9ELFFBQVEsQ0FBQ2lFLGNBQWMsQ0FBRSxJQUNuRixJQUFJLENBQUNXLHVCQUF1QixJQUFJLElBQUksQ0FBQ0Msb0JBQW9CLENBQUM3RSxRQUFRLENBQUNpRSxjQUFjLENBQUUsSUFDbkYsSUFBSSxDQUFDYSx5QkFBeUIsSUFBSSxJQUFJLENBQUNDLHNCQUFzQixDQUFDL0UsUUFBUSxDQUFDaUUsY0FBYyxDQUN6RjtNQUVELElBQUksQ0FBQ0MscUJBQXFCLElBQUksQ0FBQ08sZUFBZSxFQUFFO1FBQzVDLElBQUksQ0FBQ2xCLGlCQUFpQixDQUFDLENBQUM7TUFDNUI7SUFDSjtFQUFDO0lBQUE1RSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkUsaUJBQWlCQSxDQUFBLEVBQUc7TUFDaEIsSUFBSSxDQUFDWSxtQkFBbUIsQ0FBQzFFLE9BQU8sQ0FBQyxVQUFBNEQsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ3pELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUFBLEVBQUMsQ0FBQyxDQUFFO01BQzFFLElBQUksSUFBSSxDQUFDd0UscUJBQXFCLEVBQUU7UUFDNUIsSUFBSSxDQUFDWixrQkFBa0IsQ0FBQzdELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUNwRDtNQUNBLElBQUksSUFBSSxDQUFDeUUseUJBQXlCLEVBQUU7UUFDaEMsSUFBSSxDQUFDWCxzQkFBc0IsQ0FBQy9ELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUN4RDtNQUNBO01BQ0EsSUFBSSxJQUFJLENBQUMwRSxtQkFBbUIsRUFBRTtRQUMxQixJQUFJLENBQUNDLGdCQUFnQixDQUFDNUUsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ2xEO0lBQ0o7RUFBQztJQUFBbEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9HLGdCQUFnQkEsQ0FBQzNGLEtBQUssRUFBRTtNQUNwQkEsS0FBSyxDQUFDd0QsY0FBYyxDQUFDLENBQUM7TUFDdEIsSUFBTW9DLFVBQVUsR0FBR25HLFFBQVEsQ0FBQ3lELGNBQWMsQ0FBQyxZQUFZLENBQUM7TUFDeEQsSUFBTTJDLFdBQVcsR0FBRyxJQUFJekMsU0FBUyxDQUFDMEMsU0FBUyxDQUFDRixVQUFVLENBQUM7TUFDdkRDLFdBQVcsQ0FBQ3BGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRTtJQUMzQjtFQUFDO0lBQUFuQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0Usd0JBQXdCQSxDQUFBLEVBQUc7TUFDdkIsSUFBSSxDQUFDSyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCO0VBQUM7QUFBQSxFQTlGd0JwRiwwREFBVTtBQUFBK0IsZUFBQSxDQUFBOUIsUUFBQSxhQUNsQixDQUNiLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixrQkFBa0IsQ0FDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMEM7QUFBQSxJQUFBQSxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUszQyxTQUFBQyxPQUFPQSxDQUFBLEVBQUc7TUFDTjtNQUNBLElBQUksQ0FBQ3VHLGFBQWEsQ0FBQyxDQUFDOztNQUVwQjtNQUNBQyxNQUFNLENBQUN0RyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDcUcsYUFBYSxDQUFDbkcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFO0VBQUM7SUFBQU4sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU0sVUFBVUEsQ0FBQSxFQUFHO01BQ1Q7TUFDQW1HLE1BQU0sQ0FBQ2xHLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNpRyxhQUFhLENBQUNuRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkU7RUFBQztJQUFBTixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0csYUFBYUEsQ0FBQSxFQUFHO01BQ1osSUFBTUUsYUFBYSxHQUFHRCxNQUFNLENBQUNFLFdBQVcsR0FBRyxHQUFHO01BRTlDLElBQUksQ0FBQ0MsY0FBYyxDQUFDL0YsT0FBTyxDQUFDLFVBQUFnRyxPQUFPLEVBQUk7UUFDbkMsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUNFLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0MsR0FBRztRQUV0RCxJQUFJRixVQUFVLEdBQUdKLGFBQWEsRUFBRTtVQUM1QkcsT0FBTyxDQUFDN0YsU0FBUyxDQUFDNEIsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUNuQztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQUM7QUFBQSxFQTFCd0JyRCwwREFBVTtBQUFBK0IsZUFBQSxDQUFBOUIsUUFBQSxhQUNsQixDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hzQztBQUNqRDtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMEI7QUFFMUJ5SCxvRkFBaUMsQ0FBQ0MsK0VBQTJELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabEM7QUFFckQsSUFBTUcsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0YsNElBSW5DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ053QjtBQUFBO0FBRTFCLDZCQUFlLG9DQUFVTyxLQUFLLEVBQUU7RUFDNUIsb0JBQU9ELHVEQUFBO0lBQUFFLFFBQUEsR0FBSyxRQUFNLEVBQUNELEtBQUssQ0FBQ0UsUUFBUTtFQUFBLENBQU0sQ0FBQztBQUM1Qzs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsU0FBU1YsaUNBQWlDQSxDQUFDRSxPQUFPLEVBQUU7RUFDaEQsSUFBTVMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0VBQzNCLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBd0JBLENBQUlDLENBQUMsRUFBSztJQUNwQ0EsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDbEgsT0FBTyxDQUFDLFVBQUNkLEdBQUcsRUFBSztNQUN0QjZILGdCQUFnQixDQUFDN0gsR0FBRyxDQUFDLEdBQUcrSCxDQUFDLENBQUMvSCxHQUFHLENBQUMsV0FBUTtJQUMxQyxDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0Q4SCx3QkFBd0IsQ0FBQ1YsT0FBTyxDQUFDO0VBQ2pDVixNQUFNLENBQUN1QixxQkFBcUIsR0FBRyxVQUFDQyxJQUFJLEVBQUs7SUFDckMsSUFBTUMsU0FBUyxHQUFHTixnQkFBZ0IsTUFBQTFFLE1BQUEsQ0FBTStFLElBQUksVUFBTyxJQUFJTCxnQkFBZ0IsTUFBQTFFLE1BQUEsQ0FBTStFLElBQUksVUFBTztJQUN4RixJQUFJLE9BQU9DLFNBQVMsS0FBSyxXQUFXLEVBQUU7TUFDbEMsSUFBTUMsY0FBYyxHQUFHQyxNQUFNLENBQUNMLElBQUksQ0FBQ0gsZ0JBQWdCLENBQUMsQ0FBQ1MsR0FBRyxDQUFDLFVBQUN0SSxHQUFHO1FBQUEsT0FBS0EsR0FBRyxDQUFDdUksT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7TUFBQSxFQUFDO01BQ2hJLE1BQU0sSUFBSUMsS0FBSyx1QkFBQXJGLE1BQUEsQ0FBc0IrRSxJQUFJLDBDQUFBL0UsTUFBQSxDQUFzQ2lGLGNBQWMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7SUFDL0c7SUFDQSxPQUFPTixTQUFTO0VBQ3BCLENBQUM7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEIwQjtBQUNTO0FBQ2E7QUFFaEQsSUFBSVEsVUFBVTtBQUVkLElBQUlDLENBQUMsR0FBR0Ysc0NBQVU7QUFDbEIsSUFBSUcsS0FBcUMsRUFBRSxFQUcxQyxNQUFNO0VBQ0wsSUFBSTVGLENBQUMsR0FBRzJGLENBQUMsQ0FBQ0ssa0RBQWtEO0VBQzVETixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBWU8sQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDMUJsRyxDQUFDLENBQUNtRyxxQkFBcUIsR0FBRyxJQUFJO0lBQzlCLElBQUk7TUFDRixPQUFPUixDQUFDLENBQUNELFVBQVUsQ0FBQ08sQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxTQUFTO01BQ1JsRyxDQUFDLENBQUNtRyxxQkFBcUIsR0FBRyxLQUFLO0lBQ2pDO0VBQ0YsQ0FBQztBQUNIO0FBQUMsSUFFS0MsU0FBUywwQkFBQTNKLFdBQUE7RUFBQSxTQUFBMkosVUFBQTtJQUFBMUosZUFBQSxPQUFBMEosU0FBQTtJQUFBLE9BQUF6SixVQUFBLE9BQUF5SixTQUFBLEVBQUF4SixTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBdUosU0FBQSxFQUFBM0osV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQXNKLFNBQUE7SUFBQXJKLEdBQUE7SUFBQUMsS0FBQSxFQUNYLFNBQUFDLE9BQU9BLENBQUEsRUFBRztNQUNOLElBQU13SCxLQUFLLEdBQUcsSUFBSSxDQUFDNEIsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUk7TUFDdEQsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBUyxFQUFFO1FBQUVwQixTQUFTLEVBQUUsSUFBSSxDQUFDcUIsY0FBYztRQUFFOUIsS0FBSyxFQUFFQTtNQUFNLENBQUMsQ0FBQztNQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDOEIsY0FBYyxFQUFFO1FBQ3RCLE1BQU0sSUFBSWhCLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztNQUM5QztNQUNBLElBQU1MLFNBQVMsR0FBR3pCLE1BQU0sQ0FBQ3VCLHFCQUFxQixDQUFDLElBQUksQ0FBQ3VCLGNBQWMsQ0FBQztNQUNuRSxJQUFJLENBQUNDLG1CQUFtQixjQUFDbEMsMERBQW1CLENBQUNZLFNBQVMsRUFBRVQsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO01BQ3JFLElBQUksQ0FBQzZCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7UUFDeEJJLGFBQWEsRUFBRSxJQUFJLENBQUNILGNBQWM7UUFDbENyQixTQUFTLEVBQUVBLFNBQVM7UUFDcEJULEtBQUssRUFBRUE7TUFDWCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUExSCxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBTSxVQUFVQSxDQUFBLEVBQUc7TUFDVCxJQUFJLENBQUNhLE9BQU8sQ0FBQ3dJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7TUFDM0IsSUFBSSxDQUFDTixhQUFhLENBQUMsU0FBUyxFQUFFO1FBQzFCcEIsU0FBUyxFQUFFLElBQUksQ0FBQ3FCLGNBQWM7UUFDOUI5QixLQUFLLEVBQUUsSUFBSSxDQUFDNEIsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxHQUFHO01BQy9DLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQXRKLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUF3SixtQkFBbUJBLENBQUNLLFlBQVksRUFBRTtNQUM5QixJQUFNMUksT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztNQUM1QixJQUFJLENBQUNBLE9BQU8sQ0FBQ3dJLElBQUksRUFBRTtRQUNmeEksT0FBTyxDQUFDd0ksSUFBSSxHQUFHakIsVUFBVSxDQUFDLElBQUksQ0FBQ3ZILE9BQU8sQ0FBQztNQUMzQztNQUNBQSxPQUFPLENBQUN3SSxJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsWUFBWSxDQUFDO0lBQ3JDO0VBQUM7SUFBQTlKLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFzSixhQUFhQSxDQUFDckIsSUFBSSxFQUFFOEIsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDL0IsSUFBSSxFQUFFO1FBQUVnQyxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQVEsQ0FBQyxDQUFDO0lBQzdEO0VBQUM7QUFBQSxFQS9CbUIzSywwREFBVTtBQWlDbEM2SixTQUFTLENBQUNlLE1BQU0sR0FBRztFQUNmakMsU0FBUyxFQUFFa0MsTUFBTTtFQUNqQjNDLEtBQUssRUFBRVc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUQrQztBQUN2QjtBQUFBLElBRW5CaUMsZ0JBQWdCLDBCQUFBNUssV0FBQTtFQUFBLFNBQUE0SyxpQkFBQTtJQUFBM0ssZUFBQSxPQUFBMkssZ0JBQUE7SUFBQSxPQUFBMUssVUFBQSxPQUFBMEssZ0JBQUEsRUFBQXpLLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUF3SyxnQkFBQSxFQUFBNUssV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQXVLLGdCQUFBO0FBQUEsRUFBUzlLLDBEQUFVOzs7Ozs7Ozs7Ozs7O0FDSHpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yZXZlYWxfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2FydF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2FydF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcmV2ZWFsX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9yZXZlYWxfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9IZWxsby5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ292ZXJsYXknXTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIENsb3NlIG92ZXJsYXkgd2hlbiBjbGlja2luZyBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU92ZXJsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPdmVybGF5KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50IGNsb3NpbmcgdGhlIG92ZXJsYXlcbiAgICAgICAgLy8gQ2xvc2UgYWxsIG90aGVyIG92ZXJsYXlzXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWNhcmQgLm92ZXJsYXknKS5mb3JFYWNoKChvdmVybGF5KSA9PiB7XG4gICAgICAgICAgICBpZiAob3ZlcmxheSAhPT0gdGhpcy5vdmVybGF5VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE92ZXJsYXkgaXMgYWN0aXZlXG4gICAgICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjbG9zZU92ZXJsYXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wic2VsZWN0ZWRDYXJkXCJdXG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgaGVhZGVyczogQXJyYXlcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcm91c2VsIGNvbnRyb2xsZXIgY29ubmVjdGVkXCIsIHRoaXMuaGVhZGVyc1ZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyc1ZhbHVlICYmIHRoaXMuaGVhZGVyc1ZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDYXJkKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGhlYWRlcnMgZGF0YSBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3RlZENhcmQoZXZlbnQpIHtcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaW5kZXggPSBldmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNhcm91c2VsSW5kZXhQYXJhbSwgMTApO1xuICAgICAgICAgICAgdGhpcy5hZGRQdWxzZUVmZmVjdChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgY2FyZCB3aXRoIGluZGV4OlwiLCBpbmRleCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlcnNWYWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmhlYWRlcnNWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJIZWFkZXJzIGRhdGEgaXMgbm90IGFuIGFycmF5OlwiLCB0aGlzLmhlYWRlcnNWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZEhlYWRlciA9IHRoaXMuaGVhZGVyc1ZhbHVlW2luZGV4XTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBoZWFkZXI6XCIsIHNlbGVjdGVkSGVhZGVyKTtcblxuICAgICAgICBpZiAoIXNlbGVjdGVkSGVhZGVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBoZWFkZXIgZm91bmQgYXQgaW5kZXgnLCBpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdGVkSGVhZGVyLnBpY3R1cmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlbGVjdGVkIGhlYWRlciBoYXMgbm8gcGljdHVyZTonLCBzZWxlY3RlZEhlYWRlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbihpbmRleCk7XG4gICAgICAgIHRoaXMudXBkYXRlTWFpbkNhcmQoc2VsZWN0ZWRIZWFkZXIpO1xuICAgIH1cblxuICAgIGFkZFB1bHNlRWZmZWN0KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRodW1ibmFpbCcpO1xuICAgICAgICAgICAgaWYgKHRodW1ibmFpbCkge1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCdwdWxzZScpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UnKTtcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uKHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYm5haWwtY29udGFpbmVyJykuZm9yRWFjaCgoY29udGFpbmVyLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10aHVtYm5haWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRodW1ibmFpbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYWluQ2FyZChzZWxlY3RlZEhlYWRlcikge1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIGgtMTAwIGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91cGxvYWRzL2hlYWRlci8ke3NlbGVjdGVkSGVhZGVyLnBpY3R1cmV9XCIgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMCBvYmplY3QtZml0LWNvdmVyXCIgYWx0PVwiJHtzZWxlY3RlZEhlYWRlci50aXRsZSB8fCAnJ31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgYm90dG9tLTAgc3RhcnQtMCB3LTEwMCBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC13aGl0ZSBmdy1ib2xkIG1iLTJcIj4ke3NlbGVjdGVkSGVhZGVyLnRpdGxlIHx8ICcnfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZSBtYi00XCI+JHtzZWxlY3RlZEhlYWRlci5jb250ZW50IHx8ICcnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtzZWxlY3RlZEhlYWRlci5idXR0b25MaW5rIHx8ICcjJ31cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSByb3VuZGVkLXBpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3NlbGVjdGVkSGVhZGVyLmJ1dHRvblRpdGxlIHx8ICdDbGljayBoZXJlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZFRhcmdldC5pbm5lckhUTUwgPSBuZXdDb250ZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgdG9hc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpdmVUb2FzdCcpO1xuICAgICAgICBpZiAodG9hc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBib290c3RyYXAuVG9hc3QodG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHRvYXN0LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMnKTtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGd1ZXN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Vlc3RGb3JtXCIpO1xuICAgICAgICBpZiAoZ3Vlc3RGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICAgICAgZ3Vlc3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndWVzdEZvcm0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvLCBTdGltdWx1cyFcIiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgYWxlcnQoXCJIZWxsbywgU3RpbXVsdXMhXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkhlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1xuICAgICAgICBcImRyb3Bkb3duQnV0dG9uXCIsXG4gICAgICAgIFwiZHJvcGRvd25NZW51XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VCdXR0b25cIixcbiAgICAgICAgXCJsYW5ndWFnZU1lbnVcIixcbiAgICAgICAgXCJ1c2VyTWVudUJ1dHRvblwiLFxuICAgICAgICBcInVzZXJEcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJtb2JpbGVNZW51XCIsXG4gICAgICAgIFwibW9iaWxlTWVudUJ1dHRvblwiXG4gICAgXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOYXZiYXJEcm9wZG93biBjb250cm9sbGVyIGNvbm5lY3RlZFwiKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3ducyA9IHRoaXMuY2xvc2VEcm9wZG93bnMuYmluZCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25zKTtcbiAgICAgICAgdGhpcy5lbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQoKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bnMpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51ID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTsgIC8vIFV0aWxpc2UgJ3Nob3cnIHBvdXIgYWZmaWNoZXIvbWFzcXVlciBsZSBkcm9wZG93blxuICAgIH1cblxuICAgIHRvZ2dsZUxhbmd1YWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTsgIC8vIFV0aWxpc2UgJ3Nob3cnIHBvdXIgYWZmaWNoZXIvbWFzcXVlciBsZSBtZW51XG4gICAgfVxuXG4gICAgdG9nZ2xlVXNlck1lbnUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTsgIC8vIFV0aWxpc2UgJ3Nob3cnIHBvdXIgYWZmaWNoZXIvbWFzcXVlciBsZSBtZW51IHV0aWxpc2F0ZXVyXG4gICAgfVxuXG4gICAgc2VsZWN0TGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB0aGlzLmxhbmd1YWdlQnV0dG9uVGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkTGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTsgIC8vIEZlcm1lIGxlIG1lbnUgYXByw6hzIHPDqWxlY3Rpb25cbiAgICB9XG5cbiAgICBjbG9zZURyb3Bkb3ducyhldmVudCkge1xuICAgICAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgaXNDbGlja0luc2lkZURyb3Bkb3duID0gKFxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnVUYXJnZXRzLnNvbWUobWVudSA9PiBtZW51LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc0xhbmd1YWdlTWVudVRhcmdldCAmJiB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0ICYmIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNNb2JpbGVNZW51VGFyZ2V0ICYmIHRoaXMubW9iaWxlTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQ2xpY2tPbkJ1dHRvbiA9IChcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CdXR0b25UYXJnZXRzLnNvbWUoYnV0dG9uID0+IGJ1dHRvbi5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNMYW5ndWFnZUJ1dHRvblRhcmdldCAmJiB0aGlzLmxhbmd1YWdlQnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc1VzZXJNZW51QnV0dG9uVGFyZ2V0ICYmIHRoaXMudXNlck1lbnVCdXR0b25UYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzTW9iaWxlTWVudUJ1dHRvblRhcmdldCAmJiB0aGlzLm1vYmlsZU1lbnVCdXR0b25UYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghaXNDbGlja0luc2lkZURyb3Bkb3duICYmICFpc0NsaWNrT25CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlQWxsRHJvcGRvd25zKCkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duTWVudVRhcmdldHMuZm9yRWFjaChtZW51ID0+IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpKTsgIC8vIEZlcm1lIHRvdXMgbGVzIGRyb3Bkb3duc1xuICAgICAgICBpZiAodGhpcy5oYXNMYW5ndWFnZU1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZlcm1lciBsZSBtZW51IG1vYmlsZSBzaSBuw6ljZXNzYWlyZVxuICAgICAgICBpZiAodGhpcy5oYXNNb2JpbGVNZW51VGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTW9iaWxlTWVudShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVNZW51XCIpO1xuICAgICAgICBjb25zdCBic09mZmNhbnZhcyA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKG1vYmlsZU1lbnUpO1xuICAgICAgICBic09mZmNhbnZhcy50b2dnbGUoKTsgIC8vIFV0aWxpc2F0aW9uIGR1IE9mZmNhbnZhcyBkZSBCb290c3RyYXAgcG91ciBsZSBtZW51IG1vYmlsZVxuICAgIH1cblxuICAgIGVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcInNlY3Rpb25cIl1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIFLDqXbDqWxlciBsZXMgc2VjdGlvbnMgdmlzaWJsZXMgYXUgY2hhcmdlbWVudFxuICAgICAgICB0aGlzLnJldmVhbFNlY3Rpb24oKVxuXG4gICAgICAgIC8vIEF0dGFjaGVyIGwnw6l2w6luZW1lbnQgZGUgZMOpZmlsZW1lbnRcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMucmV2ZWFsU2VjdGlvbi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIC8vIE5ldHRveWVyIGwnw6l2w6luZW1lbnQgZGUgZMOpZmlsZW1lbnQgbG9yc3F1J29uIGTDqWNvbm5lY3RlIGxlIGNvbnRyw7RsZXVyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnJldmVhbFNlY3Rpb24uYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICByZXZlYWxTZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB0cmlnZ2VyQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0ICogMC44XG5cbiAgICAgICAgdGhpcy5zZWN0aW9uVGFyZ2V0cy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgICAgIGlmIChzZWN0aW9uVG9wIDwgdHJpZ2dlckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIDxkaXY+SGVsbG8ge3Byb3BzLmZ1bGxOYW1lfTwvZGl2Pjtcbn1cbiIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlVmFsdWVzID0gT2JqZWN0LmtleXMocmVhY3RDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcuanN4JywgJycpLnJlcGxhY2UoJy50c3gnLCAnJykpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdCBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlT3ZlcmxheSIsImJpbmQiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU92ZXJsYXkiLCJldmVudCIsIl90aGlzIiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJvdmVybGF5Iiwib3ZlcmxheVRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZSIsImVsZW1lbnQiLCJjb250YWlucyIsInRhcmdldCIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyc1ZhbHVlIiwibGVuZ3RoIiwidXBkYXRlU2VsZWN0ZWRDYXJkIiwiZXJyb3IiLCJpbmRleCIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjYXJvdXNlbEluZGV4UGFyYW0iLCJhZGRQdWxzZUVmZmVjdCIsIkFycmF5IiwiaXNBcnJheSIsInNlbGVjdGVkSGVhZGVyIiwicGljdHVyZSIsInVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbiIsInVwZGF0ZU1haW5DYXJkIiwidGh1bWJuYWlsIiwicXVlcnlTZWxlY3RvciIsImFkZCIsInNldFRpbWVvdXQiLCJzZWxlY3RlZEluZGV4IiwiY29udGFpbmVyIiwiaSIsIm5ld0NvbnRlbnQiLCJjb25jYXQiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b25MaW5rIiwiYnV0dG9uVGl0bGUiLCJzZWxlY3RlZENhcmRUYXJnZXQiLCJpbm5lckhUTUwiLCJoZWFkZXJzIiwidG9hc3RFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2FzdCIsImJvb3RzdHJhcCIsIlRvYXN0Iiwic2hvdyIsInRvZ2dsZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImd1ZXN0Rm9ybSIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJjbG9zZURyb3Bkb3ducyIsImVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCIsInRvZ2dsZURyb3Bkb3duIiwiYnV0dG9uIiwibWVudSIsIm5leHRFbGVtZW50U2libGluZyIsImNsb3NlQWxsRHJvcGRvd25zIiwidG9nZ2xlTGFuZ3VhZ2UiLCJsYW5ndWFnZU1lbnVUYXJnZXQiLCJ0b2dnbGVVc2VyTWVudSIsInVzZXJEcm9wZG93bk1lbnVUYXJnZXQiLCJzZWxlY3RMYW5ndWFnZSIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJ0cmltIiwibGFuZ3VhZ2VCdXR0b25UYXJnZXQiLCJzcmMiLCJjbGlja2VkRWxlbWVudCIsImlzQ2xpY2tJbnNpZGVEcm9wZG93biIsImRyb3Bkb3duTWVudVRhcmdldHMiLCJzb21lIiwiaGFzTGFuZ3VhZ2VNZW51VGFyZ2V0IiwiaGFzVXNlckRyb3Bkb3duTWVudVRhcmdldCIsImhhc01vYmlsZU1lbnVUYXJnZXQiLCJtb2JpbGVNZW51VGFyZ2V0IiwiaXNDbGlja09uQnV0dG9uIiwiZHJvcGRvd25CdXR0b25UYXJnZXRzIiwiaGFzTGFuZ3VhZ2VCdXR0b25UYXJnZXQiLCJoYXNVc2VyTWVudUJ1dHRvblRhcmdldCIsInVzZXJNZW51QnV0dG9uVGFyZ2V0IiwiaGFzTW9iaWxlTWVudUJ1dHRvblRhcmdldCIsIm1vYmlsZU1lbnVCdXR0b25UYXJnZXQiLCJ0b2dnbGVNb2JpbGVNZW51IiwibW9iaWxlTWVudSIsImJzT2ZmY2FudmFzIiwiT2ZmY2FudmFzIiwicmV2ZWFsU2VjdGlvbiIsIndpbmRvdyIsInRyaWdnZXJCb3R0b20iLCJpbm5lckhlaWdodCIsInNlY3Rpb25UYXJnZXRzIiwic2VjdGlvbiIsInNlY3Rpb25Ub3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJSZWFjdCIsImpzeHMiLCJfanN4cyIsInByb3BzIiwiY2hpbGRyZW4iLCJmdWxsTmFtZSIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwia2V5cyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsIm5hbWUiLCJjb21wb25lbnQiLCJwb3NzaWJsZVZhbHVlcyIsIk9iamVjdCIsIm1hcCIsInJlcGxhY2UiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==