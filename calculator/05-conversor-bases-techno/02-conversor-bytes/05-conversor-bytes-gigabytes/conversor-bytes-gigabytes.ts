const valoresConvBytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesGigabytes.length; t++) {
  if(valoresConvBytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado7 = total / 1024 ** 3;
console.log("Resultado: ", resultado7);