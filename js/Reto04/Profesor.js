"use strict";
class Profesor {
    constructor(nombre, edad, sexo, materia) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.materia = materia;
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
    //GET Y SET DE SEXO
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    //GET Y SET DE MATERIA
    getMateria() {
        return this.materia;
    }
    setMateria(materia) {
        this.materia = materia;
    }
    // Probabilidad de que el profesor este disponible
    estaDisponible() {
        const randomNumber = Math.random();
        return randomNumber >= 0.2;
    }
}
