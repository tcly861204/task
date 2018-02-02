'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rp = require('request-promise');

var indexModel = function () {
  function indexModel(ctx) {
    _classCallCheck(this, indexModel);

    this.ctx = ctx;
  }

  _createClass(indexModel, [{
    key: 'selectedNum',
    value: function selectedNum() {
      return new Promise(function (res, rej) {
        rp({
          method: 'POST',
          url: 'http://localhost:8087/praise.php',
          formData: { "praise": "095be99fb9bf08b519a2311b56e1c2ff", "type": "sec" },
          json: true
        }).then(function (data) {
          res(data);
        }).catch(function (err) {
          rej(err);
        });
      });
    }
  }, {
    key: 'updateNum',
    value: function updateNum() {
      return new Promise(function (res, rej) {
        rp({
          method: 'POST',
          url: 'http://localhost:8087/praise.php',
          formData: { "praise": "095be99fb9bf08b519a2311b56e1c2ff", "type": "put" },
          json: true
        }).then(function (data) {
          res(data);
        }).catch(function (err) {
          rej(err);
        });
      });
    }
  }]);

  return indexModel;
}();

exports.default = indexModel;