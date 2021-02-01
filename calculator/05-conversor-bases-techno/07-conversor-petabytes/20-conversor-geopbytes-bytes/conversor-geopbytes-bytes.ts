const valoresConvGeopbytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesBytes.length; t++) {
  if(valoresConvGeopbytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado22 = total * 1024 ** 10;
console.log("Resultado: ", resultado22);