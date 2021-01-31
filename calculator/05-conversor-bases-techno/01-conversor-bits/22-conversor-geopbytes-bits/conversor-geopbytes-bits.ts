const valoresConvGeopbytesBits: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGeopbytesBits.length; t++) {
  if(valoresConvGeopbytesBits[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGeopbytesBits[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado22 = (total * 8) * 1024 ** 10;
console.log("Resultado: ", resultado22);