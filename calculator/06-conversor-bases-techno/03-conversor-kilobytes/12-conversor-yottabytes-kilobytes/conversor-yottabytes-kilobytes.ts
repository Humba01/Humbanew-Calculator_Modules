const valoresConvYottabytesKilobytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesKilobytes.length; t++) {
  if(valoresConvYottabytesKilobytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesKilobytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado16 = total * 1024 ** 6;
console.log("Resultado: ", resultado16);