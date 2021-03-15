const valoresConvBytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesTerabytes.length; t++) {
  if(valoresConvBytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado9 = total / 1024 ** 4;
console.log("Resultado: ", resultado9);