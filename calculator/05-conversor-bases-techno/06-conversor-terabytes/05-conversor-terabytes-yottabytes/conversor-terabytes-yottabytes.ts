const valoresConvTerabytesYottabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvTerabytesYottabytes.length; t++) {
  if(valoresConvTerabytesYottabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvTerabytesYottabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado5 = total / 1024 ** 3;
console.log("Resultado: ", resultado5);