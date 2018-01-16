const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('20180112'));
app.get('/', function(req, res) {
  res.send(fs.readFileSync('20180112/index.html', 'utf-8'));
});
app.listen(3000);