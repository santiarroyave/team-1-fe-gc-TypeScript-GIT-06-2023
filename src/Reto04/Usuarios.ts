
type tSexo = "masculino" | "femenino";

abstract class Usuarios{
    // ATRIBUTOS
    protected nombre: string;
    protected edad: number;
    protected sexo: tSexo;

    // CONSTRUCTORES
    constructor(nombre:string, edad:number, sexo: tSexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    
    // METODOS
    abstract estaDisponible():boolean;
    
}