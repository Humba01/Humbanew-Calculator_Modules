const valoresConvKilobytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesTerabytes.length; t++) {
  if(valoresConvKilobytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado9 = total / 1024 ** 3;
console.log("Resultado: ", resultado9);