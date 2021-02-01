const valoresConvYottabytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesBytes.length; t++) {
  if(valoresConvYottabytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado16 = total * 1024 ** 7;
console.log("Resultado: ", resultado16);