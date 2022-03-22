"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

describe('App Tests', function () {
  it('should return a welcome message', function (done) {
    _chai["default"].request(_index["default"]).get('/').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  it('should return an error and never crash', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/ddd').end(function (err, res) {
      res.should.have.status(404);
      done();
    });
  });
});