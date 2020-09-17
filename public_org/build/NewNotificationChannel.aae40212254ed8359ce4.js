(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NewNotificationChannel"],{

/***/ "./public/app/features/alerting/NewAlertNotificationPage.tsx":
/*!*******************************************************************!*\
  !*** ./public/app/features/alerting/NewAlertNotificationPage.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/components/Page/Page */ "./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_NewNotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NewNotificationChannelForm */ "./public/app/features/alerting/components/NewNotificationChannelForm.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/selectors/navModel */ "./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/actions */ "./public/app/features/alerting/state/actions.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var defaultValues = {
  name: '',
  type: {
    value: 'email',
    label: 'Email'
  },
  sendReminder: false,
  disableResolveMessage: false,
  frequency: '15m',
  settings: {
    uploadImage: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].rendererAvailable,
    autoResolve: true,
    httpMethod: 'POST',
    severity: 'critical'
  },
  isDefault: false
};

var NewAlertNotificationPage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NewAlertNotificationPage, _PureComponent);

  function NewAlertNotificationPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NewAlertNotificationPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewAlertNotificationPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onSubmit = function (data) {
      /*
        Some settings can be options in a select, in order to not save a SelectableValue<T>
        we need to use check if it is a SelectableValue and use its value.
      */
      var settings = Object.fromEntries(Object.entries(data.settings).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return [key, value.hasOwnProperty('value') ? value.value : value];
      }));

      _this.props.createNotificationChannel(_objectSpread({}, defaultValues, {}, data, {
        type: data.type.value,
        settings: _objectSpread({}, defaultValues.settings, {}, settings)
      }));
    };

    _this.onTestChannel = function (data) {
      var _data$frequency;

      _this.props.testNotificationChannel({
        name: data.name,
        type: data.type.value,
        frequency: (_data$frequency = data.frequency) !== null && _data$frequency !== void 0 ? _data$frequency : defaultValues.frequency,
        settings: _objectSpread({}, Object.assign(defaultValues.settings, data.settings))
      });
    };

    return _this;
  }

  _createClass(NewAlertNotificationPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loadNotificationTypes();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          navModel = _this$props.navModel,
          notificationChannels = _this$props.notificationChannels;
      /*
       Need to transform these as we have options on notificationChannels,
       this will render a dropdown within the select.
       TODO: Memoize?
      */

      var selectableChannels = notificationChannels.map(function (channel) {
        return {
          value: channel.value,
          label: channel.label,
          description: channel.description
        };
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        navModel: navModel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "New Notification Channel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.onSubmit,
        validateOn: "onChange",
        defaultValues: defaultValues
      }, function (_ref3) {
        var register = _ref3.register,
            errors = _ref3.errors,
            control = _ref3.control,
            getValues = _ref3.getValues,
            watch = _ref3.watch;
        var selectedChannel = notificationChannels.find(function (c) {
          return c.value === getValues().type.value;
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewNotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__["NewNotificationChannelForm"], {
          selectableChannels: selectableChannels,
          selectedChannel: selectedChannel,
          onTestChannel: _this2.onTestChannel,
          register: register,
          errors: errors,
          getValues: getValues,
          control: control,
          watch: watch,
          imageRendererAvailable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].rendererAvailable
        });
      })));
    }
  }]);

  return NewAlertNotificationPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navModel: Object(app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__["getNavModel"])(state.navIndex, 'channels'),
    notificationChannels: state.alertRules.notificationChannels
  };
};

var mapDispatchToProps = {
  createNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__["createNotificationChannel"],
  loadNotificationTypes: _state_actions__WEBPACK_IMPORTED_MODULE_7__["loadNotificationTypes"],
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__["testNotificationChannel"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NewAlertNotificationPage));

/***/ }),

/***/ "./public/app/features/alerting/components/NewNotificationChannelForm.tsx":
/*!********************************************************************************!*\
  !*** ./public/app/features/alerting/components/NewNotificationChannelForm.tsx ***!
  \********************************************************************************/
/*! exports provided: NewNotificationChannelForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNotificationChannelForm", function() { return NewNotificationChannelForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationChannelOptions */ "./public/app/features/alerting/components/NotificationChannelOptions.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var NewNotificationChannelForm = function NewNotificationChannelForm(_ref) {
  var control = _ref.control,
      errors = _ref.errors,
      selectedChannel = _ref.selectedChannel,
      selectableChannels = _ref.selectableChannels,
      register = _ref.register,
      watch = _ref.watch,
      getValues = _ref.getValues,
      imageRendererAvailable = _ref.imageRendererAvailable,
      onTestChannel = _ref.onTestChannel;
  var styles = getStyles(Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme"])());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    watch(['type', 'settings.priority', 'sendReminder', 'uploadImage']);
  }, []);
  var currentFormValues = getValues();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.basicSettings
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Name",
    invalid: !!errors.name,
    error: errors.name && errors.name.message
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "name",
    ref: register({
      required: 'Name is required'
    })
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Type"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InputControl"], {
    name: "type",
    as: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"],
    options: selectableChannels,
    control: control,
    rules: {
      required: true
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Default",
    description: "Use this notification for all alerts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    name: "isDefault",
    ref: register
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Include image",
    description: "Captures an image and include it in the notification"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    name: "settings.uploadImage",
    ref: register
  })), currentFormValues.uploadImage && !imageRendererAvailable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InfoBox"], {
    title: "No image renderer available/installed"
  }, "Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Disable Resolve Message",
    description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    name: "disableResolveMessage",
    ref: register
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Send reminders",
    description: "Send additional notifications for triggered alerts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    name: "sendReminder",
    ref: register
  })), currentFormValues.sendReminder && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Send reminder every",
    description: "Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m or 1h etc."
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "frequency",
    ref: register
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InfoBox"], null, "Alert reminders are sent after rules are evaluated. Therefore a reminder can never be sent more frequently than a configured alert rule evaluation interval."))), selectedChannel && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_3__["NotificationChannelOptions"], {
    selectedChannel: selectedChannel,
    currentFormValues: currentFormValues,
    register: register,
    errors: errors,
    control: control
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit"
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "button",
    variant: "secondary",
    onClick: function onClick() {
      return onTestChannel(getValues({
        nest: true
      }));
    }
  }, "Test"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "button",
    variant: "secondary"
  }, "Back")));
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["stylesFactory"])(function (theme) {
  return {
    basicSettings: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), theme.spacing.xl)
  };
});

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationChannelOptions.tsx":
/*!********************************************************************************!*\
  !*** ./public/app/features/alerting/components/NotificationChannelOptions.tsx ***!
  \********************************************************************************/
/*! exports provided: NotificationChannelOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationChannelOptions", function() { return NotificationChannelOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OptionElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionElement */ "./public/app/features/alerting/components/OptionElement.tsx");



var NotificationChannelOptions = function NotificationChannelOptions(_ref) {
  var control = _ref.control,
      currentFormValues = _ref.currentFormValues,
      errors = _ref.errors,
      selectedChannel = _ref.selectedChannel,
      register = _ref.register;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, selectedChannel.heading), selectedChannel.info !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["InfoBox"], null, selectedChannel.info), selectedChannel.options.map(function (option, index) {
    var _errors$settings$opti;

    var key = "".concat(option.label, "-").concat(index); // Some options can be dependent on other options, this determines what is selected in the dependency options
    // I think this needs more thought.

    var selectedOptionValue = currentFormValues["settings.".concat(option.showWhen.field)] && currentFormValues["settings.".concat(option.showWhen.field)].value;

    if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      key: key,
      label: option.label,
      description: option.description,
      invalid: errors.settings && !!errors.settings[option.propertyName],
      error: errors.settings && ((_errors$settings$opti = errors.settings[option.propertyName]) === null || _errors$settings$opti === void 0 ? void 0 : _errors$settings$opti.message)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptionElement__WEBPACK_IMPORTED_MODULE_2__["OptionElement"], {
      option: option,
      register: register,
      control: control
    }));
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/components/OptionElement.tsx":
/*!*******************************************************************!*\
  !*** ./public/app/features/alerting/components/OptionElement.tsx ***!
  \*******************************************************************/
/*! exports provided: OptionElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionElement", function() { return OptionElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");


var OptionElement = function OptionElement(_ref) {
  var control = _ref.control,
      option = _ref.option,
      register = _ref.register;
  var modelValue = "settings.".concat(option.propertyName);

  switch (option.element) {
    case 'input':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: option.inputType,
        name: "".concat(modelValue),
        ref: register({
          required: option.required ? 'Required' : false,
          validate: function validate(v) {
            return option.validationRule !== '' ? validateOption(v, option.validationRule) : true;
          }
        }),
        placeholder: option.placeholder
      });

    case 'select':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["InputControl"], {
        as: _grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"],
        options: option.selectOptions,
        control: control,
        name: "".concat(modelValue)
      });

    case 'textarea':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["TextArea"], {
        name: "".concat(modelValue),
        ref: register({
          required: option.required ? 'Required' : false,
          validate: function validate(v) {
            return option.validationRule !== '' ? validateOption(v, option.validationRule) : true;
          }
        })
      });

    case 'switch':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
        name: "".concat(modelValue),
        ref: register({
          required: option.required ? 'Required' : false
        })
      });

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

var validateOption = function validateOption(value, validationRule) {
  return RegExp(validationRule).test(value) ? true : 'Invalid format';
};

/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/*!*******************************************************!*\
  !*** ./public/app/features/alerting/state/actions.ts ***!
  \*******************************************************/
/*! exports provided: getAlertRulesAsync, togglePauseAlertRule, createNotificationChannel, testNotificationChannel, loadNotificationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertRulesAsync", function() { return getAlertRulesAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePauseAlertRule", function() { return togglePauseAlertRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotificationChannel", function() { return createNotificationChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testNotificationChannel", function() { return testNotificationChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadNotificationTypes", function() { return loadNotificationTypes; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/core */ "./public/app/core/core.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/actions */ "./public/app/core/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./public/app/features/alerting/state/reducers.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






function getAlertRulesAsync(options) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var rules;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["loadAlertRules"])());
                _context.next = 3;
                return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().get('/api/alerts', options);

              case 3:
                rules = _context.sent;
                dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["loadedAlertRules"])(rules));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}
function togglePauseAlertRule(id, options) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var stateFilter;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().post("/api/alerts/".concat(id, "/pause"), options);

              case 2:
                stateFilter = getState().location.query.state || 'all';
                dispatch(getAlertRulesAsync({
                  state: stateFilter.toString()
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}
function createNotificationChannel(data) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().post("/api/alert-notifications", data);

              case 3:
                app_core_core__WEBPACK_IMPORTED_MODULE_2__["appEvents"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_0__["AppEvents"].alertSuccess, ['Notification created']);
                dispatch(Object(app_core_actions__WEBPACK_IMPORTED_MODULE_3__["updateLocation"])({
                  path: 'alerting/notifications'
                }));
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                app_core_core__WEBPACK_IMPORTED_MODULE_2__["appEvents"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_0__["AppEvents"].alertError, [_context3.t0.data.error]);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}
function testNotificationChannel(data) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().post('/api/alert-notifications/test', data);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))
  );
}
function loadNotificationTypes() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch) {
        var alertNotifiers, notificationTypes;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getBackendSrv"])().get("/api/alert-notifiers");

              case 2:
                alertNotifiers = _context5.sent;
                notificationTypes = alertNotifiers.map(function (option) {
                  return _objectSpread({
                    value: option.type,
                    label: option.name
                  }, option, {
                    typeName: option.type
                  });
                }).sort(function (o1, o2) {
                  if (o1.name > o2.name) {
                    return 1;
                  }

                  return -1;
                });
                dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__["setNotificationChannels"])(notificationTypes));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

/***/ })

}]);
//# sourceMappingURL=NewNotificationChannel.aae40212254ed8359ce4.js.map