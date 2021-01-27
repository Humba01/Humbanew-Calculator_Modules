var valoresParaRealizarSenoHiperbolico = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarSenoHiperbolico.length; g++) {
    if (valoresParaRealizarSenoHiperbolico[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarSenoHiperbolico[g]);
        console.log("Valor para realizar o seno hiperbólico: ", total);
    }
}
var resultado12 = Math.sinh(total);
console.log("Resultado do Seno Hiperbólico: ", resultado12);
