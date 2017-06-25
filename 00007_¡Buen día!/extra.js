let arcadio = {
  nombre: "Arcadio",
  madre: pilarTernera,
  padre: joseArcadio
}

let pilarTernera = {
  nombre: "Pilar Ternera"
}

let joseArcadio = {
  nombre: "José Arcadio"
}

madreDe(persona) {
  return persona.madre.nombre;
}