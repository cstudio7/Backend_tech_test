"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _index = _interopRequireDefault(require("../index"));

describe('Should get all Events By Category', function () {
  it('Should get all Events', function (done) {
    _chai["default"].request(_index["default"]).get('/event/category?category="AI"').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});