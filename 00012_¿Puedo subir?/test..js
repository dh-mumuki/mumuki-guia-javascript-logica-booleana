it("alguien que mide 1.5 metros, no esta acompañada por un adulto y no tiene afecciones cardíacas puede subirse a la atracción", function() {
  assert.equal(puedeSubirse(1.5, false, false), true);
})