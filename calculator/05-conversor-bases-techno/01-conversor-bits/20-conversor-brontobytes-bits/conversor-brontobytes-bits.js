var valoresConvBrontobytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBrontobytesBits.length; t++) {
    if (valoresConvBrontobytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBrontobytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado20 = (total * 8) * Math.pow(1024, 9);
console.log("Resultado: ", resultado20);
