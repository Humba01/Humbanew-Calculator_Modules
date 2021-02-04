var valoresConvPetabytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesSaganbytes.length; t++) {
    if (valoresConvPetabytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado11 = total / Math.pow(1024, 6);
console.log("Resultado: ", resultado11);
