const valoresConvBrontobytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesExabytes.length; t++) {
  if(valoresConvBrontobytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado6 = total * 1024 ** 3;
console.log("Resultado: ", resultado6);