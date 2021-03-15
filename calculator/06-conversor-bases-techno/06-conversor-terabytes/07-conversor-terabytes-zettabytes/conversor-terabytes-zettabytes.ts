const valoresConvTerabytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesZettabytes.length; t++) {
  if(valoresConvTerabytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado7 = total / 1024 ** 4;
console.log("Resultado: ", resultado7);