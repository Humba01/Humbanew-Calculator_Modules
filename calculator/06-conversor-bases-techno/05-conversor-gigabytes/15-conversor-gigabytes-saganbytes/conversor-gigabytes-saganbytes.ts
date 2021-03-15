const valoresConvGigabytesSaganbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesSaganbytes.length; t++) {
  if(valoresConvGigabytesSaganbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesSaganbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado23 = total / 1024 ** 8;
console.log("Resultado: ", resultado23);