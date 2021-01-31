const valoresConvBitsKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsKilobytes.length; t++) {
  if(valoresConvBitsKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado3 = (total / 8) / 1024;
console.log("Resultado: ", resultado3);