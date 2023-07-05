"use strict";
let nombres = ["Juan", "Pedro", "Carlos", "Luis", "Alejandro", "Andrés", "Gabriel", "Diego", "José", "Miguel", "María", "Ana", "Laura", "Andrea", "Sofía", "Carolina", "Gabriela", "Natalia", "Valentina", "Isabella"];
const genProfe = () => {
    let rNombre = nombres[numRandom(20)];
    let rSexo = sexoRandom();
    let rEdad = edadRandom(30, 60);
    let rMateria = materiaRandom();
    return [rNombre, rEdad, rSexo, rMateria];
};
const genAlumno = () => {
    let rNombre = nombres[numRandom(20)];
    let rSexo = sexoRandom();
    let rEdad = edadRandom(16, 24);
    let rNota = notaRandom(0, 10);
    return [rNombre, rEdad, rSexo, rNota];
};
const numRandom = (max) => {
    return Math.floor(Math.random() * max);
};
const sexoRandom = () => {
    if (Math.random() < 0.5) {
        return "masculino";
    }
    else {
        return "femenino";
    }
};
const edadRandomProfe = (max) => {
    return Math.floor(Math.random() * max);
};
const edadRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const materiaRandom = () => {
    let numRandom = Math.random();
    if (numRandom < 0.3) {
        return "matemáticas";
    }
    else if (0.3 < numRandom && numRandom < 0.6) {
        return "filosofía";
    }
    else {
        return "física";
    }
};
const notaRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
