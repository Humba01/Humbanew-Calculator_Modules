const valoresConvBrontobytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesTerabytes.length; t++) {
  if(valoresConvBrontobytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = total * 1024 ** 5;
console.log("Resultado: ", resultado10);