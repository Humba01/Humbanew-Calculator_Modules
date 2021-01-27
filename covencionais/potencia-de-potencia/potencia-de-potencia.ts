const valorBase1: string = "2";

const valorQuantidadeDePotenciacoes: number = 0; //2

const valorLimiteDePotenciacoes: number = 10;

const potNvl1: string[] = ["2.5"];
const potNvl2: string[] = ["5.4"];
const potNvl3: string[] = ["2.1"];
const potNvl4: string[] = ["1"];
const potNvl5: string[] = ["1"];

function somaValoresDoNvlPotenciacao(nvlPotenciacaoValores=[""], nvlPotenciacao=0) {
  var totalNvlPotenciacao = 0;

  for(let q = 0; q < nvlPotenciacaoValores.length; q++) {
    totalNvlPotenciacao = totalNvlPotenciacao + parseFloat(nvlPotenciacaoValores[q]);
    console.log("Soma da Potenciação => Nvl:", nvlPotenciacao, "_> ", totalNvlPotenciacao); 
  }
  
  return totalNvlPotenciacao;
}

let resultadoParcial4 = somaValoresDoNvlPotenciacao(potNvl1, 1) * somaValoresDoNvlPotenciacao(potNvl2, 2) * somaValoresDoNvlPotenciacao(potNvl3, 3) * somaValoresDoNvlPotenciacao(potNvl4, 4) * somaValoresDoNvlPotenciacao(potNvl5, 5);

console.log("Resultado: ", resultadoParcial4);

let resultado4 = parseFloat(valorBase1) ** resultadoParcial4;

console.log("Resultado da Operação: ", resultado4);