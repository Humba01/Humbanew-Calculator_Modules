const valoresConvGeopbytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesTerabytes.length; t++) {
  if(valoresConvGeopbytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado12 = total * 1024 ** 6;
console.log("Resultado: ", resultado12);