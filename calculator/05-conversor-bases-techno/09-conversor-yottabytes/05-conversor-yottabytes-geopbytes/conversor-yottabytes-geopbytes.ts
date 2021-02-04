const valoresConvYottabytesGeopbytes: string[] = ["8", "64"];

var total = 0;

for(let t = 0; t < valoresConvYottabytesGeopbytes.length; t++) {
  if(valoresConvYottabytesGeopbytes[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresConvYottabytesGeopbytes[t]);
    console.log("Valor para a conversão: ", total);
  }
}

let resultado5 = total / 1024 ** 3;
console.log("Resultado: ", resultado5);