var valoresConvZettabytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvZettabytesMegabytes.length; t++) {
    if (valoresConvZettabytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvZettabytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado18 = total * Math.pow(1024, 6);
console.log("Resultado: ", resultado18);
