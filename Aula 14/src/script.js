// Definindo uma array global
const times = ['São Paulo', 'Corinthians', 'Flamengo', 'Fluminense'];

// Utilizando o método indexOf()
let posicaoItem = times.indexOf('Flamengo');

console.log(times);
console.log(posicaoItem);

// Utilizando o método lastIndexOf()
const times2 = ['São Paulo', 'Corinthians', 'São Paulo', 'São Paulo'];

let posicaoItem2 = times2.lastIndexOf('São Paulo');

console.log(posicaoItem2);

// Utilizando o método includes()
let verificaExistenciaItem = times.includes('Palmeiras');

console.log(verificaExistenciaItem);

// Utilizando o método find()
const number = [4, 6, 83, 64, 2, 17];
let encontrarMaior = number.find(verificaValor);

function verificaValor(valor) {
  return valor > 50;
}

console.log(encontrarMaior);

// Utilizando o método findIndex()
let encontrarIndice = number.findIndex(verificaValor);
console.log(encontrarIndice);

// Utilizando o método findLast()
let encontrarMaiorFinal = number.findLast((valor) => valor > 50);
console.log(encontrarMaiorFinal);

// Utilizando o método findLastIndex()
let encontrarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);
console.log(encontrarIndiceMaiorFinal);