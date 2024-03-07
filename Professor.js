class Funcionario {
    constructor(nome, idade, salarioBase) { // Passa os atributos da classe Funcionario
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase; // Como o salário em si varia de acordo com o tipo de funcionario
                                // Aqui retornamos apenas o salário base
    }
}

class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horas) { // Passa os atributos da classe  Funcionario e adiciona os atributos da classe Professor
        super(nome, idade, salarioBase); // Chama o construtor da classe pai
        this.disciplina = disciplina; // Adiciona os atributos da classe Professor
        this.horas = horas;
    }

    calcularSalario() {
        console.log(super.calcularSalario() * this.horas); // Calcula o salário do professor, que é o salário base multiplicado pelas horas
    }
}

const prof1 = new Professor('João', 35, 30, 'Matemática', 40);
prof1.calcularSalario(); // 1200
const prof2 = new Professor('Maria', 45, 40, 'Português', 30);
prof2.calcularSalario(); // 1200