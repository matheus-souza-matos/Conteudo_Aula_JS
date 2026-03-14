// Array global
const frutas = ["Morango", "Abacaxi", "Acerola", "Manga"];

// Utilizando a propriedade Length()

// let tamanhoFrutas = frutas.length;

// frutas.length = 2;
console.log(frutas);


// Utilizando método toString()
let minhasFrutas = frutas.toString();
console.log(minhasFrutas);


// Utilizando o método at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[3];
console.log(itemFrutas);
console.log(itemFrutas2);


// Utilizando método join()
let apresentacaoFrutas = frutas.join(", ");
console.log(apresentacaoFrutas);


// Utilizando método pop()
let removerItemFrutas = frutas.pop();
console.log(removerItemFrutas);
console.log(frutas);


// Utilizando método push()
let adicionandoItemFrutas = frutas.push("Limão");
console.log(adicionandoItemFrutas);
console.log(frutas);


// Utilizando método shift()
let deslocandoItemFrutas = frutas.shift();
console.log(deslocandoItemFrutas);
console.log(frutas);


// Utilizando método unshift();
let deslocarItemFrutas = frutas.unshift("Melão");
console.log(deslocarItemFrutas);
console.log(frutas);

frutas[0] = "Kiwi";
console.log(frutas);


// Utilizando o length para adicionar itens ao array
frutas[frutas.length] = "Uva";
console.log(frutas);


// Utilizando o método isArray()
console.log(Array.isArray(frutas));


// Utilizando método delete()
// delete frutas[0];
// delete frutas[2];
// frutas.shift();
// console.log(frutas);


// Utilizando o método concat()
const motos = ["Yamaha", "Honda", "Suzuki"];
const carros = ["Fiat", "Chevrolet", "Volksvagem", "Ferrari"];

const veiculos = motos.concat(carros);

console.log(veiculos);


// Utilizando o copyWithin()
// let copiaItens = frutas.copyWithin(2, 0);
console.log(frutas);


// Exemplo de matriz JS (array multidimensional);
const matriz = [[1, 2], [3, 4], [5, 6]];
console.log(matriz[1][0]);

// Exemplo de vetor JS (array unidimensional);
const comida = ["pizza", "Hamburguer", "Salada"];

//  Utilizando método flat()
const listaNumero = [[1, 2], [3, 4], [5, 6]];
console.log(listaNumero);

const novaListaNumeros = listaNumero.flat();
console.log(novaListaNumeros);


// utilizando o método flatMap()
const listaNummero2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const novaListaNumero2 = listaNummero2.flatMap((item) => {
    return [item, item * 10];
});

console.log(novaListaNumero2);


// Utilizando o método splice()
const novaListaFrutas = frutas.splice(2, 1, "Pêra", "Carambola", "Maçã");
console.log(frutas);
console.log(novaListaFrutas);

// Utilizando o toSplice
const frutasToSplice = frutas.toSpliced(0, 0);
console.log(frutasToSplice);

// utilizando o slice()
const copiaFrutas = frutas.toSpliced(0, 0);

const frutasSlices = copiaFrutas.slice(2);

console.log(frutasSlices);

const frutaSlices2 = copiaFrutas.slice(1, 4);

console.log(frutaSlices2);
