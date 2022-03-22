"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var events = new _mongoose["default"].Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: String,
    trim: true,
    required: true
  },
  isVirtual: {
    type: Boolean,
    trim: true,
    required: true
  },
  address: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

var Events = _mongoose["default"].model('Events', events);

var _default = Events;
exports["default"] = _default;