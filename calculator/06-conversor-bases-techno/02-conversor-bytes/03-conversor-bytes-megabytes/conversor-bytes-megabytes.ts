const valoresConvBytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesMegabytes.length; t++) {
  if(valoresConvBytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado5 = total / 1024 ** 2;
console.log("Resultado: ", resultado5);