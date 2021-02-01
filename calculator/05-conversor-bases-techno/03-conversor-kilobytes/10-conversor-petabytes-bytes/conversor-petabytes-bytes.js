var valoresConvPetabytesBytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesBytes.length; t++) {
    if (valoresConvPetabytesBytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesBytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado12 = total * Math.pow(1024, 5);
console.log("Resultado: ", resultado12);
