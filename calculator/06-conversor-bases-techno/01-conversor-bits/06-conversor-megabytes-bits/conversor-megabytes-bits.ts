const valoresConvMegabytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesBits.length; t++) {
  if(valoresConvMegabytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado6 = (total * 8) * 1024 ** 2;
console.log("Resultado: ", resultado6);