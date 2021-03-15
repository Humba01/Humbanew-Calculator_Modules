const valoresConvMegabytesKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesKilobytes.length; t++) {
  if(valoresConvMegabytesKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado6 = total * 1024;
console.log("Resultado: ", resultado6);