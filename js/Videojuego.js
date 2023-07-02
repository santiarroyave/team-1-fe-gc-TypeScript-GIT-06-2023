"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Videojuego = /** @class */ (function () {
    function Videojuego(titulo, genero, compañia, horasEstimadas) {
        if (horasEstimadas === void 0) { horasEstimadas = 10; }
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compañia = compañia;
    }
    // Implementación Entregable
    Videojuego.prototype.entregar = function () {
        this.entregado = true;
    };
    Videojuego.prototype.devolver = function () {
        this.entregado = false;
    };
    Videojuego.prototype.isEntregado = function () {
        return this.entregado;
    };
    Videojuego.prototype.compareTo = function (objeto) {
        if (this.horasEstimadas > objeto.getHorasEstimadas()) {
            return 1;
        }
        else if (this.horasEstimadas < objeto.getHorasEstimadas()) {
            return -1;
        }
        else {
            return 0;
        }
    };
    //GET Y SET DE TITULO
    Videojuego.prototype.getTitulo = function () {
        return this.titulo;
    };
    Videojuego.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    //GET Y SET DE HORASESTIMADAS
    Videojuego.prototype.getHorasEstimadas = function () {
        return this.horasEstimadas;
    };
    Videojuego.prototype.setHorasEstimadas = function (horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    };
    //GET Y SET DE GENERO
    Videojuego.prototype.getGenero = function () {
        return this.genero;
    };
    Videojuego.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    //GET Y SET DE COMPAÑIA
    Videojuego.prototype.getCompañia = function () {
        return this.compañia;
    };
    Videojuego.prototype.setCompañia = function (compañia) {
        this.compañia = compañia;
    };
    // SOBRESCRIBE TOSTRING
    Videojuego.prototype.toString = function () {
        return "Videojuego:\n      T\u00EDtulo: ".concat(this.titulo, "\n      Horas estimadas: ").concat(this.horasEstimadas, "\n      Entregado: ").concat(this.entregado, "\n      G\u00E9nero: ").concat(this.genero, "\n      Compa\u00F1\u00EDa: ").concat(this.compañia);
    };
    return Videojuego;
}());
