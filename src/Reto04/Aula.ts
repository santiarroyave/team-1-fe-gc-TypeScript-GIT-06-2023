let defMaxEstudiantes = 30;

// El aula debe tener un identificador numérico, el número máximo de estudiantes y para que esta destinada (matemáticas, filosofía o física). Piensa que más atributos necesita.

class Aula{
    // ATRIBUTOS
    id: number;
    maxEstudiantes: number;
    aulaDestinada: tMateria;
    profesor: Profesor;
    profesorDisponible: boolean;
    alumnos: Estudiante[];

    // CONSTRUCTORES
    constructor(id:number, aulaDestinada:tMateria, profesor:Profesor, alumnos:Estudiante[]){
        this.id = id;
        this.maxEstudiantes = defMaxEstudiantes;
        this.aulaDestinada = aulaDestinada;

        this.profesor = profesor;
        this.alumnos = alumnos;
        this.profesorDisponible = profesor.estaDisponible();
    }

    // METODOS
    setProfesor(profesor:Profesor){
        this.profesor = profesor;
    }
    setAlumnos(alumno:Estudiante){
        this.alumnos.push(alumno);
    }

    getMateria():tMateria{
        return this.aulaDestinada;
    }

    getInfoAula():void{
        console.log(`Materia: ${this.aulaDestinada}
Profesor: ${this.profesor.getNombre()} (${this.profesor.getMateria()})
Alumnos que asisten: ${this.alumnosQueAsisten()} de ${this.maxEstudiantes}
Profesor disponible: ${this.profesorDisponible}`);
    }

    // Un aula para que se pueda dar clase necesita
    // - Que el profesor esté disponible
    // - Que el profesor de la materia correspondiente en el aula correspondiente (un profesor de filosofía no puede dar en un aula de matemáticas)
    // - Que haya más del 50% de alumnos
    sePuedeDarClase():boolean{
        if(this.profesorDisponible == true){
            if(this.profeCorrecto() == true){
                if(this.alumnosQueAsisten() >= this.maxEstudiantes/2){
                    // this.mostrarAlumnosAprobados();
                    return true;
                }
            }
        }
        return false;
    }

    // Comprobamos si el profesor de la clase puede impartir la materia de la clase
    profeCorrecto():boolean{
        if(this.profesor.getMateria() == this.aulaDestinada){
            return true;
        }else{
            return false;
        }
    }

    // Si se puede dar clase mostrar cuantos alumnos y alumnas (por separado) están aprobados de momento (imaginad que les están entregando las notas).
    mostrarAlumnosAprobados():void{
        // console.log("------------------------");
        console.log("| [Alumnas aprobadas]:");
        let contador = 0;
        for (let x = 0; x < this.alumnos.length; x++) {
            if(this.alumnos[x].getSexo() == "femenino" && this.alumnos[x].getCalificacion() >= 5){
                console.log(`| - ${this.alumnos[x].getNombre()} - ${this.alumnos[x].getCalificacion()}`);
                contador++;
            }   
        }
        console.log(`| > (Total ${contador} chicas)`);
        console.log("| [Alumnos aprobadas]:");
        contador = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            if(this.alumnos[i].getSexo() == "masculino" && this.alumnos[i].getCalificacion() >= 5){
                console.log(`| - ${this.alumnos[i].getNombre()} - ${this.alumnos[i].getCalificacion()}`);
                contador++;
            }   
        }
        // console.log(`| ---> Total - ${contador} chicos <---`);
        console.log(`| > (Total ${contador} chicos)`);
        // console.log("------------------------");
    }

    alumnosQueAsisten():number{
        let contador = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            if(this.alumnos[i].estaDisponible() == true){
                contador++;
            }
        }

        return contador;
    }
}