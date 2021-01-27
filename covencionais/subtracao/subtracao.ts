const valores: string[] = ["2", "3.5", "32.2", "5"];

const valoresSubtracao: string[] = ["1000"];

const tagsDaRegex = "gi";

var total = 0;
var totalSubtracao = 0;

for(let r = 0; r < valoresSubtracao.length; r++) {
  totalSubtracao = totalSubtracao + parseFloat(valoresSubtracao[r]);
  console.log("5,0 Valor a Subtrair:", totalSubtracao);
}

for(let v = 0; v < valores.length; v++) {
  total = total + parseFloat(valores[v]);
  console.log("Valor que vai Subtrair:", total);
}

let contaFinal: number = totalSubtracao - total;
console.log("Resultado:", contaFinal);
