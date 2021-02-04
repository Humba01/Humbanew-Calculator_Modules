var valoresConvSaganbytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvSaganbytesBrontobytes.length; t++) {
    if (valoresConvSaganbytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvSaganbytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado4 = total * Math.pow(1024, 2);
console.log("Resultado: ", resultado4);
