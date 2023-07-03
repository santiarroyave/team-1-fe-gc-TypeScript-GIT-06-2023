class Libro {

    // ATRIBUTOS
    private isbn: string;
    private titulo: string;
    private autor: string;
    private numPaginas : number;

    // CONSTRUCTORES
    constructor(isbn: string, titulo: string, autor: string, numPaginas: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    // METODOS
    toString():string{
        return `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`;
    };
    
    // - Getters
    getIsbn():string{
        return this.isbn;
    };

    getTitulo():string{
        return this.titulo;
    };

    getAutor():string{
        return this.autor;
    };

    getNumPaginas():number{
        return this.numPaginas;
    };

    // - Setters
    setIsbn(isbn:string):void{
        this.isbn;
    };

    setTitulo(titulo:string):void{
        this.titulo;
    };

    setAutor(autor:string):void{
        this.autor;
    };

    setNumPaginas(numPaginas:number):void{
        this.numPaginas;
    };
}