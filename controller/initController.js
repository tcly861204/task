'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
  init: function init(app, router) {
    app.use(router(function (_) {
      _.get('/', function (ctx, next) {
        ctx.redirect('/index/index');
      }), _.get('/index/index', _indexController2.default.index()),
      //获取点击数
      _.post('/praiseNum', _indexController2.default.getNum()),
      //更新点击数
      _.post('/praise', _indexController2.default.update());
    }));
  }
};

exports.default = controllerInit;