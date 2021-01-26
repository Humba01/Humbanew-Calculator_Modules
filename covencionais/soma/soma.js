var valores = ["2", "3.0"];
var expressaoIntString = /(\d+)?/ig;
var expressaoFloatString = /(\d+)?\.(\d+)?/ig;
console.log(new RegExp(expressaoIntString, "gi").test(valores[0]));
console.log(new RegExp(expressaoFloatString, "gi").test(valores[0]));
console.log(new RegExp(expressaoIntString, "gi").test(valores[1]));
console.log(new RegExp(expressaoFloatString, "gi").test(valores[1]));
var totalDaConta = 0;
