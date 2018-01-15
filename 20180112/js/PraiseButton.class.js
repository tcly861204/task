class PraiseButton {
  constructor() {
    this.praiseBtn = document.querySelector('#J_praiseBtn');
  }
}
class Thumb extends PraiseButton {
  constructor() {
    super();
  }
  praise() {
    this.praiseBtn.addEventListener('click', function(e) {
      this.children[0].innerHTML = parseInt(this.children[0].innerHTML) + 1;
    }, false);
  }
}

let thumb = new Thumb;
thumb.praise();