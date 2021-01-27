var valores = ["2", "3.5", "32.2", "5", ""];
var total = 0;
for (var v = 0; v < valores.length; v++) {
    if (valores[v] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valores[v]);
    }
}
console.log("Valor Somado:", total);
