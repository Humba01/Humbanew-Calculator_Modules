const valoresConvYottabytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesMegabytes.length; t++) {
  if(valoresConvYottabytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado16 = total * 1024 ** 5;
console.log("Resultado: ", resultado16);