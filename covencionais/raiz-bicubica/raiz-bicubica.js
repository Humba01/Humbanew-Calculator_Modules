var valoresARadiciar3 = ["16", "4"];
var total2 = 0;
for (var r = 0; r < valoresARadiciar3.length; r++) {
    total2 = total2 + parseFloat(valoresARadiciar3[r]);
    console.log(total2);
}
var resultado5 = Math.cbrt(Math.cbrt(total2));
console.log(resultado5);
