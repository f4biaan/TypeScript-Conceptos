/*
    ===== Código de TypeScript =====
*/

/* Desestructuracion de Argumentos en una funcion */
export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 150,
};

const tablet: Producto = {
  desc: "iPad Air",
  precio: 350,
};

export function calculaISV(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    /* Se recibe el atributo y se desestructura con las llaves para obtener solo datos deseados */
    total += precio;
  });

  return [total, total * 0.15];
}

const articulos = [telefono, tablet];
const [total, isv] = calculaISV(articulos); /* Desestructurar arreglos para crear dos variables */
console.log("Total: ", total);
console.log("ISV: ", isv);
