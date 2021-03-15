const valoresConvMegabytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesGigabytes.length; t++) {
  if(valoresConvMegabytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado7 = total / 1024;
console.log("Resultado: ", resultado7);