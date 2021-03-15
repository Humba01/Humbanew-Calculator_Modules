const valoresConvMegabytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesExabytes.length; t++) {
  if(valoresConvMegabytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado13 = total / 1024 ** 4;
console.log("Resultado: ", resultado13);