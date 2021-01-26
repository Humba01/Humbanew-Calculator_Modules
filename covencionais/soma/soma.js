var valores = ["2", "3.0"];
var verificaErroTipoUm = /(\d+[a-zA-Z]+\d+)/gi;
var verificaErroTipoDois = /(\d+[a-zA-Z]+\d+[a-zA-Z]+)/gi;
function testaEntradaUsuario(regex, tagsParaRegex, alvoParaAnalise) {
    if (regex === void 0) { regex = RegExp || ""; }
    if (tagsParaRegex === void 0) { tagsParaRegex = ""; }
    if (alvoParaAnalise === void 0) { alvoParaAnalise = ""; }
}
var totalDaConta = 0;
