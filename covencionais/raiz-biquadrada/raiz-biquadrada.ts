const valoresARadiciar2: string[] = ["16", "4"];

var total2: number = 0;

for(let r = 0; r < valoresARadiciar2.length; r++) {
  total2 = total2 + parseFloat(valoresARadiciar2[r]);
  console.log(total2);
}

var resultado5 = Math.sqrt(Math.sqrt(total2));
console.log(resultado5);