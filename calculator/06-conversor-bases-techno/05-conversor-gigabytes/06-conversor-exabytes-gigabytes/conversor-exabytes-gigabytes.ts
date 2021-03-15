const valoresConvExabytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesGigabytes.length; t++) {
  if(valoresConvExabytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado14 = total * 1024 ** 3;
console.log("Resultado: ", resultado14);