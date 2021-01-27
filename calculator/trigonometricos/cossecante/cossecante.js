var valoresParaRealizarCossecante = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarCossecante.length; g++) {
    if (valoresParaRealizarCossecante[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarCossecante[g]);
        console.log("Valor para realizar o cossecante: ", total);
    }
}
var resultado10 = 1 / Math.sin(total);
console.log("Resultado do Cossecante: ", resultado10);
