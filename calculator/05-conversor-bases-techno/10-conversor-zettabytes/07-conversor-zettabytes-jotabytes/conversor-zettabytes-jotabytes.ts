const valoresConvZettabytesJotabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesJotabytes.length; t++) {
  if(valoresConvZettabytesJotabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesJotabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado7 = total / 1024 ** 4;
console.log("Resultado: ", resultado7);