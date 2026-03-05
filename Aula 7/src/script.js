// Exemplo de utilização de length em String
let texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let tamanho = texto.length;

const elemento = document.querySelector('.ex1');

elemento.innerHTML= tamanho;

//Exemplo de utilização de caractere de escape
let texto2 = 'Somente a dor \' coletiva\' gera a união.';

let texto3 = "Somente a dor \" coletiva\" gera a união.";

let texto4 = "Somente a dor \\ coletiva gera a união.";

let texto5 = `Somente a dor \\ coletiva gera a união.`;

console.log(texto2);
console.log(texto3);
console.log(texto4);
console.log(texto5);

//Exemplo de templete String
let nome = "Matheus";
let idade = 23;
let frase = `Mu nome é ${nome} e eu tenho ${idade} anos de idade`;

console.log(frase)

//Exemplo de adição de HTML com templete String em JS
const elemento2 = document.querySelector('.ex2')
console.log(elemento2)

elemento2.innerHTML = `
    <style>
        .container{
            justify-content: center;
            display: flex;
            gap: 20px;
            background-color: orangered;
        }

        .container div{
            text-align: center;
            align-content: center;
            color: darkgreen;
            width: 100px;
            height: 100px;
            background-color: orange;
        }
    </style>

    <h2>Exemplo de adição de conteúdo </h2>
    <div class="container">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
`;