// Função que calcula o saldo de vitórias e o nível do jogador
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; // Cálculo do saldo de vitórias
    let nivel = "";

    // Estrutura de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem com saldo de vitórias e o nível
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
}

// Função principal para pegar os dados do usuário e exibir o resultado
function main() {
    const vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
    const derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

    // Chama a função calcularNivel e exibe o resultado
    const resultado = calcularNivel(vitorias, derrotas);
    alert(resultado);
}

// Chama a função principal
main();
