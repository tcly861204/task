describe("点赞功能单元测试",function(){
  var thumb = new Thumb('#J_praiseBtn');
  it("点赞+1",function(){
    expect(thumb.praise()).toBe(1);
  });
});