const valoresConvPetabytesJotabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesJotabytes.length; t++) {
  if(valoresConvPetabytesJotabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesJotabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado13 = total / 1024 ** 7;
console.log("Resultado: ", resultado13);