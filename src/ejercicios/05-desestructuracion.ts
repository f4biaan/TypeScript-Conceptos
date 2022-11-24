/*
    ===== Código de TypeScript =====
*/

/* Desestructuracion de objetos */

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Face it alone',
    detalles: {
        autor: 'Fredy',
        anio: 2021
    }
}

/* console.log('El volumen actual es de: ', reproductor.volumen);
console.log('El segundo actual es de: ', reproductor.segundo);
console.log('La canción actual es de: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor); */

// const { volumen, segundo, cancion, detalles: { autor } } = reproductor;
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;
/* console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La canción actual es de: ', cancion);
console.log('El autor es: ', autor); */


/* Desestructuracion de arreglos */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

/* const [ p1 ] = dbz;
console.log('Personaje 1: ', p1); */
console.log('Personaje 1: ', dbz[0]);

/* const [, p2] = dbz;
console.log('Personaje 2: ', p2); */
console.log('Personaje 2: ', dbz[1]);

/* const [, , p3] = dbz;
console.log('Personaje 3: ', p3); */
console.log('Personaje 3: ', dbz[2]);