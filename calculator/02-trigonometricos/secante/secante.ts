const valoresParaRealizarSecante: string[] = ["30", "15"];

var total = 0;

for(let g = 0; g < valoresParaRealizarSecante.length; g++) {
  if(valoresParaRealizarSecante[g] == "") {
    total = total + 0;
  } else {
  total = total + parseFloat(valoresParaRealizarSecante[g]);
  console.log("Valor para realizar o secante: ", total);
  }
}

let resultado9 = 1 / Math.cos(total);
console.log("Resultado do Secante: ", resultado9);