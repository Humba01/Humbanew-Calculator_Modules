const valoresConvSaganbytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesBytes.length; t++) {
  if(valoresConvSaganbytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado24 = total * 1024 ** 11;
console.log("Resultado: ", resultado24);