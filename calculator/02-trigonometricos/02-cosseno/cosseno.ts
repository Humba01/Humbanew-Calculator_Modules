const valoresParaRealizarCosseno: string[] = ["30", "15"];

var total = 0;

for(let g = 0; g < valoresParaRealizarCosseno.length; g++) {
  if(valoresParaRealizarCosseno[g] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresParaRealizarCosseno[g]);
    console.log("Valor para realizar o cosseno: ", total);
  }
}

let resultado7 = Math.cos(total);
console.log("Resultado do Cosseno: ", resultado7);