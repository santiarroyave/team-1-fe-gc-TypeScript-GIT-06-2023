"use strict";
class Profesor extends Usuarios {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
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
        // Se considera disponible si devuelve true
        let random = Math.random();
        if (random < 0.8) {
            return true;
        }
        else {
            return false;
        }
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
