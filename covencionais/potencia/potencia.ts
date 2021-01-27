const valoresAPotencializar: string[] = ["2", "3.5", "32.2", "5"];

const valorBase: string = "2";

var total = 0;

var resultado3 = 0;

for(let v = 0; v < valoresAPotencializar.length; v++) {
    total = total + parseFloat(valoresAPotencializar[v]);
    console.log("Valor da Potencia:", total);
}

resultado3 = parseFloat(valorBase) ** total;
console.log("Resultado:", resultado3);