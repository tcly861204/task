import _index from './indexController';
const controllerInit = {
  init(app,router){
    app.use(router(_ =>{
      _.get('/',(ctx,next)=>{
        ctx.redirect('/index/index');
      }),
      _.get('/index/index',_index.index()),
      //获取点击数
      _.post('/praiseNum',_index.getNum()),
      //更新点击数
      _.post('/praise',_index.update())
    }));
  }
}

export default controllerInit;



