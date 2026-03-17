// Utilizando o método forEach()
const elemento = document.querySelector(".ex1");
const numeros = [45, 4, 9, 16, 25];

let texto = "";
function apresentaItem(item) {
  texto = texto + item + "<br>";
}

numeros.forEach(apresentaItem);

elemento.innerHTML = texto;


// Utilizando o método map()
const elemento2 = document.querySelector(".ex2");
const numeros2 = [45, 4, 9, 16, 25];

let texto2 = "";
function apresentarItemMultiplicado(item) {
  texto2 = texto2 + item * 2 + "<br>";
}

const numerosNovo = numeros2.map(apresentarItemMultiplicado);

elemento2.innerHTML = texto2;


// Utilizando o método flatMap()
const elemento3 = document.querySelector(".ex3");
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let texto3 = "";

function ocorrenciaFlatMap(item) {
  texto3 += item + " | " + item * 10 + "<br>";
}

const numero3Novo = numeros3.flatMap(ocorrenciaFlatMap);

elemento3.innerHTML = texto3;


// Utilizando o método filter()
const elemento4 = document.querySelector(".ex4");
const numero4 = [20, 49, 30, 2, 5]

let texto4 = "";

function maiores20(item) {
  return (item > 20);
}

const numeros4Novo = numero4.filter(maiores20);

elemento4.innerHTML = numeros4Novo.join("<br>");


// Utilizando o método reduce();
const elemento5 = document.querySelector(".ex5");
const numero5 = [20, 50, 30, 2, 5]

function somarItem(acumulador, item) {
  return acumulador + item;
}

let resultadoSoma = numero5.reduce(somarItem);

elemento5.innerHTML = resultadoSoma;


// Utilizando o método every()
const elemento6 = document.querySelector(".ex6");

const numero6 = [20, 50, 30, 2, 5];
function verificarTodosMioresQue20(item) {
  return item > 20;
}

let todosMaioresQue20 = numero6.every(verificarTodosMioresQue20);

elemento6.innerHTML = todosMaioresQue20;


/// Utilizando o some()
const elemento7 = document.querySelector(".ex7");
const numero7 = [20, 50, 30, 2, 5];

function verificarAlgunsMaioresQue20(item) {
  return item > 20;
}

let algunsMaioresQue20 = numero7.some(verificarAlgunsMaioresQue20);

elemento7.innerHTML = algunsMaioresQue20;


// Utilizando o método Array.from()
let alfabeto = "ABCEFGHIJKLMNOPQRSTUVWXYZ";
const alfabetoArray = Array.from(alfabeto);

console.log(alfabetoArray);

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const idsArray = Array.from(ids, (item) => item * 10);

console.log(idsArray);


// Utilizando métoo keys()
const frutas = ["Uva", "Laranja", "Tangerina"];
const frutasKeys = frutas.keys();

let texto5 = "";
for (let item of frutasKeys) {
  texto5 += item + "<br>";
}

document.querySelector(".ex8").innerHTML = texto5