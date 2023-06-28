"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Videojuego = /** @class */ (function () {
    function Videojuego(titulo, horasEstimadas, genero, compañia) {
        if (horasEstimadas === void 0) { horasEstimadas = 10; }
        if (genero === void 0) { genero = ""; }
        if (compañia === void 0) { compañia = ""; }
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compañia = compañia;
    }
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
    return Videojuego;
}());
exports.default = Videojuego;
