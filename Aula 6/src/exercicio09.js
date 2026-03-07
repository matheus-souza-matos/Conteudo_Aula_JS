// Exercício 9: Escreva um algoritmo para ler as dimensões de um trapézio (base maior, base menor e altura), calcular e escrever a área do trapézio. 

alert("Área do Trapézio");

let baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio: "));
let baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio: "));
let altura = parseFloat(prompt("Informe o valor da altura do trapézio: "));

let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

alert(`O resultado da área do trapézio é: ${areaTrapezio}`);