"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var _components_projects_project_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/projects/project-item */ \"./components/projects/project-item.js\");\n\n\n\n\n\nvar __N_SSP = true;\nfunction Projects(param) {\n    var projects = param.projects;\n    var _this = this;\n    var ref, ref1;\n    console.log(projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center min-h-screen px-3 mb-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"SR PortFolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"To See an Empire Fall\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold sm:text-6xl\",\n                    children: [\n                        \"\\uCD1D \\uD504\\uB85C\\uC81D\\uD2B8 :\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"pl-4 text-blue-500\",\n                            children: (ref = projects.results) === null || ref === void 0 ? void 0 : ref.length\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2\",\n                    children: (ref1 = projects.results) === null || ref1 === void 0 ? void 0 : ref1.map(function(aProject) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_project_item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: aProject\n                        }, aProject.id, false, {\n                            fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SilverRuler\\\\Desktop\\\\next-portfolio-tutorial-main\\\\pages\\\\projects.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n};\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNiO0FBQ2tCO0FBQ2U7O0FBRS9DLFNBQVNJLFFBQVEsQ0FBQyxLQUFVLEVBQUU7UUFBWixRQUFTLEdBQVQsS0FBVSxDQUFUQyxRQUFROztRQWNnQkEsR0FBZ0IsRUFJckRBLElBQWdCO0lBaEJqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLHFCQUNJLDhEQUFDTCwwREFBTTtrQkFDSCw0RUFBQ1EsS0FBRztZQUFDQyxTQUFTLEVBQUMsbUVBQW1FOzs4QkFDOUUsOERBQUNSLGtEQUFJOztzQ0FDRCw4REFBQ1MsT0FBSztzQ0FBQyxjQUFZOzs7OztnQ0FBUTtzQ0FDM0IsOERBQUNDLE1BQUk7NEJBQUNDLElBQUksRUFBQyxhQUFhOzRCQUFDQyxPQUFPLEVBQUMsdUJBQXVCOzs7OztnQ0FBRztzQ0FDM0QsOERBQUNDLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxNQUFNOzRCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7Z0NBQUc7Ozs7Ozt3QkFDcEM7OEJBQ1AsOERBQUNDLElBQUU7b0JBQUNSLFNBQVMsRUFBQyxnQ0FBZ0M7O3dCQUFDLG1DQUUzQztzQ0FBQSw4REFBQ1MsTUFBSTs0QkFBQ1QsU0FBUyxFQUFDLG9CQUFvQjtzQ0FBRUosQ0FBQUEsR0FBZ0IsR0FBaEJBLFFBQVEsQ0FBQ2MsT0FBTyxjQUFoQmQsR0FBZ0IsV0FBUSxHQUF4QkEsS0FBQUEsQ0FBd0IsR0FBeEJBLEdBQWdCLENBQUVlLE1BQU07Ozs7O2dDQUFROzs7Ozs7d0JBQ3JFOzhCQUVMLDhEQUFDWixLQUFHO29CQUFDQyxTQUFTLEVBQUMsZ0RBQWdEOzhCQUMxREosQ0FBQUEsSUFBZ0IsR0FBaEJBLFFBQVEsQ0FBQ2MsT0FBTyxjQUFoQmQsSUFBZ0IsV0FBSyxHQUFyQkEsS0FBQUEsQ0FBcUIsR0FBckJBLElBQWdCLENBQUVnQixHQUFHLENBQUMsU0FBQ0MsUUFBUTs2Q0FDNUIsOERBQUNuQix5RUFBVzs0QkFBbUJvQixJQUFJLEVBQUVELFFBQVE7MkJBQTNCQSxRQUFRLENBQUNFLEVBQUU7Ozs7aUNBQW1CO3FCQUNuRCxDQUFDOzs7Ozt3QkFDQTs7Ozs7O2dCQUNKOzs7OztZQUNELENBQ1g7Q0FDTDtBQXpCdUJwQixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzLmpzPzI1Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRPS0VOLCBEQVRBQkFTRV9JRCB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBQcm9qZWN0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0LWl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoe3Byb2plY3RzfSkge1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweC0zIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TUiBQb3J0Rm9saW88L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVG8gU2VlIGFuIEVtcGlyZSBGYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHNtOnRleHQtNnhsXCI+XG4gICAgICAgICAgICAgICAgICAgIOy0nSDtlITroZzsoJ3tirggOlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC00IHRleHQtYmx1ZS01MDBcIj57cHJvamVjdHMucmVzdWx0cz8ubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC04IHAtMTIgbS00IG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5yZXN1bHRzPy5tYXAoKGFQcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEl0ZW0ga2V5PXthUHJvamVjdC5pZH0gZGF0YT17YVByb2plY3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuLy8g67mM65OcIO2DgOyehOyXkCDtmLjstpxcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuLy8g6rCBIOyalOyyrSDrlYzrp4jri6Qg7Zi47LacXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnTm90aW9uLVZlcnNpb24nOiAnMjAyMi0wNi0yOCcsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAvLydBdXRob3JpemF0aW9uJzogYEJlYXJlciAke1RPS0VOfWBcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbicgOiBgc2VjcmV0X2FiSHZRWENCSkdqbVRQMXZzTklmYnFFVlM5azNuazJic04yaVBrSVRkbWNgXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNvcnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5XCI6IFwi7J2066aEXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiYXNjZW5kaW5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFnZV9zaXplOiAxMDBcbiAgICAgICAgfSlcbiAgICAgIH07XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubm90aW9uLmNvbS92MS9kYXRhYmFzZXMvJHtEQVRBQkFTRV9JRH0vcXVlcnlgLCBvcHRpb25zKVxuXG4gICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3RzKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IHByb2plY3RzLnJlc3VsdHM/Lm1hcCgoYVByb2plY3QpID0+KFxuICAgICAgICBhUHJvamVjdC5wcm9wZXJ0aWVzLk5hbWU/LnRpdGxlWzBdLnBsYWluX3RleHRcbiAgICApKVxuXG4gICAgLy9jb25zb2xlLmxvZyhgcHJvamVjdE5hbWVzIDogJHtwcm9qZWN0TmFtZXN9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtwcm9qZWN0c30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgICAgLy8gZ2V0U3RhdGljUHJvcHMoKSDrqZTshozrk5zrpbwg7IKs7Jqp7ZWc64uk66m0IHJldmFsaWRhdGUg66GcIOuNsOydtO2EsCDrs4Dqsr3si5wg6rCx7Iug6rCA64qlIVxuICAgICAgLy8gcmV2YWxpZGF0ZTogMSAvLyDrjbDsnbTthLAg67OA6rK97J20IOyeiOycvOuptCDqsLHsi6AgMey0iCDrp4jri6RcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiSGVhZCIsIlRPS0VOIiwiUHJvamVjdEl0ZW0iLCJQcm9qZWN0cyIsInByb2plY3RzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoMSIsInNwYW4iLCJyZXN1bHRzIiwibGVuZ3RoIiwibWFwIiwiYVByb2plY3QiLCJkYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

});