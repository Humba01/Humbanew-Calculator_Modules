const valoresConvBitsMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsMegabytes.length; t++) {
  if(valoresConvBitsMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado5 = (total / 8) / 1024 ** 2;
console.log("Resultado: ", resultado5);