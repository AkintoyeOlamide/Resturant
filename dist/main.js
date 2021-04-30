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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\r\n    const item = document.querySelector('.item');\r\n\r\n    const aboutTitle = document.createElement('h2');\r\n    aboutTitle.classList.add('center');\r\n    aboutTitle.textContent = 'La Pasta Italian cusine';\r\n\r\n    const aboutText = document.createElement('p');\r\n    aboutText.classList.add('center');\r\n    aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';\r\n\r\n    item.appendChild(aboutTitle);\r\n    item.appendChild(aboutText);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://resturant/./src/about.js?");

/***/ }),

/***/ "./src/burgers.jpeg":
/*!**************************!*\
  !*** ./src/burgers.jpeg ***!
  \**************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://resturant/./src/burgers.jpeg?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createIcon = (class1, class2) => {\r\n    const link = document.createElement('a');\r\n    link.classList.add('m-left-10');\r\n    link.href = '#';\r\n    const icon = document.createElement('i');\r\n    icon.classList.add(class1, class2);\r\n    link.appendChild(icon);\r\n\r\n    return link;\r\n};\r\n\r\nconst contact = () => {\r\n    const item = document.querySelector('.item');\r\n\r\n    const links = document.createElement('h2');\r\n    links.classList.add('center');\r\n    links.textContent = 'Follow us on:';\r\n\r\n    const instaLink = createIcon('fab', 'fa-instagram');\r\n    const twitterLink = createIcon('fab', 'fa-twitter');\r\n    const fbLink = createIcon('fab', 'fa-facebook-f');\r\n\r\n    links.appendChild(instaLink);\r\n    links.appendChild(twitterLink);\r\n    links.appendChild(fbLink);\r\n\r\n    const aboutText = document.createElement('p');\r\n    aboutText.classList.add('center');\r\n    aboutText.textContent = \"You can contact us here, 'adress'\";\r\n\r\n    item.appendChild(aboutText);\r\n    item.appendChild(links);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://resturant/./src/contact.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_home__WEBPACK_IMPORTED_MODULE_0__.header();\r\n_home__WEBPACK_IMPORTED_MODULE_0__.main();\r\n(0,_about__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\nconst item = document.querySelector('.item');\r\nconst tabs = document.querySelectorAll('.tab');\r\nconst tabMethods = [_about__WEBPACK_IMPORTED_MODULE_1__.default, _menu__WEBPACK_IMPORTED_MODULE_2__.default, _contact__WEBPACK_IMPORTED_MODULE_3__.default];\r\n\r\nconst openTab = (index) => {\r\n  item.innerHTML = '';\r\n\r\n  for (let i = 0; i < tabs.length; i += 1) {\r\n    tabs[i].classList.remove('active');\r\n  }\r\n\r\n  tabs[index].classList.add('active');\r\n  tabMethods[index]();\r\n};\r\n\r\nfor (let i = 0; i < tabs.length; i += 1) {\r\n  tabs[i].onclick = openTab.bind(null, i);\r\n}\n\n//# sourceURL=webpack://resturant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pizza2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza2.jpg */ \"./src/pizza2.jpg\");\n/* harmony import */ var _pizza2_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pizza2_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pasta_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasta.png */ \"./src/pasta.png\");\n/* harmony import */ var _pasta_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pasta_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _burgers_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burgers.jpeg */ \"./src/burgers.jpeg\");\n/* harmony import */ var _burgers_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_burgers_jpeg__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst MenuCategory = (title, imgUrl, options) => {\r\n    const getTitle = () => title;\r\n    const getImg = () => imgUrl;\r\n    const getOptions = () => options;\r\n\r\n    return {\r\n        getTitle,\r\n        getImg,\r\n        getOptions,\r\n    };\r\n};\r\n\r\nconst Option = (title, price, description) => {\r\n    const getTitle = () => title;\r\n    const getPrice = () => price;\r\n    const getDescription = () => description;\r\n\r\n    return {\r\n        getTitle,\r\n        getPrice,\r\n        getDescription,\r\n    };\r\n};\r\n\r\nconst option1 = Option('Lorem ipsum dolor sit amet', '6,20', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.');\r\nconst option2 = Option('Lorem ipsum dolor', '6,20', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.');\r\nconst category1 = MenuCategory('Pizza', (_pizza2_jpg__WEBPACK_IMPORTED_MODULE_0___default()), [option1, option2, option1, option2]);\r\nconst category2 = MenuCategory('Pasta', (_pasta_png__WEBPACK_IMPORTED_MODULE_1___default()), [option1, option2, option1, option2]);\r\nconst category3 = MenuCategory('Burgers', (_burgers_jpeg__WEBPACK_IMPORTED_MODULE_2___default()), [option1, option2, option1, option2]);\r\nconst categories = [category1, category2, category3];\r\n\r\nconst createTitle = (title) => {\r\n    const categoryTitle = document.createElement('h3');\r\n    categoryTitle.textContent = title;\r\n    categoryTitle.classList.add('category-title');\r\n    return categoryTitle;\r\n};\r\n\r\nconst createImg = (imgUrl) => {\r\n    const img = document.createElement('img');\r\n    img.classList.add('menu-img');\r\n    img.src = imgUrl;\r\n\r\n    const imgContainer = document.createElement('div');\r\n    imgContainer.classList.add('img-container');\r\n\r\n    imgContainer.appendChild(img);\r\n\r\n    return imgContainer;\r\n};\r\n\r\nconst createOption = (option) => {\r\n    const title = document.createElement('div');\r\n    title.classList.add('color-white', 'flex', 'space-between');\r\n\r\n    const optionTitle = document.createElement('h4');\r\n    optionTitle.textContent = `${option.getTitle()}`;\r\n    const optionPrice = document.createElement('p');\r\n    optionPrice.textContent = `${option.getPrice()}`;\r\n\r\n    title.appendChild(optionTitle);\r\n    title.appendChild(optionPrice);\r\n\r\n    const desc = document.createElement('p');\r\n    desc.classList.add('m-top-10');\r\n    desc.textContent = option.getDescription();\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('m-top-10');\r\n\r\n    container.appendChild(title);\r\n    container.appendChild(desc);\r\n\r\n    return container;\r\n};\r\n\r\nconst createCategory = (catecory, flexDir) => {\r\n    const options = document.createElement('div');\r\n    options.classList.add('options');\r\n    const optionsArr = catecory.getOptions();\r\n    for (let i = 0; i < optionsArr.length; i += 1) {\r\n        const option = createOption(optionsArr[i]);\r\n        options.appendChild(option);\r\n    }\r\n    const image = createImg(catecory.getImg());\r\n    const wrapper = document.createElement('div');\r\n    wrapper.classList.add('flex-md', 'space-between', `${flexDir}`);\r\n\r\n    wrapper.appendChild(image);\r\n    wrapper.appendChild(options);\r\n    const title = createTitle(catecory.getTitle());\r\n\r\n    const menuCategory = document.createElement('div');\r\n    menuCategory.classList.add('menu-category', 'm-top-20');\r\n    menuCategory.appendChild(title);\r\n    menuCategory.appendChild(wrapper);\r\n\r\n    return menuCategory;\r\n};\r\n\r\nconst menu = () => {\r\n    const item = document.querySelector('.item');\r\n\r\n    for (let i = 0; i < categories.length; i += 1) {\r\n        let flexDirection = 'n';\r\n        if (i % 2 === 0) {\r\n            flexDirection = 'reverse';\r\n        }\r\n        const category = createCategory(categories[i], flexDirection);\r\n        item.appendChild(category);\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://resturant/./src/menu.js?");

/***/ }),

/***/ "./src/pasta.png":
/*!***********************!*\
  !*** ./src/pasta.png ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://resturant/./src/pasta.png?");

/***/ }),

/***/ "./src/pizza2.jpg":
/*!************************!*\
  !*** ./src/pizza2.jpg ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://resturant/./src/pizza2.jpg?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (39:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| sup,\\n| tt,\\n> var,\\n| b,\\n| u,\");\n\n//# sourceURL=webpack://resturant/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .fixed {\\n|     position: fixed;\\n|   }\");\n\n//# sourceURL=webpack://resturant/./src/style.css?");

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