// Los asientos son etiquetados por una letra (columna) y un número (fila), la fila 1 empieza al final de la matriz como se muestra en la tabla. También deberemos saber si está ocupado o no el asiento.
// 8 A 8 B 8 C 8 D 8 E 8 F 8 G 8 H 8 I
// 7 A 7 B 7 C 7 D 7 E 7 F 7 G 7 H 7 I
// 6 A 6 B 6 C 6 D 6 E 6 F 6 G 6 H 6 I
// 5 A 5 B 5 C 5 D 5 E 5 F 5 G 5 H 5 I
// 4 A 4 B 4 C 4 D 4 E 4 F 4 G 4 H 4 I
// 3 A 3 B 3 C 3 D 3 E 3 F 3 G 3 H 3 I
// 2 A 2 B 2 C 2 D 2 E 2 F 2 G 2 H 2 I
// 1 A 1 B 1 C 1 D 1 E 1 F 1 G 1 H 1 I
let defAsientos = [
    {
        columna:"A",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"B",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"C",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"D",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"E",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"F",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"G",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"H",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    },
    {
        columna:"I",
        filas:[
            { fila:8, espectador:"" },
            { fila:7, espectador:"" },
            { fila:6, espectador:"" },
            { fila:5, espectador:"" },
            { fila:4, espectador:"" },
            { fila:3, espectador:"" },
            { fila:2, espectador:"" },
            { fila:1, espectador:"" }
        ]
    }
];
let defPelicula = "";
let defPrecio = 0;

class Sala {

    // ATRIBUTOS
    private asientos:any;
    private pelicula:any;
    private precioEntrada:number;

    // CONSTRUCTORES
    constructor(){
        this.asientos = defAsientos;
        this.pelicula = defPelicula;
        this.precioEntrada = defPrecio;
    }

    // METODOS
    // Getters
    getAsientos():any{
        return this.asientos;
    }
    getPelicua():string{
        return this.pelicula;
    }
    getPrecio():number{
        return this.precioEntrada;
    }

    // Setters
    setPelicula(pelicula:string):void{
        this.pelicula = pelicula;
    }
    setPrecio(precio:number):void{
        this.precioEntrada = precio;
    }

    rellenarSala(espectador:any){
        // Añadir de manera random solo si está libre
        let colRandom = numRandomMax(8);
        let filaRandom = numRandomMax(7);
        let asignado = false;
        

        // Si un asiento está ocupado busca otro de manera aleatoria
        if(this.estaLleno() == false){
            
            do {
                if(this.asientos[colRandom].filas[filaRandom].espectador == ""){
                    this.asientos[colRandom].filas[filaRandom].espectador = espectador;
                    asignado = true;
                }else{
                    colRandom = numRandomMax(8);
                    filaRandom = numRandomMax(7);
                }
                
            } while (asignado == false);
        }else{
            console.log("Sala llena");
        };
    }
    
    estaLleno():boolean{
        // Cuenta cuantos asientos hay ocupados
        let lleno = false;
        let contAsientos = 0;
        let contPersonas = 0;

        // Recorre las columnas (A,B,C,D,E,F,G,H,I) y todas las filas
        for (let i = 0; i < this.asientos.length; i++) {
            for (let x = 0; x < this.asientos[i].filas.length; x++) {
                // console.log(`Recorriendo col ${this.asientos[i].columna} fila ${this.asientos[i].filas[x].fila}`);

                // Contador de asientos
                contAsientos++;

                // Cuenta las personas que hay sentadas
                if(this.asientos[i].filas[x].espectador == ""){
                    // console.log("Vacio");
                }else{
                    contPersonas++;
                }
            }
        }
        
        // Solo si TODOS los asientos estan ocupados devuelve true
        if(contPersonas >= contAsientos){
            lleno = true;
        }

        return lleno;
    }

    // Cómo mostrar datos de la sala:
    // this.asientos[i] --> (columna:A, filas{...})
    // this.asientos[i].columna --> (A)
    // this.asientos[i].filas --> ({...})
    // this.asientos[i].filas[x] --> (fila:8, espectador:"")
    // this.asientos[i].filas[x].fila --> (8)
    // this.asientos[i].filas[x].espectador --> ("")
}