const valoresConvJotabytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesZettabytes.length; t++) {
  if(valoresConvJotabytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado8 = total * 1024 ** 4;
console.log("Resultado: ", resultado8);