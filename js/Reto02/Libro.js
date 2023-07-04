"use strict";
class Libro {
    // CONSTRUCTORES
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    // METODOS
    toString() {
        return `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
    ;
    // - Getters
    getIsbn() {
        return this.isbn;
    }
    ;
    getTitulo() {
        return this.titulo;
    }
    ;
    getAutor() {
        return this.autor;
    }
    ;
    getNumPaginas() {
        return this.numPaginas;
    }
    ;
    // - Setters
    setIsbn(isbn) {
        this.isbn;
    }
    ;
    setTitulo(titulo) {
        this.titulo;
    }
    ;
    setAutor(autor) {
        this.autor;
    }
    ;
    setNumPaginas(numPaginas) {
        this.numPaginas;
    }
    ;
}
