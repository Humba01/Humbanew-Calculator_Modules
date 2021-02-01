const valoresConvYottabytesGigabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesGigabytes.length; t++) {
  if(valoresConvYottabytesGigabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesGigabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado16 = total * 1024 ** 4;
console.log("Resultado: ", resultado16);