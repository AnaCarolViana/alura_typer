$(".botaoFrase").click(fraseAleatoria);

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFrase)
};

function trocaFrase(data){
        var frase = $(".fraseDesafio")
        var fraseAleatoria =Math.floor(Math.random() * data.length)
        frase.text(data[fraseAleatoria].texto)
        atualizaTamanhoFrase()
        atualizaTempoInicial(data[fraseAleatoria].tempo)
};