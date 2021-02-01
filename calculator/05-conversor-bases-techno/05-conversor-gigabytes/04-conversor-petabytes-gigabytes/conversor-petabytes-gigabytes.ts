const valoresConvPetabytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesGigabytes.length; t++) {
  if(valoresConvPetabytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado12 = total * 1024 ** 2;
console.log("Resultado: ", resultado12);