const valoresConvMegabytesSaganbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesSaganbytes.length; t++) {
  if(valoresConvMegabytesSaganbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesSaganbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado23 = total / 1024 ** 9;
console.log("Resultado: ", resultado23);