"use strict";
let ecuacion = new Raices(1, -3, 2);
console.log(`Discriminante: ${ecuacion.getDiscriminante()}`);
console.log(`¿Tiene raíces? ${ecuacion.tieneRaices()}`);
console.log(`¿Tiene raíz única? ${ecuacion.tieneRaiz()}`);
ecuacion.calcular();
ecuacion.obtenerRaices();
ecuacion.obtenerRaiz();
