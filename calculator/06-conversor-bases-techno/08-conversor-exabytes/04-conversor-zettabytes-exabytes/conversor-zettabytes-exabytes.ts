const valoresConvZettabytesExabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvZettabytesExabytes.length; t++) {
  if(valoresConvZettabytesExabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvZettabytesExabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado4 = total * 1024 ** 2;
console.log("Resultado: ", resultado4);