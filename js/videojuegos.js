"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Videojuego {
    constructor(titulo, horasEstimadas, genero, compañia) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compañia = compañia;
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
exports.default = Videojuego;
