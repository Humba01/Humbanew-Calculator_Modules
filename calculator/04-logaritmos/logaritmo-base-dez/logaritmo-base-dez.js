var valoresLogBaseDez = ["3", "12"];
var total = 0;
for (var t = 0; t < valoresLogBaseDez.length; t++) {
    if (valoresLogBaseDez[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresLogBaseDez[t]);
        console.log("Valor para fazer Log na Base 10: ", total);
    }
}
var resultado2 = Math.log10(total);
console.log("Resultado: ", resultado2);
