describe("", function() {
  it("Declarada la variable diaDeSemana", function() {
    assert.notEqual(diaDeSemana, "undefined");
  });
    it("Le asigna \"lunes\" diaDeSemana", function() {
    assert.equal(diaDeSemana, "lunes");
  });
    it("deberia imprimir ''Hoy se juega al futbol!!!''", function() {
    assert.equal(console.toString(), "Hoy");
  });
})