// Vamos a realizar una clase llamada Raices, donde representaremos los valores de una ecuación
// de 2º grado.
// Tendremos los 3 coeficientes como atributos, llamémosles a, b y c.
// Hay que insertar estos 3 valores para construir el objeto.
// Las operaciones que se podrán hacer son las siguientes:
// • getDiscriminante(): devuelve el valor del discriminante (double), el discriminante tiene la
// siguiente formula, (b^2)-4*a*c
// • tieneRaices(): devuelve un booleano indicando si tiene dos soluciones, para que esto ocurra,
// el discriminante debe ser mayor o igual que 0.
// • tieneRaiz(): devuelve un booleano indicando si tiene una única solución, para que esto ocurra,
// el discriminante debe ser igual que 0.
// • calcular(): mostrara por consola las posibles soluciones que tiene nuestra ecuación, en caso
// de no existir solución, mostrarlo también.
// • obtenerRaices(): imprime las 2 posibles soluciones
// • obtenerRaiz(): imprime única raíz, que será cuando solo tenga una solución posible.
// Formula ecuación 2º grado: (-b±√((b^2)

class Raices {
    // Atributos privados porque no se implementarán fuera de esta clase, representan los coeficientes de la ecuación cuadrática.
    private a: number;
    private b: number;
    private c: number;

    // Constructor, recibe 3 parámetros y asigna sus valores a las variables correspondientes de la clase.
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Calcula el discriminante de la ecuación cuadrática.
    getDiscriminante(): number {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    // Verifica si la ecuación cuadrática tiene raíces reales, devuelve 'true' si el discriminante es igual o mayor que 0.
    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }

    // Verifica si la ecuación cuadrática tiene una ÚNICA raíz real, devuelve 'true' si el discriminante es igual a 0.
    tieneRaiz(): boolean {
        return this.getDiscriminante() === 0;
    }

    // Realiza el cálculo y muestra las raíces de la ecuación cuadrática. Usa el discriminante para determinar si hay 2 raíces distintas, una única raíz o ninguna raíz real.
    // Después muestra las soluciones correspondioentes
    calcular(): void {
        let discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            let raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            let raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Las posibles soluciones son: ${raiz1} y ${raiz2}`);
        } else if (discriminante === 0) {
            let raiz = -this.b / (2 * this.a);
            console.log(`La única solución es: ${raiz}`);
        } else {
            console.log("No existen soluciones reales");
        }
    }

    // Verifica si la ecuación tiene raíces reales utilizando el método 'tieneRaices()', si es 'true' llama al método 'calcular()' para mostrar las raíces, si no tiene raíces salta el mensaje.
    obtenerRaices(): void {
        if (this.tieneRaices()) {
            this.calcular();
        } else {
            console.log("No existen soluciones reales");
        }
    }

    // Verifica si la ecuacíon tiene una única raíz real utilizando el método 'tieneRaiz()', si es 'true' llama al método 'calcular()' para mostrar la única raíz, si no tiene raíz única salta el mensaje.
    obtenerRaiz(): void {
        if (this.tieneRaiz()) {
            this.calcular();
        } else {
            console.log("No existe una única solución");
        }
    }
}