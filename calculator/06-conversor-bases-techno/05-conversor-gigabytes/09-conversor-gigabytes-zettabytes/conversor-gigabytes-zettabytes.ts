const valoresConvGigabytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvGigabytesZettabytes.length; t++) {
  if(valoresConvGigabytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvGigabytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado17 = total / 1024 ** 5;
console.log("Resultado: ", resultado17);