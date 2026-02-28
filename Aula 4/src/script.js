//IF aninhado

// let idade1 = 16;
// let pais = "EUA"
// let mensagem = "Voce não pode dirigir"

// let idade2 = 16;
// let pais = "Brasil"
// let mensagem = "Voce não pode dirigir"

// if(pais == "EUA"){
//     if (idade2 >= 16) {
//         mensagem = "Você pode dirigir"
//     }
// }

// document.getElementById("ex3").innerHTML = mensagem


// Exwmplo de IF aninhado com operador AND (&&)
let idade3 = 16;
let pais3 = "Brasil";
let mensagem2 = "Voce não pode dirigir";

if(pais3 == "EUA" && idade3 >= 16){
    mensagem2 = "Você pode dirigir";
}

document.getElementById("ex3").innerHTML = mensagem2;