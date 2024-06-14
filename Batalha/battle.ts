import { Monster } from "./monster"
import { Warrior } from "./warrior"

const nome:string = 'João'
const idade:number = 15

const myWarrior:Warrior = new Warrior("Xablau", "Bárbaro", 10)
const myMonster:Monster = new Monster("Dimonho")

myMonster.status()
myWarrior.attack(myMonster)
myMonster.status()