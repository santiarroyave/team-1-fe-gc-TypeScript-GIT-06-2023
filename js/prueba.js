"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var videojuegos_1 = require("./videojuegos");
// Crear instancias de Videojuego
var videojuego1 = new videojuegos_1.Videojuego('Videojuego 1', 8, false, 'Compañía 1', 'Compañía 1');
var videojuego2 = new videojuegos_1.Videojuego('Videojuego 2', 2, true, 'Compañía 2', 'Compañía 1');
// Probar métodos de entrega
videojuego1.entregar();
console.log('¿Videojuego 1 entregado?', videojuego1.isEntregado()); // Output: true
videojuego2.devolver();
console.log('¿Videojuego 2 entregado?', videojuego2.isEntregado()); // Output: false
// Probar método compareTo
var resultadoComparacion = videojuego1.compareTo(videojuego2);
if (resultadoComparacion < 0) {
    console.log('Videojuego 1 tiene menos horas estimadas que Videojuego 2');
}
else if (resultadoComparacion > 0) {
    console.log('Videojuego 1 tiene más horas estimadas que Videojuego 2');
}
else {
    console.log('Videojuego 1 y Videojuego 2 tienen la misma cantidad de horas estimadas');
}
// Mostrar información de los Videojuegos
console.log('Información de Videojuego 1:\n', videojuego1.toString());
console.log('Información de Videojuego 2:\n', videojuego2.toString());
