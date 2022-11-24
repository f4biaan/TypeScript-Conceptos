import {
  Producto,
  calculaISV,
} from "./06-desestructuracion-funcion"; /* importacion tradicional */
/*
    ===== Código de TypeScript =====
*/
/* Importaciones y exportaciones */

// para evitar tener que estar declarando interfaces siempre es necesario declarar interfaces para importarlas y en caso de modificar se actualiza solo una vez
const carritoCompras: Producto[] = [
  {
    desc: "Telefono 1",
    precio: 100,
  },
  {
    desc: "Telefono 2",
    precio: 150,
  },
];

const [total, isv] = calculaISV(carritoCompras);

console.log("Total: ", total);
console.log("ISV: ", isv);

/*lo ideal seria tener interfaces y funciones para exportar en un solo archivo ya que si tiene mas acciones en el mismo archivo cada vez que se ejecute la funcion exportada se ejecutara las mismas veces el archivo lo que no deberia sucedes con las demas acciones funciones */
