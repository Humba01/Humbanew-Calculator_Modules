var valoresConvPetabytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvPetabytesBrontobytes.length; t++) {
    if (valoresConvPetabytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvPetabytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado7 = total / Math.pow(1024, 4);
console.log("Resultado: ", resultado7);
