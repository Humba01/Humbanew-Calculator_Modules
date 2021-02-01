const valoresConvSaganbytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesGigabytes.length; t++) {
  if(valoresConvSaganbytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado24 = total * 1024 ** 8;
console.log("Resultado: ", resultado24);