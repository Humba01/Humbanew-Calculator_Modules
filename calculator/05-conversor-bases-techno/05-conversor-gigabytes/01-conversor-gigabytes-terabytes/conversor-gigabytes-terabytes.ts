const valoresConvGigabytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesTerabytes.length; t++) {
  if(valoresConvGigabytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado9 = total / 1024;
console.log("Resultado: ", resultado9);