const valoresConvSaganbytesYottabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesYottabytes.length; t++) {
  if(valoresConvSaganbytesYottabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesYottabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado8 = total * 1024 ** 4;
console.log("Resultado: ", resultado8);