
          window.__NEXT_REGISTER_PAGE('/yourposts', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\jesse\\Documents\\HarryCode\\learning\\iso-blog\\isomorphic-blog\\components\\Navigation.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('ul', { className: 'main-navigation', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('li', { className: this.props.current == "1" ? "active-nav" : "inactive-nav", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement(_link2.default, { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, 'All Posts')), _react2.default.createElement('li', { className: this.props.current == "2" ? "active-nav" : "inactive-nav", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(_link2.default, { href: '/write', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, 'Write a Post')), _react2.default.createElement('li', { className: this.props.current == "3" ? "active-nav" : "inactive-nav", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_link2.default, { href: '/yourposts', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, 'Edit Your Posts')));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\jesse\\Documents\\HarryCode\\learning\\iso-blog\\isomorphic-blog\\components\\Navigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\jesse\\Documents\\HarryCode\\learning\\iso-blog\\isomorphic-blog\\components\\Navigation.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

var _Navigation = __webpack_require__(540);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\jesse\\Documents\\HarryCode\\learning\\iso-blog\\isomorphic-blog\\pages\\yourposts.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\jesse\\Documents\\HarryCode\\learning\\iso-blog\\isomorphic-blog\\pages\\yourposts.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/yourposts")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ })

},[547]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHlvdXJwb3N0cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz85MTA5MmVmIiwid2VicGFjazovLy8uL3BhZ2VzL3lvdXJwb3N0cy5qcz85MTA5MmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jdXJyZW50ID09IFwiMVwiID8gXCJhY3RpdmUtbmF2XCIgOiBcImluYWN0aXZlLW5hdlwifT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QWxsIFBvc3RzPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmN1cnJlbnQgPT0gXCIyXCIgPyBcImFjdGl2ZS1uYXZcIiA6IFwiaW5hY3RpdmUtbmF2XCJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPldyaXRlIGEgUG9zdDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jdXJyZW50ID09IFwiM1wiID8gXCJhY3RpdmUtbmF2XCIgOiBcImluYWN0aXZlLW5hdlwifT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIveW91cnBvc3RzXCI+RWRpdCBZb3VyIFBvc3RzPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzXCJcclxuXHJcbi8vIEV4cG9ydCBhbiBhbm9ueW1vdXMgYXJyb3cgZnVuY3Rpb25cclxuLy8gd2hpY2ggcmV0dXJucyB0aGUgdGVtcGxhdGVcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9zdHlsZXMuY3NzXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZpZ2F0aW9uIGN1cnJlbnQ9XCIzXCIgLz5cclxuICAgIDxoMT5IYXJyeSdzIElzb21vcnBoaWMgQmxvZzwvaDE+XHJcbiAgICA8aDI+WW91ciBQb3N0czwvaDI+XHJcbiAgPC9kaXY+XHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy95b3VycG9zdHMuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQWZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        