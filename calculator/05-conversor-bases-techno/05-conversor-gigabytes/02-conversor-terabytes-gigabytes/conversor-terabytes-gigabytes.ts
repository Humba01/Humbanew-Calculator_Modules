const valoresConvTerabytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesGigabytes.length; t++) {
  if(valoresConvTerabytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = total * 1024;
console.log("Resultado: ", resultado10);