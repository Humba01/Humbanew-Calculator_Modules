const valores: string[] = ["2", "3.5", "32.2", "5"];

var total = 0;

for(let v = 0; v < valores.length; v++) {
    total = total + parseFloat(valores[v]);
}

console.log("Valor Somado:", total);