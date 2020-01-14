var tempoInicial = $(".tempoDigitacao").text()
var campo = $(".campoDigitacao");

$(function(){
    atualizaTamanhoFrase()
    inicializaContadores()
    incicializaCronometro()
    $(".botaoReiniciar").click(reiniciaJogo)
});

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

function incicializaCronometro(){
    var tempoRestante = $(".tempoDigitacao").text()
        campo.one("focus", function(){
    var cronometro = setInterval(function(){
        tempoRestante--
            $(".tempoDigitacao").text(tempoRestante)
        if(tempoRestante < 1){ 
            campo.attr("disabled", true)
                clearInterval(cronometro)
            }
        },1000)
    })
};

function reiniciaJogo(){
    campo.attr("disabled", false)
    campo.val("")
    $(".contadorPalavras").text("0")
    $(".contadorCaracteres").text("0")
    $(".tempoDigitacao").text(tempoInicial)
    incicializaCronometro()
};