var valoresConvTerabytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesBits.length; t++) {
    if (valoresConvTerabytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado10 = (total * 8) * Math.pow(1024, 4);
console.log("Resultado: ", resultado10);
