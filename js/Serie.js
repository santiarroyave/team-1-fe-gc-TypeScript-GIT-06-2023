"use strict";
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
class Serie {
    constructor(titulo, creador, numeroTemporadas = 3, entregado = false, genero = "") {
        this.titulo = titulo;
        this.creador = creador;
        this.numeroTemporadas = numeroTemporadas;
        this.entregado = entregado;
        this.genero = genero;
    }
    // Getters
    getTitulo() {
        return this.titulo;
    }
    getCreador() {
        return this.creador;
    }
    getNumeroTemporadas() {
        return this.numeroTemporadas;
    }
    getGenero() {
        return this.genero;
    }
    // Setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setCreador(creador) {
        this.creador = creador;
    }
    setNumeroTemporadas(numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    // toString
    toString() {
        return `Título: ${this.titulo}
        Creador: ${this.creador}
        Número de temporadas: ${this.numeroTemporadas}
        Género: ${this.genero}
        Entregado: ${this.entregado}`;
    }
}
const serie1 = new Serie("Serie 1", "Creador 1", 5, true, "Género 1");
console.log(serie1.toString());
serie1.setNumeroTemporadas(15);
serie1.setGenero("Porno");
console.log(serie1.toString());
