"use strict";
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
let seriesLista = new Array(5);
let videojuegosLista = new Array(5);
// 5.2. Atributos Videojuego (titulo, horas estimadas, genero y compañia)
videojuegosLista[1] = new Videojuego("Minecraft", 10, "Tipo Abierto", "Mojang");
videojuegosLista[2] = new Videojuego("Mario Bros", 10, "Coches", "Mojang");
videojuegosLista[3] = new Videojuego("Far Cry 6", 10, "Aventura", "Ubisoft");
videojuegosLista[4] = new Videojuego("Fall Guys", 10, "Battle royale", "Mediatonic");
videojuegosLista[5] = new Videojuego("Fortnite", 10, "Battle royale", "Epic Games");
// 5.2. Atributos Serie (titulo, creador)
seriesLista[1] = new Serie("Peaky Blinders", "Steven Knight");
seriesLista[2] = new Serie("Cómo defender a un asesino", "Pete Nowalk");
seriesLista[3] = new Serie("Prison Break", "Paul Scheuring");
seriesLista[4] = new Serie("Juego de Tronos", "George R. R. Martin");
seriesLista[5] = new Serie("The Flash", "Gardner Fox");
// Añadiendo numero temporada series
seriesLista[1].setNumeroTemporadas(6);
seriesLista[2].setNumeroTemporadas(6);
seriesLista[3].setNumeroTemporadas(5);
seriesLista[4].setNumeroTemporadas(8);
seriesLista[5].setNumeroTemporadas(9);
// 5.3. Entregar
videojuegosLista[2].entregar();
videojuegosLista[5].entregar();
seriesLista[1].entregar();
seriesLista[3].entregar();
// 5.4. Cuenta cuantos Series y Videojuegos hay entregados. Al contarlos, devuélvelos.
for (let i = 0; i < videojuegosLista.length; i++) {
    if (videojuegosLista[i].isEntregado() == true) {
        videojuegosLista[i].devolver();
        console.log(`El videojuego ${videojuegosLista[i]} estaba entregado y se ha devuelto.`);
    }
}
for (let i = 0; i < seriesLista.length; i++) {
    if (seriesLista[i].isEntregado() == true) {
        seriesLista[i].devolver();
        console.log(`La serie ${seriesLista[i]} estaba entregado y se ha devuelto`);
    }
}
// 5.5. Por último, indica el Videojuego tiene más horas estimadas y la serie con mas temporadas. Muestralos en pantalla con toda su información (usa el método toString())
