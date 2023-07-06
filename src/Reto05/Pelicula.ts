class Pelicula {
  private titulo: string;
  private duracion: number;
  private edadMinima: number;
  private director: string;

  constructor(titulo: string, duracion: number, edadMinima: number, director: string) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.edadMinima = edadMinima;
    this.director = director;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public getDuracion(): number {
    return this.duracion;
  }

  public setDuracion(duracion: number): void {
    this.duracion = duracion;
  }

  public getEdadMinima(): number {
    return this.edadMinima;
  }

  public setEdadMinima(edadMinima: number): void {
    this.edadMinima = edadMinima;
  }

  public getDirector(): string {
    return this.director;
  }

  public setDirector(director: string): void {
    this.director = director;
  }
} 