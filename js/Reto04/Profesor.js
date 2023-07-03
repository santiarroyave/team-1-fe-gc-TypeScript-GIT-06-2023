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
//const profesor = new Profesor("Juan", 35, "masculino", "matemáticas");
//console.log("Edad del profesor:", profesor.getEdad());
//console.log("Nombre del profesor:", profesor.getNombre());
//console.log("Sexo del profesor:", profesor.getSexo());
//console.log("Materia del profesor:", profesor.getMateria());
//profesor.setNombre("Pedro");
//profesor.setEdad(40);
//profesor.setSexo("femenino");
//profesor.setMateria("física");
//console.log("Nombre actualizado del profesor:", profesor.getNombre());
//console.log("Edad actualizada del profesor:", profesor.getEdad());
//console.log("Sexo actualizado del profesor:", profesor.getSexo());
//console.log("Materia actualizada del profesor:", profesor.getMateria());
