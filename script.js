const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual você prefere?",
        alternativas: [
            {
                texto: "Verão!",
                afirmacao: "Você é atraído (a) pelo calor e pela lealdade inabalável."
            },
            {
                texto: "Inverno!",
                afirmacao: "Você é atraído(a) pelo mistério e pela elegância."
            }
        ]
    },
    {
        enunciado: "Qual você teria?",
        alternativas: [
            {
                texto: "cão.",
                afirmacao: "representa aventura, parceria e um amor que é sempre protetor e apaixonado."
            },
            {
                texto: "gato.",
                afirmacao: "oferece um amor eterno e uma ligação intelectual profunda."
            }
        ]
    },
    {
        enunciado: "Você gosta mais de?",
        alternativas: [
            {
                texto: "Praia.",
                afirmacao: "Vocês dois compartilham uma conexão profunda com a natureza e uma energia vibrante."
            },
            {
                texto: "Montanha.",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: o sobrenatural."
            }
        ]
    },
    {
        enunciado: "Você prefere?",
        alternativas: [
            {
                texto: "café.",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: a natureza humana."
            },
            {
                texto: "chá.",
                afirmacao: ","
            }
        ]
    },
    {
        enunciado: "Você escolheria?",
        alternativas: [
            {
                texto: "Filme de ação.",
                afirmacao: "Você é Energético, entusiasmado, feliz, companheiro, amigável e excepcionalmente agregadores de pessoas. Com um Sentimento Extrovertido Dominante (Fe dom) tem prazer em ajudar as pessoas pelo bem do coletivo com seu jeito animado e uma genuína vontade de ver as pessoas sorrirem e estarem de bem com a vida, para que todo grupo esteja bem e seguindo em frente!  "
            },
            {
                texto: "Filme de comédia.",
                afirmacao: "Você se caracteriza por ser firme em assuntos práticos e por sua atração por instituições e, se apenas um adjetivo tivesse que ser escolhido para descrevê-lo, seria confiável. Para o ISTJ uma palavra dada é um compromisso. Em casa e no trabalho, tende a ser quieto(a) e sério(a), assim como perseverante e confiável.! "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você…";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
