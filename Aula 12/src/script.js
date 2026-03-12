// Criando um construtor
function Pessoa(primeiroNome, ultimoNome, idade, pais){
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
    this.pais = pais;
}

const euMesmo = new Pessoa("Matheus", "Matos", 23, "Brasil");
const meuIrmao = new Pessoa("Marcelo", "Matos", 25, "Brasil");

// console.log(euMesmo);
// console.log(meuIrmao);

//Reforçando criação de construtores de objeto
function Veiculos (marca, modelo, motorPotencia, cor, rodas){
    this.marca = marca;
    this.modelo = modelo;
    this.motorPotencia = motorPotencia;
    this.cor = cor;
    this.rodas = rodas;
    this.acelerar = function(){
        return this.modelo + " acelerou"
    }
}

const minhaMoto = new Veiculos("Yamaha", "Ys25", "250cc", "Roxa", "Liga Leve");

console.log(minhaMoto);


const meuCarro = new Veiculos("Volkswagem", "Golf Sapão", "1.6", "Prata", "Liga Leve, 17 cromada");

console.log(meuCarro);

Veiculos.prototype.ano = "2011/12";
meuCarro.placa = "000-0000";

meuCarro.frear = function() {
    return this.modelo + " freou"
}

console.log(meuCarro.ano);

console.log(meuCarro.acelerar());

console.log(meuCarro.placa);

console.log(meuCarro.frear());
