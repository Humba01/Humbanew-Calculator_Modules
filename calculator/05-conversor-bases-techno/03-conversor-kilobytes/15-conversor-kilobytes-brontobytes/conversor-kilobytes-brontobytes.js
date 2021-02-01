var valoresConvKilobytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvKilobytesBrontobytes.length; t++) {
    if (valoresConvKilobytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvKilobytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado19 = total / Math.pow(1024, 8);
console.log("Resultado: ", resultado19);
