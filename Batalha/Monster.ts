import { Warrior } from "./warrior";


export class Monster{
    name:string;
    strenght:number;
    life:number;

    constructor(name:string){
        this.name = name
        this.strenght = 50
        this.life = 10
    }

    attack(myWarrior:Warrior):void{
        const damage = this.strenght;
        myWarrior.receiveDamage(damage),
        console.log(`${this.name} recebe ${damage} dano do guerreiro`);
       
       
    }

    //o metodo abaixo precisa que eu passe um valor para o dano
    receiveDamage(damage:number): void{
        this.life -= damage //este dano diminui da vida do monstro
    }

    status(){
        console.log(`O monstro ${this.name} tem ${this.life}.`)
    }
}