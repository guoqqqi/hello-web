webpackHotUpdate_N_E("pages/post/[category]/[slug]",{

/***/ "./views/Post/Post.tsx":
/*!*****************************!*\
  !*** ./views/Post/Post.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ \"./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/guoqi/workspace/hello-web-/views/Post/Post.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar CodeBlock = function CodeBlock(_ref) {\n  var language = _ref.language,\n      value = _ref.value;\n  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__[\"Prism\"], {\n    showLineNumbers: true,\n    language: language,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, value);\n};\n\n_c = CodeBlock;\n\nvar Page = function Page(_ref2) {\n  var content = _ref2.content,\n      _ref2$data = _ref2.data,\n      data = _ref2$data === void 0 ? {} : _ref2$data;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"This is my article !\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, content === undefined && __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"\\u9519\\u8BEF\\uFF0C\\u672A\\u627E\\u5230\\uFF01\"), content !== undefined && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, data.title), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, new Date(data.date).toLocaleDateString()), __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    escapeHtml: true,\n    source: content,\n    plugins: [remark_gfm__WEBPACK_IMPORTED_MODULE_6___default.a],\n    renderers: {\n      code: CodeBlock\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  })))));\n};\n\n_c2 = Page;\n\nPage.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query, slug, category, _ref4, _ref4$lng, lng, fileData, _matter, data, content;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // 1. 获取 Slug\n            _context$query = context.query, slug = _context$query.slug, category = _context$query.category; // 2. 获取语言\n\n            _ref4 = context.req || {}, _ref4$lng = _ref4.lng, lng = _ref4$lng === void 0 ? \"zh-CN\" : _ref4$lng; // 3. markdown to json \n\n            _context.prev = 2;\n            _context.next = 5;\n            return __webpack_require__(\"./_posts lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(\"./\".concat(category, \"/\").concat(lng, \"/\").concat(slug, \".md\"));\n\n          case 5:\n            fileData = _context.sent;\n            _matter = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileData[\"default\"]), data = _matter.data, content = _matter.content;\n            return _context.abrupt(\"return\", {\n              namespacesRequired: [\"common\"],\n              data: data,\n              content: content\n            });\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", {\n              namespacesRequired: [\"common\"],\n              content: undefined\n            });\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 10]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CodeBlock\");\n$RefreshReg$(_c2, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvUG9zdC9Qb3N0LnRzeD8zY2U3Il0sIm5hbWVzIjpbIkNvZGVCbG9jayIsImxhbmd1YWdlIiwidmFsdWUiLCJQYWdlIiwiY29udGVudCIsImRhdGEiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZ2ZtIiwiY29kZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInNsdWciLCJjYXRlZ29yeSIsInJlcSIsImxuZyIsImZpbGVEYXRhIiwibWF0dGVyIiwibmFtZXNwYWNlc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3pDLFNBQ0UsTUFBQyw4REFBRDtBQUFtQixtQkFBZSxFQUFFLElBQXBDO0FBQTBDLFlBQVEsRUFBRUQsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxLQURILENBREY7QUFLRCxDQU5EOztLQUFNRixTOztBQVFOLElBQU1HLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLFFBQTRCO0FBQUEsTUFBekJDLE9BQXlCLFNBQXpCQSxPQUF5QjtBQUFBLHlCQUFoQkMsSUFBZ0I7QUFBQSxNQUFoQkEsSUFBZ0IsMkJBQVQsRUFBUztBQUM3RCxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELE9BQU8sS0FBS0UsU0FBWixJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBRkosRUFJR0YsT0FBTyxLQUFLRSxTQUFaLElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0QsSUFBSSxDQUFDRSxLQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU8sSUFBSUMsSUFBSixDQUFTSCxJQUFJLENBQUNJLElBQWQsRUFBb0JDLGtCQUFwQixFQUFQLENBRkYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUNFLGNBQVUsRUFBRSxJQURkO0FBRUUsVUFBTSxFQUFFTixPQUZWO0FBR0UsV0FBTyxFQUFFLENBQUNPLGlEQUFELENBSFg7QUFJRSxhQUFTLEVBQUU7QUFBRUMsVUFBSSxFQUFFWjtBQUFSLEtBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FMSixDQUZGLENBREY7QUEwQkQsQ0EzQkQ7O01BQU1HLEk7O0FBNkJOQSxJQUFJLENBQUNVLGVBQUw7QUFBQSwrTEFBdUIsaUJBQU9DLE9BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQURxQiw2QkFFTUEsT0FBTyxDQUFDQyxLQUZkLEVBRWJDLElBRmEsa0JBRWJBLElBRmEsRUFFUEMsUUFGTyxrQkFFUEEsUUFGTyxFQUlyQjs7QUFKcUIsb0JBS0tILE9BQU8sQ0FBQ0ksR0FBUixJQUFzQixFQUwzQixvQkFLYkMsR0FMYSxFQUtiQSxHQUxhLDBCQUtQLE9BTE8sY0FPckI7O0FBUHFCO0FBQUE7QUFBQSxtQkFTSSwrREFBTyxZQUFnQkYsUUFBdkIsY0FBbUNFLEdBQW5DLGNBQTBDSCxJQUExQyxTQVRKOztBQUFBO0FBU2JJLG9CQVRhO0FBQUEsc0JBVU9DLGtEQUFNLENBQUNELFFBQVEsV0FBVCxDQVZiLEVBVVhmLElBVlcsV0FVWEEsSUFWVyxFQVVMRCxPQVZLLFdBVUxBLE9BVks7QUFBQSw2Q0FXWjtBQUNMa0IsZ0NBQWtCLEVBQUUsQ0FBQyxRQUFELENBRGY7QUFFTGpCLGtCQUFJLEVBQUpBLElBRks7QUFHTEQscUJBQU8sRUFBUEE7QUFISyxhQVhZOztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQWlCWjtBQUNMa0IsZ0NBQWtCLEVBQUUsQ0FBQyxRQUFELENBRGY7QUFFTGxCLHFCQUFPLEVBQUVFO0FBRkosYUFqQlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0JlSCxtRUFBZiIsImZpbGUiOiIuL3ZpZXdzL1Bvc3QvUG9zdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcbmltcG9ydCBnZm0gZnJvbSAncmVtYXJrLWdmbSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZGF0YToge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGF0ZTogRGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IENvZGVCbG9jayA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN5bnRheEhpZ2hsaWdodGVyIHNob3dMaW5lTnVtYmVycz17dHJ1ZX0gbGFuZ3VhZ2U9e2xhbmd1YWdlfT5cbiAgICAgIHt2YWx1ZX1cbiAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICApO1xufTtcblxuY29uc3QgUGFnZTogTmV4dFBhZ2U8UHJvcHMsIGFueT4gPSAoeyBjb250ZW50LCBkYXRhID0ge30gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlRoaXMgaXMgbXkgYXJ0aWNsZSAhPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Y29udGVudCA9PT0gdW5kZWZpbmVkICYmIChcbiAgICAgICAgICA8aDI+6ZSZ6K+v77yM5pyq5om+5Yiw77yBPC9oMj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHNwYW4+e25ldyBEYXRlKGRhdGEuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNvdXJjZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICBwbHVnaW5zPXtbZ2ZtXX1cbiAgICAgICAgICAgICAgICByZW5kZXJlcnM9e3sgY29kZTogQ29kZUJsb2NrIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvPlxuICApO1xufTtcblxuUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAvLyAxLiDojrflj5YgU2x1Z1xuICBjb25zdCB7IHNsdWcsIGNhdGVnb3J5IH0gPSBjb250ZXh0LnF1ZXJ5O1xuXG4gIC8vIDIuIOiOt+WPluivreiogFxuICBjb25zdCB7IGxuZyA9IFwiemgtQ05cIiB9ID0gY29udGV4dC5yZXEgYXMgYW55IHx8IHt9O1xuXG4gIC8vIDMuIG1hcmtkb3duIHRvIGpzb24gXG4gIHRyeSB7XG4gICAgY29uc3QgZmlsZURhdGEgPSBhd2FpdCBpbXBvcnQoYC4uLy4uL19wb3N0cy8ke2NhdGVnb3J5fS8ke2xuZ30vJHtzbHVnfS5tZGApO1xuICAgIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKGZpbGVEYXRhLmRlZmF1bHQpO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiXSxcbiAgICAgIGRhdGEsXG4gICAgICBjb250ZW50LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogW1wiY29tbW9uXCJdLFxuICAgICAgY29udGVudDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UgYXMgYW55OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./views/Post/Post.tsx\n");

/***/ })

})