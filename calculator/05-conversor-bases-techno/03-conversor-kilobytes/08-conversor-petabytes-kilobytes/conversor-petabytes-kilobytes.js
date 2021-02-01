var valoresConvPetabytesKiloytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesKiloytes.length; t++) {
    if (valoresConvPetabytesKiloytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesKiloytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado12 = total * Math.pow(1024, 4);
console.log("Resultado: ", resultado12);
