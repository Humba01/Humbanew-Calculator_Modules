const valoresConvPetabytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesBits.length; t++) {
  if(valoresConvPetabytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado12 = (total * 8) * 1024 ** 5;
console.log("Resultado: ", resultado12);