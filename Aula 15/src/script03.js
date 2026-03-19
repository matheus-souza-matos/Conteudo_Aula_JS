// utilizando o innerHTML
const elemento1 = document.querySelector(".mudandoElemento");

elemento1.innerHTML = "Somente a dor coletiva gera união.";


// alterando atributos
const elemento2 = document.querySelector(".foto");
elemento2.src = "./img/img.png";

elemento.width = 400;

// Conteúdo dinâmico (data)
const elemento2 = document.querySelector("#ex2");

elemento2.innerHTML = "Data atual: " + Date();