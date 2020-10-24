webpackHotUpdate_N_E("pages/blog",{

/***/ "./component/BoilingVerdict/Boil.tsx":
/*!*******************************************!*\
  !*** ./component/BoilingVerdict/Boil.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/guoqi/workspace/hello-web-/component/BoilingVerdict/Boil.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar Boil = function Boil() {\n  var _s = $RefreshSig$();\n\n  var BoilingVerdict = function BoilingVerdict(props) {\n    console.log('props', props);\n\n    if (props.celsius >= 100) {\n      return __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 14\n        }\n      }, \"The water would boil.\");\n    }\n\n    ;\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 12\n      }\n    }, \"The water would not boil.\");\n  };\n\n  var scaleNames = {\n    c: \"Celsius\",\n    f: \"Fahrenheit\"\n  };\n\n  var TemperatureInput = function TemperatureInput() {\n    _s();\n\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"0\"),\n        state = _useState[0],\n        setstate = _useState[1];\n\n    var handleChange = function handleChange(e) {\n      console.log('e', e); // setstate(e.target.value);\n    };\n\n    return __jsx(\"fieldset\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(\"legend\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, \"Enter temperature in \", scaleNames[props.scale], \" :\"), __jsx(\"input\", {\n      value: state,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }), __jsx(BoilingVerdict, {\n      celsius: parseFloat(state),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }));\n  };\n\n  _s(TemperatureInput, \"uaNRiE0c4unbRSqCVdavvXLhYbA=\");\n\n  var Ca = function Ca() {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }\n    }, __jsx(TemperatureInput, {\n      scale: \"c\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }), __jsx(TemperatureInput, {\n      scale: \"f\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }));\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Ca, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, \"this is a Boil component.\"));\n};\n\n_c = Boil;\nBoil.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          return _context.abrupt(\"return\", {});\n\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boil);\n\nvar _c;\n\n$RefreshReg$(_c, \"Boil\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0JvaWxpbmdWZXJkaWN0L0JvaWwudHN4Pzg4ZTIiXSwibmFtZXMiOlsiQm9pbCIsIkJvaWxpbmdWZXJkaWN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY2Vsc2l1cyIsInNjYWxlTmFtZXMiLCJjIiwiZiIsIlRlbXBlcmF0dXJlSW5wdXQiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0c3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2NhbGUiLCJwYXJzZUZsb2F0IiwiQ2EiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFNQSxJQUFNQSxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixHQUFNO0FBQUE7O0FBQ3ZDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixLQUFyQjs7QUFDQSxRQUFJQSxLQUFLLENBQUNHLE9BQU4sSUFBaUIsR0FBckIsRUFBMEI7QUFDeEIsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFQO0FBQ0Q7O0FBQUE7QUFDRCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQVA7QUFDRCxHQU5EOztBQU9BLE1BQU1DLFVBQVUsR0FBRztBQUNqQkMsS0FBQyxFQUFFLFNBRGM7QUFFakJDLEtBQUMsRUFBRTtBQUZjLEdBQW5COztBQUlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUFBLG9CQUNIQyxzREFBUSxDQUFDLEdBQUQsQ0FETDtBQUFBLFFBQ3RCQyxLQURzQjtBQUFBLFFBQ2ZDLFFBRGU7O0FBRTdCLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQlgsYUFBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQlUsQ0FBakIsRUFEMEIsQ0FFMUI7QUFDRCxLQUhEOztBQUtBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQThCUixVQUFVLENBQUNKLEtBQUssQ0FBQ2EsS0FBUCxDQUF4QyxPQURGLEVBRUU7QUFDRSxXQUFLLEVBQUVKLEtBRFQ7QUFFRSxjQUFRLEVBQUVFLFlBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBS0UsTUFBQyxjQUFEO0FBQ0UsYUFBTyxFQUFFRyxVQUFVLENBQUNMLEtBQUQsQ0FEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBREY7QUFVRCxHQWpCRDs7QUFadUMsS0FZakNGLGdCQVppQzs7QUErQnZDLE1BQU1RLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQU07QUFDZixXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdCQUFEO0FBQWtCLFdBQUssRUFBQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLGdCQUFEO0FBQWtCLFdBQUssRUFBQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERjtBQU1ELEdBUEQ7O0FBU0EsU0FDRSxtRUFDRSxNQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixDQURGO0FBTUQsQ0E5Q0Q7O0tBQU1qQixJO0FBZ0ROQSxJQUFJLENBQUNrQixlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQ2QsRUFEYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQUllbEIsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnQvQm9pbGluZ1ZlcmRpY3QvQm9pbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGxvYWRHZXRJbml0aWFsUHJvcHMgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiO1xuXG50eXBlIFByb3BzID0ge307XG5cbmNvbnN0IEJvaWw6IE5leHRQYWdlPFByb3BzLCBhbnk+ID0gKCkgPT4ge1xuICBjb25zdCBCb2lsaW5nVmVyZGljdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwcm9wcycsIHByb3BzKVxuICAgIGlmIChwcm9wcy5jZWxzaXVzID49IDEwMCkge1xuICAgICAgcmV0dXJuIDxwPlRoZSB3YXRlciB3b3VsZCBib2lsLjwvcD47XG4gICAgfTtcbiAgICByZXR1cm4gPHA+VGhlIHdhdGVyIHdvdWxkIG5vdCBib2lsLjwvcD47XG4gIH07XG4gIGNvbnN0IHNjYWxlTmFtZXMgPSB7XG4gICAgYzogXCJDZWxzaXVzXCIsXG4gICAgZjogXCJGYWhyZW5oZWl0XCJcbiAgfTtcbiAgY29uc3QgVGVtcGVyYXR1cmVJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKFwiMFwiKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2UnLCBlKVxuICAgICAgLy8gc2V0c3RhdGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPkVudGVyIHRlbXBlcmF0dXJlIGluIHtzY2FsZU5hbWVzW3Byb3BzLnNjYWxlXX0gOjwvbGVnZW5kPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17c3RhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICA8Qm9pbGluZ1ZlcmRpY3RcbiAgICAgICAgICBjZWxzaXVzPXtwYXJzZUZsb2F0KHN0YXRlKX0gLz5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBDYSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRlbXBlcmF0dXJlSW5wdXQgc2NhbGU9XCJjXCIvPlxuICAgICAgICA8VGVtcGVyYXR1cmVJbnB1dCBzY2FsZT1cImZcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhIC8+XG4gICAgICA8ZGl2PnRoaXMgaXMgYSBCb2lsIGNvbXBvbmVudC48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkJvaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge307XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2lsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/BoilingVerdict/Boil.tsx\n");

/***/ })

})