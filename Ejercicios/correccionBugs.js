// //Contar las vocales en un mensaje de texto.

// const analyzeMessage = (message) => {
//     message = message.toLowerCase()
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     for (let i = 0; i < message.length; i++) {
//         if (vowels.includes(message[i])) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// };

// console.log(analyzeMessage("eello World"));



// function countVowels(message) {
//     let count = 0;
//     let arr = message.split('');
//     arr.forEach(letter => {
//         if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//             count++
//         }
//     })
//     return count;
// }

// console.log(countVowels('hola mundo hermoso'))





// // Ejercicio 2: El Reordenador de Zombis 🧟‍♂️
// // Tienes razón, a primera vista el código parece funcionar perfectamente. Pero si te fijas bien, hay un pequeño error de concepto en el código.

// // JavaScript

// const zombis = [
//     { name: 'Gordy', strength: 8 },
//     { name: 'Pato', strength: 4 },
//     { name: 'Zeke', strength: 7 },
//     { name: 'Kiki', strength: 3 }
// ];

// const strongZombies = (zombies) => {
//     const result = zombies.filter(zombie => zombie.strength > 5);
//     return result.map(zombie => zombie.name);
// };

// console.log(strongZombies(zombis));

// //Considero que zombie.strength > 5 es un poco ambiguo ya que si de repente todos o casi todos tus zombies superan los 5 entoncs todos van a ser los más fuertes. Lo importante acá es rearmar el sistema de fuerza para que solo muestre los que son realmente fuertes sin importar su fuerza. 

// const zombiesFuertes = function (zombies) {
//     return zombies.reduce((acc, curr) => {
//         if (acc.strength < curr.strength) {
//             return curr
//         }
//         else {
//             return acc;
//         }
//     })
// }

// console.log(zombiesFuertes(zombis))





// // Ejercicio 3: La Base de Datos de Supervivientes 👤
// // El objetivo de esta función es tomar un array de objetos de "supervivientes", y para cada uno, crear un nuevo objeto que combine la información de su perfil básico con una lista de sus habilidades. El código usa el operador rest (...) y un bucle for...of.




// const survivors = [
//     { id: 1, name: 'Jess', role: 'Scout' },
//     { id: 2, name: 'Max', role: 'Medic' }
// ];

// const survivorSkills = {
//     1: ['agile', 'stealth'],
//     2: ['first aid', 'surgery']
// };

// const getSurvivorsWithSkills = (survivors, skills) => {
//     const result = [];
//     for (let survivor of survivors) {
//         const survivorId = survivor.id;
//         const survivorSkills = skills[survivorId];
//         result.push({ ...survivor, skills: survivorSkills });
//     }
//     return result;
// };

// console.log(getSurvivorsWithSkills(survivors, survivorSkills));

// //1-const survivor en un bucle for?
// //2-el bucle estaba mal, habia que usar bucle for of no bucle for in





// // Ejercicio 4: El Decodificador de Mensajes 🤫
// // Aquí está el código que debería invertir un string, como si estuvieras descifrando un mensaje de un enemigo en un juego.


// const decodeMessage = (secret) => {
//     let decoded = "";
//     for (let i = 0; i < secret.length; i++) { //se contradecia tener el <= de length con el length -1 abajo. 
//         decoded += secret[secret.length - 1 - i];
//     }
//     return decoded;
// };

// console.log(decodeMessage("dlrow olleh"));




// // Ejercicio 5 (Versión 2.0): El Rastreador de Zombis 🧟‍♂️
// // El objetivo de esta función es buscar zombis por su nombre dentro de un array de objetos. El código debería devolver el objeto del zombi si lo encuentra.

// const zombieHorde = [
//     { name: 'Gordy', strength: 8 },
//     { name: 'Pato', strength: 4 },
//     { name: 'Zeke', strength: 7 }
// ];

// const findZombie = (zombies, name) => {
//     let obj = {}
//     zombies.forEach(zombie => {
//         return Object.values(zombie).some(z => {
//             if (typeof z == 'string' && z.toLowerCase() == name) {
//                 obj.name = zombie.name,
//                     obj.strength = zombie.strength
//             }
//         })
//     });
//     return obj
// };

// console.log(findZombie(zombieHorde, 'pato'));




// // Ejercicio 6: El Registro de Puntuaciones 🕹️
// // El objetivo es crear una función que tome un array de objetos, donde cada objeto representa un jugador con su nombre y puntuación. La función debe:
// // Sumar todas las puntuaciones de los jugadores.
// // Devolver un objeto con el nombre del jugador que tiene el puntaje más alto.




// const players = [
//     { name: 'Jess', score: 120 },
//     { name: 'Max', score: 150 },
//     { name: 'Chloe', score: 85 },
// ];

// function analyzeScores(players) {

//     return players.reduce((acc, curr) => {
//         let total = acc.score + curr.score;
//         if (acc.score > curr.score) {
//             return {...acc, total}
//         }
//         else {
//             return {...curr, total}
//         }

//     })

// }

// console.log(analyzeScores(players));




// // Ejercicio 7: El Sistema de Defensa 🛡️


// const defenseSystem = [
//   { name: 'Pistol', power: 25, ammo: 100 },
//   { name: 'Shotgun', power: 50, ammo: 50 },
//   { name: 'Rifle', power: 100, ammo: 20 },
// ];

// function calculateTotalPower(weapons) {
//   let totalPower = 0;
//   for (const weapon of weapons) {
//     totalPower += weapon.power;
//   }
//   return totalPower;
// }

// console.log(calculateTotalPower(defenseSystem));





// // ## Ejercicio: El Formateador de Frases Rebelde
// // Propósito de la función: La función formatSentence recibe un string.

// // Valor que debe retornar: Debe devolver una nueva frase correctamente formateada. Esto significa que la primera letra debe estar en mayúscula y la frase debe terminar con un punto.

// // Un programador intentó crear esta función, pero por alguna razón, la primera letra de la frase se niega a cambiar a mayúscula.


// function formatSentence(sentence) {
//   // Intenta capitalizar la primera letra directamente
// //   sentence[0] = sentence[0].toUpperCase();
//   sentence = sentence.replace(sentence[0], sentence[0].toUpperCase())

//   // Revisa si el último caracter es un punto y lo añade si no está
//   if (sentence[sentence.length - 1] !== '.') {
//     sentence = sentence + '.';
//   }

//   return sentence;
// }

// const frase1 = "hola mundo";
// const frase2 = "esta es una oración que ya termina con un punto.";

// console.log(formatSentence(frase1));
// console.log(formatSentence(frase2));

// // Resultado esperado para frase1: "Hola mundo."
// // Resultado actual para frase1:   "hola mundo."

// // Resultado esperado para frase2: "Esta es una oración que ya termina con un punto."
// // Resultado actual para frase2:   "esta es una oración que ya termina con un punto."

// const usuarios = [
//   { id: 1, nombre: "Elena", activo: true },
//   { id: 2, nombre: "Carlos", activo: false },
//   { id: 3, nombre: "Ana", activo: true }
// ];

// // Objetivo: La función debe devolver un nuevo array solo con los nombres de los usuarios activos.
// // Problema: La función devuelve `undefined`.

// function getNombresDeActivos(listaUsuarios) {
//   const nombresActivos = listaUsuarios.filter(usuario => {
//     if (usuario.activo) {
//       return usuario.nombre;
//     }
//   });
//   return nombresActivos.map(n =>{
//     return n.nombre
//   })
// }

// const resultado = getNombresDeActivos(usuarios);
// console.log(resultado);



// const inventario = [
//   { id: 101, nombre: "Poción de vida" },
//   { id: 102, nombre: "Espada de hierro" },
//   { id: 103, nombre: "Escudo de madera" }
// ];

// function encontrarItemPorId(items, idBuscado) {
//   return items.filter(item => item.id == idBuscado);
// }

// const itemEncontrado = encontrarItemPorId(inventario, 102);
// console.log(itemEncontrado);

// const punto = {
//   x: 150,
//   y: 320,
//   z: 100 // Esta propiedad no se usa
// };

// function imprimirCoordenadas({x,y}) {
//   console.log(`Coordenada X: ${x}`);
//   console.log(`Coordenada Y: ${y}`);
// }

// imprimirCoordenadas(punto);


// // Objetivo: La función `removerItem` debe devolver un nuevo array sin el item
// // en la posición `indiceARemover`, PERO sin modificar el array original.

// // Problema: La función está modificando el array original, lo cual no es el
// // comportamiento esperado.

// const inventarioInicial = ["Espada", "Escudo", "Poción", "Arco"];

// function removerItem(inventario, indiceARemover) {
//   const nuevoInventario = inventario.slice(1,2);
//   return inventario;
// }

// const inventarioActualizado = removerItem(inventarioInicial, 2);

// console.log("Inventario Actualizado:", inventarioActualizado);
// console.log("Inventario Original:", inventarioInicial);



// // Objetivo: La función `getStat` debe recibir el nombre de una estadística (como string)
// // y devolver el valor de esa estadística del objeto `playerStats`.

// // Problema: La función siempre devuelve `undefined`, en lugar del valor numérico
// // de la estadística solicitada.

// const playerStats = {
//   health: 100,
//   mana: 80,
//   stamina: 120
// };

// function getStat(statName) {
//   return playerStats[statName];
// }

// console.log(getStat('stamina'));


// function saludar({nombre}) {
//   nombre = nombre ?? 'invitado'
//   console.log(`¡Hola, ${nombre}!`);
// }

// const usuario1 = { nombre: "Solid Snake", clan: "Foxhound" };
// const usuario2 = { clan: "Diamond Dogs" }; // Este no tiene nombre

// saludar(usuario1);
// saludar(usuario2); 


// const jugadores = [
//   { nombre: "Eivor", clan: "Cuervo", nivel: 50 },
//   { nombre: "Kassandra", clan: "Águila", nivel: 99 },
//   { nombre: "Aloy", clan: "Nora", nivel: 60 },
//   { nombre: "Varl", clan: "Nora", nivel: 55 }
// ];

// function getRosterPorClan(listaJugadores, nombreClan) {
//   const rosterFiltrado = listaJugadores.filter(jugador => {
//     return jugador.clan === nombreClan;
//   });
  
//   const rosterFormateado = rosterFiltrado.map(jugador => {
//     return `${jugador.nombre} (Nivel ${jugador.nivel})`;
//   });

//   return rosterFormateado;
// }

// const rosterNora = getRosterPorClan(jugadores, "Nora");
// console.log(rosterNora);



const inventario = [
  { nombre: "Poción de vida", categoria: "Consumibles" },
  { nombre: "Espada de hierro", categoria: "Armas" },
  { nombre: "Manzana", categoria: "Consumibles" },
  { nombre: "Arco de madera", categoria: "Armas" },
  { nombre: "Elixir", categoria: "Consumibles" },
];

function agruparPorCategoria(items) {
  const inventarioAgrupado = {};
  items.forEach(item => {
    const categoria = item.categoria;
    inventarioAgrupado[categoria] = []
    inventarioAgrupado[categoria].push(item.nombre)
  });

  return inventarioAgrupado;
}

const resultado = agruparPorCategoria(inventario);
console.log(resultado);
/* El resultado esperado es:
{
  Consumibles: ["Poción de vida", "Manzana", "Elixir"],
  Armas: ["Espada de hierro", "Arco de madera"]
}
*/



function esPalindromo(texto) {
  const textoLimpio = texto.toLowerCase().replace(" ", "");
  const textoInvertido = textoLimpio.split('').reverse().join('');
  return textoLimpio === textoInvertido;
}

console.log(esPalindromo("Neuquen")); // Debería devolver true
console.log(esPalindromo("Anita lava la tina")); // Debería devolver true
console.log(esPalindromo("Hola")); 


const equipo = [
  { nombre: 'Aragorn', puntos: 150, estado: 'activo' },
  { nombre: 'Legolas', puntos: 200, estado: 'activo' },
  { nombre: 'Gimli', puntos: 120, estado: 'lesionado' }
];

function calcularPuntajeTotal(jugadores) {
  return jugadores.reduce((total, jugador) => {
    if(jugador.estado != 'lesionado'){
    return total += jugador.puntos;
    }
    else{
        return total += (jugador.puntos /2)
    }
  }, 0);
}

const puntajeFinal = calcularPuntajeTotal(equipo);
console.log(puntajeFinal)



// Objetivo: La función `filtrarJugadoresElite` debe devolver un array con los nombres
// de los jugadores cuyo nivel, anidado dentro de `stats`, sea 90 o superior.

// Problema: La función siempre devuelve un array vacío. No está accediendo
// correctamente a la propiedad `nivel` para hacer la comparación.

const jugadores = [
  { nombre: 'Kratos', stats: { nivel: 95, clase: 'Guerrero' } },
  { nombre: 'Aloy', stats: { nivel: 85, clase: 'Cazadora' } },
  { nombre: 'Jin Sakai', stats: { nivel: 90, clase: 'Samurai' } }
];

function filtrarJugadoresElite(listaJugadores) {
  const jugadoresElite = listaJugadores.filter(jugador => {
    return jugador.stats.nivel >= 90;
  });
  
  return jugadoresElite.map(jugador => jugador.nombre);
}

const elite = filtrarJugadoresElite(jugadores);
console.log(elite); // Debería ser ['Kratos', 'Jin Sakai']




const personajes = [
  { nombre: "Ciri", habilidades: ["Teletransporte", "Esgrima"] },
  { nombre: "Geralt", habilidades: ["Esgrima", "Alquimia", "Señales"] },
  { nombre: "Yennefer", habilidades: ["Magia", "Teletransporte"] }
];

function obtenerHabilidadesUnicas(listaPersonajes) {
  let todasLasHabilidades = [];

  listaPersonajes.forEach(personaje => {
    personaje.habilidades.some(skill =>{
      if(!todasLasHabilidades.includes(skill)){
        todasLasHabilidades.push(skill)
      }
    })
  });

  return todasLasHabilidades;
}

const habilidades = obtenerHabilidadesUnicas(personajes);
console.log(habilidades);


function crearMultiplicador(factor) {
  return function(numero) {
    const resultado = factor * numero;
    return resultado;
  }
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(10));
console.log(triplicar(5));



const personaje = {
  id: 'player-1',
  nombre: 'Scorpion',
  salud: 100,
  movimientoSecreto: 'Toasty!'
};

function removerPropiedadSecreta(obj, propiedadARemover) {
  let newObj = {...obj}  
  delete newObj[propiedadARemover];
  return newObj;
}

const perfilPublico = removerPropiedadSecreta(personaje, 'movimientoSecreto');

console.log("Perfil Público:", perfilPublico);
console.log("Personaje Original:", personaje);




const misiones = [
  { id: 'm01', puntuacion: 95 },
  { id: 'm02', puntuacion: 80 },
  { id: 'm03', puntuacion: 100 }
];

function calcularPromedio(reportes) {
  const totalPuntos = reportes.reduce((acumulador, reporte) => {
    if(typeof reporte.puntuacion == 'number'){
        return acumulador += reporte.puntuacion;
    }
    else{
        return acumulador
    }
  }, 0);
  console.log(totalPuntos);
  return totalPuntos / reportes.length;
}

const promedioGeneral = calcularPromedio(misiones);
console.log(promedioGeneral);