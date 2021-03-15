const valoresConvGeopbytesMegabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesMegabytes.length; t++) {
  if(valoresConvGeopbytesMegabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesMegabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado22 = total * 1024 ** 8;
console.log("Resultado: ", resultado22);