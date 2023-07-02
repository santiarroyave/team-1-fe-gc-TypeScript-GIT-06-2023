<<<<<<< Updated upstream
"use strict";
class Videojuego {
    constructor(titulo, horasEstimadas = 10, entregado = false, genero, compañia) {
=======
var Videojuego = /** @class */ (function () {
    function Videojuego(titulo, genero, compañia, horasEstimadas) {
        if (horasEstimadas === void 0) { horasEstimadas = 10; }
>>>>>>> Stashed changes
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
        if (objeto instanceof Videojuego) {
            const otroVideojuego = objeto;
            if (this.horasEstimadas < otroVideojuego.horasEstimadas) {
                return -1;
            }
            else if (this.horasEstimadas > otroVideojuego.horasEstimadas) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            throw new Error('El objeto no es una instancia de Videojuego');
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
<<<<<<< Updated upstream
    toString() {
        return `Videojuego:
      Título: ${this.titulo}
      Horas estimadas: ${this.horasEstimadas}
      Entregado: ${this.entregado}
      Género: ${this.genero}
      Compañía: ${this.compañia}`;
    }
}
=======
    Videojuego.prototype.toString = function () {
        return "Videojuego:\n      T\u00EDtulo: ".concat(this.titulo, "\n      Horas estimadas: ").concat(this.horasEstimadas, "\n      Entregado: ").concat(this.entregado, "\n      G\u00E9nero: ").concat(this.genero, "\n      Compa\u00F1\u00EDa: ").concat(this.compañia);
    };
    return Videojuego;
}());
>>>>>>> Stashed changes
