const valoresConvJotabytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesGigabytes.length; t++) {
  if(valoresConvJotabytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado26 = total * 1024 ** 9;
console.log("Resultado: ", resultado26);