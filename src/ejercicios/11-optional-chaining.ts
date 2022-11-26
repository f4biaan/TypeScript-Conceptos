/*
    ===== Código de TypeScript =====
*/
/* Encadenamiento opcional */

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = { 
    nombre: "Fernando" 
};

const pasajero2: Pasajero = {
    nombre: "Carla",
    hijos: ["Nataly", "Miguel"]
};

function imprimeHijos( pasajero: Pasajero ): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);