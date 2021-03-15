var valoresConvPetabytesZettabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesZettabytes.length; t++) {
    if (valoresConvPetabytesZettabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesZettabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado5 = total / Math.pow(1024, 3);
console.log("Resultado: ", resultado5);
