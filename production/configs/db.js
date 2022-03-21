"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var connect = function connect() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.env.DB_URL;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _mongoose["default"].connect(url, _objectSpread({}, opts));

  _mongoose["default"].connection.on('error', function (err) {
    console.log('err', err);
  });

  _mongoose["default"].connection.on('connected', function (err, res) {
    console.log('Connection establish');
  });
};

var _default = connect;
exports["default"] = _default;