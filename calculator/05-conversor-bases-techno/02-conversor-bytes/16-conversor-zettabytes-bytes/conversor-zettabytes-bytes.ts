const valoresConvZettabytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesBytes.length; t++) {
  if(valoresConvZettabytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado18 = total * 1024 ** 8;
console.log("Resultado: ", resultado18);