var valoresParaRealizarCossecanteHiperbolica = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarCossecanteHiperbolica.length; g++) {
    if (valoresParaRealizarCossecanteHiperbolica[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarCossecanteHiperbolica[g]);
        console.log("Valor para realizar o cossecante hiperbólica: ", total);
    }
}
var resultado16 = 1 / Math.sinh(total);
console.log("Resultado do Cossecante Hiperbólica: ", resultado16);
