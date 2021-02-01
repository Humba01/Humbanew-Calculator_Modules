const valoresConvKilobytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesExabytes.length; t++) {
  if(valoresConvKilobytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado13 = total / 1024 ** 5;
console.log("Resultado: ", resultado13);