// Classe Heroi que representa um herói genérico
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque = "";

        // Estruturas de decisão para definir o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "atacou de forma desconhecida";
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Função principal para criar heróis e exibir seus ataques
function main() {
    // Criando heróis com diferentes tipos
    const mago = new Heroi("Gandalf", 100, "mago");
    const guerreiro = new Heroi("Conan", 30, "guerreiro");
    const monge = new Heroi("Bruce", 40, "monge");
    const ninja = new Heroi("Naruto", 17, "ninja");

    // Chamando o método atacar para cada herói
    mago.atacar();
    guerreiro.atacar();
    monge.atacar();
    ninja.atacar();
}

// Chamando a função principal
main();
