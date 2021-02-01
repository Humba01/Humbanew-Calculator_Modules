var valoresConvJotabytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesMegabytes.length; t++) {
    if (valoresConvJotabytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado26 = total * Math.pow(1024, 10);
console.log("Resultado: ", resultado26);
