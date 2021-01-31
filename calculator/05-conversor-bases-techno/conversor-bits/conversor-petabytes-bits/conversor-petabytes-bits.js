var valoresConvPetabytesBits = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesBits.length; t++) {
    if (valoresConvPetabytesBits[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesBits[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado12 = (total * 8) * Math.pow(1024, 5);
console.log("Resultado: ", resultado12);
