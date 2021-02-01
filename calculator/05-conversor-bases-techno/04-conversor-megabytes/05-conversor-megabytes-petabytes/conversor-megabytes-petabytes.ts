const valoresConvMegabytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesPetabytes.length; t++) {
  if(valoresConvMegabytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado11 = total / 1024 ** 3;
console.log("Resultado: ", resultado11);