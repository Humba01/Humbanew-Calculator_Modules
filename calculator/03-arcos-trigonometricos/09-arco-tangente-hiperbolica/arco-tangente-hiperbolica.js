var valoresParaRealizarArcoTangenteHiperbolica = ["30", "15"];
var total = 0;
for (var g = 0; g < valoresParaRealizarArcoTangenteHiperbolica.length; g++) {
    if (valoresParaRealizarArcoTangenteHiperbolica[g] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresParaRealizarArcoTangenteHiperbolica[g]);
        console.log("Valor para realizar o arco tangente hiperbólica: ", total);
    }
}
// Limite Máximo para valores numéricos = 10 ** 16.
if (total > 1 && total < Math.pow(10, 1)) {
    total = total / Math.pow(10, 1);
}
if (total > Math.pow(10, 1) && total < Math.pow(10, 2)) {
    total = total / Math.pow(10, 2);
}
if (total > Math.pow(10, 2) && total < Math.pow(10, 3)) {
    total = total / Math.pow(10, 3);
}
if (total > Math.pow(10, 3) && total < Math.pow(10, 4)) {
    total = total / Math.pow(10, 4);
}
if (total > Math.pow(10, 4) && total < Math.pow(10, 5)) {
    total = total / Math.pow(10, 5);
}
if (total > Math.pow(10, 5) && total < Math.pow(10, 6)) {
    total = total / Math.pow(10, 6);
}
if (total > Math.pow(10, 6) && total < Math.pow(10, 7)) {
    total = total / Math.pow(10, 7);
}
if (total > Math.pow(10, 7) && total < Math.pow(10, 8)) {
    total = total / Math.pow(10, 8);
}
if (total > Math.pow(10, 8) && total < Math.pow(10, 9)) {
    total = total / Math.pow(10, 9);
}
if (total > Math.pow(10, 9) && total < Math.pow(10, 10)) {
    total = total / Math.pow(10, 10);
}
if (total > Math.pow(10, 10) && total < Math.pow(10, 11)) {
    total = total / Math.pow(10, 11);
}
if (total > Math.pow(10, 11) && total < Math.pow(10, 12)) {
    total = total / Math.pow(10, 12);
}
if (total > Math.pow(10, 12) && total < Math.pow(10, 13)) {
    total = total / Math.pow(10, 13);
}
if (total > Math.pow(10, 13) && total < Math.pow(10, 14)) {
    total = total / Math.pow(10, 14);
}
if (total > Math.pow(10, 14) && total < Math.pow(10, 15)) {
    total = total / Math.pow(10, 15);
}
if (total > Math.pow(10, 15) && total < Math.pow(10, 16)) {
    total = total / Math.pow(10, 16);
}
var resultado28 = Math.atanh(total);
console.log("Resultado do Arco Tangente Hiperbólica: ", resultado28);
