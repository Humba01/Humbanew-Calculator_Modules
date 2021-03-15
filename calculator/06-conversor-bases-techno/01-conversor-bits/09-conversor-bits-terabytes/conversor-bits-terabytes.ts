const valoresConvBitsTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsTerabytes.length; t++) {
  if(valoresConvBitsTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado9 = (total / 8) / 1024 ** 4;
console.log("Resultado: ", resultado9);