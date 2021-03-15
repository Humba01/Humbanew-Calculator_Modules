const valoresConvGigabytesBrontobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesBrontobytes.length; t++) {
  if(valoresConvGigabytesBrontobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesBrontobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado19 = total / 1024 ** 6;
console.log("Resultado: ", resultado19);