const valoresARadiciar2: string[] = ["16", "4"];

var total4: number = 0;

for(let r = 0; r < valoresARadiciar2.length; r++) {
  if(valoresARadiciar2[r] == "") {
    total4 = total4 + 0;
  } else {
    total4 = total4 + parseFloat(valoresARadiciar2[r]);
    console.log(total4);
  }
}

var resultado5 = Math.sqrt(Math.sqrt(total4));
console.log(resultado5);