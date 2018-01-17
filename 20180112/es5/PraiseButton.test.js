"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 点赞父对象
 * @class PraiseButton
 */
var PraiseButton = function PraiseButton(num) {
  _classCallCheck(this, PraiseButton);

  this.num = num || 0;
};
/**
 * 子对象
 * @class Thumb
 * @extends {PraiseButton}
 */


var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  /**
   * Creates an instance of Thumb.
   * @param {any} id  元素节点
   * @param {any} num  初始化数据不传默认为0
   * @memberof Thumb  对象
   */
  function Thumb(num) {
    _classCallCheck(this, Thumb);

    return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num));
  }

  _createClass(Thumb, [{
    key: "praise",
    value: function praise() {
      this.num += 1;
      if (this.num >= 10) {
        this.num = 0;
      }
      return this.num;
    }
  }]);

  return Thumb;
}(PraiseButton);