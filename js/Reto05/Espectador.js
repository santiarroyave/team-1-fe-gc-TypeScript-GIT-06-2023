"use strict";
class Espectador {
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    //GET Y SET DE NOMBRE
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    //GET Y SET DE EDAD
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    //GET Y SET DE DINERO
    getDinero() {
        return this.dinero;
    }
    setDinero(dinero) {
        this.dinero = dinero;
    }
}
//const espectador = new Espectador("Juan", 25, 50);
//console.log(espectador.getNombre()); // Output: Juan
//console.log(espectador.getEdad()); // Output: 25
//console.log(espectador.getDinero()); // Output: 50
