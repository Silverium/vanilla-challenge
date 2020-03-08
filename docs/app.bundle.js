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
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/* MEDIA QUERIES */\n/* @include respond-to('mobile') {} */\n/* CENTERING */\n/*\n.parent {\nposition: relative;\n}\n.child {\n@include centered;\n}\n*/\n.btn-danger {\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n  background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);\n  background-color: #f24537;\n  border-radius: 6px;\n  border: 1px solid #d02718;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #810e05; }\n  .btn-danger:hover {\n    background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);\n    background-color: #c62d1f; }\n    .btn-danger:hover:active {\n      position: relative;\n      top: 1px; }\n\n.m-0 {\n  margin: 0; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0; }\n\n.m-1 {\n  margin: 10px; }\n\n.mt-1,\n.my-1 {\n  margin-top: 10px; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 10px; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 10px; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 10px; }\n\n.m-2 {\n  margin: 20px; }\n\n.mt-2,\n.my-2 {\n  margin-top: 20px; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 20px; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 20px; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 20px; }\n\n.m-3 {\n  margin: 30px; }\n\n.mt-3,\n.my-3 {\n  margin-top: 30px; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 30px; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 30px; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 30px; }\n\n.p-0 {\n  padding: 0; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0; }\n\n.p-1 {\n  padding: 10px; }\n\n.pt-1,\n.py-1 {\n  padding-top: 10px; }\n\n.pr-1,\n.px-1 {\n  padding-right: 10px; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 10px; }\n\n.pl-1,\n.px-1 {\n  padding-left: 10px; }\n\n.p-2 {\n  padding: 20px; }\n\n.pt-2,\n.py-2 {\n  padding-top: 20px; }\n\n.pr-2,\n.px-2 {\n  padding-right: 20px; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 20px; }\n\n.pl-2,\n.px-2 {\n  padding-left: 20px; }\n\n.p-3 {\n  padding: 30px; }\n\n.pt-3,\n.py-3 {\n  padding-top: 30px; }\n\n.pr-3,\n.px-3 {\n  padding-right: 30px; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 30px; }\n\n.pl-3,\n.px-3 {\n  padding-left: 30px; }\n\n.d-none {\n  display: none; }\n\n.d-inline {\n  display: inline; }\n\n.d-inline-block {\n  display: inline-block; }\n\n.d-block {\n  display: block; }\n\n.d-table {\n  display: table; }\n\n.d-table-row {\n  display: table-row; }\n\n.d-table-cell {\n  display: table-cell; }\n\n.d-flex {\n  display: flex; }\n\n.d-inline-flex {\n  display: inline-flex; }\n\n.align-items-start {\n  align-items: flex-start; }\n\n.align-items-end {\n  align-items: flex-end; }\n\n.align-items-center {\n  align-items: center; }\n\n.align-items-baseline {\n  align-items: baseline; }\n\n.align-items-stretch {\n  align-items: stretch; }\n\n.justify-content-start {\n  justify-content: flex-start; }\n\n.justify-content-end {\n  justify-content: flex-end; }\n\n.justify-content-center {\n  justify-content: center; }\n\n.justify-content-between {\n  justify-content: space-between; }\n\n.justify-content-around {\n  justify-content: space-around; }\n\n.flex-grow-0 {\n  flex-grow: 0; }\n\n.flex-grow-1 {\n  flex-grow: 1; }\n\n.flex-shrink-0 {\n  flex-shrink: 0; }\n\n.flex-shrink-1 {\n  flex-shrink: 1; }\n\n.flex-nowrap {\n  flex-wrap: nowrap; }\n\n.flex-wrap {\n  flex-wrap: wrap; }\n\n.font-bold {\n  font-weight: 800; }\n\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-wrap {\n  white-space: normal; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.centered {\n  height: 100%;\n  width: 100%;\n  display: flex; }\n  .centered :first-child {\n    margin: auto; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.2; }\n\nbody {\n  font-family: \"HelveticaNeue\";\n  font-size: 1.8rem;\n  color: #09090e; }\n\nh1 {\n  font-family: \"HelveticaNeue-bold\", Fallback, \"Georgia\", serif, serif;\n  font-size: 3.5rem;\n  font-weight: 400; }\n\n*::selection {\n  background: #fff0f5; }\n\nhtml,\nbody {\n  height: 100%;\n  background: #f5f5f5; }\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0; }\n\n.wrapper {\n  max-width: 100%; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0; }\n\np {\n  margin: 0; }\n\na {\n  text-decoration: none;\n  color: #2c638f; }\n\nimg {\n  display: block; }\n\nul {\n  padding: 0;\n  list-style: none; }\n\nheader {\n  background: #f5f5f5; }\n\n.container {\n  max-width: 840px;\n  margin: auto; }\n", "",{"version":3,"sources":["/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_normalize.scss","index.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_clearfix.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_border-box.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/utils/_mixins.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/utils/_buttons.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/utils/_helpers.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/setup/_variables.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/global/_typography.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/global/_global.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/layout/_header.scss","/Users/solde/Workspace/vanilla-challenge/src/sass/layout/_grid.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+ECA+E;ADG/E;;;ECCE;ADIF;EACE,iBAAiB;EAAE,MAAA;EACnB,8BAA8B;EAAE,MAAA,EAAO;;AAGzC;+ECD+E;ADI/E;;ECDE;ADKF;EACE,SAAS,EAAA;;AAGX;;ECHE;ADOF;EACE,cAAc,EAAA;;AAGhB;;;ECJE;ADSF;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;+ECR+E;ADW/E;;;ECPE;ADYF;EACE,uBAAuB;EAAE,MAAA;EACzB,SAAS;EAAE,MAAA;EACX,iBAAiB;EAAE,MAAA,EAAO;;AAG5B;;;ECNE;ADWF;EACE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;+ECR+E;ADW/E;;ECRE;ADYF;EACE,6BAA6B,EAAA;;AAG/B;;;ECTE;ADcF;EACE,mBAAmB;EAAE,MAAA;EACrB,0BAA0B;EAAE,MAAA;EAC5B,iCAAiC;EAAE,MAAA,EAAO;;AAG5C;;ECTE;ADaF;;EAEE,mBAAmB,EAAA;;AAGrB;;;ECVE;ADeF;;;EAGE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;;ECXE;ADeF;EACE,cAAc,EAAA;;AAGhB;;;ECZE;ADiBF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;;AAG1B;EACE,eAAe,EAAA;;AAGjB;EACE,WAAW,EAAA;;AAGb;+EClB+E;ADqB/E;;EClBE;ADsBF;EACE,kBAAkB,EAAA;;AAGpB;+ECrB+E;ADwB/E;;;ECpBE;ADyBF;;;;;EAKE,oBAAoB;EAAE,MAAA;EACtB,eAAe;EAAE,MAAA;EACjB,iBAAiB;EAAE,MAAA;EACnB,SAAS;EAAE,MAAA,EAAO;;AAGpB;;;EClBE;ADuBF;;EACQ,MAAA;EACN,iBAAiB,EAAA;;AAGnB;;;ECnBE;ADwBF;;EACS,MAAA;EACP,oBAAoB,EAAA;;AAGtB;;ECrBE;ADyBF;;;;EAIE,0BAA0B,EAAA;;AAG5B;;ECvBE;AD2BF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;ECzBE;AD6BF;;;;EAIE,8BAA8B,EAAA;;AAGhC;;EC3BE;AD+BF;EACE,8BAA8B,EAAA;;AAGhC;;;;;EC1BE;ADiCF;EACE,sBAAsB;EAAE,MAAA;EACxB,cAAc;EAAE,MAAA;EAChB,cAAc;EAAE,MAAA;EAChB,eAAe;EAAE,MAAA;EACjB,UAAU;EAAE,MAAA;EACZ,mBAAmB;EAAE,MAAA,EAAO;;AAG9B;;ECzBE;AD6BF;EACE,wBAAwB,EAAA;;AAG1B;;EC3BE;AD+BF;EACE,cAAc,EAAA;;AAGhB;;;EC5BE;AACF;;EDkCE,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA,EAAO;;AAGrB;;EC7BE;AACF;;EDkCE,YAAY,EAAA;;AAGd;;;EC9BE;AACF;EDmCE,6BAA6B;EAAE,MAAA;EAC/B,oBAAoB;EAAE,MAAA,EAAO;;AAG/B;;EC/BE;AACF;EDmCE,wBAAwB,EAAA;;AAG1B;;;EChCE;ADqCF;EACE,0BAA0B;EAAE,MAAA;EAC5B,aAAa;EAAE,MAAA,EAAO;;AAGxB;+EClC+E;ADqC/E;;EClCE;ADsCF;EACE,cAAc,EAAA;;AAGhB;;ECpCE;ADwCF;EACE,kBAAkB,EAAA;;AAGpB;+ECvC+E;AD0C/E;;ECvCE;AD2CF;EACE,aAAa,EAAA;;AAGf;;ECzCE;AACF;ED6CE,aAAa,EAAA;;AE3Vf;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,WAAW;EACX,SAAS,EAAA;;ACLX;EACE,sBAAsB,EAAA;;AAGxB;EACE,mBAAmB,EAAA;;ACLrB,kBAAA;AAkCA,qCAAA;AAGA,cAAA;AASA;;;;;;;CH0RC;AItUC;EACE,yCAAyC;EACzC,gEAAgE;EAChE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;EACrB,gCAAgC,EAAA;EAdjC;IAgBG,gEAAgE;IAChE,yBAAyB,EAAA;IAjB5B;MAmBK,kBAAkB;MAClB,QAAQ,EAAA;;ACnBZ;EACE,SCiBA,EAAA;;ADfF;;EAEE,aCaA,EAAA;;ADXF;;EAEE,eCSA,EAAA;;ADPF;;EAEE,gBCKA,EAAA;;ADHF;;EAEE,cCCA,EAAA;;ADlBF;EACE,YCmBS,EAAA;;ADjBX;;EAEE,gBCeS,EAAA;;ADbX;;EAEE,kBCWS,EAAA;;ADTX;;EAEE,mBCOS,EAAA;;ADLX;;EAEE,iBCGS,EAAA;;ADpBX;EACE,YCsBS,EAAA;;ADpBX;;EAEE,gBCkBS,EAAA;;ADhBX;;EAEE,kBCcS,EAAA;;ADZX;;EAEE,mBCUS,EAAA;;ADRX;;EAEE,iBCMS,EAAA;;ADvBX;EACE,YCyBS,EAAA;;ADvBX;;EAEE,gBCqBS,EAAA;;ADnBX;;EAEE,kBCiBS,EAAA;;ADfX;;EAEE,mBCaS,EAAA;;ADXX;;EAEE,iBCSS,EAAA;;AD1BX;EACE,UCiBA,EAAA;;ADfF;;EAEE,cCaA,EAAA;;ADXF;;EAEE,gBCSA,EAAA;;ADPF;;EAEE,iBCKA,EAAA;;ADHF;;EAEE,eCCA,EAAA;;ADlBF;EACE,aCmBS,EAAA;;ADjBX;;EAEE,iBCeS,EAAA;;ADbX;;EAEE,mBCWS,EAAA;;ADTX;;EAEE,oBCOS,EAAA;;ADLX;;EAEE,kBCGS,EAAA;;ADpBX;EACE,aCsBS,EAAA;;ADpBX;;EAEE,iBCkBS,EAAA;;ADhBX;;EAEE,mBCcS,EAAA;;ADZX;;EAEE,oBCUS,EAAA;;ADRX;;EAEE,kBCMS,EAAA;;ADvBX;EACE,aCyBS,EAAA;;ADvBX;;EAEE,iBCqBS,EAAA;;ADnBX;;EAEE,mBCiBS,EAAA;;ADfX;;EAEE,oBCaS,EAAA;;ADXX;;EAEE,kBCSS,EAAA;;ADCb;EACE,aALW,EAAA;;AAIb;EACE,eALmB,EAAA;;AAIrB;EACE,qBALiC,EAAA;;AAInC;EACE,cALwC,EAAA;;AAI1C;EACE,cAL+C,EAAA;;AAIjD;EACE,kBAL0D,EAAA;;AAI5D;EACE,mBALsE,EAAA;;AAIxE;EACE,aAL4E,EAAA;;AAI9E;EACE,oBAJS,EAAA;;AAUb;EACE,uBAAuB,EAAA;;AAEzB;EACE,qBAAqB,EAAA;;AAEvB;EACE,mBAAmB,EAAA;;AAErB;EACE,qBAAqB,EAAA;;AAEvB;EACE,oBAAoB,EAAA;;AAEtB;EACE,2BAA2B,EAAA;;AAE7B;EACE,yBAAyB,EAAA;;AAE3B;EACE,uBAAuB,EAAA;;AAEzB;EACE,8BAA8B,EAAA;;AAEhC;EACE,6BAA6B,EAAA;;AAG/B;EACE,YAAY,EAAA;;AAEd;EACE,YAAY,EAAA;;AAEd;EACE,cAAc,EAAA;;AAEhB;EACE,cAAc,EAAA;;AAEhB;EACE,iBAAiB,EAAA;;AAEnB;EACE,eAAe,EAAA;;AAKf;EACE,gBAAgB,EAAA;;AAKpB;EFtCE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB,EAAA;;AEyCrB;EACE,mBAAmB,EAAA;;AAErB;EACE,mBAAmB,EAAA;;AAErB;EACE,mBAAmB,EAAA;;AAGrB;EACE,YAAY;EACZ,WAAW;EACX,aAAa,EAAA;EAHf;IAKI,YAAY,EAAA;;AAMd;EACE,eAAe,EAAA;;AErGnB;EACE,gBAAgB;EAChB,gBAAgB,EAAA;;AAGlB;EACE,4BATyB;EAUzB,iBAAiB;EACjB,cDrBa,EAAA;;ACwBf;EACE,oEAAiC;EACjC,iBAAiB;EACjB,gBAAgB,EAAA;;ACnClB;EACE,mBFUY,EAAA;;AEPd;;EAEE,YAAY;EACZ,mBFHkB,EAAA;;AEMpB;EACE,WAAW;EACX,gBAAgB;EAChB,SAAS,EAAA;;AAGX;EACE,eAAe,EAAA;;AAGjB;EACE,SAAS,EAAA;;AAGX;EACE,SAAS,EAAA;;AAGX;EACE,qBAAqB;EACrB,cFpBY,EAAA;;AEuBd;EACE,cAAc,EAAA;;AAGhB;EACE,UAAU;EACV,gBAAgB,EAAA;;ACvClB;EACE,mBHGkB,EAAA;;AIJpB;EACE,gBAAgB;EAChB,YAAY,EAAA","file":"index.scss","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/* MEDIA QUERIES */\n/* @include respond-to('mobile') {} */\n/* CENTERING */\n/*\n.parent {\nposition: relative;\n}\n.child {\n@include centered;\n}\n*/\n.btn-danger {\n  box-shadow: inset 0px 1px 0px 0px #f5978e;\n  background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);\n  background-color: #f24537;\n  border-radius: 6px;\n  border: 1px solid #d02718;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #810e05; }\n  .btn-danger:hover {\n    background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);\n    background-color: #c62d1f; }\n    .btn-danger:hover:active {\n      position: relative;\n      top: 1px; }\n\n.m-0 {\n  margin: 0; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0; }\n\n.m-1 {\n  margin: 10px; }\n\n.mt-1,\n.my-1 {\n  margin-top: 10px; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 10px; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 10px; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 10px; }\n\n.m-2 {\n  margin: 20px; }\n\n.mt-2,\n.my-2 {\n  margin-top: 20px; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 20px; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 20px; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 20px; }\n\n.m-3 {\n  margin: 30px; }\n\n.mt-3,\n.my-3 {\n  margin-top: 30px; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 30px; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 30px; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 30px; }\n\n.p-0 {\n  padding: 0; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0; }\n\n.p-1 {\n  padding: 10px; }\n\n.pt-1,\n.py-1 {\n  padding-top: 10px; }\n\n.pr-1,\n.px-1 {\n  padding-right: 10px; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 10px; }\n\n.pl-1,\n.px-1 {\n  padding-left: 10px; }\n\n.p-2 {\n  padding: 20px; }\n\n.pt-2,\n.py-2 {\n  padding-top: 20px; }\n\n.pr-2,\n.px-2 {\n  padding-right: 20px; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 20px; }\n\n.pl-2,\n.px-2 {\n  padding-left: 20px; }\n\n.p-3 {\n  padding: 30px; }\n\n.pt-3,\n.py-3 {\n  padding-top: 30px; }\n\n.pr-3,\n.px-3 {\n  padding-right: 30px; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 30px; }\n\n.pl-3,\n.px-3 {\n  padding-left: 30px; }\n\n.d-none {\n  display: none; }\n\n.d-inline {\n  display: inline; }\n\n.d-inline-block {\n  display: inline-block; }\n\n.d-block {\n  display: block; }\n\n.d-table {\n  display: table; }\n\n.d-table-row {\n  display: table-row; }\n\n.d-table-cell {\n  display: table-cell; }\n\n.d-flex {\n  display: flex; }\n\n.d-inline-flex {\n  display: inline-flex; }\n\n.align-items-start {\n  align-items: flex-start; }\n\n.align-items-end {\n  align-items: flex-end; }\n\n.align-items-center {\n  align-items: center; }\n\n.align-items-baseline {\n  align-items: baseline; }\n\n.align-items-stretch {\n  align-items: stretch; }\n\n.justify-content-start {\n  justify-content: flex-start; }\n\n.justify-content-end {\n  justify-content: flex-end; }\n\n.justify-content-center {\n  justify-content: center; }\n\n.justify-content-between {\n  justify-content: space-between; }\n\n.justify-content-around {\n  justify-content: space-around; }\n\n.flex-grow-0 {\n  flex-grow: 0; }\n\n.flex-grow-1 {\n  flex-grow: 1; }\n\n.flex-shrink-0 {\n  flex-shrink: 0; }\n\n.flex-shrink-1 {\n  flex-shrink: 1; }\n\n.flex-nowrap {\n  flex-wrap: nowrap; }\n\n.flex-wrap {\n  flex-wrap: wrap; }\n\n.font-bold {\n  font-weight: 800; }\n\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-wrap {\n  white-space: normal; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.centered {\n  height: 100%;\n  width: 100%;\n  display: flex; }\n  .centered :first-child {\n    margin: auto; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.2; }\n\nbody {\n  font-family: \"HelveticaNeue\";\n  font-size: 1.8rem;\n  color: #09090e; }\n\nh1 {\n  font-family: \"HelveticaNeue-bold\", Fallback, \"Georgia\", serif, serif;\n  font-size: 3.5rem;\n  font-weight: 400; }\n\n*::selection {\n  background: #fff0f5; }\n\nhtml,\nbody {\n  height: 100%;\n  background: #f5f5f5; }\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0; }\n\n.wrapper {\n  max-width: 100%; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0; }\n\np {\n  margin: 0; }\n\na {\n  text-decoration: none;\n  color: #2c638f; }\n\nimg {\n  display: block; }\n\nul {\n  padding: 0;\n  list-style: none; }\n\nheader {\n  background: #f5f5f5; }\n\n.container {\n  max-width: 840px;\n  margin: auto; }\n",".clearfix:after {\n  visibility: hidden;\n  display: block;\n  content: \"\";\n  clear: both;\n  height: 0;\n}","html {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}","/* MEDIA QUERIES */\n@mixin respond-to($breakpoint) {\n  @if $breakpoint==\"mobile\" {\n    @media (max-width: 480px) {\n      @content;\n    }\n  }\n\n  @else if $breakpoint==\"tablet\" {\n    @media (max-width: 769px) {\n      @content;\n    }\n  }\n\n  @else if $breakpoint==\"desktop\" {\n    @media (max-width: 969px) {\n      @content;\n    }\n  }\n\n  @else if $breakpoint==\"wrapper\" {\n    @media (max-width: 1170px) {\n      @content;\n    }\n  }\n\n  @else {\n    @media ($breakpoint) {\n      @content;\n    }\n  }\n}\n\n//! Example usage\n/* @include respond-to('mobile') {} */\n\n\n/* CENTERING */\n@mixin centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n//! Example usage\n/*\n.parent {\nposition: relative;\n}\n.child {\n@include centered;\n}\n*/\n\n//! ellipsis\n@mixin ellipsis() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}","//! created from https://www.bestcssbuttongenerator.com/#/33\n.btn {\n  &-danger {\n    box-shadow: inset 0px 1px 0px 0px #f5978e;\n    background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);\n    background-color: #f24537;\n    border-radius: 6px;\n    border: 1px solid #d02718;\n    display: inline-block;\n    cursor: pointer;\n    color: #ffffff;\n    font-family: Arial;\n    font-size: 15px;\n    font-weight: bold;\n    padding: 6px 24px;\n    text-decoration: none;\n    text-shadow: 0px 1px 0px #810e05;\n    &:hover {\n      background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);\n      background-color: #c62d1f;\n      &:active {\n        position: relative;\n        top: 1px;\n      }\n    }\n  }\n}\n","//! margin and padding\n@each $prop, $abbrev in (margin: m, padding: p) {\n  @each $size, $length in $spacers {\n    .#{$abbrev}-#{$size} {\n      #{$prop}: $length;\n    }\n    .#{$abbrev}t-#{$size},\n    .#{$abbrev}y-#{$size} {\n      #{$prop}-top: $length;\n    }\n    .#{$abbrev}r-#{$size},\n    .#{$abbrev}x-#{$size} {\n      #{$prop}-right: $length;\n    }\n    .#{$abbrev}b-#{$size},\n    .#{$abbrev}y-#{$size} {\n      #{$prop}-bottom: $length;\n    }\n    .#{$abbrev}l-#{$size},\n    .#{$abbrev}x-#{$size} {\n      #{$prop}-left: $length;\n    }\n  }\n}\n\n//! display\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex,\n  inline-flex !default;\n\n@each $value in $displays {\n  .d-#{$value} {\n    display: $value;\n  }\n}\n\n//! flex helpers\n\n.align-items-start {\n  align-items: flex-start;\n}\n.align-items-end {\n  align-items: flex-end;\n}\n.align-items-center {\n  align-items: center;\n}\n.align-items-baseline {\n  align-items: baseline;\n}\n.align-items-stretch {\n  align-items: stretch;\n}\n.justify-content-start {\n  justify-content: flex-start;\n}\n.justify-content-end {\n  justify-content: flex-end;\n}\n.justify-content-center {\n  justify-content: center;\n}\n.justify-content-between {\n  justify-content: space-between;\n}\n.justify-content-around {\n  justify-content: space-around;\n}\n\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.flex-grow-1 {\n  flex-grow: 1;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-shrink-1 {\n  flex-shrink: 1;\n}\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n//! font\n.font {\n  &-bold {\n    font-weight: 800;\n  }\n}\n\n//! text\n.ellipsis {\n  @include ellipsis();\n}\n// Alignment\n\n.text-justify {\n  text-align: justify;\n}\n.text-wrap {\n  white-space: normal;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.centered {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  :first-child {\n    margin: auto;\n  }\n}\n\n// interactions\n.cursor {\n  &-pointer {\n    cursor: pointer;\n  }\n}\n","//? set your brand colors\n\n$white: #fff;\n\n$light-grey: #f5f5f5;\n$grey: #d7d7d7;\n\n$black-soft: #4A4A4A;\n$black: #09090e;\n\n$blue: #2c638f;\n$pink: #fff0f5;\n$yellow: #fffacd;\n\n//? override for project clarity\n\n$color-primary: $blue;\n$color-secondary: $pink;\n$color-tertiary: $yellow;\n$spacer: 10px;\n$spacers: (\n  0: 0,\n  1: (\n    $spacer * 1,\n  ),\n  2: (\n    $spacer * 2,\n  ),\n  3: (\n    $spacer * 3,\n  ),\n);\n","//! import google fonts\n// @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700');\n// OR use @font-face like below\n\n//! import a custom font below\n// @font-face {\n//   font-family: 'Libre-Baskerville-Reg';\n//   font-display: fallback;\n//   font-style: normal;\n//   src:\n//     local('Libre Baskerville'), /* Checks if font is on users computer */\n//     local('LibreBaskerville-Regular'), /* Checks if font is on users computer */\n//     url('fonts/libre-baskerville-v5-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n//     url('fonts/libre-baskerville-v5-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n// }\n\n//! set font variables\n$font-heading: 'HelveticaNeue-bold', Fallback, 'Georgia', serif;\n$font-body: 'HelveticaNeue';\n\n\nhtml {\n  font-size: 62.5%; // 1rem = 10px, 3.5rem = 35px;\n  line-height: 1.2;\n}\n\nbody {\n  font-family: $font-body;\n  font-size: 1.8rem;\n  color: $black;\n}\n\nh1 {\n  font-family: $font-heading, serif;\n  font-size: 3.5rem;\n  font-weight: 400;\n}\n","*::selection {\n  background: $pink;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background: $light-grey;\n}\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0;\n}\n\n.wrapper {\n  max-width: 100%;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\n\np {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: $blue;\n}\n\nimg {\n  display: block;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}","header {\n  background: $light-grey;\n}\n",".container {\n  max-width: 840px;\n  margin: auto;\n}\n"]}]);
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
exports.__esModule = true;
var dataDigester_1 = __webpack_require__(/*! ./dataDigester */ "./src/Apdex/dataDigester.ts");
var getTopAppsByHostPlugin_1 = __webpack_require__(/*! ./plugins/getTopAppsByHost/getTopAppsByHostPlugin */ "./src/Apdex/plugins/getTopAppsByHost/getTopAppsByHostPlugin.ts");
var addAppToHostsPlugin_1 = __webpack_require__(/*! ./plugins/addAppToHosts/addAppToHostsPlugin */ "./src/Apdex/plugins/addAppToHosts/addAppToHostsPlugin.ts");
var removeAppToHostsPlugin_1 = __webpack_require__(/*! ./plugins/removeAppToHosts/removeAppToHostsPlugin */ "./src/Apdex/plugins/removeAppToHosts/removeAppToHostsPlugin.ts");
exports.ApdexSdk = function (list) {
    if (list === void 0) { list = []; }
    var _a = dataDigester_1.dataDigester(), digestHostAppData = _a.digestHostAppData, hostAppEntryDigester = _a.hostAppEntryDigester, hostAppEntryGarbager = _a.hostAppEntryGarbager;
    var orderedMap = digestHostAppData(list);
    return Object.freeze(__assign(__assign(__assign(__assign({}, getTopAppsByHostPlugin_1.getTopAppsByHostPlugin(orderedMap)), addAppToHostsPlugin_1.addAppToHostsPlugin(list, orderedMap, hostAppEntryDigester)), removeAppToHostsPlugin_1.removeAppToHostsPlugin(list, orderedMap, hostAppEntryGarbager)), { getHostsList: function () { return Array.from(orderedMap.keys()); } }));
};
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
exports.hostsListPlugin = Object.freeze({
    load: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var list, Apdex, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, fetch(url)
                                .then(function (response) {
                                return response.json();
                            })];
                    case 1:
                        list = _a.sent();
                        Apdex = ApdexSdk_1.ApdexSdk(list);
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
            var allrankingResults = window.Apdex.getTopAppsByHost(hostName);
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
        var rankedHosts = window.Apdex.getHostsList();
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
views_2.appsByHosts.load();


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
    load: function (state) {
        if (state === void 0) { state = { isGridMode: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var isLoaded, isGridMode, containerHtml, parser, doc, checkboxNode, hostsListNode, labelNodes, labelTextNode, classesToToggle, modalManager, hostNameNodes, hostsLists;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, components_1.hostsListPlugin.load('https://raw.githubusercontent.com/Silverium/vanilla-challenge/master/src/mocks/host-app-data.json')];
                    case 1:
                        isLoaded = _a.sent();
                        if (!isLoaded) {
                            throw new Error('could not load data');
                        }
                        isGridMode = state.isGridMode;
                        containerHtml = templates_1.templateTag({
                            attributes: [{ key: 'class', value: 'container' }],
                            content: [components_1.mainTitleHtml, components_1.hostsListPlugin.getHtml()].join(' '),
                        });
                        parser = new DOMParser();
                        doc = parser.parseFromString(containerHtml, 'text/html');
                        checkboxNode = doc.getElementById('listModeCheckbox');
                        hostsListNode = doc.getElementById('hostsList');
                        labelNodes = checkboxNode.parentElement.childNodes;
                        labelTextNode = labelNodes[labelNodes.length - 1];
                        classesToToggle = ['grid-mode', 'd-flex', 'flex-wrap'];
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
                        modalManager = components_1.modalSdk();
                        hostNameNodes = document.getElementsByClassName('hostTitle');
                        Array.from(hostNameNodes).forEach(function (hostNameNode) {
                            hostNameNode.classList.add('cursor-pointer');
                            hostNameNode.addEventListener('click', function () {
                                var hostName = hostNameNode.dataset.hostName;
                                modalManager.setHeader(hostName);
                                modalManager.setBody(components_1.hostsListPlugin.getHostsHtml([hostName]));
                                modalManager.show();
                            });
                        });
                        hostsLists = document.getElementsByClassName('hosts-list');
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
                        return [2];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9zdHNMaXN0L19ob3N0cy1saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvX21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9hZGVyQ2hhc2UvX2xvYWRlci1jaGFzZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcGRleC9BcGRleFNkay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBkZXgvZGF0YURpZ2VzdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9BcGRleC9wbHVnaW5zL2FkZEFwcFRvSG9zdHMvYWRkQXBwVG9Ib3N0c1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBkZXgvcGx1Z2lucy9nZXRDb25kaXRpb25QbHVnaW4vZ2V0Q29uZGl0aW9uUGx1Z2luLnRzIiwid2VicGFjazovLy8uL3NyYy9BcGRleC9wbHVnaW5zL2dldFRvcEFwcHNCeUhvc3QvZ2V0VG9wQXBwc0J5SG9zdFBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBkZXgvcGx1Z2lucy9yZW1vdmVBcHBUb0hvc3RzL3JlbW92ZUFwcFRvSG9zdHNQbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9zdHNMaXN0L19ob3N0cy1saXN0LnNjc3M/ZGNkOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob3N0c0xpc3QvaG9zdHNMaXN0UGx1Z2luLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvc3RzTGlzdC9tYWluVGl0bGVIdG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL19tb2RhbC5zY3NzP2VmMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxTZGsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvaW5kZXguc2Nzcz9lYjAxIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy90ZW1wbGF0ZUNoZWNrYm94LnRzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvdGVtcGxhdGVUYWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VsZW1lbnRJbkRpY3Rpb25hcnlTb3J0ZXIvZWxlbWVudEluRGljdGlvbmFyeVNvcnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZWxlbWVudEluU29ydGVkRGljdGlvbmFyeVJlbW92ZXIvZWxlbWVudEluU29ydGVkRGljdGlvbmFyeVJlbW92ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleE9mT3JkZXJlZC9pbmRleE9mT3JkZXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5zZXJ0QnlPcmRlci9pbnNlcnRCeU9yZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZXRIdG1sQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hcHBzQnlIb3N0cy9hcHBzQnlIb3N0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvYWRlckNoYXNlL19sb2FkZXItY2hhc2Uuc2Nzcz81ZmE4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2FkZXJDaGFzZS9sb2FkZXJDaGFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxnQkFBZ0IsbUJBQW1CLEVBQUUsd0JBQXdCLGtCQUFrQixFQUFFLGtCQUFrQiwyQkFBMkIsRUFBRSxzQkFBc0Isc0JBQXNCLHNCQUFzQixFQUFFLDRCQUE0Qix3QkFBd0IsbUJBQW1CLEVBQUUsU0FBUyxtTkFBbU4sZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLEtBQUssWUFBWSxrQkFBa0IsTUFBTSxZQUFZLHFHQUFxRyxVQUFVLFlBQVkseUJBQXlCLGNBQWMsb0JBQW9CLE9BQU8sS0FBSyxXQUFXLCtCQUErQixLQUFL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Z0IsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxRQUFRLE1BQU0sTUFBTSxnQkFBZ0IsTUFBTSxNQUFNLEtBQUssaUJBQWlCLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsWUFBWSxZQUFZLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxhQUFhLGtCQUFrQixPQUFPLGFBQWEsaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLEtBQUssZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0s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YyxDQUFDLENBQUMsT0FBTyxHQUFHO3dDQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVEsQ0FBQyxDQUFDO3dDQUN4QyxJQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQXFCLENBQUM7d0NBQzVGLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztvQ0FDekQsQ0FBQyxDQUFDO29DQUNGLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQ0FDckI7NEJBQ0gsQ0FBQyxDQUFDO3dCQUNKLENBQUMsQ0FBQzs7Ozs7S0FDSDtDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlGRixtSEFBd0Q7QUFBL0MsK0NBQVc7QUFDcEIsbUhBQThEO0FBQXJELDJEQUFpQjs7Ozs7Ozs7Ozs7O0FDRDFCLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsdVFBQXVJOztBQUV6Szs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsOEZBQThCO0FBRTlCLElBQU0sU0FBUyxHQUFHLDBUQVVYLENBQUM7QUFDSyx5QkFBaUIsR0FBRztJQUMvQixTQUFTO1FBQ1AsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQy9CLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvc3RzLWxpc3Qge1xcbiAgY29sb3I6ICM0QTRBNEE7IH1cXG4gIC5ob3N0cy1saXN0IC5hcGRleCB7XFxuICAgIHdpZHRoOiAzMHB4OyB9XFxuXFxuLmhvc3RzIC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uaG9zdHMuZ3JpZC1tb2RlIHtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgbWFyZ2luLXRvcDogLTMwcHg7IH1cXG4gIC5ob3N0cy5ncmlkLW1vZGUgLmNhcmQge1xcbiAgICBtYXJnaW46IDMwcHggMTVweDtcXG4gICAgd2lkdGg6IDM3NXB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvY29tcG9uZW50cy9ob3N0c0xpc3QvX2hvc3RzLWxpc3Quc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9zZXR1cC9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUU7RUFDRSxjQ0lnQixFQUFBO0VETGpCO0lBR0csV0FBVyxFQUFBOztBQUpqQjtFQVFJLHNCQ1BRLEVBQUE7O0FERFo7RUFXSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFackI7SUFlTSxpQkFBaUI7SUFDakIsWUFBWSxFQUFBXCIsXCJmaWxlXCI6XCJfaG9zdHMtbGlzdC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL3Nhc3Mvc2V0dXAvdmFyaWFibGVzXFxcIjtcXG4uaG9zdHMge1xcbiAgJi1saXN0IHtcXG4gICAgY29sb3I6ICRibGFjay1zb2Z0O1xcbiAgICAuYXBkZXgge1xcbiAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuICB9XFxuICAuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIH1cXG4gICYuZ3JpZC1tb2RlIHtcXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcblxcbiAgICAuY2FyZCB7XFxuICAgICAgbWFyZ2luOiAzMHB4IDE1cHg7XFxuICAgICAgd2lkdGg6IDM3NXB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy8/IHNldCB5b3VyIGJyYW5kIGNvbG9yc1xcblxcbiR3aGl0ZTogI2ZmZjtcXG5cXG4kbGlnaHQtZ3JleTogI2Y1ZjVmNTtcXG4kZ3JleTogI2Q3ZDdkNztcXG5cXG4kYmxhY2stc29mdDogIzRBNEE0QTtcXG4kYmxhY2s6ICMwOTA5MGU7XFxuXFxuJGJsdWU6ICMyYzYzOGY7XFxuJHBpbms6ICNmZmYwZjU7XFxuJHllbGxvdzogI2ZmZmFjZDtcXG5cXG4vLz8gb3ZlcnJpZGUgZm9yIHByb2plY3QgY2xhcml0eVxcblxcbiRjb2xvci1wcmltYXJ5OiAkYmx1ZTtcXG4kY29sb3Itc2Vjb25kYXJ5OiAkcGluaztcXG4kY29sb3ItdGVydGlhcnk6ICR5ZWxsb3c7XFxuJHNwYWNlcjogMTBweDtcXG4kc3BhY2VyczogKFxcbiAgMDogMCxcXG4gIDE6IChcXG4gICAgJHNwYWNlciAqIDEsXFxuICApLFxcbiAgMjogKFxcbiAgICAkc3BhY2VyICogMixcXG4gICksXFxuICAzOiAoXFxuICAgICRzcGFjZXIgKiAzLFxcbiAgKSxcXG4pO1xcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7XFxuICAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNztcXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICAvKiBNb2RhbCBDb250ZW50ICovIH1cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTRBNEE7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzOyB9XFxuICAubW9kYWwtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhY2Q7XFxuICAgIGNvbG9yOiAjMDkwOTBlOyB9XFxuICAubW9kYWwtYm9keSB7XFxuICAgIHBhZGRpbmc6IDJweCAxNnB4OyB9XFxuXFxuLyogQWRkIEFuaW1hdGlvbiAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjMDkwOTBlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC5jbG9zZTpob3ZlciwgLmNsb3NlOmZvY3VzIHtcXG4gICAgY29sb3I6ICMyYzYzOGY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvY29tcG9uZW50cy9tb2RhbC9fbW9kYWwuc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9zZXR1cC9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxhQUFhO0VBQUUsc0JBQUE7RUFDZixlQUFlO0VBQUUsa0JBQUE7RUFDakIsVUFBVTtFQUFFLGVBQUE7RUFDWixrQkFBa0I7RUFBRSx3QkFBQTtFQUNwQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFBRSxlQUFBO0VBQ2IsWUFBWTtFQUFFLGdCQUFBO0VBQ2QsY0FBYztFQUFFLDRCQUFBO0VBQ2hCLHlCQ05ZO0VETWEsbUJBQUE7RUFDekIsb0NBQW9DO0VBQUUscUJBQUE7RUFDdEMsa0JBQUEsRUFBbUI7RUFDbkI7SUFDRSxrQkFBa0I7SUFDbEIsc0JDZFE7SURlUixZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQ1pnQjtJRGFoQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDRFQUE0RTtJQUM1RSxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQix3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLGlCQUFpQjtJQUNqQix5QkNsQlk7SURtQlosY0N2QlcsRUFBQTtFRHlCYjtJQUNFLGlCQUFpQixFQUFBOztBQUtyQixrQkFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRVo7SUFDRSxNQUFNO0lBQ04sVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFFWjtJQUNFLE1BQU07SUFDTixVQUFVLEVBQUEsRUFBQTs7QUFJZCxxQkFBQTtBQUNBO0VBQ0UsY0N4RGE7RUR5RGIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUIsRUFBQTtFQUpuQjtJQU9JLGNDNURVO0lENkRWLHFCQUFxQjtJQUNyQixlQUFlLEVBQUFcIixcImZpbGVcIjpcIl9tb2RhbC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL3Nhc3Mvc2V0dXAvdmFyaWFibGVzXFxcIjtcXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cXG4gICYtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRibGFjay1zb2Z0O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIH1cXG4gICYtaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXJ0aWFyeTtcXG4gICAgY29sb3I6ICRibGFjaztcXG4gIH1cXG4gICYtYm9keSB7XFxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xcbiAgfVxcblxcbn1cXG5cXG4vKiBBZGQgQW5pbWF0aW9uICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogJGJsYWNrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyB7XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblwiLFwiLy8/IHNldCB5b3VyIGJyYW5kIGNvbG9yc1xcblxcbiR3aGl0ZTogI2ZmZjtcXG5cXG4kbGlnaHQtZ3JleTogI2Y1ZjVmNTtcXG4kZ3JleTogI2Q3ZDdkNztcXG5cXG4kYmxhY2stc29mdDogIzRBNEE0QTtcXG4kYmxhY2s6ICMwOTA5MGU7XFxuXFxuJGJsdWU6ICMyYzYzOGY7XFxuJHBpbms6ICNmZmYwZjU7XFxuJHllbGxvdzogI2ZmZmFjZDtcXG5cXG4vLz8gb3ZlcnJpZGUgZm9yIHByb2plY3QgY2xhcml0eVxcblxcbiRjb2xvci1wcmltYXJ5OiAkYmx1ZTtcXG4kY29sb3Itc2Vjb25kYXJ5OiAkcGluaztcXG4kY29sb3ItdGVydGlhcnk6ICR5ZWxsb3c7XFxuJHNwYWNlcjogMTBweDtcXG4kc3BhY2VyczogKFxcbiAgMDogMCxcXG4gIDE6IChcXG4gICAgJHNwYWNlciAqIDEsXFxuICApLFxcbiAgMjogKFxcbiAgICAkc3BhY2VyICogMixcXG4gICksXFxuICAzOiAoXFxuICAgICRzcGFjZXIgKiAzLFxcbiAgKSxcXG4pO1xcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jbGVhcmZpeDphZnRlciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBoZWlnaHQ6IDA7IH1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbi8qIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ21vYmlsZScpIHt9ICovXFxuLyogQ0VOVEVSSU5HICovXFxuLypcXG4ucGFyZW50IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jaGlsZCB7XFxuQGluY2x1ZGUgY2VudGVyZWQ7XFxufVxcbiovXFxuLmJ0bi1kYW5nZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmNTk3OGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjI0NTM3IDUlLCAjYzYyZDFmIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNDUzNztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMDI3MTg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzgxMGUwNTsgfVxcbiAgLmJ0bi1kYW5nZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYzYyZDFmIDUlLCAjZjI0NTM3IDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyZDFmOyB9XFxuICAgIC5idG4tZGFuZ2VyOmhvdmVyOmFjdGl2ZSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMXB4OyB9XFxuXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubXQtMCxcXG4ubXktMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm1yLTAsXFxuLm14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm1iLTAsXFxuLm15LTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tbC0wLFxcbi5teC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0tMSB7XFxuICBtYXJnaW46IDEwcHg7IH1cXG5cXG4ubXQtMSxcXG4ubXktMSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLm1yLTEsXFxuLm14LTEge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLm1iLTEsXFxuLm15LTEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5tbC0xLFxcbi5teC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDIwcHg7IH1cXG5cXG4ubXQtMixcXG4ubXktMiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLm1yLTIsXFxuLm14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLm1iLTIsXFxuLm15LTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbi5tbC0yLFxcbi5teC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XFxuXFxuLm0tMyB7XFxuICBtYXJnaW46IDMwcHg7IH1cXG5cXG4ubXQtMyxcXG4ubXktMyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuXFxuLm1yLTMsXFxuLm14LTMge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4OyB9XFxuXFxuLm1iLTMsXFxuLm15LTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxcblxcbi5tbC0zLFxcbi5teC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnB0LTAsXFxuLnB5LTAge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4ucHItMCxcXG4ucHgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnBiLTAsXFxuLnB5LTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucGwtMCxcXG4ucHgtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC0xIHtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4ucHQtMSxcXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMTBweDsgfVxcblxcbi5wci0xLFxcbi5weC0xIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cXG5cXG4ucGItMSxcXG4ucHktMSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxcblxcbi5wbC0xLFxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjBweDsgfVxcblxcbi5wdC0yLFxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4OyB9XFxuXFxuLnByLTIsXFxuLnB4LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcblxcbi5wYi0yLFxcbi5weS0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuLnBsLTIsXFxuLnB4LTIge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuXFxuLnAtMyB7XFxuICBwYWRkaW5nOiAzMHB4OyB9XFxuXFxuLnB0LTMsXFxuLnB5LTMge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cXG5cXG4ucHItMyxcXG4ucHgtMyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9XFxuXFxuLnBiLTMsXFxuLnB5LTMge1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7IH1cXG5cXG4ucGwtMyxcXG4ucHgtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IH1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZC1pbmxpbmUge1xcbiAgZGlzcGxheTogaW5saW5lOyB9XFxuXFxuLmQtaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmQtdGFibGUge1xcbiAgZGlzcGxheTogdGFibGU7IH1cXG5cXG4uZC10YWJsZS1yb3cge1xcbiAgZGlzcGxheTogdGFibGUtcm93OyB9XFxuXFxuLmQtdGFibGUtY2VsbCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsOyB9XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmQtaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cXG4uYWxpZ24taXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uYWxpZ24taXRlbXMtZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5hbGlnbi1pdGVtcy1iYXNlbGluZSB7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7IH1cXG5cXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLmZsZXgtZ3Jvdy0wIHtcXG4gIGZsZXgtZ3JvdzogMDsgfVxcblxcbi5mbGV4LWdyb3ctMSB7XFxuICBmbGV4LWdyb3c6IDE7IH1cXG5cXG4uZmxleC1zaHJpbmstMCB7XFxuICBmbGV4LXNocmluazogMDsgfVxcblxcbi5mbGV4LXNocmluay0xIHtcXG4gIGZsZXgtc2hyaW5rOiAxOyB9XFxuXFxuLmZsZXgtbm93cmFwIHtcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuXFxuLmZsZXgtd3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7IH1cXG5cXG4uZWxsaXBzaXMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi50ZXh0LWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxcblxcbi50ZXh0LXdyYXAge1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxcblxcbi50ZXh0LW5vd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNlbnRlcmVkIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLmNlbnRlcmVkIDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcblxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBsaW5lLWhlaWdodDogMS4yOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYU5ldWVcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogIzA5MDkwZTsgfVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhTmV1ZS1ib2xkXFxcIiwgRmFsbGJhY2ssIFxcXCJHZW9yZ2lhXFxcIiwgc2VyaWYsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuKjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmZmYwZjU7IH1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgfVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMyYzYzOGY7IH1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG51bCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDg0MHB4O1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9zZXR1cC9fbm9ybWFsaXplLnNjc3NcIixcImluZGV4LnNjc3NcIixcIi9Vc2Vycy9zb2xkZS9Xb3Jrc3BhY2UvdmFuaWxsYS1jaGFsbGVuZ2Uvc3JjL3Nhc3Mvc2V0dXAvX2NsZWFyZml4LnNjc3NcIixcIi9Vc2Vycy9zb2xkZS9Xb3Jrc3BhY2UvdmFuaWxsYS1jaGFsbGVuZ2Uvc3JjL3Nhc3Mvc2V0dXAvX2JvcmRlci1ib3guc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy91dGlscy9fbWl4aW5zLnNjc3NcIixcIi9Vc2Vycy9zb2xkZS9Xb3Jrc3BhY2UvdmFuaWxsYS1jaGFsbGVuZ2Uvc3JjL3Nhc3MvdXRpbHMvX2J1dHRvbnMuc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy91dGlscy9faGVscGVycy5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL3NldHVwL192YXJpYWJsZXMuc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9nbG9iYWwvX3R5cG9ncmFwaHkuc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9nbG9iYWwvX2dsb2JhbC5zY3NzXCIsXCIvVXNlcnMvc29sZGUvV29ya3NwYWNlL3ZhbmlsbGEtY2hhbGxlbmdlL3NyYy9zYXNzL2xheW91dC9faGVhZGVyLnNjc3NcIixcIi9Vc2Vycy9zb2xkZS9Xb3Jrc3BhY2UvdmFuaWxsYS1jaGFsbGVuZ2Uvc3JjL3Nhc3MvbGF5b3V0L19ncmlkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUE7QUFFQTsrRUNBK0U7QURHL0U7OztFQ0NFO0FESUY7RUFDRSxpQkFBaUI7RUFBRSxNQUFBO0VBQ25CLDhCQUE4QjtFQUFFLE1BQUEsRUFBTzs7QUFHekM7K0VDRCtFO0FESS9FOztFQ0RFO0FES0Y7RUFDRSxTQUFTLEVBQUE7O0FBR1g7O0VDSEU7QURPRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7OztFQ0pFO0FEU0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCOytFQ1IrRTtBRFcvRTs7O0VDUEU7QURZRjtFQUNFLHVCQUF1QjtFQUFFLE1BQUE7RUFDekIsU0FBUztFQUFFLE1BQUE7RUFDWCxpQkFBaUI7RUFBRSxNQUFBLEVBQU87O0FBRzVCOzs7RUNORTtBRFdGO0VBQ0UsaUNBQWlDO0VBQUUsTUFBQTtFQUNuQyxjQUFjO0VBQUUsTUFBQSxFQUFPOztBQUd6QjsrRUNSK0U7QURXL0U7O0VDUkU7QURZRjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjs7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QUFBOztBQU1kO0VBQ0UsZUFBZSxFQUFBOztBRXJHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsNEJBVHlCO0VBVXpCLGlCQUFpQjtFQUNqQixjRHJCYSxFQUFBOztBQ3dCZjtFQUNFLG9FQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FDbkNsQjtFQUNFLG1CRlVZLEVBQUE7O0FFUGQ7O0VBRUUsWUFBWTtFQUNaLG1CRkhrQixFQUFBOztBRU1wQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLHFCQUFxQjtFQUNyQixjRnBCWSxFQUFBOztBRXVCZDtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FDdkNsQjtFQUNFLG1CSEdrQixFQUFBOztBSUpwQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUFcIixcImZpbGVcIjpcImluZGV4LnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jbGVhcmZpeDphZnRlciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBoZWlnaHQ6IDA7IH1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbi8qIEBpbmNsdWRlIHJlc3BvbmQtdG8oJ21vYmlsZScpIHt9ICovXFxuLyogQ0VOVEVSSU5HICovXFxuLypcXG4ucGFyZW50IHtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jaGlsZCB7XFxuQGluY2x1ZGUgY2VudGVyZWQ7XFxufVxcbiovXFxuLmJ0bi1kYW5nZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmNTk3OGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjI0NTM3IDUlLCAjYzYyZDFmIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNDUzNztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMDI3MTg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNnB4IDI0cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzgxMGUwNTsgfVxcbiAgLmJ0bi1kYW5nZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYzYyZDFmIDUlLCAjZjI0NTM3IDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyZDFmOyB9XFxuICAgIC5idG4tZGFuZ2VyOmhvdmVyOmFjdGl2ZSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMXB4OyB9XFxuXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubXQtMCxcXG4ubXktMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm1yLTAsXFxuLm14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm1iLTAsXFxuLm15LTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tbC0wLFxcbi5teC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0tMSB7XFxuICBtYXJnaW46IDEwcHg7IH1cXG5cXG4ubXQtMSxcXG4ubXktMSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLm1yLTEsXFxuLm14LTEge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLm1iLTEsXFxuLm15LTEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5tbC0xLFxcbi5teC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDIwcHg7IH1cXG5cXG4ubXQtMixcXG4ubXktMiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLm1yLTIsXFxuLm14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLm1iLTIsXFxuLm15LTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbi5tbC0yLFxcbi5teC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XFxuXFxuLm0tMyB7XFxuICBtYXJnaW46IDMwcHg7IH1cXG5cXG4ubXQtMyxcXG4ubXktMyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuXFxuLm1yLTMsXFxuLm14LTMge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4OyB9XFxuXFxuLm1iLTMsXFxuLm15LTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxcblxcbi5tbC0zLFxcbi5teC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4OyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnB0LTAsXFxuLnB5LTAge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4ucHItMCxcXG4ucHgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnBiLTAsXFxuLnB5LTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucGwtMCxcXG4ucHgtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC0xIHtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4ucHQtMSxcXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMTBweDsgfVxcblxcbi5wci0xLFxcbi5weC0xIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cXG5cXG4ucGItMSxcXG4ucHktMSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxcblxcbi5wbC0xLFxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjBweDsgfVxcblxcbi5wdC0yLFxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4OyB9XFxuXFxuLnByLTIsXFxuLnB4LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcblxcbi5wYi0yLFxcbi5weS0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuLnBsLTIsXFxuLnB4LTIge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XFxuXFxuLnAtMyB7XFxuICBwYWRkaW5nOiAzMHB4OyB9XFxuXFxuLnB0LTMsXFxuLnB5LTMge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cXG5cXG4ucHItMyxcXG4ucHgtMyB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9XFxuXFxuLnBiLTMsXFxuLnB5LTMge1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7IH1cXG5cXG4ucGwtMyxcXG4ucHgtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IH1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZC1pbmxpbmUge1xcbiAgZGlzcGxheTogaW5saW5lOyB9XFxuXFxuLmQtaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmQtdGFibGUge1xcbiAgZGlzcGxheTogdGFibGU7IH1cXG5cXG4uZC10YWJsZS1yb3cge1xcbiAgZGlzcGxheTogdGFibGUtcm93OyB9XFxuXFxuLmQtdGFibGUtY2VsbCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsOyB9XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmQtaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cXG4uYWxpZ24taXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uYWxpZ24taXRlbXMtZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5hbGlnbi1pdGVtcy1iYXNlbGluZSB7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7IH1cXG5cXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLmZsZXgtZ3Jvdy0wIHtcXG4gIGZsZXgtZ3JvdzogMDsgfVxcblxcbi5mbGV4LWdyb3ctMSB7XFxuICBmbGV4LWdyb3c6IDE7IH1cXG5cXG4uZmxleC1zaHJpbmstMCB7XFxuICBmbGV4LXNocmluazogMDsgfVxcblxcbi5mbGV4LXNocmluay0xIHtcXG4gIGZsZXgtc2hyaW5rOiAxOyB9XFxuXFxuLmZsZXgtbm93cmFwIHtcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuXFxuLmZsZXgtd3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7IH1cXG5cXG4uZWxsaXBzaXMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi50ZXh0LWp1c3RpZnkge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxcblxcbi50ZXh0LXdyYXAge1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxcblxcbi50ZXh0LW5vd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNlbnRlcmVkIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLmNlbnRlcmVkIDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcblxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBsaW5lLWhlaWdodDogMS4yOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYU5ldWVcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogIzA5MDkwZTsgfVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhTmV1ZS1ib2xkXFxcIiwgRmFsbGJhY2ssIFxcXCJHZW9yZ2lhXFxcIiwgc2VyaWYsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuKjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmZmYwZjU7IH1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgfVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMyYzYzOGY7IH1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG51bCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDg0MHB4O1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXCIsXCIuY2xlYXJmaXg6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNsZWFyOiBib3RoO1xcbiAgaGVpZ2h0OiAwO1xcbn1cIixcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XCIsXCIvKiBNRURJQSBRVUVSSUVTICovXFxuQG1peGluIHJlc3BvbmQtdG8oJGJyZWFrcG9pbnQpIHtcXG4gIEBpZiAkYnJlYWtwb2ludD09XFxcIm1vYmlsZVxcXCIge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PVxcXCJ0YWJsZXRcXFwiIHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBlbHNlIGlmICRicmVha3BvaW50PT1cXFwiZGVza3RvcFxcXCIge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTY5cHgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PVxcXCJ3cmFwcGVyXFxcIiB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGVsc2Uge1xcbiAgICBAbWVkaWEgKCRicmVha3BvaW50KSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8hIEV4YW1wbGUgdXNhZ2VcXG4vKiBAaW5jbHVkZSByZXNwb25kLXRvKCdtb2JpbGUnKSB7fSAqL1xcblxcblxcbi8qIENFTlRFUklORyAqL1xcbkBtaXhpbiBjZW50ZXJlZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4vLyEgRXhhbXBsZSB1c2FnZVxcbi8qXFxuLnBhcmVudCB7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2hpbGQge1xcbkBpbmNsdWRlIGNlbnRlcmVkO1xcbn1cXG4qL1xcblxcbi8vISBlbGxpcHNpc1xcbkBtaXhpbiBlbGxpcHNpcygpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVwiLFwiLy8hIGNyZWF0ZWQgZnJvbSBodHRwczovL3d3dy5iZXN0Y3NzYnV0dG9uZ2VuZXJhdG9yLmNvbS8jLzMzXFxuLmJ0biB7XFxuICAmLWRhbmdlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjZjU5NzhlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjI0NTM3IDUlLCAjYzYyZDFmIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI0NTM3O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMDI3MTg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA2cHggMjRweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggIzgxMGUwNTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2M2MmQxZiA1JSwgI2YyNDUzNyAxMDAlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYyZDFmO1xcbiAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogMXB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi8vISBtYXJnaW4gYW5kIHBhZGRpbmdcXG5AZWFjaCAkcHJvcCwgJGFiYnJldiBpbiAobWFyZ2luOiBtLCBwYWRkaW5nOiBwKSB7XFxuICBAZWFjaCAkc2l6ZSwgJGxlbmd0aCBpbiAkc3BhY2VycyB7XFxuICAgIC4jeyRhYmJyZXZ9LSN7JHNpemV9IHtcXG4gICAgICAjeyRwcm9wfTogJGxlbmd0aDtcXG4gICAgfVxcbiAgICAuI3skYWJicmV2fXQtI3skc2l6ZX0sXFxuICAgIC4jeyRhYmJyZXZ9eS0jeyRzaXplfSB7XFxuICAgICAgI3skcHJvcH0tdG9wOiAkbGVuZ3RoO1xcbiAgICB9XFxuICAgIC4jeyRhYmJyZXZ9ci0jeyRzaXplfSxcXG4gICAgLiN7JGFiYnJldn14LSN7JHNpemV9IHtcXG4gICAgICAjeyRwcm9wfS1yaWdodDogJGxlbmd0aDtcXG4gICAgfVxcbiAgICAuI3skYWJicmV2fWItI3skc2l6ZX0sXFxuICAgIC4jeyRhYmJyZXZ9eS0jeyRzaXplfSB7XFxuICAgICAgI3skcHJvcH0tYm90dG9tOiAkbGVuZ3RoO1xcbiAgICB9XFxuICAgIC4jeyRhYmJyZXZ9bC0jeyRzaXplfSxcXG4gICAgLiN7JGFiYnJldn14LSN7JHNpemV9IHtcXG4gICAgICAjeyRwcm9wfS1sZWZ0OiAkbGVuZ3RoO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vISBkaXNwbGF5XFxuJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsXFxuICBpbmxpbmUtZmxleCAhZGVmYXVsdDtcXG5cXG5AZWFjaCAkdmFsdWUgaW4gJGRpc3BsYXlzIHtcXG4gIC5kLSN7JHZhbHVlfSB7XFxuICAgIGRpc3BsYXk6ICR2YWx1ZTtcXG4gIH1cXG59XFxuXFxuLy8hIGZsZXggaGVscGVyc1xcblxcbi5hbGlnbi1pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmFsaWduLWl0ZW1zLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuLmFsaWduLWl0ZW1zLXN0cmV0Y2gge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5mbGV4LWdyb3ctMCB7XFxuICBmbGV4LWdyb3c6IDA7XFxufVxcbi5mbGV4LWdyb3ctMSB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5mbGV4LXNocmluay0wIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4uZmxleC1zaHJpbmstMSB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuLmZsZXgtbm93cmFwIHtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uZmxleC13cmFwIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLy8hIGZvbnRcXG4uZm9udCB7XFxuICAmLWJvbGQge1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgfVxcbn1cXG5cXG4vLyEgdGV4dFxcbi5lbGxpcHNpcyB7XFxuICBAaW5jbHVkZSBlbGxpcHNpcygpO1xcbn1cXG4vLyBBbGlnbm1lbnRcXG5cXG4udGV4dC1qdXN0aWZ5IHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi50ZXh0LXdyYXAge1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLnRleHQtbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jZW50ZXJlZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICA6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcblxcbi8vIGludGVyYWN0aW9uc1xcbi5jdXJzb3Ige1xcbiAgJi1wb2ludGVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cIixcIi8vPyBzZXQgeW91ciBicmFuZCBjb2xvcnNcXG5cXG4kd2hpdGU6ICNmZmY7XFxuXFxuJGxpZ2h0LWdyZXk6ICNmNWY1ZjU7XFxuJGdyZXk6ICNkN2Q3ZDc7XFxuXFxuJGJsYWNrLXNvZnQ6ICM0QTRBNEE7XFxuJGJsYWNrOiAjMDkwOTBlO1xcblxcbiRibHVlOiAjMmM2MzhmO1xcbiRwaW5rOiAjZmZmMGY1O1xcbiR5ZWxsb3c6ICNmZmZhY2Q7XFxuXFxuLy8/IG92ZXJyaWRlIGZvciBwcm9qZWN0IGNsYXJpdHlcXG5cXG4kY29sb3ItcHJpbWFyeTogJGJsdWU7XFxuJGNvbG9yLXNlY29uZGFyeTogJHBpbms7XFxuJGNvbG9yLXRlcnRpYXJ5OiAkeWVsbG93O1xcbiRzcGFjZXI6IDEwcHg7XFxuJHNwYWNlcnM6IChcXG4gIDA6IDAsXFxuICAxOiAoXFxuICAgICRzcGFjZXIgKiAxLFxcbiAgKSxcXG4gIDI6IChcXG4gICAgJHNwYWNlciAqIDIsXFxuICApLFxcbiAgMzogKFxcbiAgICAkc3BhY2VyICogMyxcXG4gICksXFxuKTtcXG5cIixcIi8vISBpbXBvcnQgZ29vZ2xlIGZvbnRzXFxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTo0MDAsNDAwaSw3MDAnKTtcXG4vLyBPUiB1c2UgQGZvbnQtZmFjZSBsaWtlIGJlbG93XFxuXFxuLy8hIGltcG9ydCBhIGN1c3RvbSBmb250IGJlbG93XFxuLy8gQGZvbnQtZmFjZSB7XFxuLy8gICBmb250LWZhbWlseTogJ0xpYnJlLUJhc2tlcnZpbGxlLVJlZyc7XFxuLy8gICBmb250LWRpc3BsYXk6IGZhbGxiYWNrO1xcbi8vICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbi8vICAgc3JjOlxcbi8vICAgICBsb2NhbCgnTGlicmUgQmFza2VydmlsbGUnKSwgLyogQ2hlY2tzIGlmIGZvbnQgaXMgb24gdXNlcnMgY29tcHV0ZXIgKi9cXG4vLyAgICAgbG9jYWwoJ0xpYnJlQmFza2VydmlsbGUtUmVndWxhcicpLCAvKiBDaGVja3MgaWYgZm9udCBpcyBvbiB1c2VycyBjb21wdXRlciAqL1xcbi8vICAgICB1cmwoJ2ZvbnRzL2xpYnJlLWJhc2tlcnZpbGxlLXY1LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIENocm9tZSAyNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSsgKi9cXG4vLyAgICAgdXJsKCdmb250cy9saWJyZS1iYXNrZXJ2aWxsZS12NS1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTsgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbi8vIH1cXG5cXG4vLyEgc2V0IGZvbnQgdmFyaWFibGVzXFxuJGZvbnQtaGVhZGluZzogJ0hlbHZldGljYU5ldWUtYm9sZCcsIEZhbGxiYWNrLCAnR2VvcmdpYScsIHNlcmlmO1xcbiRmb250LWJvZHk6ICdIZWx2ZXRpY2FOZXVlJztcXG5cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IC8vIDFyZW0gPSAxMHB4LCAzLjVyZW0gPSAzNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJGZvbnQtYm9keTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6ICRibGFjaztcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWhlYWRpbmcsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cIixcIio6OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAkcGluaztcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICRsaWdodC1ncmV5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICRibHVlO1xcbn1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cIixcImhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAkbGlnaHQtZ3JleTtcXG59XFxuXCIsXCIuY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogODQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zay1jaGFzZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDsgfVxcbiAgLnNrLWNoYXNlLWRvdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyB9XFxuICAgIC5zay1jaGFzZS1kb3Q6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiAnICc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICBoZWlnaHQ6IDI1JTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM2MzhmO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYW5pbWF0aW9uOiBzay1jaGFzZS1kb3QtYmVmb3JlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7IH1cXG4gICAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSksIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDEpOmJlZm9yZSB7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxcbiAgICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKSwgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMik6YmVmb3JlIHtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0xczsgfVxcbiAgICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCgzKSwgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XFxuICAgIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpLCAuc2stY2hhc2UtZG90Om50aC1jaGlsZCg0KTpiZWZvcmUge1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cXG4gICAgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSksIC5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDUpOmJlZm9yZSB7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43czsgfVxcbiAgICAuc2stY2hhc2UtZG90Om50aC1jaGlsZCg2KSwgLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XFxuXFxuQGtleWZyYW1lcyBzay1jaGFzZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3Qge1xcbiAgODAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc2stY2hhc2UtZG90LWJlZm9yZSB7XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7IH1cXG4gIDEwMCUsXFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9zb2xkZS9Xb3Jrc3BhY2UvdmFuaWxsYS1jaGFsbGVuZ2Uvc3JjL3ZpZXdzL2xvYWRlckNoYXNlL19sb2FkZXItY2hhc2Uuc2Nzc1wiLFwiL1VzZXJzL3NvbGRlL1dvcmtzcGFjZS92YW5pbGxhLWNoYWxsZW5nZS9zcmMvc2Fzcy9zZXR1cC9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2Q0FBNkMsRUFBQTtFQUM3QztJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sb0RBQW9ELEVBQUE7SUFOckQ7TUFRRyxZQUFZO01BQ1osY0FBYztNQUNkLFVBQVU7TUFDVixXQUFXO01BQ1gseUJDVFE7TURVUixtQkFBbUI7TUFDbkIsMkRBQTJELEVBQUE7SUFkOUQ7TUFvQkssc0JBQXVDLEVBQUE7SUFwQjVDO01Bb0JLLG9CQUF1QyxFQUFBO0lBcEI1QztNQW9CSyxzQkFBdUMsRUFBQTtJQXBCNUM7TUFvQkssc0JBQXVDLEVBQUE7SUFwQjVDO01Bb0JLLHNCQUF1QyxFQUFBO0lBcEI1QztNQW9CSyxzQkFBdUMsRUFBQTs7QUFPL0M7RUFDRTtJQUNFLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0U7O0lBRUUseUJBQXlCLEVBQUEsRUFBQTs7QUFJN0I7RUFDRTtJQUNFLHFCQUFxQixFQUFBO0VBRXZCOztJQUVFLG1CQUFtQixFQUFBLEVBQUFcIixcImZpbGVcIjpcIl9sb2FkZXItY2hhc2Uuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBsb2FkZXIgZnJvbSBodHRwczovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0L1xcbkBpbXBvcnQgJy4uLy4uL3Nhc3Mvc2V0dXAvdmFyaWFibGVzJztcXG4uc2stY2hhc2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbmltYXRpb246IHNrLWNoYXNlIDIuNXMgaW5maW5pdGUgbGluZWFyIGJvdGg7XFxuICAmLWRvdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJyAnO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgaGVpZ2h0OiAyNSU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdC1iZWZvcmUgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcXG4gICAgfVxcbiAgQGVhY2ggJGNoaWxkIGluICgxLCAyLCAzLCA0LCA1LCA2KSB7XFxuICAgICY6bnRoLWNoaWxkKCN7JGNoaWxkfSkge1xcbiAgICAgICYsXFxuICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAoLTEuMnMgKyAwLjEgKiAkY2hpbGQpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlLWRvdCB7XFxuICA4MCUsXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG4gIH1cXG4gIDEwMCUsXFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblwiLFwiLy8/IHNldCB5b3VyIGJyYW5kIGNvbG9yc1xcblxcbiR3aGl0ZTogI2ZmZjtcXG5cXG4kbGlnaHQtZ3JleTogI2Y1ZjVmNTtcXG4kZ3JleTogI2Q3ZDdkNztcXG5cXG4kYmxhY2stc29mdDogIzRBNEE0QTtcXG4kYmxhY2s6ICMwOTA5MGU7XFxuXFxuJGJsdWU6ICMyYzYzOGY7XFxuJHBpbms6ICNmZmYwZjU7XFxuJHllbGxvdzogI2ZmZmFjZDtcXG5cXG4vLz8gb3ZlcnJpZGUgZm9yIHByb2plY3QgY2xhcml0eVxcblxcbiRjb2xvci1wcmltYXJ5OiAkYmx1ZTtcXG4kY29sb3Itc2Vjb25kYXJ5OiAkcGluaztcXG4kY29sb3ItdGVydGlhcnk6ICR5ZWxsb3c7XFxuJHNwYWNlcjogMTBweDtcXG4kc3BhY2VyczogKFxcbiAgMDogMCxcXG4gIDE6IChcXG4gICAgJHNwYWNlciAqIDEsXFxuICApLFxcbiAgMjogKFxcbiAgICAkc3BhY2VyICogMixcXG4gICksXFxuICAzOiAoXFxuICAgICRzcGFjZXIgKiAzLFxcbiAgKSxcXG4pO1xcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XG4vLyB0aGlzIGlzIHRoZSBjb3JlIG9mIHRoZSBTREtcbmltcG9ydCB7IGRhdGFEaWdlc3RlciB9IGZyb20gJy4vZGF0YURpZ2VzdGVyJztcbi8vIHRoZXNlIG1vZHVsZXMgYXJlIHBsdWdpbnMsIHRoYXQgY291bGQgYmUgaW1wcm92ZWQgYW5kIGluY3JlYXNlZCBvdmVyIHRpbWUsIGFuZCBleHRlbmRpbmcgdGhlIFNES1xuaW1wb3J0IHsgZ2V0VG9wQXBwc0J5SG9zdFBsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9nZXRUb3BBcHBzQnlIb3N0L2dldFRvcEFwcHNCeUhvc3RQbHVnaW4nO1xuaW1wb3J0IHsgYWRkQXBwVG9Ib3N0c1BsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9hZGRBcHBUb0hvc3RzL2FkZEFwcFRvSG9zdHNQbHVnaW4nO1xuaW1wb3J0IHsgcmVtb3ZlQXBwVG9Ib3N0c1BsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9yZW1vdmVBcHBUb0hvc3RzL3JlbW92ZUFwcFRvSG9zdHNQbHVnaW4nO1xuLyoqXG4gKiBSZXR1cm5zIGEgc2V0IG9mIHRvb2xzIHRvIG1hbmFnZSBBcHBEYXRhXG4gKiBAcGFyYW0ge0FwcERhdGFbXX0gbGlzdFxuICovXG5leHBvcnQgY29uc3QgQXBkZXhTZGsgPSAobGlzdCA6IEFwcERhdGFbXSA9IFtdKSA9PiB7XG4gIGNvbnN0IHsgZGlnZXN0SG9zdEFwcERhdGEsIGhvc3RBcHBFbnRyeURpZ2VzdGVyLCBob3N0QXBwRW50cnlHYXJiYWdlciB9ID0gZGF0YURpZ2VzdGVyKCk7XG4gIGNvbnN0IG9yZGVyZWRNYXAgPSBkaWdlc3RIb3N0QXBwRGF0YShsaXN0KTtcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgLi4uZ2V0VG9wQXBwc0J5SG9zdFBsdWdpbihvcmRlcmVkTWFwKSxcbiAgICAuLi5hZGRBcHBUb0hvc3RzUGx1Z2luKGxpc3QsIG9yZGVyZWRNYXAsIGhvc3RBcHBFbnRyeURpZ2VzdGVyKSxcbiAgICAuLi5yZW1vdmVBcHBUb0hvc3RzUGx1Z2luKGxpc3QsIG9yZGVyZWRNYXAsIGhvc3RBcHBFbnRyeUdhcmJhZ2VyKSxcbiAgICBnZXRIb3N0c0xpc3Q6ICgpID0+IEFycmF5LmZyb20ob3JkZXJlZE1hcC5rZXlzKCkpLFxuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcGRleFNkaztcbiIsImltcG9ydCB7XG4gIGVsZW1lbnRJbkRpY3Rpb25hcnlTb3J0ZXIsXG4gIGVsZW1lbnRJblNvcnRlZERpY3Rpb25hcnlSZW1vdmVyLFxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2dldENvbmRpdGlvblBsdWdpbn0gZnJvbSAnLi9wbHVnaW5zL2dldENvbmRpdGlvblBsdWdpbi9nZXRDb25kaXRpb25QbHVnaW4nXG5pbXBvcnQgeyBBUFBTX09SREVSX0NPTVBBUkFUT1IsIEFQUFNfUFJPUEVSVFlfVE9fQ09NUEFSRSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBSYW5rZWRBcHBzQnlIb3N0LCBBcHBEYXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIFBsdWdpbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0IG9mIG1ldGhvZHMgdGhhdCBhcmUgYWJsZSB0byBjcmVhdGUgYSBNYXAgb2YgcmFua2VkIEFwcERhdGEgZm9yIGVhY2ggSG9zdCxcbiAqIHJlbW92aW5nIGFuZCBhZGRpbmcgQXBwRGF0YSBvZiB0aGUgcmFua2luZ3NcbiAqL1xuZXhwb3J0IGNvbnN0IGRhdGFEaWdlc3RlciA9ICgpID0+IHtcbiAgY29uc3QgeyBnZXRDb25kaXRpb24gfSA9IGdldENvbmRpdGlvblBsdWdpbigpO1xuICAvKipcbiAgICogUmV0dXJucyBhIG1ldGhvZCB0aGF0IGxvb3BzIGludG8gZWFjaCBlbnRyeSBvZiBgcmFua2VkQXBwc0J5SG9zdGAgYW5kIGFkZHMgQXBwRGF0YSByYW5rZWQgYnkgdGhlIGBDb25kaXRpb25gXG4gICAqIChkZWZpbmVkIGluIGBnZXRDb25kaXRpb25gKSBpbiB0aGUgdmFsdWVcbiAgICogQHBhcmFtIHtSYW5rZWRBcHBzQnlIb3N0fSByYW5rZWRBcHBzQnlIb3N0XG4gICAqIEByZXR1cm5zIHsoYXBwRGF0YTpBcHBEYXRhKSA9PiB2b2lkfVxuICAgKiBfX19cbiAgICogQ29tcGxleGl0eSBpcyBPKG4yKSBhcyB3ZSBvbmx5IGxvb3Agb24gZWFjaCBob3N0LCBhbmQgdGhlbiBvbiBlYWNoIGVsZW1lbnQgb2YgdGhlIHJhbmtpbmcuXG4gICAqL1xuICBjb25zdCBob3N0QXBwRW50cnlEaWdlc3RlciA9IChyYW5rZWRBcHBzQnlIb3N0IDogUmFua2VkQXBwc0J5SG9zdCkgPT4gKGFwcERhdGE6IEFwcERhdGEpID0+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBnZXRDb25kaXRpb24oQVBQU19PUkRFUl9DT01QQVJBVE9SLCBBUFBTX1BST1BFUlRZX1RPX0NPTVBBUkUpO1xuICAgIGNvbnN0IHsgaG9zdCA9IFtdIH0gPSBhcHBEYXRhO1xuICAgIGhvc3QuZm9yRWFjaChlbGVtZW50SW5EaWN0aW9uYXJ5U29ydGVyKHJhbmtlZEFwcHNCeUhvc3QsIGFwcERhdGEsIGNvbmRpdGlvbikpO1xuICB9O1xuICAvKipcbiAgICogUmV0dXJucyBhIG1ldGhvZCB0aGF0IGxvb3BzIGludG8gZWFjaCBlbnRyeSBvZiBgcmFua2VkQXBwc0J5SG9zdGAgYW5kIHJlbW92ZXMgdGhlIGNvaW5jaWRlbmNlIG9mIHRoZSBBcHBEYXRhIGluIHRoZSB2YWx1ZVxuICAgKiBAcGFyYW0ge1JhbmtlZEFwcHNCeUhvc3R9IHJhbmtlZEFwcHNCeUhvc3RcbiAgICogQHJldHVybnMgeyhBcHBEYXRhOkFwcERhdGEpID0+IHZvaWR9XG4gICAqIF9fX1xuICAgKiBDb21wbGV4aXR5IGlzIE8objIpIGFzIHdlIG9ubHkgbG9vcCBvbiBlYWNoIGhvc3QsIGFuZCB0aGVuIG9uIGVhY2ggZWxlbWVudCBvZiB0aGUgcmFua2luZy5cbiAgICovXG4gIGNvbnN0IGhvc3RBcHBFbnRyeUdhcmJhZ2VyID0gKHJhbmtlZEFwcHNCeUhvc3Q6IFJhbmtlZEFwcHNCeUhvc3QpID0+IChBcHBEYXRhOiBBcHBEYXRhKSA9PiB7XG4gICAgY29uc3QgeyBob3N0ID0gW10gfSA9IEFwcERhdGE7XG4gICAgaG9zdC5mb3JFYWNoKFxuICAgICAgZWxlbWVudEluU29ydGVkRGljdGlvbmFyeVJlbW92ZXIocmFua2VkQXBwc0J5SG9zdCwgQXBwRGF0YSlcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGlzdCBvZiBhbGwgdGhlIEFwcERhdGEgZWxlbWVudHMgYW5kIGRpc3RyaWJ1dGVzIHRoZW0gaW50byBhIE1hcCBvYmplY3QsIGNvbnRhaW5pbmcgYWxsIGhvc3RzIGFzIGVudHJpZXNcbiAgICogYW5kIGEgcmFua2VkIGFycmF5IChieSBjb25kaXRpb24gc3BlY2lmaWVkIGF0IGBob3N0QXBwRW50cnlEaWdlc3RlcmAgZnVuY3Rpb24pIG9mIEFwcERhdGEgYXMgdmFsdWVzXG4gICAqIEBwYXJhbSB7QXBwRGF0YVtdfSBsaXN0XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbmRpdGlvblxuICAgKiBAcmV0dXJucyB7UmFua2VkQXBwc0J5SG9zdH1cbiAgICogX19fXG4gICAqIENvbXBsZXhpdHkgaXMgTyhuMiksIGFzIGVhY2ggQXBwIGNhbiBoYXZlIG1hbnkgcmVsYXRlZCBob3N0cywgYW5kIGVhY2ggaG9zdCBuZWVkcyB0byBjaGVjayBhbGwgQXBwcy5cbiAgICovXG4gIGNvbnN0IGRpZ2VzdEhvc3RBcHBEYXRhID0gKGxpc3Q6IEFwcERhdGFbXSA9IFtdKTogUmFua2VkQXBwc0J5SG9zdCA9PiB7XG4gICAgY29uc3QgcmFua2VkQXBwc0J5SG9zdCA9IG5ldyBNYXAoKTtcbiAgICBsaXN0LmZvckVhY2goaG9zdEFwcEVudHJ5RGlnZXN0ZXIocmFua2VkQXBwc0J5SG9zdCkpO1xuXG4gICAgcmV0dXJuIHJhbmtlZEFwcHNCeUhvc3Q7XG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGRpZ2VzdEhvc3RBcHBEYXRhLFxuICAgIGhvc3RBcHBFbnRyeURpZ2VzdGVyLFxuICAgIGhvc3RBcHBFbnRyeUdhcmJhZ2VyLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBBcHBEYXRhLCBSYW5rZWRBcHBzQnlIb3N0IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbi8qKlxuICogQ29tcG9zaXRpb24gZnVuY3Rpb24gdGhhdCBhZGRzIG9uZSBBcHAgdG8gcmFua2VkQXBwc0J5SG9zdCBhbmQgdG8gdGhlIGxpc3Qgb2YgQXBwc1xuICogSXNvbGF0ZWQgTW9sZWN1bGFyIGZhY3RvcnlcbiAqIEBwYXJhbSB7QXBwRGF0YVtdfSBsaXN0IG9mIEFwcHNcbiAqIEBwYXJhbSB7UmFua2VkQXBwc0J5SG9zdH0gcmFua2VkQXBwc0J5SG9zdCBvcmRlcmVkIE1hcCBvZiBBcHBzIGZvciBlYWNoIEhvc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhvc3RBcHBFbnRyeURpZ2VzdGVyIGFkZHMgY29ycmVzcG9uZGluZyBBcHAgKG9yZGVyZWQgYnkgYXBkZXgpIHRvIGVhY2ggSG9zdCBvZiByYW5rZWRBcHBzQnlIb3N0IE1hcFxuICovXG5leHBvcnQgY29uc3QgYWRkQXBwVG9Ib3N0c1BsdWdpbiA9IChsaXN0OiBBcHBEYXRhW10sIHJhbmtlZEFwcHNCeUhvc3Q6IFJhbmtlZEFwcHNCeUhvc3QsIGhvc3RBcHBFbnRyeURpZ2VzdGVyOiBGdW5jdGlvbikgPT4ge1xuICBpZiAoIShsaXN0ICYmIHJhbmtlZEFwcHNCeUhvc3QgJiYgaG9zdEFwcEVudHJ5RGlnZXN0ZXIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHBhcmFtZXRlcnMnKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbHMgaG9zdEFwcEVudHJ5RGlnZXN0ZXIgdG8gaW5zZXJ0IGludG8gdGhlIHJhbmtlZCBhcnJheSBvZiBBcHBEYXRhIGluIGVhY2ggb2YgdGhlIGFwcERhdGEuaG9zdCBlbnRyaWVzIHRoZSBgYXBwRGF0YWAgcmVjZWl2ZWRcbiAgICogQHBhcmFtIHtBcHBEYXRhfSBhcHBEYXRhXG4gICAqL1xuICBjb25zdCBhZGRBcHBUb0hvc3RzID0gKGFwcERhdGE6IEFwcERhdGEpID0+IHtcbiAgICBob3N0QXBwRW50cnlEaWdlc3RlcihyYW5rZWRBcHBzQnlIb3N0KShhcHBEYXRhKTtcbiAgICBsaXN0LnB1c2goYXBwRGF0YSk7IC8vIHRoaXMgbGluZSByZXByZXNlbnRzIHBlcnNpc3RpbmcgdGhlIGRhdGEgaW50byB0aGUgc291cmNlXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBhZGRBcHBUb0hvc3RzLFxuICB9KTtcbn07XG4iLCIvLyBjb3VsZCBiZSByZXRyaWV2ZWQgaW4gYW55IHNlcnZpY2VcbmltcG9ydCB7IENPTVBBUkFUT1JTIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IENvbXBhcmF0b3IgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG4vLyBUT0RPOiB0ZXN0cywgYWNjZXB0IHBhdGhzIGFuZCBwcmltaXRpdmVzXG4vLyBUT0RPOiByZWZhY3RvciBhbmQgdXNlIHNpbWlsYXIgYXBwcm9hY2ggbGlrZSBgaW5kZXhPZk9yZGVyZWRgIGFuZCB1c2UgYGdldFZhbHVlYCBhbmQgYGlzRGVzY2VuZGluZ2BcbmV4cG9ydCBjb25zdCBnZXRDb25kaXRpb25QbHVnaW4gPSAoKSA9PiB7XG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBmdW5jdGlvbiB0byBvcmRlciBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAqIEBwYXJhbSB7Q29tcGFyYXRvcn0gY29tcGFyYXRvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgUGF0aCB0byB0aGUgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgY29tcGFyZWRcbiAgICovXG4gIGNvbnN0IGdldENvbmRpdGlvbiA9IChjb21wYXJhdG9yOiBhbnkgLCBwcm9wZXJ0eSA6IHN0cmluZykgPT4ge1xuICAgIGxldCBtZWV0c0NvbmRpdGlvbjtcbiAgICBzd2l0Y2ggKGNvbXBhcmF0b3IpIHtcbiAgICAgIGNhc2UgQ09NUEFSQVRPUlMuZ3JlYXRlcjpcbiAgICAgICAgbWVldHNDb25kaXRpb24gPSAoYTogeyBbeDogc3RyaW5nXTogbnVtYmVyOyB9LCBiOiB7IFt4OiBzdHJpbmddOiBudW1iZXI7IH0pID0+IGFbcHJvcGVydHldIDwgYltwcm9wZXJ0eV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDT01QQVJBVE9SUy5zbWFsbGVyOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWVldHNDb25kaXRpb24gPSAoYTogeyBbeDogc3RyaW5nXTogbnVtYmVyOyB9LCBiOiB7IFt4OiBzdHJpbmddOiBudW1iZXI7IH0pID0+IGFbcHJvcGVydHldID4gYltwcm9wZXJ0eV07XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBtZWV0c0NvbmRpdGlvbjtcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldENvbmRpdGlvbixcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQVBQU19CWV9IT1NUX1JFU1VMVFNfTlVNQkVSIGFzIHJlc3VsdHNOdW1iZXIgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgUmFua2VkQXBwc0J5SG9zdCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbi8qKlxuICpcbiAqIEBwYXJhbSB7UmFua2VkQXBwc0J5SG9zdH0gcmFua2VkQXBwc0J5SG9zdFxuICovXG5leHBvcnQgY29uc3QgZ2V0VG9wQXBwc0J5SG9zdFBsdWdpbiA9IChyYW5rZWRBcHBzQnlIb3N0OiBSYW5rZWRBcHBzQnlIb3N0KSA9PiB7XG4gIGlmIChyYW5rZWRBcHBzQnlIb3N0LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdNYXAnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgbmVlZHMgdG8gYmUgb2YgdHlwZSBNYXAgY2xhc3MnKTtcbiAgfVxuICAvKipcbiAgICogR2V0cyBhIHNsaWNlIG9mIHRoZSBSYW5rZWRBcHBzQnlIb3N0IG9mIHRoZSBzcGVjaWZpZWQgaG9zdC4gVGhlXG4gICAqIG51bWJlciBvZiByZXN1bHRzIGNhbiBiZSBzZXQgaW4gYEAvY29uZmlnYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdE5hbWVcbiAgICovXG4gIGNvbnN0IGdldFRvcEFwcHNCeUhvc3QgPSAoaG9zdE5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByYW5rZWRBcHBzQnlIb3N0LmdldChob3N0TmFtZSk7XG4gICAgcmV0dXJuIGRhdGE/LnNsaWNlKDAsIHJlc3VsdHNOdW1iZXIpO1xuICB9O1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0VG9wQXBwc0J5SG9zdCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQXBwRGF0YSwgUmFua2VkQXBwc0J5SG9zdCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG4vKipcbiAqIENvbXBvc2l0aW9uIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyBvbmUgQXBwIGZyb20gcmFua2VkQXBwc0J5SG9zdCBhbmQgZnJvbSB0aGUgbGlzdCBvZiBBcHBzXG4gKiBJc29sYXRlZCBNb2xlY3VsYXIgZmFjdG9yeVxuICogQHBhcmFtIHtBcHBEYXRhW119IGxpc3Qgb2YgQXBwc1xuICogQHBhcmFtIHtSYW5rZWRBcHBzQnlIb3N0fSByYW5rZWRBcHBzQnlIb3N0IG9yZGVyZWQgTWFwIG9mIEFwcHMgZm9yIGVhY2ggSG9zdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaG9zdEFwcEVudHJ5R2FyYmFnZXIgcmVtb3ZlcyBjb3JyZXNwb25kaW5nIEFwcCAob3JkZXJlZCBieSBhcGRleCkgdG8gZWFjaCBIb3N0IG9mIHJhbmtlZEFwcHNCeUhvc3QgTWFwXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVBcHBUb0hvc3RzUGx1Z2luID0gKGxpc3Q6IEFwcERhdGFbXSwgcmFua2VkQXBwc0J5SG9zdDogUmFua2VkQXBwc0J5SG9zdCwgaG9zdEFwcEVudHJ5R2FyYmFnZXI6IEZ1bmN0aW9uKSA9PiB7XG4gIGlmICghKGxpc3QgJiYgcmFua2VkQXBwc0J5SG9zdCAmJiBob3N0QXBwRW50cnlHYXJiYWdlcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcGFyYW1ldGVycycpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxscyBob3N0QXBwRW50cnlHYXJiYWdlciB0byByZW1vdmUgZnJvbSB0aGUgcmFua2VkIGFycmF5IG9mIEFwcERhdGEgaW4gZWFjaCBvZiB0aGUgYXBwRGF0YS5ob3N0IGVudHJpZXMgdGhlIGBhcHBEYXRhYCByZWNlaXZlZFxuICAgKiBAcGFyYW0ge0FwcERhdGF9IGFwcERhdGFcbiAgICovXG4gIGNvbnN0IHJlbW92ZUFwcFRvSG9zdHMgPSAoYXBwRGF0YTogQXBwRGF0YSkgPT4ge1xuICAgIGhvc3RBcHBFbnRyeUdhcmJhZ2VyKHJhbmtlZEFwcHNCeUhvc3QpKGFwcERhdGEpO1xuICAgIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFwcERhdGEpO1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTsgLy8gdGhpcyBsaW5lIHJlcHJlc2VudHMgcGVyc2lzdGluZyB0aGUgZGF0YSBpbnRvIHRoZSBzb3VyY2VcbiAgICByZXR1cm4gYXBwRGF0YTsgLy8gcmV0dXJuaW5nIHRoZSBkZWxldGVkIGVsZW1lbnQganVzdCBpbiBjYXNlIGl0IGlzIG5lZWRlZCBsYXRlciB0byBiZSByZXN0b3JlZFxuICB9O1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgcmVtb3ZlQXBwVG9Ib3N0cyxcbiAgfSk7XG59O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuL19ob3N0cy1saXN0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgdGVtcGxhdGVUYWcgfSBmcm9tICcuLy4uLy4uL3RlbXBsYXRlcy90ZW1wbGF0ZVRhZyc7XG5pbXBvcnQgJy4vX2hvc3RzLWxpc3Quc2Nzcyc7XG5pbXBvcnQgeyBBcGRleFNkayB9IGZyb20gJy4uLy4uL0FwZGV4L0FwZGV4U2RrJztcbmltcG9ydCB7IEFQUFNfQllfSE9TVF9ESVNQTEFZX05VTUJFUiB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHsgQXBkZXg6IGFueTsgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBob3N0c0xpc3RQbHVnaW4gPSBPYmplY3QuZnJlZXplKHtcbiAgYXN5bmMgbG9hZCh1cmw6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsaXN0OiBBcHBEYXRhW10gPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG5cbiAgICAgIGNvbnN0IEFwZGV4ID0gQXBkZXhTZGsobGlzdCBhcyBBcHBEYXRhW10pO1xuICAgICAgLy8gdXNpbmcgd2luZG93IGFzIGEgc3RvcmVcbiAgICAgIHdpbmRvdy5BcGRleCA9IEFwZGV4O1xuXG4gICAgICByZXR1cm4gQXBkZXg7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0sXG4gIGdldEhvc3RzSHRtbChob3N0c0xpc3Q6IHN0cmluZ1tdLCByZXN1bHRzVG9EaXNwbGF5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgZ3JpZCA9IGhvc3RzTGlzdC5yZWR1Y2UoKGh0bWxTdHJpbmc6IHN0cmluZywgaG9zdE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYWxscmFua2luZ1Jlc3VsdHMgPSB3aW5kb3cuQXBkZXguZ2V0VG9wQXBwc0J5SG9zdChob3N0TmFtZSk7XG4gICAgICBjb25zdCByYW5raW5nID0gcmVzdWx0c1RvRGlzcGxheVxuICAgICAgICA/IGFsbHJhbmtpbmdSZXN1bHRzLnNsaWNlKDAsIHJlc3VsdHNUb0Rpc3BsYXkpXG4gICAgICAgIDogYWxscmFua2luZ1Jlc3VsdHM7XG4gICAgICBjb25zdCBhcHBzTGlzdExpID0gcmFua2luZ1xuICAgICAgICAubWFwKChlbGVtZW50OiB7IGFwZGV4OiBhbnk7IG5hbWU6IGFueTsgfSwgcmFua2luZ0luZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBhcGRleCA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgY29udGVudDogU3RyaW5nKGVsZW1lbnQuYXBkZXgpLFxuICAgICAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnYXBkZXggbXgtMycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSB0ZW1wbGF0ZVRhZyh7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGVUYWcoe1xuICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgY29udGVudDogW2FwZGV4LCBuYW1lXS5qb2luKCcgJyksXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdhcHBJbkhvc3QgZC1mbGV4IGZsZXgtbm93cmFwIGFsaWduLWl0ZW1zLXN0YXJ0IG15LTInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGtleTogJ2RhdGEtaG9zdC1uYW1lJywgdmFsdWU6IGhvc3ROYW1lIH0sXG4gICAgICAgICAgICAgIHsga2V5OiAnZGF0YS1hcHAtbmFtZScsIHZhbHVlOiBlbGVtZW50Lm5hbWUgfSxcbiAgICAgICAgICAgICAgeyBrZXk6ICdkYXRhLXJhbmtpbmctaW5kZXgnLCB2YWx1ZTogYCR7cmFua2luZ0luZGV4fWAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgICBjb25zdCBhcHBzVWwgPSB0ZW1wbGF0ZVRhZyh7XG4gICAgICAgIGNvbnRlbnQ6IGFwcHNMaXN0TGksXG4gICAgICAgIGF0dHJpYnV0ZXM6IFt7IGtleTogJ2NsYXNzJywgdmFsdWU6ICdob3N0cy1saXN0IG15LTInIH1dLFxuICAgICAgICB0YWc6ICd1bCcsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGhvc3RUaXRsZSA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgY29udGVudDogaG9zdE5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdjbGFzcycsXG4gICAgICAgICAgICB2YWx1ZTogJ2hvc3RUaXRsZSBteC0zIGZvbnQtYm9sZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGtleTogJ2RhdGEtaG9zdC1uYW1lJywgdmFsdWU6IGhvc3ROYW1lIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY2FyZCA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgY29udGVudDogYCR7aG9zdFRpdGxlfSAke2FwcHNVbH1gLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgICAgICAgdmFsdWU6ICdjYXJkIG0tMyBweS0yJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaHRtbFN0cmluZyArIGNhcmQ7XG4gICAgfSwgJycpO1xuICAgIHJldHVybiBncmlkO1xuICB9LFxuICBnZXRIdG1sKCkge1xuICAgIGNvbnN0IHJhbmtlZEhvc3RzID0gd2luZG93LkFwZGV4LmdldEhvc3RzTGlzdCgpO1xuXG4gICAgY29uc3QgZ3JpZCA9IHRoaXMuZ2V0SG9zdHNIdG1sKHJhbmtlZEhvc3RzLCBBUFBTX0JZX0hPU1RfRElTUExBWV9OVU1CRVIpO1xuICAgIGNvbnN0IGFwcHNCeUhvc3RMaXN0ID0gdGVtcGxhdGVUYWcoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2NsYXNzJyxcbiAgICAgICAgICB2YWx1ZTogJ2hvc3RzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICB2YWx1ZTogJ2hvc3RzTGlzdCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY29udGVudDogZ3JpZCxcbiAgICB9KTtcbiAgICByZXR1cm4gYXBwc0J5SG9zdExpc3Q7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IHRlbXBsYXRlVGFnLCB0ZW1wbGF0ZUNoZWNrYm94IH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzJztcblxuY29uc3QgdXNlckVtYWlsID0gJ2F2ZXJ5bG9uZ2VtYWlsYWRkcmVzc0Bjb21wYW55bmFtZS5jb20nO1xuY29uc3QgdGl0bGVIMSA9IHRlbXBsYXRlVGFnKHtcbiAgY29udGVudDogJ0FwcHMgYnkgSG9zdCcsXG4gIHRhZzogJ2gxJyxcbiAgYXR0cmlidXRlczogW1xuICAgIHtcbiAgICAgIGtleTogJ2NsYXNzJyxcbiAgICAgIHZhbHVlOiAnIGZsZXgtc2hyaW5rLTAnLFxuICAgIH0sXG4gIF0sXG59KTtcbmNvbnN0IGVtYWlsSHRtbCA9IHRlbXBsYXRlVGFnKHtcbiAgdGFnOiAnc3BhbicsXG4gIGNvbnRlbnQ6IHVzZXJFbWFpbCxcbiAgYXR0cmlidXRlczogW1xuICAgIHtcbiAgICAgIGtleTogJ3RpdGxlJyxcbiAgICAgIHZhbHVlOiB1c2VyRW1haWwsXG4gICAgfSxcbiAgXSxcbn0pO1xuY29uc3QgdXNlciA9IHRlbXBsYXRlVGFnKHtcbiAgdGFnOiAncCcsXG4gIGNvbnRlbnQ6IGBmb3IgdXNlciAke2VtYWlsSHRtbH1gLFxuICBhdHRyaWJ1dGVzOiBbXG4gICAge1xuICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgdmFsdWU6ICdlbGxpcHNpcyBteC0xJyxcbiAgICB9LFxuICBdLFxufSk7XG5jb25zdCBjaGVja2JveCA9IHRlbXBsYXRlQ2hlY2tib3goe1xuICBjb250ZW50OiAnU2hvdyBhcyBhbiBhd2Vzb21lIGdyaWQnLFxuICBuYW1lOiAnbGlzdE1vZGUnLFxuICBhdHRyaWJ1dGVzOiBbXG4gICAge1xuICAgICAga2V5OiAnaWQnLFxuICAgICAgdmFsdWU6ICdsaXN0TW9kZUNoZWNrYm94JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2NsYXNzJyxcbiAgICAgIHZhbHVlOiAnY3Vyc29yLXBvaW50ZXInLFxuICAgIH0sXG4gIF0sXG4gIGxhYmVsQXR0cmlidXRlczogW1xuICAgIHtcbiAgICAgIGtleTogJ2NsYXNzJyxcbiAgICAgIHZhbHVlOiAndGV4dC1ub3dyYXAgbWwtMiBjdXJzb3ItcG9pbnRlcicsXG4gICAgfSxcbiAgXSxcbn0pO1xuZXhwb3J0IGNvbnN0IG1haW5UaXRsZUh0bWwgPSB0ZW1wbGF0ZVRhZyh7XG4gIHRhZzogJ2hlYWRlcicsXG4gIGNvbnRlbnQ6IFt0aXRsZUgxLCB1c2VyLCBjaGVja2JveF0uam9pbignICcpLFxuICBhdHRyaWJ1dGVzOiBbXG4gICAge1xuICAgICAga2V5OiAnY2xhc3MnLFxuICAgICAgdmFsdWU6ICdtLTMgZC1mbGV4IGFsaWduLWl0ZW1zLWVuZCcsXG4gICAgfSxcbiAgXSxcbn0pO1xuIiwiZXhwb3J0IHsgaG9zdHNMaXN0UGx1Z2luIH0gZnJvbSAnLi9ob3N0c0xpc3QvaG9zdHNMaXN0UGx1Z2luJztcbmV4cG9ydCB7IG1haW5UaXRsZUh0bWwgfSBmcm9tICcuL2hvc3RzTGlzdC9tYWluVGl0bGVIdG1sJztcbmV4cG9ydCB7IG1vZGFsU2RrIH0gZnJvbSAnLi9tb2RhbC9tb2RhbFNkayc7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4vX21vZGFsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuL19tb2RhbC5zY3NzJztcbi8qKlxuICogU2V0cyB0aGUgYGlubmVySHRtbGAgcHJvcGVydHkgb2YgdGhlIGh0bWwgZWxlbWVudCB3aXRoIGlkPWBpZGBcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqL1xuZXhwb3J0IGNvbnN0IHNldElubmVySHRtbCA9IChpZDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gdGV4dDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vKipcbiAqIFdoZW4gaW5pdGlhbGlzZWQsIGFwcGVuZHMgdG8gdGhlIGRvY3VtZW50LmJvZHkgYSAoaGlkZGVuIGJ5IGRlZmF1bHQpIG1vZGFsIGh0bWwgZWxlbWVudFxuICogd2l0aCBhIGhlYWRlciBhbmQgYSBib2R5LCB0aGF0IGNhbiBiZSBtb2RpZmllZCB0aHJvdWdoIHRoZSBjb3JyZXNwb25kaW5nIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGNvbnN0IG1vZGFsU2RrID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbElkID0gJ25ld1JlbGljTW9kYWwnO1xuICBjb25zdCBoZWFkZXJJZCA9ICduZXdSZWxpY01vZGFsSGVhZGVyJztcbiAgY29uc3QgYm9keUlkID0gJ25ld1JlbGljTW9kYWxCb2R5JztcbiAgY29uc3QgY2xvc2VJZCA9ICduZXdSZWxpY01vZGFsQ2xvc2UnO1xuICBsZXQgbW9kYWxOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJZCk7XG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm9uZSA9ICdub25lJztcbiAgICB0cnkge1xuICAgICAgbW9kYWxOb2RlLnN0eWxlLmRpc3BsYXkgPSBub25lO1xuICAgICAgcmV0dXJuIG5vbmU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICBjb25zdCBibG9jayA9ICdibG9jayc7XG4gICAgdHJ5IHtcbiAgICAgIG1vZGFsTm9kZS5zdHlsZS5kaXNwbGF5ID0gYmxvY2s7XG4gICAgICByZXR1cm4gYmxvY2s7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgaWYgKCFtb2RhbE5vZGUpIHtcbiAgICBtb2RhbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbE5vZGUuaWQgPSBtb2RhbElkO1xuICAgIG1vZGFsTm9kZS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgIG1vZGFsTm9kZS5pbm5lckhUTUwgPSBgICBcbjxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8c3BhbiBpZD1cIiR7Y2xvc2VJZH1cIiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICA8aDIgaWQ9XCIke2hlYWRlcklkfVwiPjwvaDI+XG4gIDwvZGl2PlxuICA8ZGl2ICBpZD1cIiR7Ym9keUlkfVwiIGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbE5vZGUpO1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xvc2VJZCk7XG4gICAgY2xvc2VCdXR0b24ub25jbGljayA9IGhpZGU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxOb2RlKSB7XG4gICAgICAgIGhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCBzZXRCb2R5ID0gKHRleHQ6IHN0cmluZykgPT4gc2V0SW5uZXJIdG1sKGJvZHlJZCwgdGV4dCk7XG4gIGNvbnN0IHNldEhlYWRlciA9ICh0ZXh0OiBzdHJpbmcpID0+IHNldElubmVySHRtbChoZWFkZXJJZCwgdGV4dCk7XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGhpZGUsXG4gICAgc2V0Qm9keSxcbiAgICBzZXRIZWFkZXIsXG4gICAgc2hvdyxcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEFQUFNfQllfSE9TVF9SRVNVTFRTX05VTUJFUiA9IDI1O1xuZXhwb3J0IGNvbnN0IEFQUFNfQllfSE9TVF9ESVNQTEFZX05VTUJFUiA9IDU7XG5leHBvcnQgY29uc3QgQ09NUEFSQVRPUlMgPSB7XG4gIGdyZWF0ZXI6ICdncmVhdGVyJyxcbiAgc21hbGxlcjogJ3NtYWxsZXInLFxufTtcbmV4cG9ydCBjb25zdCBBUFBTX09SREVSX0NPTVBBUkFUT1IgPSBDT01QQVJBVE9SUy5ncmVhdGVyO1xuZXhwb3J0IGNvbnN0IEFQUFNfUFJPUEVSVFlfVE9fQ09NUEFSRSA9ICdhcGRleCc7XG5leHBvcnQgY29uc3QgQVBQU19PUkRFUl9DT05ESVRJT04gPSAoYTogeyBhcGRleDogbnVtYmVyOyB9LCBiOiB7IGFwZGV4OiBudW1iZXI7IH0pID0+IGEuYXBkZXggPCBiLmFwZGV4O1xuIiwiaW1wb3J0IHsgbG9hZGVyQ2hhc2VQbHVnaW4gfSBmcm9tICcuL3ZpZXdzLyc7XG5pbXBvcnQgJy4vdHlwZXMnXG5pbXBvcnQgJy4vc2Fzcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IHsgYXBwc0J5SG9zdHMgfSBmcm9tICcuL3ZpZXdzJztcblxuY29uc3QgbG9hZGVyID0gbG9hZGVyQ2hhc2VQbHVnaW4ubG9hZGVyQ2hhc2VOb2RlKCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRlcik7XG5cbmFwcHNCeUhvc3RzLmxvYWQoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCB7IHRlbXBsYXRlVGFnIH0gZnJvbSAnLi90ZW1wbGF0ZVRhZyc7XG5leHBvcnQgeyB0ZW1wbGF0ZUNoZWNrYm94IH0gZnJvbSAnLi90ZW1wbGF0ZUNoZWNrYm94JztcbiIsImltcG9ydCB7IHNldEh0bWxBdHRyaWJ1dGUgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNoZWNrYm94ID0gKHtcbiAgY29udGVudCA9ICcnLFxuICBhdHRyaWJ1dGVzID0gW10gYXMgYW55W10sXG4gIGxhYmVsQXR0cmlidXRlcyA9IFtdIGFzIGFueVtdLFxuICBuYW1lID0gJ2lucHV0TmFtZScsXG59KSA9PlxuICBgXG48bGFiZWxcbiAgJHtsYWJlbEF0dHJpYnV0ZXMubWFwKHNldEh0bWxBdHRyaWJ1dGUpLmpvaW4oJyAnKX1cbj5cbiAgPGlucHV0XG4gICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgbmFtZT1cIiR7bmFtZX1cIiBcbiAgICAke2F0dHJpYnV0ZXMubWFwKHNldEh0bWxBdHRyaWJ1dGUpLmpvaW4oJyAnKX1cbiAgLz4gIFxuICAke2NvbnRlbnR9XG48L2xhYmVsPlxuICBgO1xuIiwiaW1wb3J0IHsgc2V0SHRtbEF0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlVGFnID0gKHsgY29udGVudCA9ICcnLCBhdHRyaWJ1dGVzID0gW10gYXMgYW55W10sIHRhZyA9ICdzZWN0aW9uJyB9KSA9PlxuICBgXG4gIDwke3RhZ30gXG4gICAgJHthdHRyaWJ1dGVzLm1hcChzZXRIdG1sQXR0cmlidXRlKS5qb2luKCcgJyl9XG4gICAgPlxuICAgICR7Y29udGVudH1cbiAgPC8ke3RhZ30+ICBcbiAgYDtcbiIsImltcG9ydCB7IGluc2VydEJ5T3JkZXIgfSBmcm9tICcuLi9pbnNlcnRCeU9yZGVyL2luc2VydEJ5T3JkZXInO1xuLyoqXG4gKiBJbnNlcnRzIGluIHRoZSB2YWx1ZSAoYW4gYXJyYXkpIG9mIGEgZGljdGlvbmFyeSBhbiBgZWxlbWVudGAgb3JkZXJlZCBieSB0aGUgYHNvcnRCeWAgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TWFwPCosW10+fSBkaWN0aW9uYXJ5XG4gKiBAcGFyYW0geyp9IGVsZW1lbnRcbiAqIEBwYXJhbSB7KGE6KixiOiopID0+IGJvb2xlYW59IHNvcnRCeVxuICovXG5leHBvcnQgY29uc3QgZWxlbWVudEluRGljdGlvbmFyeVNvcnRlciA9IChkaWN0aW9uYXJ5OiBNYXA8c3RyaW5nLCBhbnlbXT4sIGVsZW1lbnQ6IGFueSwgc29ydEJ5OiAoYTogYW55LCBiOiBhbnkpID0+IGJvb2xlYW4pID0+IHtcbiAgaWYgKCEoZGljdGlvbmFyeSAmJiBlbGVtZW50ICYmIHNvcnRCeSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgYXJndW1lbnRzJyk7XG4gIH1cbiAgcmV0dXJuIChrZXk6IGFueSkgPT4ge1xuICAgIGlmIChkaWN0aW9uYXJ5LmhhcyhrZXkpKSB7XG4gICAgICAvLyB3b3JraW5nIHdpdGggcmVmZXJlbmNlIHR5cGVzIHdlIGRvbid0IG5lZWQgdG8gcmVzZXQgdGhlIGFycmF5XG4gICAgICAvLyBidXQgc2ltcGx5IG1vZGlmeSBpdCBpbiBwbGFjZVxuICAgICAgY29uc3QgYXJyYXlPZkVudHJpZXMgPSBkaWN0aW9uYXJ5LmdldChrZXkpO1xuICAgICAgaW5zZXJ0QnlPcmRlcihhcnJheU9mRW50cmllcywgZWxlbWVudCwgc29ydEJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGljdGlvbmFyeS5zZXQoa2V5LCBbZWxlbWVudF0pO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBpbmRleE9mT3JkZXJlZCB9IGZyb20gJy4uL2luZGV4T2ZPcmRlcmVkL2luZGV4T2ZPcmRlcmVkJztcblxuLy8gVE9ETzogdGVzdHMsIGFkZCB0aGUgb3JkZXJlZEJ5IHByb3AgKGEgcGF0aD8pXG4vKipcbiAqICBGaW5kcyBhbiBgZWxlbWVudGAgaW4gYSBzb3J0ZWQgYXJyYXkgYW5kIHJlbW92ZXMgaXQgZnJvbSB0aGUgYGRpY3Rpb25hcnlgXG4gKiBAcGFyYW0ge01hcDwqLGFueVtdPn0gZGljdGlvbmFyeVxuICogQHBhcmFtIHsqfSBlbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBlbGVtZW50SW5Tb3J0ZWREaWN0aW9uYXJ5UmVtb3ZlciA9IChkaWN0aW9uYXJ5OiBNYXA8YW55LCBhbnlbXT4sIGVsZW1lbnQ6IGFueSAvKiAsIG9yZGVyZWRCeSAqLykgPT4ge1xuICBpZiAoIShkaWN0aW9uYXJ5ICYmIGVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHBhcmFtZXRlcnMnKTtcbiAgfVxuICByZXR1cm4gKGtleTogYW55KSA9PiB7XG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBkaWN0aW9uYXJ5LmdldChrZXkpO1xuICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZk9yZGVyZWQoc29ydGVkQXJyYXksIGVsZW1lbnQsIHsgaXNEZXNjZW5kaW5nOiB0cnVlIH0pO1xuICAgIHNvcnRlZEFycmF5LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBpbnNlcnRCeU9yZGVyIH0gZnJvbSAnLi9pbnNlcnRCeU9yZGVyL2luc2VydEJ5T3JkZXInO1xuZXhwb3J0IHsgZWxlbWVudEluRGljdGlvbmFyeVNvcnRlciB9IGZyb20gJy4vZWxlbWVudEluRGljdGlvbmFyeVNvcnRlci9lbGVtZW50SW5EaWN0aW9uYXJ5U29ydGVyJztcbmV4cG9ydCB7IGVsZW1lbnRJblNvcnRlZERpY3Rpb25hcnlSZW1vdmVyIH0gZnJvbSAnLi9lbGVtZW50SW5Tb3J0ZWREaWN0aW9uYXJ5UmVtb3Zlci9lbGVtZW50SW5Tb3J0ZWREaWN0aW9uYXJ5UmVtb3Zlcic7XG5leHBvcnQgeyBzZXRIdG1sQXR0cmlidXRlIH0gZnJvbSAnLi9zZXRIdG1sQXR0cmlidXRlJztcbiIsImV4cG9ydCBjb25zdCBnZXRTYW1lVmFsdWVzID0gKGNvbGxlY3Rpb246IEFycmF5PGFueT4gPSBbXSwgZWxlbWVudDogYW55LCBvcHRpb25zOiB7IGdldFZhbHVlPzogKGVsZW1lbnQ6IGFueSkgPT4gc3RyaW5nIHwgbnVtYmVyOyBpc0Rlc2NlbmRpbmc/OiBib29sZWFuOyAgaXNMYXN0RWxlbWVudD86IGJvb2xlYW59ID0ge30pID0+IHtcbiAgY29uc3QgeyBsZW5ndGggfSA9IGNvbGxlY3Rpb247XG4gIGlmICghbGVuZ3RoKSByZXR1cm4gMDtcbiAgY29uc3QgeyBnZXRWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nfG51bWJlcikgPT4gdmFsdWUsIGlzTGFzdEVsZW1lbnQgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgY29uc3QgbWluQm91bmRhcnkgPSAwO1xuICBjb25zdCBtYXhCb3VuZGFyeSA9IGxlbmd0aCAtIDE7XG5cbiAgY29uc3QgbWF4TG9vcHNUb1Jlc29sdmUgPSBNYXRoLmZsb29yKE1hdGgubG9nMihsZW5ndGgpKTtcbiAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShlbGVtZW50KTtcbiAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKTtcbiAgbGV0IGxvb3BzID0gMDtcbiAgbGV0IG1pbiA9IG1pbkJvdW5kYXJ5O1xuICBsZXQgbWF4ID0gbWF4Qm91bmRhcnk7XG4gIC8vIGNoZWNrIGZpcnN0IGVsZW1lbnQgdG8gdGhlIHJpZ2h0IHdpdGggYSB2YWx1ZSBoaWdoZXIgdGhhbiB0aGUgZ2l2ZW4gb25lXG4gIGlmICghaXNMYXN0RWxlbWVudCkge1xuICAgIHdoaWxlIChsb29wcyA8PSBtYXhMb29wc1RvUmVzb2x2ZSAmJiBpbmRleCA8PSBtYXhCb3VuZGFyeSAmJiBpbmRleCA+PSBtaW5Cb3VuZGFyeSkge1xuICAgICAgaWYgKGdldFZhbHVlKGNvbGxlY3Rpb25baW5kZXhdKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgLy8gbW92ZSB0byB0aGUgcmlnaHRcbiAgICAgICAgbWluID0gaW5kZXg7XG4gICAgICAgIGluZGV4ICs9IE1hdGguY2VpbCgobWF4IC0gbWluKSAvIDIpO1xuICAgICAgICBpZiAobWF4ID09PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1vdmUgdG8gdGhlIGxlZnRcbiAgICAgICAgbWF4ID0gaW5kZXg7XG4gICAgICAgIGluZGV4IC09IE1hdGguY2VpbCgobWF4IC0gbWluKSAvIDIpO1xuICAgICAgICBpZiAobWluID09PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxvb3BzICs9IDE7XG4gICAgfVxuICB9XG4gIC8vIGlzTGFzdEVsZW1lbnRcbiAgd2hpbGUgKGxvb3BzIDw9IG1heExvb3BzVG9SZXNvbHZlICYmIGluZGV4IDw9IG1heEJvdW5kYXJ5ICYmIGluZGV4ID49IG1pbkJvdW5kYXJ5KSB7XG4gICAgaWYgKGdldFZhbHVlKGNvbGxlY3Rpb25baW5kZXhdKSA9PT0gdmFsdWUpIHtcbiAgICAgIC8vIG1vdmUgdG8gdGhlIGxlZnRcbiAgICAgIG1heCA9IGluZGV4O1xuICAgICAgaW5kZXggLT0gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gMik7XG4gICAgICBpZiAobWluID09PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtb3ZlIHRvIHRoZSByaWdodFxuICAgICAgbWluID0gaW5kZXg7XG4gICAgICBpbmRleCArPSBNYXRoLmNlaWwoKG1heCAtIG1pbikgLyAyKTtcbiAgICAgIGlmIChtYXggPT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgICB9XG4gICAgfVxuICAgIGxvb3BzICs9IDE7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcbmV4cG9ydCBjb25zdCBpbmRleE9mU2ltcGxlT3JkZXJlZCA9IChjb2xsZWN0aW9uOiBBcnJheTxhbnk+ID0gW10sIGVsZW1lbnQ6IGFueSwgIG9wdGlvbnM6IHsgZ2V0VmFsdWU/OiAoZWxlbWVudDogYW55KSA9PiBzdHJpbmcgfCBudW1iZXI7IGlzRGVzY2VuZGluZz86IGJvb2xlYW47ICBpc0xhc3RFbGVtZW50PzogYm9vbGVhbn0gPSB7fSApID0+IHtcbiAgaWYgKGVsZW1lbnQgIT09IDAgJiYgIWVsZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcGFyYW1ldGVycycpO1xuICB9XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBjb2xsZWN0aW9uO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBjb25zdCB7IGdldFZhbHVlID0gKHZhbHVlOiBzdHJpbmd8bnVtYmVyKSA9PiB2YWx1ZSwgaXNEZXNjZW5kaW5nID0gZmFsc2UgfSA9IG9wdGlvbnM7XG5cbiAgLy8gYXMgaW4gZWFjaCBsb29wIHdlIGRpc2NhcmQgdGhlIGhhbGYgb2YgdGhlIHJlc3VsdHNcbiAgLy8gaW4gdGhlIHdvcnN0IGNhc2Ugc2NlbmFyaW8gd2Ugd2lsbCBsb29wIGEgbnVtYmVyIG9mIHRpbWVzXG4gIC8vIGVxdWFsIHRvIG4gdGltZXMgc3VjaCBhcyAyXm4gPiBsZW5ndGhcbiAgY29uc3QgbWF4TG9vcHNUb1Jlc29sdmUgPSBNYXRoLmZsb29yKE1hdGgubG9nMihsZW5ndGgpKTtcbiAgLy8ganVzdCBpbiBjYXNlIHNvbWV0aGluZyBpcyB3cm9uZywgd2Uga2lsbCB0aGUgbG9vcCB3aGVuIGluZGV4IGlzXG4gIC8vIG91dCBvZiBib3VuZGFyaWVzXG4gIGNvbnN0IG1pbkJvdW5kYXJ5ID0gMDtcbiAgY29uc3QgbWF4Qm91bmRhcnkgPSBsZW5ndGggLSAxO1xuXG4gIGxldCBpbmRleCA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gIGxldCBsb29wcyA9IDA7XG4gIGxldCBzdGVwO1xuICBsZXQgbWluID0gbWluQm91bmRhcnk7XG4gIGxldCBtYXggPSBtYXhCb3VuZGFyeTtcbiAgd2hpbGUgKGxvb3BzIDw9IG1heExvb3BzVG9SZXNvbHZlICYmIGluZGV4IDw9IG1heEJvdW5kYXJ5ICYmIGluZGV4ID49IG1pbkJvdW5kYXJ5KSB7XG4gICAgaWYgKGdldFZhbHVlKGNvbGxlY3Rpb25baW5kZXhdKSA9PT0gZ2V0VmFsdWUoZWxlbWVudCkpIHtcbiAgICAgIC8vIGZpbmQgaG93IG1hbnkgZWxlbWVudHMgdG8gdGhlIGxlZnQgZXhpc3Qgd2l0aCB0aGUgc2FtZSB2YWx1ZSBhbmQgc2V0IG1pblxuICAgICAgY29uc3Qgc2FtZVZhbHVlc1RvTGVmdCA9IGdldFNhbWVWYWx1ZXMoY29sbGVjdGlvbi5zbGljZShtaW4sIGluZGV4KSwgZWxlbWVudCwge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBpc0xhc3RFbGVtZW50OiB0cnVlLFxuICAgICAgfSk7XG4gICAgICAvLyBmaW5kIGhvdyBtYW55IGVsZW1lbnRzIHRvIHRoZSByaWdodCBhbmQgc2V0IG1heFxuICAgICAgY29uc3Qgc2FtZVZhbHVlc1RvUmlnaHQgPSBnZXRTYW1lVmFsdWVzKGNvbGxlY3Rpb24uc2xpY2UoaW5kZXgsIG1heCksIGVsZW1lbnQsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaXNMYXN0RWxlbWVudDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIC8vIDEuMSBubyBzZWNvbmRhcnkgY29uZGl0aW9uID0+IGdldCB0aGUgZmlyc3Qgb25lIChsYXN0IGZvciBkZXNjZW5kaW5nKVxuICAgICAgaWYgKGlzRGVzY2VuZGluZykge1xuICAgICAgICByZXR1cm4gaW5kZXggKyBzYW1lVmFsdWVzVG9SaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtaW4gKyBzYW1lVmFsdWVzVG9MZWZ0O1xuICAgICAgLy8gVE9ETzogMS4yIGNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoc2Vjb25kYXJ5IGNvbmRpdGlvblxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IGlzVG9UaGVFbmQgPSBpc0Rlc2NlbmRpbmdcbiAgICAgID8gZ2V0VmFsdWUoY29sbGVjdGlvbltpbmRleF0pID4gZ2V0VmFsdWUoZWxlbWVudClcbiAgICAgIDogZ2V0VmFsdWUoY29sbGVjdGlvbltpbmRleF0pIDwgZ2V0VmFsdWUoZWxlbWVudCk7XG4gICAgaWYgKGlzVG9UaGVFbmQpIHtcbiAgICAgIG1pbiA9IGluZGV4ICsgMTtcbiAgICAgIHN0ZXAgPSBNYXRoLmNlaWwoKG1heCAtIG1pbikgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF4ID0gaW5kZXggLSAxO1xuICAgICAgc3RlcCA9IC1NYXRoLmNlaWwoKG1heCAtIG1pbikgLyAyKTtcbiAgICB9XG4gICAgaWYgKG1pbiA9PT0gbWF4KSB7XG4gICAgICBpbmRleCA9IG1pbjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpbmRleCArPSBzdGVwO1xuICAgIGxvb3BzICs9IDE7XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufTsvKipcbiAqIEdpdmVuIGFuIG9yZGVyZWQgY29sbGVjdGlvbiBvZiBwcmltaXRpdmUgdmFsdWVzIGZvbGxvd2luZyB0aGUgT3JkZXJCeSBjb25kaXRpb24sXG4gKiBpdCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudFxuICogQHBhcmFtIHthcnJheX0gY29sbGVjdGlvblxuICogQHBhcmFtIHsqfSBlbGVtZW50XG4gKiBAcGFyYW0ge3tnZXRWYWx1ZTooZWxlbWVudDoqKT0+c3RyaW5nfG51bWJlciwgaXNEZXNjZW5kaW5nOiBib29sZWFufX0gb3B0aW9uc1xuICogQHBhcmFtIG9wdGlvbnMuZ2V0VmFsdWUgaXQgc2hvdWxkIHJldHVybiB0aGUgdmFsdWUgdXNlZCB0byBvcmRlciB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIG9wdGlvbnMuaXNEZXNjZW5kaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBpbmRleE9mT3JkZXJlZCA9IChjb2xsZWN0aW9uOiBBcnJheTxhbnk+ID0gW10sIGVsZW1lbnQ6IGFueSwgb3B0aW9uczogeyBnZXRWYWx1ZT86IChlbGVtZW50OiBhbnkpID0+IHN0cmluZyB8IG51bWJlcjsgaXNEZXNjZW5kaW5nOiBib29sZWFuOyB9KSA9PiB7XG4gIGlmIChlbGVtZW50ICE9PSAwICYmICFlbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHBhcmFtZXRlcnMnKTtcbiAgfVxuICBjb25zdCB7IGxlbmd0aCB9ID0gY29sbGVjdGlvbjtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgY29uc3Qgb3B0aW9uc0xpc3QgPSBbXS5jb25jYXQob3B0aW9ucyk7XG4gIGxldCBvcHRpb25zSW5kZXggPSAwO1xuICBsZXQgcmVzdWx0O1xuICB3aGlsZSAoIXJlc3VsdCAmJiBvcHRpb25zSW5kZXggPCBvcHRpb25zTGlzdC5sZW5ndGgpIHtcbiAgICBpZiAob3B0aW9uc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gaW5kZXhPZlNpbXBsZU9yZGVyZWQoY29sbGVjdGlvbiwgZWxlbWVudCwgb3B0aW9uc0xpc3RbMF0pO1xuICAgIH1cbiAgICBvcHRpb25zSW5kZXggKz0gMTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuIiwiLyoqXG4gKiBJc29sYXRlZCBmdW5jdGlvbiB0aGF0IGluc2VydHMgYW4gZWxlbWVudCBpbnRvIGEgY29sbGVjdGlvbiwgd2hlbiBjb25kaXRpb24gaXMgbWV0XG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7Kn0gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZGl0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRCeU9yZGVyID0gKGNvbGxlY3Rpb246IEFycmF5PGFueT4gPSBbXSwgZWxlbWVudDogYW55LCBjb25kaXRpb246IEZ1bmN0aW9uID0gKGEgOiBhbnksIGI6IGFueSkgPT4gYSA+IGIpID0+IHtcbiAgY29uc3QgeyBsZW5ndGggfSA9IGNvbGxlY3Rpb247XG4gIGlmIChsZW5ndGgpIHtcbiAgICAvLyB3aGVuZXZlciB0aGUgY29uZGl0aW9uIGlzIG1ldCwgaW5zZXJ0IHRoZSBlbGVtZW50IGludG8gdGhlIGNvbGxlY3Rpb25cbiAgICAvLyBUT0RPOiBvcHRpbWl6ZSByZWN1cnNpdmUgZnVuY3Rpb24gdG8gZmluZCB0aGUgaW5kZXggaW5zaWRlIHRoZSBjb2xsZWN0aW9uXG4gICAgLy8gdXNlIHNpbWlsYXIgYXBwcm9hY2ggdG8gYGluZGV4T2ZPcmRlcmVkYFxuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAvLyB1c2luZyBhIHdoaWxlIGxvb3AgaW5zdGVhZCBhIGZvckVhY2gsIGFzIGl0IGNhbiBiZSBicmVha2VuIHdoZW4gY29uZGl0aW9uIGlzIG1ldFxuICAgIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpc0NvbmRpdGlvbk1ldCA9IGNvbmRpdGlvbihjb2xsZWN0aW9uW2NvdW50ZXJdLCBlbGVtZW50KTtcbiAgICAgIGlmIChpc0NvbmRpdGlvbk1ldCkge1xuICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShjb3VudGVyLCAwLCBlbGVtZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb3VudGVyICs9IDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGluc2VydCBpdCB0aGUgZmlyc3RcbiAgICBjb2xsZWN0aW9uLnB1c2goZWxlbWVudCk7XG4gIH1cbiAgLy8gaWYgbm8gY29sbGVjdGlvbiBpcyBwcm92aWRlZCwgdGhlIGNyZWF0ZWQgb25lIGlzIHJldHVybmVkXG4gIHJldHVybiBjb2xsZWN0aW9uO1xufTtcbiIsIi8qKlxuICogR2l2ZW4gYSBLZXlWYWx1ZUF0dHJpYnV0ZSBvYmplY3QsIGl0IHJldHVybnMgYW4gSHRtbCBhdHRyaWJ1dGUtbGlrZSBzdHJpbmdcbiAqIHRoYXQgY2FuIGJlIGRpcmVjdGx5IGluc2VydGVkIGluIHRoZSBvcGVuaW5nIHRhZ1xuICpcbiAqIEBwYXJhbSB7S2V5VmFsdWVBdHRyaWJ1dGV9IHBhcmFtMFxuICogX19fXG4gKiAgKiAjIyMgRXhhbXBsZTpcbiAqXG4gKiB7a2V5OiAnaWQnLCB2YWx1ZTogJ2Zvbyd9ID0+IGBpZD1cImZvb1wiYFxuICpcbiAqICMjIyBVc2FnZTpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHNwYW5IdG1sID0gYDxzcGFuICR7c2V0SHRtbEF0dHJpYnV0ZSh7a2V5OiAnaWQnLCB2YWx1ZTogJ2Zvbyd9KX0+IGJhciA8L3NwYW4+YDtcbiAqIGBgYFxuICogIyMjIHJlc3VsdDpcbiAqIHNwYW5IdG1sOyAvLyAnPHNwYW4gaWQ9XCJmb29cIj4gYmFyIDwvc3Bhbj4nXG4gKlxuICovXG5leHBvcnQgY29uc3Qgc2V0SHRtbEF0dHJpYnV0ZSA9ICh7IGtleSA9ICcnLCB2YWx1ZSA9ICcnIH0pID0+ICh2YWx1ZS50cmltKCkgPyBgJHtrZXl9PVwiJHt2YWx1ZX1cImAgOiBrZXkpO1xuIiwiaW1wb3J0IHsgaG9zdHNMaXN0UGx1Z2luLCBtYWluVGl0bGVIdG1sLCBtb2RhbFNkayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGVtcGxhdGVUYWcgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgYXBwc0J5SG9zdHMgPSB7XG4gIGFzeW5jIGxvYWQoc3RhdGU6IHsgaXNHcmlkTW9kZTogQm9vbGVhbiB9ID0geyBpc0dyaWRNb2RlOiBmYWxzZSB9KSB7XG4gICAgY29uc3QgaXNMb2FkZWQgPSBhd2FpdCBob3N0c0xpc3RQbHVnaW4ubG9hZCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NpbHZlcml1bS92YW5pbGxhLWNoYWxsZW5nZS9tYXN0ZXIvc3JjL21vY2tzL2hvc3QtYXBwLWRhdGEuanNvbicpO1xuICAgIGlmKCFpc0xvYWRlZCl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBsb2FkIGRhdGEnKVxuICAgIH1cbiAgICBsZXQgeyBpc0dyaWRNb2RlIH0gPSBzdGF0ZTtcbiAgICBjb25zdCBjb250YWluZXJIdG1sID0gdGVtcGxhdGVUYWcoe1xuICAgICAgYXR0cmlidXRlczogW3sga2V5OiAnY2xhc3MnLCB2YWx1ZTogJ2NvbnRhaW5lcicgfV0sXG4gICAgICBjb250ZW50OiBbbWFpblRpdGxlSHRtbCwgaG9zdHNMaXN0UGx1Z2luLmdldEh0bWwoKV0uam9pbignICcpLFxuICAgIH0pO1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGNvbnRhaW5lckh0bWwsICd0ZXh0L2h0bWwnKTtcblxuICAgIGNvbnN0IGNoZWNrYm94Tm9kZSA9IGRvYy5nZXRFbGVtZW50QnlJZCgnbGlzdE1vZGVDaGVja2JveCcpO1xuICAgIGNvbnN0IGhvc3RzTGlzdE5vZGUgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ2hvc3RzTGlzdCcpO1xuICAgIGNvbnN0IHsgY2hpbGROb2RlczogbGFiZWxOb2RlcyB9ID0gY2hlY2tib3hOb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgbGFiZWxUZXh0Tm9kZSA9IGxhYmVsTm9kZXNbbGFiZWxOb2Rlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjbGFzc2VzVG9Ub2dnbGUgPSBbJ2dyaWQtbW9kZScsICdkLWZsZXgnLCAnZmxleC13cmFwJ107XG4gICAgY2hlY2tib3hOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpc0NoZWNrYm94ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAoaXNDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIGlzR3JpZE1vZGUgPSB0cnVlO1xuICAgICAgICBjbGFzc2VzVG9Ub2dnbGUuZm9yRWFjaChjbGFzc05hbWUgPT4gaG9zdHNMaXN0Tm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgICAgICAvLyBob3N0c0xpc3ROb2RlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlc1RvVG9nZ2xlKTsgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBJRSAxMVxuICAgICAgICBsYWJlbFRleHROb2RlLnRleHRDb250ZW50ID0gJyBTaG93IGFzIGxpc3QnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNHcmlkTW9kZSA9IGZhbHNlO1xuICAgICAgICBjbGFzc2VzVG9Ub2dnbGUuZm9yRWFjaChjbGFzc05hbWUgPT4gaG9zdHNMaXN0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xuICAgICAgICBsYWJlbFRleHROb2RlLnRleHRDb250ZW50ID0gJyBTaG93IGFzIGFuIGF3ZXNvbWUgZ3JpZCc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGlzR3JpZE1vZGUpIHtcbiAgICAgIGNoZWNrYm94Tm9kZS5jbGljaygpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5ID0gZG9jLmJvZHk7XG4gICAgY29uc3QgbW9kYWxNYW5hZ2VyID0gbW9kYWxTZGsoKTtcblxuICAgIGNvbnN0IGhvc3ROYW1lTm9kZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdob3N0VGl0bGUnKTtcbiAgICBBcnJheS5mcm9tKGhvc3ROYW1lTm9kZXMpLmZvckVhY2goKGhvc3ROYW1lTm9kZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGhvc3ROYW1lTm9kZS5jbGFzc0xpc3QuYWRkKCdjdXJzb3ItcG9pbnRlcicpO1xuICAgICAgaG9zdE5hbWVOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGhvc3ROYW1lIH0gPSBob3N0TmFtZU5vZGUuZGF0YXNldDtcbiAgICAgICAgbW9kYWxNYW5hZ2VyLnNldEhlYWRlcihob3N0TmFtZSk7XG5cbiAgICAgICAgbW9kYWxNYW5hZ2VyLnNldEJvZHkoaG9zdHNMaXN0UGx1Z2luLmdldEhvc3RzSHRtbChbaG9zdE5hbWVdKSk7XG5cbiAgICAgICAgbW9kYWxNYW5hZ2VyLnNob3coKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGFkZGluZyBvbmUgZXZlbnQgbGlzdGVuZXIgZm9yIGVhY2ggaG9zdHMtbGlzdCBub2RlLiBJdCBmZWVscyBtb3JlIHNlbnNpdGl2ZSB0aGFuIG9uZSBmb3IgYWxsIHRoZSB2aWV3XG4gICAgY29uc3QgaG9zdHNMaXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvc3RzLWxpc3QnKTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGhvc3RzTGlzdHMsIChob3N0TGlzdE5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBob3N0c0xpc3ROb2RlLmNsYXNzTGlzdC5hZGQoJ2N1cnNvci1wb2ludGVyJyk7XG4gICAgICBob3N0TGlzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBhcHBJbkhvc3Q6IEhUTUxFbGVtZW50ID0gKHRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLmFwcEluSG9zdCcpO1xuICAgICAgICBpZiAoYXBwSW5Ib3N0KSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc3QgeyBhcHBOYW1lLCByYW5raW5nSW5kZXgsIGhvc3ROYW1lIH0gPSBhcHBJbkhvc3QuZGF0YXNldDtcbiAgICAgICAgICBtb2RhbE1hbmFnZXIuc2V0SGVhZGVyKGFwcE5hbWUpO1xuICAgICAgICAgIGNvbnN0IGhvc3RKc29uID0gd2luZG93LkFwZGV4LmdldFRvcEFwcHNCeUhvc3QoaG9zdE5hbWUpW3JhbmtpbmdJbmRleF07XG4gICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uSWQgPSBob3N0SnNvbi5uYW1lLnJlcGxhY2UoL1tcXFddXFxkLywgJycpO1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbkh0bWwgPSB0ZW1wbGF0ZVRhZyh7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY29udGVudDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRlbGV0ZUJ1dHRvbklkLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IGtleTogJ2NsYXNzJywgdmFsdWU6ICdidG4tZGFuZ2VyJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHZlcnNpb25IdG1sID0gdGVtcGxhdGVUYWcoeyBjb250ZW50OiBgdmVyc2lvbjogJHtob3N0SnNvbi52ZXJzaW9ufWAgfSk7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRlbXBsYXRlVGFnKHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFt7IGtleTogJ2NsYXNzJywgdmFsdWU6ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nIH1dLFxuICAgICAgICAgICAgY29udGVudDogdmVyc2lvbkh0bWwgKyBidXR0b25IdG1sLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1vZGFsTWFuYWdlci5zZXRCb2R5KHdyYXBwZXIpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlbGV0ZUJ1dHRvbklkKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LkFwZGV4LnJlbW92ZUFwcFRvSG9zdHMoaG9zdEpzb24pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudGNoZWNrYm94Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0TW9kZUNoZWNrYm94JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMubG9hZCh7IGlzR3JpZE1vZGU6IGN1cnJlbnRjaGVja2JveE5vZGUuY2hlY2tlZCB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIG1vZGFsTWFuYWdlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbn07XG4iLCJleHBvcnQgeyBhcHBzQnlIb3N0cyB9IGZyb20gJy4vYXBwc0J5SG9zdHMvYXBwc0J5SG9zdHMnO1xuZXhwb3J0IHsgbG9hZGVyQ2hhc2VQbHVnaW4gfSBmcm9tICcuL2xvYWRlckNoYXNlL2xvYWRlckNoYXNlJztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi9fbG9hZGVyLWNoYXNlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuL19sb2FkZXItY2hhc2Uuc2Nzcyc7XG5cbmNvbnN0IGlubmVySHRtbCA9IGBcbjxkaXYgY2xhc3M9XCJjZW50ZXJlZFwiPlxuICA8ZGl2IGNsYXNzPVwic2stY2hhc2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2stY2hhc2UtZG90XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNrLWNoYXNlLWRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzay1jaGFzZS1kb3RcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2stY2hhc2UtZG90XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNrLWNoYXNlLWRvdFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzay1jaGFzZS1kb3RcIj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuZXhwb3J0IGNvbnN0IGxvYWRlckNoYXNlUGx1Z2luID0ge1xuICBpbm5lckh0bWwoKSB7XG4gICAgcmV0dXJuIGlubmVySHRtbDtcbiAgfSxcbiAgbG9hZGVyQ2hhc2VOb2RlKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGlubmVySHRtbCwgJ3RleHQvaHRtbCcpO1xuICAgIHJldHVybiBkb2MuYm9keS5maXJzdENoaWxkO1xuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=