(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SendResetMailPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx":
/*!****************************************************************************!*\
  !*** ./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx ***!
  \****************************************************************************/
/*! exports provided: ForgottenPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgottenPassword", function() { return ForgottenPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-top: ", ";\n  display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var paragraphStyles = function paragraphStyles(theme) {
  return Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject(), theme.colors.formDescription, theme.typography.size.sm, theme.typography.weight.regular, theme.spacing.sm);
};

var ForgottenPassword = function ForgottenPassword() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      emailSent = _useState2[0],
      setEmailSent = _useState2[1];

  var styles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(paragraphStyles);

  var sendEmail =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(formModel) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"])().post('/api/user/password/send-reset-email', formModel);

            case 2:
              res = _context.sent;

              if (res) {
                setEmailSent(true);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendEmail(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (emailSent) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An email with a reset link has been sent to the email address. You should receive it shortly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      margin: "md"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["LinkButton"], {
      variant: "primary",
      href: "/login"
    }, "Back to login"));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: sendEmail
  }, function (_ref2) {
    var _errors$userOrEmail;

    var register = _ref2.register,
        errors = _ref2.errors;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Legend"], null, "Reset password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      label: "User",
      description: "Enter your information to get a reset link sent to you",
      invalid: !!errors.userOrEmail,
      error: errors === null || errors === void 0 ? void 0 : (_errors$userOrEmail = errors.userOrEmail) === null || _errors$userOrEmail === void 0 ? void 0 : _errors$userOrEmail.message
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Email or username",
      name: "userOrEmail",
      ref: register({
        required: true
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Send reset email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["LinkButton"], {
      variant: "link",
      href: "/login"
    }, "Back to login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: styles
    }, "Did you forget your username or email? Contact your Grafana administrator."));
  });
};

/***/ }),

/***/ "./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx":
/*!****************************************************************************!*\
  !*** ./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx ***!
  \****************************************************************************/
/*! exports provided: SendResetMailPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendResetMailPage", function() { return SendResetMailPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Login/LoginLayout */ "./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgottenPassword */ "./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx");



var SendResetMailPage = function SendResetMailPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__["LoginLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__["InnerBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__["ForgottenPassword"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (SendResetMailPage);

/***/ })

}]);
//# sourceMappingURL=SendResetMailPage.aae40212254ed8359ce4.js.map