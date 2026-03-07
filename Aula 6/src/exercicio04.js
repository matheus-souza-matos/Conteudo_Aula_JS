// Exercício 4: O usuário vai informar valores e será efetuado sua Divisão.

alert("Divisão");
let valor1 = parseFloat(prompt("Informe o primeiro valor: "));
let valor2 = parseFloat(prompt("Informe o segundo valor: "));

let resultado;

if (valor2 === 0) {
  alert ("Não é possível dividir por zero! Tente novamente.");
} else {
  resultado = (valor1 / valor2);
}

alert("O resultado da divisão é: " + resultado);