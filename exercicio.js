function Continente(continente) {
    this.continente = continente;
}

function Pais(pais) {
    this.pais = pais;
}

function Estado(estado){
    this.estado = estado;
}

function Localidade(continente, pais, estado){
    Continente.call(this, continente);
    Pais.call(this, pais); 
    Estado.call(this, estado);
}

function Endereco(continente, pais, estado, cidade, rua, numero){
    Localidade.call(this, continente, pais, estado);
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
}

const endereco1 = new Endereco("América", "Brasil", "São Paulo", "Osasco", "Rua A", 123);
const endereco2 = new Endereco("Europa", "Portugal", "Lisboa", "Campo Grande", "Rua B", 456);
const endereco3 = new Endereco("África", "Angola", "Luanda", "Viana", "Rua C", 789);

const formatarEndereco = (endereco) => {
    const { continente, pais, estado, cidade, rua, numero } = endereco;
    return `${cidade}, ${estado}, ${pais}, ${continente}\n${rua}, ${numero}`;
};

console.log('Endereço 1:\n', formatarEndereco(endereco1),'\n');
console.log('Endereço 2:\n', formatarEndereco(endereco2),'\n');
console.log('Endereço 3:\n', formatarEndereco(endereco3),'\n');

