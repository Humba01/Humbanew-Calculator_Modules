const valoresConvBitsPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsPetabytes.length; t++) {
  if(valoresConvBitsPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado11 = (total / 8) / 1024 ** 5;
console.log("Resultado: ", resultado11);