class Videojuego {
  titulo: string;
  horasEstimadas: number;
  entregado: boolean;
  genero: string;
  compañia: string;

  constructor(
    titulo: string,
    horasEstimadas = 10,
    genero = "",
    compañia = ""
  ) {
    this.titulo = titulo;
    this.horasEstimadas = horasEstimadas;
    this.entregado = false;
    this.genero = genero;
    this.compañia = compañia;
  }

  //GET Y SET DE TITULO
  getTitulo(): string {
    return this.titulo;
  }
  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }
  //GET Y SET DE HORASESTIMADAS
  getHorasEstimadas(): number {
    return this.horasEstimadas;
  }
  setHorasEstimadas(horasEstimadas: number): void {
    this.horasEstimadas = horasEstimadas;
  }
  //GET Y SET DE GENERO
  getGenero(): string {
    return this.genero;
  }
  setGenero(genero: string): void {
    this.genero = genero;
  }
  //GET Y SET DE COMPAÑIA
  getCompañia(): string {
    return this.compañia;
  }
  setCompañia(compañia: string): void {
    this.compañia = compañia;
  }

  //FALTA EL Sobrescribir
}

export default Videojuego;