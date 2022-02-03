var cartas1= {
    nome: "Homem aranha",
    imagem : "https://disneyplusbrasil.com.br/wp-content/uploads/2021/08/Homem-Aranha-direitos-da-Sony.jpg",
    atributos: {
        Ataque: "= " + 7,
        Defesa:"= " + 8,
        Magia:"= " + 6
    }
}

var cartas2 = {
    nome: "Darth-Vader",
    imagem : "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
    atributos: {
        Ataque:  "= " + 9,
        Defesa: "= " + 5,
        Magia: "= " + 2
    }

}

var cartas3 = {
    nome: "Power Rangers",
    imagem : "https://1.bp.blogspot.com/-djtRidWeyGQ/YCbEmT2AlPI/AAAAAAAAKf4/5Hc63knEk3k7d_121CHUjPP7yTw6L82pgCLcBGAsYHQ/s790/Power-Rangers-De-Gra%25C3%25A7a.png",
    atributos: {
        Ataque: "= " + 5,
        Defesa: "= " + 8,
        Magia: "= " + 10
    }

}

var cartas = [cartas1,cartas2,cartas3]

var cartaMaquina
var cartaJogador

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina] 

    var numeroCartaJogador = parseInt(Math.random() * 3)

    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]  
    
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirCartaJogador()
}

function obtemAtributoSelecionado() {
   var radioAtributos = document.getElementsByName("atributo") 
   for (var i=0; i <  radioAtributos.length; i++) {
       if (radioAtributos[i].checked == true) {
           return radioAtributos[i].value

       }
   }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
   
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributo[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu!!!</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributo[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu!!!</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empate</p>"
    }
    divResultado.innerHTML = htmlResultado('btnJogar').true

}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto =""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ""
 + cartaJogador.atributos[atributo] + "<br>"   }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
    
}