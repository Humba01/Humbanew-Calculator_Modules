const valoresLogBaseDois: string[] = ["3", "12"];

var total = 0;

for(let t = 0; t < valoresLogBaseDois.length; t++) {
  if(valoresLogBaseDois[t] == "") {
    total = total + 0;
  } else {
    total = total + parseFloat(valoresLogBaseDois[t]);
    console.log("Valor para fazer Log na Base 2: ", total);
  }
}

let resultado = Math.log2(total);
console.log("Resultado: ", resultado);