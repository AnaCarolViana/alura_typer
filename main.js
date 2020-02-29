var tempoInicial = $(".tempoDigitacao").text()
var campo = $(".campoDigitacao");

$(function(){
    atualizaTamanhoFrase()
    inicializaContadores()
    inicializaCronometro()
    comparaPalavras()
    $(".botaoReiniciar").click(reiniciaJogo)
});

function atualizaTempoInicial(tempo){
    tempoInicial = tempo
    $(".tempoDigitacao").text(tempo)
}

function atualizaTamanhoFrase(){
    var frase = $(".fraseDesafio").text()
    var numeroPalavras = frase.split(" ").length
    var tamanhoFrase = $("#tamanhoFrase")
        tamanhoFrase.text(numeroPalavras)
};

function inicializaContadores(){
        campo.on("input", function(){
    var conteudo = campo.val()
    var qtdPalavras = conteudo.split(/\S+/).length-1
        $(".contadorPalavras").text(qtdPalavras);
    
    var qtdCaracteres = conteudo.length
        $(".contadorCaracteres").text(qtdCaracteres)
    
    })
};

function inicializaCronometro() {
    campo.one("focus", function() {
        var tempoRestante = $(".tempoDigitacao").text();
        var cronometro = setInterval(function() {
            tempoRestante--;
            $(".tempoDigitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometro);
                finalizaJogo()
            }
        }, 1000);
    })
};

function finalizaJogo(){
    campo.attr("disabled", true);
    campo.toggleClass("campoDesativado");
    inserePlacar()
};

function comparaPalavras(){
    campo.on("input", function(){
        var frase = $(".fraseDesafio").text()
    var digitado = campo.val()
    var comparavel = frase.substr(0,digitado.length)
        if(digitado == comparavel){
            campo.addClass("digitacaoCorreta")
            campo.removeClass("digitacaoIncorreta")
        } else {
            campo.addClass("digitacaoIncorreta")
            campo.removeClass("digitacaoCorreta")
        }
    });
}

function reiniciaJogo(){
    campo.attr("disabled", false)
    campo.val("")
    $(".contadorPalavras").text("0")
    $(".contadorCaracteres").text("0")
    $(".tempoDigitacao").text(tempoInicial)

    inicializaCronometro()
    campo.toggleClass("campoDesativado")
    campo.removeClass("digitacaoCorreta")
    campo.removeClass("digitacaoIncorreta")
};