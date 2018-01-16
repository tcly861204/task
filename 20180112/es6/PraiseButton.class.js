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
class Thumb extends PraiseButton {
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
    }, false);
  }
  hasClass(cls) {
    let reg = new RegExp(' ' + cls + ' ');
    return reg.test(' ' + this.ele.className + ' ');
  }
  addClass(cls) {
    if (!this.hasClass(cls)) {
      this.ele.className += ' ' + cls;
    }
  }
  removeClass(cls) {
    if (this.hasClass(cls)) {
      this.ele.className = this.ele.className.replace(' ' + cls, '');
    }
  }
}

let thumb = new Thumb('#J_praiseBtn');
thumb.praise();