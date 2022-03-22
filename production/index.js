"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _db = _interopRequireDefault(require("./configs/db.js"));

var _index = _interopRequireDefault(require("./routes/index.js"));

_dotenv["default"].config();

var app = (0, _express["default"])();
app.disable('x-powered-by');
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_index["default"]);
app.get('/', function (req, res) {
  return res.status(200).send({
    status: 200,
    message: 'Welcome to Fig Finance Test!'
  });
});
app.all('*', function (req, res) {
  return res.status(404).send({
    status: 404,
    message: 'Page Not Found'
  });
}); // connection setup

var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _db["default"])();

          case 3:
            app.listen(process.env.PORT, function () {
              console.log("REST API on http://localhost:".concat(process.env.PORT, "/"));
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

exports.start = start;
start();
var _default = app;
exports["default"] = _default;