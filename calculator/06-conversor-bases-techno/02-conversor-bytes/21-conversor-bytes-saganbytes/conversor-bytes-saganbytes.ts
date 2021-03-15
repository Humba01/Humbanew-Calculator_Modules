const valoresConvBytesSaganbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesSaganbytes.length; t++) {
  if(valoresConvBytesSaganbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesSaganbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado23 = total / 1024 ** 11;
console.log("Resultado: ", resultado23);