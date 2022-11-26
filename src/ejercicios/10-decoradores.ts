/*
    ===== Código de TypeScript =====
*/
/* Decoradores */
/* https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators */

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}
// Decoradores son clases
// sirven para expandir la funcionalidad de una clase
@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);