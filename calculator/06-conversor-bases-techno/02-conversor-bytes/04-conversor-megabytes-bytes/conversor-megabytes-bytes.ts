const valoresConvMegabytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesBytes.length; t++) {
  if(valoresConvMegabytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado6 = total * 1024 ** 2;
console.log("Resultado: ", resultado6);