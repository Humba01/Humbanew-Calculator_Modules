var valoresConvExabytesYottabytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvExabytesYottabytes.length; t++) {
    if (valoresConvExabytesYottabytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvExabytesYottabytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado = total / 1024;
console.log("Resultado: ", resultado);
