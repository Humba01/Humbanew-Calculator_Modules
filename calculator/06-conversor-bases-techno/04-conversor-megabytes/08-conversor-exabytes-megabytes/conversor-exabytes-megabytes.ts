const valoresConvExabytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesMegabytes.length; t++) {
  if(valoresConvExabytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado14 = total * 1024 ** 4;
console.log("Resultado: ", resultado14);