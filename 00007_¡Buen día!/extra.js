let pilarTernera = {
  nombre: "Pilar Ternera"
};

let joseArcadio = {
  nombre: "José Arcadio"
};

let coronelAureliano = {
  nombre: "Coronel Aureliano"
};

let arcadio = {
  nombre: "Arcadio",
  madre: pilarTernera,
  padre: joseArcadio
};

let aurelianoJose = {
  nombre: "Arcadio",
  madre: pilarTernera,
  padre: coronelAureliano
};

function madreDe(persona) {
  return persona.madre.nombre;
};

function padreDe(persona) {
  return persona.padre.nombre;
};