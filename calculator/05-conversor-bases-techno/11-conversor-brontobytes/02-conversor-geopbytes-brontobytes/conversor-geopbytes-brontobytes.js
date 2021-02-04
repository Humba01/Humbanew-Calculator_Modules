var valoresConvGeopbytesBrontobytes = ["8", "64"];
var total = 0;
for (var t = 0; t < valoresConvGeopbytesBrontobytes.length; t++) {
    if (valoresConvGeopbytesBrontobytes[t] == "") {
        total = total + 0;
    }
    else {
        total = total + parseFloat(valoresConvGeopbytesBrontobytes[t]);
        console.log("Valor para a conversão: ", total);
    }
}
var resultado2 = total * 1024;
console.log("Resultado: ", resultado2);
