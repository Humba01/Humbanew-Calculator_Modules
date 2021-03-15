const valoresConvZettabytesGeopbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesGeopbytes.length; t++) {
  if(valoresConvZettabytesGeopbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesGeopbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado3 = total / 1024 ** 2;
console.log("Resultado: ", resultado3);