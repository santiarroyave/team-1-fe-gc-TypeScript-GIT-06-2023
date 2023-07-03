/*
        Crearemos una clase llamada Serie con las siguientes características:
        • Sus atributos son titulo, numero de temporadas, entregado, genero y creador.
        • Por defecto, el numero de temporadas es de 3 temporadas y entregado false. El resto de atributos serán
        valores por defecto según el tipo del atributo.
        Los constructores que se implementaran serán:
        ✓ Un constructor con el titulo y creador. El resto por defecto.
        Los métodos que se implementara serán:
        • Métodos get de todos los atributos, excepto de entregado.
        • Métodos set de todos los atributos, excepto de entregado.
        • Sobrescribe los métodos toString.
        
        Como vemos, en principio, las clases anteriores no son padre-hija, pero
        si tienen en común, por eso vamos a hacer una interfaz llamada
        Entregable con los siguientes métodos:
        • entregar(): cambia el atributo prestado a true.
        • devolver(): cambia el atributo prestado a false.
        • isEntregado(): devuelve el estado del atributo prestado.
        • Método compareTo (Object a), compara las horas estimadas en los
        videojuegos y en las series el numero de temporadas. Como
        parámetro que tenga un objeto, no es necesario que implementes la
        interfaz Comparable. Recuerda el uso de los casting de objetos.
        Implementa los anteriores métodos en las clases Videojuego y Serie. Ahora crea
        una aplicación ejecutable y realiza lo siguiente:
        • Crea dos arrays, uno de Series y otro de Videojuegos, de 5 posiciones cada
        uno.
        • Crea un objeto en cada posición del array, con los valores que desees, puedes
        usar distintos constructores.
        • Entrega algunos Videojuegos y Series con el método entregar().
        • Cuenta cuantos Series y Videojuegos hay entregados. Al contarlos,
        devuélvelos.
        • Por último, indica el Videojuego tiene más horas estimadas y la serie con mas
        temporadas. Muestralos en pantalla con toda su información (usa el método
        toString()).
 */

let defNumTemporadas = 3;
let defGenero = "";
let defEntregado = false;

class Serie implements Entregable {
    public titulo: string;
    public numeroTemporadas: number;
    private entregado: boolean;
    public genero: string;
    public creador: string;

    constructor(titulo: string, creador: string) {
        this.titulo = titulo;
        this.numeroTemporadas = defNumTemporadas;
        this.entregado = defEntregado;
        this.genero = defGenero;
        this.creador = creador;
    }

    
    // Getters
    getTitulo(): string {
        return this.titulo;
    }

    getNumeroTemporadas(): number {
        return this.numeroTemporadas;
    }

    getGenero(): string {
        return this.genero;
    }

    getCreador(): string {
        return this.creador;
    }


    // Setters
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setNumeroTemporadas(numeroTemporadas: number): void {
        this.numeroTemporadas = numeroTemporadas;
    }

    setGenero(genero: string): void {
        this.genero = genero;
    }

    setCreador(creador: string): void {
        this.creador = creador;
    }


    // Métodos de Entregable
    entregar(): void {
        this.entregado = true;
    }

    devolver(): void {
        this.entregado = false;
    }

    isEntregado(): boolean {
        return this.entregado;
    }

    // Método compareTo
    compareTo(obj: Serie): number {
        if (this.numeroTemporadas > obj.numeroTemporadas) {
            return 1;
        } else if (this.numeroTemporadas < obj.numeroTemporadas) {
            return -1;
        } else {
            return 0;
        }
    }

    toString(): string {
        return `Título: ${this.titulo}
        Creador: ${this.creador}
        Número de temporadas: ${this.numeroTemporadas}
        Género: ${this.genero}
        Entregado: ${this.entregado}`;
    }
}