var valoresLogNatural = ["3", "12"];
var total = 0;
for (var t = 0; t < valoresLogNatural.length; t++) {
    if (valoresLogNatural[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresLogNatural[t]);
        console.log("Valor para fazer Log Natural: ", total);
    }
}
var resultado3 = Math.log(total);
console.log("Resultado: ", resultado3);
