"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _Navigation = require("./../components/Navigation.js");

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\jesse\\Documents\\HarryCode\\learning\\iso-blog\\isomorphic-blog\\pages\\yourposts.js?entry";

// Export an anonymous arrow function
// which returns the template
exports.default = function () {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Blog"), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/styles.css", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement(_Navigation2.default, { current: "3", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Harry's Isomorphic Blog"), _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Your Posts"));
};