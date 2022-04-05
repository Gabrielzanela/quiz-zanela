let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 
let placar = 0 

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantos anos eu tenho?",
    alternativaA : "15",
    alternativaB : "17",
    alternativaC : "16",
    correta      : "16",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Esporte favorito?",
    alternativaA : "Volêi",
    alternativaB : "Basquete",
    alternativaC : "Futebol",
    correta      : "Basquete",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Meu aniversário?",
    alternativaA : "19/10/2004",
    alternativaB : "22/12/2005",
    alternativaC : "24/10/2006",
    correta      : "22/12/2005",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Animal favorito?",
    alternativaA : "Gato",
    alternativaB : "Cachorro",
    alternativaC : "Cavalo",
    correta      : "Cachorro",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Estilo de música favorita??",
    alternativaA : "Pagode",
    alternativaB : "Funk",
    alternativaC : "trap",
    correta      : "trap",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Meu nome completo?",
    alternativaA : "Gabriel zanela machado de souza",
    alternativaB : "Gabriel Souza",
    alternativaC : "Gabriel Hugo",
    correta      : "Gabriel zanela machado de souza",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual escola eu estudo?",
    alternativaA : "Dinamica",
    alternativaB : "SENAI",
    alternativaC : "Santa Terezinha",
    correta      : "SENAI",
}

    const q8 = {
        numQuestao   : 8,
        pergunta     : "Comida Favorita?",
        alternativaA : "Linguiça",
        alternativaB : "Ovelha com barbecue",
        alternativaC : "Miojo",
        correta      : "Ovelha com barbecue",

    }        
    const q9 = {
        numQuestao   : 9,
        pergunta     : "Jogo favorito?",
        alternativaA : "CS-GO",
        alternativaB : "Fortnite",
        alternativaC : "LoL",
        correta      : "Fortnite",

    }
    const q10 = {
        numQuestao   : 10,
        pergunta     : "Marca favorita??",
        alternativaA : "Puma",
        alternativaB : "Adidas",
        alternativaC : "Nike",
        correta      : "Nike",

    }

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
   
    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        pontos += 10 
    } else 
    

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}