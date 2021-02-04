const valoresConvSaganbytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesExabytes.length; t++) {
  if(valoresConvSaganbytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = total * 1024 ** 5;
console.log("Resultado: ", resultado10);