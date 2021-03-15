const valoresConvKilobytesBrontobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesBrontobytes.length; t++) {
  if(valoresConvKilobytesBrontobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesBrontobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado19 = total / 1024 ** 8;
console.log("Resultado: ", resultado19);