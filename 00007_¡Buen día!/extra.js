let pilarTernera = {
  nombre: "Pilar Ternera"
};

let joseArcadio = {
  nombre: "José Arcadio"
};

let coronelAureliano = {
  nombre: "Coronel Aureliano"
};

let sofiaDeLaPiedad = {
  nombre: "Sofía De La Piedad"
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

let aurelianoSegundo = {
  nombre: "Aureliano Segundo",
  madre: sofiaDeLaPiedad,
  padre: arcadio
};

let remedios = {
  nombre: "Remedios",
  madre: sofiaDeLaPiedad,
  padre: arcadio
};

function madreDe(persona) {
  return persona.madre.nombre;
};

function padreDe(persona) {
  return persona.padre.nombre;
};