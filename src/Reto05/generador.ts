let nombres = ["Juan", "Pedro", "Carlos", "Luis", "Alejandro", "Andrés", "Gabriel", "Diego", "José", "Miguel", "María", "Ana", "Laura", "Andrea", "Sofía", "Carolina", "Gabriela", "Natalia", "Valentina", "Isabella"];
var titulos = ["Avengers: Endgame","The Shawshank Redemption","The Godfather","Pulp Fiction","The Dark Knight","Fight Club","Inception","Goodfellas","The Matrix","The Lord of the Rings: The Fellowship of the Ring","Star Wars: Episode V - The Empire Strikes Back","Interstellar","The Lion King","Titanic","Forrest Gump","The Avengers","Jurassic Park","The Silence of the Lambs","The Social Network","The Departed"];


const genEspectador = ():[string, number, number] => {
    let rNombre = nombres[numRandomMax(20)];
    let rEdad = numRandomMinMax(5, 60);
    let rDinero = numRandomMinMax(0,50);
    return [rNombre, rEdad, rDinero];
}

const genPelicula = ():[string, number, number, string] => {
    let rTitulo = titulos[numRandomMax(20)];
    let rDuracion = numRandomMinMax(80,120);
    let rEdadMinima = numRandomMinMax(13,18);
    let rDirector = nombres[numRandomMax(20)];

    return [rTitulo, rDuracion, rEdadMinima, rDirector];
};



const numRandomMax = (max:number):number => {
    return Math.floor(Math.random()*max);
}

const numRandomMinMax = (min:number,max:number):number => {
    return Math.floor(Math.random()*(max-min+1)+min);
}