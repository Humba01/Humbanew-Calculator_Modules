var valoresConvJotabytesPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvJotabytesPetabytes.length; t++) {
    if (valoresConvJotabytesPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvJotabytesPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado14 = total * Math.pow(1024, 7);
console.log("Resultado: ", resultado14);
