/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://resturant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://resturant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '..jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nconst content = document.querySelector('#content');\r\n\r\nconst header = () => {\r\n    const header = document.createElement('header');\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('fixed', 'navbar');\r\n    const restaurant = document.createElement('h1');\r\n    restaurant.textContent = 'La Pasta';\r\n    restaurant.classList.add('center');\r\n\r\n    nav.appendChild(restaurant);\r\n    header.appendChild(nav);\r\n    content.appendChild(header);\r\n};\r\n\r\nconst main = () => {\r\n    const main = document.createElement('main');\r\n    const bg = document.createElement('div');\r\n    bg.classList.add('bg-img', 'fixed');\r\n    bg.style.background = `url(${Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '..jpg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())})`;\r\n    bg.style.backgroundRepeat = 'no-repeat';\r\n    bg.style.backgroundSize = 'cover';\r\n\r\n    const wrapper = document.createElement('div');\r\n    wrapper.classList.add('wrapper');\r\n\r\n    const about = document.createElement('div');\r\n    about.classList.add('tab', 'active');\r\n    about.textContent = 'About';\r\n    const menu = document.createElement('div');\r\n    menu.classList.add('tab');\r\n    menu.textContent = 'Menu';\r\n    const contact = document.createElement('div');\r\n    contact.classList.add('tab');\r\n    contact.textContent = 'Contact';\r\n\r\n    const item = document.createElement('div');\r\n    item.classList.add('item');\r\n\r\n    wrapper.appendChild(about);\r\n    wrapper.appendChild(menu);\r\n    wrapper.appendChild(contact);\r\n    wrapper.appendChild(item);\r\n\r\n    main.appendChild(bg);\r\n    main.appendChild(wrapper);\r\n\r\n    content.appendChild(main);\r\n\r\n    menu.style.left = `${about.offsetWidth}px`;\r\n    contact.style.left = `${about.offsetWidth + menu.offsetWidth}px`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\r\n\n\n//# sourceURL=webpack://resturant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_home__WEBPACK_IMPORTED_MODULE_0__.header();\r\n_home__WEBPACK_IMPORTED_MODULE_0__.main();\r\n_about__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\r\nconst item = document.querySelector('.item');\r\nconst tabs = document.querySelectorAll('.tab');\r\nconst tabMethods = [(_about__WEBPACK_IMPORTED_MODULE_1___default()), (_menu__WEBPACK_IMPORTED_MODULE_2___default()), (_contact__WEBPACK_IMPORTED_MODULE_3___default())];\r\n\r\nconst openTab = (index) => {\r\n  item.innerHTML = '';\r\n\r\n  for (let i = 0; i < tabs.length; i += 1) {\r\n    tabs[i].classList.remove('active');\r\n  }\r\n\r\n  tabs[index].classList.add('active');\r\n  tabMethods[index]();\r\n};\r\n\r\nfor (let i = 0; i < tabs.length; i += 1) {\r\n  tabs[i].onclick = openTab.bind(null, i);\r\n}\r\n\n\n//# sourceURL=webpack://resturant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://resturant/./src/menu.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://resturant/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://resturant/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;