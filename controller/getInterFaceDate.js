let rp = require('request-promise');

function getInterFaceDate(type) {
  return new Promise(function(res, rej) {
    rp({
      method: 'POST',
      url: 'http://localhost:8082/praise.php',
      formData: { "praise": "095be99fb9bf08b519a2311b56e1c2ff", "type": type },
      json: true
    }).then(function(data) {
      res(data);
    }).catch(function(err) {
      rej(err);
    });
  });
}

module.exports = getInterFaceDate;