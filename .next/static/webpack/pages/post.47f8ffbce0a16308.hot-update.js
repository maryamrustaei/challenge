"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post/index.js":
/*!*****************************!*\
  !*** ./pages/post/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Main */ \"./layout/Main.js\");\n\n// import { useEffect, useState } from 'react'\n\n\nvar __N_SSP = true;\n// import axios from 'axios'\nfunction Posts(param) {\n    var posts = param.posts;\n    var _this = this;\n    //   const [posts, setPosts] = useState([])\n    //   useEffect(() => {\n    //     fetch('https://jsonplaceholder.typicode.com/posts')\n    //       .then(response => response.json())\n    //       .then(data => setPosts(data))\n    //   }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Posts list\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                        children: posts.map(function(param) {\n                            var id = param.id, title = param.title;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/post/\".concat(id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 9\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 7\n                                }, _this)\n                            }, id, false, {\n                                fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 5\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                children: \"\\n    ol{\\n      margin:10px\\n    }\\n    li{\\n      margin-bottom:5px\\n    }\\n    li *{\\n      text-transform: capitalize ;\\n      color:black   \\n    }\\n    li:hover a{\\n      color:green;\\n\\n    }\\n    \"\n            }, void 0, false, {\n                fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQURBLDhDQUE4QztBQUNsQjtBQUNROztBQUNwQyw0QkFBNEI7QUFFYixTQUFTRSxLQUFLLENBQUUsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDcEMsMkNBQTJDO0lBRTNDLHNCQUFzQjtJQUN0QiwwREFBMEQ7SUFDMUQsMkNBQTJDO0lBQzNDLHNDQUFzQztJQUN0QyxXQUFXO0lBRVgscUJBQ0UsOERBQUNGLG9EQUFJOzswQkFDTCw4REFBQ0csU0FBTzs7a0NBQ1IsOERBQUNDLElBQUU7a0NBQUMsWUFBVTs7Ozs7NEJBQUs7a0NBRXZCLDhEQUFDQyxJQUFFO2tDQUNBSCxLQUFLLENBQUNJLEdBQUcsQ0FBQztnQ0FBR0MsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLEtBQUssU0FBTEEsS0FBSztpREFDckIsOERBQUNDLElBQUU7MENBQ0QsNEVBQUNWLGtEQUFJO29DQUFDVyxJQUFJLEVBQUUsUUFBTyxDQUFLLE9BQUhILEVBQUUsQ0FBRTs4Q0FDdkIsNEVBQUNJLEdBQUM7a0RBQUVILEtBQUs7Ozs7OzZDQUFLOzs7Ozt5Q0FDVDsrQkFIQUQsRUFBRTs7OztxQ0FJTjt5QkFDTixDQUFDOzs7Ozs0QkFDQzs7Ozs7O29CQUNTOzBCQUNWLDhEQUFDSyxPQUFLOzBCQUFHLDhNQWVUOzs7OztvQkFBVTs7Ozs7O1lBRUgsQ0FDUjtDQUNGO0FBM0N1QlgsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L2luZGV4LmpzP2VjNmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vLi4vbGF5b3V0L01haW4nXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzICh7IHBvc3RzIH0pIHtcbiAgLy8gICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuICAvLyAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgICAgIC50aGVuKGRhdGEgPT4gc2V0UG9zdHMoZGF0YSkpXG4gIC8vICAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbj5cbiAgICA8YXJ0aWNsZT5cbiAgICA8aDM+UG9zdHMgbGlzdDwvaDM+XG5cbjxvbD5cbiAge3Bvc3RzLm1hcCgoeyBpZCwgdGl0bGUgfSkgPT4gKFxuICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke2lkfWB9PlxuICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICkpfVxuPC9vbD5cbiAgICA8L2FydGljbGU+XG4gICAgPHN0eWxlPntgXG4gICAgb2x7XG4gICAgICBtYXJnaW46MTBweFxuICAgIH1cbiAgICBsaXtcbiAgICAgIG1hcmdpbi1ib3R0b206NXB4XG4gICAgfVxuICAgIGxpICp7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSA7XG4gICAgICBjb2xvcjpibGFjayAgIFxuICAgIH1cbiAgICBsaTpob3ZlciBhe1xuICAgICAgY29sb3I6Z3JlZW47XG5cbiAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIFxuICAgIDwvTWFpbj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzICgpIHtcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cydcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAvLyAgIGNvbnN0IHsgZGF0YTogcG9zdHMgfSA9IGF3YWl0IGF4aW9zKHVybClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0c1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJNYWluIiwiUG9zdHMiLCJwb3N0cyIsImFydGljbGUiLCJoMyIsIm9sIiwibWFwIiwiaWQiLCJ0aXRsZSIsImxpIiwiaHJlZiIsImEiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/index.js\n"));

/***/ })

});