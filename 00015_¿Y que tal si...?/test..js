describe("", function() {
  it("maximo(4, 10) es 10", function() {
    assert.equal(maximo(4, 10), 10);
  });
  it("maximo(3, 10) es 10", function() {
    assert.equal(maximo(3, 10), 10);
  })
  it("maximo(2, 10) es 10", function() {
    assert.equal(maximo(2, 10), 10);
  })
  it("maximo(20, 10) es 20", function() {
    assert.equal(maximo(20, 10), 20);
  })
  it("maximo(20, 15) es 20", function() {
    assert.equal(maximo(20, 15), 20);
  })
})