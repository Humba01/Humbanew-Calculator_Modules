const valoresConvJotabytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvJotabytesTerabytes.length; t++) {
  if(valoresConvJotabytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvJotabytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado16 = total * 1024 ** 8;
console.log("Resultado: ", resultado16);