const valoresConvBrontobytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBrontobytesBits.length; t++) {
  if(valoresConvBrontobytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBrontobytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado20 = (total * 8) * 1024 ** 9;
console.log("Resultado: ", resultado20);