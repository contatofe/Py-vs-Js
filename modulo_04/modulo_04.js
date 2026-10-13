// O laço for em JS utiliza "of" diferentemente de Python.
// Para acrescentar itens em um array utilizamos o .push em JS

// const precos = [100, 50, 200];
// const precosComDesconto = [];

// for (const preco of precos) {
//   precosComDesconto.push(preco * 0.9);
// }

// console.log(precosComDesconto);

// Para utilizar .map em JS podemos colocá-lo junto de uma arrow function

const precos = [100, 50, 200];

const precosComDesconto = precos.map((preco) => preco * 0.9);

// console.log(precosComDesconto);

// Exercício 01

const precosExercicio = precos.map((preco) => preco * 0.8);
console.log(`os resultados do exercício são ${precosExercicio}`);

// .filter()

const precosFiltrados = precos.filter((preco) => preco >= 100);

// console.log(precosFiltrados);

const precosFiltrados2 = precos.filter((preco) => preco < 100);

// console.log(precosFiltrados2);

//.filter + .map

const precosSelecionados = precos
  .filter((preco) => preco >= 100)
  .map((preco) => preco * 0.8);

// console.log(precosSelecionados);

// Exercício 02

const precos2 = [40, 100, 150, 200];

const precosExercicio2 = precos2
  .filter((preco) => preco >= 150)
  .map((preco) => preco * 0.7);

console.log(`O resultado do exercício 2 é: ${precosExercicio2}`);

// Não confundir com a solução abaixo

const precosExercicio3 = precos2
  .map((preco) => preco * 0.7)
  .filter((preco) => preco >= 150);

console.log(`O resultado do exercício 2 não é: ${precosExercicio3}`);

// Essa segunda solução aplica o desconto antes de filtrar, logo a lista volta vazia, porque não existem valores menores ou iguais a 150 após o desconto ser aplicado.

//Para reproduzir a compreensão de lista errada realizada de python precisaria um ternário condicional, descrita abaixo:

// const resultado = precos2.map(
//   (preco) => preco >= 150 ? preco * 0.7 : preco
// );
