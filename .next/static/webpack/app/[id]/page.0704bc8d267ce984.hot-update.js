"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[id]/page",{

/***/ "(app-pages-browser)/./app/[id]/page.tsx":
/*!***************************!*\
  !*** ./app/[id]/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_detailsDummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/detailsDummy */ \"(app-pages-browser)/./components/detailsDummy.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Details = (param)=>{\n    let { params } = param;\n    // const { data, isLoading } = useQuery<PostType>({\n    //   queryKey: [\"exer\"],\n    //   queryFn: () => api_id(params.id),\n    // });\n    const data = _components_detailsDummy__WEBPACK_IMPORTED_MODULE_1__.detailsDummy;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 0.5\n        },\n        className: \"container mx-auto px-4 py-8 flex flex-col md:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/2 flex flex-col justify-between md:mr-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {\n                        initial: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        transition: {\n                            duration: 0.5\n                        },\n                        className: \"text-3xl md:text-4xl lg:text-5xl font-bold mb-10\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl md:text-2xl font-semibold mb-2\",\n                                children: [\n                                    \"EQUIPMENT: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black\",\n                                        children: data.equipment\n                                    }, void 0, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 24\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl md:text-2xl font-semibold mb-2\",\n                                children: [\n                                    \"BODY PART: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black-600\",\n                                        children: data.bodyPart\n                                    }, void 0, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 24\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl md:text-2xl font-semibold mb-2\",\n                                children: [\n                                    \"TARGET: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black-600\",\n                                        children: data.target\n                                    }, void 0, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl md:text-2xl font-semibold mb-2\",\n                                children: [\n                                    \"SECONDARY MUSCLES:\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-black-600\",\n                                        children: data.secondaryMuscles\n                                    }, void 0, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl md:text-4xl font-bold mb-4\",\n                                children: \"INSTRUCTIONS\"\n                            }, void 0, false, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.ul, {\n                                initial: {\n                                    opacity: 0\n                                },\n                                animate: {\n                                    opacity: 1\n                                },\n                                transition: {\n                                    delay: 0.2\n                                },\n                                className: \"text-lg md:text-2xl leading-relaxed list-decimal\",\n                                children: data.instructions.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {\n                                        initial: {\n                                            opacity: 0,\n                                            y: 20\n                                        },\n                                        animate: {\n                                            opacity: 1,\n                                            y: 0\n                                        },\n                                        transition: {\n                                            duration: 0.5,\n                                            delay: index * 0.1\n                                        },\n                                        children: item\n                                    }, index, false, {\n                                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-1/2 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 0.2\n                    },\n                    className: \"\",\n                    height: 500,\n                    width: 600,\n                    src: data.gifUrl,\n                    alt: \"Exercise GIF\"\n                }, void 0, false, {\n                    fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bartoszkoza/Dokumenty/exerciser/app/[id]/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLeUQ7QUFFbEI7QUFDYjtBQUUxQixNQUFNRyxVQUFVO1FBQUMsRUFBRUMsTUFBTSxFQUE4QjtJQUNyRCxtREFBbUQ7SUFDbkQsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0QyxNQUFNO0lBRU4sTUFBTUMsT0FBT0wsa0VBQVlBO0lBRXpCLHFCQUNFLDhEQUFDQyxpREFBTUEsQ0FBQ0ssR0FBRztRQUNUQyxTQUFTO1lBQUVDLFNBQVM7UUFBRTtRQUN0QkMsU0FBUztZQUFFRCxTQUFTO1FBQUU7UUFDdEJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxXQUFVOzswQkFFViw4REFBQ047Z0JBQUlNLFdBQVU7O2tDQUNiLDhEQUFDWCxpREFBTUEsQ0FBQ1ksRUFBRTt3QkFDUk4sU0FBUzs0QkFBRUMsU0FBUzs0QkFBR00sR0FBRyxDQUFDO3dCQUFHO3dCQUM5QkwsU0FBUzs0QkFBRUQsU0FBUzs0QkFBR00sR0FBRzt3QkFBRTt3QkFDNUJKLFlBQVk7NEJBQUVDLFVBQVU7d0JBQUk7d0JBQzVCQyxXQUFVO2tDQUVUUCxLQUFLVSxJQUFJOzs7Ozs7a0NBRVosOERBQUNUO3dCQUFJTSxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUdKLFdBQVU7O29DQUF5QztrREFDMUMsOERBQUNLO3dDQUFLTCxXQUFVO2tEQUFjUCxLQUFLYSxTQUFTOzs7Ozs7Ozs7Ozs7MENBRXpELDhEQUFDRjtnQ0FBR0osV0FBVTs7b0NBQXlDO2tEQUMxQyw4REFBQ0s7d0NBQUtMLFdBQVU7a0RBQWtCUCxLQUFLYyxRQUFROzs7Ozs7Ozs7Ozs7MENBRTVELDhEQUFDSDtnQ0FBR0osV0FBVTs7b0NBQXlDO2tEQUM3Qyw4REFBQ0s7d0NBQUtMLFdBQVU7a0RBQWtCUCxLQUFLZSxNQUFNOzs7Ozs7Ozs7Ozs7MENBRXZELDhEQUFDSjtnQ0FBR0osV0FBVTs7b0NBQXlDO29DQUNsQztrREFDbkIsOERBQUNLO3dDQUFLTCxXQUFVO2tEQUFrQlAsS0FBS2dCLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUczRCw4REFBQ2Y7OzBDQUNDLDhEQUFDTztnQ0FBR0QsV0FBVTswQ0FBc0M7Ozs7OzswQ0FDcEQsOERBQUNYLGlEQUFNQSxDQUFDcUIsRUFBRTtnQ0FDUmYsU0FBUztvQ0FBRUMsU0FBUztnQ0FBRTtnQ0FDdEJDLFNBQVM7b0NBQUVELFNBQVM7Z0NBQUU7Z0NBQ3RCRSxZQUFZO29DQUFFYSxPQUFPO2dDQUFJO2dDQUN6QlgsV0FBVTswQ0FFVFAsS0FBS21CLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUM1Qiw4REFBQzFCLGlEQUFNQSxDQUFDMkIsRUFBRTt3Q0FFUnJCLFNBQVM7NENBQUVDLFNBQVM7NENBQUdNLEdBQUc7d0NBQUc7d0NBQzdCTCxTQUFTOzRDQUFFRCxTQUFTOzRDQUFHTSxHQUFHO3dDQUFFO3dDQUM1QkosWUFBWTs0Q0FBRUMsVUFBVTs0Q0FBS1ksT0FBT0ksUUFBUTt3Q0FBSTtrREFFL0NEO3VDQUxJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFXZiw4REFBQ3JCO2dCQUFJTSxXQUFVOzBCQUNiLDRFQUFDWCxpREFBTUEsQ0FBQzRCLEdBQUc7b0JBQ1R0QixTQUFTO3dCQUFFQyxTQUFTO29CQUFFO29CQUN0QkMsU0FBUzt3QkFBRUQsU0FBUztvQkFBRTtvQkFDdEJFLFlBQVk7d0JBQUVhLE9BQU87b0JBQUk7b0JBQ3pCWCxXQUFVO29CQUNWa0IsUUFBUTtvQkFDUkMsT0FBTztvQkFDUEMsS0FBSzNCLEtBQUs0QixNQUFNO29CQUNoQkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtLQTFFTS9CO0FBNEVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9baWRdL3BhZ2UudHN4PzY3NTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGFwaV9pZCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IGRldGFpbHNEdW1teSB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGV0YWlsc0R1bW15XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERldGFpbHMgPSAoeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH0pID0+IHtcbiAgLy8gY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5PFBvc3RUeXBlPih7XG4gIC8vICAgcXVlcnlLZXk6IFtcImV4ZXJcIl0sXG4gIC8vICAgcXVlcnlGbjogKCkgPT4gYXBpX2lkKHBhcmFtcy5pZCksXG4gIC8vIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBkZXRhaWxzRHVtbXk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbWQ6bXItOFwiPlxuICAgICAgICA8bW90aW9uLmgxXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgbWItMTBcIlxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRVFVSVBNRU5UOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+e2RhdGEuZXF1aXBtZW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgQk9EWSBQQVJUOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTYwMFwiPntkYXRhLmJvZHlQYXJ0fTwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgVEFSR0VUOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTYwMFwiPntkYXRhLnRhcmdldH08L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTJcIj5cbiAgICAgICAgICAgIFNFQ09OREFSWSBNVVNDTEVTOntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2stNjAwXCI+e2RhdGEuc2Vjb25kYXJ5TXVzY2xlc308L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+SU5TVFJVQ1RJT05TPC9oMT5cbiAgICAgICAgICA8bW90aW9uLnVsXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQtMnhsIGxlYWRpbmctcmVsYXhlZCBsaXN0LWRlY2ltYWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkYXRhLmluc3RydWN0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9tb3Rpb24udWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgICAgc3JjPXtkYXRhLmdpZlVybH1cbiAgICAgICAgICBhbHQ9XCJFeGVyY2lzZSBHSUZcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcbiJdLCJuYW1lcyI6WyJkZXRhaWxzRHVtbXkiLCJtb3Rpb24iLCJSZWFjdCIsIkRldGFpbHMiLCJwYXJhbXMiLCJkYXRhIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJ5IiwibmFtZSIsImgyIiwic3BhbiIsImVxdWlwbWVudCIsImJvZHlQYXJ0IiwidGFyZ2V0Iiwic2Vjb25kYXJ5TXVzY2xlcyIsInVsIiwiZGVsYXkiLCJpbnN0cnVjdGlvbnMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsImltZyIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiZ2lmVXJsIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[id]/page.tsx\n"));

/***/ })

});