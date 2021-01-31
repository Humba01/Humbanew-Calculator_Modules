const valoresConvSaganbytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvSaganbytesBits.length; t++) {
  if(valoresConvSaganbytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvSaganbytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado24 = (total * 8) * 1024 ** 11;
console.log("Resultado: ", resultado24);