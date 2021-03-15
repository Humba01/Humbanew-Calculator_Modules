const valoresConvExabytesSaganbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesSaganbytes.length; t++) {
  if(valoresConvExabytesSaganbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesSaganbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado9 = total / 1024 ** 5;
console.log("Resultado: ", resultado9);