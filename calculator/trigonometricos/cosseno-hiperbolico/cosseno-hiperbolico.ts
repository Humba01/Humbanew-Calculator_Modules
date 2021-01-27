const valoresParaRealizarCossenoHiperbolico: string[] = ["30", "15"];

var total = 0;

for(let g = 0; g < valoresParaRealizarCossenoHiperbolico.length; g++) {
  if(valoresParaRealizarCossenoHiperbolico[g] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresParaRealizarCossenoHiperbolico[g]);
    console.log("Valor para realizar o cosseno hiperbólico: ", total);
  }
}

let resultado13 = Math.cosh(total);
console.log("Resultado do Cosseno Hiperbólico: ", resultado13);