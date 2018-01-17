
// describe("点赞功能单元测试",function(){
//   it("点赞+1",function(){
//     expect((new Thumb('#J_praiseBtn')).test()).toBe(1);
//   });
// });

describe("测试文件",function(){
  it("测试",function(){
    expect(isNum(1)).toBe(1);
    expect(isNum(2)).toBe(2);
    expect(isNum('0')).toBe(0);
  })
});