const valoresASubtrair: string[] = ["2", "3.5", "32.2", "5"];

const valoresSubtracao: string[] = ["1000"];

var total = 0;
var totalSubtracao = 0;

for(let r = 0; r < valoresSubtracao.length; r++) {
  if(valoresSubtracao[r] == "") {
    total = total + 0;
  } else {
    totalSubtracao = totalSubtracao + parseFloat(valoresSubtracao[r]);
    console.log("Valor a Subtrair:", totalSubtracao);
  }
}

for(let v = 0; v < valoresASubtrair.length; v++) {
  if(valoresASubtrair[v] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresASubtrair[v]);
    console.log("Valor que vai Subtrair:", total);
  }
}

let resultado: number = totalSubtracao - total;
console.log("Resultado:", resultado);
