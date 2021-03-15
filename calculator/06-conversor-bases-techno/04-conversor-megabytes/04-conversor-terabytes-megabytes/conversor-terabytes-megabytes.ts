const valoresConvTerabytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesMegabytes.length; t++) {
  if(valoresConvTerabytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = total * 1024 ** 2;
console.log("Resultado: ", resultado10);