const valoresConvBitsZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsZettabytes.length; t++) {
  if(valoresConvBitsZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado17 = (total / 8) / 1024 ** 8;
console.log("Resultado: ", resultado17);