const valoresParaRealizarSecanteHiperbolica: string[] = ["30", "15"];

var total = 0;

for(let g = 0; g < valoresParaRealizarSecanteHiperbolica.length; g++) {
  if(valoresParaRealizarSecanteHiperbolica[g] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresParaRealizarSecanteHiperbolica[g]);
    console.log("Valor para realizar o secante hiperbólica: ", total);
  }
}

let resultado15 = 1 / Math.cosh(total);
console.log("Resultado do Secante Hiperbólica: ", resultado15);