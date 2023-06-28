import { Videojuego } from './Videojuegos';

const videojuego1 = new Videojuego('Videojuego 1', 8, false, 'Compañía 1', 'Compañía 1' );
const videojuego2 = new Videojuego('Videojuego 2', 2, true, 'Compañía 2', 'Compañía 1' );

videojuego1.entregar();
console.log('¿Videojuego 1 entregado?', videojuego1.isEntregado());

videojuego2.devolver();
console.log('¿Videojuego 2 entregado?', videojuego2.isEntregado());

const resultadoComparacion = videojuego1.compareTo(videojuego2);
if (resultadoComparacion < 0) {
  console.log('Videojuego 1 tiene menos horas estimadas que Videojuego 2');
} else if (resultadoComparacion > 0) {
  console.log('Videojuego 1 tiene más horas estimadas que Videojuego 2');
} else {
  console.log('Videojuego 1 y Videojuego 2 tienen la misma cantidad de horas estimadas');
}

console.log('Información de Videojuego 1:\n', videojuego1.toString());
console.log('Información de Videojuego 2:\n', videojuego2.toString());