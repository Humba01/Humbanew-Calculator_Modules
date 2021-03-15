const valoresConvJotabytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesMegabytes.length; t++) {
  if(valoresConvJotabytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado26 = total * 1024 ** 10;
console.log("Resultado: ", resultado26);