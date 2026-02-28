// Exemplos de if else
// const hora = new Date().getHours();
// const minutos = new Date().getMinutes();
// const data = new Date().getDate();
// const horario = String(hora) + ":" + String(minutos);
// let mensagem;

// if(hora < 18){
//     mensagem = "Bom dia!";
// } else{
//     mensagem = "Boa noite!";
// }

// document.getElementById("ex3").innerHTML = `Hoje é dia: ${data} <br> São: ${horario} <br> ${mensagem}`;

// Exemplo IF ELSE IF
const hora = new Date().getHours();
const minutos = new Date().getUTCMinutes();
const data = new Date().getDate();
const horario = String(hora) + ":" + String(minutos);
let mensagem;

if(hora < 12){
    mensagem = "Bom dia!";
} else if(hora  < 18){
    mensagem = "Boa tarde!";
} else {
    mensagem = "Boa noite!"
}

document.getElementById("ex3").innerHTML = `Hoje é dia: ${data} <br> São: ${horario} <br> ${mensagem}`;