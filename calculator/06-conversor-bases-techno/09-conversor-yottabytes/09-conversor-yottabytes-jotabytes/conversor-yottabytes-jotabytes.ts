const valoresConvYottabytesJotabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesJotabytes.length; t++) {
  if(valoresConvYottabytesJotabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesJotabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado9 = total / 1024 ** 5;
console.log("Resultado: ", resultado9);