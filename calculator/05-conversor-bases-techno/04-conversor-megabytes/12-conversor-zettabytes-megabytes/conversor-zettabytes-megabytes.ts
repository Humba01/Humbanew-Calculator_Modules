const valoresConvZettabytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesMegabytes.length; t++) {
  if(valoresConvZettabytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado18 = total * 1024 ** 6;
console.log("Resultado: ", resultado18);