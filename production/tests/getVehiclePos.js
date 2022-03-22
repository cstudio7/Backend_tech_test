"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

describe('Should get all Events', function () {
  it('Should get all Events', function (done) {
    _chai["default"].request(_index["default"]).get('/events/?page=${1}&limit=${10}').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});