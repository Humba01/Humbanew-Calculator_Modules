const valoresConvBitsJotabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsJotabytes.length; t++) {
  if(valoresConvBitsJotabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsJotabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado25 = (total / 8) / 1024 ** 12;
console.log("Resultado: ", resultado25);