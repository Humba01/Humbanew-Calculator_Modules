const valoresConvMegabytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvMegabytesZettabytes.length; t++) {
  if(valoresConvMegabytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvMegabytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado17 = total / 1024 ** 6;
console.log("Resultado: ", resultado17);