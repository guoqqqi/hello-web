webpackHotUpdate_N_E("pages/blog",{

/***/ "./component/BoilingVerdict/Boil.tsx":
/*!*******************************************!*\
  !*** ./component/BoilingVerdict/Boil.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/guoqi/workspace/hello-web-/component/BoilingVerdict/Boil.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar Boil = function Boil() {\n  var _s = $RefreshSig$();\n\n  var BoilingVerdict = function BoilingVerdict(props) {\n    if (props.celsius >= 100) {\n      return __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 14\n        }\n      }, \"The water would boil.\");\n    }\n\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 12\n      }\n    }, \"The water would not boil.\");\n  };\n\n  var Ca = function Ca() {\n    _s();\n\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"0\"),\n        state = _useState[0],\n        setstate = _useState[1];\n\n    var handleChange = function handleChange(e) {\n      setstate(e);\n    };\n\n    return __jsx(\"fieldset\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }\n    }, __jsx(\"legend\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }\n    }, \"Enter temperature in Celsius:\"), __jsx(\"input\", {\n      value: state,\n      onChange: function onChange(e) {\n        return handleChange(e);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }), __jsx(BoilingVerdict, {\n      celsius: parseFloat(state),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }\n    }));\n  };\n\n  _s(Ca, \"uaNRiE0c4unbRSqCVdavvXLhYbA=\");\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Ca, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"this is a Boil component.\"));\n};\n\n_c = Boil;\nBoil.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          return _context.abrupt(\"return\", {});\n\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boil);\n\nvar _c;\n\n$RefreshReg$(_c, \"Boil\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0JvaWxpbmdWZXJkaWN0L0JvaWwudHN4Pzg4ZTIiXSwibmFtZXMiOlsiQm9pbCIsIkJvaWxpbmdWZXJkaWN0IiwicHJvcHMiLCJjZWxzaXVzIiwiQ2EiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0c3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicGFyc2VGbG9hdCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUtBLElBQU1BLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLEdBQU07QUFBQTs7QUFDdkMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaEMsUUFBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBUDtBQUNEOztBQUNELFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBUDtBQUNELEdBTEQ7O0FBTUEsTUFBTUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBTTtBQUFBOztBQUFBLG9CQUNXQyxzREFBUSxDQUFDLEdBQUQsQ0FEbkI7QUFBQSxRQUNSQyxLQURRO0FBQUEsUUFDREMsUUFEQzs7QUFFZixRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJGLGNBQVEsQ0FBQ0UsQ0FBRCxDQUFSO0FBQ0QsS0FGRDs7QUFHQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGLEVBRUU7QUFDRSxXQUFLLEVBQUVILEtBRFQ7QUFFRSxjQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxlQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FBbkI7QUFBQSxPQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUtFLE1BQUMsY0FBRDtBQUNFLGFBQU8sRUFBRUMsVUFBVSxDQUFDSixLQUFELENBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixDQURGO0FBVUQsR0FmRDs7QUFQdUMsS0FPakNGLEVBUGlDOztBQXdCdkMsU0FDRSxtRUFDRSxNQUFDLEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixDQURGO0FBTUQsQ0E5QkQ7O0tBQU1KLEk7QUFnQ05BLElBQUksQ0FBQ1csZUFBTCxpTUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUNkLEVBRGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFJZVgsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnQvQm9pbGluZ1ZlcmRpY3QvQm9pbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBCb2lsOiBOZXh0UGFnZTxQcm9wcywgYW55PiA9ICgpID0+IHtcbiAgY29uc3QgQm9pbGluZ1ZlcmRpY3QgPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuY2Vsc2l1cyA+PSAxMDApIHtcbiAgICAgIHJldHVybiA8cD5UaGUgd2F0ZXIgd291bGQgYm9pbC48L3A+O1xuICAgIH1cbiAgICByZXR1cm4gPHA+VGhlIHdhdGVyIHdvdWxkIG5vdCBib2lsLjwvcD47XG4gIH1cbiAgY29uc3QgQ2EgPSAoKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZShcIjBcIik7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIHNldHN0YXRlKGUpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPkVudGVyIHRlbXBlcmF0dXJlIGluIENlbHNpdXM6PC9sZWdlbmQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gLz5cbiAgICAgICAgPEJvaWxpbmdWZXJkaWN0XG4gICAgICAgICAgY2Vsc2l1cz17cGFyc2VGbG9hdChzdGF0ZSl9IC8+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2EgLz5cbiAgICAgIDxkaXY+dGhpcyBpcyBhIEJvaWwgY29tcG9uZW50LjwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuQm9pbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/BoilingVerdict/Boil.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false

})