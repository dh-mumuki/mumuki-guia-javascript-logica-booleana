describe("", function() {
    it("hoySeJuega(\"domingo\") debería decir que se juega ", function() {
    assert.equal(hoySeJuega("domingo"), "Hoy se juega al futbol!!!\n");
  });
  it("hoySeJuega(\"lunes\") debería decir que no se juega ", function() {
    hoySeJuega("lunes")
    assert.equal(hoySeJuega("lunes"), "Hoy no se juega al futbol :(\n");
  });
})