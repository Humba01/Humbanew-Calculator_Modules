const valoresConvExabytesJotabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesJotabytes.length; t++) {
  if(valoresConvExabytesJotabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesJotabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado11 = total / 1024 ** 6;
console.log("Resultado: ", resultado11);