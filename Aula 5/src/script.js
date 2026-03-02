let numero1 = parseFloat(prompt("Digite o primeiro valor:"));
let numero2 = parseFloat(prompt("Digite o segundo valor:"));

let operacao = prompt(
    "Selecione uma operação: \n+\n-\n*\n/"
);

switch (operacao) {
    case '+':
        alert("A soma da operação é: " + (numero1 + numero2));
        break;

    case '-':
        alert("A subtração da operação é: " + (numero1 - numero2));
        break;

    case '*':
        alert("A multiplicação da operação é: " + (numero1 * numero2));
        break;

    case '/':
        if (numero2 === 0) {
            alert("Não pode divir por 0");
            window.location.reload();
            break;
        }else{
            alert("A divisão da operação é: " + (numero1 / numero2));
            break;
        }
        
    default:
        alert("Digite um número válido!!!!");
        window.location.reload();
        break;
};
