/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["instrumentation"],{

/***/ "(instrument)/./instrumentation.js":
/*!****************************!*\
  !*** ./instrumentation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(instrument)/./lib/db.js\");\n\nasync function register() {\n    console.log(\"API Endpoint:\", process.env.NEXT_PUBLIC_API_URL);\n    console.log(\"Connecting to database...\");\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRXhCLGVBQWVDO0lBQ3BCQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtJQUM1REosUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUgsbURBQU9BO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW5zdHJ1bWVudGF0aW9uLmpzPzA3ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvbGliL2RiXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgY29uc29sZS5sb2coXCJBUEkgRW5kcG9pbnQ6XCIsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpXG4gIGNvbnNvbGUubG9nKFwiQ29ubmVjdGluZyB0byBkYXRhYmFzZS4uLlwiKTtcbiAgYXdhaXQgY29ubmVjdCgpO1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJyZWdpc3RlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.js\n");

/***/ }),

/***/ "(instrument)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"(instrument)/./node_modules/.pnpm/mongoose@8.6.0/node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI;\nif (!MONGO_URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env\");\n}\nlet cached = __webpack_require__.g.mongoose;\nif (!cached) {\n    cached = __webpack_require__.g.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, opts).then((mongoose)=>{\n            console.log(\"DB connected\");\n        // console.debug(mongoose)\n        // return mongoose\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNGLFNBQVM7QUFFdkMsSUFBSSxDQUFDQSxXQUFXO0lBQ1osTUFBTSxJQUFJRyxNQUNOO0FBRVI7QUFFQSxJQUFJQyxTQUFTQyxxQkFBTUEsQ0FBQ04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDVEEsU0FBU0MscUJBQU1BLENBQUNOLFFBQVEsR0FBRztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUMzRDtBQUVBLGVBQWVDO0lBQ1gsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2IsT0FBT0YsT0FBT0UsSUFBSTtJQUN0QjtJQUNBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ2pCLE1BQU1FLE9BQU87WUFDVEMsZ0JBQWdCO1FBQ3BCO1FBQ0FOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVdTLE1BQzVDRyxJQUFJLENBQUNiLENBQUFBO1lBQ0ZjLFFBQVFDLEdBQUcsQ0FBQztRQUNaLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDdEI7SUFDSjtJQUNBLElBQUk7UUFDQVYsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDdEMsRUFBRSxPQUFPUSxHQUFHO1FBQ1JYLE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNUTtJQUNWO0lBRUEsT0FBT1gsT0FBT0UsSUFBSTtBQUN0QjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgTU9OR09fVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJXG5cbmlmICghTU9OR09fVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09fVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52JyxcbiAgICApXG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2VcblxuaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gICAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWQuY29ublxuICAgIH1cbiAgICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPX1VSSSwgb3B0cylcbiAgICAgICAgLnRoZW4obW9uZ29vc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RCIGNvbm5lY3RlZCcpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKG1vbmdvb3NlKVxuICAgICAgICAgICAgLy8gcmV0dXJuIG1vbmdvb3NlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbFxuICAgICAgICB0aHJvdyBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./lib/db.js\n");

/***/ }),

/***/ "(instrument)/./node_modules/.pnpm/mongoose@8.6.0/node_modules/mongoose/dist/browser.umd.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/mongoose@8.6.0/node_modules/mongoose/dist/browser.umd.js ***!
  \*************************************************************************************/
/***/ (function(module) {


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.js"));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_instrumentation = __webpack_exports__;
/******/ }
]);