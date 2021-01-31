const valoresConvBitsSaganbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsSaganbytes.length; t++) {
  if(valoresConvBitsSaganbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsSaganbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado23 = (total / 8) / 1024 ** 11;
console.log("Resultado: ", resultado23);