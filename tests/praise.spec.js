describe("点赞功能单元测试",function(){
  it("点赞+1",function(){
    expect((new Thumb('#J_praiseBtn')).test()).toBe(1);
  });
});