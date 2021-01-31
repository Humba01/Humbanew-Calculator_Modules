var valoresParaRealizarCotangenteHiperbolica = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarCotangenteHiperbolica.length; g++) {
    if (valoresParaRealizarCotangenteHiperbolica[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarCotangenteHiperbolica[g]);
        console.log("Valor para realizar o cotangente hiperbólica: ", total);
    }
}
var resultado17 = 1 / Math.tanh(total);
console.log("Resultado do Cotangente Hiperbólica: ", resultado17);
