  
$(".botaoFrase").click(fraseAleatoria);

function fraseAleatoria() {
    $(".spinner").show()
    $.get("http://localhost:3000/frases", trocaFrase)
    .fail(function(){
        $(".erro").show()
        setTimeout(function(){
            $(".erro").toggle()
        }, 2000)
   })
   .always(function(){
       $(".spinner").toggle()
   })
};

function trocaFrase(data){
        var frase = $(".fraseDesafio")
        var fraseAleatoria =Math.floor(Math.random() * data.length)
        frase.text(data[fraseAleatoria].texto)
        atualizaTamanhoFrase()
        atualizaTempoInicial(data[fraseAleatoria].tempo)
};

