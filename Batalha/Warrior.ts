import { Monster } from "./monster";


export class Warrior {
    name:string;
    type:string;
    strenght:number;
    life:number;

    constructor(name:string, type:string, strenght:number){
        this.name = name
        this.type = type;
        this.strenght = strenght;
        this.life = 100;
    }
   
    //o método abaixo precisa que eu passe como parametro um objeto do tipo monstro
    //para que eu possa acessar a função receiveDamage do monstro
    attack(myMonster:Monster):void{
        const damage = this.strenght;
        myMonster.receiveDamage(damage),
        console.log(`${this.name} ataca com ${damage} de dano`);
       
       
    }

    receiveDamage(damage:number): void{
        this.life -= damage
    }

    status():void{
        console.log(`O guerreiro ${this.name} tem ${this.life} de vida.`)
    }
   
}