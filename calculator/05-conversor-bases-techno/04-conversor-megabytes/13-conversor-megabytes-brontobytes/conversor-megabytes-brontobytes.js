var valoresConvMegabytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvMegabytesBrontobytes.length; t++) {
    if (valoresConvMegabytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvMegabytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado19 = total / Math.pow(1024, 7);
console.log("Resultado: ", resultado19);
