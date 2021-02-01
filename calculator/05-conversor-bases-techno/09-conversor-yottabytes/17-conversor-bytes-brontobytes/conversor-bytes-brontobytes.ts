const valoresConvBytesBrontobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesBrontobytes.length; t++) {
  if(valoresConvBytesBrontobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesBrontobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado19 = total / 1024 ** 9;
console.log("Resultado: ", resultado19);