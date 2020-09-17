(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["influxdbPlugin"],{

/***/ "./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx":
/*!****************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx ***!
  \****************************************************************************/
/*! exports provided: ConfigEditor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./public/app/plugins/datasource/influxdb/types.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Select = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Select,
    Input = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Input,
    SecretFormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].SecretFormField;

var httpModes = [{
  label: 'GET',
  value: 'GET'
}, {
  label: 'POST',
  value: 'POST'
}];
var versions = [{
  label: 'InfluxQL',
  value: _types__WEBPACK_IMPORTED_MODULE_3__["InfluxVersion"].InfluxQL,
  description: 'The InfluxDB SQL-like query language.  Supported in InfluxDB 1.x'
}, {
  label: 'Flux',
  value: _types__WEBPACK_IMPORTED_MODULE_3__["InfluxVersion"].Flux,
  description: 'Advanced data scripting and query language.  Supported in InfluxDB 2.x and 1.8+ (beta)'
}];
var ConfigEditor =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ConfigEditor, _PureComponent);

  function ConfigEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfigEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfigEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onResetPassword = function () {
      Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["updateDatasourcePluginResetOption"])(_this.props, 'password');
    };

    _this.onResetToken = function () {
      Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["updateDatasourcePluginResetOption"])(_this.props, 'token');
    };

    _this.onVersionChanged = function (selected) {
      var _this$props = _this.props,
          options = _this$props.options,
          onOptionsChange = _this$props.onOptionsChange;

      var copy = _objectSpread({}, options, {
        jsonData: _objectSpread({}, options.jsonData, {
          version: selected.value
        })
      });

      if (selected.value === _types__WEBPACK_IMPORTED_MODULE_3__["InfluxVersion"].Flux) {
        copy.access = 'proxy';
        copy.basicAuth = true;
        copy.jsonData.httpMode = 'POST'; // Remove old 1x configs

        delete copy.user;
        delete copy.database;
      }

      onOptionsChange(copy);
    };

    _this.onUpdateInflux2xURL = function (e) {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          onOptionsChange = _this$props2.onOptionsChange;
      onOptionsChange(_objectSpread({}, options, {
        url: e.currentTarget.value,
        access: 'proxy',
        basicAuth: true
      }));
    };

    return _this;
  }

  _createClass(ConfigEditor, [{
    key: "renderInflux2x",
    value: function renderInflux2x() {
      var options = this.props.options;
      var secureJsonFields = options.secureJsonFields;
      var secureJsonData = options.secureJsonData || {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-30 grafana-info-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Support for flux in Grafana is currently in beta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please report any issues to: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/grafana/grafana/issues/new/choose"
      }, "https://github.com/grafana/grafana/issues")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "page-heading"
      }, "Connection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10",
        tooltip: "This URL needs to be accessible from the grafana backend/server."
      }, "URL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.url || '',
        placeholder: "http://localhost:9999",
        onChange: this.onUpdateInflux2xURL
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10"
      }, "Organization"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.jsonData.organization || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceJsonDataOption"])(this.props, 'organization')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecretFormField, {
        isConfigured: secureJsonFields && secureJsonFields.token,
        value: secureJsonData.token || '',
        label: "Token",
        labelWidth: 10,
        inputWidth: 20,
        onReset: this.onResetToken,
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceSecureJsonDataOption"])(this.props, 'token')
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10"
      }, "Default Bucket"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        placeholder: "default bucket",
        value: options.jsonData.defaultBucket || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceJsonDataOption"])(this.props, 'defaultBucket')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10",
        tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute."
      }, "Min time interval"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-10",
        placeholder: "10s",
        value: options.jsonData.timeInterval || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceJsonDataOption"])(this.props, 'timeInterval')
      })))));
    }
  }, {
    key: "renderInflux1x",
    value: function renderInflux1x() {
      var _this$props3 = this.props,
          options = _this$props3.options,
          onOptionsChange = _this$props3.onOptionsChange;
      var secureJsonFields = options.secureJsonFields;
      var secureJsonData = options.secureJsonData || {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["DataSourceHttpSettings"], {
        showAccessOptions: true,
        dataSourceConfig: options,
        defaultUrl: "http://localhost:8086",
        onChange: onOptionsChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "page-heading"
      }, "InfluxDB Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10"
      }, "Database"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.database || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceOption"])(this.props, 'database')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10"
      }, "User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.user || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceOption"])(this.props, 'user')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecretFormField, {
        isConfigured: secureJsonFields && secureJsonFields.password,
        value: secureJsonData.password || '',
        label: "Password",
        labelWidth: 10,
        inputWidth: 20,
        onReset: this.onResetPassword,
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceSecureJsonDataOption"])(this.props, 'password')
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10",
        tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method will restrict you and return an error if the query is too large."
      }, "HTTP Method"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
        className: "width-10",
        value: httpModes.find(function (httpMode) {
          return httpMode.value === options.jsonData.httpMode;
        }),
        options: httpModes,
        defaultValue: options.jsonData.httpMode,
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceJsonDataOptionSelect"])(this.props, 'httpMode')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "grafana-info-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Database Access"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "SHOW MEASUREMENTS ON _internal"), " or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "To support data isolation and security, make sure appropriate permissions are configured in InfluxDB."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10",
        tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute."
      }, "Min time interval"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-10",
        placeholder: "10s",
        value: options.jsonData.timeInterval || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceJsonDataOption"])(this.props, 'timeInterval')
      }))))));
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.props.options;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "page-heading"
      }, "Query Language"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
        className: "width-30",
        value: options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_3__["InfluxVersion"].Flux ? versions[1] : versions[0],
        options: versions,
        defaultValue: versions[0],
        onChange: this.onVersionChanged
      })))), options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_3__["InfluxVersion"].Flux ? this.renderInflux2x() : this.renderInflux1x());
    }
  }]);

  return ConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
/* harmony default export */ __webpack_exports__["default"] = (ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx":
/*!*******************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx ***!
  \*******************************************************************************/
/*! exports provided: FluxQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluxQueryEditor", function() { return FluxQueryEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/core_module */ "./public/app/core/core_module.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n              margin-top: 6px;\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var samples = [{
  label: 'Show buckets',
  description: 'List the avaliable buckets (table)',
  value: 'buckets()'
}, {
  label: 'Simple query',
  description: 'filter by measurment and field',
  value: "from(bucket: \"db/rp\")\n  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)\n  |> filter(fn: (r) =>\n    r._measurement == \"example-measurement\" and\n    r._field == \"example-field\"\n  )"
}, {
  label: 'Grouped Query',
  description: 'Group by (min/max/sum/median)',
  value: "// v.windowPeriod is a variable referring to the current optimized window period (currently: $interval)\nfrom(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_measurement\"] == \"measurement1\" or r[\"_measurement\"] =~ /^.*?regex.*$/)\n  |> filter(fn: (r) => r[\"_field\"] == \"field2\" or r[\"_field\"] =~ /^.*?regex.*$/)\n  |> aggregateWindow(every: v.windowPeriod, fn: mean|median|max|count|derivative|sum)\n  |> yield(name: \"some-name\")"
}, {
  label: 'Filter by value',
  description: 'Results between a min/max',
  value: "// v.bucket, v.timeRangeStart, and v.timeRange stop are all variables supported by the flux plugin and influxdb\nfrom(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_value\"] >= 10 and r[\"_value\"] <= 20)"
}, {
  label: 'Schema Exploration: (measurements)',
  description: 'Get a list of measurement using flux',
  value: "import \"influxdata/influxdb/v1\"\nv1.measurements(bucket: v.bucket)"
}, {
  label: 'Schema Exploration: (fields)',
  description: 'Return every possible key in a single table',
  value: "from(bucket: v.bucket)\n  |> range(start: v.timeRangeStart, stop:timeRangeStop)\n  |> keys()\n  |> keep(columns: [\"_value\"])\n  |> group()\n  |> distinct()"
}, {
  label: 'Schema Exploration: (tag keys)',
  description: 'Get a list of tag keys using flux',
  value: "import \"influxdata/influxdb/v1\"\nv1.tagKeys(bucket: v.bucket)"
}, {
  label: 'Schema Exploration: (tag values)',
  description: 'Get a list of tag values using flux',
  value: "import \"influxdata/influxdb/v1\"\nv1.tagValues(\n    bucket: v.bucket,\n    tag: \"host\",\n    predicate: (r) => true,\n    start: -1d\n)"
}];
var FluxQueryEditor =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FluxQueryEditor, _PureComponent);

  function FluxQueryEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FluxQueryEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FluxQueryEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onFluxQueryChange = function (query) {
      var _this$props = _this.props,
          target = _this$props.target,
          change = _this$props.change;
      change(_objectSpread({}, target, {
        query: query
      }));

      _this.props.refresh();
    };

    _this.onSampleChange = function (val) {
      _this.props.change(_objectSpread({}, _this.props.target, {
        query: val.value
      })); // Angular HACK: Since the target does not actually change!


      _this.forceUpdate();

      _this.props.refresh();
    };

    _this.getSuggestions = function () {
      var sugs = [{
        label: 'v.timeRangeStart',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
        detail: 'The start time'
      }, {
        label: 'v.timeRangeStop',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
        detail: 'The stop time'
      }, {
        label: 'v.windowPeriod',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
        detail: 'based on max data points'
      }, {
        label: 'v.defaultBucket',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
        detail: 'bucket configured in the datsource'
      }, {
        label: 'v.organization',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Property,
        detail: 'org configured for the datsource'
      }];
      var templateSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["getTemplateSrv"])();
      templateSrv.getVariables().forEach(function (variable) {
        var label = '${' + variable.name + '}';
        var val = templateSrv.replace(label);

        if (val === label) {
          val = '';
        }

        sugs.push({
          label: label,
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditorSuggestionItemKind"].Text,
          detail: "(Template Variable) ".concat(val)
        });
      });
      return sugs;
    };

    _this.editorDidMountCallbackHack = function (editor) {
      setTimeout(function () {
        return editor.layout();
      }, 100);
    };

    return _this;
  }

  _createClass(FluxQueryEditor, [{
    key: "render",
    value: function render() {
      var target = this.props.target;
      var helpTooltip = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Type: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "ctrl+space"), " to show template variable suggestions ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Many queries can be copied from chronograph");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["CodeEditor"], {
        height: '200px',
        language: "sql",
        value: target.query || '',
        onBlur: this.onFluxQueryChange,
        onSave: this.onFluxQueryChange,
        showMiniMap: false,
        showLineNumbers: true,
        getSuggestions: this.getSuggestions,
        onEditorDidMount: this.editorDidMountCallbackHack
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])('gf-form-inline', Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject()))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["LinkButton"], {
        icon: "external-link-alt",
        variant: "secondary",
        target: "blank",
        href: "https://docs.influxdata.com/flux/latest/introduction/getting-started/"
      }, "Flux language syntax"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        options: samples,
        value: "Sample Query",
        onChange: this.onSampleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-label gf-form-label--grow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["InlineFormLabel"], {
        width: 5,
        tooltip: helpTooltip
      }, "Help")));
    }
  }]);

  return FluxQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["default"].directive('fluxQueryEditor', ['reactDirective', function (reactDirective) {
  return reactDirective(FluxQueryEditor, ['target', 'change', 'refresh']);
}]);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx":
/*!********************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CHEAT_SHEET_ITEMS = [{
  title: 'Getting started',
  label: 'Start by selecting a measurement and field from the dropdown above. You can then use the tag selector to further narrow your search.'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "InfluxDB Cheat Sheet"), CHEAT_SHEET_ITEMS.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item",
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item__title"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item__label"
    }, item.label));
  }));
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx":
/*!*******************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxStartPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfluxCheatSheet */ "./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var InfluxStartPage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InfluxStartPage, _PureComponent);

  function InfluxStartPage() {
    _classCallCheck(this, InfluxStartPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfluxStartPage).apply(this, arguments));
  }

  _createClass(InfluxStartPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClickExample: this.props.onClickExample
      });
    }
  }]);

  return InfluxStartPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/datasource.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/datasource.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxDatasource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var _influx_series__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./influx_series */ "./public/app/plugins/datasource/influxdb/influx_series.ts");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./influx_query_model */ "./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response_parser */ "./public/app/plugins/datasource/influxdb/response_parser.ts");
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query_builder */ "./public/app/plugins/datasource/influxdb/query_builder.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var InfluxDatasource =
/*#__PURE__*/
function (_DataSourceWithBacken) {
  _inherits(InfluxDatasource, _DataSourceWithBacken);

  function InfluxDatasource(instanceSettings) {
    var _instanceSettings$use, _instanceSettings$pas;

    var _this;

    _classCallCheck(this, InfluxDatasource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfluxDatasource).call(this, instanceSettings));
    _this.type = 'influxdb';
    _this.urls = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(instanceSettings.url.split(','), function (url) {
      return url.trim();
    });
    _this.username = (_instanceSettings$use = instanceSettings.username) !== null && _instanceSettings$use !== void 0 ? _instanceSettings$use : '';
    _this.password = (_instanceSettings$pas = instanceSettings.password) !== null && _instanceSettings$pas !== void 0 ? _instanceSettings$pas : '';
    _this.name = instanceSettings.name;
    _this.database = instanceSettings.database;
    _this.basicAuth = instanceSettings.basicAuth;
    _this.withCredentials = instanceSettings.withCredentials;
    var settingsData = instanceSettings.jsonData || {};
    _this.interval = settingsData.timeInterval;
    _this.httpMode = settingsData.httpMode || 'GET';
    _this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.is2x = settingsData.version === _types__WEBPACK_IMPORTED_MODULE_6__["InfluxVersion"].Flux;
    return _this;
  }

  _createClass(InfluxDatasource, [{
    key: "query",
    value: function query(request) {
      if (this.is2x) {
        return _get(_getPrototypeOf(InfluxDatasource.prototype), "query", this).call(this, request);
      } // Fallback to classic query support


      return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(this.classicQuery(request));
    }
  }, {
    key: "getQueryDisplayText",
    value: function getQueryDisplayText(query) {
      if (this.is2x) {
        return query.query;
      }

      return new _influx_query_model__WEBPACK_IMPORTED_MODULE_3__["default"](query).render(false);
    }
    /**
     * Only applied on flux queries
     */

  }, {
    key: "applyTemplateVariables",
    value: function applyTemplateVariables(query, scopedVars) {
      return _objectSpread({}, query, {
        query: Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])().replace(query.query, scopedVars) // The raw query text

      });
    }
    /**
     * The unchanged pre 7.1 query implementation
     */

  }, {
    key: "classicQuery",
    value: function () {
      var _classicQuery = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(options) {
        var timeFilter, scopedVars, targets, queryTargets, queryModel, i, y, templateSrv, allQueries, adhocFilters;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                timeFilter = this.getTimeFilter(options);
                scopedVars = options.scopedVars;
                targets = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(options.targets);
                queryTargets = [];
                templateSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])();
                allQueries = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(targets, function (target) {
                  if (target.hide) {
                    return '';
                  }

                  queryTargets.push(target); // backward compatibility

                  scopedVars.interval = scopedVars.__interval;
                  queryModel = new _influx_query_model__WEBPACK_IMPORTED_MODULE_3__["default"](target, templateSrv, scopedVars);
                  return queryModel.render(true);
                }).reduce(function (acc, current) {
                  if (current !== '') {
                    acc += ';' + current;
                  }

                  return acc;
                });

                if (!(allQueries === '')) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", Promise.resolve({
                  data: []
                }));

              case 8:
                // add global adhoc filters to timeFilter
                adhocFilters = templateSrv.getAdhocFilters(this.name);

                if (adhocFilters.length > 0) {
                  timeFilter += ' AND ' + queryModel.renderAdhocFilters(adhocFilters);
                } // replace grafana variables


                scopedVars.timeFilter = {
                  value: timeFilter
                }; // replace templated variables

                allQueries = templateSrv.replace(allQueries, scopedVars);
                return _context.abrupt("return", this._seriesQuery(allQueries, options).then(function (data) {
                  if (!data || !data.results) {
                    return [];
                  }

                  var seriesList = [];

                  for (i = 0; i < data.results.length; i++) {
                    var result = data.results[i];

                    if (!result || !result.series) {
                      continue;
                    }

                    var target = queryTargets[i];
                    var alias = target.alias;

                    if (alias) {
                      alias = templateSrv.replace(target.alias, options.scopedVars);
                    }

                    var meta = {
                      executedQueryString: data.executedQueryString
                    };
                    var influxSeries = new _influx_series__WEBPACK_IMPORTED_MODULE_2__["default"]({
                      refId: target.refId,
                      series: data.results[i].series,
                      alias: alias,
                      meta: meta
                    });

                    switch (target.resultFormat) {
                      case 'logs':
                        meta.preferredVisualisationType = 'logs';

                      case 'table':
                        {
                          seriesList.push(influxSeries.getTable());
                          break;
                        }

                      default:
                        {
                          var timeSeries = influxSeries.getTimeSeries();

                          for (y = 0; y < timeSeries.length; y++) {
                            seriesList.push(timeSeries[y]);
                          }

                          break;
                        }
                    }
                  }

                  return {
                    data: seriesList
                  };
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function classicQuery(_x) {
        return _classicQuery.apply(this, arguments);
      }

      return classicQuery;
    }()
  }, {
    key: "annotationQuery",
    value: function annotationQuery(options) {
      if (!options.annotation.query) {
        return Promise.reject({
          message: 'Query missing in annotation definition'
        });
      }

      var timeFilter = this.getTimeFilter({
        rangeRaw: options.rangeRaw,
        timezone: options.timezone
      });
      var query = options.annotation.query.replace('$timeFilter', timeFilter);
      query = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])().replace(query, null, 'regex');
      return this._seriesQuery(query, options).then(function (data) {
        if (!data || !data.results || !data.results[0]) {
          throw {
            message: 'No results in response from InfluxDB'
          };
        }

        return new _influx_series__WEBPACK_IMPORTED_MODULE_2__["default"]({
          series: data.results[0].series,
          annotation: options.annotation
        }).getAnnotations();
      });
    }
  }, {
    key: "targetContainsTemplate",
    value: function targetContainsTemplate(target) {
      var templateSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])(); // :(

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = target.groupBy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = group.params[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var param = _step2.value;

              if (templateSrv.variableExists(param)) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var i in target.tags) {
        if (templateSrv.variableExists(target.tags[i].value)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "interpolateVariablesInQueries",
    value: function interpolateVariablesInQueries(queries, scopedVars) {
      var _this2 = this;

      if (!queries || queries.length === 0) {
        return [];
      }

      var expandedQueries = queries;

      if (queries && queries.length > 0) {
        var templateSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])();
        expandedQueries = queries.map(function (query) {
          var _query$measurement, _query$policy;

          var expandedQuery = _objectSpread({}, query, {
            datasource: _this2.name,
            measurement: templateSrv.replace((_query$measurement = query.measurement) !== null && _query$measurement !== void 0 ? _query$measurement : '', scopedVars, 'regex'),
            policy: templateSrv.replace((_query$policy = query.policy) !== null && _query$policy !== void 0 ? _query$policy : '', scopedVars, 'regex')
          });

          if (query.rawQuery) {
            var _query$query;

            expandedQuery.query = templateSrv.replace((_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '', scopedVars, 'regex');
          }

          if (query.tags) {
            var expandedTags = query.tags.map(function (tag) {
              var expandedTag = _objectSpread({}, tag, {
                value: templateSrv.replace(tag.value, null, 'regex')
              });

              return expandedTag;
            });
            expandedQuery.tags = expandedTags;
          }

          return expandedQuery;
        });
      }

      return expandedQueries;
    }
  }, {
    key: "metricFindQuery",
    value: function metricFindQuery(query, options) {
      var _this3 = this;

      var interpolated = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])().replace(query, null, 'regex');
      return this._seriesQuery(interpolated, options).then(function (resp) {
        return _this3.responseParser.parse(query, resp);
      });
    }
  }, {
    key: "getTagKeys",
    value: function getTagKeys() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
        measurement: options.measurement || '',
        tags: []
      }, this.database);
      var query = queryBuilder.buildExploreQuery('TAG_KEYS');
      return this.metricFindQuery(query, options);
    }
  }, {
    key: "getTagValues",
    value: function getTagValues() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
        measurement: options.measurement || '',
        tags: []
      }, this.database);
      var query = queryBuilder.buildExploreQuery('TAG_VALUES', options.key);
      return this.metricFindQuery(query, options);
    }
  }, {
    key: "_seriesQuery",
    value: function _seriesQuery(query, options) {
      if (!query) {
        return Promise.resolve({
          results: []
        });
      }

      if (options && options.range) {
        var timeFilter = this.getTimeFilter({
          rangeRaw: options.range,
          timezone: options.timezone
        });
        query = query.replace('$timeFilter', timeFilter);
      }

      return this._influxRequest(this.httpMode, '/query', {
        q: query,
        epoch: 'ms'
      }, options);
    }
  }, {
    key: "serializeParams",
    value: function serializeParams(params) {
      if (!params) {
        return '';
      }

      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(params, function (memo, value, key) {
        if (value === null || value === undefined) {
          return memo;
        }

        memo.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        return memo;
      }, []).join('&');
    }
  }, {
    key: "testDatasource",
    value: function testDatasource() {
      if (this.is2x) {
        // TODO: eventually use the real /health endpoint
        var request = {
          targets: [{
            refId: 'test',
            query: 'buckets()'
          }],
          requestId: "".concat(this.id, "-health-").concat(Date.now()),
          dashboardId: 0,
          panelId: 0,
          interval: '1m',
          intervalMs: 60000,
          maxDataPoints: 423,
          range: {
            from: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["dateTime"])(1000),
            to: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["dateTime"])(2000)
          }
        };
        return _get(_getPrototypeOf(InfluxDatasource.prototype), "query", this).call(this, request).toPromise().then(function (res) {
          if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Done) {
            console.log('InfluxDB Error', res);
            return {
              status: 'error',
              message: 'Error reading InfluxDB'
            };
          }

          var first = res.data[0];

          if (first && first.length) {
            return {
              status: 'success',
              message: "".concat(first.length, " buckets found")
            };
          }

          console.log('InfluxDB Error', res);
          return {
            status: 'error',
            message: 'Error reading buckets'
          };
        }).catch(function (err) {
          console.log('InfluxDB Error', err);
          return {
            status: 'error',
            message: err.message
          };
        });
      }

      var queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
        measurement: '',
        tags: []
      }, this.database);
      var query = queryBuilder.buildExploreQuery('RETENTION POLICIES');
      return this._seriesQuery(query).then(function (res) {
        var error = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(res, 'results[0].error');

        if (error) {
          return {
            status: 'error',
            message: error
          };
        }

        return {
          status: 'success',
          message: 'Data source is working'
        };
      }).catch(function (err) {
        return {
          status: 'error',
          message: err.message
        };
      });
    }
  }, {
    key: "_influxRequest",
    value: function _influxRequest(method, url, data, options) {
      var currentUrl = this.urls.shift();
      this.urls.push(currentUrl);
      var params = {};

      if (this.username) {
        params.u = this.username;
        params.p = this.password;
      }

      if (options && options.database) {
        params.db = options.database;
      } else if (this.database) {
        params.db = this.database;
      }

      var _data = data,
          q = _data.q;

      if (method === 'POST' && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(data, 'q')) {
        // verb is POST and 'q' param is defined
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(params, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.omit(data, ['q']));

        data = this.serializeParams(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(data, ['q']));
      } else if (method === 'GET' || method === 'POST') {
        // verb is GET, or POST without 'q' param
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(params, data);

        data = null;
      }

      var req = {
        method: method,
        url: currentUrl + url,
        params: params,
        data: data,
        precision: 'ms',
        inspect: {
          type: 'influxdb'
        },
        paramSerializer: this.serializeParams
      };
      req.headers = req.headers || {};

      if (this.basicAuth || this.withCredentials) {
        req.withCredentials = true;
      }

      if (this.basicAuth) {
        req.headers.Authorization = this.basicAuth;
      }

      if (method === 'POST') {
        req.headers['Content-type'] = 'application/x-www-form-urlencoded';
      }

      return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getBackendSrv"])().datasourceRequest(req).then(function (result) {
        var data = result.data;

        if (data) {
          data.executedQueryString = q;

          if (data.results) {
            var errors = result.data.results.filter(function (elem) {
              return elem.error;
            });

            if (errors.length > 0) {
              throw {
                message: 'InfluxDB Error: ' + errors[0].error,
                data: data
              };
            }
          }
        }

        return data;
      }, function (err) {
        if (Number.isInteger(err.status) && err.status !== 0 || err.status >= 300) {
          if (err.data && err.data.error) {
            throw {
              message: 'InfluxDB Error: ' + err.data.error,
              data: err.data,
              config: err.config
            };
          } else {
            throw {
              message: 'Network Error: ' + err.statusText + '(' + err.status + ')',
              data: err.data,
              config: err.config
            };
          }
        } else {
          throw err;
        }
      });
    }
  }, {
    key: "getTimeFilter",
    value: function getTimeFilter(options) {
      var from = this.getInfluxTime(options.rangeRaw.from, false, options.timezone);
      var until = this.getInfluxTime(options.rangeRaw.to, true, options.timezone);
      var fromIsAbsolute = from[from.length - 1] === 'ms';

      if (until === 'now()' && !fromIsAbsolute) {
        return 'time >= ' + from;
      }

      return 'time >= ' + from + ' and time <= ' + until;
    }
  }, {
    key: "getInfluxTime",
    value: function getInfluxTime(date, roundUp, timezone) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(date)) {
        if (date === 'now') {
          return 'now()';
        }

        var parts = /^now-(\d+)([dhms])$/.exec(date);

        if (parts) {
          var amount = parseInt(parts[1], 10);
          var unit = parts[2];
          return 'now() - ' + amount + unit;
        }

        date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__["dateMath"].parse(date, roundUp, timezone);
      }

      return date.valueOf() + 'ms';
    }
  }]);

  return InfluxDatasource;
}(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["DataSourceWithBackend"]);



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_query_model.ts":
/*!**********************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/influx_query_model.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxQueryModel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_part */ "./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/utils/kbn */ "./public/app/core/utils/kbn.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var InfluxQueryModel =
/*#__PURE__*/
function () {
  InfluxQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

  /** @ngInject */
  function InfluxQueryModel(target, templateSrv, scopedVars) {
    _classCallCheck(this, InfluxQueryModel);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.policy = target.policy || 'default';
    target.resultFormat = target.resultFormat || 'time_series';
    target.orderByTime = target.orderByTime || 'ASC';
    target.tags = target.tags || [];
    target.groupBy = target.groupBy || [{
      type: 'time',
      params: ['$__interval']
    }, {
      type: 'fill',
      params: ['null']
    }];
    target.select = target.select || [[{
      type: 'field',
      params: ['value']
    }, {
      type: 'mean',
      params: []
    }]];
    this.updateProjection();
  }

  _createClass(InfluxQueryModel, [{
    key: "updateProjection",
    value: function updateProjection() {
      this.selectModels = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.target.select, function (parts) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(parts, _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create);
      });
      this.groupByParts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.target.groupBy, _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create);
    }
  }, {
    key: "updatePersistedParts",
    value: function updatePersistedParts() {
      this.target.select = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.selectModels, function (selectParts) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(selectParts, function (part) {
          return {
            type: part.def.type,
            params: part.params
          };
        });
      });
    }
  }, {
    key: "hasGroupByTime",
    value: function hasGroupByTime() {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.target.groupBy, function (g) {
        return g.type === 'time';
      });
    }
  }, {
    key: "hasFill",
    value: function hasFill() {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.target.groupBy, function (g) {
        return g.type === 'fill';
      });
    }
  }, {
    key: "addGroupBy",
    value: function addGroupBy(value) {
      var stringParts = value.match(/^(\w+)\((.*)\)$/);

      if (!stringParts || !this.target.groupBy) {
        return;
      }

      var typePart = stringParts[1];
      var arg = stringParts[2];
      var partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create({
        type: typePart,
        params: [arg]
      });
      var partCount = this.target.groupBy.length;

      if (partCount === 0) {
        this.target.groupBy.push(partModel.part);
      } else if (typePart === 'time') {
        this.target.groupBy.splice(0, 0, partModel.part);
      } else if (typePart === 'tag') {
        if (this.target.groupBy[partCount - 1].type === 'fill') {
          this.target.groupBy.splice(partCount - 1, 0, partModel.part);
        } else {
          this.target.groupBy.push(partModel.part);
        }
      } else {
        this.target.groupBy.push(partModel.part);
      }

      this.updateProjection();
    }
  }, {
    key: "removeGroupByPart",
    value: function removeGroupByPart(part, index) {
      var categories = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].getCategories();

      if (part.def.type === 'time') {
        // remove fill
        this.target.groupBy = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(this.target.groupBy, function (g) {
          return g.type !== 'fill';
        }); // remove aggregations

        this.target.select = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.target.select, function (s) {
          return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(s, function (part) {
            var partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create(part);

            if (partModel.def.category === categories.Aggregations) {
              return false;
            }

            if (partModel.def.category === categories.Selectors) {
              return false;
            }

            return true;
          });
        });
      }

      this.target.groupBy.splice(index, 1);
      this.updateProjection();
    }
  }, {
    key: "removeSelect",
    value: function removeSelect(index) {
      this.target.select.splice(index, 1);
      this.updateProjection();
    }
  }, {
    key: "removeSelectPart",
    value: function removeSelectPart(selectParts, part) {
      // if we remove the field remove the whole statement
      if (part.def.type === 'field') {
        if (this.selectModels.length > 1) {
          var modelsIndex = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(this.selectModels, selectParts);

          this.selectModels.splice(modelsIndex, 1);
        }
      } else {
        var partIndex = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(selectParts, part);

        selectParts.splice(partIndex, 1);
      }

      this.updatePersistedParts();
    }
  }, {
    key: "addSelectPart",
    value: function addSelectPart(selectParts, type) {
      var partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create({
        type: type
      });
      partModel.def.addStrategy(selectParts, partModel, this);
      this.updatePersistedParts();
    }
  }, {
    key: "renderTagCondition",
    value: function renderTagCondition(tag, index, interpolate) {
      var str = '';
      var operator = tag.operator;
      var value = tag.value;

      if (index > 0) {
        str = (tag.condition || 'AND') + ' ';
      }

      if (!operator) {
        if (/^\/.*\/$/.test(value)) {
          operator = '=~';
        } else {
          operator = '=';
        }
      } // quote value unless regex


      if (operator !== '=~' && operator !== '!~') {
        if (interpolate) {
          value = this.templateSrv.replace(value, this.scopedVars);
        }

        if (operator !== '>' && operator !== '<') {
          value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
        }
      } else if (interpolate) {
        value = this.templateSrv.replace(value, this.scopedVars, 'regex');
      }

      return str + '"' + tag.key + '" ' + operator + ' ' + value;
    }
  }, {
    key: "getMeasurementAndPolicy",
    value: function getMeasurementAndPolicy(interpolate) {
      var policy = this.target.policy;
      var measurement = this.target.measurement || 'measurement';

      if (!measurement.match('^/.*/$')) {
        measurement = '"' + measurement + '"';
      } else if (interpolate) {
        measurement = this.templateSrv.replace(measurement, this.scopedVars, 'regex');
      }

      if (policy !== 'default') {
        policy = '"' + this.target.policy + '".';
      } else {
        policy = '';
      }

      return policy + measurement;
    }
  }, {
    key: "interpolateQueryStr",
    value: function interpolateQueryStr(value, variable, defaultFormatFn) {
      // if no multi or include all do not regexEscape
      if (!variable.multi && !variable.includeAll) {
        return value;
      }

      if (typeof value === 'string') {
        return app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__["default"].regexEscape(value);
      }

      var escapedValues = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(value, app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__["default"].regexEscape);

      return '(' + escapedValues.join('|') + ')';
    }
  }, {
    key: "render",
    value: function render(interpolate) {
      var _this = this;

      var target = this.target;

      if (target.rawQuery) {
        if (interpolate) {
          return this.templateSrv.replace(target.query, this.scopedVars, this.interpolateQueryStr);
        } else {
          return target.query;
        }
      }

      var query = 'SELECT ';
      var i, y;

      for (i = 0; i < this.selectModels.length; i++) {
        var parts = this.selectModels[i];
        var selectText = '';

        for (y = 0; y < parts.length; y++) {
          var part = parts[y];
          selectText = part.render(selectText);
        }

        if (i > 0) {
          query += ', ';
        }

        query += selectText;
      }

      query += ' FROM ' + this.getMeasurementAndPolicy(interpolate) + ' WHERE ';

      var conditions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(target.tags, function (tag, index) {
        return _this.renderTagCondition(tag, index, interpolate);
      });

      if (conditions.length > 0) {
        query += '(' + conditions.join(' ') + ') AND ';
      }

      query += '$timeFilter';
      var groupBySection = '';

      for (i = 0; i < this.groupByParts.length; i++) {
        var _part = this.groupByParts[i];

        if (i > 0) {
          // for some reason fill has no separator
          groupBySection += _part.def.type === 'fill' ? ' ' : ', ';
        }

        groupBySection += _part.render('');
      }

      if (groupBySection.length) {
        query += ' GROUP BY ' + groupBySection;
      }

      if (target.fill) {
        query += ' fill(' + target.fill + ')';
      }

      if (target.orderByTime === 'DESC') {
        query += ' ORDER BY time DESC';
      }

      if (target.limit) {
        query += ' LIMIT ' + target.limit;
      }

      if (target.slimit) {
        query += ' SLIMIT ' + target.slimit;
      }

      if (target.tz) {
        query += " tz('" + target.tz + "')";
      }

      return query;
    }
  }, {
    key: "renderAdhocFilters",
    value: function renderAdhocFilters(filters) {
      var _this2 = this;

      var conditions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filters, function (tag, index) {
        return _this2.renderTagCondition(tag, index, true);
      });

      return conditions.join(' ');
    }
  }]);

  return InfluxQueryModel;
}();



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_series.ts":
/*!*****************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/influx_series.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxSeries; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/table_model */ "./public/app/core/table_model.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var InfluxSeries =
/*#__PURE__*/
function () {
  function InfluxSeries(options) {
    _classCallCheck(this, InfluxSeries);

    this.series = options.series;
    this.alias = options.alias;
    this.annotation = options.annotation;
    this.meta = options.meta;
    this.refId = options.refId;
  }

  _createClass(InfluxSeries, [{
    key: "getTimeSeries",
    value: function getTimeSeries() {
      var _this = this;

      var output = [];
      var i, j;

      if (this.series.length === 0) {
        return output;
      }

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.series, function (series) {
        var columns = series.columns.length;

        var tags = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(series.tags, function (value, key) {
          return key + ': ' + value;
        });

        for (j = 1; j < columns; j++) {
          var seriesName = series.name;
          var columnName = series.columns[j];

          if (columnName !== 'value') {
            seriesName = seriesName + '.' + columnName;
          }

          if (_this.alias) {
            seriesName = _this._getSeriesName(series, j);
          } else if (series.tags) {
            seriesName = seriesName + ' {' + tags.join(', ') + '}';
          }

          var datapoints = [];

          if (series.values) {
            for (i = 0; i < series.values.length; i++) {
              datapoints[i] = [series.values[i][j], series.values[i][0]];
            }
          }

          output.push({
            target: seriesName,
            datapoints: datapoints,
            meta: _this.meta,
            refId: _this.refId
          });
        }
      });

      return output;
    }
  }, {
    key: "_getSeriesName",
    value: function _getSeriesName(series, index) {
      var regex = /\$(\w+)|\[\[([\s\S]+?)\]\]/g;
      var segments = series.name.split('.');
      return this.alias.replace(regex, function (match, g1, g2) {
        var group = g1 || g2;
        var segIndex = parseInt(group, 10);

        if (group === 'm' || group === 'measurement') {
          return series.name;
        }

        if (group === 'col') {
          return series.columns[index];
        }

        if (!isNaN(segIndex)) {
          return segments[segIndex];
        }

        if (group.indexOf('tag_') !== 0) {
          return match;
        }

        var tag = group.replace('tag_', '');

        if (!series.tags) {
          return match;
        }

        return series.tags[tag];
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations() {
      var _this2 = this;

      var list = [];

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.series, function (series) {
        var titleCol = null;
        var timeCol = null;
        var tagsCol = [];
        var textCol = null;

        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(series.columns, function (column, index) {
          if (column === 'time') {
            timeCol = index;
            return;
          }

          if (column === 'sequence_number') {
            return;
          }

          if (column === _this2.annotation.titleColumn) {
            titleCol = index;
            return;
          }

          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes((_this2.annotation.tagsColumn || '').replace(' ', '').split(','), column)) {
            tagsCol.push(index);
            return;
          }

          if (column === _this2.annotation.textColumn) {
            textCol = index;
            return;
          } // legacy case


          if (!titleCol && textCol !== index) {
            titleCol = index;
          }
        });

        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(series.values, function (value) {
          var data = {
            annotation: _this2.annotation,
            time: +new Date(value[timeCol]),
            title: value[titleCol],
            // Remove empty values, then split in different tags for comma separated values
            tags: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(tagsCol.filter(function (t) {
              return value[t];
            }).map(function (t) {
              return value[t].split(',');
            })),
            text: value[textCol]
          };
          list.push(data);
        });
      });

      return list;
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var i, j;
      table.refId = this.refId;
      table.meta = this.meta;

      if (this.series.length === 0) {
        return table;
      }

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.series, function (series, seriesIndex) {
        if (seriesIndex === 0) {
          j = 0; // Check that the first column is indeed 'time'

          if (series.columns[0] === 'time') {
            // Push this now before the tags and with the right type
            table.columns.push({
              text: 'Time',
              type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].time
            });
            j++;
          }

          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(series.tags), function (key) {
            table.columns.push({
              text: key
            });
          });

          for (; j < series.columns.length; j++) {
            table.columns.push({
              text: series.columns[j]
            });
          }
        }

        if (series.values) {
          for (i = 0; i < series.values.length; i++) {
            var values = series.values[i];
            var reordered = [values[0]];

            if (series.tags) {
              for (var key in series.tags) {
                if (series.tags.hasOwnProperty(key)) {
                  reordered.push(series.tags[key]);
                }
              }
            }

            for (j = 1; j < values.length; j++) {
              reordered.push(values[j]);
            }

            table.rows.push(reordered);
          }
        }
      });

      return table;
    }
  }]);

  return InfluxSeries;
}();



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/module.ts":
/*!**********************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/module.ts ***!
  \**********************************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasource */ "./public/app/plugins/datasource/influxdb/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_ctrl */ "./public/app/plugins/datasource/influxdb/query_ctrl.ts");
/* harmony import */ var _components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/InfluxStartPage */ "./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ConfigEditor */ "./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx");
/* harmony import */ var _components_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FluxQueryEditor */ "./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





 // This adds a directive that is used in the query editor



var InfluxAnnotationsQueryCtrl = function InfluxAnnotationsQueryCtrl() {
  _classCallCheck(this, InfluxAnnotationsQueryCtrl);
};

InfluxAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_3__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_0__["default"]).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_4__["default"]).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_1__["InfluxQueryCtrl"]).setAnnotationQueryCtrl(InfluxAnnotationsQueryCtrl).setExploreStartPage(_components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_builder.ts":
/*!*****************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/query_builder.ts ***!
  \*****************************************************************/
/*! exports provided: InfluxQueryBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxQueryBuilder", function() { return InfluxQueryBuilder; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/utils/kbn */ "./public/app/core/utils/kbn.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function renderTagCondition(tag, index) {
  var str = '';
  var operator = tag.operator;
  var value = tag.value;

  if (index > 0) {
    str = (tag.condition || 'AND') + ' ';
  }

  if (!operator) {
    if (/^\/.*\/$/.test(tag.value)) {
      operator = '=~';
    } else {
      operator = '=';
    }
  } // quote value unless regex or number


  if (operator !== '=~' && operator !== '!~' && isNaN(+value)) {
    value = "'" + value + "'";
  }

  return str + '"' + tag.key + '" ' + operator + ' ' + value;
}

var InfluxQueryBuilder =
/*#__PURE__*/
function () {
  function InfluxQueryBuilder(target, database) {
    _classCallCheck(this, InfluxQueryBuilder);

    this.target = target;
    this.database = database;
  }

  _createClass(InfluxQueryBuilder, [{
    key: "buildExploreQuery",
    value: function buildExploreQuery(type, withKey, withMeasurementFilter) {
      var query;
      var measurement;
      var policy;

      if (type === 'TAG_KEYS') {
        query = 'SHOW TAG KEYS';
        measurement = this.target.measurement;
        policy = this.target.policy;
      } else if (type === 'TAG_VALUES') {
        query = 'SHOW TAG VALUES';
        measurement = this.target.measurement;
        policy = this.target.policy;
      } else if (type === 'MEASUREMENTS') {
        query = 'SHOW MEASUREMENTS';

        if (withMeasurementFilter) {
          query += ' WITH MEASUREMENT =~ /' + app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape(withMeasurementFilter) + '/';
        }
      } else if (type === 'FIELDS') {
        measurement = this.target.measurement;
        policy = this.target.policy;

        if (!measurement.match('^/.*/')) {
          measurement = '"' + measurement + '"';

          if (policy && policy !== 'default') {
            policy = '"' + policy + '"';
            measurement = policy + '.' + measurement;
          }
        }

        return 'SHOW FIELD KEYS FROM ' + measurement;
      } else if (type === 'RETENTION POLICIES') {
        query = 'SHOW RETENTION POLICIES on "' + this.database + '"';
        return query;
      }

      if (measurement) {
        if (!measurement.match('^/.*/') && !measurement.match(/^merge\(.*\)/)) {
          measurement = '"' + measurement + '"';
        }

        if (policy && policy !== 'default') {
          policy = '"' + policy + '"';
          measurement = policy + '.' + measurement;
        }

        query += ' FROM ' + measurement;
      }

      if (withKey) {
        query += ' WITH KEY = "' + withKey + '"';
      }

      if (this.target.tags && this.target.tags.length > 0) {
        var whereConditions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(this.target.tags, function (memo, tag) {
          // do not add a condition for the key we want to explore for
          if (tag.key === withKey) {
            return memo;
          } // value operators not supported in these types of queries


          if (tag.operator === '>' || tag.operator === '<') {
            return memo;
          }

          memo.push(renderTagCondition(tag, memo.length));
          return memo;
        }, []);

        if (whereConditions.length > 0) {
          query += ' WHERE ' + whereConditions.join(' ');
        }
      }

      if (type === 'MEASUREMENTS') {
        query += ' LIMIT 100'; //Solve issue #2524 by limiting the number of measurements returned
        //LIMIT must be after WITH MEASUREMENT and WHERE clauses
        //This also could be used for TAG KEYS and TAG VALUES, if desired
      }

      return query;
    }
  }]);

  return InfluxQueryBuilder;
}();

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_ctrl.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/query_ctrl.ts ***!
  \**************************************************************/
/*! exports provided: InfluxQueryCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxQueryCtrl", function() { return InfluxQueryCtrl; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query_builder */ "./public/app/plugins/datasource/influxdb/query_builder.ts");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./influx_query_model */ "./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query_part */ "./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/plugins/sdk */ "./public/app/plugins/sdk.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var InfluxQueryCtrl =
/*#__PURE__*/
function (_QueryCtrl) {
  InfluxQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

  _inherits(InfluxQueryCtrl, _QueryCtrl);

  /** @ngInject */
  function InfluxQueryCtrl($scope, $injector, templateSrv, uiSegmentSrv) {
    var _this;

    _classCallCheck(this, InfluxQueryCtrl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfluxQueryCtrl).call(this, $scope, $injector));
    _this.templateSrv = templateSrv;
    _this.uiSegmentSrv = uiSegmentSrv;

    _this.onChange = function (target) {
      _this.target.query = target.query;
    };

    _this.onRunQuery = function () {
      _this.panelCtrl.refresh();
    };

    _this.target = _this.target;
    _this.queryModel = new _influx_query_model__WEBPACK_IMPORTED_MODULE_3__["default"](_this.target, templateSrv, _this.panel.scopedVars);
    _this.queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_2__["InfluxQueryBuilder"](_this.target, _this.datasource.database);
    _this.groupBySegment = _this.uiSegmentSrv.newPlusButton();
    _this.resultFormats = [{
      text: 'Time series',
      value: 'time_series'
    }, {
      text: 'Table',
      value: 'table'
    }, {
      text: 'Logs',
      value: 'logs'
    }];
    _this.policySegment = uiSegmentSrv.newSegment(_this.target.policy);

    if (!_this.target.measurement) {
      _this.measurementSegment = uiSegmentSrv.newSelectMeasurement();
    } else {
      _this.measurementSegment = uiSegmentSrv.newSegment(_this.target.measurement);
    }

    _this.tagSegments = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this.target.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tag = _step.value;

        if (!tag.operator) {
          if (/^\/.*\/$/.test(tag.value)) {
            tag.operator = '=~';
          } else {
            tag.operator = '=';
          }
        }

        if (tag.condition) {
          _this.tagSegments.push(uiSegmentSrv.newCondition(tag.condition));
        }

        _this.tagSegments.push(uiSegmentSrv.newKey(tag.key));

        _this.tagSegments.push(uiSegmentSrv.newOperator(tag.operator));

        _this.tagSegments.push(uiSegmentSrv.newKeyValue(tag.value));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    _this.fixTagSegments();

    _this.buildSelectMenu();

    _this.removeTagFilterSegment = uiSegmentSrv.newSegment({
      fake: true,
      value: '-- remove tag filter --'
    });
    return _this;
  }
  /**
   * Only called for flux
   */


  _createClass(InfluxQueryCtrl, [{
    key: "removeOrderByTime",
    value: function removeOrderByTime() {
      this.target.orderByTime = 'ASC';
    }
  }, {
    key: "buildSelectMenu",
    value: function buildSelectMenu() {
      var categories = _query_part__WEBPACK_IMPORTED_MODULE_4__["default"].getCategories();
      this.selectMenu = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(categories, function (memo, cat, key) {
        var menu = {
          text: key,
          submenu: cat.map(function (item) {
            return {
              text: item.type,
              value: item.type
            };
          })
        };
        memo.push(menu);
        return memo;
      }, []);
    }
  }, {
    key: "getGroupByOptions",
    value: function getGroupByOptions() {
      var _this2 = this;

      var query = this.queryBuilder.buildExploreQuery('TAG_KEYS');
      return this.datasource.metricFindQuery(query).then(function (tags) {
        var options = [];

        if (!_this2.queryModel.hasFill()) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'fill(null)'
          }));
        }

        if (!_this2.target.limit) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'LIMIT'
          }));
        }

        if (!_this2.target.slimit) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'SLIMIT'
          }));
        }

        if (!_this2.target.tz) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'tz'
          }));
        }

        if (_this2.target.orderByTime === 'ASC') {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'ORDER BY time DESC'
          }));
        }

        if (!_this2.queryModel.hasGroupByTime()) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'time($interval)'
          }));
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tag = _step2.value;
            options.push(_this2.uiSegmentSrv.newSegment({
              value: 'tag(' + tag.text + ')'
            }));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return options;
      }).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "groupByAction",
    value: function groupByAction() {
      switch (this.groupBySegment.value) {
        case 'LIMIT':
          {
            this.target.limit = 10;
            break;
          }

        case 'SLIMIT':
          {
            this.target.slimit = 10;
            break;
          }

        case 'tz':
          {
            this.target.tz = 'UTC';
            break;
          }

        case 'ORDER BY time DESC':
          {
            this.target.orderByTime = 'DESC';
            break;
          }

        default:
          {
            this.queryModel.addGroupBy(this.groupBySegment.value);
          }
      }

      var plusButton = this.uiSegmentSrv.newPlusButton();
      this.groupBySegment.value = plusButton.value;
      this.groupBySegment.html = plusButton.html;
      this.groupBySegment.fake = true;
      this.panelCtrl.refresh();
    }
  }, {
    key: "addSelectPart",
    value: function addSelectPart(selectParts, cat, subitem) {
      this.queryModel.addSelectPart(selectParts, subitem.value);
      this.panelCtrl.refresh();
    }
  }, {
    key: "handleSelectPartEvent",
    value: function handleSelectPartEvent(selectParts, part, evt) {
      switch (evt.name) {
        case 'get-param-options':
          {
            var fieldsQuery = this.queryBuilder.buildExploreQuery('FIELDS');
            return this.datasource.metricFindQuery(fieldsQuery).then(this.transformToSegments(true)).catch(this.handleQueryError.bind(this));
          }

        case 'part-param-changed':
          {
            this.panelCtrl.refresh();
            break;
          }

        case 'action':
          {
            this.queryModel.removeSelectPart(selectParts, part);
            this.panelCtrl.refresh();
            break;
          }

        case 'get-part-actions':
          {
            return Promise.resolve([{
              text: 'Remove',
              value: 'remove-part'
            }]);
          }
      }

      return Promise.resolve();
    }
  }, {
    key: "handleGroupByPartEvent",
    value: function handleGroupByPartEvent(part, index, evt) {
      switch (evt.name) {
        case 'get-param-options':
          {
            var tagsQuery = this.queryBuilder.buildExploreQuery('TAG_KEYS');
            return this.datasource.metricFindQuery(tagsQuery).then(this.transformToSegments(true)).catch(this.handleQueryError.bind(this));
          }

        case 'part-param-changed':
          {
            this.panelCtrl.refresh();
            break;
          }

        case 'action':
          {
            this.queryModel.removeGroupByPart(part, index);
            this.panelCtrl.refresh();
            break;
          }

        case 'get-part-actions':
          {
            return Promise.resolve([{
              text: 'Remove',
              value: 'remove-part'
            }]);
          }
      }

      return Promise.resolve();
    }
  }, {
    key: "fixTagSegments",
    value: function fixTagSegments() {
      var count = this.tagSegments.length;
      var lastSegment = this.tagSegments[Math.max(count - 1, 0)];

      if (!lastSegment || lastSegment.type !== 'plus-button') {
        this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
      }
    }
  }, {
    key: "measurementChanged",
    value: function measurementChanged() {
      this.target.measurement = this.measurementSegment.value;
      this.panelCtrl.refresh();
    }
  }, {
    key: "getPolicySegments",
    value: function getPolicySegments() {
      var policiesQuery = this.queryBuilder.buildExploreQuery('RETENTION POLICIES');
      return this.datasource.metricFindQuery(policiesQuery).then(this.transformToSegments(false)).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "policyChanged",
    value: function policyChanged() {
      this.target.policy = this.policySegment.value;
      this.panelCtrl.refresh();
    } // Only valid for InfluxQL queries

  }, {
    key: "toggleEditorMode",
    value: function toggleEditorMode() {
      if (this.datasource.is2x) {
        return; // nothing
      }

      try {
        this.target.query = this.queryModel.render(false);
      } catch (err) {
        console.log('query render error');
      }

      this.target.rawQuery = !this.target.rawQuery;
    }
  }, {
    key: "getMeasurements",
    value: function getMeasurements(measurementFilter) {
      var query = this.queryBuilder.buildExploreQuery('MEASUREMENTS', undefined, measurementFilter);
      return this.datasource.metricFindQuery(query).then(this.transformToSegments(true)).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "handleQueryError",
    value: function handleQueryError(err) {
      this.error = err.message || 'Failed to issue metric query';
      return [];
    }
  }, {
    key: "transformToSegments",
    value: function transformToSegments(addTemplateVars) {
      var _this3 = this;

      return function (results) {
        var segments = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(results, function (segment) {
          return _this3.uiSegmentSrv.newSegment({
            value: segment.text,
            expandable: segment.expandable
          });
        });

        if (addTemplateVars) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _this3.templateSrv.getVariables()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var variable = _step3.value;
              segments.unshift(_this3.uiSegmentSrv.newSegment({
                type: 'value',
                value: '/^$' + variable.name + '$/',
                expandable: true
              }));
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }

        return segments;
      };
    }
  }, {
    key: "getTagsOrValues",
    value: function getTagsOrValues(segment, index) {
      var _this4 = this;

      if (segment.type === 'condition') {
        return Promise.resolve([this.uiSegmentSrv.newSegment('AND'), this.uiSegmentSrv.newSegment('OR')]);
      }

      if (segment.type === 'operator') {
        var nextValue = this.tagSegments[index + 1].value;

        if (/^\/.*\/$/.test(nextValue)) {
          return Promise.resolve(this.uiSegmentSrv.newOperators(['=~', '!~']));
        } else {
          return Promise.resolve(this.uiSegmentSrv.newOperators(['=', '!=', '<>', '<', '>']));
        }
      }

      var query, addTemplateVars;

      if (segment.type === 'key' || segment.type === 'plus-button') {
        query = this.queryBuilder.buildExploreQuery('TAG_KEYS');
        addTemplateVars = false;
      } else if (segment.type === 'value') {
        query = this.queryBuilder.buildExploreQuery('TAG_VALUES', this.tagSegments[index - 2].value);
        addTemplateVars = true;
      }

      return this.datasource.metricFindQuery(query).then(this.transformToSegments(addTemplateVars)).then(function (results) {
        if (segment.type === 'key') {
          results.splice(0, 0, angular__WEBPACK_IMPORTED_MODULE_0___default.a.copy(_this4.removeTagFilterSegment));
        }

        return results;
      }).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "getFieldSegments",
    value: function getFieldSegments() {
      var fieldsQuery = this.queryBuilder.buildExploreQuery('FIELDS');
      return this.datasource.metricFindQuery(fieldsQuery).then(this.transformToSegments(false)).catch(this.handleQueryError);
    }
  }, {
    key: "tagSegmentUpdated",
    value: function tagSegmentUpdated(segment, index) {
      this.tagSegments[index] = segment; // handle remove tag condition

      if (segment.value === this.removeTagFilterSegment.value) {
        this.tagSegments.splice(index, 3);

        if (this.tagSegments.length === 0) {
          this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
        } else if (this.tagSegments.length > 2) {
          this.tagSegments.splice(Math.max(index - 1, 0), 1);

          if (this.tagSegments[this.tagSegments.length - 1].type !== 'plus-button') {
            this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
          }
        }
      } else {
        if (segment.type === 'plus-button') {
          if (index > 2) {
            this.tagSegments.splice(index, 0, this.uiSegmentSrv.newCondition('AND'));
          }

          this.tagSegments.push(this.uiSegmentSrv.newOperator('='));
          this.tagSegments.push(this.uiSegmentSrv.newFake('select tag value', 'value', 'query-segment-value'));
          segment.type = 'key';
          segment.cssClass = 'query-segment-key';
        }

        if (index + 1 === this.tagSegments.length) {
          this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
        }
      }

      this.rebuildTargetTagConditions();
    }
  }, {
    key: "rebuildTargetTagConditions",
    value: function rebuildTargetTagConditions() {
      var _this5 = this;

      var tags = [];
      var tagIndex = 0;
      var tagOperator = '';

      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(this.tagSegments, function (segment2, index) {
        if (segment2.type === 'key') {
          if (tags.length === 0) {
            tags.push({});
          }

          tags[tagIndex].key = segment2.value;
        } else if (segment2.type === 'value') {
          tagOperator = _this5.getTagValueOperator(segment2.value, tags[tagIndex].operator);

          if (tagOperator) {
            _this5.tagSegments[index - 1] = _this5.uiSegmentSrv.newOperator(tagOperator);
            tags[tagIndex].operator = tagOperator;
          }

          tags[tagIndex].value = segment2.value;
        } else if (segment2.type === 'condition') {
          tags.push({
            condition: segment2.value
          });
          tagIndex += 1;
        } else if (segment2.type === 'operator') {
          tags[tagIndex].operator = segment2.value;
        }
      });

      this.target.tags = tags;
      this.panelCtrl.refresh();
    }
  }, {
    key: "getTagValueOperator",
    value: function getTagValueOperator(tagValue, tagOperator) {
      if (tagOperator !== '=~' && tagOperator !== '!~' && /^\/.*\/$/.test(tagValue)) {
        return '=~';
      } else if ((tagOperator === '=~' || tagOperator === '!~') && /^(?!\/.*\/$)/.test(tagValue)) {
        return '=';
      }

      return null;
    }
  }]);

  return InfluxQueryCtrl;
}(app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__["QueryCtrl"]);
InfluxQueryCtrl.templateUrl = 'partials/query.editor.html';

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_part.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/query_part.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/components/query_part/query_part */ "./public/app/core/components/query_part/query_part.ts");


var index = [];
var categories = {
  Aggregations: [],
  Selectors: [],
  Transformations: [],
  Predictors: [],
  Math: [],
  Aliasing: [],
  Fields: []
};

function createPart(part) {
  var def = index[part.type];

  if (!def) {
    throw {
      message: 'Could not find query part ' + part.type
    };
  }

  return new app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["QueryPart"](part, def);
}

function register(options) {
  index[options.type] = new app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["QueryPartDef"](options);
  options.category.push(index[options.type]);
}

var groupByTimeFunctions = [];

function aliasRenderer(part, innerExpr) {
  return innerExpr + ' AS ' + '"' + part.params[0] + '"';
}

function fieldRenderer(part, innerExpr) {
  if (part.params[0] === '*') {
    return '*';
  }

  return '"' + part.params[0] + '"';
}

function replaceAggregationAddStrategy(selectParts, partModel) {
  // look for existing aggregation
  for (var i = 0; i < selectParts.length; i++) {
    var part = selectParts[i];

    if (part.def.category === categories.Aggregations) {
      if (part.def.type === partModel.def.type) {
        return;
      } // count distinct is allowed


      if (part.def.type === 'count' && partModel.def.type === 'distinct') {
        break;
      } // remove next aggregation if distinct was replaced


      if (part.def.type === 'distinct') {
        var morePartsAvailable = selectParts.length >= i + 2;

        if (partModel.def.type !== 'count' && morePartsAvailable) {
          var nextPart = selectParts[i + 1];

          if (nextPart.def.category === categories.Aggregations) {
            selectParts.splice(i + 1, 1);
          }
        } else if (partModel.def.type === 'count') {
          if (!morePartsAvailable || selectParts[i + 1].def.type !== 'count') {
            selectParts.splice(i + 1, 0, partModel);
          }

          return;
        }
      }

      selectParts[i] = partModel;
      return;
    }

    if (part.def.category === categories.Selectors) {
      selectParts[i] = partModel;
      return;
    }
  }

  selectParts.splice(1, 0, partModel);
}

function addTransformationStrategy(selectParts, partModel) {
  var i; // look for index to add transformation

  for (i = 0; i < selectParts.length; i++) {
    var part = selectParts[i];

    if (part.def.category === categories.Math || part.def.category === categories.Aliasing) {
      break;
    }
  }

  selectParts.splice(i, 0, partModel);
}

function addMathStrategy(selectParts, partModel) {
  var partCount = selectParts.length;

  if (partCount > 0) {
    // if last is math, replace it
    if (selectParts[partCount - 1].def.type === 'math') {
      selectParts[partCount - 1] = partModel;
      return;
    } // if next to last is math, replace it


    if (partCount > 1 && selectParts[partCount - 2].def.type === 'math') {
      selectParts[partCount - 2] = partModel;
      return;
    } else if (selectParts[partCount - 1].def.type === 'alias') {
      // if last is alias add it before
      selectParts.splice(partCount - 1, 0, partModel);
      return;
    }
  }

  selectParts.push(partModel);
}

function addAliasStrategy(selectParts, partModel) {
  var partCount = selectParts.length;

  if (partCount > 0) {
    // if last is alias, replace it
    if (selectParts[partCount - 1].def.type === 'alias') {
      selectParts[partCount - 1] = partModel;
      return;
    }
  }

  selectParts.push(partModel);
}

function addFieldStrategy(selectParts, partModel, query) {
  // copy all parts
  var parts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(selectParts, function (part) {
    return createPart({
      type: part.def.type,
      params: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(part.params)
    });
  });

  query.selectModels.push(parts);
}

register({
  type: 'field',
  addStrategy: addFieldStrategy,
  category: categories.Fields,
  params: [{
    type: 'field',
    dynamicLookup: true
  }],
  defaultParams: ['value'],
  renderer: fieldRenderer
}); // Aggregations

register({
  type: 'count',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'distinct',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'integral',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'mean',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'median',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'mode',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'sum',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
}); // transformations

register({
  type: 'derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'spread',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'non_negative_derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'non_negative_difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'moving_average',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'window',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }],
  defaultParams: [10],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'cumulative_sum',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'stddev',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'time',
  category: groupByTimeFunctions,
  params: [{
    name: 'interval',
    type: 'time',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['$__interval'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'fill',
  category: groupByTimeFunctions,
  params: [{
    name: 'fill',
    type: 'string',
    options: ['none', 'null', '0', 'previous', 'linear']
  }],
  defaultParams: ['null'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'elapsed',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
}); // predictions

register({
  type: 'holt_winters',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'holt_winters_with_fit',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
}); // Selectors

register({
  type: 'bottom',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'first',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'last',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'max',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'min',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'percentile',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'nth',
    type: 'int'
  }],
  defaultParams: [95],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'top',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'tag',
  category: groupByTimeFunctions,
  params: [{
    name: 'tag',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['tag'],
  renderer: fieldRenderer
});
register({
  type: 'math',
  addStrategy: addMathStrategy,
  category: categories.Math,
  params: [{
    name: 'expr',
    type: 'string'
  }],
  defaultParams: [' / 100'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["suffixRenderer"]
});
register({
  type: 'alias',
  addStrategy: addAliasStrategy,
  category: categories.Aliasing,
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias'],
  renderMode: 'suffix',
  renderer: aliasRenderer
});
/* harmony default export */ __webpack_exports__["default"] = ({
  create: createPart,
  getCategories: function getCategories() {
    return categories;
  },
  replaceAggregationAdd: replaceAggregationAddStrategy
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/response_parser.ts":
/*!*******************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/response_parser.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponseParser; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ResponseParser =
/*#__PURE__*/
function () {
  function ResponseParser() {
    _classCallCheck(this, ResponseParser);
  }

  _createClass(ResponseParser, [{
    key: "parse",
    value: function parse(query, results) {
      if (!results || results.results.length === 0) {
        return [];
      }

      var influxResults = results.results[0];

      if (!influxResults.series) {
        return [];
      }

      var normalizedQuery = query.toLowerCase();
      var isValueFirst = normalizedQuery.indexOf('show field keys') >= 0 || normalizedQuery.indexOf('show retention policies') >= 0;
      var res = {};

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(influxResults.series, function (serie) {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(serie.values, function (value) {
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(value)) {
            // In general, there are 2 possible shapes for the returned value.
            // The first one is a two-element array,
            // where the first element is somewhat a metadata value:
            // the tag name for SHOW TAG VALUES queries,
            // the time field for SELECT queries, etc.
            // The second shape is an one-element array,
            // that is containing an immediate value.
            // For example, SHOW FIELD KEYS queries return such shape.
            // Note, pre-0.11 versions return
            // the second shape for SHOW TAG VALUES queries
            // (while the newer versions—first).
            if (isValueFirst) {
              addUnique(res, value[0]);
            } else if (value[1] !== undefined) {
              addUnique(res, value[1]);
            } else {
              addUnique(res, value[0]);
            }
          } else {
            addUnique(res, value);
          }
        });
      }); // @ts-ignore problems with typings for this _.map only accepts [] but this needs to be object


      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(res, function (value) {
        // @ts-ignore
        return {
          text: value.toString()
        };
      });
    }
  }]);

  return ResponseParser;
}();



function addUnique(arr, value) {
  arr[value] = value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/types.ts":
/*!*********************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/types.ts ***!
  \*********************************************************/
/*! exports provided: InfluxVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxVersion", function() { return InfluxVersion; });
var InfluxVersion;

(function (InfluxVersion) {
  InfluxVersion["InfluxQL"] = "InfluxQL";
  InfluxVersion["Flux"] = "Flux";
})(InfluxVersion || (InfluxVersion = {}));

/***/ })

}]);
//# sourceMappingURL=influxdbPlugin.aae40212254ed8359ce4.js.map