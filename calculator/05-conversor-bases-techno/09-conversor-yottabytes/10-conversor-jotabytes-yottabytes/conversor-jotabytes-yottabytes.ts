const valoresConvJotabytesYottabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesYottabytes.length; t++) {
  if(valoresConvJotabytesYottabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesYottabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = total * 1024 ** 5;
console.log("Resultado: ", resultado10);