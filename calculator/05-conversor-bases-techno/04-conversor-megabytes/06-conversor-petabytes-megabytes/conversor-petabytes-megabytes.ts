const valoresConvPetabytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesMegabytes.length; t++) {
  if(valoresConvPetabytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado12 = total * 1024 ** 3;
console.log("Resultado: ", resultado12);