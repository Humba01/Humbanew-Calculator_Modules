var valoresConvGigabytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGigabytesBrontobytes.length; t++) {
    if (valoresConvGigabytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGigabytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado19 = total / Math.pow(1024, 6);
console.log("Resultado: ", resultado19);
