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
      let childNode = this.children[0];
      childNode.innerHTML = parseInt(childNode.innerHTML) + 1;
    }, false);
  }
}

let thumb = new Thumb('J_praiseBtn');
thumb.praise();