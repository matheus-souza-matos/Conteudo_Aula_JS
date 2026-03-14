// Definindo um array global
const times = ["São Paulo", "Corinthians", "Flamengo", "Fluminense"];


// Utilizando indexOf();
let possicaoItem = times.indexOf("Flamengo");

console.log(times);
console.log(possicaoItem);

 // Utilizando o LasIndexOf()
 const times2 = ["São Paulo", "Corinthians", "São Paulo", "São Paulo"];

 let posicaoItem2 = times2.lastIndexOf("São Paulo");

 console.log(times2);
 console.log(posicaoItem2);
 
 // Utilizando o método includes()
 let verificaExistenciaItem = times.includes("Corinthians");

 console.log(verificaExistenciaItem);
 