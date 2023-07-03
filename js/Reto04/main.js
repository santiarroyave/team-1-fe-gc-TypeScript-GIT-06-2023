var estudiante1 = new Estudiante("Juan", 18, "masculino", 8);
var estudiante2 = new Estudiante("María", 17, "femenino", 7);
var estudiante3 = new Estudiante("Pedro", 16, "masculino", 9);
var estudiante4 = new Estudiante("Ana", 18, "femenino", 4);
var estudiante5 = new Estudiante("Luis", 17, "masculino", 5);
var estudiante6 = new Estudiante("Sara", 16, "femenino", 6);
var estudiante7 = new Estudiante("Carlos", 18, "masculino", 7);
var estudiante8 = new Estudiante("Lucía", 17, "femenino", 8);
var estudiante9 = new Estudiante("Pablo", 16, "masculino", 9);
var estudiante10 = new Estudiante("Carmen", 18, "femenino", 4);
var estudiante11 = new Estudiante("Javier", 17, "masculino", 5);
var estudiante12 = new Estudiante("Laura", 16, "femenino", 6);
var estudiante13 = new Estudiante("Jorge", 18, "masculino", 7);
var estudiante14 = new Estudiante("Sandra", 17, "femenino", 8);
var estudiante15 = new Estudiante("Manuel", 16, "masculino", 9);
var estudiantes = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9, estudiante10, estudiante11, estudiante12, estudiante13, estudiante14, estudiante15];
var aprobadosMasculinos = 0;
var aprobadosFemeninos = 0;
estudiantes.forEach(function (estudiante) {
    if (!estudiante.hacerNovillos()) {
        var calificacion = estudiante.getCalificacion();
        if (calificacion >= 5) {
            if (estudiante.sexo === "masculino") {
                aprobadosMasculinos++;
            }
            else if (estudiante.sexo === "femenino") {
                aprobadosFemeninos++;
            }
        }
    }
});
console.log('Aprobados Masculinos:', aprobadosMasculinos);
console.log('Aprobados Femeninos:', aprobadosFemeninos);
