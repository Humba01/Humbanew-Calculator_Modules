var valores: string[] = ["50", "44", "100", "300"];

var valorTotalPConv = 0;

var numeroPontoFlutuante: number;

for(let y = 0; y < valores.length; y++) {
  if(valores[y] == "") {
    valorTotalPConv = valorTotalPConv + 0;
  } else {
    valorTotalPConv = valorTotalPConv + parseFloat(valores[y]);
    console.log("\nEtapa 1 => Valor Total: ", valorTotalPConv);
  }
}

var numeroBinarioConstructor: string[] = [];
var numeroBinarioSinal: string = "";
var numeroBinarioResultado: string = "";

if(valorTotalPConv < 0) {
  numeroBinarioSinal = numeroBinarioSinal + "1";
  console.warn("\tNúmero é negativo.", numeroBinarioSinal);
  valorTotalPConv = valorTotalPConv * -1;
}

if(valorTotalPConv > 0) {
  numeroBinarioSinal = numeroBinarioSinal + "0";
  console.warn("\tNúmero é positivo.", numeroBinarioSinal);
}

while(valorTotalPConv >= 2) {

  valorTotalPConv = Math.floor(valorTotalPConv) / 2;
  console.log("\nEtapa 2 => Dividindo para montar o número binário: ", valorTotalPConv);

  if(Number.isInteger(valorTotalPConv) == true) {
    numeroBinarioConstructor.push("0");
    valorTotalPConv = Math.floor(valorTotalPConv)
  }

  if(Number.isInteger(valorTotalPConv) == false) {
    numeroBinarioConstructor.push("1");
    valorTotalPConv = Math.floor(valorTotalPConv)
  }

  if(valorTotalPConv == 1) {
    numeroBinarioConstructor.push("1");
    valorTotalPConv = Math.floor(valorTotalPConv)
  }

  if(valorTotalPConv == 0) {
    numeroBinarioConstructor.push("0");
    valorTotalPConv = Math.floor(valorTotalPConv)
  }

  console.log("\nEtapa 3 => Construção do número binário: ", numeroBinarioConstructor);
}

numeroBinarioConstructor = numeroBinarioConstructor.reverse();
console.log("\nEtapa 4 => Inversão do construtor para a formação do resultado final: ", numeroBinarioConstructor);

for(let u = 0; u < numeroBinarioConstructor.length; u++) {
  numeroBinarioResultado = numeroBinarioResultado + numeroBinarioConstructor[u];
  console.log("\nEtapa 5 => Montando resultado final: ", numeroBinarioResultado);
}

console.log("\n\tEtapa 6 => Resultado Final: ", numeroBinarioSinal, numeroBinarioResultado);

// if(numeroPontoFlutuante == 1) {
//   // console.error("Função ainda em desenvolvimento!");

//   var numeroBinarioConstrutorInteiros: string[] = [];
//   var numeroBinarioConstrutorDecimais: string[] = [];

//   let pegaParteDecimal: RegExp = /\.(\d+)$/gi;
//   let pegaParteInteira: RegExp = /^(\d+)/gi;

//   while(valorTotalPConv >= 2.0) {
    
//     if(valorTotalPConv < 0.0) {
//       numeroBinarioConstrutorInteiros.push("1");
//     }

//     if(valorTotalPConv > 0.0) {
//       numeroBinarioConstrutorInteiros.push("0");
//     }

//   }

//   let w1 = valorTotalPConv.toString().match(pegaParteDecimal);
//   let w2 = valorTotalPConv.toString().match(pegaParteInteira);

//   // $1 = Math.floor($1) / 2;
  
//   console.log(w1, w2);

// }
