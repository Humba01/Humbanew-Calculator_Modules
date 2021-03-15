const valoresConvGeopbytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesExabytes.length; t++) {
  if(valoresConvGeopbytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado8 = total * 1024 ** 4;
console.log("Resultado: ", resultado8);