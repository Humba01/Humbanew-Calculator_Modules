var valoresConvPetabytesExabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesExabytes.length; t++) {
    if (valoresConvPetabytesExabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesExabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado = total / 1024;
console.log("Resultado: ", resultado);
