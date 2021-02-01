const valoresConvSaganbytesKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesKilobytes.length; t++) {
  if(valoresConvSaganbytesKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado24 = total * 1024 ** 10;
console.log("Resultado: ", resultado24);