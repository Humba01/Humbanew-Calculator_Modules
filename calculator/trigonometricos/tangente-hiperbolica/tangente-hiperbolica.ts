const valoresParaRealizarTangenteHiperbolica: string[] = ["30", "15"];

var total = 0;

for(let g = 0; g < valoresParaRealizarTangenteHiperbolica.length; g++) {
  if(valoresParaRealizarTangenteHiperbolica[g] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresParaRealizarTangenteHiperbolica[g]);
    console.log("Valor para realizar o tangente hiperbólica: ", total);
  }
}

let resultado14 = Math.tanh(total);
console.log("Resultado do Tangente Hiperbólica: ", resultado14);