const valoresConvKilobytesSaganbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesSaganbytes.length; t++) {
  if(valoresConvKilobytesSaganbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesSaganbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado23 = total / 1024 ** 10;
console.log("Resultado: ", resultado23);