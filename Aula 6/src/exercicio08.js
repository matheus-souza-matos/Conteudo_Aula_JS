// Exercício 8: Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo. 

alert("Área do Triângulo");

let base = parseFloat(prompt("Informe o valor da base do triângulo: "));
let altura = parseFloat(prompt("Informe o valor da altura do triângulo: "));

let areaTriangulo = (base * altura) / 2;

alert(`O resultado da área de um triângulo de base ${base} e altura ${altura} é: ${areaTriangulo}`);