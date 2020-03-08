/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/hostsList/_hosts-list.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/components/hostsList/_hosts-list.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".hosts-list {\n  color: #4A4A4A; }\n  .hosts-list .apdex {\n    width: 30px; }\n\n.hosts .card {\n  background-color: #fff; }\n\n.hosts.grid-mode {\n  padding: 0px 15px;\n  margin-top: -30px; }\n  .hosts.grid-mode .card {\n    margin: 30px 15px;\n    width: 375px; }\n", "",{"version":3,"sources":["/Users/solde/Workspace/vanilla-challenge/src/components/hostsList/_hosts-list.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_variables.scss"],"names":[],"mappings":"AAEE;EACE,cCIgB,EAAA;EDLjB;IAGG,WAAW,EAAA;;AAJjB;EAQI,sBCPQ,EAAA;;ADDZ;EAWI,iBAAiB;EACjB,iBAAiB,EAAA;EAZrB;IAeM,iBAAiB;IACjB,YAAY,EAAA","file":"_hosts-list.scss","sourcesContent":["@import \"../../sass/setup/variables\";\n.hosts {\n  &-list {\n    color: $black-soft;\n    .apdex {\n      width: 30px;\n    }\n  }\n  .card {\n    background-color: $white;\n  }\n  &.grid-mode {\n    padding: 0px 15px;\n    margin-top: -30px;\n\n    .card {\n      margin: 30px 15px;\n      width: 375px;\n    }\n  }\n}\n","//? set your brand colors\n\n$white: #fff;\n\n$light-grey: #f5f5f5;\n$grey: #d7d7d7;\n\n$black-soft: #4A4A4A;\n$black: #09090e;\n\n$blue: #2c638f;\n$pink: #fff0f5;\n$yellow: #fffacd;\n\n//? override for project clarity\n\n$color-primary: $blue;\n$color-secondary: $pink;\n$color-tertiary: $yellow;\n$spacer: 10px;\n$spacers: (\n  0: 0,\n  1: (\n    $spacer * 1,\n  ),\n  2: (\n    $spacer * 2,\n  ),\n  3: (\n    $spacer * 3,\n  ),\n);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/modal/_modal.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/components/modal/_modal.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: #d7d7d7;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  /* Modal Content */ }\n  .modal-content {\n    position: relative;\n    background-color: #fff;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #4A4A4A;\n    width: 80%;\n    max-width: 600px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s; }\n  .modal-header {\n    padding: 2px 16px;\n    background-color: #fffacd;\n    color: #09090e; }\n  .modal-body {\n    padding: 2px 16px; }\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n/* The Close Button */\n.close {\n  color: #09090e;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n  .close:hover, .close:focus {\n    color: #2c638f;\n    text-decoration: none;\n    cursor: pointer; }\n", "",{"version":3,"sources":["/Users/solde/Workspace/vanilla-challenge/src/components/modal/_modal.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_variables.scss"],"names":[],"mappings":"AACA;EACE,aAAa;EAAE,sBAAA;EACf,eAAe;EAAE,kBAAA;EACjB,UAAU;EAAE,eAAA;EACZ,kBAAkB;EAAE,wBAAA;EACpB,OAAO;EACP,MAAM;EACN,WAAW;EAAE,eAAA;EACb,YAAY;EAAE,gBAAA;EACd,cAAc;EAAE,4BAAA;EAChB,yBCNY;EDMa,mBAAA;EACzB,oCAAoC;EAAE,qBAAA;EACtC,kBAAA,EAAmB;EACnB;IACE,kBAAkB;IAClB,sBCdQ;IDeR,YAAY;IACZ,UAAU;IACV,yBCZgB;IDahB,UAAU;IACV,gBAAgB;IAChB,4EAA4E;IAC5E,kCAAkC;IAClC,gCAAgC;IAChC,0BAA0B;IAC1B,wBAAwB,EAAA;EAE1B;IACE,iBAAiB;IACjB,yBClBY;IDmBZ,cCvBW,EAAA;EDyBb;IACE,iBAAiB,EAAA;;AAKrB,kBAAA;AACA;EACE;IACE,WAAW;IACX,UAAU,EAAA;EAEZ;IACE,MAAM;IACN,UAAU,EAAA,EAAA;;AAId;EACE;IACE,WAAW;IACX,UAAU,EAAA;EAEZ;IACE,MAAM;IACN,UAAU,EAAA,EAAA;;AAId,qBAAA;AACA;EACE,cCxDa;EDyDb,YAAY;EACZ,eAAe;EACf,iBAAiB,EAAA;EAJnB;IAOI,cC5DU;ID6DV,qBAAqB;IACrB,eAAe,EAAA","file":"_modal.scss","sourcesContent":["@import \"../../sass/setup/variables\";\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: $grey; /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  /* Modal Content */\n  &-content {\n    position: relative;\n    background-color: $white;\n    margin: auto;\n    padding: 0;\n    border: 1px solid $black-soft;\n    width: 80%;\n    max-width: 600px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n  }\n  &-header {\n    padding: 2px 16px;\n    background-color: $color-tertiary;\n    color: $black;\n  }\n  &-body {\n    padding: 2px 16px;\n  }\n\n}\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n/* The Close Button */\n.close {\n  color: $black;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  &:hover,\n  &:focus {\n    color: $color-primary;\n    text-decoration: none;\n    cursor: pointer;\n  }\n}\n","//? set your brand colors\n\n$white: #fff;\n\n$light-grey: #f5f5f5;\n$grey: #d7d7d7;\n\n$black-soft: #4A4A4A;\n$black: #09090e;\n\n$blue: #2c638f;\n$pink: #fff0f5;\n$yellow: #fffacd;\n\n//? override for project clarity\n\n$color-primary: $blue;\n$color-secondary: $pink;\n$color-tertiary: $yellow;\n$spacer: 10px;\n$spacers: (\n  0: 0,\n  1: (\n    $spacer * 1,\n  ),\n  2: (\n    $spacer * 2,\n  ),\n  3: (\n    $spacer * 3,\n  ),\n);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/index.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/sass/index.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/* MEDIA QUERIES */\n/* @include respond-to('mobile') {} */\n/* CENTERING */\n/*\n.parent {\nposition: relative;\n}\n.child {\n@include centered;\n}\n*/\n.btn-danger {\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n  background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);\n  background-color: #f24537;\n  border-radius: 6px;\n  border: 1px solid #d02718;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #810e05; }\n  .btn-danger:hover {\n    background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);\n    background-color: #c62d1f; }\n    .btn-danger:hover:active {\n      position: relative;\n      top: 1px; }\n\n.m-0 {\n  margin: 0; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0; }\n\n.m-1 {\n  margin: 10px; }\n\n.mt-1,\n.my-1 {\n  margin-top: 10px; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 10px; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 10px; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 10px; }\n\n.m-2 {\n  margin: 20px; }\n\n.mt-2,\n.my-2 {\n  margin-top: 20px; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 20px; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 20px; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 20px; }\n\n.m-3 {\n  margin: 30px; }\n\n.mt-3,\n.my-3 {\n  margin-top: 30px; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 30px; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 30px; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 30px; }\n\n.p-0 {\n  padding: 0; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0; }\n\n.p-1 {\n  padding: 10px; }\n\n.pt-1,\n.py-1 {\n  padding-top: 10px; }\n\n.pr-1,\n.px-1 {\n  padding-right: 10px; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 10px; }\n\n.pl-1,\n.px-1 {\n  padding-left: 10px; }\n\n.p-2 {\n  padding: 20px; }\n\n.pt-2,\n.py-2 {\n  padding-top: 20px; }\n\n.pr-2,\n.px-2 {\n  padding-right: 20px; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 20px; }\n\n.pl-2,\n.px-2 {\n  padding-left: 20px; }\n\n.p-3 {\n  padding: 30px; }\n\n.pt-3,\n.py-3 {\n  padding-top: 30px; }\n\n.pr-3,\n.px-3 {\n  padding-right: 30px; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 30px; }\n\n.pl-3,\n.px-3 {\n  padding-left: 30px; }\n\n.d-none {\n  display: none; }\n\n.d-inline {\n  display: inline; }\n\n.d-inline-block {\n  display: inline-block; }\n\n.d-block {\n  display: block; }\n\n.d-table {\n  display: table; }\n\n.d-table-row {\n  display: table-row; }\n\n.d-table-cell {\n  display: table-cell; }\n\n.d-flex {\n  display: flex; }\n\n.d-inline-flex {\n  display: inline-flex; }\n\n.align-items-start {\n  align-items: flex-start; }\n\n.align-items-end {\n  align-items: flex-end; }\n\n.align-items-center {\n  align-items: center; }\n\n.align-items-baseline {\n  align-items: baseline; }\n\n.align-items-stretch {\n  align-items: stretch; }\n\n.justify-content-start {\n  justify-content: flex-start; }\n\n.justify-content-end {\n  justify-content: flex-end; }\n\n.justify-content-center {\n  justify-content: center; }\n\n.justify-content-between {\n  justify-content: space-between; }\n\n.justify-content-around {\n  justify-content: space-around; }\n\n.flex-grow-0 {\n  flex-grow: 0; }\n\n.flex-grow-1 {\n  flex-grow: 1; }\n\n.flex-shrink-0 {\n  flex-shrink: 0; }\n\n.flex-shrink-1 {\n  flex-shrink: 1; }\n\n.flex-nowrap {\n  flex-wrap: nowrap; }\n\n.flex-wrap {\n  flex-wrap: wrap; }\n\n.font-bold {\n  font-weight: 800; }\n\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-wrap {\n  white-space: normal; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.centered {\n  height: 100%;\n  width: 100%;\n  display: flex; }\n  .centered :first-child {\n    margin: auto; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.2; }\n\nbody {\n  font-family: \"HelveticaNeue\";\n  font-size: 1.8rem;\n  color: #09090e; }\n\nh1 {\n  font-family: \"HelveticaNeue-bold\", Fallback, \"Georgia\", serif, serif;\n  font-size: 3.5rem;\n  font-weight: 400; }\n\n*::selection {\n  background: #fff0f5; }\n\nhtml,\nbody {\n  height: 100%;\n  background: #f5f5f5; }\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0; }\n\n.wrapper {\n  max-width: 100%; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0; }\n\np {\n  margin: 0; }\n\na {\n  text-decoration: none;\n  color: #2c638f; }\n\nimg {\n  display: block; }\n\nul {\n  padding: 0;\n  list-style: none; }\n\nheader {\n  background: #f5f5f5; }\n\n.container {\n  max-width: 840px;\n  margin: auto; }\n", "",{"version":3,"sources":["/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_normalize.scss","index.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_clearfix.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_border-box.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/utils/_mixins.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/utils/_buttons.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/utils/_helpers.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_variables.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/global/_typography.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/global/_global.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/layout/_header.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/layout/_grid.scss"],"names":[],"mappings":"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","file":"index.scss","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/* MEDIA QUERIES */\n/* @include respond-to('mobile') {} */\n/* CENTERING */\n/*\n.parent {\nposition: relative;\n}\n.child {\n@include centered;\n}\n*/\n.btn-danger {\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n  background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);\n  background-color: #f24537;\n  border-radius: 6px;\n  border: 1px solid #d02718;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #810e05; }\n  .btn-danger:hover {\n    background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);\n    background-color: #c62d1f; }\n    .btn-danger:hover:active {\n      position: relative;\n      top: 1px; }\n\n.m-0 {\n  margin: 0; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0; }\n\n.m-1 {\n  margin: 10px; }\n\n.mt-1,\n.my-1 {\n  margin-top: 10px; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 10px; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 10px; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 10px; }\n\n.m-2 {\n  margin: 20px; }\n\n.mt-2,\n.my-2 {\n  margin-top: 20px; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 20px; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 20px; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 20px; }\n\n.m-3 {\n  margin: 30px; }\n\n.mt-3,\n.my-3 {\n  margin-top: 30px; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 30px; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 30px; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 30px; }\n\n.p-0 {\n  padding: 0; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0; }\n\n.p-1 {\n  padding: 10px; }\n\n.pt-1,\n.py-1 {\n  padding-top: 10px; }\n\n.pr-1,\n.px-1 {\n  padding-right: 10px; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 10px; }\n\n.pl-1,\n.px-1 {\n  padding-left: 10px; }\n\n.p-2 {\n  padding: 20px; }\n\n.pt-2,\n.py-2 {\n  padding-top: 20px; }\n\n.pr-2,\n.px-2 {\n  padding-right: 20px; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 20px; }\n\n.pl-2,\n.px-2 {\n  padding-left: 20px; }\n\n.p-3 {\n  padding: 30px; }\n\n.pt-3,\n.py-3 {\n  padding-top: 30px; }\n\n.pr-3,\n.px-3 {\n  padding-right: 30px; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 30px; }\n\n.pl-3,\n.px-3 {\n  padding-left: 30px; }\n\n.d-none {\n  display: none; }\n\n.d-inline {\n  display: inline; }\n\n.d-inline-block {\n  display: inline-block; }\n\n.d-block {\n  display: block; }\n\n.d-table {\n  display: table; }\n\n.d-table-row {\n  display: table-row; }\n\n.d-table-cell {\n  display: table-cell; }\n\n.d-flex {\n  display: flex; }\n\n.d-inline-flex {\n  display: inline-flex; }\n\n.align-items-start {\n  align-items: flex-start; }\n\n.align-items-end {\n  align-items: flex-end; }\n\n.align-items-center {\n  align-items: center; }\n\n.align-items-baseline {\n  align-items: baseline; }\n\n.align-items-stretch {\n  align-items: stretch; }\n\n.justify-content-start {\n  justify-content: flex-start; }\n\n.justify-content-end {\n  justify-content: flex-end; }\n\n.justify-content-center {\n  justify-content: center; }\n\n.justify-content-between {\n  justify-content: space-between; }\n\n.justify-content-around {\n  justify-content: space-around; }\n\n.flex-grow-0 {\n  flex-grow: 0; }\n\n.flex-grow-1 {\n  flex-grow: 1; }\n\n.flex-shrink-0 {\n  flex-shrink: 0; }\n\n.flex-shrink-1 {\n  flex-shrink: 1; }\n\n.flex-nowrap {\n  flex-wrap: nowrap; }\n\n.flex-wrap {\n  flex-wrap: wrap; }\n\n.font-bold {\n  font-weight: 800; }\n\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-wrap {\n  white-space: normal; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.centered {\n  height: 100%;\n  width: 100%;\n  display: flex; }\n  .centered :first-child {\n    margin: auto; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.2; }\n\nbody {\n  font-family: \"HelveticaNeue\";\n  font-size: 1.8rem;\n  color: #09090e; }\n\nh1 {\n  font-family: \"HelveticaNeue-bold\", Fallback, \"Georgia\", serif, serif;\n  font-size: 3.5rem;\n  font-weight: 400; }\n\n*::selection {\n  background: #fff0f5; }\n\nhtml,\nbody {\n  height: 100%;\n  background: #f5f5f5; }\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0; }\n\n.wrapper {\n  max-width: 100%; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0; }\n\np {\n  margin: 0; }\n\na {\n  text-decoration: none;\n  color: #2c638f; }\n\nimg {\n  display: block; }\n\nul {\n  padding: 0;\n  list-style: none; }\n\nheader {\n  background: #f5f5f5; }\n\n.container {\n  max-width: 840px;\n  margin: auto; }\n",".clearfix:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0;\n}","html {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}","/* MEDIA QUERIES */\n@mixin respond-to($breakpoint) {\n  @if $breakpoint==\"mobile\" {\n    @media (max-width: 480px) {\n      @content;\n    }\n  }\n\n  @else if $breakpoint==\"tablet\" {\n    @media (max-width: 769px) {\n      @content;\n    }\n  }\n\n  @else if $breakpoint==\"desktop\" {\n    @media (max-width: 969px) {\n      @content;\n    }\n  }\n\n  @else if $breakpoint==\"wrapper\" {\n    @media (max-width: 1170px) {\n      @content;\n    }\n  }\n\n  @else {\n    @media ($breakpoint) {\n      @content;\n    }\n  }\n}\n\n//! Example usage\n/* @include respond-to('mobile') {} */\n\n\n/* CENTERING */\n@mixin centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n//! Example usage\n/*\n.parent {\nposition: relative;\n}\n.child {\n@include centered;\n}\n*/\n\n//! ellipsis\n@mixin ellipsis() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}","//! created from https://www.bestcssbuttongenerator.com/#/33\n.btn {\n  &-danger {\n    box-shadow: inset 0px 1px 0px 0px #f5978e;\n    background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);\n    background-color: #f24537;\n    border-radius: 6px;\n    border: 1px solid #d02718;\n    display: inline-block;\n    cursor: pointer;\n    color: #ffffff;\n    font-family: Arial;\n    font-size: 15px;\n    font-weight: bold;\n    padding: 6px 24px;\n    text-decoration: none;\n    text-shadow: 0px 1px 0px #810e05;\n    &:hover {\n      background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);\n      background-color: #c62d1f;\n      &:active {\n        position: relative;\n        top: 1px;\n      }\n    }\n  }\n}\n","//! margin and padding\n@each $prop, $abbrev in (margin: m, padding: p) {\n  @each $size, $length in $spacers {\n    .#{$abbrev}-#{$size} {\n      #{$prop}: $length;\n    }\n    .#{$abbrev}t-#{$size},\n    .#{$abbrev}y-#{$size} {\n      #{$prop}-top: $length;\n    }\n    .#{$abbrev}r-#{$size},\n    .#{$abbrev}x-#{$size} {\n      #{$prop}-right: $length;\n    }\n    .#{$abbrev}b-#{$size},\n    .#{$abbrev}y-#{$size} {\n      #{$prop}-bottom: $length;\n    }\n    .#{$abbrev}l-#{$size},\n    .#{$abbrev}x-#{$size} {\n      #{$prop}-left: $length;\n    }\n  }\n}\n\n//! display\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex,\n  inline-flex !default;\n\n@each $value in $displays {\n  .d-#{$value} {\n    display: $value;\n  }\n}\n\n//! flex helpers\n\n.align-items-start {\n  align-items: flex-start;\n}\n.align-items-end {\n  align-items: flex-end;\n}\n.align-items-center {\n  align-items: center;\n}\n.align-items-baseline {\n  align-items: baseline;\n}\n.align-items-stretch {\n  align-items: stretch;\n}\n.justify-content-start {\n  justify-content: flex-start;\n}\n.justify-content-end {\n  justify-content: flex-end;\n}\n.justify-content-center {\n  justify-content: center;\n}\n.justify-content-between {\n  justify-content: space-between;\n}\n.justify-content-around {\n  justify-content: space-around;\n}\n\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.flex-grow-1 {\n  flex-grow: 1;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-shrink-1 {\n  flex-shrink: 1;\n}\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n//! font\n.font {\n  &-bold {\n    font-weight: 800;\n  }\n}\n\n//! text\n.ellipsis {\n  @include ellipsis();\n}\n// Alignment\n\n.text-justify {\n  text-align: justify;\n}\n.text-wrap {\n  white-space: normal;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.centered {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  :first-child {\n    margin: auto;\n  }\n}\n\n// interactions\n.cursor {\n  &-pointer {\n    cursor: pointer;\n  }\n}\n","//? set your brand colors\n\n$white: #fff;\n\n$light-grey: #f5f5f5;\n$grey: #d7d7d7;\n\n$black-soft: #4A4A4A;\n$black: #09090e;\n\n$blue: #2c638f;\n$pink: #fff0f5;\n$yellow: #fffacd;\n\n//? override for project clarity\n\n$color-primary: $blue;\n$color-secondary: $pink;\n$color-tertiary: $yellow;\n$spacer: 10px;\n$spacers: (\n  0: 0,\n  1: (\n    $spacer * 1,\n  ),\n  2: (\n    $spacer * 2,\n  ),\n  3: (\n    $spacer * 3,\n  ),\n);\n","//! import google fonts\n// @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700');\n// OR use @font-face like below\n\n//! import a custom font below\n// @font-face {\n//   font-family: 'Libre-Baskerville-Reg';\n//   font-display: fallback;\n//   font-style: normal;\n//   src:\n//     local('Libre Baskerville'), /* Checks if font is on users computer */\n//     local('LibreBaskerville-Regular'), /* Checks if font is on users computer */\n//     url('fonts/libre-baskerville-v5-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n//     url('fonts/libre-baskerville-v5-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n// }\n\n//! set font variables\n$font-heading: 'HelveticaNeue-bold', Fallback, 'Georgia', serif;\n$font-body: 'HelveticaNeue';\n\n\nhtml {\n  font-size: 62.5%; // 1rem = 10px, 3.5rem = 35px;\n  line-height: 1.2;\n}\n\nbody {\n  font-family: $font-body;\n  font-size: 1.8rem;\n  color: $black;\n}\n\nh1 {\n  font-family: $font-heading, serif;\n  font-size: 3.5rem;\n  font-weight: 400;\n}\n","*::selection {\n  background: $pink;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background: $light-grey;\n}\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0;\n}\n\n.wrapper {\n  max-width: 100%;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: $blue;\n}\n\nimg {\n  display: block;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}","header {\n  background: $light-grey;\n}\n",".container {\n  max-width: 840px;\n  margin: auto;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/views/loaderChase/_loader-chase.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/views/loaderChase/_loader-chase.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".sk-chase {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  animation: sk-chase 2.5s infinite linear both; }\n  .sk-chase-dot {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    animation: sk-chase-dot 2s infinite ease-in-out both; }\n    .sk-chase-dot:before {\n      content: ' ';\n      display: block;\n      width: 25%;\n      height: 25%;\n      background-color: #2c638f;\n      border-radius: 100%;\n      animation: sk-chase-dot-before 2s infinite ease-in-out both; }\n    .sk-chase-dot:nth-child(1), .sk-chase-dot:nth-child(1):before {\n      animation-delay: -1.1s; }\n    .sk-chase-dot:nth-child(2), .sk-chase-dot:nth-child(2):before {\n      animation-delay: -1s; }\n    .sk-chase-dot:nth-child(3), .sk-chase-dot:nth-child(3):before {\n      animation-delay: -0.9s; }\n    .sk-chase-dot:nth-child(4), .sk-chase-dot:nth-child(4):before {\n      animation-delay: -0.8s; }\n    .sk-chase-dot:nth-child(5), .sk-chase-dot:nth-child(5):before {\n      animation-delay: -0.7s; }\n    .sk-chase-dot:nth-child(6), .sk-chase-dot:nth-child(6):before {\n      animation-delay: -0.6s; }\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes sk-chase-dot {\n  80%,\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4); }\n  100%,\n  0% {\n    transform: scale(1); } }\n", "",{"version":3,"sources":["/Users/solde/Workspace/vanilla-challenge/src/views/loaderChase/_loader-chase.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_variables.scss"],"names":[],"mappings":"AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,6CAA6C,EAAA;EAC7C;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,oDAAoD,EAAA;IANrD;MAQG,YAAY;MACZ,cAAc;MACd,UAAU;MACV,WAAW;MACX,yBCTQ;MDUR,mBAAmB;MACnB,2DAA2D,EAAA;IAd9D;MAoBK,sBAAuC,EAAA;IApB5C;MAoBK,oBAAuC,EAAA;IApB5C;MAoBK,sBAAuC,EAAA;IApB5C;MAoBK,sBAAuC,EAAA;IApB5C;MAoBK,sBAAuC,EAAA;IApB5C;MAoBK,sBAAuC,EAAA;;AAO/C;EACE;IACE,yBAAyB,EAAA,EAAA;;AAI7B;EACE;;IAEE,yBAAyB,EAAA,EAAA;;AAI7B;EACE;IACE,qBAAqB,EAAA;EAEvB;;IAEE,mBAAmB,EAAA,EAAA","file":"_loader-chase.scss","sourcesContent":["// loader from https://tobiasahlin.com/spinkit/\n@import '../../sass/setup/variables';\n.sk-chase {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  animation: sk-chase 2.5s infinite linear both;\n  &-dot {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    animation: sk-chase-dot 2s infinite ease-in-out both;\n    &:before {\n      content: ' ';\n      display: block;\n      width: 25%;\n      height: 25%;\n      background-color: $color-primary;\n      border-radius: 100%;\n      animation: sk-chase-dot-before 2s infinite ease-in-out both;\n    }\n  @each $child in (1, 2, 3, 4, 5, 6) {\n    &:nth-child(#{$child}) {\n      &,\n      &:before {\n        animation-delay: (-1.2s + 0.1 * $child);\n      }\n    }\n  }\n  }\n}\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot {\n  80%,\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%,\n  0% {\n    transform: scale(1);\n  }\n}\n","//? set your brand colors\n\n$white: #fff;\n\n$light-grey: #f5f5f5;\n$grey: #d7d7d7;\n\n$black-soft: #4A4A4A;\n$black: #09090e;\n\n$blue: #2c638f;\n$pink: #fff0f5;\n$yellow: #fffacd;\n\n//? override for project clarity\n\n$color-primary: $blue;\n$color-secondary: $pink;\n$color-tertiary: $yellow;\n$spacer: 10px;\n$spacers: (\n  0: 0,\n  1: (\n    $spacer * 1,\n  ),\n  2: (\n    $spacer * 2,\n  ),\n  3: (\n    $spacer * 3,\n  ),\n);\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Apdex/ApdexSdk.ts":
/*!*******************************!*\
  !*** ./src/Apdex/ApdexSdk.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var dataDigester_1 = __webpack_require__(/*! ./dataDigester */ "./src/Apdex/dataDigester.ts");
var getTopAppsByHostPlugin_1 = __webpack_require__(/*! ./plugins/getTopAppsByHost/getTopAppsByHostPlugin */ "./src/Apdex/plugins/getTopAppsByHost/getTopAppsByHostPlugin.ts");
var addAppToHostsPlugin_1 = __webpack_require__(/*! ./plugins/addAppToHosts/addAppToHostsPlugin */ "./src/Apdex/plugins/addAppToHosts/addAppToHostsPlugin.ts");
var removeAppToHostsPlugin_1 = __webpack_require__(/*! ./plugins/removeAppToHosts/removeAppToHostsPlugin */ "./src/Apdex/plugins/removeAppToHosts/removeAppToHostsPlugin.ts");
exports.ApdexSdk = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var list, _a, digestHostAppData, hostAppEntryDigester, hostAppEntryGarbager, orderedMap_1, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, fetch(url)
                        .then(function (response) {
                        return response.json();
                    })];
            case 1:
                list = _b.sent();
                _a = dataDigester_1.dataDigester(), digestHostAppData = _a.digestHostAppData, hostAppEntryDigester = _a.hostAppEntryDigester, hostAppEntryGarbager = _a.hostAppEntryGarbager;
                orderedMap_1 = digestHostAppData(list);
                return [2, Object.freeze(__assign(__assign(__assign(__assign({}, getTopAppsByHostPlugin_1.getTopAppsByHostPlugin(orderedMap_1)), addAppToHostsPlugin_1.addAppToHostsPlugin(list, orderedMap_1, hostAppEntryDigester)), removeAppToHostsPlugin_1.removeAppToHostsPlugin(list, orderedMap_1, hostAppEntryGarbager)), { getHostsList: function () { return Array.from(orderedMap_1.keys()); } }))];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                return [2, false];
            case 3: return [2];
        }
    });
}); };
exports["default"] = exports.ApdexSdk;


/***/ }),

/***/ "./src/Apdex/dataDigester.ts":
/*!***********************************!*\
  !*** ./src/Apdex/dataDigester.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var getConditionPlugin_1 = __webpack_require__(/*! ./plugins/getConditionPlugin/getConditionPlugin */ "./src/Apdex/plugins/getConditionPlugin/getConditionPlugin.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config/index.ts");
exports.dataDigester = function () {
    var getCondition = getConditionPlugin_1.getConditionPlugin().getCondition;
    var hostAppEntryDigester = function (rankedAppsByHost) { return function (appData) {
        var condition = getCondition(config_1.APPS_ORDER_COMPARATOR, config_1.APPS_PROPERTY_TO_COMPARE);
        var _a = appData.host, host = _a === void 0 ? [] : _a;
        host.forEach(utils_1.elementInDictionarySorter(rankedAppsByHost, appData, condition));
    }; };
    var hostAppEntryGarbager = function (rankedAppsByHost) { return function (AppData) {
        var _a = AppData.host, host = _a === void 0 ? [] : _a;
        host.forEach(utils_1.elementInSortedDictionaryRemover(rankedAppsByHost, AppData));
    }; };
    var digestHostAppData = function (list) {
        if (list === void 0) { list = []; }
        var rankedAppsByHost = new Map();
        list.forEach(hostAppEntryDigester(rankedAppsByHost));
        return rankedAppsByHost;
    };
    return Object.freeze({
        digestHostAppData: digestHostAppData,
        hostAppEntryDigester: hostAppEntryDigester,
        hostAppEntryGarbager: hostAppEntryGarbager,
    });
};


/***/ }),

/***/ "./src/Apdex/plugins/addAppToHosts/addAppToHostsPlugin.ts":
/*!****************************************************************!*\
  !*** ./src/Apdex/plugins/addAppToHosts/addAppToHostsPlugin.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.addAppToHostsPlugin = function (list, rankedAppsByHost, hostAppEntryDigester) {
    if (!(list && rankedAppsByHost && hostAppEntryDigester)) {
        throw new Error('missing parameters');
    }
    var addAppToHosts = function (appData) {
        hostAppEntryDigester(rankedAppsByHost)(appData);
        list.push(appData);
        return true;
    };
    return Object.freeze({
        addAppToHosts: addAppToHosts,
    });
};


/***/ }),

/***/ "./src/Apdex/plugins/getConditionPlugin/getConditionPlugin.ts":
/*!********************************************************************!*\
  !*** ./src/Apdex/plugins/getConditionPlugin/getConditionPlugin.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(/*! ../../../config */ "./src/config/index.ts");
exports.getConditionPlugin = function () {
    var getCondition = function (comparator, property) {
        var meetsCondition;
        switch (comparator) {
            case config_1.COMPARATORS.greater:
                meetsCondition = function (a, b) { return a[property] < b[property]; };
                break;
            case config_1.COMPARATORS.smaller:
            default:
                meetsCondition = function (a, b) { return a[property] > b[property]; };
                break;
        }
        return meetsCondition;
    };
    return Object.freeze({
        getCondition: getCondition,
    });
};


/***/ }),

/***/ "./src/Apdex/plugins/getTopAppsByHost/getTopAppsByHostPlugin.ts":
/*!**********************************************************************!*\
  !*** ./src/Apdex/plugins/getTopAppsByHost/getTopAppsByHostPlugin.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(/*! ../../../config */ "./src/config/index.ts");
exports.getTopAppsByHostPlugin = function (rankedAppsByHost) {
    if (rankedAppsByHost.constructor.name !== 'Map') {
        throw new Error('Parameter needs to be of type Map class');
    }
    var getTopAppsByHost = function (hostName) {
        var _a;
        var data = rankedAppsByHost.get(hostName);
        return (_a = data) === null || _a === void 0 ? void 0 : _a.slice(0, config_1.APPS_BY_HOST_RESULTS_NUMBER);
    };
    return Object.freeze({
        getTopAppsByHost: getTopAppsByHost,
    });
};


/***/ }),

/***/ "./src/Apdex/plugins/removeAppToHosts/removeAppToHostsPlugin.ts":
/*!**********************************************************************!*\
  !*** ./src/Apdex/plugins/removeAppToHosts/removeAppToHostsPlugin.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.removeAppToHostsPlugin = function (list, rankedAppsByHost, hostAppEntryGarbager) {
    if (!(list && rankedAppsByHost && hostAppEntryGarbager)) {
        throw new Error('missing parameters');
    }
    var removeAppToHosts = function (appData) {
        hostAppEntryGarbager(rankedAppsByHost)(appData);
        var index = list.indexOf(appData);
        list.splice(index, 1);
        return appData;
    };
    return Object.freeze({
        removeAppToHosts: removeAppToHosts,
    });
};


/***/ }),

/***/ "./src/components/hostsList/_hosts-list.scss":
/*!***************************************************!*\
  !*** ./src/components/hostsList/_hosts-list.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./_hosts-list.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/hostsList/_hosts-list.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/hostsList/hostsListPlugin.ts":
/*!*****************************************************!*\
  !*** ./src/components/hostsList/hostsListPlugin.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var templateTag_1 = __webpack_require__(/*! ./../../templates/templateTag */ "./src/templates/templateTag.ts");
__webpack_require__(/*! ./_hosts-list.scss */ "./src/components/hostsList/_hosts-list.scss");
var ApdexSdk_1 = __webpack_require__(/*! ../../Apdex/ApdexSdk */ "./src/Apdex/ApdexSdk.ts");
var config_1 = __webpack_require__(/*! ../../config */ "./src/config/index.ts");
var Apdex;
exports.hostsListPlugin = Object.freeze({
    load: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, ApdexSdk_1.ApdexSdk(url)];
                    case 1:
                        Apdex = _a.sent();
                        window.Apdex = Apdex;
                        return [2, Apdex];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2, false];
                    case 3: return [2];
                }
            });
        });
    },
    getHostsHtml: function (hostsList, resultsToDisplay) {
        var grid = hostsList.reduce(function (htmlString, hostName) {
            var allrankingResults = Apdex.getTopAppsByHost(hostName);
            var ranking = resultsToDisplay
                ? allrankingResults.slice(0, resultsToDisplay)
                : allrankingResults;
            var appsListLi = ranking
                .map(function (element, rankingIndex) {
                var apdex = templateTag_1.templateTag({
                    tag: 'span',
                    content: String(element.apdex),
                    attributes: [
                        {
                            key: 'class',
                            value: 'apdex mx-3',
                        },
                    ],
                });
                var name = templateTag_1.templateTag({
                    tag: 'span',
                    content: element.name,
                });
                return templateTag_1.templateTag({
                    tag: 'li',
                    content: [apdex, name].join(' '),
                    attributes: [
                        {
                            key: 'class',
                            value: 'appInHost d-flex flex-nowrap align-items-start my-2',
                        },
                        { key: 'data-host-name', value: hostName },
                        { key: 'data-app-name', value: element.name },
                        { key: 'data-ranking-index', value: "" + rankingIndex },
                    ],
                });
            })
                .join(' ');
            var appsUl = templateTag_1.templateTag({
                content: appsListLi,
                attributes: [{ key: 'class', value: 'hosts-list my-2' }],
                tag: 'ul',
            });
            var hostTitle = templateTag_1.templateTag({
                content: hostName,
                attributes: [
                    {
                        key: 'class',
                        value: 'hostTitle mx-3 font-bold',
                    },
                    { key: 'data-host-name', value: hostName },
                ],
            });
            var card = templateTag_1.templateTag({
                content: hostTitle + " " + appsUl,
                attributes: [
                    {
                        key: 'class',
                        value: 'card m-3 py-2',
                    },
                ],
            });
            return htmlString + card;
        }, '');
        return grid;
    },
    getHtml: function () {
        var rankedHosts = Apdex.getHostsList();
        var grid = this.getHostsHtml(rankedHosts, config_1.APPS_BY_HOST_DISPLAY_NUMBER);
        var appsByHostList = templateTag_1.templateTag({
            tag: 'div',
            attributes: [
                {
                    key: 'class',
                    value: 'hosts',
                },
                {
                    key: 'id',
                    value: 'hostsList',
                },
            ],
            content: grid,
        });
        return appsByHostList;
    },
});


/***/ }),

/***/ "./src/components/hostsList/mainTitleHtml.ts":
/*!***************************************************!*\
  !*** ./src/components/hostsList/mainTitleHtml.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var templates_1 = __webpack_require__(/*! ../../templates */ "./src/templates/index.ts");
var userEmail = 'averylongemailaddress@companyname.com';
var titleH1 = templates_1.templateTag({
    content: 'Apps by Host',
    tag: 'h1',
    attributes: [
        {
            key: 'class',
            value: ' flex-shrink-0',
        },
    ],
});
var emailHtml = templates_1.templateTag({
    tag: 'span',
    content: userEmail,
    attributes: [
        {
            key: 'title',
            value: userEmail,
        },
    ],
});
var user = templates_1.templateTag({
    tag: 'p',
    content: "for user " + emailHtml,
    attributes: [
        {
            key: 'class',
            value: 'ellipsis mx-1',
        },
    ],
});
var checkbox = templates_1.templateCheckbox({
    content: 'Show as an awesome grid',
    name: 'listMode',
    attributes: [
        {
            key: 'id',
            value: 'listModeCheckbox',
        },
        {
            key: 'class',
            value: 'cursor-pointer',
        },
    ],
    labelAttributes: [
        {
            key: 'class',
            value: 'text-nowrap ml-2 cursor-pointer',
        },
    ],
});
exports.mainTitleHtml = templates_1.templateTag({
    tag: 'header',
    content: [titleH1, user, checkbox].join(' '),
    attributes: [
        {
            key: 'class',
            value: 'm-3 d-flex align-items-end',
        },
    ],
});


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var hostsListPlugin_1 = __webpack_require__(/*! ./hostsList/hostsListPlugin */ "./src/components/hostsList/hostsListPlugin.ts");
exports.hostsListPlugin = hostsListPlugin_1.hostsListPlugin;
var mainTitleHtml_1 = __webpack_require__(/*! ./hostsList/mainTitleHtml */ "./src/components/hostsList/mainTitleHtml.ts");
exports.mainTitleHtml = mainTitleHtml_1.mainTitleHtml;
var modalSdk_1 = __webpack_require__(/*! ./modal/modalSdk */ "./src/components/modal/modalSdk.ts");
exports.modalSdk = modalSdk_1.modalSdk;


/***/ }),

/***/ "./src/components/modal/_modal.scss":
/*!******************************************!*\
  !*** ./src/components/modal/_modal.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./_modal.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/modal/_modal.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/modal/modalSdk.ts":
/*!******************************************!*\
  !*** ./src/components/modal/modalSdk.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(/*! ./_modal.scss */ "./src/components/modal/_modal.scss");
exports.setInnerHtml = function (id, text) {
    try {
        var element = document.getElementById(id);
        element.innerHTML = text;
        return text;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
exports.modalSdk = function () {
    var modalId = 'newRelicModal';
    var headerId = 'newRelicModalHeader';
    var bodyId = 'newRelicModalBody';
    var closeId = 'newRelicModalClose';
    var modalNode = document.getElementById(modalId);
    var hide = function () {
        var none = 'none';
        try {
            modalNode.style.display = none;
            return none;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    };
    var show = function () {
        var block = 'block';
        try {
            modalNode.style.display = block;
            return block;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    };
    if (!modalNode) {
        modalNode = document.createElement('div');
        modalNode.id = modalId;
        modalNode.classList.add('modal');
        modalNode.innerHTML = "  \n<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <span id=\"" + closeId + "\" class=\"close\">&times;</span>\n    <h2 id=\"" + headerId + "\"></h2>\n  </div>\n  <div  id=\"" + bodyId + "\" class=\"modal-body\">\n  </div>\n  </div>\n</div>\n";
        document.body.appendChild(modalNode);
        var closeButton = document.getElementById(closeId);
        closeButton.onclick = hide;
        window.addEventListener('click', function (event) {
            if (event.target === modalNode) {
                hide();
            }
        });
    }
    var setBody = function (text) { return exports.setInnerHtml(bodyId, text); };
    var setHeader = function (text) { return exports.setInnerHtml(headerId, text); };
    return Object.freeze({
        hide: hide,
        setBody: setBody,
        setHeader: setHeader,
        show: show,
    });
};


/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.APPS_BY_HOST_RESULTS_NUMBER = 25;
exports.APPS_BY_HOST_DISPLAY_NUMBER = 5;
exports.COMPARATORS = {
    greater: 'greater',
    smaller: 'smaller',
};
exports.APPS_ORDER_COMPARATOR = exports.COMPARATORS.greater;
exports.APPS_PROPERTY_TO_COMPARE = 'apdex';
exports.APPS_ORDER_CONDITION = function (a, b) { return a.apdex < b.apdex; };


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var views_1 = __webpack_require__(/*! ./views/ */ "./src/views/index.ts");
__webpack_require__(/*! ./types */ "./src/types/index.ts");
__webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
var views_2 = __webpack_require__(/*! ./views */ "./src/views/index.ts");
var loader = views_1.loaderChasePlugin.loaderChaseNode();
document.body.appendChild(loader);
views_2.appsByHosts.init();


/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/templates/index.ts":
/*!********************************!*\
  !*** ./src/templates/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var templateTag_1 = __webpack_require__(/*! ./templateTag */ "./src/templates/templateTag.ts");
exports.templateTag = templateTag_1.templateTag;
var templateCheckbox_1 = __webpack_require__(/*! ./templateCheckbox */ "./src/templates/templateCheckbox.ts");
exports.templateCheckbox = templateCheckbox_1.templateCheckbox;


/***/ }),

/***/ "./src/templates/templateCheckbox.ts":
/*!*******************************************!*\
  !*** ./src/templates/templateCheckbox.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
exports.templateCheckbox = function (_a) {
    var _b = _a.content, content = _b === void 0 ? '' : _b, _c = _a.attributes, attributes = _c === void 0 ? [] : _c, _d = _a.labelAttributes, labelAttributes = _d === void 0 ? [] : _d, _e = _a.name, name = _e === void 0 ? 'inputName' : _e;
    return "\n<label\n  " + labelAttributes.map(utils_1.setHtmlAttribute).join(' ') + "\n>\n  <input\n    type=\"checkbox\" \n    name=\"" + name + "\" \n    " + attributes.map(utils_1.setHtmlAttribute).join(' ') + "\n  />  \n  " + content + "\n</label>\n  ";
};


/***/ }),

/***/ "./src/templates/templateTag.ts":
/*!**************************************!*\
  !*** ./src/templates/templateTag.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
exports.templateTag = function (_a) {
    var _b = _a.content, content = _b === void 0 ? '' : _b, _c = _a.attributes, attributes = _c === void 0 ? [] : _c, _d = _a.tag, tag = _d === void 0 ? 'section' : _d;
    return "\n  <" + tag + " \n    " + attributes.map(utils_1.setHtmlAttribute).join(' ') + "\n    >\n    " + content + "\n  </" + tag + ">  \n  ";
};


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;


/***/ }),

/***/ "./src/utils/elementInDictionarySorter/elementInDictionarySorter.ts":
/*!**************************************************************************!*\
  !*** ./src/utils/elementInDictionarySorter/elementInDictionarySorter.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var insertByOrder_1 = __webpack_require__(/*! ../insertByOrder/insertByOrder */ "./src/utils/insertByOrder/insertByOrder.ts");
exports.elementInDictionarySorter = function (dictionary, element, sortBy) {
    if (!(dictionary && element && sortBy)) {
        throw new Error('missing arguments');
    }
    return function (key) {
        if (dictionary.has(key)) {
            var arrayOfEntries = dictionary.get(key);
            insertByOrder_1.insertByOrder(arrayOfEntries, element, sortBy);
        }
        else {
            dictionary.set(key, [element]);
        }
    };
};


/***/ }),

/***/ "./src/utils/elementInSortedDictionaryRemover/elementInSortedDictionaryRemover.ts":
/*!****************************************************************************************!*\
  !*** ./src/utils/elementInSortedDictionaryRemover/elementInSortedDictionaryRemover.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var indexOfOrdered_1 = __webpack_require__(/*! ../indexOfOrdered/indexOfOrdered */ "./src/utils/indexOfOrdered/indexOfOrdered.ts");
exports.elementInSortedDictionaryRemover = function (dictionary, element) {
    if (!(dictionary && element)) {
        throw new Error('missing parameters');
    }
    return function (key) {
        var sortedArray = dictionary.get(key);
        var index = indexOfOrdered_1.indexOfOrdered(sortedArray, element, { isDescending: true });
        sortedArray.splice(index, 1);
        return element;
    };
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var insertByOrder_1 = __webpack_require__(/*! ./insertByOrder/insertByOrder */ "./src/utils/insertByOrder/insertByOrder.ts");
exports.insertByOrder = insertByOrder_1.insertByOrder;
var elementInDictionarySorter_1 = __webpack_require__(/*! ./elementInDictionarySorter/elementInDictionarySorter */ "./src/utils/elementInDictionarySorter/elementInDictionarySorter.ts");
exports.elementInDictionarySorter = elementInDictionarySorter_1.elementInDictionarySorter;
var elementInSortedDictionaryRemover_1 = __webpack_require__(/*! ./elementInSortedDictionaryRemover/elementInSortedDictionaryRemover */ "./src/utils/elementInSortedDictionaryRemover/elementInSortedDictionaryRemover.ts");
exports.elementInSortedDictionaryRemover = elementInSortedDictionaryRemover_1.elementInSortedDictionaryRemover;
var setHtmlAttribute_1 = __webpack_require__(/*! ./setHtmlAttribute */ "./src/utils/setHtmlAttribute.ts");
exports.setHtmlAttribute = setHtmlAttribute_1.setHtmlAttribute;


/***/ }),

/***/ "./src/utils/indexOfOrdered/indexOfOrdered.ts":
/*!****************************************************!*\
  !*** ./src/utils/indexOfOrdered/indexOfOrdered.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getSameValues = function (collection, element, options) {
    if (collection === void 0) { collection = []; }
    if (options === void 0) { options = {}; }
    var length = collection.length;
    if (!length)
        return 0;
    var _a = options.getValue, getValue = _a === void 0 ? function (value) { return value; } : _a, _b = options.isLastElement, isLastElement = _b === void 0 ? false : _b;
    var minBoundary = 0;
    var maxBoundary = length - 1;
    var maxLoopsToResolve = Math.floor(Math.log2(length));
    var value = getValue(element);
    var index = Math.floor(length / 2);
    var loops = 0;
    var min = minBoundary;
    var max = maxBoundary;
    if (!isLastElement) {
        while (loops <= maxLoopsToResolve && index <= maxBoundary && index >= minBoundary) {
            if (getValue(collection[index]) === value) {
                min = index;
                index += Math.ceil((max - min) / 2);
                if (max === index) {
                    return min;
                }
            }
            else {
                max = index;
                index -= Math.ceil((max - min) / 2);
                if (min === index) {
                    return min;
                }
            }
            loops += 1;
        }
    }
    while (loops <= maxLoopsToResolve && index <= maxBoundary && index >= minBoundary) {
        if (getValue(collection[index]) === value) {
            max = index;
            index -= Math.ceil((max - min) / 2);
            if (min === index) {
                return max;
            }
        }
        else {
            min = index;
            index += Math.ceil((max - min) / 2);
            if (max === index) {
                return max;
            }
        }
        loops += 1;
    }
    return -1;
};
exports.indexOfSimpleOrdered = function (collection, element, options) {
    if (collection === void 0) { collection = []; }
    if (options === void 0) { options = {}; }
    if (element !== 0 && !element) {
        throw new Error('missing parameters');
    }
    var length = collection.length;
    if (!length) {
        return -1;
    }
    var _a = options.getValue, getValue = _a === void 0 ? function (value) { return value; } : _a, _b = options.isDescending, isDescending = _b === void 0 ? false : _b;
    var maxLoopsToResolve = Math.floor(Math.log2(length));
    var minBoundary = 0;
    var maxBoundary = length - 1;
    var index = Math.floor(length / 2);
    var loops = 0;
    var step;
    var min = minBoundary;
    var max = maxBoundary;
    while (loops <= maxLoopsToResolve && index <= maxBoundary && index >= minBoundary) {
        if (getValue(collection[index]) === getValue(element)) {
            var sameValuesToLeft = exports.getSameValues(collection.slice(min, index), element, __assign(__assign({}, options), { isLastElement: true }));
            var sameValuesToRight = exports.getSameValues(collection.slice(index, max), element, __assign(__assign({}, options), { isLastElement: false }));
            if (isDescending) {
                return index + sameValuesToRight;
            }
            return min + sameValuesToLeft;
            break;
        }
        var isToTheEnd = isDescending
            ? getValue(collection[index]) > getValue(element)
            : getValue(collection[index]) < getValue(element);
        if (isToTheEnd) {
            min = index + 1;
            step = Math.ceil((max - min) / 2);
        }
        else {
            max = index - 1;
            step = -Math.ceil((max - min) / 2);
        }
        if (min === max) {
            index = min;
            break;
        }
        index += step;
        loops += 1;
    }
    return index;
};
exports.indexOfOrdered = function (collection, element, options) {
    if (collection === void 0) { collection = []; }
    if (element !== 0 && !element) {
        throw new Error('missing parameters');
    }
    var length = collection.length;
    if (!length) {
        return -1;
    }
    var optionsList = [].concat(options);
    var optionsIndex = 0;
    var result;
    while (!result && optionsIndex < optionsList.length) {
        if (optionsList.length === 1) {
            return exports.indexOfSimpleOrdered(collection, element, optionsList[0]);
        }
        optionsIndex += 1;
    }
    return -1;
};


/***/ }),

/***/ "./src/utils/insertByOrder/insertByOrder.ts":
/*!**************************************************!*\
  !*** ./src/utils/insertByOrder/insertByOrder.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.insertByOrder = function (collection, element, condition) {
    if (collection === void 0) { collection = []; }
    if (condition === void 0) { condition = function (a, b) { return a > b; }; }
    var length = collection.length;
    if (length) {
        var counter = 0;
        while (counter < length) {
            var isConditionMet = condition(collection[counter], element);
            if (isConditionMet) {
                collection.splice(counter, 0, element);
                break;
            }
            counter += 1;
        }
    }
    else {
        collection.push(element);
    }
    return collection;
};


/***/ }),

/***/ "./src/utils/setHtmlAttribute.ts":
/*!***************************************!*\
  !*** ./src/utils/setHtmlAttribute.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.setHtmlAttribute = function (_a) {
    var _b = _a.key, key = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
    return (value.trim() ? key + "=\"" + value + "\"" : key);
};


/***/ }),

/***/ "./src/views/appsByHosts/appsByHosts.ts":
/*!**********************************************!*\
  !*** ./src/views/appsByHosts/appsByHosts.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var components_1 = __webpack_require__(/*! ../../components */ "./src/components/index.ts");
var templates_1 = __webpack_require__(/*! ../../templates */ "./src/templates/index.ts");
exports.appsByHosts = {
    init: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, components_1.hostsListPlugin.load('https://raw.githubusercontent.com/Silverium/vanilla-challenge/master/src/mocks/host-app-data.json')];
                    case 1:
                        _a.sent();
                        this.load();
                        return [2];
                }
            });
        });
    },
    load: function (state) {
        var _this = this;
        if (state === void 0) { state = { isGridMode: false }; }
        var isGridMode = state.isGridMode;
        var containerHtml = templates_1.templateTag({
            attributes: [{ key: 'class', value: 'container' }],
            content: [components_1.mainTitleHtml, components_1.hostsListPlugin.getHtml()].join(' '),
        });
        var parser = new DOMParser();
        var doc = parser.parseFromString(containerHtml, 'text/html');
        var checkboxNode = doc.getElementById('listModeCheckbox');
        var hostsListNode = doc.getElementById('hostsList');
        var labelNodes = checkboxNode.parentElement.childNodes;
        var labelTextNode = labelNodes[labelNodes.length - 1];
        var classesToToggle = ['grid-mode', 'd-flex', 'flex-wrap'];
        checkboxNode.addEventListener('click', function (event) {
            var isCheckbox = event.target;
            if (isCheckbox.checked) {
                isGridMode = true;
                classesToToggle.forEach(function (className) { return hostsListNode.classList.add(className); });
                labelTextNode.textContent = ' Show as list';
            }
            else {
                isGridMode = false;
                classesToToggle.forEach(function (className) { return hostsListNode.classList.remove(className); });
                labelTextNode.textContent = ' Show as an awesome grid';
            }
        });
        if (isGridMode) {
            checkboxNode.click();
        }
        document.body = doc.body;
        var modalManager = components_1.modalSdk();
        var hostNameNodes = document.getElementsByClassName('hostTitle');
        Array.from(hostNameNodes).forEach(function (hostNameNode) {
            hostNameNode.classList.add('cursor-pointer');
            hostNameNode.addEventListener('click', function () {
                var hostName = hostNameNode.dataset.hostName;
                modalManager.setHeader(hostName);
                modalManager.setBody(components_1.hostsListPlugin.getHostsHtml([hostName]));
                modalManager.show();
            });
        });
        var hostsLists = document.getElementsByClassName('hosts-list');
        Array.prototype.forEach.call(hostsLists, function (hostListNode) {
            hostsListNode.classList.add('cursor-pointer');
            hostListNode.addEventListener('click', function (event) {
                var target = event.target;
                var appInHost = target.closest('.appInHost');
                if (appInHost) {
                    event.stopPropagation();
                    var _a = appInHost.dataset, appName = _a.appName, rankingIndex = _a.rankingIndex, hostName = _a.hostName;
                    modalManager.setHeader(appName);
                    var hostJson_1 = window.Apdex.getTopAppsByHost(hostName)[rankingIndex];
                    var deleteButtonId = hostJson_1.name.replace(/[\W]\d/, '');
                    var buttonHtml = templates_1.templateTag({
                        tag: 'button',
                        content: 'Delete',
                        attributes: [
                            {
                                key: 'id',
                                value: deleteButtonId,
                            },
                            { key: 'class', value: 'btn-danger' },
                        ],
                    });
                    var versionHtml = templates_1.templateTag({ content: "version: " + hostJson_1.version });
                    var wrapper = templates_1.templateTag({
                        attributes: [{ key: 'class', value: 'd-flex justify-content-between' }],
                        content: versionHtml + buttonHtml,
                    });
                    modalManager.setBody(wrapper);
                    document.getElementById(deleteButtonId).onclick = function () {
                        window.Apdex.removeAppToHosts(hostJson_1);
                        var currentcheckboxNode = document.getElementById('listModeCheckbox');
                        _this.load({ isGridMode: currentcheckboxNode.checked });
                    };
                    modalManager.show();
                }
            });
        });
    },
};


/***/ }),

/***/ "./src/views/index.ts":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var appsByHosts_1 = __webpack_require__(/*! ./appsByHosts/appsByHosts */ "./src/views/appsByHosts/appsByHosts.ts");
exports.appsByHosts = appsByHosts_1.appsByHosts;
var loaderChase_1 = __webpack_require__(/*! ./loaderChase/loaderChase */ "./src/views/loaderChase/loaderChase.ts");
exports.loaderChasePlugin = loaderChase_1.loaderChasePlugin;


/***/ }),

/***/ "./src/views/loaderChase/_loader-chase.scss":
/*!**************************************************!*\
  !*** ./src/views/loaderChase/_loader-chase.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./_loader-chase.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/views/loaderChase/_loader-chase.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/views/loaderChase/loaderChase.ts":
/*!**********************************************!*\
  !*** ./src/views/loaderChase/loaderChase.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(/*! ./_loader-chase.scss */ "./src/views/loaderChase/_loader-chase.scss");
var innerHtml = "\n<div class=\"centered\">\n  <div class=\"sk-chase\">\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n    <div class=\"sk-chase-dot\"></div>\n  </div>\n</div>";
exports.loaderChasePlugin = {
    innerHtml: function () {
        return innerHtml;
    },
    loaderChaseNode: function () {
        var parser = new DOMParser();
        var doc = parser.parseFromString(innerHtml, 'text/html');
        return doc.body.firstChild;
    },
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9zdHNMaXN0L19ob3N0cy1saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvX21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9hZGVyQ2hhc2UvX2xvYWRlci1jaGFzZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcGRleC9BcGRleFNkay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBkZXgvZGF0YURpZ2VzdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcGRleC9wbHVnaW5zL2FkZEFwcFRvSG9zdHMvYWRkQXBwVG9Ib3N0c1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBkZXgvcGx1Z2lucy9nZXRDb25kaXRpb25QbHVnaW4vZ2V0Q29uZGl0aW9uUGx1Z2luLnRzIiwid2VicGFjazovLy8uL3NyYy9BcGRleC9wbHVnaW5zL2dldFRvcEFwcHNCeUhvc3QvZ2V0VG9wQXBwc0J5SG9zdFBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBkZXgvcGx1Z2lucy9yZW1vdmVBcHBUb0hvc3RzL3JlbW92ZUFwcFRvSG9zdHNQbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9zdHNMaXN0L19ob3N0cy1saXN0LnNjc3M/ZGNkOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob3N0c0xpc3QvaG9zdHNMaXN0UGx1Z2luLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvc3RzTGlzdC9tYWluVGl0bGVIdG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL19tb2RhbC5zY3NzP2VmMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxTZGsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9lYjAxIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy90ZW1wbGF0ZUNoZWNrYm94LnRzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvdGVtcGxhdGVUYWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VsZW1lbnRJbkRpY3Rpb25hcnlTb3J0ZXIvZWxlbWVudEluRGljdGlvbmFyeVNvcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZWxlbWVudEluU29ydGVkRGljdGlvbmFyeVJlbW92ZXIvZWxlbWVudEluU29ydGVkRGljdGlvbmFyeVJlbW92ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleE9mT3JkZXJlZC9pbmRleE9mT3JkZXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5zZXJ0QnlPcmRlci9pbnNlcnRCeU9yZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZXRIdG1sQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHBzQnlIb3N0cy9hcHBzQnlIb3N0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvYWRlckNoYXNlL19sb2FkZXItY2hhc2Uuc2Nzcz81ZmE4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2FkZXJDaGFzZS9sb2FkZXJDaGFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxnQkFBZ0IsbUJBQW1CLEVBQUUsd0JBQXdCLGtCQUFrQixFQUFFLGtCQUFrQiwyQkFBMkIsRUFBRSxzQkFBc0Isc0JBQXNCLHNCQUFzQixFQUFFLDRCQUE0Qix3QkFBd0IsbUJBQW1CLEVBQUUsU0FBUyxtTkFBbU4sZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLEtBQUssWUFBWSxrQkFBa0IsTUFBTSxZQUFZLHFHQUFxRyxVQUFVLFlBQVkseUJBQXlCLGNBQWMsb0JBQW9CLE9BQU8sS0FBSyxXQUFXLCtCQUErQixLQUFL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Z0IsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxRQUFRLE1BQU0sTUFBTSxnQkFBZ0IsTUFBTSxNQUFNLEtBQUssaUJBQWlCLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsWUFBWSxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxhQUFhLGtCQUFrQixPQUFPLGFBQWEsaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLEtBQUssZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0s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bGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9zdHMtbGlzdCB7XFxuICBjb2xvcjogIzRBNEE0QTsgfVxcbiAgLmhvc3RzLWxpc3QgLmFwZGV4IHtcXG4gICAgd2lkdGg6IDMwcHg7IH1cXG5cXG4uaG9zdHMgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5ob3N0cy5ncmlkLW1vZGUge1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAtMzBweDsgfVxcbiAgLmhvc3RzLmdyaWQtbW9kZSAuY2FyZCB7XFxuICAgIG1hcmdpbjogMzBweCAxNXB4O1xcbiAgICB3aWR0aDogMzc1cHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9jb21wb25lbnRzL2hvc3RzTGlzdC9faG9zdHMtbGlzdC5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL3NldHVwL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFRTtFQUNFLGNDSWdCLEVBQUE7RURMakI7SUFHRyxXQUFXLEVBQUE7O0FBSmpCO0VBUUksc0JDUFEsRUFBQTs7QUREWjtFQVdJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQVpyQjtJQWVNLGlCQUFpQjtJQUNqQixZQUFZLEVBQUFcIixcImZpbGVcIjpcIl9ob3N0cy1saXN0LnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc2Fzcy9zZXR1cC92YXJpYWJsZXNcXFwiO1xcbi5ob3N0cyB7XFxuICAmLWxpc3Qge1xcbiAgICBjb2xvcjogJGJsYWNrLXNvZnQ7XFxuICAgIC5hcGRleCB7XFxuICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG4gIH1cXG4gIC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgfVxcbiAgJi5ncmlkLW1vZGUge1xcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XFxuXFxuICAgIC5jYXJkIHtcXG4gICAgICBtYXJnaW46IDMwcHggMTVweDtcXG4gICAgICB3aWR0aDogMzc1cHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvLz8gc2V0IHlvdXIgYnJhbmQgY29sb3JzXFxuXFxuJHdoaXRlOiAjZmZmO1xcblxcbiRsaWdodC1ncmV5OiAjZjVmNWY1O1xcbiRncmV5OiAjZDdkN2Q3O1xcblxcbiRibGFjay1zb2Z0OiAjNEE0QTRBO1xcbiRibGFjazogIzA5MDkwZTtcXG5cXG4kYmx1ZTogIzJjNjM4ZjtcXG4kcGluazogI2ZmZjBmNTtcXG4keWVsbG93OiAjZmZmYWNkO1xcblxcbi8vPyBvdmVycmlkZSBmb3IgcHJvamVjdCBjbGFyaXR5XFxuXFxuJGNvbG9yLXByaW1hcnk6ICRibHVlO1xcbiRjb2xvci1zZWNvbmRhcnk6ICRwaW5rO1xcbiRjb2xvci10ZXJ0aWFyeTogJHllbGxvdztcXG4kc3BhY2VyOiAxMHB4O1xcbiRzcGFjZXJzOiAoXFxuICAwOiAwLFxcbiAgMTogKFxcbiAgICAkc3BhY2VyICogMSxcXG4gICksXFxuICAyOiAoXFxuICAgICRzcGFjZXIgKiAyLFxcbiAgKSxcXG4gIDM6IChcXG4gICAgJHNwYWNlciAqIDMsXFxuICApLFxcbik7XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTtcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIC8qIE1vZGFsIENvbnRlbnQgKi8gfVxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRBNEE0QTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7IH1cXG4gIC5tb2RhbC1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAycHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFjZDtcXG4gICAgY29sb3I6ICMwOTA5MGU7IH1cXG4gIC5tb2RhbC1ib2R5IHtcXG4gICAgcGFkZGluZzogMnB4IDE2cHg7IH1cXG5cXG4vKiBBZGQgQW5pbWF0aW9uICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICMwOTA5MGU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogIzJjNjM4ZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9jb21wb25lbnRzL21vZGFsL19tb2RhbC5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL3NldHVwL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGFBQWE7RUFBRSxzQkFBQTtFQUNmLGVBQWU7RUFBRSxrQkFBQTtFQUNqQixVQUFVO0VBQUUsZUFBQTtFQUNaLGtCQUFrQjtFQUFFLHdCQUFBO0VBQ3BCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUFFLGVBQUE7RUFDYixZQUFZO0VBQUUsZ0JBQUE7RUFDZCxjQUFjO0VBQUUsNEJBQUE7RUFDaEIseUJDTlk7RURNYSxtQkFBQTtFQUN6QixvQ0FBb0M7RUFBRSxxQkFBQTtFQUN0QyxrQkFBQSxFQUFtQjtFQUNuQjtJQUNFLGtCQUFrQjtJQUNsQixzQkNkUTtJRGVSLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJDWmdCO0lEYWhCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEVBQTRFO0lBQzVFLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLHdCQUF3QixFQUFBO0VBRTFCO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQ2xCWTtJRG1CWixjQ3ZCVyxFQUFBO0VEeUJiO0lBQ0UsaUJBQWlCLEVBQUE7O0FBS3JCLGtCQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFFWjtJQUNFLE1BQU07SUFDTixVQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVaO0lBQ0UsTUFBTTtJQUNOLFVBQVUsRUFBQSxFQUFBOztBQUlkLHFCQUFBO0FBQ0E7RUFDRSxjQ3hEYTtFRHlEYixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQixFQUFBO0VBSm5CO0lBT0ksY0M1RFU7SUQ2RFYscUJBQXFCO0lBQ3JCLGVBQWUsRUFBQVwiLFwiZmlsZVwiOlwiX21vZGFsLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc2Fzcy9zZXR1cC92YXJpYWJsZXNcXFwiO1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgLyogTW9kYWwgQ29udGVudCAqL1xcbiAgJi1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJsYWNrLXNvZnQ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgfVxcbiAgJi1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAycHggMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlcnRpYXJ5O1xcbiAgICBjb2xvcjogJGJsYWNrO1xcbiAgfVxcbiAgJi1ib2R5IHtcXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XFxuICB9XFxuXFxufVxcblxcbi8qIEFkZCBBbmltYXRpb24gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAkYmxhY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXCIsXCIvLz8gc2V0IHlvdXIgYnJhbmQgY29sb3JzXFxuXFxuJHdoaXRlOiAjZmZmO1xcblxcbiRsaWdodC1ncmV5OiAjZjVmNWY1O1xcbiRncmV5OiAjZDdkN2Q3O1xcblxcbiRibGFjay1zb2Z0OiAjNEE0QTRBO1xcbiRibGFjazogIzA5MDkwZTtcXG5cXG4kYmx1ZTogIzJjNjM4ZjtcXG4kcGluazogI2ZmZjBmNTtcXG4keWVsbG93OiAjZmZmYWNkO1xcblxcbi8vPyBvdmVycmlkZSBmb3IgcHJvamVjdCBjbGFyaXR5XFxuXFxuJGNvbG9yLXByaW1hcnk6ICRibHVlO1xcbiRjb2xvci1zZWNvbmRhcnk6ICRwaW5rO1xcbiRjb2xvci10ZXJ0aWFyeTogJHllbGxvdztcXG4kc3BhY2VyOiAxMHB4O1xcbiRzcGFjZXJzOiAoXFxuICAwOiAwLFxcbiAgMTogKFxcbiAgICAkc3BhY2VyICogMSxcXG4gICksXFxuICAyOiAoXFxuICAgICRzcGFjZXIgKiAyLFxcbiAgKSxcXG4gIDM6IChcXG4gICAgJHNwYWNlciAqIDMsXFxuICApLFxcbik7XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjbGVhcjogYm90aDtcXG4gIGhlaWdodDogMDsgfVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuLyogQGluY2x1ZGUgcmVzcG9uZC10bygnbW9iaWxlJykge30gKi9cXG4vKiBDRU5URVJJTkcgKi9cXG4vKlxcbi5wYXJlbnQge1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNoaWxkIHtcXG5AaW5jbHVkZSBjZW50ZXJlZDtcXG59XFxuKi9cXG4uYnRuLWRhbmdlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2Y1OTc4ZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMjQ1MzcgNSUsICNjNjJkMWYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI0NTM3O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwMjcxODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA2cHggMjRweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjODEwZTA1OyB9XFxuICAuYnRuLWRhbmdlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjNjJkMWYgNSUsICNmMjQ1MzcgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjJkMWY7IH1cXG4gICAgLmJ0bi1kYW5nZXI6aG92ZXI6YWN0aXZlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAxcHg7IH1cXG5cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tdC0wLFxcbi5teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubXItMCxcXG4ubXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ubWItMCxcXG4ubXktMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm1sLTAsXFxuLm14LTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS0xIHtcXG4gIG1hcmdpbjogMTBweDsgfVxcblxcbi5tdC0xLFxcbi5teS0xIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4ubXItMSxcXG4ubXgtMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4ubWItMSxcXG4ubXktMSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuLm1sLTEsXFxuLm14LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjBweDsgfVxcblxcbi5tdC0yLFxcbi5teS0yIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4ubXItMixcXG4ubXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cXG5cXG4ubWItMixcXG4ubXktMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuLm1sLTIsXFxuLm14LTIge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cXG5cXG4ubS0zIHtcXG4gIG1hcmdpbjogMzBweDsgfVxcblxcbi5tdC0zLFxcbi5teS0zIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7IH1cXG5cXG4ubXItMyxcXG4ubXgtMyB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cXG5cXG4ubWItMyxcXG4ubXktMyB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuLm1sLTMsXFxuLm14LTMge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ucHQtMCxcXG4ucHktMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wci0wLFxcbi5weC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucGItMCxcXG4ucHktMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wbC0wLFxcbi5weC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLTEge1xcbiAgcGFkZGluZzogMTBweDsgfVxcblxcbi5wdC0xLFxcbi5weS0xIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XFxuXFxuLnByLTEsXFxuLnB4LTEge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDsgfVxcblxcbi5wYi0xLFxcbi5weS0xIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XFxuXFxuLnBsLTEsXFxuLnB4LTEge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLnB0LTIsXFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cXG5cXG4ucHItMixcXG4ucHgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLnBiLTIsXFxuLnB5LTIge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4ucGwtMixcXG4ucHgtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG5cXG4ucC0zIHtcXG4gIHBhZGRpbmc6IDMwcHg7IH1cXG5cXG4ucHQtMyxcXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMzBweDsgfVxcblxcbi5wci0zLFxcbi5weC0zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cXG5cXG4ucGItMyxcXG4ucHktMyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfVxcblxcbi5wbC0zLFxcbi5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDsgfVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5kLWlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7IH1cXG5cXG4uZC1pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmQtYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uZC10YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZTsgfVxcblxcbi5kLXRhYmxlLXJvdyB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7IH1cXG5cXG4uZC10YWJsZS1jZWxsIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7IH1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uZC1pbmxpbmUtZmxleCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcblxcbi5hbGlnbi1pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcblxcbi5hbGlnbi1pdGVtcy1lbmQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgfVxcblxcbi5hbGlnbi1pdGVtcy1zdHJldGNoIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4uZmxleC1ncm93LTAge1xcbiAgZmxleC1ncm93OiAwOyB9XFxuXFxuLmZsZXgtZ3Jvdy0xIHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcblxcbi5mbGV4LXNocmluay0wIHtcXG4gIGZsZXgtc2hyaW5rOiAwOyB9XFxuXFxuLmZsZXgtc2hyaW5rLTEge1xcbiAgZmxleC1zaHJpbms6IDE7IH1cXG5cXG4uZmxleC1ub3dyYXAge1xcbiAgZmxleC13cmFwOiBub3dyYXA7IH1cXG5cXG4uZmxleC13cmFwIHtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDsgfVxcblxcbi5lbGxpcHNpcyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxuXFxuLnRleHQtd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XFxuXFxuLnRleHQtbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2VudGVyZWQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY2VudGVyZWQgOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuLmN1cnNvci1wb2ludGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhTmV1ZVxcXCI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiAjMDkwOTBlOyB9XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2FOZXVlLWJvbGRcXFwiLCBGYWxsYmFjaywgXFxcIkdlb3JnaWFcXFwiLCBzZXJpZiwgc2VyaWY7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4qOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjBmNTsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzJjNjM4ZjsgfVxcblxcbmltZyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogODQwcHg7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL3NldHVwL19ub3JtYWxpemUuc2Nzc1wiLFwiaW5kZXguc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9zZXR1cC9fY2xlYXJmaXguc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9zZXR1cC9fYm9yZGVyLWJveC5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy91dGlscy9fYnV0dG9ucy5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL3V0aWxzL19oZWxwZXJzLnNjc3NcIixcIi9Vc2Vycy9zb2xkZS9Xb3Jrc3BhY2UvdmFuaWxsYS1jaGFsbGVuZ2Uvc3JjL3Nhc3Mvc2V0dXAvX3ZhcmlhYmxlcy5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL2dsb2JhbC9fdHlwb2dyYXBoeS5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL2dsb2JhbC9fZ2xvYmFsLnNjc3NcIixcIi9Vc2Vycy9zb2xkZS9Xb3Jrc3BhY2UvdmFuaWxsYS1jaGFsbGVuZ2Uvc3JjL3Nhc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9sYXlvdXQvX2dyaWQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBQTtBQUVBOytFQ0ErRTtBREcvRTs7O0VDQ0U7QURJRjtFQUNFLGlCQUFpQjtFQUFFLE1BQUE7RUFDbkIsOEJBQThCO0VBQUUsTUFBQSxFQUFPOztBQUd6QzsrRUNEK0U7QURJL0U7O0VDREU7QURLRjtFQUNFLFNBQVMsRUFBQTs7QUFHWDs7RUNIRTtBRE9GO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7O0VDSkU7QURTRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7K0VDUitFO0FEVy9FOzs7RUNQRTtBRFlGO0VBQ0UsdUJBQXVCO0VBQUUsTUFBQTtFQUN6QixTQUFTO0VBQUUsTUFBQTtFQUNYLGlCQUFpQjtFQUFFLE1BQUEsRUFBTzs7QUFHNUI7OztFQ05FO0FEV0Y7RUFDRSxpQ0FBaUM7RUFBRSxNQUFBO0VBQ25DLGNBQWM7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LG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYSxFQUFBO0VBSGY7SUFLSSxZQUFZLEVBQUE7O0FBTWQ7RUFDRSxlQUFlLEVBQUE7O0FFckduQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw0QkFUeUI7RUFVekIsaUJBQWlCO0VBQ2pCLGNEckJhLEVBQUE7O0FDd0JmO0VBQ0Usb0VBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUNuQ2xCO0VBQ0UsbUJGVVksRUFBQTs7QUVQZDs7RUFFRSxZQUFZO0VBQ1osbUJGSGtCLEVBQUE7O0FFTXBCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixTQUFTLEVBQUE7O0FBR1g7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UscUJBQXFCO0VBQ3JCLGNGcEJZLEVBQUE7O0FFdUJkO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUN2Q2xCO0VBQ0UsbUJIR2tCLEVBQUE7O0FJSnBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQVwiLFwiZmlsZVwiOlwiaW5kZXguc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmNsZWFyZml4OmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjbGVhcjogYm90aDtcXG4gIGhlaWdodDogMDsgfVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuLyogQGluY2x1ZGUgcmVzcG9uZC10bygnbW9iaWxlJykge30gKi9cXG4vKiBDRU5URVJJTkcgKi9cXG4vKlxcbi5wYXJlbnQge1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNoaWxkIHtcXG5AaW5jbHVkZSBjZW50ZXJlZDtcXG59XFxuKi9cXG4uYnRuLWRhbmdlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2Y1OTc4ZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMjQ1MzcgNSUsICNjNjJkMWYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI0NTM3O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwMjcxODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA2cHggMjRweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjODEwZTA1OyB9XFxuICAuYnRuLWRhbmdlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjNjJkMWYgNSUsICNmMjQ1MzcgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjJkMWY7IH1cXG4gICAgLmJ0bi1kYW5nZXI6aG92ZXI6YWN0aXZlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAxcHg7IH1cXG5cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tdC0wLFxcbi5teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubXItMCxcXG4ubXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ubWItMCxcXG4ubXktMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm1sLTAsXFxuLm14LTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS0xIHtcXG4gIG1hcmdpbjogMTBweDsgfVxcblxcbi5tdC0xLFxcbi5teS0xIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4ubXItMSxcXG4ubXgtMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4ubWItMSxcXG4ubXktMSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuLm1sLTEsXFxuLm14LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjBweDsgfVxcblxcbi5tdC0yLFxcbi5teS0yIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4ubXItMixcXG4ubXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cXG5cXG4ubWItMixcXG4ubXktMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuLm1sLTIsXFxuLm14LTIge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cXG5cXG4ubS0zIHtcXG4gIG1hcmdpbjogMzBweDsgfVxcblxcbi5tdC0zLFxcbi5teS0zIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7IH1cXG5cXG4ubXItMyxcXG4ubXgtMyB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cXG5cXG4ubWItMyxcXG4ubXktMyB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuLm1sLTMsXFxuLm14LTMge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ucHQtMCxcXG4ucHktMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wci0wLFxcbi5weC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucGItMCxcXG4ucHktMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wbC0wLFxcbi5weC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLTEge1xcbiAgcGFkZGluZzogMTBweDsgfVxcblxcbi5wdC0xLFxcbi5weS0xIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XFxuXFxuLnByLTEsXFxuLnB4LTEge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDsgfVxcblxcbi5wYi0xLFxcbi5weS0xIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XFxuXFxuLnBsLTEsXFxuLnB4LTEge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLnB0LTIsXFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cXG5cXG4ucHItMixcXG4ucHgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLnBiLTIsXFxuLnB5LTIge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4ucGwtMixcXG4ucHgtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG5cXG4ucC0zIHtcXG4gIHBhZGRpbmc6IDMwcHg7IH1cXG5cXG4ucHQtMyxcXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMzBweDsgfVxcblxcbi5wci0zLFxcbi5weC0zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cXG5cXG4ucGItMyxcXG4ucHktMyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfVxcblxcbi5wbC0zLFxcbi5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDsgfVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5kLWlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7IH1cXG5cXG4uZC1pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmQtYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uZC10YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZTsgfVxcblxcbi5kLXRhYmxlLXJvdyB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7IH1cXG5cXG4uZC10YWJsZS1jZWxsIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7IH1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uZC1pbmxpbmUtZmxleCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcblxcbi5hbGlnbi1pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcblxcbi5hbGlnbi1pdGVtcy1lbmQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgfVxcblxcbi5hbGlnbi1pdGVtcy1zdHJldGNoIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4uZmxleC1ncm93LTAge1xcbiAgZmxleC1ncm93OiAwOyB9XFxuXFxuLmZsZXgtZ3Jvdy0xIHtcXG4gIGZsZXgtZ3JvdzogMTsgfVxcblxcbi5mbGV4LXNocmluay0wIHtcXG4gIGZsZXgtc2hyaW5rOiAwOyB9XFxuXFxuLmZsZXgtc2hyaW5rLTEge1xcbiAgZmxleC1zaHJpbms6IDE7IH1cXG5cXG4uZmxleC1ub3dyYXAge1xcbiAgZmxleC13cmFwOiBub3dyYXA7IH1cXG5cXG4uZmxleC13cmFwIHtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDsgfVxcblxcbi5lbGxpcHNpcyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxuXFxuLnRleHQtd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XFxuXFxuLnRleHQtbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2VudGVyZWQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY2VudGVyZWQgOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuLmN1cnNvci1wb2ludGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhTmV1ZVxcXCI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiAjMDkwOTBlOyB9XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2FOZXVlLWJvbGRcXFwiLCBGYWxsYmFjaywgXFxcIkdlb3JnaWFcXFwiLCBzZXJpZiwgc2VyaWY7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4qOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjBmNTsgfVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzJjNjM4ZjsgfVxcblxcbmltZyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogODQwcHg7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cIixcIi5jbGVhcmZpeDphZnRlciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBoZWlnaHQ6IDA7XFxufVwiLFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cIixcIi8qIE1FRElBIFFVRVJJRVMgKi9cXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xcbiAgQGlmICRicmVha3BvaW50PT1cXFwibW9iaWxlXFxcIiB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuXFxuICBAZWxzZSBpZiAkYnJlYWtwb2ludD09XFxcInRhYmxldFxcXCIge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PVxcXCJkZXNrdG9wXFxcIiB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NjlweCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuXFxuICBAZWxzZSBpZiAkYnJlYWtwb2ludD09XFxcIndyYXBwZXJcXFwiIHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9XFxuXFxuICBAZWxzZSB7XFxuICAgIEBtZWRpYSAoJGJyZWFrcG9pbnQpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyEgRXhhbXBsZSB1c2FnZVxcbi8qIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ21vYmlsZScpIHt9ICovXFxuXFxuXFxuLyogQ0VOVEVSSU5HICovXFxuQG1peGluIGNlbnRlcmVkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8vISBFeGFtcGxlIHVzYWdlXFxuLypcXG4ucGFyZW50IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jaGlsZCB7XFxuQGluY2x1ZGUgY2VudGVyZWQ7XFxufVxcbiovXFxuXFxuLy8hIGVsbGlwc2lzXFxuQG1peGluIGVsbGlwc2lzKCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XCIsXCIvLyEgY3JlYXRlZCBmcm9tIGh0dHBzOi8vd3d3LmJlc3Rjc3NidXR0b25nZW5lcmF0b3IuY29tLyMvMzNcXG4uYnRuIHtcXG4gICYtZGFuZ2VyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmNTk3OGU7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmMjQ1MzcgNSUsICNjNjJkMWYgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjQ1Mzc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QwMjcxODtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDZweCAyNHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjODEwZTA1O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYzYyZDFmIDUlLCAjZjI0NTM3IDEwMCUpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjJkMWY7XFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiAxcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy8hIG1hcmdpbiBhbmQgcGFkZGluZ1xcbkBlYWNoICRwcm9wLCAkYWJicmV2IGluIChtYXJnaW46IG0sIHBhZGRpbmc6IHApIHtcXG4gIEBlYWNoICRzaXplLCAkbGVuZ3RoIGluICRzcGFjZXJzIHtcXG4gICAgLiN7JGFiYnJldn0tI3skc2l6ZX0ge1xcbiAgICAgICN7JHByb3B9OiAkbGVuZ3RoO1xcbiAgICB9XFxuICAgIC4jeyRhYmJyZXZ9dC0jeyRzaXplfSxcXG4gICAgLiN7JGFiYnJldn15LSN7JHNpemV9IHtcXG4gICAgICAjeyRwcm9wfS10b3A6ICRsZW5ndGg7XFxuICAgIH1cXG4gICAgLiN7JGFiYnJldn1yLSN7JHNpemV9LFxcbiAgICAuI3skYWJicmV2fXgtI3skc2l6ZX0ge1xcbiAgICAgICN7JHByb3B9LXJpZ2h0OiAkbGVuZ3RoO1xcbiAgICB9XFxuICAgIC4jeyRhYmJyZXZ9Yi0jeyRzaXplfSxcXG4gICAgLiN7JGFiYnJldn15LSN7JHNpemV9IHtcXG4gICAgICAjeyRwcm9wfS1ib3R0b206ICRsZW5ndGg7XFxuICAgIH1cXG4gICAgLiN7JGFiYnJldn1sLSN7JHNpemV9LFxcbiAgICAuI3skYWJicmV2fXgtI3skc2l6ZX0ge1xcbiAgICAgICN7JHByb3B9LWxlZnQ6ICRsZW5ndGg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8hIGRpc3BsYXlcXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCxcXG4gIGlubGluZS1mbGV4ICFkZWZhdWx0O1xcblxcbkBlYWNoICR2YWx1ZSBpbiAkZGlzcGxheXMge1xcbiAgLmQtI3skdmFsdWV9IHtcXG4gICAgZGlzcGxheTogJHZhbHVlO1xcbiAgfVxcbn1cXG5cXG4vLyEgZmxleCBoZWxwZXJzXFxuXFxuLmFsaWduLWl0ZW1zLXN0YXJ0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uYWxpZ24taXRlbXMtZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWxpZ24taXRlbXMtYmFzZWxpbmUge1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZsZXgtZ3Jvdy0wIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxuLmZsZXgtZ3Jvdy0xIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmZsZXgtc2hyaW5rLTAge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5mbGV4LXNocmluay0xIHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG4uZmxleC1ub3dyYXAge1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5mbGV4LXdyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4vLyEgZm9udFxcbi5mb250IHtcXG4gICYtYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB9XFxufVxcblxcbi8vISB0ZXh0XFxuLmVsbGlwc2lzIHtcXG4gIEBpbmNsdWRlIGVsbGlwc2lzKCk7XFxufVxcbi8vIEFsaWdubWVudFxcblxcbi50ZXh0LWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLnRleHQtd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4udGV4dC1ub3dyYXAge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNlbnRlcmVkIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuXFxuLy8gaW50ZXJhY3Rpb25zXFxuLmN1cnNvciB7XFxuICAmLXBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiLFwiLy8/IHNldCB5b3VyIGJyYW5kIGNvbG9yc1xcblxcbiR3aGl0ZTogI2ZmZjtcXG5cXG4kbGlnaHQtZ3JleTogI2Y1ZjVmNTtcXG4kZ3JleTogI2Q3ZDdkNztcXG5cXG4kYmxhY2stc29mdDogIzRBNEE0QTtcXG4kYmxhY2s6ICMwOTA5MGU7XFxuXFxuJGJsdWU6ICMyYzYzOGY7XFxuJHBpbms6ICNmZmYwZjU7XFxuJHllbGxvdzogI2ZmZmFjZDtcXG5cXG4vLz8gb3ZlcnJpZGUgZm9yIHByb2plY3QgY2xhcml0eVxcblxcbiRjb2xvci1wcmltYXJ5OiAkYmx1ZTtcXG4kY29sb3Itc2Vjb25kYXJ5OiAkcGluaztcXG4kY29sb3ItdGVydGlhcnk6ICR5ZWxsb3c7XFxuJHNwYWNlcjogMTBweDtcXG4kc3BhY2VyczogKFxcbiAgMDogMCxcXG4gIDE6IChcXG4gICAgJHNwYWNlciAqIDEsXFxuICApLFxcbiAgMjogKFxcbiAgICAkc3BhY2VyICogMixcXG4gICksXFxuICAzOiAoXFxuICAgICRzcGFjZXIgKiAzLFxcbiAgKSxcXG4pO1xcblwiLFwiLy8hIGltcG9ydCBnb29nbGUgZm9udHNcXG4vLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOjQwMCw0MDBpLDcwMCcpO1xcbi8vIE9SIHVzZSBAZm9udC1mYWNlIGxpa2UgYmVsb3dcXG5cXG4vLyEgaW1wb3J0IGEgY3VzdG9tIGZvbnQgYmVsb3dcXG4vLyBAZm9udC1mYWNlIHtcXG4vLyAgIGZvbnQtZmFtaWx5OiAnTGlicmUtQmFza2VydmlsbGUtUmVnJztcXG4vLyAgIGZvbnQtZGlzcGxheTogZmFsbGJhY2s7XFxuLy8gICBmb250LXN0eWxlOiBub3JtYWw7XFxuLy8gICBzcmM6XFxuLy8gICAgIGxvY2FsKCdMaWJyZSBCYXNrZXJ2aWxsZScpLCAvKiBDaGVja3MgaWYgZm9udCBpcyBvbiB1c2VycyBjb21wdXRlciAqL1xcbi8vICAgICBsb2NhbCgnTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyJyksIC8qIENoZWNrcyBpZiBmb250IGlzIG9uIHVzZXJzIGNvbXB1dGVyICovXFxuLy8gICAgIHVybCgnZm9udHMvbGlicmUtYmFza2VydmlsbGUtdjUtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgLyogQ2hyb21lIDI2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KyAqL1xcbi8vICAgICB1cmwoJ2ZvbnRzL2xpYnJlLWJhc2tlcnZpbGxlLXY1LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpOyAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxuLy8gfVxcblxcbi8vISBzZXQgZm9udCB2YXJpYWJsZXNcXG4kZm9udC1oZWFkaW5nOiAnSGVsdmV0aWNhTmV1ZS1ib2xkJywgRmFsbGJhY2ssICdHZW9yZ2lhJywgc2VyaWY7XFxuJGZvbnQtYm9keTogJ0hlbHZldGljYU5ldWUnO1xcblxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTsgLy8gMXJlbSA9IDEwcHgsIDMuNXJlbSA9IDM1cHg7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1ib2R5O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogJGJsYWNrO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJGZvbnQtaGVhZGluZywgc2VyaWY7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblwiLFwiKjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICRwaW5rO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogJGxpZ2h0LWdyZXk7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogJGJsdWU7XFxufVxcblxcbmltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxudWwge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVwiLFwiaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICRsaWdodC1ncmV5O1xcbn1cXG5cIixcIi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA4NDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNrLWNoYXNlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYW5pbWF0aW9uOiBzay1jaGFzZSAyLjVzIGluZmluaXRlIGxpbmVhciBib3RoOyB9XFxuICAuc2stY2hhc2UtZG90IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UtZG90IDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7IH1cXG4gICAgLnNrLWNoYXNlLWRvdDpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICAgIGhlaWdodDogMjUlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzYzOGY7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdC1iZWZvcmUgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDsgfVxcbiAgICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKSwgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSk6YmVmb3JlIHtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XFxuICAgIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpLCAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKTpiZWZvcmUge1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzOyB9XFxuICAgIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDMpLCAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgzKTpiZWZvcmUge1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cXG4gICAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCksIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44czsgfVxcbiAgICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KSwgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSk6YmVmb3JlIHtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XFxuICAgIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDYpLCAuc2stY2hhc2UtZG90Om50aC1jaGlsZCg2KTpiZWZvcmUge1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlLWRvdCB7XFxuICA4MCUsXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTsgfVxcbiAgMTAwJSxcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvdmlld3MvbG9hZGVyQ2hhc2UvX2xvYWRlci1jaGFzZS5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL3NldHVwL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZDQUE2QyxFQUFBO0VBQzdDO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixvREFBb0QsRUFBQTtJQU5yRDtNQVFHLFlBQVk7TUFDWixjQUFjO01BQ2QsVUFBVTtNQUNWLFdBQVc7TUFDWCx5QkNUUTtNRFVSLG1CQUFtQjtNQUNuQiwyREFBMkQsRUFBQTtJQWQ5RDtNQW9CSyxzQkFBdUMsRUFBQTtJQXBCNUM7TUFvQkssb0JBQXVDLEVBQUE7SUFwQjVDO01Bb0JLLHNCQUF1QyxFQUFBO0lBcEI1QztNQW9CSyxzQkFBdUMsRUFBQTtJQXBCNUM7TUFvQkssc0JBQXVDLEVBQUE7SUFwQjVDO01Bb0JLLHNCQUF1QyxFQUFBOztBQU8vQztFQUNFO0lBQ0UseUJBQXlCLEVBQUEsRUFBQTs7QUFJN0I7RUFDRTs7SUFFRSx5QkFBeUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFO0lBQ0UscUJBQXFCLEVBQUE7RUFFdkI7O0lBRUUsbUJBQW1CLEVBQUEsRUFBQVwiLFwiZmlsZVwiOlwiX2xvYWRlci1jaGFzZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIGxvYWRlciBmcm9tIGh0dHBzOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvXFxuQGltcG9ydCAnLi4vLi4vc2Fzcy9zZXR1cC92YXJpYWJsZXMnO1xcbi5zay1jaGFzZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcXG4gICYtZG90IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UtZG90IDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XFxuICAgICY6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiAnICc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICBoZWlnaHQ6IDI1JTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGFuaW1hdGlvbjogc2stY2hhc2UtZG90LWJlZm9yZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgICB9XFxuICBAZWFjaCAkY2hpbGQgaW4gKDEsIDIsIDMsIDQsIDUsIDYpIHtcXG4gICAgJjpudGgtY2hpbGQoI3skY2hpbGR9KSB7XFxuICAgICAgJixcXG4gICAgICAmOmJlZm9yZSB7XFxuICAgICAgICBhbmltYXRpb24tZGVsYXk6ICgtMS4ycyArIDAuMSAqICRjaGlsZCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2stY2hhc2Uge1xcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2stY2hhc2UtZG90IHtcXG4gIDgwJSxcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlLWRvdC1iZWZvcmUge1xcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcbiAgfVxcbiAgMTAwJSxcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXCIsXCIvLz8gc2V0IHlvdXIgYnJhbmQgY29sb3JzXFxuXFxuJHdoaXRlOiAjZmZmO1xcblxcbiRsaWdodC1ncmV5OiAjZjVmNWY1O1xcbiRncmV5OiAjZDdkN2Q3O1xcblxcbiRibGFjay1zb2Z0OiAjNEE0QTRBO1xcbiRibGFjazogIzA5MDkwZTtcXG5cXG4kYmx1ZTogIzJjNjM4ZjtcXG4kcGluazogI2ZmZjBmNTtcXG4keWVsbG93OiAjZmZmYWNkO1xcblxcbi8vPyBvdmVycmlkZSBmb3IgcHJvamVjdCBjbGFyaXR5XFxuXFxuJGNvbG9yLXByaW1hcnk6ICRibHVlO1xcbiRjb2xvci1zZWNvbmRhcnk6ICRwaW5rO1xcbiRjb2xvci10ZXJ0aWFyeTogJHllbGxvdztcXG4kc3BhY2VyOiAxMHB4O1xcbiRzcGFjZXJzOiAoXFxuICAwOiAwLFxcbiAgMTogKFxcbiAgICAkc3BhY2VyICogMSxcXG4gICksXFxuICAyOiAoXFxuICAgICRzcGFjZXIgKiAyLFxcbiAgKSxcXG4gIDM6IChcXG4gICAgJHNwYWNlciAqIDMsXFxuICApLFxcbik7XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgQXBwRGF0YSB9IGZyb20gJy4uL3R5cGVzL2luZGV4Jztcbi8vIHRoaXMgaXMgdGhlIGNvcmUgb2YgdGhlIFNES1xuaW1wb3J0IHsgZGF0YURpZ2VzdGVyIH0gZnJvbSAnLi9kYXRhRGlnZXN0ZXInO1xuLy8gdGhlc2UgbW9kdWxlcyBhcmUgcGx1Z2lucywgdGhhdCBjb3VsZCBiZSBpbXByb3ZlZCBhbmQgaW5jcmVhc2VkIG92ZXIgdGltZSwgYW5kIGV4dGVuZGluZyB0aGUgU0RLXG5pbXBvcnQgeyBnZXRUb3BBcHBzQnlIb3N0UGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL2dldFRvcEFwcHNCeUhvc3QvZ2V0VG9wQXBwc0J5SG9zdFBsdWdpbic7XG5pbXBvcnQgeyBhZGRBcHBUb0hvc3RzUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL2FkZEFwcFRvSG9zdHMvYWRkQXBwVG9Ib3N0c1BsdWdpbic7XG5pbXBvcnQgeyByZW1vdmVBcHBUb0hvc3RzUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL3JlbW92ZUFwcFRvSG9zdHMvcmVtb3ZlQXBwVG9Ib3N0c1BsdWdpbic7XG4vKipcbiAqIFJldHVybnMgYSBzZXQgb2YgdG9vbHMgdG8gbWFuYWdlIEFwcERhdGFcbiAqIEBwYXJhbSB7QXBwRGF0YVtdfSBsaXN0XG4gKi9cbmV4cG9ydCBjb25zdCBBcGRleFNkayA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGxpc3Q6IEFwcERhdGFbXSA9IGF3YWl0IGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICBjb25zdCB7IGRpZ2VzdEhvc3RBcHBEYXRhLCBob3N0QXBwRW50cnlEaWdlc3RlciwgaG9zdEFwcEVudHJ5R2FyYmFnZXIgfSA9IGRhdGFEaWdlc3RlcigpO1xuICAgIGNvbnN0IG9yZGVyZWRNYXAgPSBkaWdlc3RIb3N0QXBwRGF0YShsaXN0KTtcblxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgIC4uLmdldFRvcEFwcHNCeUhvc3RQbHVnaW4ob3JkZXJlZE1hcCksXG4gICAgICAuLi5hZGRBcHBUb0hvc3RzUGx1Z2luKGxpc3QsIG9yZGVyZWRNYXAsIGhvc3RBcHBFbnRyeURpZ2VzdGVyKSxcbiAgICAgIC4uLnJlbW92ZUFwcFRvSG9zdHNQbHVnaW4obGlzdCwgb3JkZXJlZE1hcCwgaG9zdEFwcEVudHJ5R2FyYmFnZXIpLFxuICAgICAgZ2V0SG9zdHNMaXN0OiAoKSA9PiBBcnJheS5mcm9tKG9yZGVyZWRNYXAua2V5cygpKSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBkZXhTZGs7XG4iLCJpbXBvcnQge1xuICBlbGVtZW50SW5EaWN0aW9uYXJ5U29ydGVyLFxuICBlbGVtZW50SW5Tb3J0ZWREaWN0aW9uYXJ5UmVtb3Zlcixcbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtnZXRDb25kaXRpb25QbHVnaW59IGZyb20gJy4vcGx1Z2lucy9nZXRDb25kaXRpb25QbHVnaW4vZ2V0Q29uZGl0aW9uUGx1Z2luJ1xuaW1wb3J0IHsgQVBQU19PUkRFUl9DT01QQVJBVE9SLCBBUFBTX1BST1BFUlRZX1RPX0NPTVBBUkUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUmFua2VkQXBwc0J5SG9zdCwgQXBwRGF0YSB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBQbHVnaW4gdGhhdCByZXR1cm5zIGFuIG9iamVjdCBvZiBtZXRob2RzIHRoYXQgYXJlIGFibGUgdG8gY3JlYXRlIGEgTWFwIG9mIHJhbmtlZCBBcHBEYXRhIGZvciBlYWNoIEhvc3QsXG4gKiByZW1vdmluZyBhbmQgYWRkaW5nIEFwcERhdGEgb2YgdGhlIHJhbmtpbmdzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXRhRGlnZXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZ2V0Q29uZGl0aW9uIH0gPSBnZXRDb25kaXRpb25QbHVnaW4oKTtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBtZXRob2QgdGhhdCBsb29wcyBpbnRvIGVhY2ggZW50cnkgb2YgYHJhbmtlZEFwcHNCeUhvc3RgIGFuZCBhZGRzIEFwcERhdGEgcmFua2VkIGJ5IHRoZSBgQ29uZGl0aW9uYFxuICAgKiAoZGVmaW5lZCBpbiBgZ2V0Q29uZGl0aW9uYCkgaW4gdGhlIHZhbHVlXG4gICAqIEBwYXJhbSB7UmFua2VkQXBwc0J5SG9zdH0gcmFua2VkQXBwc0J5SG9zdFxuICAgKiBAcmV0dXJucyB7KGFwcERhdGE6QXBwRGF0YSkgPT4gdm9pZH1cbiAgICogX19fXG4gICAqIENvbXBsZXhpdHkgaXMgTyhuMikgYXMgd2Ugb25seSBsb29wIG9uIGVhY2ggaG9zdCwgYW5kIHRoZW4gb24gZWFjaCBlbGVtZW50IG9mIHRoZSByYW5raW5nLlxuICAgKi9cbiAgY29uc3QgaG9zdEFwcEVudHJ5RGlnZXN0ZXIgPSAocmFua2VkQXBwc0J5SG9zdCA6IFJhbmtlZEFwcHNCeUhvc3QpID0+IChhcHBEYXRhOiBBcHBEYXRhKSA9PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZ2V0Q29uZGl0aW9uKEFQUFNfT1JERVJfQ09NUEFSQVRPUiwgQVBQU19QUk9QRVJUWV9UT19DT01QQVJFKTtcbiAgICBjb25zdCB7IGhvc3QgPSBbXSB9ID0gYXBwRGF0YTtcbiAgICBob3N0LmZvckVhY2goZWxlbWVudEluRGljdGlvbmFyeVNvcnRlcihyYW5rZWRBcHBzQnlIb3N0LCBhcHBEYXRhLCBjb25kaXRpb24pKTtcbiAgfTtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBtZXRob2QgdGhhdCBsb29wcyBpbnRvIGVhY2ggZW50cnkgb2YgYHJhbmtlZEFwcHNCeUhvc3RgIGFuZCByZW1vdmVzIHRoZSBjb2luY2lkZW5jZSBvZiB0aGUgQXBwRGF0YSBpbiB0aGUgdmFsdWVcbiAgICogQHBhcmFtIHtSYW5rZWRBcHBzQnlIb3N0fSByYW5rZWRBcHBzQnlIb3N0XG4gICAqIEByZXR1cm5zIHsoQXBwRGF0YTpBcHBEYXRhKSA9PiB2b2lkfVxuICAgKiBfX19cbiAgICogQ29tcGxleGl0eSBpcyBPKG4yKSBhcyB3ZSBvbmx5IGxvb3Agb24gZWFjaCBob3N0LCBhbmQgdGhlbiBvbiBlYWNoIGVsZW1lbnQgb2YgdGhlIHJhbmtpbmcuXG4gICAqL1xuICBjb25zdCBob3N0QXBwRW50cnlHYXJiYWdlciA9IChyYW5rZWRBcHBzQnlIb3N0OiBSYW5rZWRBcHBzQnlIb3N0KSA9PiAoQXBwRGF0YTogQXBwRGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgaG9zdCA9IFtdIH0gPSBBcHBEYXRhO1xuICAgIGhvc3QuZm9yRWFjaChcbiAgICAgIGVsZW1lbnRJblNvcnRlZERpY3Rpb25hcnlSZW1vdmVyKHJhbmtlZEFwcHNCeUhvc3QsIEFwcERhdGEpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyBhIGxpc3Qgb2YgYWxsIHRoZSBBcHBEYXRhIGVsZW1lbnRzIGFuZCBkaXN0cmlidXRlcyB0aGVtIGludG8gYSBNYXAgb2JqZWN0LCBjb250YWluaW5nIGFsbCBob3N0cyBhcyBlbnRyaWVzXG4gICAqIGFuZCBhIHJhbmtlZCBhcnJheSAoYnkgY29uZGl0aW9uIHNwZWNpZmllZCBhdCBgaG9zdEFwcEVudHJ5RGlnZXN0ZXJgIGZ1bmN0aW9uKSBvZiBBcHBEYXRhIGFzIHZhbHVlc1xuICAgKiBAcGFyYW0ge0FwcERhdGFbXX0gbGlzdFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb25kaXRpb25cbiAgICogQHJldHVybnMge1JhbmtlZEFwcHNCeUhvc3R9XG4gICAqIF9fX1xuICAgKiBDb21wbGV4aXR5IGlzIE8objIpLCBhcyBlYWNoIEFwcCBjYW4gaGF2ZSBtYW55IHJlbGF0ZWQgaG9zdHMsIGFuZCBlYWNoIGhvc3QgbmVlZHMgdG8gY2hlY2sgYWxsIEFwcHMuXG4gICAqL1xuICBjb25zdCBkaWdlc3RIb3N0QXBwRGF0YSA9IChsaXN0OiBBcHBEYXRhW10gPSBbXSk6IFJhbmtlZEFwcHNCeUhvc3QgPT4ge1xuICAgIGNvbnN0IHJhbmtlZEFwcHNCeUhvc3QgPSBuZXcgTWFwKCk7XG4gICAgbGlzdC5mb3JFYWNoKGhvc3RBcHBFbnRyeURpZ2VzdGVyKHJhbmtlZEFwcHNCeUhvc3QpKTtcblxuICAgIHJldHVybiByYW5rZWRBcHBzQnlIb3N0O1xuICB9O1xuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBkaWdlc3RIb3N0QXBwRGF0YSxcbiAgICBob3N0QXBwRW50cnlEaWdlc3RlcixcbiAgICBob3N0QXBwRW50cnlHYXJiYWdlcixcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQXBwRGF0YSwgUmFua2VkQXBwc0J5SG9zdCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG4vKipcbiAqIENvbXBvc2l0aW9uIGZ1bmN0aW9uIHRoYXQgYWRkcyBvbmUgQXBwIHRvIHJhbmtlZEFwcHNCeUhvc3QgYW5kIHRvIHRoZSBsaXN0IG9mIEFwcHNcbiAqIElzb2xhdGVkIE1vbGVjdWxhciBmYWN0b3J5XG4gKiBAcGFyYW0ge0FwcERhdGFbXX0gbGlzdCBvZiBBcHBzXG4gKiBAcGFyYW0ge1JhbmtlZEFwcHNCeUhvc3R9IHJhbmtlZEFwcHNCeUhvc3Qgb3JkZXJlZCBNYXAgb2YgQXBwcyBmb3IgZWFjaCBIb3N0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBob3N0QXBwRW50cnlEaWdlc3RlciBhZGRzIGNvcnJlc3BvbmRpbmcgQXBwIChvcmRlcmVkIGJ5IGFwZGV4KSB0byBlYWNoIEhvc3Qgb2YgcmFua2VkQXBwc0J5SG9zdCBNYXBcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEFwcFRvSG9zdHNQbHVnaW4gPSAobGlzdDogQXBwRGF0YVtdLCByYW5rZWRBcHBzQnlIb3N0OiBSYW5rZWRBcHBzQnlIb3N0LCBob3N0QXBwRW50cnlEaWdlc3RlcjogRnVuY3Rpb24pID0+IHtcbiAgaWYgKCEobGlzdCAmJiByYW5rZWRBcHBzQnlIb3N0ICYmIGhvc3RBcHBFbnRyeURpZ2VzdGVyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBwYXJhbWV0ZXJzJyk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxzIGhvc3RBcHBFbnRyeURpZ2VzdGVyIHRvIGluc2VydCBpbnRvIHRoZSByYW5rZWQgYXJyYXkgb2YgQXBwRGF0YSBpbiBlYWNoIG9mIHRoZSBhcHBEYXRhLmhvc3QgZW50cmllcyB0aGUgYGFwcERhdGFgIHJlY2VpdmVkXG4gICAqIEBwYXJhbSB7QXBwRGF0YX0gYXBwRGF0YVxuICAgKi9cbiAgY29uc3QgYWRkQXBwVG9Ib3N0cyA9IChhcHBEYXRhOiBBcHBEYXRhKSA9PiB7XG4gICAgaG9zdEFwcEVudHJ5RGlnZXN0ZXIocmFua2VkQXBwc0J5SG9zdCkoYXBwRGF0YSk7XG4gICAgbGlzdC5wdXNoKGFwcERhdGEpOyAvLyB0aGlzIGxpbmUgcmVwcmVzZW50cyBwZXJzaXN0aW5nIHRoZSBkYXRhIGludG8gdGhlIHNvdXJjZVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgYWRkQXBwVG9Ib3N0cyxcbiAgfSk7XG59O1xuIiwiLy8gY291bGQgYmUgcmV0cmlldmVkIGluIGFueSBzZXJ2aWNlXG5pbXBvcnQgeyBDT01QQVJBVE9SUyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBDb21wYXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuLy8gVE9ETzogdGVzdHMsIGFjY2VwdCBwYXRocyBhbmQgcHJpbWl0aXZlc1xuLy8gVE9ETzogcmVmYWN0b3IgYW5kIHVzZSBzaW1pbGFyIGFwcHJvYWNoIGxpa2UgYGluZGV4T2ZPcmRlcmVkYCBhbmQgdXNlIGBnZXRWYWx1ZWAgYW5kIGBpc0Rlc2NlbmRpbmdgXG5leHBvcnQgY29uc3QgZ2V0Q29uZGl0aW9uUGx1Z2luID0gKCkgPT4ge1xuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgZnVuY3Rpb24gdG8gb3JkZXIgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBAcGFyYW0ge0NvbXBhcmF0b3J9IGNvbXBhcmF0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFBhdGggdG8gdGhlIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIGNvbXBhcmVkXG4gICAqL1xuICBjb25zdCBnZXRDb25kaXRpb24gPSAoY29tcGFyYXRvcjogYW55ICwgcHJvcGVydHkgOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgbWVldHNDb25kaXRpb247XG4gICAgc3dpdGNoIChjb21wYXJhdG9yKSB7XG4gICAgICBjYXNlIENPTVBBUkFUT1JTLmdyZWF0ZXI6XG4gICAgICAgIG1lZXRzQ29uZGl0aW9uID0gKGE6IHsgW3g6IHN0cmluZ106IG51bWJlcjsgfSwgYjogeyBbeDogc3RyaW5nXTogbnVtYmVyOyB9KSA9PiBhW3Byb3BlcnR5XSA8IGJbcHJvcGVydHldO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ09NUEFSQVRPUlMuc21hbGxlcjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1lZXRzQ29uZGl0aW9uID0gKGE6IHsgW3g6IHN0cmluZ106IG51bWJlcjsgfSwgYjogeyBbeDogc3RyaW5nXTogbnVtYmVyOyB9KSA9PiBhW3Byb3BlcnR5XSA+IGJbcHJvcGVydHldO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbWVldHNDb25kaXRpb247XG4gIH07XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBnZXRDb25kaXRpb24sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEFQUFNfQllfSE9TVF9SRVNVTFRTX05VTUJFUiBhcyByZXN1bHRzTnVtYmVyIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IFJhbmtlZEFwcHNCeUhvc3QgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG4vKipcbiAqXG4gKiBAcGFyYW0ge1JhbmtlZEFwcHNCeUhvc3R9IHJhbmtlZEFwcHNCeUhvc3RcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRvcEFwcHNCeUhvc3RQbHVnaW4gPSAocmFua2VkQXBwc0J5SG9zdDogUmFua2VkQXBwc0J5SG9zdCkgPT4ge1xuICBpZiAocmFua2VkQXBwc0J5SG9zdC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnTWFwJykge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIG5lZWRzIHRvIGJlIG9mIHR5cGUgTWFwIGNsYXNzJyk7XG4gIH1cbiAgLyoqXG4gICAqIEdldHMgYSBzbGljZSBvZiB0aGUgUmFua2VkQXBwc0J5SG9zdCBvZiB0aGUgc3BlY2lmaWVkIGhvc3QuIFRoZVxuICAgKiBudW1iZXIgb2YgcmVzdWx0cyBjYW4gYmUgc2V0IGluIGBAL2NvbmZpZ2BcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3ROYW1lXG4gICAqL1xuICBjb25zdCBnZXRUb3BBcHBzQnlIb3N0ID0gKGhvc3ROYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmFua2VkQXBwc0J5SG9zdC5nZXQoaG9zdE5hbWUpO1xuICAgIHJldHVybiBkYXRhPy5zbGljZSgwLCByZXN1bHRzTnVtYmVyKTtcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldFRvcEFwcHNCeUhvc3QsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEFwcERhdGEsIFJhbmtlZEFwcHNCeUhvc3QgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBDb21wb3NpdGlvbiBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgb25lIEFwcCBmcm9tIHJhbmtlZEFwcHNCeUhvc3QgYW5kIGZyb20gdGhlIGxpc3Qgb2YgQXBwc1xuICogSXNvbGF0ZWQgTW9sZWN1bGFyIGZhY3RvcnlcbiAqIEBwYXJhbSB7QXBwRGF0YVtdfSBsaXN0IG9mIEFwcHNcbiAqIEBwYXJhbSB7UmFua2VkQXBwc0J5SG9zdH0gcmFua2VkQXBwc0J5SG9zdCBvcmRlcmVkIE1hcCBvZiBBcHBzIGZvciBlYWNoIEhvc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhvc3RBcHBFbnRyeUdhcmJhZ2VyIHJlbW92ZXMgY29ycmVzcG9uZGluZyBBcHAgKG9yZGVyZWQgYnkgYXBkZXgpIHRvIGVhY2ggSG9zdCBvZiByYW5rZWRBcHBzQnlIb3N0IE1hcFxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlQXBwVG9Ib3N0c1BsdWdpbiA9IChsaXN0OiBBcHBEYXRhW10sIHJhbmtlZEFwcHNCeUhvc3Q6IFJhbmtlZEFwcHNCeUhvc3QsIGhvc3RBcHBFbnRyeUdhcmJhZ2VyOiBGdW5jdGlvbikgPT4ge1xuICBpZiAoIShsaXN0ICYmIHJhbmtlZEFwcHNCeUhvc3QgJiYgaG9zdEFwcEVudHJ5R2FyYmFnZXIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHBhcmFtZXRlcnMnKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbHMgaG9zdEFwcEVudHJ5R2FyYmFnZXIgdG8gcmVtb3ZlIGZyb20gdGhlIHJhbmtlZCBhcnJheSBvZiBBcHBEYXRhIGluIGVhY2ggb2YgdGhlIGFwcERhdGEuaG9zdCBlbnRyaWVzIHRoZSBgYXBwRGF0YWAgcmVjZWl2ZWRcbiAgICogQHBhcmFtIHtBcHBEYXRhfSBhcHBEYXRhXG4gICAqL1xuICBjb25zdCByZW1vdmVBcHBUb0hvc3RzID0gKGFwcERhdGE6IEFwcERhdGEpID0+IHtcbiAgICBob3N0QXBwRW50cnlHYXJiYWdlcihyYW5rZWRBcHBzQnlIb3N0KShhcHBEYXRhKTtcbiAgICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZihhcHBEYXRhKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7IC8vIHRoaXMgbGluZSByZXByZXNlbnRzIHBlcnNpc3RpbmcgdGhlIGRhdGEgaW50byB0aGUgc291cmNlXG4gICAgcmV0dXJuIGFwcERhdGE7IC8vIHJldHVybmluZyB0aGUgZGVsZXRlZCBlbGVtZW50IGp1c3QgaW4gY2FzZSBpdCBpcyBuZWVkZWQgbGF0ZXIgdG8gYmUgcmVzdG9yZWRcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIHJlbW92ZUFwcFRvSG9zdHMsXG4gIH0pO1xufTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9faG9zdHMtbGlzdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7IHRlbXBsYXRlVGFnIH0gZnJvbSAnLi8uLi8uLi90ZW1wbGF0ZXMvdGVtcGxhdGVUYWcnO1xuaW1wb3J0ICcuL19ob3N0cy1saXN0LnNjc3MnO1xuaW1wb3J0IHsgQXBkZXhTZGsgfSBmcm9tICcuLi8uLi9BcGRleC9BcGRleFNkayc7XG5pbXBvcnQgeyBBUFBTX0JZX0hPU1RfRElTUExBWV9OVU1CRVIgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgQXBwRGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IEFwZGV4OiBhbnk7IH1cbn1cblxubGV0IEFwZGV4IDogYW55O1xuZXhwb3J0IGNvbnN0IGhvc3RzTGlzdFBsdWdpbiA9IE9iamVjdC5mcmVlemUoe1xuICBhc3luYyBsb2FkKHVybDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcblxuICAgICAgIEFwZGV4ID0gYXdhaXQgQXBkZXhTZGsodXJsKTtcbiAgICAgIC8vIHVzaW5nIHdpbmRvdyBhcyBhIHN0b3JlXG4gICAgICB3aW5kb3cuQXBkZXggPSBBcGRleDtcblxuICAgICAgcmV0dXJuIEFwZGV4O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9LFxuICBnZXRIb3N0c0h0bWwoaG9zdHNMaXN0OiBzdHJpbmdbXSwgcmVzdWx0c1RvRGlzcGxheT86IG51bWJlcikge1xuICAgIGNvbnN0IGdyaWQgPSBob3N0c0xpc3QucmVkdWNlKChodG1sU3RyaW5nOiBzdHJpbmcsIGhvc3ROYW1lOiBzdHJpbmcpID0+IHsgICAgICBcbiAgICAgIGNvbnN0IGFsbHJhbmtpbmdSZXN1bHRzID0gQXBkZXguZ2V0VG9wQXBwc0J5SG9zdChob3N0TmFtZSk7XG4gICAgICBjb25zdCByYW5raW5nID0gcmVzdWx0c1RvRGlzcGxheVxuICAgICAgICA/IGFsbHJhbmtpbmdSZXN1bHRzLnNsaWNlKDAsIHJlc3VsdHNUb0Rpc3BsYXkpXG4gICAgICAgIDogYWxscmFua2luZ1Jlc3VsdHM7XG4gICAgICBjb25zdCBhcHBzTGlzdExpID0gcmFua2luZ1xuICAgICAgICAubWFwKChlbGVtZW50IDogYW55LCByYW5raW5nSW5kZXggOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBhcGRleCA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgY29udGVudDogU3RyaW5nKGVsZW1lbnQuYXBkZXgpLFxuICAgICAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnYXBkZXggbXgtMycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZW1wbGF0ZVRhZyh7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGVUYWcoe1xuICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgY29udGVudDogW2FwZGV4LCBuYW1lXS5qb2luKCcgJyksXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdhcHBJbkhvc3QgZC1mbGV4IGZsZXgtbm93cmFwIGFsaWduLWl0ZW1zLXN0YXJ0IG15LTInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGtleTogJ2RhdGEtaG9zdC1uYW1lJywgdmFsdWU6IGhvc3ROYW1lIH0sXG4gICAgICAgICAgICAgIHsga2V5OiAnZGF0YS1hcHAtbmFtZScsIHZhbHVlOiBlbGVtZW50Lm5hbWUgfSxcbiAgICAgICAgICAgICAgeyBrZXk6ICdkYXRhLXJhbmtpbmctaW5kZXgnLCB2YWx1ZTogYCR7cmFua2luZ0luZGV4fWAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgICBjb25zdCBhcHBzVWwgPSB0ZW1wbGF0ZVRhZyh7XG4gICAgICAgIGNvbnRlbnQ6IGFwcHNMaXN0TGksXG4gICAgICAgIGF0dHJpYnV0ZXM6IFt7IGtleTogJ2NsYXNzJywgdmFsdWU6ICdob3N0cy1saXN0IG15LTInIH1dLFxuICAgICAgICB0YWc6ICd1bCcsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGhvc3RUaXRsZSA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgY29udGVudDogaG9zdE5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdjbGFzcycsXG4gICAgICAgICAgICB2YWx1ZTogJ2hvc3RUaXRsZSBteC0zIGZvbnQtYm9sZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGtleTogJ2RhdGEtaG9zdC1uYW1lJywgdmFsdWU6IGhvc3ROYW1lIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY2FyZCA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgY29udGVudDogYCR7aG9zdFRpdGxlfSAke2FwcHNVbH1gLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgICAgICAgdmFsdWU6ICdjYXJkIG0tMyBweS0yJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaHRtbFN0cmluZyArIGNhcmQ7XG4gICAgfSwgJycpO1xuICAgIHJldHVybiBncmlkO1xuICB9LFxuICBnZXRIdG1sKCkge1xuICAgIGNvbnN0IHJhbmtlZEhvc3RzID0gQXBkZXguZ2V0SG9zdHNMaXN0KCk7XG5cbiAgICBjb25zdCBncmlkID0gdGhpcy5nZXRIb3N0c0h0bWwocmFua2VkSG9zdHMsIEFQUFNfQllfSE9TVF9ESVNQTEFZX05VTUJFUik7XG4gICAgY29uc3QgYXBwc0J5SG9zdExpc3QgPSB0ZW1wbGF0ZVRhZyh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgICAgIHZhbHVlOiAnaG9zdHMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICAgIHZhbHVlOiAnaG9zdHNMaXN0JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjb250ZW50OiBncmlkLFxuICAgIH0pO1xuICAgIHJldHVybiBhcHBzQnlIb3N0TGlzdDtcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgdGVtcGxhdGVUYWcsIHRlbXBsYXRlQ2hlY2tib3ggfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMnO1xuXG5jb25zdCB1c2VyRW1haWwgPSAnYXZlcnlsb25nZW1haWxhZGRyZXNzQGNvbXBhbnluYW1lLmNvbSc7XG5jb25zdCB0aXRsZUgxID0gdGVtcGxhdGVUYWcoe1xuICBjb250ZW50OiAnQXBwcyBieSBIb3N0JyxcbiAgdGFnOiAnaDEnLFxuICBhdHRyaWJ1dGVzOiBbXG4gICAge1xuICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgdmFsdWU6ICcgZmxleC1zaHJpbmstMCcsXG4gICAgfSxcbiAgXSxcbn0pO1xuY29uc3QgZW1haWxIdG1sID0gdGVtcGxhdGVUYWcoe1xuICB0YWc6ICdzcGFuJyxcbiAgY29udGVudDogdXNlckVtYWlsLFxuICBhdHRyaWJ1dGVzOiBbXG4gICAge1xuICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgdmFsdWU6IHVzZXJFbWFpbCxcbiAgICB9LFxuICBdLFxufSk7XG5jb25zdCB1c2VyID0gdGVtcGxhdGVUYWcoe1xuICB0YWc6ICdwJyxcbiAgY29udGVudDogYGZvciB1c2VyICR7ZW1haWxIdG1sfWAsXG4gIGF0dHJpYnV0ZXM6IFtcbiAgICB7XG4gICAgICBrZXk6ICdjbGFzcycsXG4gICAgICB2YWx1ZTogJ2VsbGlwc2lzIG14LTEnLFxuICAgIH0sXG4gIF0sXG59KTtcbmNvbnN0IGNoZWNrYm94ID0gdGVtcGxhdGVDaGVja2JveCh7XG4gIGNvbnRlbnQ6ICdTaG93IGFzIGFuIGF3ZXNvbWUgZ3JpZCcsXG4gIG5hbWU6ICdsaXN0TW9kZScsXG4gIGF0dHJpYnV0ZXM6IFtcbiAgICB7XG4gICAgICBrZXk6ICdpZCcsXG4gICAgICB2YWx1ZTogJ2xpc3RNb2RlQ2hlY2tib3gnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgdmFsdWU6ICdjdXJzb3ItcG9pbnRlcicsXG4gICAgfSxcbiAgXSxcbiAgbGFiZWxBdHRyaWJ1dGVzOiBbXG4gICAge1xuICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgdmFsdWU6ICd0ZXh0LW5vd3JhcCBtbC0yIGN1cnNvci1wb2ludGVyJyxcbiAgICB9LFxuICBdLFxufSk7XG5leHBvcnQgY29uc3QgbWFpblRpdGxlSHRtbCA9IHRlbXBsYXRlVGFnKHtcbiAgdGFnOiAnaGVhZGVyJyxcbiAgY29udGVudDogW3RpdGxlSDEsIHVzZXIsIGNoZWNrYm94XS5qb2luKCcgJyksXG4gIGF0dHJpYnV0ZXM6IFtcbiAgICB7XG4gICAgICBrZXk6ICdjbGFzcycsXG4gICAgICB2YWx1ZTogJ20tMyBkLWZsZXggYWxpZ24taXRlbXMtZW5kJyxcbiAgICB9LFxuICBdLFxufSk7XG4iLCJleHBvcnQgeyBob3N0c0xpc3RQbHVnaW4gfSBmcm9tICcuL2hvc3RzTGlzdC9ob3N0c0xpc3RQbHVnaW4nO1xuZXhwb3J0IHsgbWFpblRpdGxlSHRtbCB9IGZyb20gJy4vaG9zdHNMaXN0L21haW5UaXRsZUh0bWwnO1xuZXhwb3J0IHsgbW9kYWxTZGsgfSBmcm9tICcuL21vZGFsL21vZGFsU2RrJztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9fbW9kYWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vX21vZGFsLnNjc3MnO1xuLyoqXG4gKiBTZXRzIHRoZSBgaW5uZXJIdG1sYCBwcm9wZXJ0eSBvZiB0aGUgaHRtbCBlbGVtZW50IHdpdGggaWQ9YGlkYFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICovXG5leHBvcnQgY29uc3Qgc2V0SW5uZXJIdG1sID0gKGlkOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiB0ZXh0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbi8qKlxuICogV2hlbiBpbml0aWFsaXNlZCwgYXBwZW5kcyB0byB0aGUgZG9jdW1lbnQuYm9keSBhIChoaWRkZW4gYnkgZGVmYXVsdCkgbW9kYWwgaHRtbCBlbGVtZW50XG4gKiB3aXRoIGEgaGVhZGVyIGFuZCBhIGJvZHksIHRoYXQgY2FuIGJlIG1vZGlmaWVkIHRocm91Z2ggdGhlIGNvcnJlc3BvbmRpbmcgbWV0aG9kc1xuICovXG5leHBvcnQgY29uc3QgbW9kYWxTZGsgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsSWQgPSAnbmV3UmVsaWNNb2RhbCc7XG4gIGNvbnN0IGhlYWRlcklkID0gJ25ld1JlbGljTW9kYWxIZWFkZXInO1xuICBjb25zdCBib2R5SWQgPSAnbmV3UmVsaWNNb2RhbEJvZHknO1xuICBjb25zdCBjbG9zZUlkID0gJ25ld1JlbGljTW9kYWxDbG9zZSc7XG4gIGxldCBtb2RhbE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbElkKTtcbiAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICBjb25zdCBub25lID0gJ25vbmUnO1xuICAgIHRyeSB7XG4gICAgICBtb2RhbE5vZGUuc3R5bGUuZGlzcGxheSA9IG5vbmU7XG4gICAgICByZXR1cm4gbm9uZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrID0gJ2Jsb2NrJztcbiAgICB0cnkge1xuICAgICAgbW9kYWxOb2RlLnN0eWxlLmRpc3BsYXkgPSBibG9jaztcbiAgICAgIHJldHVybiBibG9jaztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBpZiAoIW1vZGFsTm9kZSkge1xuICAgIG1vZGFsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsTm9kZS5pZCA9IG1vZGFsSWQ7XG4gICAgbW9kYWxOb2RlLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgbW9kYWxOb2RlLmlubmVySFRNTCA9IGAgIFxuPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgIDxzcGFuIGlkPVwiJHtjbG9zZUlkfVwiIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuICAgIDxoMiBpZD1cIiR7aGVhZGVySWR9XCI+PC9oMj5cbiAgPC9kaXY+XG4gIDxkaXYgIGlkPVwiJHtib2R5SWR9XCIgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsTm9kZSk7XG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbG9zZUlkKTtcbiAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gaGlkZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbE5vZGUpIHtcbiAgICAgICAgaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHNldEJvZHkgPSAodGV4dDogc3RyaW5nKSA9PiBzZXRJbm5lckh0bWwoYm9keUlkLCB0ZXh0KTtcbiAgY29uc3Qgc2V0SGVhZGVyID0gKHRleHQ6IHN0cmluZykgPT4gc2V0SW5uZXJIdG1sKGhlYWRlcklkLCB0ZXh0KTtcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgaGlkZSxcbiAgICBzZXRCb2R5LFxuICAgIHNldEhlYWRlcixcbiAgICBzaG93LFxuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgQVBQU19CWV9IT1NUX1JFU1VMVFNfTlVNQkVSID0gMjU7XG5leHBvcnQgY29uc3QgQVBQU19CWV9IT1NUX0RJU1BMQVlfTlVNQkVSID0gNTtcbmV4cG9ydCBjb25zdCBDT01QQVJBVE9SUyA9IHtcbiAgZ3JlYXRlcjogJ2dyZWF0ZXInLFxuICBzbWFsbGVyOiAnc21hbGxlcicsXG59O1xuZXhwb3J0IGNvbnN0IEFQUFNfT1JERVJfQ09NUEFSQVRPUiA9IENPTVBBUkFUT1JTLmdyZWF0ZXI7XG5leHBvcnQgY29uc3QgQVBQU19QUk9QRVJUWV9UT19DT01QQVJFID0gJ2FwZGV4JztcbmV4cG9ydCBjb25zdCBBUFBTX09SREVSX0NPTkRJVElPTiA9IChhOiB7IGFwZGV4OiBudW1iZXI7IH0sIGI6IHsgYXBkZXg6IG51bWJlcjsgfSkgPT4gYS5hcGRleCA8IGIuYXBkZXg7XG4iLCJpbXBvcnQgeyBsb2FkZXJDaGFzZVBsdWdpbiB9IGZyb20gJy4vdmlld3MvJztcbmltcG9ydCAnLi90eXBlcydcbmltcG9ydCAnLi9zYXNzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgeyBhcHBzQnlIb3N0cyB9IGZyb20gJy4vdmlld3MnO1xuXG5jb25zdCBsb2FkZXIgPSBsb2FkZXJDaGFzZVBsdWdpbi5sb2FkZXJDaGFzZU5vZGUoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcblxuYXBwc0J5SG9zdHMuaW5pdCgpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IHsgdGVtcGxhdGVUYWcgfSBmcm9tICcuL3RlbXBsYXRlVGFnJztcbmV4cG9ydCB7IHRlbXBsYXRlQ2hlY2tib3ggfSBmcm9tICcuL3RlbXBsYXRlQ2hlY2tib3gnO1xuIiwiaW1wb3J0IHsgc2V0SHRtbEF0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2hlY2tib3ggPSAoe1xuICBjb250ZW50ID0gJycsXG4gIGF0dHJpYnV0ZXMgPSBbXSBhcyBhbnlbXSxcbiAgbGFiZWxBdHRyaWJ1dGVzID0gW10gYXMgYW55W10sXG4gIG5hbWUgPSAnaW5wdXROYW1lJyxcbn0pID0+XG4gIGBcbjxsYWJlbFxuICAke2xhYmVsQXR0cmlidXRlcy5tYXAoc2V0SHRtbEF0dHJpYnV0ZSkuam9pbignICcpfVxuPlxuICA8aW5wdXRcbiAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICBuYW1lPVwiJHtuYW1lfVwiIFxuICAgICR7YXR0cmlidXRlcy5tYXAoc2V0SHRtbEF0dHJpYnV0ZSkuam9pbignICcpfVxuICAvPiAgXG4gICR7Y29udGVudH1cbjwvbGFiZWw+XG4gIGA7XG4iLCJpbXBvcnQgeyBzZXRIdG1sQXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVUYWcgPSAoeyBjb250ZW50ID0gJycsIGF0dHJpYnV0ZXMgPSBbXSBhcyBhbnlbXSwgdGFnID0gJ3NlY3Rpb24nIH0pID0+XG4gIGBcbiAgPCR7dGFnfSBcbiAgICAke2F0dHJpYnV0ZXMubWFwKHNldEh0bWxBdHRyaWJ1dGUpLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgJHtjb250ZW50fVxuICA8LyR7dGFnfT4gIFxuICBgO1xuIiwiaW1wb3J0IHsgaW5zZXJ0QnlPcmRlciB9IGZyb20gJy4uL2luc2VydEJ5T3JkZXIvaW5zZXJ0QnlPcmRlcic7XG4vKipcbiAqIEluc2VydHMgaW4gdGhlIHZhbHVlIChhbiBhcnJheSkgb2YgYSBkaWN0aW9uYXJ5IGFuIGBlbGVtZW50YCBvcmRlcmVkIGJ5IHRoZSBgc29ydEJ5YCBmdW5jdGlvblxuICogQHBhcmFtIHtNYXA8KixbXT59IGRpY3Rpb25hcnlcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudFxuICogQHBhcmFtIHsoYToqLGI6KikgPT4gYm9vbGVhbn0gc29ydEJ5XG4gKi9cbmV4cG9ydCBjb25zdCBlbGVtZW50SW5EaWN0aW9uYXJ5U29ydGVyID0gKGRpY3Rpb25hcnk6IE1hcDxzdHJpbmcsIGFueVtdPiwgZWxlbWVudDogYW55LCBzb3J0Qnk6IChhOiBhbnksIGI6IGFueSkgPT4gYm9vbGVhbikgPT4ge1xuICBpZiAoIShkaWN0aW9uYXJ5ICYmIGVsZW1lbnQgJiYgc29ydEJ5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBhcmd1bWVudHMnKTtcbiAgfVxuICByZXR1cm4gKGtleTogYW55KSA9PiB7XG4gICAgaWYgKGRpY3Rpb25hcnkuaGFzKGtleSkpIHtcbiAgICAgIC8vIHdvcmtpbmcgd2l0aCByZWZlcmVuY2UgdHlwZXMgd2UgZG9uJ3QgbmVlZCB0byByZXNldCB0aGUgYXJyYXlcbiAgICAgIC8vIGJ1dCBzaW1wbHkgbW9kaWZ5IGl0IGluIHBsYWNlXG4gICAgICBjb25zdCBhcnJheU9mRW50cmllcyA9IGRpY3Rpb25hcnkuZ2V0KGtleSk7XG4gICAgICBpbnNlcnRCeU9yZGVyKGFycmF5T2ZFbnRyaWVzLCBlbGVtZW50LCBzb3J0QnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWN0aW9uYXJ5LnNldChrZXksIFtlbGVtZW50XSk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IGluZGV4T2ZPcmRlcmVkIH0gZnJvbSAnLi4vaW5kZXhPZk9yZGVyZWQvaW5kZXhPZk9yZGVyZWQnO1xuXG4vLyBUT0RPOiB0ZXN0cywgYWRkIHRoZSBvcmRlcmVkQnkgcHJvcCAoYSBwYXRoPylcbi8qKlxuICogIEZpbmRzIGFuIGBlbGVtZW50YCBpbiBhIHNvcnRlZCBhcnJheSBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZSBgZGljdGlvbmFyeWBcbiAqIEBwYXJhbSB7TWFwPCosYW55W10+fSBkaWN0aW9uYXJ5XG4gKiBAcGFyYW0geyp9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGVsZW1lbnRJblNvcnRlZERpY3Rpb25hcnlSZW1vdmVyID0gKGRpY3Rpb25hcnk6IE1hcDxhbnksIGFueVtdPiwgZWxlbWVudDogYW55IC8qICwgb3JkZXJlZEJ5ICovKSA9PiB7XG4gIGlmICghKGRpY3Rpb25hcnkgJiYgZWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcGFyYW1ldGVycycpO1xuICB9XG4gIHJldHVybiAoa2V5OiBhbnkpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IGRpY3Rpb25hcnkuZ2V0KGtleSk7XG4gICAgY29uc3QgaW5kZXggPSBpbmRleE9mT3JkZXJlZChzb3J0ZWRBcnJheSwgZWxlbWVudCwgeyBpc0Rlc2NlbmRpbmc6IHRydWUgfSk7XG4gICAgc29ydGVkQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xufTtcbiIsImV4cG9ydCB7IGluc2VydEJ5T3JkZXIgfSBmcm9tICcuL2luc2VydEJ5T3JkZXIvaW5zZXJ0QnlPcmRlcic7XG5leHBvcnQgeyBlbGVtZW50SW5EaWN0aW9uYXJ5U29ydGVyIH0gZnJvbSAnLi9lbGVtZW50SW5EaWN0aW9uYXJ5U29ydGVyL2VsZW1lbnRJbkRpY3Rpb25hcnlTb3J0ZXInO1xuZXhwb3J0IHsgZWxlbWVudEluU29ydGVkRGljdGlvbmFyeVJlbW92ZXIgfSBmcm9tICcuL2VsZW1lbnRJblNvcnRlZERpY3Rpb25hcnlSZW1vdmVyL2VsZW1lbnRJblNvcnRlZERpY3Rpb25hcnlSZW1vdmVyJztcbmV4cG9ydCB7IHNldEh0bWxBdHRyaWJ1dGUgfSBmcm9tICcuL3NldEh0bWxBdHRyaWJ1dGUnO1xuIiwiZXhwb3J0IGNvbnN0IGdldFNhbWVWYWx1ZXMgPSAoY29sbGVjdGlvbjogQXJyYXk8YW55PiA9IFtdLCBlbGVtZW50OiBhbnksIG9wdGlvbnM6IHsgZ2V0VmFsdWU/OiAoZWxlbWVudDogYW55KSA9PiBzdHJpbmcgfCBudW1iZXI7IGlzRGVzY2VuZGluZz86IGJvb2xlYW47ICBpc0xhc3RFbGVtZW50PzogYm9vbGVhbn0gPSB7fSkgPT4ge1xuICBjb25zdCB7IGxlbmd0aCB9ID0gY29sbGVjdGlvbjtcbiAgaWYgKCFsZW5ndGgpIHJldHVybiAwO1xuICBjb25zdCB7IGdldFZhbHVlID0gKHZhbHVlOiBzdHJpbmd8bnVtYmVyKSA9PiB2YWx1ZSwgaXNMYXN0RWxlbWVudCA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICBjb25zdCBtaW5Cb3VuZGFyeSA9IDA7XG4gIGNvbnN0IG1heEJvdW5kYXJ5ID0gbGVuZ3RoIC0gMTtcblxuICBjb25zdCBtYXhMb29wc1RvUmVzb2x2ZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cyKGxlbmd0aCkpO1xuICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGVsZW1lbnQpO1xuICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICBsZXQgbG9vcHMgPSAwO1xuICBsZXQgbWluID0gbWluQm91bmRhcnk7XG4gIGxldCBtYXggPSBtYXhCb3VuZGFyeTtcbiAgLy8gY2hlY2sgZmlyc3QgZWxlbWVudCB0byB0aGUgcmlnaHQgd2l0aCBhIHZhbHVlIGhpZ2hlciB0aGFuIHRoZSBnaXZlbiBvbmVcbiAgaWYgKCFpc0xhc3RFbGVtZW50KSB7XG4gICAgd2hpbGUgKGxvb3BzIDw9IG1heExvb3BzVG9SZXNvbHZlICYmIGluZGV4IDw9IG1heEJvdW5kYXJ5ICYmIGluZGV4ID49IG1pbkJvdW5kYXJ5KSB7XG4gICAgICBpZiAoZ2V0VmFsdWUoY29sbGVjdGlvbltpbmRleF0pID09PSB2YWx1ZSkge1xuICAgICAgICAvLyBtb3ZlIHRvIHRoZSByaWdodFxuICAgICAgICBtaW4gPSBpbmRleDtcbiAgICAgICAgaW5kZXggKz0gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gMik7XG4gICAgICAgIGlmIChtYXggPT09IGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbW92ZSB0byB0aGUgbGVmdFxuICAgICAgICBtYXggPSBpbmRleDtcbiAgICAgICAgaW5kZXggLT0gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gMik7XG4gICAgICAgIGlmIChtaW4gPT09IGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbG9vcHMgKz0gMTtcbiAgICB9XG4gIH1cbiAgLy8gaXNMYXN0RWxlbWVudFxuICB3aGlsZSAobG9vcHMgPD0gbWF4TG9vcHNUb1Jlc29sdmUgJiYgaW5kZXggPD0gbWF4Qm91bmRhcnkgJiYgaW5kZXggPj0gbWluQm91bmRhcnkpIHtcbiAgICBpZiAoZ2V0VmFsdWUoY29sbGVjdGlvbltpbmRleF0pID09PSB2YWx1ZSkge1xuICAgICAgLy8gbW92ZSB0byB0aGUgbGVmdFxuICAgICAgbWF4ID0gaW5kZXg7XG4gICAgICBpbmRleCAtPSBNYXRoLmNlaWwoKG1heCAtIG1pbikgLyAyKTtcbiAgICAgIGlmIChtaW4gPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1vdmUgdG8gdGhlIHJpZ2h0XG4gICAgICBtaW4gPSBpbmRleDtcbiAgICAgIGluZGV4ICs9IE1hdGguY2VpbCgobWF4IC0gbWluKSAvIDIpO1xuICAgICAgaWYgKG1heCA9PT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9vcHMgKz0gMTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuZXhwb3J0IGNvbnN0IGluZGV4T2ZTaW1wbGVPcmRlcmVkID0gKGNvbGxlY3Rpb246IEFycmF5PGFueT4gPSBbXSwgZWxlbWVudDogYW55LCAgb3B0aW9uczogeyBnZXRWYWx1ZT86IChlbGVtZW50OiBhbnkpID0+IHN0cmluZyB8IG51bWJlcjsgaXNEZXNjZW5kaW5nPzogYm9vbGVhbjsgIGlzTGFzdEVsZW1lbnQ/OiBib29sZWFufSA9IHt9ICkgPT4ge1xuICBpZiAoZWxlbWVudCAhPT0gMCAmJiAhZWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBwYXJhbWV0ZXJzJyk7XG4gIH1cbiAgY29uc3QgeyBsZW5ndGggfSA9IGNvbGxlY3Rpb247XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGNvbnN0IHsgZ2V0VmFsdWUgPSAodmFsdWU6IHN0cmluZ3xudW1iZXIpID0+IHZhbHVlLCBpc0Rlc2NlbmRpbmcgPSBmYWxzZSB9ID0gb3B0aW9ucztcblxuICAvLyBhcyBpbiBlYWNoIGxvb3Agd2UgZGlzY2FyZCB0aGUgaGFsZiBvZiB0aGUgcmVzdWx0c1xuICAvLyBpbiB0aGUgd29yc3QgY2FzZSBzY2VuYXJpbyB3ZSB3aWxsIGxvb3AgYSBudW1iZXIgb2YgdGltZXNcbiAgLy8gZXF1YWwgdG8gbiB0aW1lcyBzdWNoIGFzIDJebiA+IGxlbmd0aFxuICBjb25zdCBtYXhMb29wc1RvUmVzb2x2ZSA9IE1hdGguZmxvb3IoTWF0aC5sb2cyKGxlbmd0aCkpO1xuICAvLyBqdXN0IGluIGNhc2Ugc29tZXRoaW5nIGlzIHdyb25nLCB3ZSBraWxsIHRoZSBsb29wIHdoZW4gaW5kZXggaXNcbiAgLy8gb3V0IG9mIGJvdW5kYXJpZXNcbiAgY29uc3QgbWluQm91bmRhcnkgPSAwO1xuICBjb25zdCBtYXhCb3VuZGFyeSA9IGxlbmd0aCAtIDE7XG5cbiAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKTtcbiAgbGV0IGxvb3BzID0gMDtcbiAgbGV0IHN0ZXA7XG4gIGxldCBtaW4gPSBtaW5Cb3VuZGFyeTtcbiAgbGV0IG1heCA9IG1heEJvdW5kYXJ5O1xuICB3aGlsZSAobG9vcHMgPD0gbWF4TG9vcHNUb1Jlc29sdmUgJiYgaW5kZXggPD0gbWF4Qm91bmRhcnkgJiYgaW5kZXggPj0gbWluQm91bmRhcnkpIHtcbiAgICBpZiAoZ2V0VmFsdWUoY29sbGVjdGlvbltpbmRleF0pID09PSBnZXRWYWx1ZShlbGVtZW50KSkge1xuICAgICAgLy8gZmluZCBob3cgbWFueSBlbGVtZW50cyB0byB0aGUgbGVmdCBleGlzdCB3aXRoIHRoZSBzYW1lIHZhbHVlIGFuZCBzZXQgbWluXG4gICAgICBjb25zdCBzYW1lVmFsdWVzVG9MZWZ0ID0gZ2V0U2FtZVZhbHVlcyhjb2xsZWN0aW9uLnNsaWNlKG1pbiwgaW5kZXgpLCBlbGVtZW50LCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGlzTGFzdEVsZW1lbnQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIC8vIGZpbmQgaG93IG1hbnkgZWxlbWVudHMgdG8gdGhlIHJpZ2h0IGFuZCBzZXQgbWF4XG4gICAgICBjb25zdCBzYW1lVmFsdWVzVG9SaWdodCA9IGdldFNhbWVWYWx1ZXMoY29sbGVjdGlvbi5zbGljZShpbmRleCwgbWF4KSwgZWxlbWVudCwge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBpc0xhc3RFbGVtZW50OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgLy8gMS4xIG5vIHNlY29uZGFyeSBjb25kaXRpb24gPT4gZ2V0IHRoZSBmaXJzdCBvbmUgKGxhc3QgZm9yIGRlc2NlbmRpbmcpXG4gICAgICBpZiAoaXNEZXNjZW5kaW5nKSB7XG4gICAgICAgIHJldHVybiBpbmRleCArIHNhbWVWYWx1ZXNUb1JpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1pbiArIHNhbWVWYWx1ZXNUb0xlZnQ7XG4gICAgICAvLyBUT0RPOiAxLjIgY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGhzZWNvbmRhcnkgY29uZGl0aW9uXG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3QgaXNUb1RoZUVuZCA9IGlzRGVzY2VuZGluZ1xuICAgICAgPyBnZXRWYWx1ZShjb2xsZWN0aW9uW2luZGV4XSkgPiBnZXRWYWx1ZShlbGVtZW50KVxuICAgICAgOiBnZXRWYWx1ZShjb2xsZWN0aW9uW2luZGV4XSkgPCBnZXRWYWx1ZShlbGVtZW50KTtcbiAgICBpZiAoaXNUb1RoZUVuZCkge1xuICAgICAgbWluID0gaW5kZXggKyAxO1xuICAgICAgc3RlcCA9IE1hdGguY2VpbCgobWF4IC0gbWluKSAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXggPSBpbmRleCAtIDE7XG4gICAgICBzdGVwID0gLU1hdGguY2VpbCgobWF4IC0gbWluKSAvIDIpO1xuICAgIH1cbiAgICBpZiAobWluID09PSBtYXgpIHtcbiAgICAgIGluZGV4ID0gbWluO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGluZGV4ICs9IHN0ZXA7XG4gICAgbG9vcHMgKz0gMTtcbiAgfVxuICByZXR1cm4gaW5kZXg7XG59Oy8qKlxuICogR2l2ZW4gYW4gb3JkZXJlZCBjb2xsZWN0aW9uIG9mIHByaW1pdGl2ZSB2YWx1ZXMgZm9sbG93aW5nIHRoZSBPcmRlckJ5IGNvbmRpdGlvbixcbiAqIGl0IHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge2FycmF5fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0geyp9IGVsZW1lbnRcbiAqIEBwYXJhbSB7e2dldFZhbHVlOihlbGVtZW50OiopPT5zdHJpbmd8bnVtYmVyLCBpc0Rlc2NlbmRpbmc6IGJvb2xlYW59fSBvcHRpb25zXG4gKiBAcGFyYW0gb3B0aW9ucy5nZXRWYWx1ZSBpdCBzaG91bGQgcmV0dXJuIHRoZSB2YWx1ZSB1c2VkIHRvIG9yZGVyIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gb3B0aW9ucy5pc0Rlc2NlbmRpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGluZGV4T2ZPcmRlcmVkID0gKGNvbGxlY3Rpb246IEFycmF5PGFueT4gPSBbXSwgZWxlbWVudDogYW55LCBvcHRpb25zOiB7IGdldFZhbHVlPzogKGVsZW1lbnQ6IGFueSkgPT4gc3RyaW5nIHwgbnVtYmVyOyBpc0Rlc2NlbmRpbmc6IGJvb2xlYW47IH0pID0+IHtcbiAgaWYgKGVsZW1lbnQgIT09IDAgJiYgIWVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcGFyYW1ldGVycycpO1xuICB9XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBjb2xsZWN0aW9uO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBjb25zdCBvcHRpb25zTGlzdCA9IFtdLmNvbmNhdChvcHRpb25zKTtcbiAgbGV0IG9wdGlvbnNJbmRleCA9IDA7XG4gIGxldCByZXN1bHQ7XG4gIHdoaWxlICghcmVzdWx0ICYmIG9wdGlvbnNJbmRleCA8IG9wdGlvbnNMaXN0Lmxlbmd0aCkge1xuICAgIGlmIChvcHRpb25zTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBpbmRleE9mU2ltcGxlT3JkZXJlZChjb2xsZWN0aW9uLCBlbGVtZW50LCBvcHRpb25zTGlzdFswXSk7XG4gICAgfVxuICAgIG9wdGlvbnNJbmRleCArPSAxO1xuICB9XG4gIHJldHVybiAtMTtcbn07XG4iLCIvKipcbiAqIElzb2xhdGVkIGZ1bmN0aW9uIHRoYXQgaW5zZXJ0cyBhbiBlbGVtZW50IGludG8gYSBjb2xsZWN0aW9uLCB3aGVuIGNvbmRpdGlvbiBpcyBtZXRcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gY29sbGVjdGlvblxuICogQHBhcmFtIHsqfSBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25kaXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGluc2VydEJ5T3JkZXIgPSAoY29sbGVjdGlvbjogQXJyYXk8YW55PiA9IFtdLCBlbGVtZW50OiBhbnksIGNvbmRpdGlvbjogRnVuY3Rpb24gPSAoYSA6IGFueSwgYjogYW55KSA9PiBhID4gYikgPT4ge1xuICBjb25zdCB7IGxlbmd0aCB9ID0gY29sbGVjdGlvbjtcbiAgaWYgKGxlbmd0aCkge1xuICAgIC8vIHdoZW5ldmVyIHRoZSBjb25kaXRpb24gaXMgbWV0LCBpbnNlcnQgdGhlIGVsZW1lbnQgaW50byB0aGUgY29sbGVjdGlvblxuICAgIC8vIFRPRE86IG9wdGltaXplIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBmaW5kIHRoZSBpbmRleCBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cbiAgICAvLyB1c2Ugc2ltaWxhciBhcHByb2FjaCB0byBgaW5kZXhPZk9yZGVyZWRgXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIC8vIHVzaW5nIGEgd2hpbGUgbG9vcCBpbnN0ZWFkIGEgZm9yRWFjaCwgYXMgaXQgY2FuIGJlIGJyZWFrZW4gd2hlbiBjb25kaXRpb24gaXMgbWV0XG4gICAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlzQ29uZGl0aW9uTWV0ID0gY29uZGl0aW9uKGNvbGxlY3Rpb25bY291bnRlcl0sIGVsZW1lbnQpO1xuICAgICAgaWYgKGlzQ29uZGl0aW9uTWV0KSB7XG4gICAgICAgIGNvbGxlY3Rpb24uc3BsaWNlKGNvdW50ZXIsIDAsIGVsZW1lbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW5zZXJ0IGl0IHRoZSBmaXJzdFxuICAgIGNvbGxlY3Rpb24ucHVzaChlbGVtZW50KTtcbiAgfVxuICAvLyBpZiBubyBjb2xsZWN0aW9uIGlzIHByb3ZpZGVkLCB0aGUgY3JlYXRlZCBvbmUgaXMgcmV0dXJuZWRcbiAgcmV0dXJuIGNvbGxlY3Rpb247XG59O1xuIiwiLyoqXG4gKiBHaXZlbiBhIEtleVZhbHVlQXR0cmlidXRlIG9iamVjdCwgaXQgcmV0dXJucyBhbiBIdG1sIGF0dHJpYnV0ZS1saWtlIHN0cmluZ1xuICogdGhhdCBjYW4gYmUgZGlyZWN0bHkgaW5zZXJ0ZWQgaW4gdGhlIG9wZW5pbmcgdGFnXG4gKlxuICogQHBhcmFtIHtLZXlWYWx1ZUF0dHJpYnV0ZX0gcGFyYW0wXG4gKiBfX19cbiAqICAqICMjIyBFeGFtcGxlOlxuICpcbiAqIHtrZXk6ICdpZCcsIHZhbHVlOiAnZm9vJ30gPT4gYGlkPVwiZm9vXCJgXG4gKlxuICogIyMjIFVzYWdlOlxuICpcbiAqIGBgYFxuICogY29uc3Qgc3Bhbkh0bWwgPSBgPHNwYW4gJHtzZXRIdG1sQXR0cmlidXRlKHtrZXk6ICdpZCcsIHZhbHVlOiAnZm9vJ30pfT4gYmFyIDwvc3Bhbj5gO1xuICogYGBgXG4gKiAjIyMgcmVzdWx0OlxuICogc3Bhbkh0bWw7IC8vICc8c3BhbiBpZD1cImZvb1wiPiBiYXIgPC9zcGFuPidcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRIdG1sQXR0cmlidXRlID0gKHsga2V5ID0gJycsIHZhbHVlID0gJycgfSkgPT4gKHZhbHVlLnRyaW0oKSA/IGAke2tleX09XCIke3ZhbHVlfVwiYCA6IGtleSk7XG4iLCJpbXBvcnQgeyBob3N0c0xpc3RQbHVnaW4sIG1haW5UaXRsZUh0bWwsIG1vZGFsU2RrIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZVRhZyB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcyc7XG5cbmV4cG9ydCBjb25zdCBhcHBzQnlIb3N0cyA9IHtcbiAgYXN5bmMgaW5pdCgpe1xuICAgYXdhaXQgaG9zdHNMaXN0UGx1Z2luLmxvYWQoJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9TaWx2ZXJpdW0vdmFuaWxsYS1jaGFsbGVuZ2UvbWFzdGVyL3NyYy9tb2Nrcy9ob3N0LWFwcC1kYXRhLmpzb24nKTtcbiAgIHRoaXMubG9hZCgpO1xuICB9LFxuICBsb2FkKHN0YXRlOiB7IGlzR3JpZE1vZGU6IEJvb2xlYW4gfSA9IHsgaXNHcmlkTW9kZTogZmFsc2UgfSkge1xuICAgIGxldCB7IGlzR3JpZE1vZGUgfSA9IHN0YXRlO1xuICAgIGNvbnN0IGNvbnRhaW5lckh0bWwgPSB0ZW1wbGF0ZVRhZyh7XG4gICAgICBhdHRyaWJ1dGVzOiBbeyBrZXk6ICdjbGFzcycsIHZhbHVlOiAnY29udGFpbmVyJyB9XSxcbiAgICAgIGNvbnRlbnQ6IFttYWluVGl0bGVIdG1sLCBob3N0c0xpc3RQbHVnaW4uZ2V0SHRtbCgpXS5qb2luKCcgJyksXG4gICAgfSk7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29udGFpbmVySHRtbCwgJ3RleHQvaHRtbCcpO1xuXG4gICAgY29uc3QgY2hlY2tib3hOb2RlID0gZG9jLmdldEVsZW1lbnRCeUlkKCdsaXN0TW9kZUNoZWNrYm94Jyk7XG4gICAgY29uc3QgaG9zdHNMaXN0Tm9kZSA9IGRvYy5nZXRFbGVtZW50QnlJZCgnaG9zdHNMaXN0Jyk7XG4gICAgY29uc3QgeyBjaGlsZE5vZGVzOiBsYWJlbE5vZGVzIH0gPSBjaGVja2JveE5vZGUucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBsYWJlbFRleHROb2RlID0gbGFiZWxOb2Rlc1tsYWJlbE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGNsYXNzZXNUb1RvZ2dsZSA9IFsnZ3JpZC1tb2RlJywgJ2QtZmxleCcsICdmbGV4LXdyYXAnXTtcbiAgICBjaGVja2JveE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlzQ2hlY2tib3ggPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGlmIChpc0NoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgaXNHcmlkTW9kZSA9IHRydWU7XG4gICAgICAgIGNsYXNzZXNUb1RvZ2dsZS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBob3N0c0xpc3ROb2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gICAgICAgIC8vIGhvc3RzTGlzdE5vZGUuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzVG9Ub2dnbGUpOyBpcyBub3QgY29tcGF0aWJsZSB3aXRoIElFIDExXG4gICAgICAgIGxhYmVsVGV4dE5vZGUudGV4dENvbnRlbnQgPSAnIFNob3cgYXMgbGlzdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0dyaWRNb2RlID0gZmFsc2U7XG4gICAgICAgIGNsYXNzZXNUb1RvZ2dsZS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBob3N0c0xpc3ROb2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSk7XG4gICAgICAgIGxhYmVsVGV4dE5vZGUudGV4dENvbnRlbnQgPSAnIFNob3cgYXMgYW4gYXdlc29tZSBncmlkJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoaXNHcmlkTW9kZSkge1xuICAgICAgY2hlY2tib3hOb2RlLmNsaWNrKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkgPSBkb2MuYm9keTtcbiAgICBjb25zdCBtb2RhbE1hbmFnZXIgPSBtb2RhbFNkaygpO1xuXG4gICAgY29uc3QgaG9zdE5hbWVOb2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvc3RUaXRsZScpO1xuICAgIEFycmF5LmZyb20oaG9zdE5hbWVOb2RlcykuZm9yRWFjaCgoaG9zdE5hbWVOb2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgaG9zdE5hbWVOb2RlLmNsYXNzTGlzdC5hZGQoJ2N1cnNvci1wb2ludGVyJyk7XG4gICAgICBob3N0TmFtZU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaG9zdE5hbWUgfSA9IGhvc3ROYW1lTm9kZS5kYXRhc2V0O1xuICAgICAgICBtb2RhbE1hbmFnZXIuc2V0SGVhZGVyKGhvc3ROYW1lKTtcblxuICAgICAgICBtb2RhbE1hbmFnZXIuc2V0Qm9keShob3N0c0xpc3RQbHVnaW4uZ2V0SG9zdHNIdG1sKFtob3N0TmFtZV0pKTtcblxuICAgICAgICBtb2RhbE1hbmFnZXIuc2hvdygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkaW5nIG9uZSBldmVudCBsaXN0ZW5lciBmb3IgZWFjaCBob3N0cy1saXN0IG5vZGUuIEl0IGZlZWxzIG1vcmUgc2Vuc2l0aXZlIHRoYW4gb25lIGZvciBhbGwgdGhlIHZpZXdcbiAgICBjb25zdCBob3N0c0xpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG9zdHMtbGlzdCcpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaG9zdHNMaXN0cywgKGhvc3RMaXN0Tm9kZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGhvc3RzTGlzdE5vZGUuY2xhc3NMaXN0LmFkZCgnY3Vyc29yLXBvaW50ZXInKTtcbiAgICAgIGhvc3RMaXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGFwcEluSG9zdDogSFRNTEVsZW1lbnQgPSAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KCcuYXBwSW5Ib3N0Jyk7XG4gICAgICAgIGlmIChhcHBJbkhvc3QpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBjb25zdCB7IGFwcE5hbWUsIHJhbmtpbmdJbmRleCwgaG9zdE5hbWUgfSA9IGFwcEluSG9zdC5kYXRhc2V0O1xuICAgICAgICAgIG1vZGFsTWFuYWdlci5zZXRIZWFkZXIoYXBwTmFtZSk7XG4gICAgICAgICAgY29uc3QgaG9zdEpzb24gPSB3aW5kb3cuQXBkZXguZ2V0VG9wQXBwc0J5SG9zdChob3N0TmFtZSlbcmFua2luZ0luZGV4XTtcbiAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b25JZCA9IGhvc3RKc29uLm5hbWUucmVwbGFjZSgvW1xcV11cXGQvLCAnJyk7XG4gICAgICAgICAgY29uc3QgYnV0dG9uSHRtbCA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICBjb250ZW50OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGVsZXRlQnV0dG9uSWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsga2V5OiAnY2xhc3MnLCB2YWx1ZTogJ2J0bi1kYW5nZXInIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgdmVyc2lvbkh0bWwgPSB0ZW1wbGF0ZVRhZyh7IGNvbnRlbnQ6IGB2ZXJzaW9uOiAke2hvc3RKc29uLnZlcnNpb259YCB9KTtcbiAgICAgICAgICBjb25zdCB3cmFwcGVyID0gdGVtcGxhdGVUYWcoe1xuICAgICAgICAgICAgYXR0cmlidXRlczogW3sga2V5OiAnY2xhc3MnLCB2YWx1ZTogJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicgfV0sXG4gICAgICAgICAgICBjb250ZW50OiB2ZXJzaW9uSHRtbCArIGJ1dHRvbkh0bWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbW9kYWxNYW5hZ2VyLnNldEJvZHkod3JhcHBlcik7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVsZXRlQnV0dG9uSWQpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuQXBkZXgucmVtb3ZlQXBwVG9Ib3N0cyhob3N0SnNvbik7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Y2hlY2tib3hOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RNb2RlQ2hlY2tib3gnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5sb2FkKHsgaXNHcmlkTW9kZTogY3VycmVudGNoZWNrYm94Tm9kZS5jaGVja2VkIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbW9kYWxNYW5hZ2VyLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxufTtcbiIsImV4cG9ydCB7IGFwcHNCeUhvc3RzIH0gZnJvbSAnLi9hcHBzQnlIb3N0cy9hcHBzQnlIb3N0cyc7XG5leHBvcnQgeyBsb2FkZXJDaGFzZVBsdWdpbiB9IGZyb20gJy4vbG9hZGVyQ2hhc2UvbG9hZGVyQ2hhc2UnO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL19sb2FkZXItY2hhc2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vX2xvYWRlci1jaGFzZS5zY3NzJztcblxuY29uc3QgaW5uZXJIdG1sID0gYFxuPGRpdiBjbGFzcz1cImNlbnRlcmVkXCI+XG4gIDxkaXYgY2xhc3M9XCJzay1jaGFzZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzay1jaGFzZS1kb3RcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2stY2hhc2UtZG90XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNrLWNoYXNlLWRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzay1jaGFzZS1kb3RcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2stY2hhc2UtZG90XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNrLWNoYXNlLWRvdFwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmA7XG5leHBvcnQgY29uc3QgbG9hZGVyQ2hhc2VQbHVnaW4gPSB7XG4gIGlubmVySHRtbCgpIHtcbiAgICByZXR1cm4gaW5uZXJIdG1sO1xuICB9LFxuICBsb2FkZXJDaGFzZU5vZGUoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaW5uZXJIdG1sLCAndGV4dC9odG1sJyk7XG4gICAgcmV0dXJuIGRvYy5ib2R5LmZpcnN0Q2hpbGQ7XG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==