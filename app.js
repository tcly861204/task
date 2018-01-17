const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('20180112'));
//es6->es5 system.js实现
app.get('/', function(req, res) {
  res.send(fs.readFileSync('20180112/index.html', 'utf-8'));
});
//jQuery组件实现
app.get('/jquery',function(req,res){
  res.send(fs.readFileSync('20180112/jquery.html', 'utf-8'));
})

app.listen(3000);