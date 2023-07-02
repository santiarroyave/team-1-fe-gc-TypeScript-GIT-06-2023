<<<<<<< Updated upstream
class Videojuego implements Entregable {
  constructor(
    private titulo: string,
    private horasEstimadas: number = 10,
    private entregado: boolean = false,
    private genero: string,
    private compañia: string,
  ) {}
=======
class Videojuego implements Entregable {
  
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compañia: string;

    constructor(titulo: string, genero: string, compañia: string, horasEstimadas: number = 10) 
    {
      this.titulo = titulo;
      this.horasEstimadas = horasEstimadas;
      this.entregado = false;
      this.genero = genero;
      this.compañia = compañia;
    }
>>>>>>> Stashed changes

  // Implementación Entregable
  entregar(): void {
    this.entregado = true;
  }
  devolver(): void {
    this.entregado = false;
  }
  isEntregado(): boolean {
    return this.entregado;
  }
  compareTo(objeto: Videojuego): number {
    if (this.horasEstimadas > objeto.getHorasEstimadas()) {
      return 1;
    } else if (this.horasEstimadas < objeto.getHorasEstimadas()) {
      return -1;
    } else {
      return 0;
    }
  }

  //GET Y SET DE TITULO
  public  getTitulo(): string {
    return this.titulo;
  }
  public  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }
  //GET Y SET DE HORASESTIMADAS
  public  getHorasEstimadas(): number {
    return this.horasEstimadas;
  }
  public  setHorasEstimadas(horasEstimadas: number): void {
    this.horasEstimadas = horasEstimadas;
  }
  //GET Y SET DE GENERO
  public  getGenero(): string {
    return this.genero;
  }
  public  setGenero(genero: string): void {
    this.genero = genero;
  }
  //GET Y SET DE COMPAÑIA
  public  getCompañia(): string {
    return this.compañia;
  }
  public  setCompañia(compañia: string): void {
    this.compañia = compañia;
  }

  // SOBRESCRIBE TOSTRING
  public  toString(): string {
    return `Videojuego:
      Título: ${this.titulo}
      Horas estimadas: ${this.horasEstimadas}
      Entregado: ${this.entregado}
      Género: ${this.genero}
      Compañía: ${this.compañia}`;
  }
}