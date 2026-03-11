// Criando meu primeiro objeto
const carro = {
  marca: 'Porsche', modelo: '992 Turbo S', ano: 2025, cor: 'Ruby Star Neo'};

console.log(carro);

// Exemplo 2 de criação de objeto
const carro2 = {
  marca: 'Mercedes',
  modelo: 'CLS 63',
  ano: 2020,
  cor: 'Branco',
};

console.log(carro2);

// Exemplo 3 de criação de objeto
const carro3 = {};

carro3.marca = "Volkswagen";
carro3.modelo = "Golf GTI";
carro3.ano = 2016;
carro3.cor = "Branco";

console.log(carro3["modelo"]);

// Exemplo 4 de criação de objeto
const carro4 = new Object({
  marca: "Honda",
  modelo: "Civic SI",
  ano: 2008,
  cor: "Vermelho",
  acelerar: function () {
    return this.modelo + " acelerou!";
  },
});

let marcaCarro = "marca";

console.log(carro4[marcaCarro]);
