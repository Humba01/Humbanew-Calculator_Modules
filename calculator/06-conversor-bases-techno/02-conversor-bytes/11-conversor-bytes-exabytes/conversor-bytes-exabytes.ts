const valoresConvBytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesExabytes.length; t++) {
  if(valoresConvBytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado13 = total / 1024 ** 6;
console.log("Resultado: ", resultado13);