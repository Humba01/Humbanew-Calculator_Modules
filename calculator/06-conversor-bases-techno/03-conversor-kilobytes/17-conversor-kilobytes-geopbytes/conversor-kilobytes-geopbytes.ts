const valoresConvKilobytesGeopbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesGeopbytes.length; t++) {
  if(valoresConvKilobytesGeopbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesGeopbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado21 = total / 1024 ** 9;
console.log("Resultado: ", resultado21);