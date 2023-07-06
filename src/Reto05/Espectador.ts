class Espectador {
  private nombre: string;
  private edad: number;
  private dinero: number;

  constructor(nombre: string, edad: number, dinero: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.dinero = dinero;
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
  public setEdad(edad: number): void {
    this.edad = edad;
  }
  //GET Y SET DE DINERO
  public getDinero(): number {
    return this.dinero;
  }
  public setDinero(dinero: number): void {
    this.dinero = dinero;
  }
}

//const espectador = new Espectador("Juan", 25, 50);
//console.log(espectador.getNombre()); // Output: Juan
//console.log(espectador.getEdad()); // Output: 25
//console.log(espectador.getDinero()); // Output: 50