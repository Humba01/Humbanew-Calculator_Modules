const valoresConvKilobytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesPetabytes.length; t++) {
  if(valoresConvKilobytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado11 = total / 1024 ** 4;
console.log("Resultado: ", resultado11);