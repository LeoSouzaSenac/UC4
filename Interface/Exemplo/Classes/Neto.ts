import { Filho } from "./Filho";

export class Neto extends Filho {
    public fralda:string


    // Construtor para inicializar as propriedades
    constructor(nome:string, idade:number, fralda:string) {
        super(nome,idade);
        this.fralda = fralda;
    }

    // Método específico para Neto
    chorar(): void {
        console.log(`O neto, ${this.nome}, está chorando pois não gosta da ${this.fralda}.`);
    }


}