const valoresConvJotabytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesBits.length; t++) {
  if(valoresConvJotabytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado26 = (total * 8) * 1024 ** 12;
console.log("Resultado: ", resultado26);