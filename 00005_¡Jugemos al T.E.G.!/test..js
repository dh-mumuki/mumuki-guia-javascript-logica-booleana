it("alguien que cumplió su objetivo secreto y conquistó 25 países ganó el juego", function() {
  assert.equal(gano(true, 25), true);
})

it("alguien que cumplió su objetivo secreto y conquistó 32 países ganó el juego", function() {
  assert.equal(gano(true, 32), true);
})

it("alguien que no cumplió su objetivo secreto y conquistó 32 países ganó el juego", function() {
  assert.equal(gano(false, 32), true);
})

it("alguien que no cumplió su objetivo secreto y conquistó 20 países no ganó el juego", function() {
  assert.equal(gano(false, 20), false);
})