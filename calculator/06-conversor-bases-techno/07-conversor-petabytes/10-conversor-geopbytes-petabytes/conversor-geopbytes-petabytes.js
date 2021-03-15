var valoresConvGeopbytesPetabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesPetabytes.length; t++) {
    if (valoresConvGeopbytesPetabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesPetabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado10 = total * Math.pow(1024, 5);
console.log("Resultado: ", resultado10);
