const valoresARadiciar3: string[] = ["16", "4"];

var total5: number = 0;

for(let r = 0; r < valoresARadiciar3.length; r++) {
  if(valoresARadiciar3[r] == "") {
    total5 = total5 + 0;
  } else {
    total5 = total5 + parseFloat(valoresARadiciar3[r]);
    console.log(total5);
  }
}

var resultado5 = Math.cbrt(Math.cbrt(total5));
console.log(resultado5);