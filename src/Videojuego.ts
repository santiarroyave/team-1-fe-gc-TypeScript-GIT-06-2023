class Videojuego implements Entregable {
  
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compañia: string;

    constructor(titulo: string, horasEstimadas: number = 10, genero: string, compañia: string) 
    {
      this.titulo = titulo;
      this.horasEstimadas = horasEstimadas;
      this.entregado = false;
      this.genero = genero;
      this.compañia = compañia;
    }

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
/*
const videojuego1 = new Videojuego('Videojuego 1', 8, false, 'Compañía 1', 'Compañía 1' );
const videojuego2 = new Videojuego('Videojuego 2', 2, true, 'Compañía 2', 'Compañía 1' );

videojuego1.entregar();
console.log('¿Videojuego 1 entregado?', videojuego1.isEntregado());

videojuego2.devolver();
console.log('¿Videojuego 2 entregado?', videojuego2.isEntregado());

const resultadoComparacion = videojuego1.compareTo(videojuego2);
if (resultadoComparacion < 0) {
  console.log('Videojuego 1 tiene menos horas estimadas que Videojuego 2');
} else if (resultadoComparacion > 0) {
  console.log('Videojuego 1 tiene más horas estimadas que Videojuego 2');
} else {
  console.log('Videojuego 1 y Videojuego 2 tienen la misma cantidad de horas estimadas');
}

console.log('Información de Videojuego 1:\n', videojuego1.toString());
console.log('Información de Videojuego 2:\n', videojuego2.toString());*/