const valoresConvGeopbytesSaganbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesSaganbytes.length; t++) {
  if(valoresConvGeopbytesSaganbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesSaganbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado = total / 1024;
console.log("Resultado: ", resultado);