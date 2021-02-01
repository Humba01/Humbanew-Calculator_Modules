const valoresConvGigabytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesMegabytes.length; t++) {
  if(valoresConvGigabytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado8 = total * 1024;
console.log("Resultado: ", resultado8);