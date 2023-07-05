type tMateria = "matemáticas" | "filosofía" | "física";

class Profesor extends Usuarios {
    private materia: tMateria;

    constructor(nombre:string, edad: number, sexo: tSexo, materia: tMateria){
        super(nombre, edad, sexo);
        this.materia = materia;
    }

    //GET Y SET DE NOMBRE
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    //GET Y SET DE EDAD
    public getEdad(): number {
        return this.edad;
    }
    public  setEdad(edad: number): void {
        this.edad = edad;
    }
    //GET Y SET DE SEXO
    public getSexo(): tSexo {
        return this.sexo;
    }
    public setSexo(sexo: tSexo): void {
        this.sexo = sexo;
    }
    //GET Y SET DE MATERIA
    public getMateria(): tMateria {
        return this.materia;
    }
    public setMateria(materia: tMateria): void {
        this.materia = materia;
    }
    // Probabilidad de que el profesor este disponible
    estaDisponible(): boolean{
        // Se considera disponible si devuelve true
        let random = Math.random();
        if(random < 0.8){
            return true;
        }else{
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