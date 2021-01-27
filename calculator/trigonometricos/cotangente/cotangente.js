var valoresParaRealizarCotangente = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarCotangente.length; g++) {
    if (valoresParaRealizarCotangente[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarCotangente[g]);
        console.log("Valor para realizar o cotangente: ", total);
    }
}
var resultado11 = 1 / Math.tan(total);
console.log("Resultado do Cotangente: ", resultado11);
