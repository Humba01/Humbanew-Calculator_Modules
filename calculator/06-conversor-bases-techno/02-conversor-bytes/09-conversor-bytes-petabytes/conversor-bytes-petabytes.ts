const valoresConvBytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesPetabytes.length; t++) {
  if(valoresConvBytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado11 = total / 1024 ** 5;
console.log("Resultado: ", resultado11);