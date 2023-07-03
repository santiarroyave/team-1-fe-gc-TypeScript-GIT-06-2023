// Reto 2

// 1- Crear clase "Libro"
// 5- Crear aplicación ejecutable

// Crear objetos Libro
const libro1 = new Libro("0-2765-2623-8", "El Gran Gatsby", "F. Scott Fitzgerald", 218);
console.log(libro1.toString());
const libro2 = new Libro("0-3485-2723-2", "La Comunidad del Anillo", "Autor dos", 423);
console.log(libro2.toString());
// Saber que Libro tiene mas paginas
if (libro1.getNumeroPaginas() > libro2.getNumeroPaginas()) {
    console.log("El libro uno", libro1.Nombre(), "más páginas.");
} else if (libro1.getNumeroPaginas() < libro2.getNumeroPaginas()) {
    console.log("El libro", libro2.Nombre(), "tiene más páginas.");
} else {
    console.log("Ambos libros tienen el mismo número de páginas.");
}