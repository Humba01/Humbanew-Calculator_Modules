const valoresConvJotabytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesBytes.length; t++) {
  if(valoresConvJotabytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado26 = total * 1024 ** 12;
console.log("Resultado: ", resultado26);