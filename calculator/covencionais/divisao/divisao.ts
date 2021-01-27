const valoresADividir: string[] = ["2", "3.5", "32.2", "5"];

const valoresDivisao: string[] = ["1000"];

var total = 0;
var totalDivisao = 0;

for(let r = 0; r < valoresDivisao.length; r++) {
  if(valoresDivisao[r] == "") {
    total = total + 0;
  } else {
    totalDivisao = totalDivisao + parseFloat(valoresDivisao[r]);
    console.log("Valor a Dividir:", totalDivisao);
  }
}

for(let v = 0; v < valoresADividir.length; v++) {
  if(valoresADividir[v] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresADividir[v]);
    console.log("Valor que vai Dividir:", total);
  }
}

let resultado2: number = totalDivisao / total;
console.log("Resultado:", resultado2);
