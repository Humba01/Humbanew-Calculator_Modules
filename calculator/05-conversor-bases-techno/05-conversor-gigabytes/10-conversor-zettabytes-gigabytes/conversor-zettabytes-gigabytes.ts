const valoresConvZettabytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesGigabytes.length; t++) {
  if(valoresConvZettabytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado18 = total * 1024 ** 5;
console.log("Resultado: ", resultado18);