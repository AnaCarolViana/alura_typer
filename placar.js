
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody")
    var usuario = "Ana"
    var numeroPalavras = $(".contadorPalavras").text()
  
    var linha =  novaLinha(usuario, numeroPalavras)
    linha.find(".botaoRemover").click(removeLinha)

    corpoTabela.append(linha)
};

function novaLinha(usuario, palavras){
    var linha = $("<tr>")
    var colunaUsuario = $("<td>").text(usuario)
    var colunaPalavras = $("<td>").text(palavras)
    var colunaRemover = $("<td>")
    
    var link = $("<a>").addClass("botaoRemover").attr("href","#")
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete")

    link.append(icone)
    colunaRemover.append(link)
    linha.append(colunaUsuario)
    linha.append(colunaPalavras)
    linha.append(colunaRemover)

    return linha
};

function removeLinha(){
    event.preventDefault()
    $(this).parent().parent().remove()
    }
