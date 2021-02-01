var valoresConvPetabytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesMegabytes.length; t++) {
    if (valoresConvPetabytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado12 = total * Math.pow(1024, 3);
console.log("Resultado: ", resultado12);
