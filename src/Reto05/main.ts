
// Realizaremos una pequeña simulación, en el que generaremos muchos espectadores y los sentaremos aleatoriamente (no podemos donde ya este ocupado).
// En esta versión sentaremos a los espectadores de uno en uno.
// Solo se podrá sentar si tienen el suficiente dinero, hay espacio libre y tiene edad para ver la película, en caso de que el asiento este ocupado le buscamos uno libre.
// Los datos del espectador y la película pueden ser totalmente aleatorios.



// Generamos Espectadores
let espectadores = new Array(50);
for (let i = 0; i < espectadores.length; i++) {
    let espectadorGenerado = genEspectador();
    espectadores[i] = new Espectador(espectadorGenerado[0], espectadorGenerado[1], espectadorGenerado[2]);
}

// Generamos Peliculas
let peliculas = new Array(15);
for (let i = 0; i < peliculas.length; i++) {
    let peliculaGenerada = genPelicula();
    peliculas[i] = new Pelicula(peliculaGenerada[0], peliculaGenerada[1], peliculaGenerada[2], peliculaGenerada[3]);
}

// Generamos Sala de cine
let cine = new Sala();
cine.setPelicula(peliculas[numRandomMax(15)].titulo);
cine.setPrecio(numRandomMinMax(5,10));
// cine.setPelicula = peliculas[numRandomMax(15)];
// cine.setPrecio = numRandomMinMax(5,10);


// Mostramos datos
console.log("____________________________________________");
console.log("DATOS GENERADOS ALEATORIAMENTE");
console.log("Espectadores:");
console.log(espectadores);
console.log("Peliculas:");
console.log(peliculas);
console.log("Sala de Cine:");
console.log(cine);
console.log("____________________________________________");

