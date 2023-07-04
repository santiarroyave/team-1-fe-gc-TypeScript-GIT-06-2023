let estudiante1 = new Estudiante("Juan", 18, "masculino", 8);
let estudiante2 = new Estudiante("María", 17, "femenino", 7);
let estudiante3 = new Estudiante("Pedro", 16, "masculino", 9);
let estudiante4 = new Estudiante("Ana", 18, "femenino", 4);
let estudiante5 = new Estudiante("Luis", 17, "masculino", 5);
let estudiante6 = new Estudiante("Sara", 16, "femenino", 6);
let estudiante7 = new Estudiante("Carlos", 18, "masculino", 7);
let estudiante8 = new Estudiante("Lucía", 17, "femenino", 8);
let estudiante9 = new Estudiante("Pablo", 16, "masculino", 9);
let estudiante10 = new Estudiante("Carmen", 18, "femenino", 4);
let estudiante11 = new Estudiante("Javier", 17, "masculino", 5);
let estudiante12 = new Estudiante("Laura", 16, "femenino", 6);
let estudiante13 = new Estudiante("Jorge", 18, "masculino", 7);
let estudiante14 = new Estudiante("Sandra", 17, "femenino", 8);
let estudiante15 = new Estudiante("Manuel", 16, "masculino", 9);


let estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9, estudiante10, estudiante11, estudiante12, estudiante13, estudiante14, estudiante15];

let aprobadosMasculinos = 0;
let aprobadosFemeninos = 0;

estudiantes.forEach((estudiante) => {
    if (!estudiante.hacerNovillos()) {
        const calificacion = estudiante.getCalificacion();
        if (calificacion >= 5) {
            if (estudiante.sexo === "masculino") {
                aprobadosMasculinos++;
            } else if (estudiante.sexo === "femenino") {
                aprobadosFemeninos++;
            }
        }
    }
});

console.log('Aprobados Masculinos:', aprobadosMasculinos);
console.log('Aprobados Femeninos:', aprobadosFemeninos);