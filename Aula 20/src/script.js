// Propagação de eventos (bubbling e capture)
const div1 = document.querySelector(".div1");
const p1 = document.querySelector(".p1");
const div2 = document.querySelector(".div2");
const p2 = document.querySelector(".p2");

div1.addEventListener("click", () => {
    alert ("você clicou no elemento vermelho")
}, false);

p1.addEventListener("click", () => {
    alert ("você clicou no elemento branco")
}, false);

div2.addEventListener("click", () => {
    alert ("você clicou no elemento vermelho")
}, true);

p2.addEventListener("click", () => {
    alert ("você clicou no elemento branco")
}, true);