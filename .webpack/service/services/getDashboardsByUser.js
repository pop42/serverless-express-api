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
/******/ 	return __webpack_require__(__webpack_require__.s = "./services/getDashboardsByUser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/dbConfig.js":
/*!****************************!*\
  !*** ./config/dbConfig.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConfig = undefined;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var dbConfig = exports.dbConfig = {
  user: 'SA',
  password: 'RTAFl33tR0x!',
  server: 'localhost',
  database: 'RTAStable_72'
};

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceUnavailableResponse = undefined;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

// for server-based errors (not the client's fault)
// order of params is not important, but params must be an object
var serviceUnavailableResponse = exports.serviceUnavailableResponse = function serviceUnavailableResponse(_ref) {
  var err = _ref.err,
      res = _ref.res,
      sql = _ref.sql;

  if (sql) {
    sql.close();
  }
  if (err) {
    console.error(err);
  }
  if (res) {
    res.status(503);
    return res.send('Service Unavailable');
  }
};

/***/ }),

/***/ "./services/getDashboardsByUser.js":
/*!*****************************************!*\
  !*** ./services/getDashboardsByUser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var _serverlessHttp = __webpack_require__(/*! serverless-http */ "serverless-http");

var _serverlessHttp2 = _interopRequireDefault(_serverlessHttp);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _mssql = __webpack_require__(/*! mssql */ "mssql");

var _mssql2 = _interopRequireDefault(_mssql);

var _utils = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");

var _dbConfig = __webpack_require__(/*! ../config/dbConfig */ "./config/dbConfig.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json({ strict: false }));

app.get('/dashboards/:user', function (req, res) {
  // async function is defined here.  Needs to be named or webpack blows chunks
  var asyncCall = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var result, request, response;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              result = { dashboards: [] };
              _context.next = 4;
              return _mssql2.default.connect(_dbConfig.dbConfig);

            case 4:
              request = new _mssql2.default.Request();

              request.input('user', _mssql2.default.Char(20), req.params.user);

              _context.next = 8;
              return request.execute('hive_sp_getDashboardsByUser');

            case 8:
              response = _context.sent;


              if ((0, _lodash.values)(response.recordset[0])[0].length) {
                result.dashboards = JSON.parse((0, _lodash.values)(response.recordset[0])[0]);
              }

              _mssql2.default.close();
              return _context.abrupt('return', res.json(result));

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](0);

              (0, _utils.serviceUnavailableResponse)({ err: _context.t0, res: res, sql: _mssql2.default });

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 14]]);
    }));

    return function asyncCall() {
      return _ref.apply(this, arguments);
    };
  }();
  // call the function here


  asyncCall();
});

module.exports.handler = (0, _serverlessHttp2.default)(app);

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mssql");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ });
//# sourceMappingURL=getDashboardsByUser.js.map