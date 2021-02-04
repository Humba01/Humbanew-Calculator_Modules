const valoresConvGeopbytesPetabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesPetabytes.length; t++) {
  if(valoresConvGeopbytesPetabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesPetabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado10 = total * 1024 ** 5;
console.log("Resultado: ", resultado10);