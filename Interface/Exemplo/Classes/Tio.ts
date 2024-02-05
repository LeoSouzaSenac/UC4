import { HomoSapiens } from "../Interfaces/HomoSapiens";

// Classe base
export class Tio implements HomoSapiens {
    // Propriedades
    public nome: string;
    public idade: number;
    

    // Construtor para inicializar as propriedades
    constructor(nome:string, idade:number) {
        this.nome = nome
        this.idade = idade
    }

    // Método para andar
    andar(): void {
        console.log(`${this.nome} andou até a cozinha.`);
    }

    comer(): void {
        console.log(`${this.nome} comeu toda sua comida.`);
    }

    falar(): void {
        
    }

    inventar(): void {
        
    }

    andarDeMoto():void {
        console.log(`${this.nome} andou de moto.`)
    }

    respirar(): void {
        
    }

    
}