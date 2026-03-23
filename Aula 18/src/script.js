// Utilizando o evento de carregamento load

const img = document.querySelector(".minhaImagem");
const elemento = document.querySelector(".info-carregamento")

img.addEventListener("load", function() {
  elemento.innerHTML = "A imagem foi carregada"
});
