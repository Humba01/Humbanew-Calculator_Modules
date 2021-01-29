const valoresParaRealizarArcoTangenteHiperbolica: string[] = ["30", "15"];

var total = 0;

for(let g = 0; g < valoresParaRealizarArcoTangenteHiperbolica.length; g++) {
  if(valoresParaRealizarArcoTangenteHiperbolica[g] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresParaRealizarArcoTangenteHiperbolica[g]);
    console.log("Valor para realizar o arco tangente hiperbólica: ", total);
  }
}

// Limite Máximo para valores numéricos = 10 ** 16.
if(total > 1 && total < 10 ** 1) {
  total = total / 10 ** 1;
}

if(total > 10 ** 1 && total < 10 ** 2) {
  total = total / 10 ** 2;
}

if(total > 10 ** 2 && total < 10 ** 3) {
  total = total / 10 ** 3;
}

if(total > 10 ** 3 && total < 10 ** 4) {
  total = total / 10 ** 4;
}

if(total > 10 ** 4 && total < 10 ** 5) {
  total = total / 10 ** 5;
}

if(total > 10 ** 5 && total < 10 ** 6) {
  total = total / 10 ** 6;
}

if(total > 10 ** 6 && total < 10 ** 7) {
  total = total / 10 ** 7;
}

if(total > 10 ** 7 && total < 10 ** 8) {
  total = total / 10 ** 8;
}

if(total > 10 ** 8 && total < 10 ** 9) {
  total = total / 10 ** 9;
}

if(total > 10 ** 9 && total < 10 ** 10) {
  total = total / 10 ** 10;
}

if(total > 10 ** 10 && total < 10 ** 11) {
  total = total / 10 ** 11;
}

if(total > 10 ** 11 && total < 10 ** 12) {
  total = total / 10 ** 12;
}

if(total > 10 ** 12 && total < 10 ** 13) {
  total = total / 10 ** 13;
}

if(total > 10 ** 13 && total < 10 ** 14) {
  total = total / 10 ** 14;
}

if(total > 10 ** 14 && total < 10 ** 15) {
  total = total / 10 ** 15;
}

if(total > 10 ** 15 && total < 10 ** 16) {
  total = total / 10 ** 16;
}

let resultado28 = Math.atanh(total);
console.log("Resultado do Arco Tangente Hiperbólica: ", resultado28);