const valoresConvExabytesKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvExabytesKilobytes.length; t++) {
  if(valoresConvExabytesKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvExabytesKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado14 = total * 1024 ** 5;
console.log("Resultado: ", resultado14);