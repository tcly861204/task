'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
  function PraiseButton(id, num) {
    _classCallCheck(this, PraiseButton);

    if (!id) {
      return;
    }
    this.ele = document.querySelector(id);
    this.num = num || 0;
    this.init();
  }

  _createClass(PraiseButton, [{
    key: 'init',
    value: function init() {
      this.ele.children[0].innerHTML = this.num;
    }
  }]);

  return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb(id, num) {
    _classCallCheck(this, Thumb);

    return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, id, num));
  }

  _createClass(Thumb, [{
    key: 'praise',
    value: function praise() {
      var _self = this;
      this.ele.addEventListener('click', function (e) {
        var childNode = this.children[0];
        _self.num += 1;
        if (_self.num >= 10) {
          _self.num = 0;
        }
        if (_self.num === 0) {
          _self.addClass('gray');
        } else {
          _self.removeClass('gray');
        }
        childNode.innerHTML = _self.num;
      }, false);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(cls) {
      var reg = new RegExp(' ' + cls + ' ');
      return reg.test(' ' + this.ele.className + ' ');
    }
  }, {
    key: 'addClass',
    value: function addClass(cls) {
      if (!this.hasClass(cls)) {
        this.ele.className += ' ' + cls;
      }
    }
  }, {
    key: 'removeClass',
    value: function removeClass(cls) {
      if (this.hasClass(cls)) {
        this.ele.className = this.ele.className.replace(' ' + cls, '');
      }
    }
  }]);

  return Thumb;
}(PraiseButton);

var thumb = new Thumb('#J_praiseBtn');
thumb.praise();