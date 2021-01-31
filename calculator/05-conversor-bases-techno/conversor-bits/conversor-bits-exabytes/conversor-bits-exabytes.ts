const valoresConvBitsExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsExabytes.length; t++) {
  if(valoresConvBitsExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado13 = (total / 8) / 1024 ** 6;
console.log("Resultado: ", resultado13);