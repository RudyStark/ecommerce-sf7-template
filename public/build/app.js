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
      this.closeDropdowns = this.closeDropdowns.bind(this);
      document.addEventListener('click', this.closeDropdowns);
      // S'assurer que tous les dropdowns sont initialement cachés
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
      }) || this.languageMenuTarget.contains(clickedElement) || this.hasUserDropdownMenuTarget && this.userDropdownMenuTarget.contains(clickedElement);
      var isClickOnButton = this.dropdownButtonTargets.some(function (button) {
        return button.contains(clickedElement);
      }) || this.languageButtonTarget.contains(clickedElement) || this.hasUserMenuButtonTarget && this.userMenuButtonTarget.contains(clickedElement);
      if (!isClickInsideDropdown && !isClickOnButton) {
        this.closeAllDropdowns();
      }
    }
  }, {
    key: "closeAllDropdowns",
    value: function closeAllDropdowns() {
      this.ensureDropdownsAreClosed();
    }
  }, {
    key: "ensureDropdownsAreClosed",
    value: function ensureDropdownsAreClosed() {
      this.dropdownMenuTargets.forEach(function (menu) {
        if (!menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
        }
      });
      if (!this.languageMenuTarget.classList.contains('hidden')) {
        this.languageMenuTarget.classList.add('hidden');
      }
      if (this.hasUserDropdownMenuTarget && !this.userDropdownMenuTarget.classList.contains('hidden')) {
        this.userDropdownMenuTarget.classList.add('hidden');
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["dropdownButton", "dropdownMenu", "languageButton", "languageMenu", "userMenuButton", "userDropdownMenu"]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxnQkFBQTtBQUFBLEVBQVNyTCwwREFBVTs7Ozs7Ozs7Ozs7OztBQ0h6QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jYXJ0X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvTmF2QmFyLmpzeCIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FkZHJlc3NfY2FyZF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jYXJvdXNlbF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9jYXJ0X2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jYXJ0X2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL25hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0hlbGxvLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlbGxvLmpzeFwiLFxuXHRcIi4vTmF2QmFyLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL05hdkJhci5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ292ZXJsYXknXTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIENsb3NlIG92ZXJsYXkgd2hlbiBjbGlja2luZyBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU92ZXJsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPdmVybGF5KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50IGNsb3NpbmcgdGhlIG92ZXJsYXlcbiAgICAgICAgLy8gQ2xvc2UgYWxsIG90aGVyIG92ZXJsYXlzXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWNhcmQgLm92ZXJsYXknKS5mb3JFYWNoKChvdmVybGF5KSA9PiB7XG4gICAgICAgICAgICBpZiAob3ZlcmxheSAhPT0gdGhpcy5vdmVybGF5VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE92ZXJsYXkgaXMgYWN0aXZlXG4gICAgICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjbG9zZU92ZXJsYXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wic2VsZWN0ZWRDYXJkXCJdXG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgaGVhZGVyczogQXJyYXlcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcm91c2VsIGNvbnRyb2xsZXIgY29ubmVjdGVkXCIsIHRoaXMuaGVhZGVyc1ZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyc1ZhbHVlICYmIHRoaXMuaGVhZGVyc1ZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDYXJkKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGhlYWRlcnMgZGF0YSBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3RlZENhcmQoZXZlbnQpIHtcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaW5kZXggPSBldmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNhcm91c2VsSW5kZXhQYXJhbSwgMTApO1xuICAgICAgICAgICAgdGhpcy5hZGRQdWxzZUVmZmVjdChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgY2FyZCB3aXRoIGluZGV4OlwiLCBpbmRleCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlcnNWYWx1ZSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmhlYWRlcnNWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJIZWFkZXJzIGRhdGEgaXMgbm90IGFuIGFycmF5OlwiLCB0aGlzLmhlYWRlcnNWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZEhlYWRlciA9IHRoaXMuaGVhZGVyc1ZhbHVlW2luZGV4XTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBoZWFkZXI6XCIsIHNlbGVjdGVkSGVhZGVyKTtcblxuICAgICAgICBpZiAoIXNlbGVjdGVkSGVhZGVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBoZWFkZXIgZm91bmQgYXQgaW5kZXgnLCBpbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdGVkSGVhZGVyLnBpY3R1cmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlbGVjdGVkIGhlYWRlciBoYXMgbm8gcGljdHVyZTonLCBzZWxlY3RlZEhlYWRlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbihpbmRleCk7XG4gICAgICAgIHRoaXMudXBkYXRlTWFpbkNhcmQoc2VsZWN0ZWRIZWFkZXIpO1xuICAgIH1cblxuICAgIGFkZFB1bHNlRWZmZWN0KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRodW1ibmFpbCcpO1xuICAgICAgICAgICAgaWYgKHRodW1ibmFpbCkge1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCdwdWxzZScpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UnKTtcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uKHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYm5haWwtY29udGFpbmVyJykuZm9yRWFjaCgoY29udGFpbmVyLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10aHVtYm5haWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRodW1ibmFpbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYWluQ2FyZChzZWxlY3RlZEhlYWRlcikge1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGgtZnVsbCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXBsb2Fkcy9oZWFkZXIvJHtzZWxlY3RlZEhlYWRlci5waWN0dXJlfVwiIGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIGFsdD1cIiR7c2VsZWN0ZWRIZWFkZXIudGl0bGUgfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsYWNrLzUwIHRvLXRyYW5zcGFyZW50IGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yIHRleHQtd2hpdGVcIj4ke3NlbGVjdGVkSGVhZGVyLnRpdGxlIHx8ICcnfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1sZyBtYi00IHRleHQtd2hpdGVcIj4ke3NlbGVjdGVkSGVhZGVyLmNvbnRlbnQgfHwgJyd9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7c2VsZWN0ZWRIZWFkZXIuYnV0dG9uTGluayB8fCAnIyd9XCIgY2xhc3M9XCJiZy1ibHVlLTYwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHRleHQtc20gaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEhlYWRlci5idXR0b25UaXRsZSB8fCAnQ2xpY2sgaGVyZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRUYXJnZXQuaW5uZXJIVE1MID0gbmV3Q29udGVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHRvYXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlVG9hc3QnKTtcbiAgICAgICAgaWYgKHRvYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgYm9vdHN0cmFwLlRvYXN0KHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGZvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBndWVzdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXN0Rm9ybVwiKTtcbiAgICAgICAgaWYgKGd1ZXN0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpIHtcbiAgICAgICAgICAgIGd1ZXN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3Vlc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbywgU3RpbXVsdXMhXCIsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGFsZXJ0KFwiSGVsbG8sIFN0aW11bHVzIVwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gXCJIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiO1xuICAgIH1cbn1cbiIsIi8vIG5hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXG4gICAgICAgIFwiZHJvcGRvd25CdXR0b25cIixcbiAgICAgICAgXCJkcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJsYW5ndWFnZUJ1dHRvblwiLFxuICAgICAgICBcImxhbmd1YWdlTWVudVwiLFxuICAgICAgICBcInVzZXJNZW51QnV0dG9uXCIsXG4gICAgICAgIFwidXNlckRyb3Bkb3duTWVudVwiXG4gICAgXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3ducyA9IHRoaXMuY2xvc2VEcm9wZG93bnMuYmluZCh0aGlzKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VEcm9wZG93bnMpXG4gICAgICAgIC8vIFMnYXNzdXJlciBxdWUgdG91cyBsZXMgZHJvcGRvd25zIHNvbnQgaW5pdGlhbGVtZW50IGNhY2jDqXNcbiAgICAgICAgdGhpcy5lbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQoKVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZURyb3Bkb3ducylcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wZG93bihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgIGNvbnN0IG1lbnUgPSBidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgIHRoaXMuY2xvc2VBbGxEcm9wZG93bnMoKVxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgdG9nZ2xlVXNlck1lbnUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpXG4gICAgICAgIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIHNlbGVjdExhbmd1YWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQudHJpbSgpXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbiA+IHNwYW4nKS50ZXh0Q29udGVudCA9IHNlbGVjdGVkTGFuZ3VhZ2VcbiAgICAgICAgdGhpcy5sYW5ndWFnZUJ1dHRvblRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyY1xuICAgICAgICB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cblxuICAgIGNsb3NlRHJvcGRvd25zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpc0NsaWNrSW5zaWRlRHJvcGRvd24gPSAoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTWVudVRhcmdldHMuc29tZShtZW51ID0+IG1lbnUuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpKSB8fFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZU1lbnVUYXJnZXQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpIHx8XG4gICAgICAgICAgICAodGhpcy5oYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0ICYmIHRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQ2xpY2tPbkJ1dHRvbiA9IChcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CdXR0b25UYXJnZXRzLnNvbWUoYnV0dG9uID0+IGJ1dHRvbi5jb250YWlucyhjbGlja2VkRWxlbWVudCkpIHx8XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlQnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KSB8fFxuICAgICAgICAgICAgKHRoaXMuaGFzVXNlck1lbnVCdXR0b25UYXJnZXQgJiYgdGhpcy51c2VyTWVudUJ1dHRvblRhcmdldC5jb250YWlucyhjbGlja2VkRWxlbWVudCkpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc0NsaWNrSW5zaWRlRHJvcGRvd24gJiYgIWlzQ2xpY2tPbkJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFsbERyb3Bkb3ducygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZUFsbERyb3Bkb3ducygpIHtcbiAgICAgICAgdGhpcy5lbnN1cmVEcm9wZG93bnNBcmVDbG9zZWQoKVxuICAgIH1cblxuICAgIGVuc3VyZURyb3Bkb3duc0FyZUNsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk1lbnVUYXJnZXRzLmZvckVhY2gobWVudSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlTWVudVRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQgJiYgIXRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gPGRpdj5IZWxsbyB7cHJvcHMuZnVsbE5hbWV9PC9kaXY+O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE5hdkJhcih7IGZ1bGxDYXJ0UXVhbnRpdHksIHBhcmVudENhdGVnb3JpZXMsIHVzZXIgfSkge1xuICAgIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldElzU2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiA1MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZlYXRoZXIucmVwbGFjZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudENhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtjYXRlZ29yeS5zbHVnfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z31gfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntjYXRlZ29yeS5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIGZpeGVkLXRvcCAke2lzU2Nyb2xsZWQgPyAnc2Nyb2xsZWQnIDogJyd9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS8zZC1mbHVlbmN5Lzk0L3BhbG0tdHJlZS0tdjIucG5nXCIgYWx0PVwiUGFsbWllclwiIGNsYXNzTmFtZT1cInBhbG1pZXItaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWUtYXV0byBtYi0yIG1iLWxnLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJDYXRlZ29yaWVzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWJvdXRcIj5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1mZWF0aGVyPVwidXNlclwiIGNsYXNzTmFtZT1cImljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3dpc2hsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWZlYXRoZXI9XCJoZWFydFwiIGNsYXNzTmFtZT1cImljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtZmVhdGhlcj1cInNob3BwaW5nLWNhcnRcIiBjbGFzc05hbWU9XCJpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiZy1wcmltYXJ5IHJvdW5kZWQtcGlsbFwiPntmdWxsQ2FydFF1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiIGRhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCIgZGF0YS1icy10YXJnZXQ9XCIjb2ZmY2FudmFzU2VhcmNoXCIgYXJpYS1jb250cm9scz1cIm9mZmNhbnZhc1NlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWZlYXRoZXI9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBPYmplY3Qua2V5cyhyZWFjdENvbnRyb2xsZXJzKS5tYXAoKGtleSkgPT4ga2V5LnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2UoJy5qc3gnLCAnJykucmVwbGFjZSgnLnRzeCcsICcnKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlYWN0IGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3QuIFBvc3NpYmxlIHZhbHVlczogJHtwb3NzaWJsZVZhbHVlcy5qb2luKCcsICcpfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3JlYWN0JyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VPdmVybGF5IiwiYmluZCIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlT3ZlcmxheSIsImV2ZW50IiwiX3RoaXMiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm92ZXJsYXkiLCJvdmVybGF5VGFyZ2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlIiwiZWxlbWVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiX2RlZmluZVByb3BlcnR5IiwiZGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzVmFsdWUiLCJsZW5ndGgiLCJ1cGRhdGVTZWxlY3RlZENhcmQiLCJlcnJvciIsImluZGV4IiwicGFyc2VJbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNhcm91c2VsSW5kZXhQYXJhbSIsImFkZFB1bHNlRWZmZWN0IiwiQXJyYXkiLCJpc0FycmF5Iiwic2VsZWN0ZWRIZWFkZXIiLCJwaWN0dXJlIiwidXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uIiwidXBkYXRlTWFpbkNhcmQiLCJ0aHVtYm5haWwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkIiwic2V0VGltZW91dCIsInNlbGVjdGVkSW5kZXgiLCJjb250YWluZXIiLCJpIiwibmV3Q29udGVudCIsImNvbmNhdCIsInRpdGxlIiwiY29udGVudCIsImJ1dHRvbkxpbmsiLCJidXR0b25UaXRsZSIsInNlbGVjdGVkQ2FyZFRhcmdldCIsImlubmVySFRNTCIsImhlYWRlcnMiLCJ0b2FzdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvYXN0IiwiYm9vdHN0cmFwIiwiVG9hc3QiLCJzaG93IiwidG9nZ2xlRm9ybSIsInByZXZlbnREZWZhdWx0IiwiZ3Vlc3RGb3JtIiwiYWxlcnQiLCJ0ZXh0Q29udGVudCIsImNsb3NlRHJvcGRvd25zIiwiZW5zdXJlRHJvcGRvd25zQXJlQ2xvc2VkIiwidG9nZ2xlRHJvcGRvd24iLCJidXR0b24iLCJtZW51IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY2xvc2VBbGxEcm9wZG93bnMiLCJ0b2dnbGVMYW5ndWFnZSIsImxhbmd1YWdlTWVudVRhcmdldCIsInRvZ2dsZVVzZXJNZW51IiwidXNlckRyb3Bkb3duTWVudVRhcmdldCIsInNlbGVjdExhbmd1YWdlIiwic2VsZWN0ZWRMYW5ndWFnZSIsInRyaW0iLCJsYW5ndWFnZUJ1dHRvblRhcmdldCIsInNyYyIsImNsaWNrZWRFbGVtZW50IiwiaXNDbGlja0luc2lkZURyb3Bkb3duIiwiZHJvcGRvd25NZW51VGFyZ2V0cyIsInNvbWUiLCJoYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0IiwiaXNDbGlja09uQnV0dG9uIiwiZHJvcGRvd25CdXR0b25UYXJnZXRzIiwiaGFzVXNlck1lbnVCdXR0b25UYXJnZXQiLCJ1c2VyTWVudUJ1dHRvblRhcmdldCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIlJlYWN0IiwianN4cyIsIl9qc3hzIiwicHJvcHMiLCJjaGlsZHJlbiIsImZ1bGxOYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJqc3giLCJfanN4IiwiTmF2QmFyIiwiX3JlZiIsImZ1bGxDYXJ0UXVhbnRpdHkiLCJwYXJlbnRDYXRlZ29yaWVzIiwidXNlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImZlYXRoZXIiLCJyZXBsYWNlIiwicmVuZGVyQ2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNsdWciLCJuYW1lIiwiYWx0IiwidHlwZSIsImlkIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJPYmplY3QiLCJFcnJvciIsImpvaW4iLCJyZXF1aXJlJCQwIiwiY3JlYXRlUm9vdCIsIm0iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoeWRyYXRlUm9vdCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==