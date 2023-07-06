"use strict";
class Pelicula {
    constructor(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getDuracion() {
        return this.duracion;
    }
    setDuracion(duracion) {
        this.duracion = duracion;
    }
    getEdadMinima() {
        return this.edadMinima;
    }
    setEdadMinima(edadMinima) {
        this.edadMinima = edadMinima;
    }
    getDirector() {
        return this.director;
    }
    setDirector(director) {
        this.director = director;
    }
}
