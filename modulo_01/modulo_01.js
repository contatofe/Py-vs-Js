//if/else tradicionais

const nota = 6;
let resultado;

if (nota >= 7) {
  resultado = "Aprovado";
} else {
  resultado = "Reprovado";
}

console.log(resultado);

//if/else ternários

const notaT = 8;
const resultadoT = notaT >= 7 ? "Aprovado" : "Reprovado";
console.log(resultadoT);

//Exercício

const tarefasPendentes = 1;

const mensagem =
  tarefasPendentes > 0 ? "Há tarefas pendentes" : "Tudo concluído";

console.log(mensagem);
