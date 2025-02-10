// Requisito: Crie uma classe de uma abstração:

class Localidade {
    constructor(continente, pais, estado) {
        if (this.constructor === Localidade) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
        this.continente = continente;
        this.pais = pais;
        this.estado = estado;
    }

    formatar() {
        throw new Error("Método 'formatar()' deve ser implementado.");
    }
}

// Requisito: Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente:

// Classe herdeira que usa continente e pais
class Cidade extends Localidade {
    constructor(continente, pais, nome) {
        super(continente, pais, null); // Estado não é usado aqui
        this.nome = nome;
    }

    formatar() {
        return `${this.nome}, ${this.pais}, ${this.continente}`;
    }
}

// Classe herdeira que usa pais e estado
class Distrito extends Localidade {
    constructor(pais, estado, nome) {
        super(null, pais, estado); // Continente não é usado aqui
        this.nome = nome;
    }

    formatar() {
        return `${this.nome}, ${this.estado}, ${this.pais}`;
    }
}

// Classe para combinar as informações das duas herdeiras
class Endereco {
    constructor(cidade, distrito, rua, numero) {
        this.cidade = cidade;
        this.distrito = distrito;
        this.rua = rua;
        this.numero = numero;
    }

    formatarEndereco() {
        // Combinando informações de Cidade e Distrito
        return `${this.cidade.formatar()} - ${this.distrito.formatar()}\n${this.rua}, ${this.numero}`;
    }
}

// Requisito: Crie pelo menos três instâncias de objetos:

// Instâncias de objetos
const cidade1 = new Cidade("América", "Brasil", "Osasco");
const distrito1 = new Distrito("Brasil", "São Paulo", "Jardim Piratininga");
const endereco1 = new Endereco(cidade1, distrito1, "Rua A", 123);

const cidade2 = new Cidade("Europa", "Portugal", "Campo Grande");
const distrito2 = new Distrito("Portugal", "Lisboa", "Alvalade");
const endereco2 = new Endereco(cidade2, distrito2, "Rua B", 456);

const cidade3 = new Cidade("África", "Angola", "Viana");
const distrito3 = new Distrito("Angola", "Luanda", "Talatona");
const endereco3 = new Endereco(cidade3, distrito3, "Rua C", 789);

console.log('Endereço 1:\n', endereco1.formatarEndereco(),'\n');
console.log('Endereço 2:\n', endereco2.formatarEndereco(),'\n');
console.log('Endereço 3:\n', endereco3.formatarEndereco(),'\n');