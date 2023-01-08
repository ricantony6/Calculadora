let elementoResultado = document.querySelector(".js-resultado");
let botoesPadroes = document.querySelector(".js-btn-padroes");
let botaoresultado = document.querySelector(".js-btn-igual");
let botaoAC = document.querySelector(".js-btn-ac");
let botaoMaisMenos = document.querySelector(".js-btn-mais-menos");
let botaoDeletar = document.querySelector(".js-btn-Del");

function adicionarElementoAoInputResultado(numeroDigitado) {
    verificarSimboloDuplicado(numeroDigitado)
    if (verificarSimboloInicial(numeroDigitado)) return;
    elementoResultado.value += numeroDigitado;
}

function executarCalculo() {
    try {
        elementoResultado.value = eval(elementoResultado.value);
    } catch {
        alert("algo deu errado. Tente novamente");
    }
}

function limparResultado() {
  elementoResultado.value = "";
}

function trocarSinalDaConta() {
  if (Number(elementoResultado.value)) {
    elementoResultado.value = elementoResultado.value * -1;
  }
}





