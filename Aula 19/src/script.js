// Adicionando eventos
const button = document.querySelector(".btn");
const elementoConteudo = document.querySelector(".conteudo");
const elementoEstilo = document.querySelector(".elemento-estilo");

button.addEventListener("click", mostrarConteudo);

function mostrarConteudo() {
  elementoConteudo.innerHTML = "Você clicou no botão!";
  elementoEstilo.classList.toggle("ativo");
}

// Removendo eventos
const elementoConteudo2 = document.querySelector(".adicionar-conteudo");
const btnAdicionar = document.querySelector(".btn-add");
const btnRemover = document.querySelector(".btn-rmv");
const btnTeste = document.querySelector(".btn-teste");

function adicionarTexto() {
  elementoConteudo2.innerHTML += "Texto adicionado! ";
}

btnAdicionar.addEventListener("click", () => {
  btnTeste.addEventListener("click", adicionarTexto);
});

btnRemover.addEventListener("click", () => {
  btnTeste.removeEventListener("click", adicionarTexto);
});

// Previnindo Eventos
const link = document.querySelector(".link");
const info = document.querySelector(".info");

link.addEventListener("click", function (event) {
  event.preventDefault();
  info.innerHTML = "O carregamento do link foi bloqueado.";
});

