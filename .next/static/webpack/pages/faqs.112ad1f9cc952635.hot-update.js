"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faqs",{

/***/ "./src/components/GaddenAccordion.js":
/*!*******************************************!*\
  !*** ./src/components/GaddenAccordion.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Accordion */ \"./node_modules/react-bootstrap/esm/Accordion.js\");\n\n\nconst GaddenAccordion = (param)=>{\n    let { event, active, onClick, title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"accordion-card mb-15\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"accordion-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Toggle, {\n                    as: \"h6\",\n                    eventKey: event,\n                    \"aria-expanded\": active === event ? \"true\" : \"false\",\n                    onClick: ()=>onClick(),\n                    className: \"accordion-title\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/components/GaddenAccordion.js\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/components/GaddenAccordion.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Collapse, {\n                eventKey: event,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"accordion-body\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"1gaddenAccordion.ja  ed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiam eaque quae abillo inventorecy veritatis et architecto beatae vitae dicta sunt explicabo.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/components/GaddenAccordion.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/components/GaddenAccordion.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/components/GaddenAccordion.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/craigaustin/Documents/GitHub/bedazzled/src/components/GaddenAccordion.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GaddenAccordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GaddenAccordion);\nvar _c;\n$RefreshReg$(_c, \"GaddenAccordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWRkZW5BY2NvcmRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFDNUMsTUFBTUMsa0JBQWtCO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO0lBQ3hELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNQLHdFQUFnQjtvQkFDZlMsSUFBRztvQkFDSEMsVUFBVVI7b0JBQ1ZTLGlCQUFlUixXQUFXRCxRQUFRLFNBQVM7b0JBQzNDRSxTQUFTLElBQU1BO29CQUNmRyxXQUFVOzhCQUNURjs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNMLDBFQUFrQjtnQkFBQ1UsVUFBVVI7MEJBQzVCLDRFQUFDSTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ007a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmI7S0FwQ01aO0FBcUNOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhZGRlbkFjY29yZGlvbi5qcz9kZTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuY29uc3QgR2FkZGVuQWNjb3JkaW9uID0gKHsgZXZlbnQsIGFjdGl2ZSwgb25DbGljaywgdGl0bGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jYXJkIG1iLTE1XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiPlxyXG4gICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlXHJcbiAgICAgICAgICBhcz1cImg2XCJcclxuICAgICAgICAgIGV2ZW50S2V5PXtldmVudH1cclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2FjdGl2ZSA9PT0gZXZlbnQgPyBcInRydWVcIiA6IFwiZmFsc2VcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e2V2ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgMWdhZGRlbkFjY29yZGlvbi5qYSAgZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyB2b2x1cHRhdGVtIGFjY3VzYW50aXVtXHJcbiAgICAgICAgICAgIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSB0b3RhbSBhcGVyaWFtIGVhcXVlIHF1YWUgYWJpbGxvIGludmVudG9yZWN5XHJcbiAgICAgICAgICAgIHZlcml0YXRpcyBldCBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50IGV4cGxpY2Fiby5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHYWRkZW5BY2NvcmRpb247XHJcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJHYWRkZW5BY2NvcmRpb24iLCJldmVudCIsImFjdGl2ZSIsIm9uQ2xpY2siLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsIlRvZ2dsZSIsImFzIiwiZXZlbnRLZXkiLCJhcmlhLWV4cGFuZGVkIiwiQ29sbGFwc2UiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GaddenAccordion.js\n"));

/***/ })

});