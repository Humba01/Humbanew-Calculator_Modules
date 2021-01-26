var valores = ["2", "3.0"];
var verificaErroTipoUm = /(\d+[a-zA-Z]+)/gi;
var verificaErroTipoDois = /(\d+[a-zA-Z]+\d+)/gi;
var verificaErroTipoTres = /(\d+[a-zA-Z]+\d+[a-zA-Z]+)/gi;
var verificaErroTipoQuatro = /([a-zA-Z]+\d+[a-zA-Z]+\d+[a-zA-Z]+)/gi;
var verificaErroTipoCinco = /(\d+[a-zA-Z]+)(\.)(\d+[a-zA-Z]+)/gi;
var verificaErroTipoSeis = /(\d+[a-zA-Z]+\d+)(\.)(\d+[a-zA-Z]+\d+)/gi;
var verificaErroTipoSete = /(\d+[a-zA-Z]+\d+[a-zA-Z]+)(\.)(\d+[a-zA-Z]+\d+[a-zA-Z]+)/gi;
var verificaErroTipoOito = /([a-zA-Z]+\d+[a-zA-Z]+\d+[a-zA-Z]+)(\.)([a-zA-Z]+\d+[a-zA-Z]+\d+[a-zA-Z]+)/gi;
function testaEntradaUsuario(regex, tagsParaRegex, alvoParaAnalise) {
    if (regex === void 0) { regex = RegExp || ""; }
    if (tagsParaRegex === void 0) { tagsParaRegex = ""; }
    if (alvoParaAnalise === void 0) { alvoParaAnalise = ""; }
}
var totalDaConta = 0;
