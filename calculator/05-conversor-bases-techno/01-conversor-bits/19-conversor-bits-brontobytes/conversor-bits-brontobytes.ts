const valoresConvBitsBrontobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBitsBrontobytes.length; t++) {
  if(valoresConvBitsBrontobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBitsBrontobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado19 = (total / 8) / 1024 ** 9;
console.log("Resultado: ", resultado19);