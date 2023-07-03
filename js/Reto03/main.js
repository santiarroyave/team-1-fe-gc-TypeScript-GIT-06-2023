var ecuacion = new Raices(1, -3, 2);
console.log("Discriminante: ".concat(ecuacion.getDiscriminante()));
console.log("\u00BFTiene ra\u00EDces? ".concat(ecuacion.tieneRaices()));
console.log("\u00BFTiene ra\u00EDz \u00FAnica? ".concat(ecuacion.tieneRaiz()));
ecuacion.calcular();
ecuacion.obtenerRaices();
ecuacion.obtenerRaiz();
