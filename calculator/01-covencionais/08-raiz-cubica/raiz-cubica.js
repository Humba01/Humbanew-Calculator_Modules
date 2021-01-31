var valoresARadiciarCubicamente = ["16", "32"];
var total3 = 0;
for (var r = 0; r < valoresARadiciarCubicamente.length; r++) {
    if (valoresARadiciarCubicamente[r] == "") {
        total3 = total3 + 0;
    }
    else {
        total3 = total3 + parseFloat(valoresARadiciarCubicamente[r]);
        console.log(total3);
    }
}
var resultado5 = Math.cbrt(total3);
console.log(resultado5);
