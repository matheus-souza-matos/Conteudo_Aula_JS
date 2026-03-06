// Utilização do método charAt()
let texto = "Abacate";

//Utilização do método charAt()
let exCharAt = texto.charAt(2);
console.log(exCharAt);

//Utilização do método charCodeAt()
let exCharCodeAt = texto.charCodeAt(6);
console.log(exCharCodeAt);

// Utilização do método codePointAt()
let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt);

// Utilização do método at()
let exAt = texto.at(-2);
let exAtComoArray = texto[2];
console.log(exAt);
console.log(exAtComoArray);

// Utilização do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(' ', texto2);
console.log(texto3);

// Utilização do método Slice()
let frutas = "Banana, Maçã e Uva";
let exSlice = frutas.slice(2,  11);
//let exSlice = frutas.slice(2);
//let exSlice = frutas.slice(-2);
console.log(exSlice);

// Utilização de toUpperCase()
let carro = "Lancer";
let carro2 = "Dodge";

let exLowerCase = carro2.toLowerCase();
let exUppercase = carro.toUpperCase()
console.log(exLowerCase)
console.log(exUppercase)

// Utilização do método isWellFormed()
let saudacao = "Olá, seja bem vindo!";
let exWellFormed = saudacao.isWellFormed();
console.log(exWellFormed);

// Utilização do método Trim()
let matheus = "             O Matheus é daora";
let trim = matheus.trim();
console.log(trim);

