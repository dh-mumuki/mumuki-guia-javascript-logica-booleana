describe("", function() {
  it("Declarada y asignada la variable diaDeSemana", function() {
    assert.equal(diaDeSemana, "domingo");
  });
    it("deberia imprimir ''Hoy se juega al futbol!!!''", function() {
    assert.equal(console.toString(), "Hoy se juega al futbol");
  });
})