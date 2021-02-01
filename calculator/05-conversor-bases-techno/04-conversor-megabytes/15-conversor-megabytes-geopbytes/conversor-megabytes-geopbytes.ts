const valoresConvMegabytesGeopbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesGeopbytes.length; t++) {
  if(valoresConvMegabytesGeopbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesGeopbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado21 = total / 1024 ** 8;
console.log("Resultado: ", resultado21);