const valoresConvTerabytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesPetabytes.length; t++) {
  if(valoresConvTerabytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado = total / 1024;
console.log("Resultado: ", resultado);