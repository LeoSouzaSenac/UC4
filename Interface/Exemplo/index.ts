import { Pai } from "./Classes/Pai";
import { Filho } from "./Classes/Filho";
import { Tio } from "./Classes/Tio";
import { Neto } from "./Classes/Neto";

// Instanciando um Pai
const pai = new Pai("José", 45);
console.log("Nome do Pai:", pai.nome);
console.log("Idade do Pai:", pai.idade);
pai.andar();
pai.comer();
pai.falar();
pai.inventar();
pai.respirar();

// Instanciando um Filho
const filho = new Filho("João", 20, "Universidade XYZ");
console.log("\nNome do Filho:", filho.nome);
console.log("Idade do Filho:", filho.idade);
console.log("Faculdade do Filho:", filho.faculdade);
filho.andar();
filho.comer();
filho.falar();
filho.inventar();
filho.respirar();
filho.estudar();

// Instanciando um Neto
const neto = new Neto("João", 2, "fralda Pampers");
console.log("\nNome do Neto:", neto.nome);
console.log("Idade do Neto:", neto.idade);
neto.andar();
neto.comer();
neto.estudar();
neto.chorar();

// Instanciando um Tio
const tio = new Tio("Carlos", 50);
console.log("\nNome do Tio:", tio.nome);
console.log("Idade do Tio:", tio.idade);
tio.andar();
tio.comer();
tio.andarDeMoto();






