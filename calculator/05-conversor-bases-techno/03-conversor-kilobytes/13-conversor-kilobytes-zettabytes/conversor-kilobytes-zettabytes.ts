const valoresConvKilobytesZettabytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvKilobytesZettabytes.length; t++) {
  if(valoresConvKilobytesZettabytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvKilobytesZettabytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado17 = total / 1024 ** 7;
console.log("Resultado: ", resultado17);