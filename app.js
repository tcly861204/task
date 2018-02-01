let Koa = require('koa');
let path = require('path');
let router = require('koa-simple-router');
let convert = require('koa-convert');
let static = require('koa-static');
let render = require('koa-swig');
let co = require('co');
let request = require('request');
let app = new Koa();
let getInterFaceDate = require('./controller/getInterFaceDate.js');
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
    ctx.body = "hello wrold";
  });
  _.get('/index/index', async(ctx, next) => {
    ctx.body = await ctx.render('index.html', { title: '点赞+1' });
  });
  //获取当前点赞数量
  _.post('/getPraiseNum', async(ctx, next) => {
    ctx.body = await getInterFaceDate("get");
  });
  //更新点赞数
  _.post('/praise', async(ctx, next) => {
    ctx.body = await getInterFaceDate("put");
  });
}));

app.use(convert(static(path.join(__dirname, "public"))));
app.listen(3000);