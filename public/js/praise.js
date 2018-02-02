(function(window) {
  ({
    isClick: false,
    init: function() {
      this.praiseNumNode = document.querySelectorAll(".btn-num")[0];
      this.initPraiseNum();
      this.updateNum();
    },
    // 初始化点赞数
    initPraiseNum: function() {
      var that = this;

      axios.post("/praiseNum").then(function(res) {
        if (res.data.success) {
          that.praiseNumNode.innerHTML = res.data.pariseNum;
        } else {
          console.log(res.data.errMsg);
        }
      });
    },
    //更新点赞数
    updateNum: function() {
      var that = this;
      document.querySelector("#J_praiseBtn").addEventListener('click', function() {
        if (!that.isClick) {
          that.isClick = true;
          axios.post('/praise').then(function(res) {
            if (res.data.success) {
              that.praiseNumNode.innerHTML = res.data.pariseNum;
            } else {
              console.log(res.data.errMsg);
            }
            setTimeout(function() {

            }, 300);
          });

        }
      }, false);
    }
  }).init();
}(window));