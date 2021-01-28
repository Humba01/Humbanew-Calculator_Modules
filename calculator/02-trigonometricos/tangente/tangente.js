var valoresParaRealizarTangente = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarTangente.length; g++) {
    if (valoresParaRealizarTangente[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarTangente[g]);
        console.log("Valor para realizar o tangente: ", total);
    }
}
var resultado8 = Math.tan(total);
console.log("Resultado do Tangente: ", resultado8);
