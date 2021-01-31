const valoresConvBitsYottabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsYottabytes.length; t++) {
  if(valoresConvBitsYottabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsYottabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado15 = (total / 8) / 1024 ** 7;
console.log("Resultado: ", resultado15);