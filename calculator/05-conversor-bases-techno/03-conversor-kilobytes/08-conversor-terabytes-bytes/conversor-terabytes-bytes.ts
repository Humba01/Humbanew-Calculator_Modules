const valoresConvTerabytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesBytes.length; t++) {
  if(valoresConvTerabytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = total * 1024 ** 4;
console.log("Resultado: ", resultado10);