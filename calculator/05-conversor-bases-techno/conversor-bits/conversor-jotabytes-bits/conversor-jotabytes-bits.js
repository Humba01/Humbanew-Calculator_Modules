var valoresConvJotabytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesBits.length; t++) {
    if (valoresConvJotabytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado26 = (total * 8) * Math.pow(1024, 12);
console.log("Resultado: ", resultado26);
