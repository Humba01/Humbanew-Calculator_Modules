var valoresConvGeopbytesMegabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesMegabytes.length; t++) {
    if (valoresConvGeopbytesMegabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesMegabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado22 = total * Math.pow(1024, 8);
console.log("Resultado: ", resultado22);
