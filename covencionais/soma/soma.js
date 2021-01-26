var valores = ["2", "3.0"];
var expressaoIntString = /\"\b+\"/ig;
var expressaoFloatString = /\"\b+\.\b+\"/ig;
console.log(new RegExp(expressaoIntString).test(valores[0]));
var totalDaConta = 0;
