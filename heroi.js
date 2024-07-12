function calcularSaldoRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivelRanqueamento = "";

    if (vitorias >= 11 && vitorias <= 20) {
        nivelRanqueamento = "bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivelRanqueamento = "prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivelRanqueamento = "ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivelRanqueamento = "diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivelRanqueamento = "Lendário";
    } else if (vitorias > 100) {
        nivelRanqueamento = "imortal";
    } else {
        nivelRanqueamento = "outro nível"; // Tratamento para valores de vitórias abaixo de 11
    }

    return { saldo, nivelRanqueamento };
}

// Exemplo de uso da função:
let quantidadeVitorias = 800;
let quantidadeDerrotas = 550;

let { saldo, nivelRanqueamento } = calcularSaldoRankeadas(quantidadeVitorias, quantidadeDerrotas);
console.log("O herói tem saldo de vitórias de: " + saldo);
console.log("O nível de ranqueamento é: " + nivelRanqueamento);
