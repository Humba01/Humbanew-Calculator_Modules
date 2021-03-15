const valoresConvBrontobytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesZettabytes.length; t++) {
  if(valoresConvBrontobytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado2 = total * 1024;
console.log("Resultado: ", resultado2);