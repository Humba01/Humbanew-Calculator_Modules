const valorBase1: string = "2";

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

let comp1 = somaValoresDoNvlPotenciacao(potNvl1, 1);
let comp2 = somaValoresDoNvlPotenciacao(potNvl2, 2);
let comp3 = somaValoresDoNvlPotenciacao(potNvl3, 3);
let comp4 = somaValoresDoNvlPotenciacao(potNvl4, 4);
let comp5 = somaValoresDoNvlPotenciacao(potNvl5, 5);

let resultadoParcial4 = comp1 * comp2 * comp3 * comp4 * comp5;

console.log("Resultado: ", resultadoParcial4);

let traducaoParaNumero = parseFloat(valorBase1);

let resultado4 = traducaoParaNumero ** resultadoParcial4;

console.log("Resultado da Operação: ", resultado4);