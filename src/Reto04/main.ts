const estudiante1 = new Estudiante("Juan", 18, "masculino", 8);
const estudiante2 = new Estudiante("María", 17, "femenino", 7);
const estudiante3 = new Estudiante("Pedro", 16, "masculino", 9);
const estudiante4 = new Estudiante("Ana", 18, "femenino", 4);
const estudiante5 = new Estudiante("Luis", 17, "masculino", 5);
const estudiante6 = new Estudiante("Sara", 16, "femenino", 6);
const estudiante7 = new Estudiante("Carlos", 18, "masculino", 7);
const estudiante8 = new Estudiante("Lucía", 17, "femenino", 8);
const estudiante9 = new Estudiante("Pablo", 16, "masculino", 9);
const estudiante10 = new Estudiante("Carmen", 18, "femenino", 4);
const estudiante11 = new Estudiante("Javier", 17, "masculino", 5);
const estudiante12 = new Estudiante("Laura", 16, "femenino", 6);
const estudiante13 = new Estudiante("Jorge", 18, "masculino", 7);
const estudiante14 = new Estudiante("Sandra", 17, "femenino", 8);
const estudiante15 = new Estudiante("Manuel", 16, "masculino", 9);


const estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9, estudiante10, estudiante11, estudiante12, estudiante13, estudiante14, estudiante15];

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