const valoresConvGigabytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesExabytes.length; t++) {
  if(valoresConvGigabytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado13 = total / 1024 ** 3;
console.log("Resultado: ", resultado13);