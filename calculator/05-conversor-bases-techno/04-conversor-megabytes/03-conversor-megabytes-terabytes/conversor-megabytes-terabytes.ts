const valoresConvMegabytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesTerabytes.length; t++) {
  if(valoresConvMegabytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado9 = total / 1024 ** 2;
console.log("Resultado: ", resultado9);