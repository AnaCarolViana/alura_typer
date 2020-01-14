var frase = $(".fraseDesafio").text()
var numeroPalavras = frase.split(" ").length
var tamanhoFrase = $("#tamanhoFrase")
tamanhoFrase.text(numeroPalavras);

var campo = $(".campoDigitacao")
campo.on("input", function(){
    var conteudo = campo.val()
    var qtdPalavras = conteudo.split(/\S+/).length-1
    $(".contadorPalavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length
    $(".contadorCaracteres").text(qtdCaracteres);

});
