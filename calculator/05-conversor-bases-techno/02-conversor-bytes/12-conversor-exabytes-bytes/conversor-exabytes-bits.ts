const valoresConvExabytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesBits.length; t++) {
  if(valoresConvExabytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado14 = (total * 8) * 1024 ** 6;
console.log("Resultado: ", resultado14);