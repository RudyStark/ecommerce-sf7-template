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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUEsRUFDRCxTQUFBdUssYUFBYUEsQ0FBQzNCLElBQUksRUFBRW9DLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNDLFFBQVEsQ0FBQ3JDLElBQUksRUFBRTtRQUFFc0MsTUFBTSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FBQztJQUM3RDtFQUFDO0FBQUEsRUEvQm1CNUwsMERBQVU7QUFpQ2xDOEssU0FBUyxDQUFDZSxNQUFNLEdBQUc7RUFDZi9CLFNBQVMsRUFBRWdDLE1BQU07RUFDakJyRSxLQUFLLEVBQUV1QztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRCtDO0FBQ3ZCO0FBQUEsSUFFbkIrQixnQkFBZ0IsMEJBQUE3TCxXQUFBO0VBQUEsU0FBQTZMLGlCQUFBO0lBQUE1TCxlQUFBLE9BQUE0TCxnQkFBQTtJQUFBLE9BQUEzTCxVQUFBLE9BQUEyTCxnQkFBQSxFQUFBMUwsU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQXlMLGdCQUFBLEVBQUE3TCxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBd0wsZ0JBQUE7QUFBQSxFQUFTL0wsMERBQVU7Ozs7Ozs7Ozs7Ozs7QUNIekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY2FydF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL05hdkJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2FydF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY2FydF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9IZWxsby5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3hcIixcblx0XCIuL05hdkJhci5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9OYXZCYXIuanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogY29udHJvbGxlcl8wLFxuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzEsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gWydvdmVybGF5J107XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICAvLyBDbG9zZSBvdmVybGF5IHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPdmVybGF5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU92ZXJsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT3ZlcmxheShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBjbG9zaW5nIHRoZSBvdmVybGF5XG4gICAgICAgIC8vIENsb3NlIGFsbCBvdGhlciBvdmVybGF5c1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkcmVzcy1jYXJkIC5vdmVybGF5JykuZm9yRWFjaCgob3ZlcmxheSkgPT4ge1xuICAgICAgICAgICAgaWYgKG92ZXJsYXkgIT09IHRoaXMub3ZlcmxheVRhcmdldCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBPdmVybGF5IGlzIGFjdGl2ZVxuICAgICAgICB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgY2xvc2VPdmVybGF5KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIGFzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcInNlbGVjdGVkQ2FyZFwiXVxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgICAgIGhlYWRlcnM6IEFycmF5XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJvdXNlbCBjb250cm9sbGVyIGNvbm5lY3RlZFwiLCB0aGlzLmhlYWRlcnNWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcnNWYWx1ZSAmJiB0aGlzLmhlYWRlcnNWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2FyZCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBoZWFkZXJzIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0ZWRDYXJkKGV2ZW50KSB7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZXZlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJvdXNlbEluZGV4UGFyYW0sIDEwKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHVsc2VFZmZlY3QoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGNhcmQgd2l0aCBpbmRleDpcIiwgaW5kZXgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oZWFkZXJzVmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5oZWFkZXJzVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSGVhZGVycyBkYXRhIGlzIG5vdCBhbiBhcnJheTpcIiwgdGhpcy5oZWFkZXJzVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRIZWFkZXIgPSB0aGlzLmhlYWRlcnNWYWx1ZVtpbmRleF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaGVhZGVyOlwiLCBzZWxlY3RlZEhlYWRlcik7XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZEhlYWRlcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gaGVhZGVyIGZvdW5kIGF0IGluZGV4JywgaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZEhlYWRlci5waWN0dXJlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTZWxlY3RlZCBoZWFkZXIgaGFzIG5vIHBpY3R1cmU6Jywgc2VsZWN0ZWRIZWFkZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24oaW5kZXgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1haW5DYXJkKHNlbGVjdGVkSGVhZGVyKTtcbiAgICB9XG5cbiAgICBhZGRQdWxzZUVmZmVjdChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aHVtYm5haWwnKTtcbiAgICAgICAgICAgIGlmICh0aHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZCgncHVsc2UnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbihzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWJuYWlsLWNvbnRhaW5lcicpLmZvckVhY2goKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10aHVtYm5haWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWFpbkNhcmQoc2VsZWN0ZWRIZWFkZXIpIHtcbiAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBoLWZ1bGwgZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3VwbG9hZHMvaGVhZGVyLyR7c2VsZWN0ZWRIZWFkZXIucGljdHVyZX1cIiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiBhbHQ9XCIke3NlbGVjdGVkSGVhZGVyLnRpdGxlIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjay81MCB0by10cmFuc3BhcmVudCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kIHAtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMiB0ZXh0LXdoaXRlXCI+JHtzZWxlY3RlZEhlYWRlci50aXRsZSB8fCAnJ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbGcgbWItNCB0ZXh0LXdoaXRlXCI+JHtzZWxlY3RlZEhlYWRlci5jb250ZW50IHx8ICcnfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3NlbGVjdGVkSGVhZGVyLmJ1dHRvbkxpbmsgfHwgJyMnfVwiIGNsYXNzPVwiYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c2VsZWN0ZWRIZWFkZXIuYnV0dG9uVGl0bGUgfHwgJ0NsaWNrIGhlcmUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkVGFyZ2V0LmlubmVySFRNTCA9IG5ld0NvbnRlbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCB0b2FzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZVRvYXN0Jyk7XG4gICAgICAgIGlmICh0b2FzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdEVsZW1lbnQpO1xuICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBmb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qcycpO1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm0oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZ3Vlc3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndWVzdEZvcm1cIik7XG4gICAgICAgIGlmIChndWVzdEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XG4gICAgICAgICAgICBndWVzdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGd1ZXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8sIFN0aW11bHVzIVwiLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICBhbGVydChcIkhlbGxvLCBTdGltdWx1cyFcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IFwiSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXG4gICAgICAgIFwiZHJvcGRvd25CdXR0b25cIixcbiAgICAgICAgXCJkcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJsYW5ndWFnZUJ1dHRvblwiLFxuICAgICAgICBcImxhbmd1YWdlTWVudVwiLFxuICAgICAgICBcInVzZXJNZW51QnV0dG9uXCIsXG4gICAgICAgIFwidXNlckRyb3Bkb3duTWVudVwiLFxuICAgICAgICBcIm1vYmlsZU1lbnVcIixcbiAgICAgICAgXCJtb2JpbGVNZW51QnV0dG9uXCJcbiAgICBdXG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmJhckRyb3Bkb3duIGNvbnRyb2xsZXIgY29ubmVjdGVkXCIpO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd25zID0gdGhpcy5jbG9zZURyb3Bkb3ducy5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bnMpO1xuICAgICAgICB0aGlzLmVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCgpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3ducyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAgLy8gVXRpbGlzZSAnc2hvdycgcG91ciBhZmZpY2hlci9tYXNxdWVyIGxlIGRyb3Bkb3duXG4gICAgfVxuXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAgLy8gVXRpbGlzZSAnc2hvdycgcG91ciBhZmZpY2hlci9tYXNxdWVyIGxlIG1lbnVcbiAgICB9XG5cbiAgICB0b2dnbGVVc2VyTWVudShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgICAgICB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAgLy8gVXRpbGlzZSAnc2hvdycgcG91ciBhZmZpY2hlci9tYXNxdWVyIGxlIG1lbnUgdXRpbGlzYXRldXJcbiAgICB9XG5cbiAgICBzZWxlY3RMYW5ndWFnZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZExhbmd1YWdlID0gZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gc2VsZWN0ZWRMYW5ndWFnZTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUJ1dHRvblRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYztcbiAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpOyAgLy8gRmVybWUgbGUgbWVudSBhcHLDqHMgc8OpbGVjdGlvblxuICAgIH1cblxuICAgIGNsb3NlRHJvcGRvd25zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpc0NsaWNrSW5zaWRlRHJvcGRvd24gPSAoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudVRhcmdldHMuc29tZShtZW51ID0+IG1lbnUuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzTGFuZ3VhZ2VNZW51VGFyZ2V0ICYmIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQgJiYgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc01vYmlsZU1lbnVUYXJnZXQgJiYgdGhpcy5tb2JpbGVNZW51VGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaXNDbGlja09uQnV0dG9uID0gKFxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkJ1dHRvblRhcmdldHMuc29tZShidXR0b24gPT4gYnV0dG9uLmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSkgfHxcbiAgICAgICAgICAgICh0aGlzLmhhc0xhbmd1YWdlQnV0dG9uVGFyZ2V0ICYmIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzVXNlck1lbnVCdXR0b25UYXJnZXQgJiYgdGhpcy51c2VyTWVudUJ1dHRvblRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNNb2JpbGVNZW51QnV0dG9uVGFyZ2V0ICYmIHRoaXMubW9iaWxlTWVudUJ1dHRvblRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc0NsaWNrSW5zaWRlRHJvcGRvd24gJiYgIWlzQ2xpY2tPbkJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VBbGxEcm9wZG93bnMoKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25NZW51VGFyZ2V0cy5mb3JFYWNoKG1lbnUgPT4gbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JykpOyAgLy8gRmVybWUgdG91cyBsZXMgZHJvcGRvd25zXG4gICAgICAgIGlmICh0aGlzLmhhc0xhbmd1YWdlTWVudVRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmVybWVyIGxlIG1lbnUgbW9iaWxlIHNpIG7DqWNlc3NhaXJlXG4gICAgICAgIGlmICh0aGlzLmhhc01vYmlsZU1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNb2JpbGVNZW51KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZU1lbnVcIik7XG4gICAgICAgIGNvbnN0IGJzT2ZmY2FudmFzID0gbmV3IGJvb3RzdHJhcC5PZmZjYW52YXMobW9iaWxlTWVudSk7XG4gICAgICAgIGJzT2ZmY2FudmFzLnRvZ2dsZSgpOyAgLy8gVXRpbGlzYXRpb24gZHUgT2ZmY2FudmFzIGRlIEJvb3RzdHJhcCBwb3VyIGxlIG1lbnUgbW9iaWxlXG4gICAgfVxuXG4gICAgZW5zdXJlRHJvcGRvd25zQXJlQ2xvc2VkKCkge1xuICAgICAgICB0aGlzLmNsb3NlQWxsRHJvcGRvd25zKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiA8ZGl2PkhlbGxvIHtwcm9wcy5mdWxsTmFtZX08L2Rpdj47XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTmF2QmFyKHsgZnVsbENhcnRRdWFudGl0eSwgcGFyZW50Q2F0ZWdvcmllcywgdXNlciB9KSB7XG4gICAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0SXNTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDUwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmVhdGhlci5yZXBsYWNlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50Q2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e2NhdGVnb3J5LnNsdWd9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2NhdGVnb3J5Lm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wICR7aXNTY3JvbGxlZCA/ICdzY3JvbGxlZCcgOiAnJ31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tLzNkLWZsdWVuY3kvOTQvcGFsbS10cmVlLS12Mi5wbmdcIiBhbHQ9XCJQYWxtaWVyXCIgY2xhc3NOYW1lPVwicGFsbWllci1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckNhdGVnb3JpZXMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9hYm91dFwiPkFib3V0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWZlYXRoZXI9XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvd2lzaGxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cImhlYXJ0XCIgY2xhc3NOYW1lPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1mZWF0aGVyPVwic2hvcHBpbmctY2FydFwiIGNsYXNzTmFtZT1cImljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJnLXByaW1hcnkgcm91bmRlZC1waWxsXCI+e2Z1bGxDYXJ0UXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIiBkYXRhLWJzLXRhcmdldD1cIiNvZmZjYW52YXNTZWFyY2hcIiBhcmlhLWNvbnRyb2xzPVwib2ZmY2FudmFzU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVZhbHVlcyA9IE9iamVjdC5rZXlzKHJlYWN0Q29udHJvbGxlcnMpLm1hcCgoa2V5KSA9PiBrZXkucmVwbGFjZSgnLi8nLCAnJykucmVwbGFjZSgnLmpzeCcsICcnKS5yZXBsYWNlKCcudHN4JywgJycpKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVhY3QgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdC4gUG9zc2libGUgdmFsdWVzOiAke3Bvc3NpYmxlVmFsdWVzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAncmVhY3QnIH0pO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZU92ZXJsYXkiLCJiaW5kIiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVPdmVybGF5IiwiZXZlbnQiLCJfdGhpcyIsInN0b3BQcm9wYWdhdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwib3ZlcmxheSIsIm92ZXJsYXlUYXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGUiLCJlbGVtZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJfZGVmaW5lUHJvcGVydHkiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhlYWRlcnNWYWx1ZSIsImxlbmd0aCIsInVwZGF0ZVNlbGVjdGVkQ2FyZCIsImVycm9yIiwiaW5kZXgiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiY2Fyb3VzZWxJbmRleFBhcmFtIiwiYWRkUHVsc2VFZmZlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJzZWxlY3RlZEhlYWRlciIsInBpY3R1cmUiLCJ1cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24iLCJ1cGRhdGVNYWluQ2FyZCIsInRodW1ibmFpbCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWRJbmRleCIsImNvbnRhaW5lciIsImkiLCJuZXdDb250ZW50IiwiY29uY2F0IiwidGl0bGUiLCJjb250ZW50IiwiYnV0dG9uTGluayIsImJ1dHRvblRpdGxlIiwic2VsZWN0ZWRDYXJkVGFyZ2V0IiwiaW5uZXJIVE1MIiwiaGVhZGVycyIsInRvYXN0RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9hc3QiLCJib290c3RyYXAiLCJUb2FzdCIsInNob3ciLCJ0b2dnbGVGb3JtIiwicHJldmVudERlZmF1bHQiLCJndWVzdEZvcm0iLCJhbGVydCIsInRleHRDb250ZW50IiwiY2xvc2VEcm9wZG93bnMiLCJlbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQiLCJ0b2dnbGVEcm9wZG93biIsImJ1dHRvbiIsIm1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbG9zZUFsbERyb3Bkb3ducyIsInRvZ2dsZUxhbmd1YWdlIiwibGFuZ3VhZ2VNZW51VGFyZ2V0IiwidG9nZ2xlVXNlck1lbnUiLCJ1c2VyRHJvcGRvd25NZW51VGFyZ2V0Iiwic2VsZWN0TGFuZ3VhZ2UiLCJzZWxlY3RlZExhbmd1YWdlIiwidHJpbSIsImxhbmd1YWdlQnV0dG9uVGFyZ2V0Iiwic3JjIiwiY2xpY2tlZEVsZW1lbnQiLCJpc0NsaWNrSW5zaWRlRHJvcGRvd24iLCJkcm9wZG93bk1lbnVUYXJnZXRzIiwic29tZSIsImhhc0xhbmd1YWdlTWVudVRhcmdldCIsImhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQiLCJoYXNNb2JpbGVNZW51VGFyZ2V0IiwibW9iaWxlTWVudVRhcmdldCIsImlzQ2xpY2tPbkJ1dHRvbiIsImRyb3Bkb3duQnV0dG9uVGFyZ2V0cyIsImhhc0xhbmd1YWdlQnV0dG9uVGFyZ2V0IiwiaGFzVXNlck1lbnVCdXR0b25UYXJnZXQiLCJ1c2VyTWVudUJ1dHRvblRhcmdldCIsImhhc01vYmlsZU1lbnVCdXR0b25UYXJnZXQiLCJtb2JpbGVNZW51QnV0dG9uVGFyZ2V0IiwidG9nZ2xlTW9iaWxlTWVudSIsIm1vYmlsZU1lbnUiLCJic09mZmNhbnZhcyIsIk9mZmNhbnZhcyIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIlJlYWN0IiwianN4cyIsIl9qc3hzIiwicHJvcHMiLCJjaGlsZHJlbiIsImZ1bGxOYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJqc3giLCJfanN4IiwiTmF2QmFyIiwiX3JlZiIsImZ1bGxDYXJ0UXVhbnRpdHkiLCJwYXJlbnRDYXRlZ29yaWVzIiwidXNlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImZlYXRoZXIiLCJyZXBsYWNlIiwicmVuZGVyQ2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNsdWciLCJuYW1lIiwiYWx0IiwidHlwZSIsImlkIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJPYmplY3QiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==