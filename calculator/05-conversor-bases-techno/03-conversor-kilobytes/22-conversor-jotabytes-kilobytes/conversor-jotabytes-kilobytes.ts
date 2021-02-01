const valoresConvJotabytesKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesKilobytes.length; t++) {
  if(valoresConvJotabytesKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado26 = total * 1024 ** 11;
console.log("Resultado: ", resultado26);