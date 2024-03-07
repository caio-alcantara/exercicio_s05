class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Sou um(a) ${this.nome} e tenho ${this.idade} ano(s).`)
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    descrever() {
        console.log(`Sou um(a) ${this.nome}, tenho ${this.idade} ano(s) e sou ${this.cor}.`);
    }
    miar() {
        console.log('Miau!');
    }
}

const cachorro = new Animal('cachorro', 5);
const gato = new Gato('gato', 3, 'laranja');
cachorro.descrever();
gato.descrever();
gato.miar();