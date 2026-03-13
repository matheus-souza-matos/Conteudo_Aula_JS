// Primeiro Array
// const frutas = ["Maçã", "Melância", "Morango", "Uva"];
// console.log(frutas);


// Adicionando itens ao array vazio
const carros = [];
carros[0] = "Volksvagem";
carros[1] = "Fiat";
carros[2] = "Ferrari";

console.log(carros);


// Adicionando array com New Array
const cores = new Array("Vermelho", "Amarelo", "Preto", "Branco");

console.log(cores);
console.log(cores[2]);


// Alterando elementos de Array
// const frutas = ["Maçã", " Melância", " Morango", " Uva"];
// frutas[0] = "Laranja";
// console.log(frutas);

// Convertendo Array em String
// let stringFrutas = frutas.toString();

// console.log(stringFrutas);
// console.log(typeof frutas);


// Exemplos de elementos em Array
const pessoa = {
    primeiroNome: "Matheus",
    UtimoNome: "Matos",
    idade: 23
};

function minhaFuncao(){
    return "Olá";
}

const meuArray = [];

meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao();

console.log(meuArray);


// Acessando a propriedade length
const frutas = ["Maçã", " Melância", " Morango", " Uva"];
console.log(frutas.length);
console.log(frutas[frutas.length -1]);


// Usando ForEach em Array
const elemento = document.querySelector(".ex1");
const comida = ["Macarrão", "Hambúrguer", "Pizza", "Salada", "Carne"];

// Adicionando item no Array
comida.push("Coxinha");
comida.push("Kibe");
comida.push("Miojo");

let texto = "<ul>";

function retornaItem(item){
    texto += "<li>" + item + "</li>";
}

comida.forEach(retornaItem);

texto += "</ul>";

elemento.innerHTML = texto;

