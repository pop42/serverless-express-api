module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./services/dashboards.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./services/dashboards.js":
/*!********************************!*\
  !*** ./services/dashboards.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (14:19)\n\n\u001b[0m \u001b[90m 12 | \u001b[39mapp\u001b[33m.\u001b[39mget(\u001b[32m'/dashboards'\u001b[39m\u001b[33m,\u001b[39m (req\u001b[33m,\u001b[39m res) \u001b[33m=>\u001b[39m {\n \u001b[90m 13 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m  async (dbConfig) {\n \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m    await sql\u001b[33m.\u001b[39m\u001b[33mConnectionError\u001b[39m(dbConfig)\n \u001b[90m 16 | \u001b[39m    \u001b[36mconst\u001b[39m request \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m sql\u001b[33m.\u001b[39m\u001b[33mRequest\u001b[39m()\n \u001b[90m 17 | \u001b[39m    request\u001b[33m.\u001b[39minput(\u001b[32m'user'\u001b[39m\u001b[33m,\u001b[39msql\u001b[33m.\u001b[39m\u001b[33mChar\u001b[39m(\u001b[35m20\u001b[39m)\u001b[33m,\u001b[39m \u001b[32m''\u001b[39m)\u001b[0m\n");

/***/ })

/******/ });
//# sourceMappingURL=dashboards.js.map