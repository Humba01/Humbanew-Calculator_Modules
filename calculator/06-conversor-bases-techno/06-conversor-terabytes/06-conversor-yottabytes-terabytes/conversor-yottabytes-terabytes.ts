const valoresConvYottabytesTerabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesTerabytes.length; t++) {
  if(valoresConvYottabytesTerabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesTerabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado6 = total * 1024 ** 3;
console.log("Resultado: ", resultado6);