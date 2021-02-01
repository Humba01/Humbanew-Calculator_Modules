const valoresConvBytesGeopbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesGeopbytes.length; t++) {
  if(valoresConvBytesGeopbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesGeopbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado21 = total / 1024 ** 10;
console.log("Resultado: ", resultado21);