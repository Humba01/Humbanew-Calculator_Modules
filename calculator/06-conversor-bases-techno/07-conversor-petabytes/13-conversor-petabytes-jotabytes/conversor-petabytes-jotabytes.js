var valoresConvPetabytesJotabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesJotabytes.length; t++) {
    if (valoresConvPetabytesJotabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesJotabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado13 = total / Math.pow(1024, 7);
console.log("Resultado: ", resultado13);
