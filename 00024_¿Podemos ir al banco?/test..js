describe("Puedo ir al banco", function() {
  it("puedoIrAlBanco('Lunes', 10)", function() {
    assert.equal(puedoIrAlBanco("Lunes", 10), true)
  });
   it("puedoIrAlBanco('Martes', 18)", function() {
    assert.equal(puedoIrAlBanco("Martes", 18), false)
  });
   it("puedoIrAlBanco('Sábado', 11)", function() {
    assert.equal(puedoIrAlBanco("Sábado", 11), false)
  });
  it("puedoIrAlBanco('Sabado', 11)", function() {
    assert.equal(puedoIrAlBanco("Sábado", 11), false)
  });
  it("puedoIrAlBanco('sábado', 11)", function() {
    assert.equal(puedoIrAlBanco("Sábado", 11), false)
  });
   it("puedoIrAlBanco('sabado', 11)", function() {
    assert.equal(puedoIrAlBanco("Sábado", 11), false)
  });
})