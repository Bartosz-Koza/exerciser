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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Menu auto */ \nvar _s = $RefreshSig$();\n\nconst Menu = ()=>{\n    _s();\n    const types = [\n        \"assisted\",\n        \"band\",\n        \"barbell\",\n        \"body weight\",\n        \"bosu ball\",\n        \"cable,dumbbell,elliptical machine\",\n        \"ez barbell\",\n        \"hammer\",\n        \"kettlebell\",\n        \"leverage machine\",\n        \"medicine ball\",\n        \"olympic barbell\",\n        \"resistance band\",\n        \"roller,rope\",\n        \"skierg machine\",\n        \"sled machine\",\n        \"smith machine\",\n        \"stability ball\",\n        \"stationary bike\",\n        \"stepmill machine\",\n        \"tire,trap bar\",\n        \"upper body ergometer\",\n        \"weighted\",\n        \"wheel roller\"\n    ];\n    const targets = [\n        \"abductors\",\n        \"abs\",\n        \"adductors\",\n        \"biceps\",\n        \"calves\",\n        \"cardiovascular system\",\n        \"delts\",\n        \"forearms\",\n        \"glutes\",\n        \"hamstrings\",\n        \"lats\",\n        \"levator scapulae\",\n        \"pectorals\",\n        \"quads\",\n        \"serratus anterior\",\n        \"spine\",\n        \"traps\",\n        \"triceps\",\n        \"upper back\"\n    ];\n    const bodyParts = [\n        \"back\",\n        \"cardio\",\n        \"chest\",\n        \"lower arms\",\n        \"lower legs\",\n        \"neck\",\n        \"shoulders\",\n        \"upper arms\",\n        \"upper legs\",\n        \"waist\"\n    ];\n    const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [body, SetBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[300px] fixed left-4rounded-lg overflow-hidden z-50 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-lg font-bold mb-2\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Search by:\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: select,\n                    onChange: (e)=>{\n                        setSelect(e.target.value), console.log(select);\n                    },\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            selected: true,\n                            children: \"none\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"name\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"type\",\n                            children: \"Type\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"target\",\n                            children: \"Target\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"bodyPart\",\n                            children: \"Body Part\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                select == \"name\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value),\n                            placeholder: \"Search by name\",\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: types,\n                            onChange: (e)=>setType(e.target.value),\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Type\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined),\n                                types.map((type, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: type,\n                                        children: type\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"target\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: target,\n                            onChange: (e)=>setTarget(e.target.value),\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Target\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, undefined),\n                                targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: target,\n                                        children: target\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"bodyPart\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: bodyParts,\n                            onChange: (e)=>SetBody(e.target.value),\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Body Part\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined),\n                                bodyParts.map((part, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: bodyParts,\n                                        children: part\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Menu, \"ifcJx2n6FU6a/QGoKQTuTkb9JjI=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBRWpDLE1BQU1FLE9BQU87O0lBQ2xCLE1BQU1DLFFBQWtCO1FBQ3RCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsVUFBb0I7UUFDeEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLFlBQXNCO1FBQzFCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQTtJQUNoQyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2EsTUFBTUMsUUFBUSxHQUFFZCwrQ0FBUUE7SUFFL0IscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBeUI7Ozs7Ozs4QkFDdkMsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNaO29CQUNDYSxPQUFPYjtvQkFDUGMsVUFBVSxDQUFDQzt3QkFDVGQsVUFBVWMsRUFBRVQsTUFBTSxDQUFDTyxLQUFLLEdBQUdHLFFBQVFDLEdBQUcsQ0FBQ2pCO29CQUN6QztvQkFDQVcsV0FBVTs7c0NBRVYsOERBQUNPOzRCQUFPQyxRQUFRO3NDQUFDOzs7Ozs7c0NBQ2pCLDhEQUFDRDs0QkFBT0wsT0FBTTtzQ0FBTzs7Ozs7O3NDQUNyQiw4REFBQ0s7NEJBQU9MLE9BQU07c0NBQU87Ozs7OztzQ0FDckIsOERBQUNLOzRCQUFPTCxPQUFNO3NDQUFTOzs7Ozs7c0NBQ3ZCLDhEQUFDSzs0QkFBT0wsT0FBTTtzQ0FBVzs7Ozs7Ozs7Ozs7O2dCQUUxQmIsVUFBVSx3QkFDVDs7c0NBQ0UsOERBQUNvQjs0QkFDQ2hCLE1BQUs7NEJBQ0xTLE9BQU9YOzRCQUNQWSxVQUFVLENBQUNDLElBQVVaLFFBQVFZLEVBQUVULE1BQU0sQ0FBQ08sS0FBSzs0QkFDM0NRLGFBQVk7NEJBQ1pWLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ1c7NEJBQU9YLFdBQVU7c0NBQXVFOzs7Ozs7OztnQkFLNUZYLFVBQVUsd0JBQ1Q7O3NDQUNFLDhEQUFDQTs0QkFBT2EsT0FBT2hCOzRCQUFPaUIsVUFBVSxDQUFDQyxJQUFXVixRQUFRVSxFQUFFVCxNQUFNLENBQUNPLEtBQUs7NEJBQUdGLFdBQVU7OzhDQUM3RSw4REFBQ087b0NBQU9MLE9BQU07b0NBQUdVLFFBQVE7b0NBQUNKLFFBQVE7OENBQUM7Ozs7OztnQ0FHbEN0QixNQUFNMkIsR0FBRyxDQUFDLENBQUNwQixNQUFNcUIsc0JBQ2hCLDhEQUFDUDt3Q0FBT0wsT0FBT1Q7a0RBQW1CQTt1Q0FBUnFCOzs7Ozs7Ozs7OztzQ0FHOUIsOERBQUNIOzRCQUFPWCxXQUFVO3NDQUF1RTs7Ozs7Ozs7Z0JBSzVGWCxVQUFVLDBCQUNUOztzQ0FDRSw4REFBQ0E7NEJBQU9hLE9BQU9QOzRCQUFRUSxVQUFVLENBQUNDLElBQVVSLFVBQVVRLEVBQUVULE1BQU0sQ0FBQ08sS0FBSzs0QkFBR0YsV0FBVTs7OENBQy9FLDhEQUFDTztvQ0FBT0wsT0FBTTtvQ0FBR1UsUUFBUTtvQ0FBQ0osUUFBUTs4Q0FBQzs7Ozs7O2dDQUdsQ3JCLFFBQVEwQixHQUFHLENBQUMsQ0FBQ2xCLFFBQVFtQixzQkFDcEIsOERBQUNQO3dDQUFPTCxPQUFPUDtrREFBcUJBO3VDQUFSbUI7Ozs7Ozs7Ozs7O3NDQUdoQyw4REFBQ0g7NEJBQU9YLFdBQVU7c0NBQXVFOzs7Ozs7OztnQkFLNUZYLFVBQVUsNEJBQ1Q7O3NDQUNFLDhEQUFDQTs0QkFBT2EsT0FBT2Q7NEJBQVdlLFVBQVUsQ0FBQ0MsSUFBVU4sUUFBUU0sRUFBRVQsTUFBTSxDQUFDTyxLQUFLOzRCQUFHRixXQUFVOzs4Q0FDaEYsOERBQUNPO29DQUFPTCxPQUFNO29DQUFHVSxRQUFRO29DQUFDSixRQUFROzhDQUFDOzs7Ozs7Z0NBR2xDcEIsVUFBVXlCLEdBQUcsQ0FBQyxDQUFDRSxNQUFNRCxzQkFDcEIsOERBQUNQO3dDQUFPTCxPQUFPZDtrREFBd0IyQjt1Q0FBUkQ7Ozs7Ozs7Ozs7O3NDQUduQyw4REFBQ0g7NEJBQU9YLFdBQVU7c0NBQXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJHLEVBQUU7R0FwSldmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVudS50c3g/Nzg5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xuICBjb25zdCB0eXBlczogc3RyaW5nW10gPSBbXG4gICAgXCJhc3Npc3RlZFwiLFxuICAgIFwiYmFuZFwiLFxuICAgIFwiYmFyYmVsbFwiLFxuICAgIFwiYm9keSB3ZWlnaHRcIixcbiAgICBcImJvc3UgYmFsbFwiLFxuICAgIFwiY2FibGUsZHVtYmJlbGwsZWxsaXB0aWNhbCBtYWNoaW5lXCIsXG4gICAgXCJleiBiYXJiZWxsXCIsXG4gICAgXCJoYW1tZXJcIixcbiAgICBcImtldHRsZWJlbGxcIixcbiAgICBcImxldmVyYWdlIG1hY2hpbmVcIixcbiAgICBcIm1lZGljaW5lIGJhbGxcIixcbiAgICBcIm9seW1waWMgYmFyYmVsbFwiLFxuICAgIFwicmVzaXN0YW5jZSBiYW5kXCIsXG4gICAgXCJyb2xsZXIscm9wZVwiLFxuICAgIFwic2tpZXJnIG1hY2hpbmVcIixcbiAgICBcInNsZWQgbWFjaGluZVwiLFxuICAgIFwic21pdGggbWFjaGluZVwiLFxuICAgIFwic3RhYmlsaXR5IGJhbGxcIixcbiAgICBcInN0YXRpb25hcnkgYmlrZVwiLFxuICAgIFwic3RlcG1pbGwgbWFjaGluZVwiLFxuICAgIFwidGlyZSx0cmFwIGJhclwiLFxuICAgIFwidXBwZXIgYm9keSBlcmdvbWV0ZXJcIixcbiAgICBcIndlaWdodGVkXCIsXG4gICAgXCJ3aGVlbCByb2xsZXJcIixcbiAgXTtcbiAgY29uc3QgdGFyZ2V0czogc3RyaW5nW10gPSBbXG4gICAgXCJhYmR1Y3RvcnNcIixcbiAgICBcImFic1wiLFxuICAgIFwiYWRkdWN0b3JzXCIsXG4gICAgXCJiaWNlcHNcIixcbiAgICBcImNhbHZlc1wiLFxuICAgIFwiY2FyZGlvdmFzY3VsYXIgc3lzdGVtXCIsXG4gICAgXCJkZWx0c1wiLFxuICAgIFwiZm9yZWFybXNcIixcbiAgICBcImdsdXRlc1wiLFxuICAgIFwiaGFtc3RyaW5nc1wiLFxuICAgIFwibGF0c1wiLFxuICAgIFwibGV2YXRvciBzY2FwdWxhZVwiLFxuICAgIFwicGVjdG9yYWxzXCIsXG4gICAgXCJxdWFkc1wiLFxuICAgIFwic2VycmF0dXMgYW50ZXJpb3JcIixcbiAgICBcInNwaW5lXCIsXG4gICAgXCJ0cmFwc1wiLFxuICAgIFwidHJpY2Vwc1wiLFxuICAgIFwidXBwZXIgYmFja1wiLFxuICBdO1xuXG4gIGNvbnN0IGJvZHlQYXJ0czogc3RyaW5nW10gPSBbXG4gICAgXCJiYWNrXCIsXG4gICAgXCJjYXJkaW9cIixcbiAgICBcImNoZXN0XCIsXG4gICAgXCJsb3dlciBhcm1zXCIsXG4gICAgXCJsb3dlciBsZWdzXCIsXG4gICAgXCJuZWNrXCIsXG4gICAgXCJzaG91bGRlcnNcIixcbiAgICBcInVwcGVyIGFybXNcIixcbiAgICBcInVwcGVyIGxlZ3NcIixcbiAgICBcIndhaXN0XCIsXG4gIF07XG5cbiAgY29uc3QgW3NlbGVjdCwgc2V0U2VsZWN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbYm9keSwgU2V0Qm9keV09IHVzZVN0YXRlKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzMwMHB4XSBmaXhlZCBsZWZ0LTRyb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB6LTUwIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTJcIj5TZWFyY2g8L2gxPlxuICAgICAgICA8aDE+U2VhcmNoIGJ5OjwvaDE+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3QoZS50YXJnZXQudmFsdWUpLCBjb25zb2xlLmxvZyhzZWxlY3QpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+bm9uZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lXCI+TmFtZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0eXBlXCI+VHlwZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0YXJnZXRcIj5UYXJnZXQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYm9keVBhcnRcIj5Cb2R5IFBhcnQ8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtzZWxlY3QgPT0gXCJuYW1lXCIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOmFueSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWxlY3QgPT0gXCJ0eXBlXCIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0eXBlc30gb25DaGFuZ2U9eyhlOiBhbnkpID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMiBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBUeXBlXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7dHlwZXMubWFwKCh0eXBlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3R5cGV9IGtleT17aW5kZXh9Pnt0eXBlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2VsZWN0ID09IFwidGFyZ2V0XCIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0YXJnZXR9IG9uQ2hhbmdlPXsoZTphbnkpID0+IHNldFRhcmdldChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgICAgU2VsZWN0IFRhcmdldFxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAge3RhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGFyZ2V0fSBrZXk9e2luZGV4fT57dGFyZ2V0fTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2VsZWN0ID09IFwiYm9keVBhcnRcIiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2JvZHlQYXJ0c30gb25DaGFuZ2U9eyhlOmFueSkgPT4gU2V0Qm9keShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgICAgU2VsZWN0IEJvZHkgUGFydFxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAge2JvZHlQYXJ0cy5tYXAoKHBhcnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Ym9keVBhcnRzfSBrZXk9e2luZGV4fT57cGFydH08L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWVudSIsInR5cGVzIiwidGFyZ2V0cyIsImJvZHlQYXJ0cyIsInNlbGVjdCIsInNldFNlbGVjdCIsIm5hbWUiLCJzZXROYW1lIiwidHlwZSIsInNldFR5cGUiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJib2R5IiwiU2V0Qm9keSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJtYXAiLCJpbmRleCIsInBhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/menu.tsx\n"));

/***/ })

});