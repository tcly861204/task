let rp = require('request-promise');
class indexModel{
  constructor(ctx){
    this.ctx = ctx;
  }
  selectedNum(){
    return new Promise(function(res, rej) {
      rp({
        method: 'POST',
        url: 'http://localhost:8087/praise.php',
        formData: { "praise": "095be99fb9bf08b519a2311b56e1c2ff", "type": "sec" },
        json: true
      }).then(function(data) {
        res(data);
      }).catch(function(err) {
        rej(err);
      });
    });
  }
  updateNum(){
    return new Promise(function(res, rej) {
      rp({
        method: 'POST',
        url: 'http://localhost:8087/praise.php',
        formData: { "praise": "095be99fb9bf08b519a2311b56e1c2ff", "type": "put" },
        json: true
      }).then(function(data) {
        res(data);
      }).catch(function(err) {
        rej(err);
      });
    });
  }
}
export default indexModel