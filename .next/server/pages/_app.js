/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GA_TRACKING_ID: () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\nconst GA_TRACKING_ID = \"G-2KG9RNCQTG\"; // your GA4 ID\n// Send pageview\nconst pageview = (url)=>{\n    if (typeof window.gtag !== \"undefined\") {\n        window.gtag(\"config\", GA_TRACKING_ID, {\n            page_path: url\n        });\n    }\n};\n// Send custom events\nconst event = ({ action, params })=>{\n    if (typeof window.gtag !== \"undefined\") {\n        window.gtag(\"event\", action, params);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9ndGFnLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLGlCQUFpQixlQUFlLENBQUMsY0FBYztBQUU1RCxnQkFBZ0I7QUFDVCxNQUFNQyxXQUFXLENBQUNDO0lBQ3ZCLElBQUksT0FBT0MsT0FBT0MsSUFBSSxLQUFLLGFBQWE7UUFDdENELE9BQU9DLElBQUksQ0FBQyxVQUFVSixnQkFBZ0I7WUFDcENLLFdBQVdIO1FBQ2I7SUFDRjtBQUNGLEVBQUU7QUFFRixxQkFBcUI7QUFDZCxNQUFNSSxRQUFRLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDdEMsSUFBSSxPQUFPTCxPQUFPQyxJQUFJLEtBQUssYUFBYTtRQUN0Q0QsT0FBT0MsSUFBSSxDQUFDLFNBQVNHLFFBQVFDO0lBQy9CO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL2NyYWlnYXVzdGluL0RvY3VtZW50cy9HaXRIdWIvYmVkYXp6bGVkL2xpYi9ndGFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9IFwiRy0yS0c5Uk5DUVRHXCI7IC8vIHlvdXIgR0E0IElEXG5cbi8vIFNlbmQgcGFnZXZpZXdcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuZ3RhZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgICBwYWdlX3BhdGg6IHVybCxcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gU2VuZCBjdXN0b20gZXZlbnRzXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIHBhcmFtcyB9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93Lmd0YWcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuZ3RhZyhcImV2ZW50XCIsIGFjdGlvbiwgcGFyYW1zKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJHQV9UUkFDS0lOR19JRCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwicGFyYW1zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/gtag.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/layouts/Preloader */ \"(pages-dir-node)/./src/layouts/Preloader.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"(pages-dir-node)/./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/gtag */ \"(pages-dir-node)/./lib/gtag.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animate.css/animate.min.css */ \"(pages-dir-node)/./node_modules/animate.css/animate.min.css\");\n/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>{\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // Handle client-side route changes for GA\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const handleRouteChange = {\n                \"App.useEffect.handleRouteChange\": (url)=>{\n                    // Skip tracking on /reviews if needed\n                    if (url === \"/reviews\") return;\n                    _lib_gtag__WEBPACK_IMPORTED_MODULE_6__.pageview(url);\n                }\n            }[\"App.useEffect.handleRouteChange\"];\n            router.events.on(\"routeChangeComplete\", handleRouteChange);\n            return ({\n                \"App.useEffect\": ()=>{\n                    router.events.off(\"routeChangeComplete\", handleRouteChange);\n                }\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], [\n        router.events\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"App.useEffect\": ()=>{\n            setTimeout({\n                \"App.useEffect\": ()=>{\n                    setLoading(false);\n                }\n            }[\"App.useEffect\"], 1000);\n        }\n    }[\"App.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"microsoft-clarity\",\n                strategy: \"afterInteractive\",\n                children: `\n          (function(c,l,a,r,i,t,y){\n              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n              t=l.createElement(r);t.async=1;t.src=\"https://www.clarity.ms/tag/\"+i;\n              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n          })(window, document, \"clarity\", \"script\", \"tn3zd74i0j\");\n        `\n            }, void 0, false, {\n                fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_6__.GA_TRACKING_ID}`,\n                strategy: \"afterInteractive\"\n            }, void 0, false, {\n                fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/pages/_app.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"gtag-init\",\n                strategy: \"afterInteractive\",\n                children: `\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          // Default config: disable auto pageview, we track manually\n          gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_6__.GA_TRACKING_ID}', { send_page_view: false });\n        `\n            }, void 0, false, {\n                fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/pages/_app.js\",\n                lineNumber: 63,\n                columnNumber: 19\n            }, undefined),\n            !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/pages/_app.js\",\n                lineNumber: 64,\n                columnNumber: 20\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/pages/_app.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ25CO0FBQ0k7QUFDcUI7QUFDZDtBQUNKO0FBRUw7QUFDTTtBQUVyQyxNQUFNUSxNQUFNLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1RLFNBQVNQLHNEQUFTQTtJQUV4QiwwQ0FBMEM7SUFDMUNGLGdEQUFTQTt5QkFBQztZQUNSLE1BQU1VO21EQUFvQixDQUFDQztvQkFDekIsc0NBQXNDO29CQUN0QyxJQUFJQSxRQUFRLFlBQVk7b0JBQ3hCUiwrQ0FBYSxDQUFDUTtnQkFDaEI7O1lBRUFGLE9BQU9JLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1Qko7WUFDeEM7aUNBQU87b0JBQ0xELE9BQU9JLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkw7Z0JBQzNDOztRQUNGO3dCQUFHO1FBQUNELE9BQU9JLE1BQU07S0FBQztJQUVsQmIsZ0RBQVNBO3lCQUFDO1lBQ1JnQjtpQ0FBVztvQkFDVFIsV0FBVztnQkFDYjtnQ0FBRztRQUNMO3dCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1QsMkNBQVFBOzswQkFJUCw4REFBQ0Qsb0RBQU1BO2dCQUFDbUIsSUFBRztnQkFBb0JDLFVBQVM7MEJBQ3JDLENBQUM7Ozs7OztRQU1GLENBQUM7Ozs7OzswQkFFSCw4REFBQ3BCLG9EQUFNQTtnQkFDTHFCLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRWhCLHFEQUFtQixFQUFFO2dCQUN6RWUsVUFBUzs7Ozs7OzBCQUVYLDhEQUFDcEIsb0RBQU1BO2dCQUFDbUIsSUFBRztnQkFBWUMsVUFBUzswQkFDN0IsQ0FBQzs7Ozs7MEJBS2dCLEVBQUVmLHFEQUFtQixDQUFDO1FBQ3hDLENBQUM7Ozs7OztZQUdGSSx5QkFBVyw4REFBQ1gsOERBQVNBOzs7OztZQUNyQixDQUFDVyx5QkFBVyw4REFBQ0Y7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzNDO0FBQ0EsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmFpZ2F1c3Rpbi9Eb2N1bWVudHMvR2l0SHViL2JlZGF6emxlZC9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVsb2FkZXIgZnJvbSBcIkAvc3JjL2xheW91dHMvUHJlbG9hZGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGd0YWcgZnJvbSBcIi4uL2xpYi9ndGFnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIEhhbmRsZSBjbGllbnQtc2lkZSByb3V0ZSBjaGFuZ2VzIGZvciBHQVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgICAgLy8gU2tpcCB0cmFja2luZyBvbiAvcmV2aWV3cyBpZiBuZWVkZWRcclxuICAgICAgaWYgKHVybCA9PT0gXCIvcmV2aWV3c1wiKSByZXR1cm47XHJcbiAgICAgIGd0YWcucGFnZXZpZXcodXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgey8qIEdvb2dsZSBBbmFseXRpY3MgU2NyaXB0ICovfVxyXG5cclxuICAgICAgey8qIE1pY3Jvc29mdCBDbGFyaXR5ICovfVxyXG4gICAgICA8U2NyaXB0IGlkPVwibWljcm9zb2Z0LWNsYXJpdHlcIiBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIj5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgKGZ1bmN0aW9uKGMsbCxhLHIsaSx0LHkpe1xyXG4gICAgICAgICAgICAgIGNbYV09Y1thXXx8ZnVuY3Rpb24oKXsoY1thXS5xPWNbYV0ucXx8W10pLnB1c2goYXJndW1lbnRzKX07XHJcbiAgICAgICAgICAgICAgdD1sLmNyZWF0ZUVsZW1lbnQocik7dC5hc3luYz0xO3Quc3JjPVwiaHR0cHM6Ly93d3cuY2xhcml0eS5tcy90YWcvXCIraTtcclxuICAgICAgICAgICAgICB5PWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUocilbMF07eS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHkpO1xyXG4gICAgICAgICAgfSkod2luZG93LCBkb2N1bWVudCwgXCJjbGFyaXR5XCIsIFwic2NyaXB0XCIsIFwidG4zemQ3NGkwalwiKTtcclxuICAgICAgICBgfVxyXG4gICAgICA8L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtndGFnLkdBX1RSQUNLSU5HX0lEfWB9XHJcbiAgICAgICAgc3RyYXRlZ3k9XCJhZnRlckludGVyYWN0aXZlXCJcclxuICAgICAgLz5cclxuICAgICAgPFNjcmlwdCBpZD1cImd0YWctaW5pdFwiIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAvLyBEZWZhdWx0IGNvbmZpZzogZGlzYWJsZSBhdXRvIHBhZ2V2aWV3LCB3ZSB0cmFjayBtYW51YWxseVxyXG4gICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7Z3RhZy5HQV9UUkFDS0lOR19JRH0nLCB7IHNlbmRfcGFnZV92aWV3OiBmYWxzZSB9KTtcclxuICAgICAgICBgfVxyXG4gICAgICA8L1NjcmlwdD5cclxuXHJcbiAgICAgIHtsb2FkaW5nICYmIDxQcmVsb2FkZXIgLz59XHJcbiAgICAgIHshbG9hZGluZyAmJiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+fVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJIZWFkIiwiU2NyaXB0IiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImd0YWciLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwicGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiIsInNldFRpbWVvdXQiLCJpZCIsInN0cmF0ZWd5Iiwic3JjIiwiR0FfVFJBQ0tJTkdfSUQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/layouts/Preloader.js":
/*!**********************************!*\
  !*** ./src/layouts/Preloader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Preloader = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"preloader\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loader\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pre-shadow\"\n                }, void 0, false, {\n                    fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/layouts/Preloader.js\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pre-box\"\n                }, void 0, false, {\n                    fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/layouts/Preloader.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/layouts/Preloader.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/layouts/Preloader.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9sYXlvdXRzL1ByZWxvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsWUFBWTtJQUNoQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QjtBQUNBLGlFQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvY3JhaWdhdXN0aW4vRG9jdW1lbnRzL0dpdEh1Yi9iZWRhenpsZWQvc3JjL2xheW91dHMvUHJlbG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByZWxvYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZS1zaGFkb3dcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlLWJveFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xyXG4iXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiZGl2IiwiY2xhc3NOYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/layouts/Preloader.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/animate.css"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();