var valoresParaRealizarSecante = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarSecante.length; g++) {
    if (valoresParaRealizarSecante[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarSecante[g]);
        console.log("Valor para realizar o secante: ", total);
    }
}
var resultado9 = 1 / Math.cos(total);
console.log("Resultado do Secante: ", resultado9);
