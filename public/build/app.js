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
      var newContent = "\n            <div class=\"position-relative h-100 fade-in\">\n                <img src=\"/uploads/header/".concat(selectedHeader.picture, "\" class=\"position-absolute w-100 h-100 object-fit-cover\" alt=\"").concat(selectedHeader.title || '', "\">\n                <div class=\"position-absolute bottom-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4\" style=\"background: linear-gradient(to right, rgba(0,0,0,0.5), transparent);\">\n                    <h1 class=\"text-white fw-bold mb-2\">").concat(selectedHeader.title || '', "</h1>\n                    <p class=\"text-white mb-4\">").concat(selectedHeader.content || '', "</p>\n                    <div class=\"d-flex justify-content-center\">\n                        <a href=\"").concat(selectedHeader.buttonLink || '#', "\" class=\"btn btn-primary rounded-pill\">\n                            ").concat(selectedHeader.buttonTitle || 'Click here', "\n                        </a>\n                    </div>\n                </div>\n            </div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFuSyxlQUFBLE9BQUFtSyxnQkFBQTtJQUFBLE9BQUFsSyxVQUFBLE9BQUFrSyxnQkFBQSxFQUFBakssU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQWdLLGdCQUFBLEVBQUFwSyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBK0osZ0JBQUE7QUFBQSxFQUFTdEssMERBQVU7Ozs7Ozs7Ozs7Ozs7QUNIekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY2FydF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2FydF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2FydF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9IZWxsby5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ292ZXJsYXknXTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIENsb3NlIG92ZXJsYXkgd2hlbiBjbGlja2luZyBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU92ZXJsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPdmVybGF5KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50IGNsb3NpbmcgdGhlIG92ZXJsYXlcbiAgICAgICAgLy8gQ2xvc2UgYWxsIG90aGVyIG92ZXJsYXlzXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWNhcmQgLm92ZXJsYXknKS5mb3JFYWNoKChvdmVybGF5KSA9PiB7XG4gICAgICAgICAgICBpZiAob3ZlcmxheSAhPT0gdGhpcy5vdmVybGF5VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE92ZXJsYXkgaXMgYWN0aXZlXG4gICAgICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjbG9zZU92ZXJsYXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wic2VsZWN0ZWRDYXJkXCJdXG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgaGVhZGVyczogQXJyYXlcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcm91c2VsIGNvbnRyb2xsZXIgY29ubmVjdGVkXCIsIHRoaXMuaGVhZGVyc1ZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyc1ZhbHVlICYmIHRoaXMuaGVhZGVyc1ZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDYXJkKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGhlYWRlcnMgZGF0YSBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3RlZENhcmQoZXZlbnQpIHtcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaW5kZXggPSBldmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNhcm91c2VsSW5kZXhQYXJhbSwgMTApO1xuICAgICAgICAgICAgdGhpcy5hZGRQdWxzZUVmZmVjdChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgY2FyZCB3aXRoIGluZGV4OlwiLCBpbmRleCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlcnNWYWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmhlYWRlcnNWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJIZWFkZXJzIGRhdGEgaXMgbm90IGFuIGFycmF5OlwiLCB0aGlzLmhlYWRlcnNWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZEhlYWRlciA9IHRoaXMuaGVhZGVyc1ZhbHVlW2luZGV4XTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBoZWFkZXI6XCIsIHNlbGVjdGVkSGVhZGVyKTtcblxuICAgICAgICBpZiAoIXNlbGVjdGVkSGVhZGVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBoZWFkZXIgZm91bmQgYXQgaW5kZXgnLCBpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdGVkSGVhZGVyLnBpY3R1cmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlbGVjdGVkIGhlYWRlciBoYXMgbm8gcGljdHVyZTonLCBzZWxlY3RlZEhlYWRlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbihpbmRleCk7XG4gICAgICAgIHRoaXMudXBkYXRlTWFpbkNhcmQoc2VsZWN0ZWRIZWFkZXIpO1xuICAgIH1cblxuICAgIGFkZFB1bHNlRWZmZWN0KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRodW1ibmFpbCcpO1xuICAgICAgICAgICAgaWYgKHRodW1ibmFpbCkge1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCdwdWxzZScpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UnKTtcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uKHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYm5haWwtY29udGFpbmVyJykuZm9yRWFjaCgoY29udGFpbmVyLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10aHVtYm5haWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRodW1ibmFpbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYWluQ2FyZChzZWxlY3RlZEhlYWRlcikge1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIGgtMTAwIGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi91cGxvYWRzL2hlYWRlci8ke3NlbGVjdGVkSGVhZGVyLnBpY3R1cmV9XCIgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBoLTEwMCBvYmplY3QtZml0LWNvdmVyXCIgYWx0PVwiJHtzZWxlY3RlZEhlYWRlci50aXRsZSB8fCAnJ31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgYm90dG9tLTAgc3RhcnQtMCB3LTEwMCBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBwLTRcIiBzdHlsZT1cImJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwwLjUpLCB0cmFuc3BhcmVudCk7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtd2hpdGUgZnctYm9sZCBtYi0yXCI+JHtzZWxlY3RlZEhlYWRlci50aXRsZSB8fCAnJ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgbWItNFwiPiR7c2VsZWN0ZWRIZWFkZXIuY29udGVudCB8fCAnJ308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7c2VsZWN0ZWRIZWFkZXIuYnV0dG9uTGluayB8fCAnIyd9XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgcm91bmRlZC1waWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEhlYWRlci5idXR0b25UaXRsZSB8fCAnQ2xpY2sgaGVyZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRUYXJnZXQuaW5uZXJIVE1MID0gbmV3Q29udGVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHRvYXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlVG9hc3QnKTtcbiAgICAgICAgaWYgKHRvYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgYm9vdHN0cmFwLlRvYXN0KHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGZvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBndWVzdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXN0Rm9ybVwiKTtcbiAgICAgICAgaWYgKGd1ZXN0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpIHtcbiAgICAgICAgICAgIGd1ZXN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3Vlc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbywgU3RpbXVsdXMhXCIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGFsZXJ0KFwiSGVsbG8sIFN0aW11bHVzIVwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gXCJIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcbiAgICAgICAgXCJkcm9wZG93bkJ1dHRvblwiLFxuICAgICAgICBcImRyb3Bkb3duTWVudVwiLFxuICAgICAgICBcImxhbmd1YWdlQnV0dG9uXCIsXG4gICAgICAgIFwibGFuZ3VhZ2VNZW51XCIsXG4gICAgICAgIFwidXNlck1lbnVCdXR0b25cIixcbiAgICAgICAgXCJ1c2VyRHJvcGRvd25NZW51XCIsXG4gICAgICAgIFwibW9iaWxlTWVudVwiLFxuICAgICAgICBcIm1vYmlsZU1lbnVCdXR0b25cIlxuICAgIF1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF2YmFyRHJvcGRvd24gY29udHJvbGxlciBjb25uZWN0ZWRcIik7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bnMgPSB0aGlzLmNsb3NlRHJvcGRvd25zLmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3ducyk7XG4gICAgICAgIHRoaXMuZW5zdXJlRHJvcGRvd25zQXJlQ2xvc2VkKCk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlRHJvcGRvd25zKTtcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wZG93bihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgbWVudSA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7ICAvLyBVdGlsaXNlICdzaG93JyBwb3VyIGFmZmljaGVyL21hc3F1ZXIgbGUgZHJvcGRvd25cbiAgICB9XG5cbiAgICB0b2dnbGVMYW5ndWFnZShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgICAgICB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7ICAvLyBVdGlsaXNlICdzaG93JyBwb3VyIGFmZmljaGVyL21hc3F1ZXIgbGUgbWVudVxuICAgIH1cblxuICAgIHRvZ2dsZVVzZXJNZW51KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgICAgIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7ICAvLyBVdGlsaXNlICdzaG93JyBwb3VyIGFmZmljaGVyL21hc3F1ZXIgbGUgbWVudSB1dGlsaXNhdGV1clxuICAgIH1cblxuICAgIHNlbGVjdExhbmd1YWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTGFuZ3VhZ2UgPSBldmVudC5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUJ1dHRvblRhcmdldC5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSBzZWxlY3RlZExhbmd1YWdlO1xuICAgICAgICB0aGlzLmxhbmd1YWdlQnV0dG9uVGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjO1xuICAgICAgICB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7ICAvLyBGZXJtZSBsZSBtZW51IGFwcsOocyBzw6lsZWN0aW9uXG4gICAgfVxuXG4gICAgY2xvc2VEcm9wZG93bnMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGlzQ2xpY2tJbnNpZGVEcm9wZG93biA9IChcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25NZW51VGFyZ2V0cy5zb21lKG1lbnUgPT4gbWVudS5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNMYW5ndWFnZU1lbnVUYXJnZXQgJiYgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzVXNlckRyb3Bkb3duTWVudVRhcmdldCAmJiB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzTW9iaWxlTWVudVRhcmdldCAmJiB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpc0NsaWNrT25CdXR0b24gPSAoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQnV0dG9uVGFyZ2V0cy5zb21lKGJ1dHRvbiA9PiBidXR0b24uY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzTGFuZ3VhZ2VCdXR0b25UYXJnZXQgJiYgdGhpcy5sYW5ndWFnZUJ1dHRvblRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNVc2VyTWVudUJ1dHRvblRhcmdldCAmJiB0aGlzLnVzZXJNZW51QnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc01vYmlsZU1lbnVCdXR0b25UYXJnZXQgJiYgdGhpcy5tb2JpbGVNZW51QnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWlzQ2xpY2tJbnNpZGVEcm9wZG93biAmJiAhaXNDbGlja09uQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZUFsbERyb3Bkb3ducygpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk1lbnVUYXJnZXRzLmZvckVhY2gobWVudSA9PiBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKSk7ICAvLyBGZXJtZSB0b3VzIGxlcyBkcm9wZG93bnNcbiAgICAgICAgaWYgKHRoaXMuaGFzTGFuZ3VhZ2VNZW51VGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzVXNlckRyb3Bkb3duTWVudVRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGZXJtZXIgbGUgbWVudSBtb2JpbGUgc2kgbsOpY2Vzc2FpcmVcbiAgICAgICAgaWYgKHRoaXMuaGFzTW9iaWxlTWVudVRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1vYmlsZU1lbnUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlTWVudVwiKTtcbiAgICAgICAgY29uc3QgYnNPZmZjYW52YXMgPSBuZXcgYm9vdHN0cmFwLk9mZmNhbnZhcyhtb2JpbGVNZW51KTtcbiAgICAgICAgYnNPZmZjYW52YXMudG9nZ2xlKCk7ICAvLyBVdGlsaXNhdGlvbiBkdSBPZmZjYW52YXMgZGUgQm9vdHN0cmFwIHBvdXIgbGUgbWVudSBtb2JpbGVcbiAgICB9XG5cbiAgICBlbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIDxkaXY+SGVsbG8ge3Byb3BzLmZ1bGxOYW1lfTwvZGl2Pjtcbn1cbiIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlVmFsdWVzID0gT2JqZWN0LmtleXMocmVhY3RDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcuanN4JywgJycpLnJlcGxhY2UoJy50c3gnLCAnJykpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdCBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlT3ZlcmxheSIsImJpbmQiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU92ZXJsYXkiLCJldmVudCIsIl90aGlzIiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJvdmVybGF5Iiwib3ZlcmxheVRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZSIsImVsZW1lbnQiLCJjb250YWlucyIsInRhcmdldCIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyc1ZhbHVlIiwibGVuZ3RoIiwidXBkYXRlU2VsZWN0ZWRDYXJkIiwiZXJyb3IiLCJpbmRleCIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjYXJvdXNlbEluZGV4UGFyYW0iLCJhZGRQdWxzZUVmZmVjdCIsIkFycmF5IiwiaXNBcnJheSIsInNlbGVjdGVkSGVhZGVyIiwicGljdHVyZSIsInVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbiIsInVwZGF0ZU1haW5DYXJkIiwidGh1bWJuYWlsIiwicXVlcnlTZWxlY3RvciIsImFkZCIsInNldFRpbWVvdXQiLCJzZWxlY3RlZEluZGV4IiwiY29udGFpbmVyIiwiaSIsIm5ld0NvbnRlbnQiLCJjb25jYXQiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b25MaW5rIiwiYnV0dG9uVGl0bGUiLCJzZWxlY3RlZENhcmRUYXJnZXQiLCJpbm5lckhUTUwiLCJoZWFkZXJzIiwidG9hc3RFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2FzdCIsImJvb3RzdHJhcCIsIlRvYXN0Iiwic2hvdyIsInRvZ2dsZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImd1ZXN0Rm9ybSIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJjbG9zZURyb3Bkb3ducyIsImVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCIsInRvZ2dsZURyb3Bkb3duIiwiYnV0dG9uIiwibWVudSIsIm5leHRFbGVtZW50U2libGluZyIsImNsb3NlQWxsRHJvcGRvd25zIiwidG9nZ2xlTGFuZ3VhZ2UiLCJsYW5ndWFnZU1lbnVUYXJnZXQiLCJ0b2dnbGVVc2VyTWVudSIsInVzZXJEcm9wZG93bk1lbnVUYXJnZXQiLCJzZWxlY3RMYW5ndWFnZSIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJ0cmltIiwibGFuZ3VhZ2VCdXR0b25UYXJnZXQiLCJzcmMiLCJjbGlja2VkRWxlbWVudCIsImlzQ2xpY2tJbnNpZGVEcm9wZG93biIsImRyb3Bkb3duTWVudVRhcmdldHMiLCJzb21lIiwiaGFzTGFuZ3VhZ2VNZW51VGFyZ2V0IiwiaGFzVXNlckRyb3Bkb3duTWVudVRhcmdldCIsImhhc01vYmlsZU1lbnVUYXJnZXQiLCJtb2JpbGVNZW51VGFyZ2V0IiwiaXNDbGlja09uQnV0dG9uIiwiZHJvcGRvd25CdXR0b25UYXJnZXRzIiwiaGFzTGFuZ3VhZ2VCdXR0b25UYXJnZXQiLCJoYXNVc2VyTWVudUJ1dHRvblRhcmdldCIsInVzZXJNZW51QnV0dG9uVGFyZ2V0IiwiaGFzTW9iaWxlTWVudUJ1dHRvblRhcmdldCIsIm1vYmlsZU1lbnVCdXR0b25UYXJnZXQiLCJ0b2dnbGVNb2JpbGVNZW51IiwibW9iaWxlTWVudSIsImJzT2ZmY2FudmFzIiwiT2ZmY2FudmFzIiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiUmVhY3QiLCJqc3hzIiwiX2pzeHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiZnVsbE5hbWUiLCJyZWFjdENvbnRyb2xsZXJzIiwiaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzIiwiciIsImtleXMiLCJ3aW5kb3ciLCJyZXNvbHZlUmVhY3RDb21wb25lbnQiLCJuYW1lIiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJPYmplY3QiLCJtYXAiLCJyZXBsYWNlIiwiRXJyb3IiLCJqb2luIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHNWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsInJvb3QiLCJ1bm1vdW50IiwicmVhY3RFbGVtZW50IiwicmVuZGVyIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwiU3RyaW5nIiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=