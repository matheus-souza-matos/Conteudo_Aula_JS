// utilizando o key events
const conteudo = document.querySelector(".conteudo");
const conteudo2 = document.querySelector(".conteudo2");
const campo = document.querySelector("#campo");
const eventos = ["input", "keydown"];

campo.addEventListener("keydown", heandleTecla);
campo.addEventListener("input", heandleTexto);

function heandleTecla(evento) {
    conteudo.innerHTML = "Você digitou " + evento.key
}

function heandleTexto(evento) {
    conteudo2.innerHTML = "Você digitou " + evento.target.value
}


// Exemplo de detecção de tecla
const campo2 = document.querySelector("#campoEnter");
const conteudo3 = document.querySelector(".conteudo3");

campo2.addEventListener("keydown", heandleCondicao)

function heandleCondicao(evento) {
    if(evento.code === "Enter") {
        conteudo3.innerHTML = "Você teclou Enter";
    }
}
