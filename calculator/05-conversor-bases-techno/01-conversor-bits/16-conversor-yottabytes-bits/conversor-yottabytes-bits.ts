const valoresConvYottabytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesBits.length; t++) {
  if(valoresConvYottabytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado16 = (total * 8) * 1024 ** 7;
console.log("Resultado: ", resultado16);