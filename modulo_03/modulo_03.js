function dobrar(numero) {
  return numero * 2;
}

function triplicar(numero) {
  return numero * 3;
}

function quadrado(numero) {
  return numero ** 2;
}

function aplicarOperacao(numero, operacao) {
  return operacao(numero);
}

// console.log(aplicarOperacao(5, dobrar));
// console.log(aplicarOperacao(5, triplicar));
// console.log(aplicarOperacao(5, quadrado));

//aplicando arrow function

const quadradoArrow = (numero) => numero ** 2;

// console.log(quadradoArrow(5));

// formato com {} é obrigatório o return para não devolver undefined

const quadrado2 = (numero) => {
  return numero ** 2;
};

//Exercício -> arrow function + Função de callback

const metade = (numero) => numero / 2;
const somaDez = (numero) => {
  return numero + 10;
};

console.log(`resultado do exercício 1: ${aplicarOperacao(8, metade)}`);
console.log(`resultado do exercício 2: ${aplicarOperacao(8, somaDez)}`);
