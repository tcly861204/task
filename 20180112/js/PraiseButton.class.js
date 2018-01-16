class PraiseButton {
  constructor(id) {
    this.praiseBtn = document.querySelector('#'+id);
  }
}
class Thumb extends PraiseButton {
  constructor(id) {
    super(id);
  }
  praise() {
    this.praiseBtn.addEventListener('click', function(e) {
      this.children[0].innerHTML = parseInt(this.children[0].innerHTML) + 1;
    }, false);
  }
}

let thumb = new Thumb('J_praiseBtn');
thumb.praise();