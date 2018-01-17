describe("点赞功能单元测试", function() {
  it("点赞+1", function() {
    var thumb = new Thumb();
    expect(thumb.praise()).toBe(1);
    expect(thumb.praise()).toBe(2);
    expect(thumb.praise()).toBe(3);
    expect(thumb.praise()).toBe(4);
    expect(thumb.praise()).toBe(5);
    expect(thumb.praise()).toBe(6);
    expect(thumb.praise()).toBe(7);
    expect(thumb.praise()).toBe(8);
    expect(thumb.praise()).toBe(9);
    expect(thumb.praise()).toBe(0);
  })
});