const valoresConvGigabytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesPetabytes.length; t++) {
  if(valoresConvGigabytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado11 = total / 1024 ** 2;
console.log("Resultado: ", resultado11);