const valoresConvSaganbytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesTerabytes.length; t++) {
  if(valoresConvSaganbytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado14 = total * 1024 ** 7;
console.log("Resultado: ", resultado14);