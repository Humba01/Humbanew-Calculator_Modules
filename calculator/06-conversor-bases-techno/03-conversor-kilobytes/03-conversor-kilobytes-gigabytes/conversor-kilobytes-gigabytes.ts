const valoresConvKilobytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesGigabytes.length; t++) {
  if(valoresConvKilobytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado7 = total / 1024 ** 2;
console.log("Resultado: ", resultado7);