"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getEvents = require("../../controllers/events/getEvents");

var EventRouter = _express["default"].Router();

EventRouter.get('/event/category', _getEvents.getEventByCategory);
EventRouter.get('/events', _getEvents.getEvents);
var _default = EventRouter;
exports["default"] = _default;