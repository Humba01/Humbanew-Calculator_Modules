var valoresConvGeopbytesSaganbytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesSaganbytes.length; t++) {
    if (valoresConvGeopbytesSaganbytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesSaganbytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado = total / 1024;
console.log("Resultado: ", resultado);
