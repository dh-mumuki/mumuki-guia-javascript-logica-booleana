describe("Filósofo Hipster", function() {
  it("filosofoHipster('Músico', 'Argentina', 5)", function() {
    assert.equal(filosofoHipster('Músico', 'Argentina', 5), true)
  });
   it("filosofoHipster('Futbolista', 'Brasil', 12)", function() {
    assert.equal(filosofoHipster('Futbolista', 'Brasil', 12), false)
  });
  it("filosofoHipster('Músico', 'Argentina', 1)", function() {
    assert.equal(filosofoHipster('Músico', 'Argentina', 1), false)
  });
})