(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SignupInvited"],{

/***/ "./public/app/features/users/SignupInvited.tsx":
/*!*****************************************************!*\
  !*** ./public/app/features/users/SignupInvited.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/actions */ "./public/app/core/actions/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/components/Page/Page */ "./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/core/core */ "./public/app/core/core.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/config */ "./public/app/core/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var navModel = {
  main: {
    icon: 'grafana',
    text: 'Invite',
    subTitle: 'Register your Grafana account',
    breadcrumbs: [{
      title: 'Login',
      url: 'login'
    }]
  },
  node: {
    text: ''
  }
};

var SingupInvitedPageUnconnected = function SingupInvitedPageUnconnected(_ref) {
  var code = _ref.code;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      initFormModel = _useState2[0],
      setInitFormModel = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      greeting = _useState4[0],
      setGreeting = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      invitedBy = _useState6[0],
      setInvitedBy = _useState6[1];

  Object(react_use__WEBPACK_IMPORTED_MODULE_6__["useAsync"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var invite;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["getBackendSrv"])().get('/api/user/invite/' + code);

          case 2:
            invite = _context.sent;
            setInitFormModel({
              email: invite.email,
              name: invite.name,
              username: invite.email
            });
            setGreeting(invite.name || invite.email || invite.username);
            setInvitedBy(invite.invitedBy);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(formData) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["getBackendSrv"])().post('/api/user/invite/complete', _objectSpread({}, formData, {
                inviteCode: code
              }));

            case 2:
              window.location.href = Object(app_core_config__WEBPACK_IMPORTED_MODULE_9__["getConfig"])().appSubUrl + '/';

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navModel: navModel
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"].Contents, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "page-sub-heading"
  }, "Hello ", greeting || 'there', "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-tagline p-b-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, invitedBy || 'Someone'), " has invited you to join Grafana and the organization", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight-word"
  }, app_core_core__WEBPACK_IMPORTED_MODULE_8__["contextSrv"].user.orgName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Please complete the following and choose a password to accept your invitation and continue:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    defaultValues: initFormModel,
    onSubmit: onSubmit
  }, function (_ref4) {
    var register = _ref4.register,
        errors = _ref4.errors;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      invalid: !!errors.email,
      error: errors.email && errors.email.message,
      label: "Email"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      placeholder: "email@example.com",
      name: "email",
      ref: register({
        required: 'Email is required',
        pattern: {
          value: /^\S+@\S+$/,
          message: 'Email is invalid'
        }
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      invalid: !!errors.name,
      error: errors.name && errors.name.message,
      label: "Name"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      placeholder: "Name (optional)",
      name: "name",
      ref: register
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      invalid: !!errors.username,
      error: errors.username && errors.username.message,
      label: "Username"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      placeholder: "Username",
      name: "username",
      ref: register({
        required: 'Username is required'
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      invalid: !!errors.password,
      error: errors.password && errors.password.message,
      label: "Password"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      type: "password",
      placeholder: "Password",
      name: "password",
      ref: register({
        required: 'Password is required'
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "submit"
    }, "Sign Up"));
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    code: state.location.routeParams.code
  };
};

var mapDispatchToProps = {
  updateLocation: app_core_actions__WEBPACK_IMPORTED_MODULE_3__["updateLocation"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(SingupInvitedPageUnconnected)));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=SignupInvited.aae40212254ed8359ce4.js.map