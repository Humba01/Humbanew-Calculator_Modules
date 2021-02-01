var valoresConvSaganbytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesMegabytes.length; t++) {
    if (valoresConvSaganbytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado24 = total * Math.pow(1024, 9);
console.log("Resultado: ", resultado24);
