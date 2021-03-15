const valoresConvTerabytesJotabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesJotabytes.length; t++) {
  if(valoresConvTerabytesJotabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesJotabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado15 = total / 1024 ** 8;
console.log("Resultado: ", resultado15);