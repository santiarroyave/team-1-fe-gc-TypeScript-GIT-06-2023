// Queremos representar con programación orientada a objetos, un aula con estudiantes y un
// profesor.
// Tanto de los estudiantes como de los profesores necesitamos saber su nombre, edad y sexo. De los
// estudiantes, queremos saber también su calificación actual (entre 0 y 10) y del profesor que materia
// da.
// Las materias disponibles son matemáticas, filosofía y física.
// Los estudiantes tendrán un 50% de hacer novillos, por lo que si hacen novillos no van a clase pero
// aunque no vayan quedara registrado en el aula (como que cada uno tiene su sitio).
// El profesor tiene un 20% de no encontrarse disponible (reuniones, baja, etc.)
// Las dos operaciones anteriores deben llamarse igual en Estudiante y Profesor (polimorfismo).
// *Reto 4
// El aula debe tener un identificador numérico, el número máximo de estudiantes y para que esta
// destinada (matemáticas, filosofía o física). Piensa que más atributos necesita.
// Un aula para que se pueda dar clase necesita que el profesor esté disponible, que el profesor de la
// materia correspondiente en el aula correspondiente (un profesor de filosofía no puede dar en un
// aula de matemáticas) y que haya más del 50% de alumnos.
// El objetivo es crear un aula de alumnos y un profesor y determinar si puede darse clase, teniendo
// en cuenta las condiciones antes dichas.
// Si se puede dar clase mostrar cuantos alumnos y alumnas (por separado) están aprobados de
// momento (imaginad que les están entregando las notas).
// NOTA: Los datos pueden ser aleatorios (nombres, edad, calificaciones, etc.) siempre y cuando
// tengan sentido (edad no puede ser 80 en un estudiante o calificación ser 12).

class Estudiante {
    nombre: string;
    edad: number;
    sexo: string;
    calificacion: number;
    haceNovillos: any;

    constructor(nombre: string, edad: number, sexo: string, calificacion: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.calificacion = calificacion;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getSexo() {
        return this.sexo;
    }

    getCalificacion(): number {
        return this.calificacion;
    }

    getHaceNovillos() {
        return this.haceNovillos;
    }

    getAprobado() {
        return this.calificacion >= 5;
    }

    hacerNovillos(): boolean {
        return Math.random() < 0.5;
    }


}
