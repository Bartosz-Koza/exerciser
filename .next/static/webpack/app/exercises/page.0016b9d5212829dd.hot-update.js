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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Menu auto */ \nvar _s = $RefreshSig$();\n\nconst Menu = ()=>{\n    _s();\n    const types = [\n        \"assisted\",\n        \"band\",\n        \"barbell\",\n        \"body weight\",\n        \"bosu ball\",\n        \"cable,dumbbell,elliptical machine\",\n        \"ez barbell\",\n        \"hammer\",\n        \"kettlebell\",\n        \"leverage machine\",\n        \"medicine ball\",\n        \"olympic barbell\",\n        \"resistance band\",\n        \"roller,rope\",\n        \"skierg machine\",\n        \"sled machine\",\n        \"smith machine\",\n        \"stability ball\",\n        \"stationary bike\",\n        \"stepmill machine\",\n        \"tire,trap bar\",\n        \"upper body ergometer\",\n        \"weighted\",\n        \"wheel roller\"\n    ];\n    const targets = [\n        \"abductors\",\n        \"abs\",\n        \"adductors\",\n        \"biceps\",\n        \"calves\",\n        \"cardiovascular system\",\n        \"delts\",\n        \"forearms\",\n        \"glutes\",\n        \"hamstrings\",\n        \"lats\",\n        \"levator scapulae\",\n        \"pectorals\",\n        \"quads\",\n        \"serratus anterior\",\n        \"spine\",\n        \"traps\",\n        \"triceps\",\n        \"upper back\"\n    ];\n    const bodyParts = [\n        \"back\",\n        \"cardio\",\n        \"chest\",\n        \"lower arms\",\n        \"lower legs\",\n        \"neck\",\n        \"shoulders\",\n        \"upper arms\",\n        \"upper legs\",\n        \"waist\"\n    ];\n    const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [body, SetBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[300px] fixed left-4rounded-lg overflow-hidden z-50 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-lg font-bold mb-2\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Search by:\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: select,\n                    onChange: (e)=>{\n                        setSelect(e.target.value), console.log(select);\n                    },\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            selected: true,\n                            children: \"none\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"name\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"type\",\n                            children: \"Type\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"target\",\n                            children: \"Target\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"bodyPart\",\n                            children: \"Body Part\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                select == \"name\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value),\n                            placeholder: \"Search by name\",\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: types,\n                            onChange: (e)=>setType(e.target.value),\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Type\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined),\n                                types.map((type, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: type,\n                                        children: type\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"target\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: target,\n                            onChange: (e)=>setTarget(e.target.value),\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Target\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, undefined),\n                                targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: target,\n                                        children: target\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"bodyPart\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Body Part\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined),\n                                bodyParts.map((part, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: part\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Menu, \"ifcJx2n6FU6a/QGoKQTuTkb9JjI=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBRWpDLE1BQU1FLE9BQU87O0lBQ2xCLE1BQU1DLFFBQWtCO1FBQ3RCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsVUFBb0I7UUFDeEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLFlBQXNCO1FBQzFCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQTtJQUNoQyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2EsTUFBTUMsUUFBUSxHQUFFZCwrQ0FBUUE7SUFFL0IscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBeUI7Ozs7Ozs4QkFDdkMsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNaO29CQUNDYSxPQUFPYjtvQkFDUGMsVUFBVSxDQUFDQzt3QkFDVGQsVUFBVWMsRUFBRVQsTUFBTSxDQUFDTyxLQUFLLEdBQUdHLFFBQVFDLEdBQUcsQ0FBQ2pCO29CQUN6QztvQkFDQVcsV0FBVTs7c0NBRVYsOERBQUNPOzRCQUFPQyxRQUFRO3NDQUFDOzs7Ozs7c0NBQ2pCLDhEQUFDRDs0QkFBT0wsT0FBTTtzQ0FBTzs7Ozs7O3NDQUNyQiw4REFBQ0s7NEJBQU9MLE9BQU07c0NBQU87Ozs7OztzQ0FDckIsOERBQUNLOzRCQUFPTCxPQUFNO3NDQUFTOzs7Ozs7c0NBQ3ZCLDhEQUFDSzs0QkFBT0wsT0FBTTtzQ0FBVzs7Ozs7Ozs7Ozs7O2dCQUUxQmIsVUFBVSx3QkFDVDs7c0NBQ0UsOERBQUNvQjs0QkFDQ2hCLE1BQUs7NEJBQ0xTLE9BQU9YOzRCQUNQWSxVQUFVLENBQUNDLElBQVVaLFFBQVFZLEVBQUVULE1BQU0sQ0FBQ08sS0FBSzs0QkFDM0NRLGFBQVk7NEJBQ1pWLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ1c7NEJBQU9YLFdBQVU7c0NBQXVFOzs7Ozs7OztnQkFLNUZYLFVBQVUsd0JBQ1Q7O3NDQUNFLDhEQUFDQTs0QkFBT2EsT0FBT2hCOzRCQUFPaUIsVUFBVSxDQUFDQyxJQUFXVixRQUFRVSxFQUFFVCxNQUFNLENBQUNPLEtBQUs7NEJBQUdGLFdBQVU7OzhDQUM3RSw4REFBQ087b0NBQU9MLE9BQU07b0NBQUdVLFFBQVE7b0NBQUNKLFFBQVE7OENBQUM7Ozs7OztnQ0FHbEN0QixNQUFNMkIsR0FBRyxDQUFDLENBQUNwQixNQUFNcUIsc0JBQ2hCLDhEQUFDUDt3Q0FBT0wsT0FBT1Q7a0RBQW1CQTt1Q0FBUnFCOzs7Ozs7Ozs7OztzQ0FHOUIsOERBQUNIOzRCQUFPWCxXQUFVO3NDQUF1RTs7Ozs7Ozs7Z0JBSzVGWCxVQUFVLDBCQUNUOztzQ0FDRSw4REFBQ0E7NEJBQU9hLE9BQU9QOzRCQUFRUSxVQUFVLENBQUNDLElBQVVSLFVBQVVRLEVBQUVULE1BQU0sQ0FBQ08sS0FBSzs0QkFBR0YsV0FBVTs7OENBQy9FLDhEQUFDTztvQ0FBT0wsT0FBTTtvQ0FBR1UsUUFBUTtvQ0FBQ0osUUFBUTs4Q0FBQzs7Ozs7O2dDQUdsQ3JCLFFBQVEwQixHQUFHLENBQUMsQ0FBQ2xCLFFBQVFtQixzQkFDcEIsOERBQUNQO3dDQUFPTCxPQUFPUDtrREFBcUJBO3VDQUFSbUI7Ozs7Ozs7Ozs7O3NDQUdoQyw4REFBQ0g7NEJBQU9YLFdBQVU7c0NBQXVFOzs7Ozs7OztnQkFLNUZYLFVBQVUsNEJBQ1Q7O3NDQUNFLDhEQUFDQTs0QkFBT1csV0FBVTs7OENBQ2hCLDhEQUFDTztvQ0FBT0wsT0FBTTtvQ0FBR1UsUUFBUTtvQ0FBQ0osUUFBUTs4Q0FBQzs7Ozs7O2dDQUdsQ3BCLFVBQVV5QixHQUFHLENBQUMsQ0FBQ0UsTUFBTUQsc0JBQ3BCLDhEQUFDUDtrREFBb0JRO3VDQUFSRDs7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDSDs0QkFBT1gsV0FBVTtzQ0FBdUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckcsRUFBRTtHQXBKV2Y7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51LnRzeD83ODlhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHR5cGVzOiBzdHJpbmdbXSA9IFtcbiAgICBcImFzc2lzdGVkXCIsXG4gICAgXCJiYW5kXCIsXG4gICAgXCJiYXJiZWxsXCIsXG4gICAgXCJib2R5IHdlaWdodFwiLFxuICAgIFwiYm9zdSBiYWxsXCIsXG4gICAgXCJjYWJsZSxkdW1iYmVsbCxlbGxpcHRpY2FsIG1hY2hpbmVcIixcbiAgICBcImV6IGJhcmJlbGxcIixcbiAgICBcImhhbW1lclwiLFxuICAgIFwia2V0dGxlYmVsbFwiLFxuICAgIFwibGV2ZXJhZ2UgbWFjaGluZVwiLFxuICAgIFwibWVkaWNpbmUgYmFsbFwiLFxuICAgIFwib2x5bXBpYyBiYXJiZWxsXCIsXG4gICAgXCJyZXNpc3RhbmNlIGJhbmRcIixcbiAgICBcInJvbGxlcixyb3BlXCIsXG4gICAgXCJza2llcmcgbWFjaGluZVwiLFxuICAgIFwic2xlZCBtYWNoaW5lXCIsXG4gICAgXCJzbWl0aCBtYWNoaW5lXCIsXG4gICAgXCJzdGFiaWxpdHkgYmFsbFwiLFxuICAgIFwic3RhdGlvbmFyeSBiaWtlXCIsXG4gICAgXCJzdGVwbWlsbCBtYWNoaW5lXCIsXG4gICAgXCJ0aXJlLHRyYXAgYmFyXCIsXG4gICAgXCJ1cHBlciBib2R5IGVyZ29tZXRlclwiLFxuICAgIFwid2VpZ2h0ZWRcIixcbiAgICBcIndoZWVsIHJvbGxlclwiLFxuICBdO1xuICBjb25zdCB0YXJnZXRzOiBzdHJpbmdbXSA9IFtcbiAgICBcImFiZHVjdG9yc1wiLFxuICAgIFwiYWJzXCIsXG4gICAgXCJhZGR1Y3RvcnNcIixcbiAgICBcImJpY2Vwc1wiLFxuICAgIFwiY2FsdmVzXCIsXG4gICAgXCJjYXJkaW92YXNjdWxhciBzeXN0ZW1cIixcbiAgICBcImRlbHRzXCIsXG4gICAgXCJmb3JlYXJtc1wiLFxuICAgIFwiZ2x1dGVzXCIsXG4gICAgXCJoYW1zdHJpbmdzXCIsXG4gICAgXCJsYXRzXCIsXG4gICAgXCJsZXZhdG9yIHNjYXB1bGFlXCIsXG4gICAgXCJwZWN0b3JhbHNcIixcbiAgICBcInF1YWRzXCIsXG4gICAgXCJzZXJyYXR1cyBhbnRlcmlvclwiLFxuICAgIFwic3BpbmVcIixcbiAgICBcInRyYXBzXCIsXG4gICAgXCJ0cmljZXBzXCIsXG4gICAgXCJ1cHBlciBiYWNrXCIsXG4gIF07XG5cbiAgY29uc3QgYm9keVBhcnRzOiBzdHJpbmdbXSA9IFtcbiAgICBcImJhY2tcIixcbiAgICBcImNhcmRpb1wiLFxuICAgIFwiY2hlc3RcIixcbiAgICBcImxvd2VyIGFybXNcIixcbiAgICBcImxvd2VyIGxlZ3NcIixcbiAgICBcIm5lY2tcIixcbiAgICBcInNob3VsZGVyc1wiLFxuICAgIFwidXBwZXIgYXJtc1wiLFxuICAgIFwidXBwZXIgbGVnc1wiLFxuICAgIFwid2Fpc3RcIixcbiAgXTtcblxuICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtib2R5LCBTZXRCb2R5XT0gdXNlU3RhdGUoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMzAwcHhdIGZpeGVkIGxlZnQtNHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHotNTAgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItMlwiPlNlYXJjaDwvaDE+XG4gICAgICAgIDxoMT5TZWFyY2ggYnk6PC9oMT5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHZhbHVlPXtzZWxlY3R9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNldFNlbGVjdChlLnRhcmdldC52YWx1ZSksIGNvbnNvbGUubG9nKHNlbGVjdCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5ub25lPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5hbWVcIj5OYW1lPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInR5cGVcIj5UeXBlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRhcmdldFwiPlRhcmdldDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJib2R5UGFydFwiPkJvZHkgUGFydDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge3NlbGVjdCA9PSBcIm5hbWVcIiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6YW55KSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgbmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3NlbGVjdCA9PSBcInR5cGVcIiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3R5cGVzfSBvbkNoYW5nZT17KGU6IGFueSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgICAgU2VsZWN0IFR5cGVcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIHt0eXBlcy5tYXAoKHR5cGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dHlwZX0ga2V5PXtpbmRleH0+e3R5cGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWxlY3QgPT0gXCJ0YXJnZXRcIiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RhcmdldH0gb25DaGFuZ2U9eyhlOmFueSkgPT4gc2V0VGFyZ2V0KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5cbiAgICAgICAgICAgICAgICBTZWxlY3QgVGFyZ2V0XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7dGFyZ2V0cy5tYXAoKHRhcmdldCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0YXJnZXR9IGtleT17aW5kZXh9Pnt0YXJnZXR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWxlY3QgPT0gXCJib2R5UGFydFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBCb2R5IFBhcnRcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIHtib2R5UGFydHMubWFwKChwYXJ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0+e3BhcnR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1lbnUiLCJ0eXBlcyIsInRhcmdldHMiLCJib2R5UGFydHMiLCJzZWxlY3QiLCJzZXRTZWxlY3QiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwidGFyZ2V0Iiwic2V0VGFyZ2V0IiwiYm9keSIsIlNldEJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbiIsInNlbGVjdGVkIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImRpc2FibGVkIiwibWFwIiwiaW5kZXgiLCJwYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/menu.tsx\n"));

/***/ })

});