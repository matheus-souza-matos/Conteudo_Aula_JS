// Criação de métodos
const casa = {
    portas: 10,
    janelas: 20,
    telhado: true,
    laje: true,
    pets:{
        cachorro: {
            nome: "Bidu",
            raca: "Vira-Lata",
            // latir: () => casa.pets.cachorro.nome + " Latiu Au Au"
            latir: function (){
                return this.nome + " latiu Au Au"
            }
        }
    }
}

console.log(casa.pets.cachorro.latir());