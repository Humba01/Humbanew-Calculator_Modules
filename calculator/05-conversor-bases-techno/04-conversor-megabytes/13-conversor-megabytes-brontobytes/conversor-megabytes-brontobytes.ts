const valoresConvMegabytesBrontobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesBrontobytes.length; t++) {
  if(valoresConvMegabytesBrontobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesBrontobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado19 = total / 1024 ** 7;
console.log("Resultado: ", resultado19);