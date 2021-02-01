const valoresConvMegabytesJotabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesJotabytes.length; t++) {
  if(valoresConvMegabytesJotabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesJotabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado25 = total / 1024 ** 10;
console.log("Resultado: ", resultado25);