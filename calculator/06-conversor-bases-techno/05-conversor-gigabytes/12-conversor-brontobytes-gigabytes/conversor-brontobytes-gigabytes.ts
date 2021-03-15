const valoresConvBrontobytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesGigabytes.length; t++) {
  if(valoresConvBrontobytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado20 = total * 1024 ** 6;
console.log("Resultado: ", resultado20);