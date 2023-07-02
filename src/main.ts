// Ejecutable

// 1- Crear clase "Serie"
// 2- Crear clase "Videojuego"
// 3- Crear interfaz "Entregable"

// 4- Implementar métodos de la interfaz
// 5- Crear aplicación ejecutable


// Paso 5
// Ahora crea una aplicación ejecutable y realiza lo siguiente:
// • 5.1. Crea dos arrays, uno de Series y otro de Videojuegos, de 5 posiciones cada uno.
// • 5.2. Crea un objeto en cada posición del array, con los valores que desees, puedes usar distintos constructores.

// • 5.3. Entrega algunos Videojuegos y Series con el método entregar().
// • 5.4. Cuenta cuantos Series y Videojuegos hay entregados. Al contarlos, devuélvelos.
// • 5.5. Por último, indica el Videojuego tiene más horas estimadas y la serie con mas temporadas. Muestralos en pantalla con toda su información (usa el método toString()).


// 5.1.
console.log("Iniciando programa");
console.log("5.1. Creando arrays");
let seriesLista = new Array(5);
let videojuegosLista = new Array(5);


// 5.2. Atributos Videojuego (titulo, horas estimadas, genero y compañia)
console.log("5.2. Creando objetos en cada posición de los arrays");
videojuegosLista[0] = new Videojuego("Minecraft", 10, "Tipo Abierto","Mojang");
videojuegosLista[1] = new Videojuego("Mario Bros", 10, "Coches","Mojang");
videojuegosLista[2] = new Videojuego("Far Cry 6", 10, "Aventura", "Ubisoft");
videojuegosLista[3] = new Videojuego("Fall Guys", 10, "Battle royale", "Mediatonic");
videojuegosLista[4] = new Videojuego("Fortnite", 10, "Battle royale", "Epic Games");

// 5.2. Atributos Serie (titulo, creador)
seriesLista[0] = new Serie("Peaky Blinders", "Steven Knight");
seriesLista[1] = new Serie("Cómo defender a un asesino", "Pete Nowalk");
seriesLista[2] = new Serie("Prison Break", "Paul Scheuring");
seriesLista[3] = new Serie("Juego de Tronos", "George R. R. Martin");
seriesLista[4] = new Serie("The Flash", "Gardner Fox");

console.log("Mostrando array de los Videojuegos:");
console.log(videojuegosLista);
console.log("Mostrando array de las Series:");
console.log(seriesLista);


// Añadiendo numero temporada series
console.log("Añadiendo numero de temporadas a las series");
seriesLista[0].setNumeroTemporadas(6); 
seriesLista[1].setNumeroTemporadas(6); 
seriesLista[2].setNumeroTemporadas(5); 
seriesLista[3].setNumeroTemporadas(8); 
seriesLista[4].setNumeroTemporadas(9);

console.log("Mostrando nº temporadas de prueba: " + seriesLista[4].getNumeroTemporadas());



// 5.3. Entregar
console.log("5.3. Entregar algunos videojuegos");
console.log("entregado videojuego Mario Bros antes: " + videojuegosLista[1].isEntregado());
videojuegosLista[1].entregar();
console.log("entregado videojuego Mario Bros después: " + videojuegosLista[1].isEntregado());
videojuegosLista[4].entregar();

console.log("Entregar algunas series");
console.log("entregado serie Peaky Blinders antes: " + seriesLista[1].isEntregado());
seriesLista[1].entregar();
console.log("entregado serie Peaky Blinders después: " + seriesLista[1].isEntregado());
seriesLista[3].entregar();


// 5.4. Cuenta cuantas Series y Videojuegos hay entregados. Al contarlos, devuélvelos.
console.log("Videojuegos entregados:")
for (let i = 0; i < videojuegosLista.length; i++) {
    if(videojuegosLista[i].isEntregado() == true){
        console.log(`${videojuegosLista[i]}`);
    }
    
}
console.log("Se han devuelto correctamente.");


console.log("Series entregadas:")
for (let i = 0; i < seriesLista.length; i++) {
    if(seriesLista[i].isEntregado() == true){
        seriesLista[i].devolver();
        
        console.log(`La serie ${seriesLista[i]} estaba entregado y se ha devuelto`);
    }
}
console.log("Se han devuelto correctamente.");

// 5.5. Por último, indica el Videojuego tiene más horas estimadas y la serie con mas temporadas. Muestralos en pantalla con toda su información (usa el método toString())
console.log("5.5. Indicar videojuego con mas horas:");

let videojuegoMasHoras = videojuegosLista[0];
for (let i = 1; i < videojuegosLista.length; i++) {
    if (videojuegosLista[i].getHorasEstimadas() > videojuegoMasHoras.getHorasEstimadas()) {
    videojuegoMasHoras = videojuegosLista[i];
    }
}
console.log(videojuegoMasHoras.toString());

console.log("Indicar serie con mas temporadas:");

let serieMasTemporadas = seriesLista[0];
for (let i = 1; i < seriesLista.length; i++) {
    if (seriesLista[i].getNumeroTemporadas() > serieMasTemporadas.getNumeroTemporadas()) {
    serieMasTemporadas = seriesLista[i];
    }
}
console.log(serieMasTemporadas.toString());