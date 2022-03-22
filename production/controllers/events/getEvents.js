"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvents = exports.getEventByCategory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _events = _interopRequireDefault(require("../../models/events"));

var getEvents = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var total, page, limit, currentPage, skipIndex, totalPages, prevPage, nextPage, getAllEvent;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _events["default"].countDocuments({});

          case 2:
            total = _context.sent;
            page = parseInt(req.query.page) || 1;
            limit = parseInt(req.query.limit) || 10;
            currentPage = page ? +page : 0;
            skipIndex = (page - 1) * limit;
            totalPages = Math.ceil(total / limit);
            if (currentPage > totalPages) currentPage = totalPages;
            prevPage = currentPage === 1 ? 1 : currentPage - 1;
            if (prevPage === -1) prevPage = 0;
            nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
            _context.next = 14;
            return _events["default"].find().sort({
              date: -1
            }).limit(limit).skip(skipIndex);

          case 14:
            getAllEvent = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              event: getAllEvent,
              meta: {
                totalItem: total,
                totalPages: totalPages,
                currentPage: currentPage,
                prevPage: prevPage,
                nextPage: nextPage,
                perPage: limit
              }
            }));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEvents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getEvents = getEvents;

var getEventByCategory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var total, page, limit, currentPage, skipIndex, totalPages, prevPage, nextPage, event;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (req.query.category) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", getEvents(req, res));

          case 3:
            _context2.next = 5;
            return _events["default"].find({
              category: req.query.category
            }).count();

          case 5:
            total = _context2.sent;
            page = parseInt(req.query.page) || 1;
            limit = parseInt(req.query.limit) || 10;
            currentPage = page ? +page : 0;
            skipIndex = (page - 1) * limit;
            totalPages = Math.ceil(total / limit);
            if (currentPage > totalPages) currentPage = totalPages;
            prevPage = currentPage === 1 ? 1 : currentPage - 1;
            if (prevPage === -1) prevPage = 0;
            nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
            _context2.next = 17;
            return _events["default"].find({
              category: req.query.category
            }).sort({
              date: -1
            }).limit(limit).skip(skipIndex);

          case 17:
            event = _context2.sent;

            if (!event) {
              _context2.next = 20;
              break;
            }

            return _context2.abrupt("return", res.status(200).send({
              event: event,
              meta: {
                totalItem: total,
                totalPages: totalPages,
                currentPage: currentPage,
                prevPage: prevPage,
                nextPage: nextPage,
                perPage: limit
              }
            }));

          case 20:
            return _context2.abrupt("return", res.status(404).send('not found'));

          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.message);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 23]]);
  }));

  return function getEventByCategory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getEventByCategory = getEventByCategory;