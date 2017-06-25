it("un lunes feriado a las 14hs el banco está cerrado", function() {
  assert.equal(estaCerrado, true);
})

it("un lunes corriente a las 14hs el banco está abierto", function() {
  assert.equal(estaCerrado, false);
})

it("un sábado corriente a las 14hs el banco está cerrado", function() {
  assert.equal(estaCerrado, true);
})

it("un lunes corriente a las 16hs el banco está cerrado", function() {
  assert.equal(estaCerrado, true);
})