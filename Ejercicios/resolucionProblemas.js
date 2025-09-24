// Ejercicio 6: La Falsa Validación
// Objetivo: La función validarEquipo debe revisar un array de objetos (los miembros de un equipo) y devolver true únicamente si todos los miembros tienen su estado en "listo". Si al menos uno no está listo, debe devolver false.

// El problema: La función devuelve true a pesar de que uno de los miembros está "herido".


const equipo = [
  { nombre: "Comandante", estado: "listo" },
  { nombre: "Médico", estado: "listo" },
  { nombre: "Ingeniero", estado: "herido" },
  { nombre: "Artillero", estado: "listo" }
];

function validarEquipo(escuadron) {
  return escuadron.some(miembro => miembro.estado === "listo");
}

const equipoListo = validarEquipo(equipo);
console.log(equipoListo);