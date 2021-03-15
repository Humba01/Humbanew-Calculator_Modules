const valoresConvSaganbytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesMegabytes.length; t++) {
  if(valoresConvSaganbytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado24 = total * 1024 ** 9;
console.log("Resultado: ", resultado24);