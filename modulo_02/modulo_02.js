const tarefasPendentes = [];
let mensagem;

if (tarefasPendentes) {
  mensagem = "A condição foi considerada verdadeira";
} else {
  mensagem = "A condição foi considerada falsa";
}

console.log(mensagem);
console.log(tarefasPendentes);

//Obs.: [] é "falsy" em Python porém "truthy" em JavaScript

const desconto = 0;
const descontoFinal = desconto || 10;
console.log(descontoFinal);

//Obs.: 0 é considerado "falsy" então o operador || escolhe o segundo número (10)

const desconto2 = 0;

const descontoFinal2 = desconto2 ?? 10;

console.log(descontoFinal2);

// Em Javascript os valores "null" e "undefined" são considerados ausentes. Podemos usar o operador ?? que seleciona o segundo valor quando o primeiro for ausente, preservando o 0.

//Exercício

const estoque = "0";

const estoqueFinal = estoque ?? 20;

console.log(estoqueFinal);
