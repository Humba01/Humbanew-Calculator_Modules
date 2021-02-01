const valoresConvBrontobytesKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesKilobytes.length; t++) {
  if(valoresConvBrontobytesKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado20 = total * 1024 ** 8;
console.log("Resultado: ", resultado20);