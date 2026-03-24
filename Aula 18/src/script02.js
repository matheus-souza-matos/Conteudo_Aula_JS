// tilizando o método setInterval()
const elemento = document.querySelector(".meuRelogio");

setInterval(mostrarRelogio, 1000);

function mostrarRelogio() {
  const data = new Date();
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();

  elemento.innerHTML = `${horas}:${minutos}:${segundos}`;
}


// Utilizando método setTimeOut()
const conteudo = document.querySelector(".meuConteudo");
const botao = document.querySelector(".elementoBotao");

botao.addEventListener("click", () => {
  setTimeout(mostrarConteudo, 2000);
})

function mostrarConteudo() {
  conteudo.innerHTML = `Èsse texto  está aparecendo após 2 seegundos após a interação com o botão.`;
}

// Utilizando o método setInterval()
const exibirNumeros = document.querySelector(".conteudoContador");
const botaoInicio = document.querySelector(".botaoInicio");
const botaoPausar = document.querySelector(".botaoPausar");
let intervalo;
let contador = 0;

botaoInicio.addEventListener("click", () => {
  intervalo = setInterval(cont, 1000);
})

botaoPausar.addEventListener("click", () => {
  clearInterval(intervalo);
})

function cont() {
  contador++;
  exibirNumeros.innerHTML = contador;
}