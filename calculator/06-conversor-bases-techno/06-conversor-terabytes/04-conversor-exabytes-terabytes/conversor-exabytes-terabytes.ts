const valoresConvExabytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesTerabytes.length; t++) {
  if(valoresConvExabytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado4 = total * 1024 ** 2;
console.log("Resultado: ", resultado4);