const valoresConvExabytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesBytes.length; t++) {
  if(valoresConvExabytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado14 = total * 1024 ** 6;
console.log("Resultado: ", resultado14);