/*
    ===== Código de TypeScript =====
*/

/* Funciones básicas */
function sumar(a: number, b: number): number {
  return a + b;
}

const resultado = sumar(15, 20);
console.log(resultado);

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(numero: number, otroNumero: number, base: number): number {
  return numero * otroNumero * base;
}
const resultado2 = multiplicar(5, 15, 20);
console.log(resultado2);

/* Funciones con objetos como argumento */

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "F4biaan",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida: ", this.pv);
  },
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
