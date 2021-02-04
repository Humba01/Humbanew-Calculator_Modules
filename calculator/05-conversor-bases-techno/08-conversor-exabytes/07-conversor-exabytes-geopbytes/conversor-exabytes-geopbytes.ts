const valoresConvExabytesGeopbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesGeopbytes.length; t++) {
  if(valoresConvExabytesGeopbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesGeopbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado7 = total / 1024 ** 4;
console.log("Resultado: ", resultado7);