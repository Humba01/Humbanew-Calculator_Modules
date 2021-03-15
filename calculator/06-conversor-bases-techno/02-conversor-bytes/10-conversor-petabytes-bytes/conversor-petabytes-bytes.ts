const valoresConvPetabytesBytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesBytes.length; t++) {
  if(valoresConvPetabytesBytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesBytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado12 = total * 1024 ** 5;
console.log("Resultado: ", resultado12);