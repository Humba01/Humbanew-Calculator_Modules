const valoresConvMegabytesYottabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesYottabytes.length; t++) {
  if(valoresConvMegabytesYottabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesYottabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado15 = total / 1024 ** 5;
console.log("Resultado: ", resultado15);