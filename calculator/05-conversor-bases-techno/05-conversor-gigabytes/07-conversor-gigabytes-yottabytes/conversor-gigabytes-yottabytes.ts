const valoresConvGigabytesYottabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesYottabytes.length; t++) {
  if(valoresConvGigabytesYottabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesYottabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado15 = total / 1024 ** 4;
console.log("Resultado: ", resultado15);