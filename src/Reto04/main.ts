
let defNumEstudiantes = 30;
let defNumProfes = 15;

// Generando alumnos y profesores y aulas aleatorios
let estudiantes = new Array(defNumEstudiantes);
let profesores = new Array(defNumProfes);
let aulas = new Array(6);

for (let i = 0; i < estudiantes.length; i++) {
    let alumnoGenerado = genAlumno();
    estudiantes[i] = new Estudiante(alumnoGenerado[0], alumnoGenerado[1], alumnoGenerado[2], alumnoGenerado[3]);
}
for (let i = 0; i < profesores.length; i++) {
    let profeGenerado = genProfe();
    profesores[i] = new Profesor(profeGenerado[0], profeGenerado[1], profeGenerado[2], profeGenerado[3]);
}

for (let z = 0; z < aulas.length; z++) {
    aulas[z] = new Aula(z,materiaRandom(), profesores[numRandom(defNumProfes)], estudiantes);
}

// Mostrando los alumnos y los profesores
console.log("=============================================================");
console.log("Información de las listas");
console.log("=============================================================");
console.log(estudiantes);
console.log(profesores);
console.log(aulas);


// Mostramos qué aulas permiten hacer clase y en tal caso mostramos las personas aprobadas
console.log("=============================================================");
console.log("Alumnos aprobados de las clases que se dan");
console.log("=============================================================");
for (let i = 0; i < aulas.length; i++) {
    if(aulas[i].sePuedeDarClase() == true){
        console.log("==========================");
        console.log(`El aula ${i} si puede dar clase.`);
        aulas[i].mostrarAlumnosAprobados();
    }else{
        console.log(`El aula ${i} no puede dar clase.`);
    }   
}

// console.log("=============================================================");
// console.log("Información de las aulas");
// console.log("=============================================================");
// for (let i = 0; i < aulas.length; i++) {
//     console.log(`Aula: ${i}`);
//     console.log(aulas[i].getInfoAula());
// }
