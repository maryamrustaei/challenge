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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Main */ \"./layout/Main.js\");\n\n// import { useEffect, useState } from 'react'\n\n\nvar __N_SSP = true;\n// import axios from 'axios'\nfunction Posts(param) {\n    var posts = param.posts;\n    var _this = this;\n    //   const [posts, setPosts] = useState([])\n    //   useEffect(() => {\n    //     fetch('https://jsonplaceholder.typicode.com/posts')\n    //       .then(response => response.json())\n    //       .then(data => setPosts(data))\n    //   }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Posts list\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    children: posts.map(function(param) {\n                        var id = param.id, title = param.title;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post/\".concat(id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 9\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                                lineNumber: 23,\n                                columnNumber: 7\n                            }, _this)\n                        }, id, false, {\n                            fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                            lineNumber: 22,\n                            columnNumber: 5\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                    children: \"\\n    ol{\\n      margin:10px\\n    }\\n    li{\\n      margin-bottom:5px\\n    }\\n    li *{\\n      text-transform: capitalize ;\\n      color:black   \\n    }\\n    li:hover a{\\n      color:green;\\n      font-weight: 400;\\n    }\\n    \"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Challenge\\\\pages\\\\post\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQURBLDhDQUE4QztBQUNsQjtBQUNROztBQUNwQyw0QkFBNEI7QUFFYixTQUFTRSxLQUFLLENBQUUsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDcEMsMkNBQTJDO0lBRTNDLHNCQUFzQjtJQUN0QiwwREFBMEQ7SUFDMUQsMkNBQTJDO0lBQzNDLHNDQUFzQztJQUN0QyxXQUFXO0lBRVgscUJBQ0UsOERBQUNGLG9EQUFJO2tCQUNMLDRFQUFDRyxTQUFPOzs4QkFDUiw4REFBQ0MsSUFBRTs4QkFBQyxZQUFVOzs7Ozt3QkFBSzs4QkFFdkIsOERBQUNDLElBQUU7OEJBQ0FILEtBQUssQ0FBQ0ksR0FBRyxDQUFDOzRCQUFHQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsS0FBSyxTQUFMQSxLQUFLOzZDQUNyQiw4REFBQ0MsSUFBRTtzQ0FDRCw0RUFBQ1Ysa0RBQUk7Z0NBQUNXLElBQUksRUFBRSxRQUFPLENBQUssT0FBSEgsRUFBRSxDQUFFOzBDQUN2Qiw0RUFBQ0ksR0FBQzs4Q0FBRUgsS0FBSzs7Ozs7eUNBQUs7Ozs7O3FDQUNUOzJCQUhBRCxFQUFFOzs7O2lDQUlOO3FCQUNOLENBQUM7Ozs7O3dCQUNDOzhCQUNMLDhEQUFDSyxPQUFLOzhCQUFHLHFPQWVMOzs7Ozt3QkFBVTs7Ozs7O2dCQUNBOzs7OztZQUdILENBRVI7Q0FDRjtBQTdDdUJYLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9pbmRleC5qcz9lYzZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL2xheW91dC9NYWluJ1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cyAoeyBwb3N0cyB9KSB7XG4gIC8vICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSlcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcbiAgLy8gICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgICAudGhlbihkYXRhID0+IHNldFBvc3RzKGRhdGEpKVxuICAvLyAgIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPE1haW4+XG4gICAgPGFydGljbGU+XG4gICAgPGgzPlBvc3RzIGxpc3Q8L2gzPlxuXG48b2w+XG4gIHtwb3N0cy5tYXAoKHsgaWQsIHRpdGxlIH0pID0+IChcbiAgICA8bGkga2V5PXtpZH0+XG4gICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtpZH1gfT5cbiAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApKX1cbjwvb2w+XG48c3R5bGU+e2BcbiAgICBvbHtcbiAgICAgIG1hcmdpbjoxMHB4XG4gICAgfVxuICAgIGxpe1xuICAgICAgbWFyZ2luLWJvdHRvbTo1cHhcbiAgICB9XG4gICAgbGkgKntcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplIDtcbiAgICAgIGNvbG9yOmJsYWNrICAgXG4gICAgfVxuICAgIGxpOmhvdmVyIGF7XG4gICAgICBjb2xvcjpncmVlbjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2FydGljbGU+XG5cbiAgICBcbiAgICA8L01haW4+XG4gICAgXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyAoKSB7XG4gIGNvbnN0IHVybCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgLy8gICBjb25zdCB7IGRhdGE6IHBvc3RzIH0gPSBhd2FpdCBheGlvcyh1cmwpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHNcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiTWFpbiIsIlBvc3RzIiwicG9zdHMiLCJhcnRpY2xlIiwiaDMiLCJvbCIsIm1hcCIsImlkIiwidGl0bGUiLCJsaSIsImhyZWYiLCJhIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/index.js\n"));

/***/ })

});