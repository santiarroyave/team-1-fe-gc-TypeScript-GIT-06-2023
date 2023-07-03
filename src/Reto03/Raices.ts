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
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminante(): number {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }

    tieneRaiz(): boolean {
        return this.getDiscriminante() === 0;
    }

    calcular(): void {
        const discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Las posibles soluciones son: ${raiz1} y ${raiz2}`);
        } else if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log(`La única solución es: ${raiz}`);
        } else {
            console.log("No existen soluciones reales");
        }
    }

    obtenerRaices(): void {
        if (this.tieneRaices()) {
            this.calcular();
        } else {
            console.log("No existen soluciones reales");
        }
    }

    obtenerRaiz(): void {
        if (this.tieneRaiz()) {
            this.calcular();
        } else {
            console.log("No existe una única solución");
        }
    }
}