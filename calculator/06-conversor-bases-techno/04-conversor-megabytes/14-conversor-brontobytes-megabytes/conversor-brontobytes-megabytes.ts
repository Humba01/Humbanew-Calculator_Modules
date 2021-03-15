const valoresConvBrontobytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesMegabytes.length; t++) {
  if(valoresConvBrontobytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado20 = total * 1024 ** 7;
console.log("Resultado: ", resultado20);