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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; },\n/* harmony export */   bodyAtom: function() { return /* binding */ bodyAtom; },\n/* harmony export */   nameAtom: function() { return /* binding */ nameAtom; },\n/* harmony export */   selectAtom: function() { return /* binding */ selectAtom; },\n/* harmony export */   targetAtom: function() { return /* binding */ targetAtom; },\n/* harmony export */   typeAtom: function() { return /* binding */ typeAtom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/vanilla.mjs\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* __next_internal_client_entry_do_not_use__ nameAtom,typeAtom,bodyAtom,targetAtom,selectAtom,Menu auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst nameAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(\"\");\nconst typeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(\"\");\nconst bodyAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(\"\");\nconst targetAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(\"\");\nconst selectAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(\"\");\nconst Menu = ()=>{\n    _s();\n    const types = [\n        \"assisted\",\n        \"band\",\n        \"barbell\",\n        \"body weight\",\n        \"bosu ball\",\n        \"cable,dumbbell,elliptical machine\",\n        \"ez barbell\",\n        \"hammer\",\n        \"kettlebell\",\n        \"leverage machine\",\n        \"medicine ball\",\n        \"olympic barbell\",\n        \"resistance band\",\n        \"roller,rope\",\n        \"skierg machine\",\n        \"sled machine\",\n        \"smith machine\",\n        \"stability ball\",\n        \"stationary bike\",\n        \"stepmill machine\",\n        \"tire,trap bar\",\n        \"upper body ergometer\",\n        \"weighted\",\n        \"wheel roller\"\n    ];\n    const targets = [\n        \"abductors\",\n        \"abs\",\n        \"adductors\",\n        \"biceps\",\n        \"calves\",\n        \"cardiovascular system\",\n        \"delts\",\n        \"forearms\",\n        \"glutes\",\n        \"hamstrings\",\n        \"lats\",\n        \"levator scapulae\",\n        \"pectorals\",\n        \"quads\",\n        \"serratus anterior\",\n        \"spine\",\n        \"traps\",\n        \"triceps\",\n        \"upper back\"\n    ];\n    const bodyParts = [\n        \"back\",\n        \"cardio\",\n        \"chest\",\n        \"lower arms\",\n        \"lower legs\",\n        \"neck\",\n        \"shoulders\",\n        \"upper arms\",\n        \"upper legs\",\n        \"waist\"\n    ];\n    const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectA, setSelectA] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(selectAtom);\n    const [name, setName] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(nameAtom);\n    const [type, setType] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(typeAtom);\n    const [target, setTarget] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(targetAtom);\n    const [body, SetBody] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(bodyAtom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[300px] fixed left-4rounded-lg overflow-hidden z-50 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-lg font-bold mb-2\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Search by:\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    value: select,\n                    onChange: (e)=>{\n                        setSelect(e.target.value), console.log(select);\n                    },\n                    className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"null\",\n                            selected: true,\n                            children: \"none\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"name\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"type\",\n                            children: \"Type\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"target\",\n                            children: \"Target\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"bodyPart\",\n                            children: \"Body Part\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                select == \"name\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: name,\n                            onChange: (e)=>{\n                                setName(e.target.value), console.log(name);\n                            },\n                            placeholder: \"Search by name\",\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectA(select),\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"type\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: type,\n                            onChange: (e)=>{\n                                setType(e.target.value), console.log(type);\n                            },\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Type\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, undefined),\n                                types.map((type, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: type,\n                                        children: type\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectA(select),\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"target\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: target,\n                            onChange: (e)=>{\n                                setTarget(e.target.value), console.log(target);\n                            },\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Target\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined),\n                                targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: target,\n                                        children: target\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectA(select),\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true),\n                select == \"bodyPart\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: bodyParts,\n                            onChange: (e)=>{\n                                SetBody(e.target.value), console.log(body);\n                            },\n                            className: \"w-full mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    disabled: true,\n                                    selected: true,\n                                    children: \"Select Body Part\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, undefined),\n                                bodyParts.map((part, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: part,\n                                        children: part\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSelectA(select),\n                            className: \"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n                            lineNumber: 154,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/components/menu.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Menu, \"QrY3NOQzdhs/IfIchqocamWQfHo=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom\n    ];\n});\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUV3QztBQUNkO0FBQ007QUFFekIsTUFBTUksV0FBV0YsMkNBQUlBLENBQUMsSUFBRztBQUN6QixNQUFNRyxXQUFXSCwyQ0FBSUEsQ0FBQyxJQUFHO0FBQ3pCLE1BQU1JLFdBQVdKLDJDQUFJQSxDQUFDLElBQUc7QUFDekIsTUFBTUssYUFBYUwsMkNBQUlBLENBQUMsSUFBRztBQUMzQixNQUFNTSxhQUFhTiwyQ0FBSUEsQ0FBQyxJQUFHO0FBRTNCLE1BQU1PLE9BQU87O0lBQ2xCLE1BQU1DLFFBQWtCO1FBQ3RCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsVUFBb0I7UUFDeEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLFlBQXNCO1FBQzFCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHYiw4Q0FBT0EsQ0FBQ0s7SUFDdEMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdmLDhDQUFPQSxDQUFDQztJQUNoQyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2pCLDhDQUFPQSxDQUFDRTtJQUNoQyxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUduQiw4Q0FBT0EsQ0FBQ0k7SUFDcEMsTUFBTSxDQUFDZ0IsTUFBTUMsUUFBUSxHQUFFckIsOENBQU9BLENBQUNHO0lBRS9CLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF5Qjs7Ozs7OzhCQUN2Qyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ2Q7b0JBQ0NlLE9BQU9mO29CQUNQZ0IsVUFBVSxDQUFDQzt3QkFDVGhCLFVBQVVnQixFQUFFVCxNQUFNLENBQUNPLEtBQUssR0FBR0csUUFBUUMsR0FBRyxDQUFDbkI7b0JBQ3pDO29CQUNBYSxXQUFVOztzQ0FFViw4REFBQ087NEJBQU9MLE9BQU07NEJBQU9NLFFBQVE7c0NBQUM7Ozs7OztzQ0FDOUIsOERBQUNEOzRCQUFPTCxPQUFNO3NDQUFPOzs7Ozs7c0NBQ3JCLDhEQUFDSzs0QkFBT0wsT0FBTTtzQ0FBTzs7Ozs7O3NDQUNyQiw4REFBQ0s7NEJBQU9MLE9BQU07c0NBQVM7Ozs7OztzQ0FDdkIsOERBQUNLOzRCQUFPTCxPQUFNO3NDQUFXOzs7Ozs7Ozs7Ozs7Z0JBRTFCZixVQUFVLHdCQUNUOztzQ0FDRSw4REFBQ3NCOzRCQUNDaEIsTUFBSzs0QkFDTFMsT0FBT1g7NEJBQ1BZLFVBQVUsQ0FBQ0M7Z0NBQVdaLFFBQVFZLEVBQUVULE1BQU0sQ0FBQ08sS0FBSyxHQUFHRyxRQUFRQyxHQUFHLENBQUNmOzRCQUFLOzRCQUNoRW1CLGFBQVk7NEJBQ1pWLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ1c7NEJBQU9DLFNBQVMsSUFBTXRCLFdBQVdIOzRCQUFTYSxXQUFVO3NDQUF1RTs7Ozs7Ozs7Z0JBSy9IYixVQUFVLHdCQUNUOztzQ0FDRSw4REFBQ0E7NEJBQU9lLE9BQU9UOzRCQUFNVSxVQUFVLENBQUNDO2dDQUFZVixRQUFRVSxFQUFFVCxNQUFNLENBQUNPLEtBQUssR0FBR0csUUFBUUMsR0FBRyxDQUFDYjs0QkFBSzs0QkFBR08sV0FBVTs7OENBQ2pHLDhEQUFDTztvQ0FBT0wsT0FBTTtvQ0FBR1csUUFBUTtvQ0FBQ0wsUUFBUTs4Q0FBQzs7Ozs7O2dDQUdsQ3hCLE1BQU04QixHQUFHLENBQUMsQ0FBQ3JCLE1BQU1zQixzQkFDaEIsOERBQUNSO3dDQUFPTCxPQUFPVDtrREFBbUJBO3VDQUFSc0I7Ozs7Ozs7Ozs7O3NDQUc5Qiw4REFBQ0o7NEJBQU9DLFNBQVMsSUFBTXRCLFdBQVdIOzRCQUFTYSxXQUFVO3NDQUF1RTs7Ozs7Ozs7Z0JBSy9IYixVQUFVLDBCQUNUOztzQ0FDRSw4REFBQ0E7NEJBQU9lLE9BQU9QOzRCQUFRUSxVQUFVLENBQUNDO2dDQUFXUixVQUFVUSxFQUFFVCxNQUFNLENBQUNPLEtBQUssR0FBR0csUUFBUUMsR0FBRyxDQUFDWDs0QkFBTzs0QkFBR0ssV0FBVTs7OENBQ3RHLDhEQUFDTztvQ0FBT0wsT0FBTTtvQ0FBR1csUUFBUTtvQ0FBQ0wsUUFBUTs4Q0FBQzs7Ozs7O2dDQUdsQ3ZCLFFBQVE2QixHQUFHLENBQUMsQ0FBQ25CLFFBQVFvQixzQkFDcEIsOERBQUNSO3dDQUFPTCxPQUFPUDtrREFBcUJBO3VDQUFSb0I7Ozs7Ozs7Ozs7O3NDQUdoQyw4REFBQ0o7NEJBQU9DLFNBQVMsSUFBTXRCLFdBQVdIOzRCQUFTYSxXQUFVO3NDQUF1RTs7Ozs7Ozs7Z0JBSy9IYixVQUFVLDRCQUNUOztzQ0FDRSw4REFBQ0E7NEJBQU9lLE9BQU9oQjs0QkFBV2lCLFVBQVUsQ0FBQ0M7Z0NBQVdOLFFBQVFNLEVBQUVULE1BQU0sQ0FBQ08sS0FBSyxHQUFHRyxRQUFRQyxHQUFHLENBQUNUOzRCQUFLOzRCQUFHRyxXQUFVOzs4Q0FDckcsOERBQUNPO29DQUFPTCxPQUFNO29DQUFHVyxRQUFRO29DQUFDTCxRQUFROzhDQUFDOzs7Ozs7Z0NBR2xDdEIsVUFBVTRCLEdBQUcsQ0FBQyxDQUFDRSxNQUFNRCxzQkFDcEIsOERBQUNSO3dDQUFPTCxPQUFPYztrREFBbUJBO3VDQUFSRDs7Ozs7Ozs7Ozs7c0NBRzlCLDhEQUFDSjs0QkFBT0MsU0FBUyxJQUFNdEIsV0FBV0g7NEJBQVNhLFdBQVU7c0NBQXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhJLEVBQUU7R0FySldqQjs7UUErRG1CTiwwQ0FBT0E7UUFDYkEsMENBQU9BO1FBQ1BBLDBDQUFPQTtRQUNIQSwwQ0FBT0E7UUFDWkEsMENBQU9BOzs7S0FuRW5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUudHN4Pzc4OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHthdG9tfSBmcm9tICdqb3RhaSdcbmltcG9ydCB7IHVzZUF0b20gfSBmcm9tIFwiam90YWlcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVBdG9tID0gYXRvbSgnJylcbmV4cG9ydCBjb25zdCB0eXBlQXRvbSA9IGF0b20oJycpXG5leHBvcnQgY29uc3QgYm9keUF0b20gPSBhdG9tKCcnKVxuZXhwb3J0IGNvbnN0IHRhcmdldEF0b20gPSBhdG9tKCcnKVxuZXhwb3J0IGNvbnN0IHNlbGVjdEF0b20gPSBhdG9tKCcnKVxuXG5leHBvcnQgY29uc3QgTWVudSA9ICgpID0+IHtcbiAgY29uc3QgdHlwZXM6IHN0cmluZ1tdID0gW1xuICAgIFwiYXNzaXN0ZWRcIixcbiAgICBcImJhbmRcIixcbiAgICBcImJhcmJlbGxcIixcbiAgICBcImJvZHkgd2VpZ2h0XCIsXG4gICAgXCJib3N1IGJhbGxcIixcbiAgICBcImNhYmxlLGR1bWJiZWxsLGVsbGlwdGljYWwgbWFjaGluZVwiLFxuICAgIFwiZXogYmFyYmVsbFwiLFxuICAgIFwiaGFtbWVyXCIsXG4gICAgXCJrZXR0bGViZWxsXCIsXG4gICAgXCJsZXZlcmFnZSBtYWNoaW5lXCIsXG4gICAgXCJtZWRpY2luZSBiYWxsXCIsXG4gICAgXCJvbHltcGljIGJhcmJlbGxcIixcbiAgICBcInJlc2lzdGFuY2UgYmFuZFwiLFxuICAgIFwicm9sbGVyLHJvcGVcIixcbiAgICBcInNraWVyZyBtYWNoaW5lXCIsXG4gICAgXCJzbGVkIG1hY2hpbmVcIixcbiAgICBcInNtaXRoIG1hY2hpbmVcIixcbiAgICBcInN0YWJpbGl0eSBiYWxsXCIsXG4gICAgXCJzdGF0aW9uYXJ5IGJpa2VcIixcbiAgICBcInN0ZXBtaWxsIG1hY2hpbmVcIixcbiAgICBcInRpcmUsdHJhcCBiYXJcIixcbiAgICBcInVwcGVyIGJvZHkgZXJnb21ldGVyXCIsXG4gICAgXCJ3ZWlnaHRlZFwiLFxuICAgIFwid2hlZWwgcm9sbGVyXCIsXG4gIF07XG4gIGNvbnN0IHRhcmdldHM6IHN0cmluZ1tdID0gW1xuICAgIFwiYWJkdWN0b3JzXCIsXG4gICAgXCJhYnNcIixcbiAgICBcImFkZHVjdG9yc1wiLFxuICAgIFwiYmljZXBzXCIsXG4gICAgXCJjYWx2ZXNcIixcbiAgICBcImNhcmRpb3Zhc2N1bGFyIHN5c3RlbVwiLFxuICAgIFwiZGVsdHNcIixcbiAgICBcImZvcmVhcm1zXCIsXG4gICAgXCJnbHV0ZXNcIixcbiAgICBcImhhbXN0cmluZ3NcIixcbiAgICBcImxhdHNcIixcbiAgICBcImxldmF0b3Igc2NhcHVsYWVcIixcbiAgICBcInBlY3RvcmFsc1wiLFxuICAgIFwicXVhZHNcIixcbiAgICBcInNlcnJhdHVzIGFudGVyaW9yXCIsXG4gICAgXCJzcGluZVwiLFxuICAgIFwidHJhcHNcIixcbiAgICBcInRyaWNlcHNcIixcbiAgICBcInVwcGVyIGJhY2tcIixcbiAgXTtcblxuICBjb25zdCBib2R5UGFydHM6IHN0cmluZ1tdID0gW1xuICAgIFwiYmFja1wiLFxuICAgIFwiY2FyZGlvXCIsXG4gICAgXCJjaGVzdFwiLFxuICAgIFwibG93ZXIgYXJtc1wiLFxuICAgIFwibG93ZXIgbGVnc1wiLFxuICAgIFwibmVja1wiLFxuICAgIFwic2hvdWxkZXJzXCIsXG4gICAgXCJ1cHBlciBhcm1zXCIsXG4gICAgXCJ1cHBlciBsZWdzXCIsXG4gICAgXCJ3YWlzdFwiLFxuICBdO1xuXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0QSwgc2V0U2VsZWN0QV0gPSB1c2VBdG9tKHNlbGVjdEF0b20pXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZUF0b20obmFtZUF0b20pXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZUF0b20odHlwZUF0b20pXG4gIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VBdG9tKHRhcmdldEF0b20pXG4gIGNvbnN0IFtib2R5LCBTZXRCb2R5XT0gdXNlQXRvbShib2R5QXRvbSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzMwMHB4XSBmaXhlZCBsZWZ0LTRyb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiB6LTUwIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTJcIj5TZWFyY2g8L2gxPlxuICAgICAgICA8aDE+U2VhcmNoIGJ5OjwvaDE+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3QoZS50YXJnZXQudmFsdWUpLCBjb25zb2xlLmxvZyhzZWxlY3QpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J251bGwnIHNlbGVjdGVkPm5vbmU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmFtZVwiPk5hbWU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHlwZVwiPlR5cGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGFyZ2V0XCI+VGFyZ2V0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJvZHlQYXJ0XCI+Qm9keSBQYXJ0PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7c2VsZWN0ID09IFwibmFtZVwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTphbnkpID0+IHtzZXROYW1lKGUudGFyZ2V0LnZhbHVlKSwgY29uc29sZS5sb2cobmFtZSl9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RBKHNlbGVjdCl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWxlY3QgPT0gXCJ0eXBlXCIgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGU6IGFueSkgPT4ge3NldFR5cGUoZS50YXJnZXQudmFsdWUpLCBjb25zb2xlLmxvZyh0eXBlKX19IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgICAgU2VsZWN0IFR5cGVcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIHt0eXBlcy5tYXAoKHR5cGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dHlwZX0ga2V5PXtpbmRleH0+e3R5cGV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdEEoc2VsZWN0KX0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3NlbGVjdCA9PSBcInRhcmdldFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGFyZ2V0fSBvbkNoYW5nZT17KGU6YW55KSA9PiB7c2V0VGFyZ2V0KGUudGFyZ2V0LnZhbHVlKSwgY29uc29sZS5sb2codGFyZ2V0KX19IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XG4gICAgICAgICAgICAgICAgU2VsZWN0IFRhcmdldFxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAge3RhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGFyZ2V0fSBrZXk9e2luZGV4fT57dGFyZ2V0fTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RBKHNlbGVjdCl9IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWxlY3QgPT0gXCJib2R5UGFydFwiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Ym9keVBhcnRzfSBvbkNoYW5nZT17KGU6YW55KSA9PiB7U2V0Qm9keShlLnRhcmdldC52YWx1ZSksIGNvbnNvbGUubG9nKGJvZHkpfX0gY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5cbiAgICAgICAgICAgICAgICBTZWxlY3QgQm9keSBQYXJ0XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Ym9keVBhcnRzLm1hcCgocGFydCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwYXJ0fSBrZXk9e2luZGV4fT57cGFydH08L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0QShzZWxlY3QpfSBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJhdG9tIiwidXNlQXRvbSIsIm5hbWVBdG9tIiwidHlwZUF0b20iLCJib2R5QXRvbSIsInRhcmdldEF0b20iLCJzZWxlY3RBdG9tIiwiTWVudSIsInR5cGVzIiwidGFyZ2V0cyIsImJvZHlQYXJ0cyIsInNlbGVjdCIsInNldFNlbGVjdCIsInNlbGVjdEEiLCJzZXRTZWxlY3RBIiwibmFtZSIsInNldE5hbWUiLCJ0eXBlIiwic2V0VHlwZSIsInRhcmdldCIsInNldFRhcmdldCIsImJvZHkiLCJTZXRCb2R5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb24iLCJzZWxlY3RlZCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJtYXAiLCJpbmRleCIsInBhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/menu.tsx\n"));

/***/ })

});