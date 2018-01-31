/**
 * 点赞父对象
 * @class PraiseButton
 */
class PraiseButton {
  constructor(num) {
    this.num = num || 0;
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
  constructor(num) {
    super(num);
  }
  praise() {
    this.num += 1;
    if (this.num >= 10) {
      this.num = 0;
    }
    return this.num;
  }
}