const valoresConvKilobytesYottabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesYottabytes.length; t++) {
  if(valoresConvKilobytesYottabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesYottabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado15 = total / 1024 ** 6;
console.log("Resultado: ", resultado15);