const valoresConvPetabytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvPetabytesExabytes.length; t++) {
  if(valoresConvPetabytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvPetabytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado = total / 1024;
console.log("Resultado: ", resultado);