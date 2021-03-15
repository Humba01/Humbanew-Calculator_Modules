const valoresConvTerabytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesExabytes.length; t++) {
  if(valoresConvTerabytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado3 = total / 1024 ** 2;
console.log("Resultado: ", resultado3);