"use strict";
class Videojuego {
    constructor(titulo, horasEstimadas = 10, genero, compañia) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compañia = compañia;
    }
    // Implementación Entregable
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(objeto) {
        if (this.horasEstimadas > objeto.getHorasEstimadas()) {
            return 1;
        }
        else if (this.horasEstimadas < objeto.getHorasEstimadas()) {
            return -1;
        }
        else {
            return 0;
        }
    }
    //GET Y SET DE TITULO
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    //GET Y SET DE HORASESTIMADAS
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    //GET Y SET DE GENERO
    getGenero() {
        return this.genero;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    //GET Y SET DE COMPAÑIA
    getCompañia() {
        return this.compañia;
    }
    setCompañia(compañia) {
        this.compañia = compañia;
    }
    // SOBRESCRIBE TOSTRING
    toString() {
        return `Videojuego:
            Título: ${this.titulo}
            Horas estimadas: ${this.horasEstimadas}
            Entregado: ${this.entregado}
            Género: ${this.genero}
            Compañía: ${this.compañia}`;
    }
}
