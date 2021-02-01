const valoresConvZettabytesKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesKilobytes.length; t++) {
  if(valoresConvZettabytesKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado18 = total * 1024 ** 7;
console.log("Resultado: ", resultado18);