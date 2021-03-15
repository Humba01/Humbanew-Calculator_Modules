const valoresConvPetabytesKiloytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesKiloytes.length; t++) {
  if(valoresConvPetabytesKiloytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesKiloytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado12 = total * 1024 ** 4;
console.log("Resultado: ", resultado12);