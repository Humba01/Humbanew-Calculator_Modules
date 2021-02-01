const valoresConvGeopbytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesGigabytes.length; t++) {
  if(valoresConvGeopbytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado22 = total * 1024 ** 7;
console.log("Resultado: ", resultado22);