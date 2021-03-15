var valoresConvBytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvBytesBrontobytes.length; t++) {
    if (valoresConvBytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvBytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado19 = total / Math.pow(1024, 9);
console.log("Resultado: ", resultado19);
