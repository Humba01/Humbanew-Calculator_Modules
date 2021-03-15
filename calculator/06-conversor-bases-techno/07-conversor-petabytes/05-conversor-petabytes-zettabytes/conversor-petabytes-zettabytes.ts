const valoresConvPetabytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesZettabytes.length; t++) {
  if(valoresConvPetabytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado5 = total / 1024 ** 3;
console.log("Resultado: ", resultado5);