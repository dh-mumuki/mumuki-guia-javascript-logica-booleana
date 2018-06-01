describe("Descripción del grupo", function() {
  it("elMayor(10, 9)", function() {
    assert.equal(elMayor(10, 9), 10)
  });
  it("elMayor(5, 11)", function() {
    assert.equal(elMayor(5, 11), 11)
  });
  it("elMayor(4, 4)", function() {
    assert.equal(elMayor(4, 4), 4)
  });
  it("elMayor(2, 120)", function() {
    assert.equal(elMayor(2, 120), 120)
  });
})