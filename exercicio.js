// Requisito 1: Array de objetos com nome e nota dos alunos
const alunos = [
        { nome: "José", nota: 10 },
        { nome: "Marcia", nota: 3 },
        { nome: "Paulo", nota: 8 },
        { nome: "Julia", nota: 6 },
        { nome: "Fernando", nota: 2 }
    ];

// Requisito 2: Função para retornar alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
        return alunos.filter(aluno => aluno.nota >= 6);
    }

const aprovados = alunosAprovados(alunos);
console.log(aprovados);