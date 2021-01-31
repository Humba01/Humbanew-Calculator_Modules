const valoresConvZettabytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesBits.length; t++) {
  if(valoresConvZettabytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado18 = (total * 8) * 1024 ** 8;
console.log("Resultado: ", resultado18);