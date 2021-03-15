const valoresConvZettabytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesPetabytes.length; t++) {
  if(valoresConvZettabytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado6 = total * 1024 ** 3;
console.log("Resultado: ", resultado6);