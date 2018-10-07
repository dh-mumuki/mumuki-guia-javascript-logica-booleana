it("arcadio y aurelianoJose son medios hermanos", function() {
  assert.equal(sonMedioHermanos(arcadio, aurelianoJose), true);
})

it("aurelianoSegundo y remedios no son medios hermanos", function() {
  assert.equal(sonMedioHermanos(aurelianoSegundo, remedios), false);
})

it("aurelianoSegundo y aurelianoJose no son medios hermanos", function() {
  assert.equal(sonMedioHermanos(aurelianoSegundo, aurelianoJose), false);
})

it("remedios y arcadio no son medios hermanos", function() {
  assert.equal(sonMedioHermanos(remedios, arcadio), false);
})