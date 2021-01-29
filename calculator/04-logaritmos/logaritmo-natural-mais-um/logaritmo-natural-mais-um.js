var valoresLogNaturalMUm = ["3", "12"];
var total = 0;
for (var t = 0; t < valoresLogNaturalMUm.length; t++) {
    if (valoresLogNaturalMUm[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresLogNaturalMUm[t]);
        console.log("Valor para fazer Log Natural Mais Um: ", total);
    }
}
var resultado4 = Math.log1p(total);
console.log("Resultado: ", resultado4);
