const valoresConvBytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesBits.length; t++) {
  if(valoresConvBytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado2 = total * 8;
console.log("Resultado: ", resultado2);