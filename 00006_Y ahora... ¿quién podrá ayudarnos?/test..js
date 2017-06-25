it("un lunes feriado a las 14hs el banco está cerrado", function() {
  assert.equal(estaCerrado(true, "lunes", 14), true);
})

it("un jueves corriente a las 13hs el banco no está cerrado", function() {
  assert.equal(estaCerrado(false, "jueves", 14), false);
})

it("un sábado corriente a las 11hs el banco está cerrado", function() {
  assert.equal(estaCerrado(false, "sabado", 11), true);
})

it("un domingo corriente a las 19hs el banco está cerrado", function() {
  assert.equal(estaCerrado(false, "sabado", 11), true);
})

it("un martes corriente a las 16hs el banco está cerrado", function() {
  assert.equal(estaCerrado(false, "martes", 16), true);
})