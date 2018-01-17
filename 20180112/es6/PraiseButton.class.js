/**
 * 点赞父对象
 * @class PraiseButton
 */
class PraiseButton {
  constructor(id, num) {
    if (!id) {
      return;
    }
    this.ele = document.querySelector(id);
    this.num = num || 0;
    this.init();
  }
  init() {
    this.ele.children[0].innerHTML = this.num;
  }
}
/**
 * 子对象
 * @class Thumb
 * @extends {PraiseButton}
 */
class Thumb extends PraiseButton {
  /**
   * Creates an instance of Thumb.
   * @param {any} id  元素节点
   * @param {any} num  初始化数据不传默认为0
   * @memberof Thumb  对象
   */
  constructor(id, num) {
    super(id, num);
  }
  praise() {
    let _self = this;
    this.ele.addEventListener('click', function(e) {
      let childNode = this.children[0];
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
      return _self.num;
    }, false);
  }
  /**
   * 判断节点是否有className
   * @param {any} cls
   * @returns
   * @memberof Thumb
   */
  hasClass(cls) {
    let reg = new RegExp(' ' + cls + ' ');
    return reg.test(' ' + this.ele.className + ' ');
  }
  /**
   * 节点添加className
   * @param {any} cls
   * @memberof Thumb
   */
  addClass(cls) {
    if (!this.hasClass(cls)) {
      this.ele.className += ' ' + cls;
    }
  }
  /**
   * 移除节点className
   * @param {any} cls
   * @memberof Thumb
   */
  removeClass(cls) {
    if (this.hasClass(cls)) {
      this.ele.className = this.ele.className.replace(' ' + cls, '');
    }
  }
}
module.exports = Thumb;