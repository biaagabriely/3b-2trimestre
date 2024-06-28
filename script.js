const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado  = document.querySelector(".texto-principal");

const pergintas= [
    {
        enunciado: "Pergunta 1",
        alternativasa: ["Alternativa 1", "ALternativa 2"],

    },
    { 
        enunciado: "Pergunta 2",
        alternativasa: ["Alternativa 1", "ALternativa 2"],

    },
    {
        enunciado: "Pergunta 3",
        alternativasa: ["Alternativa 1", "ALternativa 2"],

    }
];

let atual = 0;
let perguntaAtual;

function mostraPerguntas (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPerguntas();


