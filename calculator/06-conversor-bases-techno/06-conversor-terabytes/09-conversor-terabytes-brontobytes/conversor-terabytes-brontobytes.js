var valoresConvTerabytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvTerabytesBrontobytes.length; t++) {
    if (valoresConvTerabytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvTerabytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado9 = total / Math.pow(1024, 5);
console.log("Resultado: ", resultado9);
