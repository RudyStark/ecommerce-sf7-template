(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./address_card_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/address_card_controller.js",
	"./address_form_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/address_form_controller.js",
	"./carousel_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/carousel_controller.js",
	"./cart_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/cart_controller.js",
	"./category_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/category_controller.js",
	"./delete_address_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/delete_address_controller.js",
	"./form_guest_address_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/form_guest_address_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./menu_toggle_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/menu_toggle_controller.js",
	"./modal_form_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_form_controller.js",
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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/address_form_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/address_form_controller.js ***!
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
// assets/controllers/address_form_controller.js

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
      this.currentStep = 1;
      this.totalSteps = 4;
      this.updateNavigation();

      // Empêcher la soumission du formulaire par la touche Entrée
      this.element.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && _this.currentStep < _this.totalSteps) {
          event.preventDefault();
          _this.nextStep();
        }
      });

      // Valider l'étape courante avant de passer à la suivante
      var nextButton = this.element.querySelector('.next-step');
      if (nextButton) {
        nextButton.addEventListener('click', function (event) {
          event.preventDefault();
          _this.validateAndProceed();
        });
      }
    }
  }, {
    key: "validateAndProceed",
    value: function validateAndProceed() {
      // Obtenir tous les champs de l'étape courante
      var currentStepElement = this.element.querySelector(".form-step[data-step=\"".concat(this.currentStep, "\"]"));
      var inputs = currentStepElement.querySelectorAll('input, select, textarea');

      // Vérifier si tous les champs requis sont remplis
      var isValid = true;
      inputs.forEach(function (input) {
        if (input.required && !input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });
      if (isValid) {
        this.nextStep();
      }
    }
  }, {
    key: "nextStep",
    value: function nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.updateSteps();
      }
    }
  }, {
    key: "previousStep",
    value: function previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.updateSteps();
      }
    }
  }, {
    key: "updateSteps",
    value: function updateSteps() {
      var _this2 = this;
      // Update form steps
      document.querySelectorAll('.form-step').forEach(function (step) {
        step.classList.remove('active');
      });
      document.querySelector(".form-step[data-step=\"".concat(this.currentStep, "\"]")).classList.add('active');

      // Update progress steps
      document.querySelectorAll('.step').forEach(function (step) {
        step.classList.remove('active');
        if (parseInt(step.dataset.step) <= _this2.currentStep) {
          step.classList.add('active');
        }
      });
      this.updateNavigation();
    }
  }, {
    key: "updateNavigation",
    value: function updateNavigation() {
      var prevButton = this.element.querySelector('.prev-step');
      var nextButton = this.element.querySelector('.next-step');
      var submitButton = this.element.querySelector('.submit-step');
      if (prevButton) {
        prevButton.style.display = this.currentStep > 1 ? 'block' : 'none';
      }
      if (nextButton && submitButton) {
        if (this.currentStep === this.totalSteps) {
          nextButton.style.display = 'none';
          submitButton.style.display = 'block';
        } else {
          nextButton.style.display = 'block';
          submitButton.style.display = 'none';
        }
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ['step', 'navigation']);


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
      var selectedHeader = this.headersValue[index];
      if (!selectedHeader) return;
      this.updateThumbnailSelection(index);
      this.fetchAndUpdateMainCard(selectedHeader);
    }
  }, {
    key: "fetchAndUpdateMainCard",
    value: function fetchAndUpdateMainCard(selectedHeader) {
      var _this = this;
      // Faire la requête AJAX
      fetch(this.urlValue, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(selectedHeader)
      }).then(function (response) {
        return response.text();
      }).then(function (html) {
        _this.selectedCardTarget.innerHTML = html;
      })["catch"](function (error) {
        console.error('Error:', error);
      });
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
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["selectedCard"]);
_defineProperty(_default, "values", {
  headers: Array,
  url: String
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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/category_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/category_controller.js ***!
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
// assets/controllers/category_controller.js

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "loadMore",
    value: function loadMore(event) {
      var _this = this;
      var categoryId = event.currentTarget.dataset.categoryId;
      var nextPage = this.currentPageValue + 1;
      fetch("/api/categories/".concat(categoryId, "/subcategories?page=").concat(nextPage), {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(function (response) {
        return response.text();
      }).then(function (html) {
        _this.gridTarget.insertAdjacentHTML('beforeend', html);
        _this.currentPageValue = nextPage;
        if (nextPage >= _this.totalPagesValue) {
          _this.viewMoreButtonTarget.classList.add('fade-out');
          setTimeout(function () {
            _this.viewMoreButtonTarget.remove();
          }, 300);
        }
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["grid", "viewMoreButton"]);
_defineProperty(_default, "values", {
  currentPage: Number,
  totalPages: Number
});


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/delete_address_controller.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/delete_address_controller.js ***!
  \***************************************************************************************************************************/
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
    key: "openModal",
    value: function openModal(event) {
      event.preventDefault();
      var deleteUrl = event.currentTarget.getAttribute('href');
      this.confirmButtonTarget.href = deleteUrl;
      var modal = new bootstrap.Modal(document.getElementById('deleteAddressModal'));
      modal.show();
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ['confirmButton']);


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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_form_controller.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_form_controller.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
// assets/controllers/modal_form_controller.js

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
      this.modalTarget.addEventListener('hidden.bs.modal', function () {
        if (_this.hasFormTarget) {
          _this.formTarget.reset();
        }
      });
      this.modalTarget.addEventListener('show.bs.modal', function (event) {
        if (!event.relatedTarget) return;
        var button = event.relatedTarget;
        var addressId = button.dataset.addressId;
        if (addressId && _this.hasFormTarget) {
          // C'est une édition
          _this.formTarget.action = "/account/addresses/edit/".concat(addressId);
        } else if (_this.hasFormTarget) {
          // C'est une nouvelle adresse
          _this.formTarget.action = '/account/addresses/add';
        }
      });
    }
  }, {
    key: "submitForm",
    value: function () {
      var _submitForm = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var response, data, modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              if (this.hasFormTarget) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              _context.prev = 3;
              _context.next = 6;
              return fetch(this.formTarget.action, {
                method: 'POST',
                body: new FormData(this.formTarget)
              });
            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();
            case 9:
              data = _context.sent;
              if (data.success) {
                // Fermer la modale
                modal = bootstrap.Modal.getInstance(this.modalTarget);
                if (modal) {
                  modal.hide();
                }

                // Recharger la page pour voir les changements
                window.location.reload();
              } else {
                // Afficher les erreurs
                console.error('Form errors:', data.errors);
              }
              _context.next = 16;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              console.error('Error:', _context.t0);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 13]]);
      }));
      function submitForm(_x) {
        return _submitForm.apply(this, arguments);
      }
      return submitForm;
    }()
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ['modal', 'form']);


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
      if (this.hasMobileUserMenuTarget) {
        document.addEventListener('click', function (event) {
          if (!_this.mobileUserMenuTarget.contains(event.target) && !_this.mobileUserButtonTarget.contains(event.target) && _this.mobileUserMenuTarget.classList.contains('show')) {
            _this.closeMobileUserMenu();
          }
        });
      }
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
  }, {
    key: "toggleMobileUserMenu",
    value: function toggleMobileUserMenu(event) {
      event.preventDefault();
      var overlay = document.getElementById('menuOverlay');
      if (this.mobileUserMenuTarget.classList.contains('show')) {
        this.closeMobileUserMenu();
      } else {
        overlay.classList.add('show');
        this.mobileUserMenuTarget.classList.add('show');
      }
    }
  }, {
    key: "closeMobileUserMenu",
    value: function closeMobileUserMenu() {
      var overlay = document.getElementById('menuOverlay');
      overlay.classList.remove('show');
      this.mobileUserMenuTarget.classList.remove('show');
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);
_defineProperty(_default, "targets", ["dropdownButton", "dropdownMenu", "userMenuButton", "userDropdownMenu", "mobileMenu", "mobileMenuButton", "mobileUserButton", "mobileUserMenu", "megaMenu", "languageButton", "languageMenu"]);


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
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");




// Initialiser Turbo
(0,_hotwired_turbo__WEBPACK_IMPORTED_MODULE_0__.start)();

// Configuration Turbo
_hotwired_turbo__WEBPACK_IMPORTED_MODULE_0__.navigator.config = {
  drive: {
    progressBarDelay: 0
  },
  forms: {
    confirm: function confirm() {
      return true;
    }
  }
};

// Configuration pour éviter le prefetch des liens
document.addEventListener('turbo:before-fetch-request', function (event) {
  // Si c'est un hover/prefetch, on bloque
  if (event.detail.fetchOptions.headers['Turbo-Referrer'] === 'prefetch') {
    event.preventDefault();
    return;
  }

  // On laisse passer les requêtes du panier et autres actions normales
  var fetchingElement = event.target;
  var isCartAction = fetchingElement.matches('[data-turbo-frame="cart-qty"]');
  var isFormSubmit = event.detail.fetchOptions.method === 'POST';

  // Si ce n'est ni une action de panier ni une soumission de formulaire, on bloque
  if (!isCartAction && !isFormSubmit) {
    event.preventDefault();
    return;
  }
});

// Ne pas interférer avec les clics normaux sauf pour des cas spécifiques
document.addEventListener('turbo:click', function (event) {
  var element = event.target;
  var isCartAction = element.closest('[data-turbo-frame="cart-qty"]');
  var hasTurboDisabled = element.closest('[data-turbo="false"]');

  // Si Turbo est explicitement désactivé sur l'élément
  if (hasTurboDisabled) {
    event.preventDefault();
  }
  // Si ce n'est pas une action de panier et qu'il n'y a pas d'autre configuration spécifique
  else if (!isCartAction && !element.hasAttribute('data-turbo-frame')) {
    event.preventDefault();
  }
});

// Gestion des soumissions de formulaire
document.addEventListener('turbo:submit-start', function (event) {
  var form = event.target;

  // Si le formulaire a data-turbo="false", utiliser la soumission standard
  if (form.hasAttribute('data-turbo') && form.getAttribute('data-turbo') === 'false') {
    event.preventDefault();
    form.submit();
    return;
  }

  // Pour les formulaires normaux, laisser Turbo gérer
});

// Register React components
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-d99504"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUFBLE9BQUE1VixVQUFBLE9BQUE0VixnQkFBQSxFQUFBM1YsU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQTBWLGdCQUFBLEVBQUE5VixXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBeVYsZ0JBQUE7QUFBQSxFQUFTaFcsMERBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvYWRkcmVzc19mb3JtX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY2F0ZWdvcnlfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZGVsZXRlX2FkZHJlc3NfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL21lbnVfdG9nZ2xlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL21vZGFsX2Zvcm1fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3JldmVhbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvSGVsbG8uanN4Iiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYWRkcmVzc19jYXJkX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hZGRyZXNzX2NhcmRfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vYWRkcmVzc19mb3JtX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hZGRyZXNzX2Zvcm1fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2Fyb3VzZWxfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2NhcnRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhcnRfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vY2F0ZWdvcnlfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2NhdGVnb3J5X2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2RlbGV0ZV9hZGRyZXNzX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9kZWxldGVfYWRkcmVzc19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb3JtX2d1ZXN0X2FkZHJlc3NfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2Zvcm1fZ3Vlc3RfYWRkcmVzc19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbWVudV90b2dnbGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL21lbnVfdG9nZ2xlX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL21vZGFsX2Zvcm1fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL21vZGFsX2Zvcm1fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbmF2YmFyX2Ryb3Bkb3duX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9uYXZiYXJfZHJvcGRvd25fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcmV2ZWFsX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9yZXZlYWxfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9IZWxsby5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWxsby5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ292ZXJsYXknXTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIENsb3NlIG92ZXJsYXkgd2hlbiBjbGlja2luZyBvdXRzaWRlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU92ZXJsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPdmVybGF5KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50IGNsb3NpbmcgdGhlIG92ZXJsYXlcbiAgICAgICAgLy8gQ2xvc2UgYWxsIG90aGVyIG92ZXJsYXlzXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRyZXNzLWNhcmQgLm92ZXJsYXknKS5mb3JFYWNoKChvdmVybGF5KSA9PiB7XG4gICAgICAgICAgICBpZiAob3ZlcmxheSAhPT0gdGhpcy5vdmVybGF5VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE92ZXJsYXkgaXMgYWN0aXZlXG4gICAgICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjbG9zZU92ZXJsYXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gYXNzZXRzL2NvbnRyb2xsZXJzL2FkZHJlc3NfZm9ybV9jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnc3RlcCcsICduYXZpZ2F0aW9uJ107XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMTtcbiAgICAgICAgdGhpcy50b3RhbFN0ZXBzID0gNDtcbiAgICAgICAgdGhpcy51cGRhdGVOYXZpZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gRW1ww6pjaGVyIGxhIHNvdW1pc3Npb24gZHUgZm9ybXVsYWlyZSBwYXIgbGEgdG91Y2hlIEVudHLDqWVcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgdGhpcy5jdXJyZW50U3RlcCA8IHRoaXMudG90YWxTdGVwcykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBWYWxpZGVyIGwnw6l0YXBlIGNvdXJhbnRlIGF2YW50IGRlIHBhc3NlciDDoCBsYSBzdWl2YW50ZVxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXN0ZXAnKTtcbiAgICAgICAgaWYgKG5leHRCdXR0b24pIHtcbiAgICAgICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRQcm9jZWVkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlQW5kUHJvY2VlZCgpIHtcbiAgICAgICAgLy8gT2J0ZW5pciB0b3VzIGxlcyBjaGFtcHMgZGUgbCfDqXRhcGUgY291cmFudGVcbiAgICAgICAgY29uc3QgY3VycmVudFN0ZXBFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JtLXN0ZXBbZGF0YS1zdGVwPVwiJHt0aGlzLmN1cnJlbnRTdGVwfVwiXWApO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBjdXJyZW50U3RlcEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblxuICAgICAgICAvLyBWw6lyaWZpZXIgc2kgdG91cyBsZXMgY2hhbXBzIHJlcXVpcyBzb250IHJlbXBsaXNcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQucmVxdWlyZWQgJiYgIWlucHV0LnZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHRTdGVwKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA8IHRoaXMudG90YWxTdGVwcykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGVwcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXNTdGVwKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAtLTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RlcHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVN0ZXBzKCkge1xuICAgICAgICAvLyBVcGRhdGUgZm9ybSBzdGVwc1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1zdGVwJykuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgICAgIHN0ZXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9ybS1zdGVwW2RhdGEtc3RlcD1cIiR7dGhpcy5jdXJyZW50U3RlcH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZ3Jlc3Mgc3RlcHNcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0ZXAnKS5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICAgICAgc3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChzdGVwLmRhdGFzZXQuc3RlcCkgPD0gdGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgICAgICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTmF2aWdhdGlvbigpO1xuICAgIH1cblxuICAgIHVwZGF0ZU5hdmlnYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHByZXZCdXR0b24gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtc3RlcCcpO1xuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXN0ZXAnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtc3RlcCcpO1xuXG4gICAgICAgIGlmIChwcmV2QnV0dG9uKSB7XG4gICAgICAgICAgICBwcmV2QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRTdGVwID4gMSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEJ1dHRvbiAmJiBzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID09PSB0aGlzLnRvdGFsU3RlcHMpIHtcbiAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gYXNzZXRzL2NvbnRyb2xsZXJzL2Nhcm91c2VsX2NvbnRyb2xsZXIuanNcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wic2VsZWN0ZWRDYXJkXCJdXG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgaGVhZGVyczogQXJyYXksXG4gICAgICAgIHVybDogU3RyaW5nXG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJvdXNlbCBjb250cm9sbGVyIGNvbm5lY3RlZFwiLCB0aGlzLmhlYWRlcnNWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcnNWYWx1ZSAmJiB0aGlzLmhlYWRlcnNWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ2FyZCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBoZWFkZXJzIGRhdGEgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0ZWRDYXJkKGV2ZW50KSB7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZXZlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJvdXNlbEluZGV4UGFyYW0sIDEwKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHVsc2VFZmZlY3QoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZEhlYWRlciA9IHRoaXMuaGVhZGVyc1ZhbHVlW2luZGV4XTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZEhlYWRlcikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGh1bWJuYWlsU2VsZWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy5mZXRjaEFuZFVwZGF0ZU1haW5DYXJkKHNlbGVjdGVkSGVhZGVyKTtcbiAgICB9XG5cbiAgICBmZXRjaEFuZFVwZGF0ZU1haW5DYXJkKHNlbGVjdGVkSGVhZGVyKSB7XG4gICAgICAgIC8vIEZhaXJlIGxhIHJlcXXDqnRlIEFKQVhcbiAgICAgICAgZmV0Y2godGhpcy51cmxWYWx1ZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzZWxlY3RlZEhlYWRlcilcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkVGFyZ2V0LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRQdWxzZUVmZmVjdChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aHVtYm5haWwnKTtcbiAgICAgICAgICAgIGlmICh0aHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZCgncHVsc2UnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRodW1ibmFpbFNlbGVjdGlvbihzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWJuYWlsLWNvbnRhaW5lcicpLmZvckVhY2goKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10aHVtYm5haWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCB0b2FzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZVRvYXN0Jyk7XG4gICAgICAgIGlmICh0b2FzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdEVsZW1lbnQpO1xuICAgICAgICAgICAgdG9hc3Quc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gYXNzZXRzL2NvbnRyb2xsZXJzL2NhdGVnb3J5X2NvbnRyb2xsZXIuanNcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcImdyaWRcIiwgXCJ2aWV3TW9yZUJ1dHRvblwiXVxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiBOdW1iZXIsXG4gICAgICAgIHRvdGFsUGFnZXM6IE51bWJlclxuICAgIH1cblxuICAgIGxvYWRNb3JlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2F0ZWdvcnlJZFxuICAgICAgICBjb25zdCBuZXh0UGFnZSA9IHRoaXMuY3VycmVudFBhZ2VWYWx1ZSArIDFcblxuICAgICAgICBmZXRjaChgL2FwaS9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnlJZH0vc3ViY2F0ZWdvcmllcz9wYWdlPSR7bmV4dFBhZ2V9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGFyZ2V0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbClcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlVmFsdWUgPSBuZXh0UGFnZVxuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlID49IHRoaXMudG90YWxQYWdlc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vcmVCdXR0b25UYXJnZXQuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vcmVCdXR0b25UYXJnZXQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ2NvbmZpcm1CdXR0b24nXTtcblxuICAgIG9wZW5Nb2RhbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkZWxldGVVcmwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICB0aGlzLmNvbmZpcm1CdXR0b25UYXJnZXQuaHJlZiA9IGRlbGV0ZVVybDtcblxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUFkZHJlc3NNb2RhbCcpKTtcbiAgICAgICAgbW9kYWwuc2hvdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiQGhvdHdpcmVkL3N0aW11bHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gZm9ybV9ndWVzdF9hZGRyZXNzX2NvbnRyb2xsZXIuanMnKTtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGd1ZXN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3Vlc3RGb3JtXCIpO1xuICAgICAgICBpZiAoZ3Vlc3RGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcImQtbm9uZVwiKSkge1xuICAgICAgICAgICAgZ3Vlc3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndWVzdEZvcm0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvLCBTdGltdWx1cyFcIiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgYWxlcnQoXCJIZWxsbywgU3RpbXVsdXMhXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkhlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJtZW51XCJdXG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1lbnUgY29udHJvbGxlciBjb25uZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgLy8gVG9nZ2xlIGQtbm9uZSBjbGFzc1xuICAgICAgICB0aGlzLm1lbnVUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGljb25zXG4gICAgICAgIGNvbnN0IG1lbnVJY29uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1pY29uJyk7XG5cbiAgICAgICAgaWYgKG1lbnVJY29uICYmIGNsb3NlSWNvbikge1xuICAgICAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgICAgICAgICBjbG9zZUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBhc3NldHMvY29udHJvbGxlcnMvbW9kYWxfZm9ybV9jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnbW9kYWwnLCAnZm9ybSddO1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5tb2RhbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNGb3JtVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtVGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kYWxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5tb2RhbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0KSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzSWQgPSBidXR0b24uZGF0YXNldC5hZGRyZXNzSWQ7XG5cbiAgICAgICAgICAgIGlmIChhZGRyZXNzSWQgJiYgdGhpcy5oYXNGb3JtVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gQydlc3QgdW5lIMOpZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtVGFyZ2V0LmFjdGlvbiA9IGAvYWNjb3VudC9hZGRyZXNzZXMvZWRpdC8ke2FkZHJlc3NJZH1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0Zvcm1UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBDJ2VzdCB1bmUgbm91dmVsbGUgYWRyZXNzZVxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVRhcmdldC5hY3Rpb24gPSAnL2FjY291bnQvYWRkcmVzc2VzL2FkZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHN1Ym1pdEZvcm0oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzRm9ybVRhcmdldCkgcmV0dXJuO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuZm9ybVRhcmdldC5hY3Rpb24sIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEodGhpcy5mb3JtVGFyZ2V0KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBGZXJtZXIgbGEgbW9kYWxlXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBib290c3RyYXAuTW9kYWwuZ2V0SW5zdGFuY2UodGhpcy5tb2RhbFRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZWNoYXJnZXIgbGEgcGFnZSBwb3VyIHZvaXIgbGVzIGNoYW5nZW1lbnRzXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsZXMgZXJyZXVyc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gZXJyb3JzOicsIGRhdGEuZXJyb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIG5hdmJhcl9kcm9wZG93bl9jb250cm9sbGVyLmpzXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXG4gICAgICAgIFwiZHJvcGRvd25CdXR0b25cIixcbiAgICAgICAgXCJkcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJ1c2VyTWVudUJ1dHRvblwiLFxuICAgICAgICBcInVzZXJEcm9wZG93bk1lbnVcIixcbiAgICAgICAgXCJtb2JpbGVNZW51XCIsXG4gICAgICAgIFwibW9iaWxlTWVudUJ1dHRvblwiLFxuICAgICAgICBcIm1vYmlsZVVzZXJCdXR0b25cIixcbiAgICAgICAgXCJtb2JpbGVVc2VyTWVudVwiLFxuICAgICAgICBcIm1lZ2FNZW51XCIsXG4gICAgICAgIFwibGFuZ3VhZ2VCdXR0b25cIixcbiAgICAgICAgXCJsYW5ndWFnZU1lbnVcIlxuICAgIF1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVVzZXJEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc0xhbmd1YWdlTWVudVRhcmdldCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTGFuZ3VhZ2VEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpc2VyIGwnb3ZlcmxheVxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVPdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5oYXNNb2JpbGVVc2VyTWVudVRhcmdldCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubW9iaWxlVXNlck1lbnVUYXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5tb2JpbGVVc2VyQnV0dG9uVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JpbGVVc2VyTWVudVRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlVXNlck1lbnUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1VzZXJEcm9wZG93bk1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVVzZXJEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc0xhbmd1YWdlTWVudVRhcmdldCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTGFuZ3VhZ2VEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc01vYmlsZU1lbnVUYXJnZXQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vYmlsZU1lbnUuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVVc2VyTWVudShldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy51c2VyRHJvcGRvd25NZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICBjbG9zZVVzZXJEcm9wZG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlck1lbnVCdXR0b25UYXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMudXNlckRyb3Bkb3duTWVudVRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEcm9wZG93bk1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB9XG5cbiAgICB0b2dnbGVNb2JpbGVNZW51KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudU92ZXJsYXknKTtcblxuICAgICAgICBpZiAodGhpcy5tb2JpbGVNZW51VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VNb2JpbGVNZW51KCkge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVPdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0aGlzLm1vYmlsZU1lbnVUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cblxuICAgIGNsb3NlTGFuZ3VhZ2VEcm9wZG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VCdXR0b25UYXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VNZW51VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1vYmlsZVVzZXJNZW51KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudU92ZXJsYXknKTtcblxuICAgICAgICBpZiAodGhpcy5tb2JpbGVVc2VyTWVudVRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vYmlsZVVzZXJNZW51KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlVXNlck1lbnVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VNb2JpbGVVc2VyTWVudSgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51T3ZlcmxheScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdGhpcy5tb2JpbGVVc2VyTWVudVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAaG90d2lyZWQvc3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gW1wic2VjdGlvblwiXVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgLy8gUsOpdsOpbGVyIGxlcyBzZWN0aW9ucyB2aXNpYmxlcyBhdSBjaGFyZ2VtZW50XG4gICAgICAgIHRoaXMucmV2ZWFsU2VjdGlvbigpXG5cbiAgICAgICAgLy8gQXR0YWNoZXIgbCfDqXbDqW5lbWVudCBkZSBkw6lmaWxlbWVudFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5yZXZlYWxTZWN0aW9uLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgLy8gTmV0dG95ZXIgbCfDqXbDqW5lbWVudCBkZSBkw6lmaWxlbWVudCBsb3JzcXUnb24gZMOpY29ubmVjdGUgbGUgY29udHLDtGxldXJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMucmV2ZWFsU2VjdGlvbi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHJldmVhbFNlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJCb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjhcblxuICAgICAgICB0aGlzLnNlY3Rpb25UYXJnZXRzLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICAgICAgaWYgKHNlY3Rpb25Ub3AgPCB0cmlnZ2VyQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHN0YXJ0LCBuYXZpZ2F0b3IgfSBmcm9tICdAaG90d2lyZWQvdHVyYm8nO1xuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIEluaXRpYWxpc2VyIFR1cmJvXG5zdGFydCgpO1xuXG4vLyBDb25maWd1cmF0aW9uIFR1cmJvXG5uYXZpZ2F0b3IuY29uZmlnID0ge1xuICAgIGRyaXZlOiB7XG4gICAgICAgIHByb2dyZXNzQmFyRGVsYXk6IDBcbiAgICB9LFxuICAgIGZvcm1zOiB7XG4gICAgICAgIGNvbmZpcm06ICgpID0+IHRydWVcbiAgICB9XG59O1xuXG4vLyBDb25maWd1cmF0aW9uIHBvdXIgw6l2aXRlciBsZSBwcmVmZXRjaCBkZXMgbGllbnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3R1cmJvOmJlZm9yZS1mZXRjaC1yZXF1ZXN0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gU2kgYydlc3QgdW4gaG92ZXIvcHJlZmV0Y2gsIG9uIGJsb3F1ZVxuICAgIGlmIChldmVudC5kZXRhaWwuZmV0Y2hPcHRpb25zLmhlYWRlcnNbJ1R1cmJvLVJlZmVycmVyJ10gPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9uIGxhaXNzZSBwYXNzZXIgbGVzIHJlcXXDqnRlcyBkdSBwYW5pZXIgZXQgYXV0cmVzIGFjdGlvbnMgbm9ybWFsZXNcbiAgICBjb25zdCBmZXRjaGluZ0VsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgaXNDYXJ0QWN0aW9uID0gZmV0Y2hpbmdFbGVtZW50Lm1hdGNoZXMoJ1tkYXRhLXR1cmJvLWZyYW1lPVwiY2FydC1xdHlcIl0nKTtcbiAgICBjb25zdCBpc0Zvcm1TdWJtaXQgPSBldmVudC5kZXRhaWwuZmV0Y2hPcHRpb25zLm1ldGhvZCA9PT0gJ1BPU1QnO1xuXG4gICAgLy8gU2kgY2Ugbidlc3QgbmkgdW5lIGFjdGlvbiBkZSBwYW5pZXIgbmkgdW5lIHNvdW1pc3Npb24gZGUgZm9ybXVsYWlyZSwgb24gYmxvcXVlXG4gICAgaWYgKCFpc0NhcnRBY3Rpb24gJiYgIWlzRm9ybVN1Ym1pdCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSk7XG5cbi8vIE5lIHBhcyBpbnRlcmbDqXJlciBhdmVjIGxlcyBjbGljcyBub3JtYXV4IHNhdWYgcG91ciBkZXMgY2FzIHNww6ljaWZpcXVlc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86Y2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGlzQ2FydEFjdGlvbiA9IGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdHVyYm8tZnJhbWU9XCJjYXJ0LXF0eVwiXScpO1xuICAgIGNvbnN0IGhhc1R1cmJvRGlzYWJsZWQgPSBlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXR1cmJvPVwiZmFsc2VcIl0nKTtcblxuICAgIC8vIFNpIFR1cmJvIGVzdCBleHBsaWNpdGVtZW50IGTDqXNhY3RpdsOpIHN1ciBsJ8OpbMOpbWVudFxuICAgIGlmIChoYXNUdXJib0Rpc2FibGVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIFNpIGNlIG4nZXN0IHBhcyB1bmUgYWN0aW9uIGRlIHBhbmllciBldCBxdSdpbCBuJ3kgYSBwYXMgZCdhdXRyZSBjb25maWd1cmF0aW9uIHNww6ljaWZpcXVlXG4gICAgZWxzZSBpZiAoIWlzQ2FydEFjdGlvbiAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdHVyYm8tZnJhbWUnKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuXG4vLyBHZXN0aW9uIGRlcyBzb3VtaXNzaW9ucyBkZSBmb3JtdWxhaXJlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJibzpzdWJtaXQtc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgLy8gU2kgbGUgZm9ybXVsYWlyZSBhIGRhdGEtdHVyYm89XCJmYWxzZVwiLCB1dGlsaXNlciBsYSBzb3VtaXNzaW9uIHN0YW5kYXJkXG4gICAgaWYgKGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLXR1cmJvJykgJiYgZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHVyYm8nKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUG91ciBsZXMgZm9ybXVsYWlyZXMgbm9ybWF1eCwgbGFpc3NlciBUdXJibyBnw6lyZXJcbn0pO1xuXG4vLyBSZWdpc3RlciBSZWFjdCBjb21wb25lbnRzXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIDxkaXY+SGVsbG8ge3Byb3BzLmZ1bGxOYW1lfTwvZGl2Pjtcbn1cbiIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlVmFsdWVzID0gT2JqZWN0LmtleXMocmVhY3RDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcuanN4JywgJycpLnJlcGxhY2UoJy50c3gnLCAnJykpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdCBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xuXG5jbGFzcyB0dXJib19jb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG59XG5cbmV4cG9ydCB7IHR1cmJvX2NvbnRyb2xsZXIgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlT3ZlcmxheSIsImJpbmQiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU92ZXJsYXkiLCJldmVudCIsIl90aGlzIiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJvdmVybGF5Iiwib3ZlcmxheVRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZSIsImVsZW1lbnQiLCJjb250YWlucyIsInRhcmdldCIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJjdXJyZW50U3RlcCIsInRvdGFsU3RlcHMiLCJ1cGRhdGVOYXZpZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJuZXh0U3RlcCIsIm5leHRCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwidmFsaWRhdGVBbmRQcm9jZWVkIiwiY3VycmVudFN0ZXBFbGVtZW50IiwiY29uY2F0IiwiaW5wdXRzIiwiaXNWYWxpZCIsImlucHV0IiwicmVxdWlyZWQiLCJ0cmltIiwiYWRkIiwidXBkYXRlU3RlcHMiLCJwcmV2aW91c1N0ZXAiLCJfdGhpczIiLCJzdGVwIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwicHJldkJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzVmFsdWUiLCJsZW5ndGgiLCJ1cGRhdGVTZWxlY3RlZENhcmQiLCJlcnJvciIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImNhcm91c2VsSW5kZXhQYXJhbSIsImFkZFB1bHNlRWZmZWN0Iiwic2VsZWN0ZWRIZWFkZXIiLCJ1cGRhdGVUaHVtYm5haWxTZWxlY3Rpb24iLCJmZXRjaEFuZFVwZGF0ZU1haW5DYXJkIiwiZmV0Y2giLCJ1cmxWYWx1ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJodG1sIiwic2VsZWN0ZWRDYXJkVGFyZ2V0IiwiaW5uZXJIVE1MIiwidGh1bWJuYWlsIiwic2V0VGltZW91dCIsInNlbGVjdGVkSW5kZXgiLCJjb250YWluZXIiLCJpIiwiQXJyYXkiLCJ1cmwiLCJTdHJpbmciLCJ0b2FzdEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvYXN0IiwiYm9vdHN0cmFwIiwiVG9hc3QiLCJzaG93IiwibG9hZE1vcmUiLCJjYXRlZ29yeUlkIiwibmV4dFBhZ2UiLCJjdXJyZW50UGFnZVZhbHVlIiwiZ3JpZFRhcmdldCIsImluc2VydEFkamFjZW50SFRNTCIsInRvdGFsUGFnZXNWYWx1ZSIsInZpZXdNb3JlQnV0dG9uVGFyZ2V0IiwiY3VycmVudFBhZ2UiLCJOdW1iZXIiLCJ0b3RhbFBhZ2VzIiwib3Blbk1vZGFsIiwiZGVsZXRlVXJsIiwiZ2V0QXR0cmlidXRlIiwiY29uZmlybUJ1dHRvblRhcmdldCIsImhyZWYiLCJtb2RhbCIsIk1vZGFsIiwidG9nZ2xlRm9ybSIsImd1ZXN0Rm9ybSIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJ0b2dnbGVNZW51IiwibWVudVRhcmdldCIsIm1lbnVJY29uIiwiY2xvc2VJY29uIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX3NldFByb3RvdHlwZU9mIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJtb2RhbFRhcmdldCIsImhhc0Zvcm1UYXJnZXQiLCJmb3JtVGFyZ2V0IiwicmVsYXRlZFRhcmdldCIsImJ1dHRvbiIsImFkZHJlc3NJZCIsImFjdGlvbiIsIl9zdWJtaXRGb3JtIiwiX2NhbGxlZSIsImRhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiRm9ybURhdGEiLCJqc29uIiwic3VjY2VzcyIsImdldEluc3RhbmNlIiwiaGlkZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3JzIiwidDAiLCJzdWJtaXRGb3JtIiwiX3giLCJoYXNVc2VyRHJvcGRvd25NZW51VGFyZ2V0IiwiY2xvc2VVc2VyRHJvcGRvd24iLCJoYXNMYW5ndWFnZU1lbnVUYXJnZXQiLCJjbG9zZUxhbmd1YWdlRHJvcGRvd24iLCJjbG9zZU1vYmlsZU1lbnUiLCJoYXNNb2JpbGVVc2VyTWVudVRhcmdldCIsIm1vYmlsZVVzZXJNZW51VGFyZ2V0IiwibW9iaWxlVXNlckJ1dHRvblRhcmdldCIsImNsb3NlTW9iaWxlVXNlck1lbnUiLCJoYXNNb2JpbGVNZW51VGFyZ2V0IiwidG9nZ2xlVXNlck1lbnUiLCJ1c2VyRHJvcGRvd25NZW51VGFyZ2V0IiwidXNlck1lbnVCdXR0b25UYXJnZXQiLCJ0b2dnbGVMYW5ndWFnZSIsImxhbmd1YWdlTWVudVRhcmdldCIsInRvZ2dsZU1vYmlsZU1lbnUiLCJtb2JpbGVNZW51VGFyZ2V0IiwibGFuZ3VhZ2VCdXR0b25UYXJnZXQiLCJ0b2dnbGVNb2JpbGVVc2VyTWVudSIsInJldmVhbFNlY3Rpb24iLCJ0cmlnZ2VyQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJzZWN0aW9uVGFyZ2V0cyIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic3RhcnQiLCJuYXZpZ2F0b3IiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJjb25maWciLCJkcml2ZSIsInByb2dyZXNzQmFyRGVsYXkiLCJmb3JtcyIsImNvbmZpcm0iLCJkZXRhaWwiLCJmZXRjaE9wdGlvbnMiLCJmZXRjaGluZ0VsZW1lbnQiLCJpc0NhcnRBY3Rpb24iLCJtYXRjaGVzIiwiaXNGb3JtU3VibWl0IiwiY2xvc2VzdCIsImhhc1R1cmJvRGlzYWJsZWQiLCJoYXNBdHRyaWJ1dGUiLCJmb3JtIiwic3VibWl0IiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiUmVhY3QiLCJqc3hzIiwiX2pzeHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiZnVsbE5hbWUiLCJyZWFjdENvbnRyb2xsZXJzIiwiaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzIiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiY29tcG9uZW50IiwicG9zc2libGVWYWx1ZXMiLCJtYXAiLCJyZXBsYWNlIiwiam9pbiIsInJlcXVpcmUkJDAiLCJjcmVhdGVSb290IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJkZWZhdWx0XzEiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJwcmVmaXgiLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==