class Videojuego {
  constructor(
    private titulo: string,
    private horasEstimadas: number = 10,
    private entregado: boolean = false,
    private genero: string,
    private compañia: string,
  ) {}
  
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