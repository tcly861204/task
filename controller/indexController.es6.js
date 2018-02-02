//移入model层
import indexModel from "../models/index_model";

const indexController = {
  index(){
    return async(ctx,next)=>{
      ctx.body = await ctx.render('index.swig',{
        title:'大拇指点赞+1'
      });
    }
  },
  //初始化获取点赞数
  getNum(){
    return async(ctx,next)=>{
      const M = new indexModel(ctx);
      ctx.body = await M.selectedNum();
    }
  },
  //更新点赞数
  update(){
    return async(ctx,next)=>{
      const M = new indexModel(ctx);
      ctx.body = await M.updateNum();
    }
  }
}
export default indexController