"use strict";
// Reto 2
// 1- Crear clase "Libro"
// 2- Crear aplicación ejecutable
// • 2.1. Crear 2 objetos Libro (los valores que se quieran) y mostrarlos por pantalla.
// • 2.2. Indicar cuál de los 2 tiene más páginas
// • 2.1. Añadir 2 libros
console.log("LIBROS INTRODUCIDOS");
console.log("Primer libro introducido.");
const libro1 = new Libro("0-2765-2623-8", "El Gran Gatsby", "F. Scott Fitzgerald", 218);
console.log(libro1.toString());
console.log("----------------------------------------");
console.log("Segundo libro introducido.");
const libro2 = new Libro("0-3485-2723-2", "La Comunidad del Anillo", "Autor dos", 423);
console.log(libro2.toString());
// • 2.2 Saber que Libro tiene mas paginas
console.log("----------------------------------------");
console.log("El libro con más páginas es:");
if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(libro1.getTitulo(), "con", libro1.getNumPaginas(), "páginas.");
}
else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(libro2.getTitulo(), "con", libro2.getNumPaginas(), "páginas.");
}
else {
    console.log("Los dos libros tienen el mismo número de páginas.");
}
