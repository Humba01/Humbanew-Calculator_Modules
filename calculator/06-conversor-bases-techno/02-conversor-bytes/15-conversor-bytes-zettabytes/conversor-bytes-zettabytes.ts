const valoresConvBytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvBytesZettabytes.length; t++) {
  if(valoresConvBytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvBytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado17 = total / 1024 ** 8;
console.log("Resultado: ", resultado17);