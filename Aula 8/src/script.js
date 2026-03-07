// Utilização do método padStart()
let texto = "7";
texto = texto.padStart(3, "0");
console.log(texto);

// Utilização do método padEnd()
let texto2 = "5";
texto2 = texto2.padEnd(3, "0");
console.log(texto2);

// Utilização do método repeat()
let fruta = "laranja ";
let repeticao = fruta.repeat(4);
console.log(repeticao);

// Utilização do método replace()
let carro = "Lancer";
let novoCarro = carro.replace("Lancer", "Monza");
console.log(novoCarro);

// Utilização do método replaceAll()
let frase = "Eu gosto de carros. Carros são legais, carros de corrida é maneiro";
frase = frase.replaceAll("Carros", "Motos");
frase = frase.replaceAll("carros", "motos");
console.log(frase);

// Utilização do método split()
let saudacao = "Olá, seja bem-vindo!";
let exSplit = saudacao.split(" ");
console.log(exSplit);

// Utilização dos método indexOf(), lastIndexOf() e search()
let exemplo = "Por favor localize onde 'localize' ocorre.";
let exIndexOf = exemplo.indexOf('localize');
let exLastIndexOf = exemplo.lastIndexOf('localize');
let exSearch = exemplo.search('favor');
console.log(exIndexOf);
console.log(exLastIndexOf);
console.log(exSearch);

// Utilização do método includes()
let olaMundo = "Olá, mundo. bem-vindo ao universo";
let exInCludes = olaMundo.includes('universo');
console.log(exInCludes);

// Utilização do método StartsWith()
let olaMundo2 = "Olá, mundo. bem-vindo ao universo";
let exStartWith = olaMundo2.startsWith('Olá');
let exStartWith2 = olaMundo2.startsWith('universo');
console.log(exStartWith);
console.log(exStartWith2);

// Utilização do método endsWith()
let nome = "Matheus Matos";
let exEndsWith = nome.endsWith('Matos');
console.log(exEndsWith);

