/*
    ===== Código de TypeScript =====
*/
/* Clases basicas */
/* contructor de la clase */
class Heroe {
  /* alterEgo: string;
    edad: number;
    nombreReal: string;

    constructor(
        alterEgo: string,
        edad: number,
        nombreReal: string
    ) {
        this.alterEgo = alterEgo;
    }
    // forma tradicional de definir un constructor
    */

  // forma simplificada de definir un constructor
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {}
}
const ironman = new Heroe("Ironman", 45, "Tony");
console.log(ironman);
