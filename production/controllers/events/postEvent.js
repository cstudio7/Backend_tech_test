"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postEvents = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _events = _interopRequireDefault(require("../../models/events"));

var postEvents = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, title, description, category, date, isVirtual, address, newEvent;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description, category = _req$body.category, date = _req$body.date, isVirtual = _req$body.isVirtual, address = _req$body.address;
            _context.prev = 1;
            _context.next = 4;
            return _events["default"].create({
              title: title,
              description: description,
              category: category,
              date: date,
              isVirtual: isVirtual,
              address: address
            });

          case 4:
            newEvent = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              message: 'You have successfully created an event.',
              success: true
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            // watch errors
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function postEvents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postEvents = postEvents;