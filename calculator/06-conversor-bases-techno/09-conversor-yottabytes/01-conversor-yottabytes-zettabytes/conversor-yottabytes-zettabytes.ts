const valoresConvYottabytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesZettabytes.length; t++) {
  if(valoresConvYottabytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado = total / 1024;
console.log("Resultado: ", resultado);