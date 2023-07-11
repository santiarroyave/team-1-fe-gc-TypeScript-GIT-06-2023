"use strict";
// Los asientos son etiquetados por una letra (columna) y un número (fila), la fila 1 empieza al final de la matriz como se muestra en la tabla. También deberemos saber si está ocupado o no el asiento.
// 8 A 8 B 8 C 8 D 8 E 8 F 8 G 8 H 8 I
// 7 A 7 B 7 C 7 D 7 E 7 F 7 G 7 H 7 I
// 6 A 6 B 6 C 6 D 6 E 6 F 6 G 6 H 6 I
// 5 A 5 B 5 C 5 D 5 E 5 F 5 G 5 H 5 I
// 4 A 4 B 4 C 4 D 4 E 4 F 4 G 4 H 4 I
// 3 A 3 B 3 C 3 D 3 E 3 F 3 G 3 H 3 I
// 2 A 2 B 2 C 2 D 2 E 2 F 2 G 2 H 2 I
// 1 A 1 B 1 C 1 D 1 E 1 F 1 G 1 H 1 I
let defAsientos = [
    {
        columna: "A",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "B",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "C",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "D",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "E",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "F",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "G",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "H",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    },
    {
        columna: "I",
        filas: [
            { num: 8, espectador: "" },
            { num: 7, espectador: "" },
            { num: 6, espectador: "" },
            { num: 5, espectador: "" },
            { num: 4, espectador: "" },
            { num: 3, espectador: "" },
            { num: 2, espectador: "" },
            { num: 1, espectador: "" }
        ]
    }
];
let defPelicula = "";
let defPrecio = 0;
class Sala {
    // CONSTRUCTORES
    constructor() {
        this.asientos = defAsientos;
        this.pelicula = defPelicula;
        this.precioEntrada = defPrecio;
    }
    // METODOS
    // Getters
    getAsientos() {
        return this.asientos;
    }
    getPelicua() {
        return this.pelicula;
    }
    getPrecio() {
        return this.precioEntrada;
    }
    // Setters
    setPelicula(pelicula) {
        this.pelicula = pelicula;
    }
    setPrecio(precio) {
        this.precioEntrada = precio;
    }
}
