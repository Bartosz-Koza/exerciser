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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Menu auto */ \nvar _s = $RefreshSig$();\n\nconst Menu = ()=>{\n    _s();\n    const types = [\n        \"assisted\",\n        \"band\",\n        \"barbell\",\n        \"body weight\",\n        \"bosu ball\",\n        \"cable,dumbbell,elliptical machine\",\n        \"ez barbell\",\n        \"hammer\",\n        \"kettlebell\",\n        \"leverage machine\",\n        \"medicine ball\",\n        \"olympic barbell\",\n        \"resistance band\",\n        \"roller,rope\",\n        \"skierg machine\",\n        \"sled machine\",\n        \"smith machine\",\n        \"stability ball\",\n        \"stationary bike\",\n        \"stepmill machine\",\n        \"tire,trap bar\",\n        \"upper body ergometer\",\n        \"weighted\",\n        \"wheel roller\"\n    ];\n    const targets = [\n        \"abductors\",\n        \"abs\",\n        \"adductors\",\n        \"biceps\",\n        \"calves\",\n        \"cardiovascular system\",\n        \"delts\",\n        \"forearms\",\n        \"glutes\",\n        \"hamstrings\",\n        \"lats\",\n        \"levator scapulae\",\n        \"pectorals\",\n        \"quads\",\n        \"serratus anterior\",\n        \"spine\",\n        \"traps\",\n        \"triceps\",\n        \"upper back\"\n    ];\n    const bodyParts = [\n        \"back\",\n        \"cardio\",\n        \"chest\",\n        \"lower arms\",\n        \"lower legs\",\n        \"neck\",\n        \"shoulders\",\n        \"upper arms\",\n        \"upper legs\",\n        \"waist\"\n    ];\n    const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [body, SetBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[300px] fixed left-4rounded-lg overflow-hidden z-50 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-lg font-bold mb-2\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Search by:\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: select,\n                    onChange: (e)=>{\n                        setSelect(e.target.value), console.log(select);\n                    },\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            selected: true,\n                            children: \"none\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"name\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"type\",\n                            children: \"Type\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"target\",\n                            children: \"Target\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"bodyPart\",\n                            children: \"Body Part\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                select == \"name\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by name\",\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Type\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined),\n                                types.map((type, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: type\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"target\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Target\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined),\n                                targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: target\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"bodyPart\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Body Part\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 15\n                                }, undefined),\n                                bodyParts.map((part, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: part\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 139,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Menu, \"0BR6a6UoTaefck5xBkHeJW7T2yg=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBRWpDLE1BQU1FLE9BQU87O0lBQ2xCLE1BQU1DLFFBQWtCO1FBQ3RCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsVUFBb0I7UUFDeEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLFlBQXNCO1FBQzFCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBRVosK0NBQVFBO0lBRS9CLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXlCOzs7Ozs7OEJBQ3ZDLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDVjtvQkFDQ1csT0FBT1g7b0JBQ1BZLFVBQVUsQ0FBQ0M7d0JBQ1RaLFVBQVVZLEVBQUVULE1BQU0sQ0FBQ08sS0FBSyxHQUFHRyxRQUFRQyxHQUFHLENBQUNmO29CQUN6QztvQkFDQVMsV0FBVTs7c0NBRVYsOERBQUNPOzRCQUFPQyxRQUFRO3NDQUFDOzs7Ozs7c0NBQ2pCLDhEQUFDRDs0QkFBT0wsT0FBTTtzQ0FBTzs7Ozs7O3NDQUNyQiw4REFBQ0s7NEJBQU9MLE9BQU07c0NBQU87Ozs7OztzQ0FDckIsOERBQUNLOzRCQUFPTCxPQUFNO3NDQUFTOzs7Ozs7c0NBQ3ZCLDhEQUFDSzs0QkFBT0wsT0FBTTtzQ0FBVzs7Ozs7Ozs7Ozs7O2dCQUUxQlgsVUFBVSx3QkFDVDs7c0NBQ0UsOERBQUNrQjs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWlgsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDWTs0QkFBT1osV0FBVTtzQ0FBdUU7Ozs7Ozs7O2dCQUs1RlQsVUFBVSx3QkFDVDs7c0NBQ0UsOERBQUNBOzRCQUFPUyxXQUFVOzs4Q0FDaEIsOERBQUNPO29DQUFPTCxPQUFNO29DQUFHVyxRQUFRO29DQUFDTCxRQUFROzhDQUFDOzs7Ozs7Z0NBR2xDcEIsTUFBTTBCLEdBQUcsQ0FBQyxDQUFDSixNQUFNSyxzQkFDaEIsOERBQUNSO2tEQUFvQkc7dUNBQVJLOzs7Ozs7Ozs7OztzQ0FHakIsOERBQUNIOzRCQUFPWixXQUFVO3NDQUF1RTs7Ozs7Ozs7Z0JBSzVGVCxVQUFVLDBCQUNUOztzQ0FDRSw4REFBQ0E7NEJBQU9TLFdBQVU7OzhDQUNoQiw4REFBQ087b0NBQU9MLE9BQU07b0NBQUdXLFFBQVE7b0NBQUNMLFFBQVE7OENBQUM7Ozs7OztnQ0FHbENuQixRQUFReUIsR0FBRyxDQUFDLENBQUNuQixRQUFRb0Isc0JBQ3BCLDhEQUFDUjtrREFBb0JaO3VDQUFSb0I7Ozs7Ozs7Ozs7O3NDQUdqQiw4REFBQ0g7NEJBQU9aLFdBQVU7c0NBQXVFOzs7Ozs7OztnQkFLNUZULFVBQVUsNEJBQ1Q7O3NDQUNFLDhEQUFDQTs0QkFBT1MsV0FBVTs7OENBQ2hCLDhEQUFDTztvQ0FBT0wsT0FBTTtvQ0FBR1csUUFBUTtvQ0FBQ0wsUUFBUTs4Q0FBQzs7Ozs7O2dDQUdsQ2xCLFVBQVV3QixHQUFHLENBQUMsQ0FBQ0UsTUFBTUQsc0JBQ3BCLDhEQUFDUjtrREFBb0JTO3VDQUFSRDs7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDSDs0QkFBT1osV0FBVTtzQ0FBdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckcsRUFBRTtHQWpKV2I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51LnRzeD83ODlhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHR5cGVzOiBzdHJpbmdbXSA9IFtcbiAgICBcImFzc2lzdGVkXCIsXG4gICAgXCJiYW5kXCIsXG4gICAgXCJiYXJiZWxsXCIsXG4gICAgXCJib2R5IHdlaWdodFwiLFxuICAgIFwiYm9zdSBiYWxsXCIsXG4gICAgXCJjYWJsZSxkdW1iYmVsbCxlbGxpcHRpY2FsIG1hY2hpbmVcIixcbiAgICBcImV6IGJhcmJlbGxcIixcbiAgICBcImhhbW1lclwiLFxuICAgIFwia2V0dGxlYmVsbFwiLFxuICAgIFwibGV2ZXJhZ2UgbWFjaGluZVwiLFxuICAgIFwibWVkaWNpbmUgYmFsbFwiLFxuICAgIFwib2x5bXBpYyBiYXJiZWxsXCIsXG4gICAgXCJyZXNpc3RhbmNlIGJhbmRcIixcbiAgICBcInJvbGxlcixyb3BlXCIsXG4gICAgXCJza2llcmcgbWFjaGluZVwiLFxuICAgIFwic2xlZCBtYWNoaW5lXCIsXG4gICAgXCJzbWl0aCBtYWNoaW5lXCIsXG4gICAgXCJzdGFiaWxpdHkgYmFsbFwiLFxuICAgIFwic3RhdGlvbmFyeSBiaWtlXCIsXG4gICAgXCJzdGVwbWlsbCBtYWNoaW5lXCIsXG4gICAgXCJ0aXJlLHRyYXAgYmFyXCIsXG4gICAgXCJ1cHBlciBib2R5IGVyZ29tZXRlclwiLFxuICAgIFwid2VpZ2h0ZWRcIixcbiAgICBcIndoZWVsIHJvbGxlclwiLFxuICBdO1xuICBjb25zdCB0YXJnZXRzOiBzdHJpbmdbXSA9IFtcbiAgICBcImFiZHVjdG9yc1wiLFxuICAgIFwiYWJzXCIsXG4gICAgXCJhZGR1Y3RvcnNcIixcbiAgICBcImJpY2Vwc1wiLFxuICAgIFwiY2FsdmVzXCIsXG4gICAgXCJjYXJkaW92YXNjdWxhciBzeXN0ZW1cIixcbiAgICBcImRlbHRzXCIsXG4gICAgXCJmb3JlYXJtc1wiLFxuICAgIFwiZ2x1dGVzXCIsXG4gICAgXCJoYW1zdHJpbmdzXCIsXG4gICAgXCJsYXRzXCIsXG4gICAgXCJsZXZhdG9yIHNjYXB1bGFlXCIsXG4gICAgXCJwZWN0b3JhbHNcIixcbiAgICBcInF1YWRzXCIsXG4gICAgXCJzZXJyYXR1cyBhbnRlcmlvclwiLFxuICAgIFwic3BpbmVcIixcbiAgICBcInRyYXBzXCIsXG4gICAgXCJ0cmljZXBzXCIsXG4gICAgXCJ1cHBlciBiYWNrXCIsXG4gIF07XG5cbiAgY29uc3QgYm9keVBhcnRzOiBzdHJpbmdbXSA9IFtcbiAgICBcImJhY2tcIixcbiAgICBcImNhcmRpb1wiLFxuICAgIFwiY2hlc3RcIixcbiAgICBcImxvd2VyIGFybXNcIixcbiAgICBcImxvd2VyIGxlZ3NcIixcbiAgICBcIm5lY2tcIixcbiAgICBcInNob3VsZGVyc1wiLFxuICAgIFwidXBwZXIgYXJtc1wiLFxuICAgIFwidXBwZXIgbGVnc1wiLFxuICAgIFwid2Fpc3RcIixcbiAgXTtcblxuICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbYm9keSwgU2V0Qm9keV09IHVzZVN0YXRlKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzMwMHB4XSBmaXhlZCBsZWZ0LTRyb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB6LTUwIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTJcIj5TZWFyY2g8L2gxPlxuICAgICAgICA8aDE+U2VhcmNoIGJ5OjwvaDE+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3QoZS50YXJnZXQudmFsdWUpLCBjb25zb2xlLmxvZyhzZWxlY3QpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+bm9uZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lXCI+TmFtZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0eXBlXCI+VHlwZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0YXJnZXRcIj5UYXJnZXQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYm9keVBhcnRcIj5Cb2R5IFBhcnQ8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtzZWxlY3QgPT0gXCJuYW1lXCIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2VsZWN0ID09IFwidHlwZVwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBUeXBlXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7dHlwZXMubWFwKCh0eXBlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0+e3R5cGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWxlY3QgPT0gXCJ0YXJnZXRcIiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5cbiAgICAgICAgICAgICAgICBTZWxlY3QgVGFyZ2V0XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7dGFyZ2V0cy5tYXAoKHRhcmdldCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9Pnt0YXJnZXR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWxlY3QgPT0gXCJib2R5UGFydFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBCb2R5IFBhcnRcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIHtib2R5UGFydHMubWFwKChwYXJ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0+e3BhcnR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1lbnUiLCJ0eXBlcyIsInRhcmdldHMiLCJib2R5UGFydHMiLCJzZWxlY3QiLCJzZXRTZWxlY3QiLCJuYW1lIiwic2V0TmFtZSIsInRhcmdldCIsInNldFRhcmdldCIsImJvZHkiLCJTZXRCb2R5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb24iLCJzZWxlY3RlZCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJtYXAiLCJpbmRleCIsInBhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/menu.tsx\n"));

/***/ })

});