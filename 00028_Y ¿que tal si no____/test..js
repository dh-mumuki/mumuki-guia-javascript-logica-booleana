describe("", function() {
  it("hoySeJuega(\"lunes\") debería decir que no se juega ", function() {
    hoySeJuega("lunes")
    assert.equal(console.toString(), "Hoy no se juega al futbol :(\n");
  });
  it("hoySeJuega(\"domingo\") debería decir que se juega ", function() {
    hoySeJuega("domingo")
    assert.equal(console.toString(), "Hoy se juega al futbol!!!\n");
  });
})