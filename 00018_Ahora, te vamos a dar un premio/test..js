describe("", function() {
  it("medallaSegunPuesto(1)", function() {
    assert.equal(medallaSegunPuesto(1), "oro")
  })
  it("medallaSegunPuesto(2)", function() {
    assert.equal(medallaSegunPuesto(2), "plata")
  })
  it("medallaSegunPuesto(3)", function() {
    assert.equal(medallaSegunPuesto(3), "bronce")
  })
  it("medallaSegunPuesto(4)", function() {
    assert.equal(medallaSegunPuesto(4), "Seguí participando")
  })
  it("medallaSegunPuesto(5)", function() {
    assert.equal(medallaSegunPuesto(5), "Seguí participando")
  })
  it("medallaSegunPuesto(0)", function() {
    assert.equal(medallaSegunPuesto(0), "Seguí participando")
  })
})