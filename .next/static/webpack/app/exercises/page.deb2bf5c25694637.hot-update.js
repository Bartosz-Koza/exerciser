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

/***/ "(app-pages-browser)/./app/exercises/page.tsx":
/*!********************************!*\
  !*** ./app/exercises/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/post */ \"(app-pages-browser)/./components/post.tsx\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/menu */ \"(app-pages-browser)/./components/menu.tsx\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/api */ \"(app-pages-browser)/./lib/api.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Exercises() {\n    _s();\n    const [select] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_components_menu__WEBPACK_IMPORTED_MODULE_3__.selectAtom);\n    const [body] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_components_menu__WEBPACK_IMPORTED_MODULE_3__.bodyAtom);\n    const [target] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_components_menu__WEBPACK_IMPORTED_MODULE_3__.targetAtom);\n    const [name] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_components_menu__WEBPACK_IMPORTED_MODULE_3__.nameAtom);\n    const [type] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_components_menu__WEBPACK_IMPORTED_MODULE_3__.typeAtom);\n    var _ref, _ref1;\n    const { data, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({\n        queryKey: [\n            \"exer\",\n            select,\n            (_ref1 = (_ref = body !== null && body !== void 0 ? body : target) !== null && _ref !== void 0 ? _ref : name) !== null && _ref1 !== void 0 ? _ref1 : type\n        ],\n        queryFn: ()=>{\n            if (select == \"name\") {\n                return (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.api_name)(name);\n            }\n            if (select == \"type\") {\n                return (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.api_type)(type);\n            }\n            if (select == \"target\") {\n                return (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.api_target)(target);\n            }\n            if (select == \"bodyPart\") {\n                return (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.api_body)(body);\n            }\n            return (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.apiCall)();\n        }\n    });\n    //const data = dummy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/exercises/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 xl:grid-cols-6 gap-8 px-5 ml-[300px] py-4 \",\n                children: !isLoading && data.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__.Post, {\n                            item: item\n                        }, void 0, false, {\n                            fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/exercises/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/exercises/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Exercises, \"+LuglwkqjVWxDukuf971T2wN6Vs=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Exercises;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Exercises);\nvar _c;\n$RefreshReg$(_c, \"Exercises\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9leGVyY2lzZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFeUM7QUFDSTtBQUNKO0FBQ3FDO0FBRUE7QUFRbkQ7QUFDSztBQUVoQyxTQUFTZTs7SUFDUCxNQUFNLENBQUNDLE9BQU8sR0FBR0YsOENBQU9BLENBQUNMLHdEQUFVQTtJQUNuQyxNQUFNLENBQUNRLEtBQUssR0FBR0gsOENBQU9BLENBQUNKLHNEQUFRQTtJQUMvQixNQUFNLENBQUNRLE9BQU8sR0FBR0osOENBQU9BLENBQUNGLHdEQUFVQTtJQUNuQyxNQUFNLENBQUNPLEtBQUssR0FBR0wsOENBQU9BLENBQUNILHNEQUFRQTtJQUMvQixNQUFNLENBQUNTLEtBQUssR0FBR04sOENBQU9BLENBQUNELHNEQUFRQTtRQUdGSSxNQUFBQTtJQUQ3QixNQUFNLEVBQUVJLElBQUksRUFBRUMsU0FBUyxFQUFFLEdBQUdkLCtEQUFRQSxDQUFDO1FBQ25DZSxVQUFVO1lBQUM7WUFBUVA7WUFBUUMsQ0FBQUEsUUFBQUEsQ0FBQUEsT0FBQUEsaUJBQUFBLGtCQUFBQSxPQUFRQyxvQkFBUkQsa0JBQUFBLE9BQWtCRSxrQkFBbEJGLG1CQUFBQSxRQUEwQkc7U0FBSztRQUMxREksU0FBUztZQUNQLElBQUlSLFVBQVUsUUFBUTtnQkFDcEIsT0FBT1gsa0RBQVFBLENBQUNjO1lBQ2xCO1lBQ0EsSUFBSUgsVUFBVSxRQUFRO2dCQUNwQixPQUFPVCxrREFBUUEsQ0FBQ2E7WUFDbEI7WUFDQSxJQUFJSixVQUFVLFVBQVU7Z0JBQ3RCLE9BQU9WLG9EQUFVQSxDQUFDWTtZQUNwQjtZQUNBLElBQUlGLFVBQVUsWUFBWTtnQkFDeEIsT0FBT1osa0RBQVFBLENBQUNhO1lBQ2xCO1lBQ0EsT0FBT2QsaURBQU9BO1FBQ2hCO0lBQ0Y7SUFFQSxvQkFBb0I7SUFFcEIscUJBQ0U7OzBCQUNFLDhEQUFDRCxrREFBSUE7Ozs7OzBCQUNMLDhEQUFDdUI7Z0JBQUlDLFdBQVU7MEJBQ1osQ0FBQ0osYUFDQUQsS0FBS00sR0FBRyxDQUFDLENBQUNDO29CQUNSLHFCQUNFO2tDQUNFLDRFQUFDM0Isa0RBQUlBOzRCQUFDMkIsTUFBTUE7Ozs7Ozs7Z0JBR2xCOzs7Ozs7OztBQUlWO0dBM0NTYjs7UUFDVUQsMENBQU9BO1FBQ1RBLDBDQUFPQTtRQUNMQSwwQ0FBT0E7UUFDVEEsMENBQU9BO1FBQ1BBLDBDQUFPQTtRQUVNTiwyREFBUUE7OztLQVA3Qk87QUE2Q1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2V4ZXJjaXNlcy9wYWdlLnRzeD8yODE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdFwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJAL2NvbXBvbmVudHMvbWVudVwiO1xuaW1wb3J0IHsgYXBpQ2FsbCwgYXBpX2JvZHksIGFwaV9uYW1lLCBhcGlfdGFyZ2V0LCBhcGlfdHlwZSB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSBcIi4uLy4uL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IGR1bW15IH0gZnJvbSBcIkAvY29tcG9uZW50cy9kdW1teVwiO1xuaW1wb3J0IHtcbiAgc2VsZWN0QXRvbSxcbiAgYm9keUF0b20sXG4gIG5hbWVBdG9tLFxuICB0YXJnZXRBdG9tLFxuICB0eXBlQXRvbSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy9tZW51XCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5cbmZ1bmN0aW9uIEV4ZXJjaXNlcygpIHtcbiAgY29uc3QgW3NlbGVjdF0gPSB1c2VBdG9tKHNlbGVjdEF0b20pO1xuICBjb25zdCBbYm9keV0gPSB1c2VBdG9tKGJvZHlBdG9tKTtcbiAgY29uc3QgW3RhcmdldF0gPSB1c2VBdG9tKHRhcmdldEF0b20pO1xuICBjb25zdCBbbmFtZV0gPSB1c2VBdG9tKG5hbWVBdG9tKTtcbiAgY29uc3QgW3R5cGVdID0gdXNlQXRvbSh0eXBlQXRvbSk7XG5cbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogW1wiZXhlclwiLCBzZWxlY3QsIGJvZHkgPz8gdGFyZ2V0ID8/IG5hbWUgPz8gdHlwZV0sXG4gICAgcXVlcnlGbjogKCkgPT4ge1xuICAgICAgaWYgKHNlbGVjdCA9PSBcIm5hbWVcIikge1xuICAgICAgICByZXR1cm4gYXBpX25hbWUobmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0ID09IFwidHlwZVwiKSB7XG4gICAgICAgIHJldHVybiBhcGlfdHlwZSh0eXBlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3QgPT0gXCJ0YXJnZXRcIikge1xuICAgICAgICByZXR1cm4gYXBpX3RhcmdldCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdCA9PSBcImJvZHlQYXJ0XCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaV9ib2R5KGJvZHkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFwaUNhbGwoKTtcbiAgICB9LFxuICB9KTtcblxuICAvL2NvbnN0IGRhdGEgPSBkdW1teVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgeGw6Z3JpZC1jb2xzLTYgZ2FwLTggcHgtNSBtbC1bMzAwcHhdIHB5LTQgXCI+XG4gICAgICAgIHshaXNMb2FkaW5nICYmXG4gICAgICAgICAgZGF0YS5tYXAoKGl0ZW06IFBvc3RUeXBlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxQb3N0IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeGVyY2lzZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0IiwiTWVudSIsImFwaUNhbGwiLCJhcGlfYm9keSIsImFwaV9uYW1lIiwiYXBpX3RhcmdldCIsImFwaV90eXBlIiwidXNlUXVlcnkiLCJzZWxlY3RBdG9tIiwiYm9keUF0b20iLCJuYW1lQXRvbSIsInRhcmdldEF0b20iLCJ0eXBlQXRvbSIsInVzZUF0b20iLCJFeGVyY2lzZXMiLCJzZWxlY3QiLCJib2R5IiwidGFyZ2V0IiwibmFtZSIsInR5cGUiLCJkYXRhIiwiaXNMb2FkaW5nIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/exercises/page.tsx\n"));

/***/ })

});