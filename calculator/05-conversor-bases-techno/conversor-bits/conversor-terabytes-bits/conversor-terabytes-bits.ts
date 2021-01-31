const valoresConvTerabytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesBits.length; t++) {
  if(valoresConvTerabytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = (total * 8) * 1024 ** 4;
console.log("Resultado: ", resultado10);