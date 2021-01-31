const valoresParaRealizarCossecante: string[] = ["30", "15"];

var total = 0;

for(let g = 0; g < valoresParaRealizarCossecante.length; g++) {
  if(valoresParaRealizarCossecante[g] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresParaRealizarCossecante[g]);
    console.log("Valor para realizar o cossecante: ", total);
  }
}

let resultado10 = 1 / Math.sin(total);
console.log("Resultado do Cossecante: ", resultado10);