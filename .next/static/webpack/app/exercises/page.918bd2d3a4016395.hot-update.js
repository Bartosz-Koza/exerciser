"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/exercises/page",{

/***/ "(app-pages-browser)/./components/menu.tsx":
/*!*****************************!*\
  !*** ./components/menu.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Menu auto */ \nvar _s = $RefreshSig$();\n\nconst Menu = ()=>{\n    _s();\n    const types = [\n        \"assisted\",\n        \"band\",\n        \"barbell\",\n        \"body weight\",\n        \"bosu ball\",\n        \"cable,dumbbell,elliptical machine\",\n        \"ez barbell\",\n        \"hammer\",\n        \"kettlebell\",\n        \"leverage machine\",\n        \"medicine ball\",\n        \"olympic barbell\",\n        \"resistance band\",\n        \"roller,rope\",\n        \"skierg machine\",\n        \"sled machine\",\n        \"smith machine\",\n        \"stability ball\",\n        \"stationary bike\",\n        \"stepmill machine\",\n        \"tire,trap bar\",\n        \"upper body ergometer\",\n        \"weighted\",\n        \"wheel roller\"\n    ];\n    const targets = [\n        \"abductors\",\n        \"abs\",\n        \"adductors\",\n        \"biceps\",\n        \"calves\",\n        \"cardiovascular system\",\n        \"delts\",\n        \"forearms\",\n        \"glutes\",\n        \"hamstrings\",\n        \"lats\",\n        \"levator scapulae\",\n        \"pectorals\",\n        \"quads\",\n        \"serratus anterior\",\n        \"spine\",\n        \"traps\",\n        \"triceps\",\n        \"upper back\"\n    ];\n    const bodyParts = [\n        \"back\",\n        \"cardio\",\n        \"chest\",\n        \"lower arms\",\n        \"lower legs\",\n        \"neck\",\n        \"shoulders\",\n        \"upper arms\",\n        \"upper legs\",\n        \"waist\"\n    ];\n    const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[300px] fixed left-4rounded-lg overflow-hidden z-50 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-lg font-bold mb-2\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Search by:\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: select,\n                    onChange: (e)=>{\n                        setSelect(select), console.log(select);\n                    },\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            selected: true,\n                            children: \"none\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"name\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"type\",\n                            children: \"Type\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"target\",\n                            children: \"Target\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"bodyPart\",\n                            children: \"Body Part\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                select == \"name\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Search by name\",\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            disabled: true,\n                            selected: true,\n                            children: \"Select Type\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined),\n                        types.map((type, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                children: type\n                            }, index, false, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            disabled: true,\n                            selected: true,\n                            children: \"Select Target\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, undefined),\n                        targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                children: target\n                            }, index, false, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            disabled: true,\n                            selected: true,\n                            children: \"Select Body Part\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        bodyParts.map((part, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                children: part\n                            }, index, false, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 17\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n            lineNumber: 71,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Menu, \"0mHWzXDTs6t423WZRz70HuZ0LUQ=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBRWpDLE1BQU1FLE9BQU87O0lBQ2xCLE1BQU1DLFFBQWtCO1FBQ3RCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsVUFBb0I7UUFDeEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLFlBQXNCO1FBQzFCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBO0lBRXBDLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNmLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXlCOzs7Ozs7OEJBQ3ZDLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDSjtvQkFBT0ssT0FBT0w7b0JBQVFNLFVBQVUsQ0FBQ0M7d0JBQU9OLFVBQVVELFNBQVNRLFFBQVFDLEdBQUcsQ0FBQ1Q7b0JBQU87b0JBQUdHLFdBQVU7O3NDQUMxRiw4REFBQ087NEJBQU9DLFFBQVE7c0NBQUM7Ozs7OztzQ0FDakIsOERBQUNEOzRCQUFPTCxPQUFNO3NDQUFPOzs7Ozs7c0NBQ3JCLDhEQUFDSzs0QkFBT0wsT0FBTTtzQ0FBTzs7Ozs7O3NDQUNyQiw4REFBQ0s7NEJBQU9MLE9BQU07c0NBQVM7Ozs7OztzQ0FDdkIsOERBQUNLOzRCQUFPTCxPQUFNO3NDQUFXOzs7Ozs7Ozs7Ozs7Z0JBR3pCTCxVQUFVLHdCQUNWLDhEQUFDWTtvQkFBTUMsTUFBSztvQkFBT0MsYUFBWTtvQkFBaUJYLFdBQVU7Ozs7Ozs4QkFFNUQsOERBQUNIO29CQUFPRyxXQUFVOztzQ0FDZCw4REFBQ087NEJBQU9MLE9BQU07NEJBQUdVLFFBQVE7NEJBQUNKLFFBQVE7c0NBQUM7Ozs7Ozt3QkFDbENkLE1BQU1tQixHQUFHLENBQUMsQ0FBQ0gsTUFBTUksc0JBQ2QsOERBQUNQOzBDQUFvQkc7K0JBQVJJOzs7Ozs7Ozs7Ozs4QkFHckIsOERBQUNqQjtvQkFBT0csV0FBVTs7c0NBQ2QsOERBQUNPOzRCQUFPTCxPQUFNOzRCQUFHVSxRQUFROzRCQUFDSixRQUFRO3NDQUFDOzs7Ozs7d0JBQ2xDYixRQUFRa0IsR0FBRyxDQUFDLENBQUNFLFFBQVFELHNCQUNsQiw4REFBQ1A7MENBQW9CUTsrQkFBUkQ7Ozs7Ozs7Ozs7OzhCQUdyQiw4REFBQ2pCO29CQUFPRyxXQUFVOztzQ0FDZCw4REFBQ087NEJBQU9MLE9BQU07NEJBQUdVLFFBQVE7NEJBQUNKLFFBQVE7c0NBQUM7Ozs7Ozt3QkFDbENaLFVBQVVpQixHQUFHLENBQUMsQ0FBQ0csTUFBTUYsc0JBQ2xCLDhEQUFDUDswQ0FBb0JTOytCQUFSRjs7Ozs7Ozs7Ozs7OEJBR3JCLDhEQUFDRztvQkFBT2pCLFdBQVU7OEJBQXVFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRyxFQUFFO0dBdkdXUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUudHN4Pzc4OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTWVudSA9ICgpID0+IHtcbiAgY29uc3QgdHlwZXM6IHN0cmluZ1tdID0gW1xuICAgIFwiYXNzaXN0ZWRcIixcbiAgICBcImJhbmRcIixcbiAgICBcImJhcmJlbGxcIixcbiAgICBcImJvZHkgd2VpZ2h0XCIsXG4gICAgXCJib3N1IGJhbGxcIixcbiAgICBcImNhYmxlLGR1bWJiZWxsLGVsbGlwdGljYWwgbWFjaGluZVwiLFxuICAgIFwiZXogYmFyYmVsbFwiLFxuICAgIFwiaGFtbWVyXCIsXG4gICAgXCJrZXR0bGViZWxsXCIsXG4gICAgXCJsZXZlcmFnZSBtYWNoaW5lXCIsXG4gICAgXCJtZWRpY2luZSBiYWxsXCIsXG4gICAgXCJvbHltcGljIGJhcmJlbGxcIixcbiAgICBcInJlc2lzdGFuY2UgYmFuZFwiLFxuICAgIFwicm9sbGVyLHJvcGVcIixcbiAgICBcInNraWVyZyBtYWNoaW5lXCIsXG4gICAgXCJzbGVkIG1hY2hpbmVcIixcbiAgICBcInNtaXRoIG1hY2hpbmVcIixcbiAgICBcInN0YWJpbGl0eSBiYWxsXCIsXG4gICAgXCJzdGF0aW9uYXJ5IGJpa2VcIixcbiAgICBcInN0ZXBtaWxsIG1hY2hpbmVcIixcbiAgICBcInRpcmUsdHJhcCBiYXJcIixcbiAgICBcInVwcGVyIGJvZHkgZXJnb21ldGVyXCIsXG4gICAgXCJ3ZWlnaHRlZFwiLFxuICAgIFwid2hlZWwgcm9sbGVyXCIsXG4gIF07XG4gIGNvbnN0IHRhcmdldHM6IHN0cmluZ1tdID0gW1xuICAgIFwiYWJkdWN0b3JzXCIsXG4gICAgXCJhYnNcIixcbiAgICBcImFkZHVjdG9yc1wiLFxuICAgIFwiYmljZXBzXCIsXG4gICAgXCJjYWx2ZXNcIixcbiAgICBcImNhcmRpb3Zhc2N1bGFyIHN5c3RlbVwiLFxuICAgIFwiZGVsdHNcIixcbiAgICBcImZvcmVhcm1zXCIsXG4gICAgXCJnbHV0ZXNcIixcbiAgICBcImhhbXN0cmluZ3NcIixcbiAgICBcImxhdHNcIixcbiAgICBcImxldmF0b3Igc2NhcHVsYWVcIixcbiAgICBcInBlY3RvcmFsc1wiLFxuICAgIFwicXVhZHNcIixcbiAgICBcInNlcnJhdHVzIGFudGVyaW9yXCIsXG4gICAgXCJzcGluZVwiLFxuICAgIFwidHJhcHNcIixcbiAgICBcInRyaWNlcHNcIixcbiAgICBcInVwcGVyIGJhY2tcIixcbiAgXTtcblxuICBjb25zdCBib2R5UGFydHM6IHN0cmluZ1tdID0gW1xuICAgIFwiYmFja1wiLFxuICAgIFwiY2FyZGlvXCIsXG4gICAgXCJjaGVzdFwiLFxuICAgIFwibG93ZXIgYXJtc1wiLFxuICAgIFwibG93ZXIgbGVnc1wiLFxuICAgIFwibmVja1wiLFxuICAgIFwic2hvdWxkZXJzXCIsXG4gICAgXCJ1cHBlciBhcm1zXCIsXG4gICAgXCJ1cHBlciBsZWdzXCIsXG4gICAgXCJ3YWlzdFwiLFxuICBdO1xuXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVszMDBweF0gZml4ZWQgbGVmdC00cm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gei01MCBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItMlwiPlNlYXJjaDwvaDE+XG4gICAgICAgIDxoMT5TZWFyY2ggYnk6PC9oMT5cbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0fSBvbkNoYW5nZT17KGUpID0+IHtzZXRTZWxlY3Qoc2VsZWN0KSwgY29uc29sZS5sb2coc2VsZWN0KX19IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+bm9uZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lXCI+TmFtZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0eXBlXCI+VHlwZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0YXJnZXRcIj5UYXJnZXQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYm9keVBhcnRcIj5Cb2R5IFBhcnQ8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3QgPT0gJ25hbWUnICYmXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgbmFtZVwiIGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPjwvaW5wdXQ+XG4gICAgICAgIH1cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5TZWxlY3QgVHlwZTwvb3B0aW9uPlxuICAgICAgICAgICAge3R5cGVzLm1hcCgodHlwZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9Pnt0eXBlfTwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlNlbGVjdCBUYXJnZXQ8L29wdGlvbj5cbiAgICAgICAgICAgIHt0YXJnZXRzLm1hcCgodGFyZ2V0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0+e3RhcmdldH08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5TZWxlY3QgQm9keSBQYXJ0PC9vcHRpb24+XG4gICAgICAgICAgICB7Ym9keVBhcnRzLm1hcCgocGFydCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9PntwYXJ0fTwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+U2VhcmNoPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWVudSIsInR5cGVzIiwidGFyZ2V0cyIsImJvZHlQYXJ0cyIsInNlbGVjdCIsInNldFNlbGVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwibWFwIiwiaW5kZXgiLCJ0YXJnZXQiLCJwYXJ0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/menu.tsx\n"));

/***/ })

});