// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Exemplo de uso das funções
const resultadoMultiplicacao = multiplicar(5, 3);
console.log(`O resultado da multiplicação é: ${resultadoMultiplicacao}`);

const nome = "Caio";
const saudacaoResultado = saudacao(nome);
console.log(saudacaoResultado);
