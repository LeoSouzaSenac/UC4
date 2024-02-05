import { Pai } from "./Pai";

export class Filho extends Pai{
    //Propriedades
    public faculdade?:string

    // Construtor para inicializar as propriedades
    constructor(nome:string, idade:number, faculdade?:string) {
        super(nome,idade);
        this.faculdade = faculdade;
    }

    // Método específico para Filho
    estudar(): void {
        console.log(`${this.nome}, está estudando na ${this.faculdade}.`);
    }
}