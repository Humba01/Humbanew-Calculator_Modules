var valoresConvPetabytesGigabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesGigabytes.length; t++) {
    if (valoresConvPetabytesGigabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesGigabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado12 = total * Math.pow(1024, 2);
console.log("Resultado: ", resultado12);
