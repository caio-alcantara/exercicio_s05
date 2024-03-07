class SomadorDeNotas {
    constructor() {
        this.notas = 0;
    }

    adicionarNota(nota) {
        this.notas += nota;
    }

    verTotal(){
        console.log(this.notas);
    }
}

const somador = new SomadorDeNotas();
somador.adicionarNota(10);
somador.adicionarNota(5);
somador.adicionarNota(3);
somador.adicionarNota(7);
somador.verTotal();