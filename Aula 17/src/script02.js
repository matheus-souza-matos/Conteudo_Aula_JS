// utilizando o evento mouseover e mouseout
const caixa = document.getElementById("caixa");

caixa.addEventListener("mouseover", () => {
    caixa.innerHTML = "Ktchaaaaauuuuuuu";
    caixa.style.background = "red";
})

caixa.addEventListener("mouseout", () => {
    caixa.innerHTML = "Eu sou a velocidade";
    caixa.style.background = "orange";
})


// exemplo com imagem
const imagem = document.getElementById("imagem");

imagem.addEventListener("mouseover", () => {
    imagem.src = "./img/img2.jpeg";
})

imagem.addEventListener("mouseout", () => {
    imagem.src = "./img/img1.png";
})


// Exemplo de posição do mouse na página
const conteudo = document.querySelector(".conteudo");

document.addEventListener("mousemove", handlePosition);

function handlePosition(evento){
    conteudo.innerHTML = "X: " + evento.clientX + " " + "Y: " + evento.clientY;
}