const valoresConvBrontobytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesPetabytes.length; t++) {
  if(valoresConvBrontobytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado8 = total * 1024 ** 4;
console.log("Resultado: ", resultado8);