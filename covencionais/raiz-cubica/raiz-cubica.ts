const valoresARadiciarCubicamente: string[] = ["16", "32"];

var total3: number = 0;

for(let r = 0; r < valoresARadiciarCubicamente.length; r++) {
  total3 = total3 + parseFloat(valoresARadiciarCubicamente[r]);
  console.log(total3);
}

var resultado5 = Math.cbrt(total3);
console.log(resultado5);