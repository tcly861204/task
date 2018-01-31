let Koa = require('koa');
let path = require('path');
let router = require('koa-simple-router');
let convert = require('koa-convert');
let static = require('koa-static');
let render = require('koa-swig');
let co = require('co');
let request = require('request');
let rp = require('request-promise');
let app = new Koa();

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


app.context.render = co.wrap(render({
  root: path.join(__dirname, "./views"),
  autoescape: true,
  cache: 'memory',
  ext: "html",
  varControls: ['[[', ']]'],
  writeBody: false
}));

app.use(router(_ => {
  _.get('/', (ctx, next) => {
    ctx.body = "hello"
  });
  _.get('/index/index', async(ctx, next) => {
    ctx.body = await ctx.render('index.html');
  });
  _.post('/getPraiseNum', async(ctx, next) => {
    ctx.body = await getInterFaceDate("get");
  });
  _.post('/praise', async(ctx, next) => {
    ctx.body = await getInterFaceDate("put");
  });
}));

app.use(convert(static(path.join(__dirname, "public"))));
app.listen(3000);