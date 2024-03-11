export interface IStack {
    // Adiciona um elemento ao topo da pilha
    push(item: any): void;

    // Remove e retorna o elemento do topo da pilha
    pop(): any | null;

    // Retorna o elemento do topo da pilha sem removê-lo
    peek(): any | null;

    // Verifica se a pilha está vazia
    isEmpty(): boolean;

    // Retorna o número de elementos na pilha
    size(): number;
}


import { Stack } from "./Stack";

// Criando uma nova pilha
const stack = new Stack();

// Adicionando elementos à pilha
stack.push(10);
stack.push(20);
stack.push(30);

// Verificando o elemento no topo da pilha
console.log("Elemento no topo:", stack.peek()); // Saída: 30

// Removendo elementos da pilha
console.log("Elemento removido:", stack.pop()); // Saída: 30
console.log("Elemento removido:", stack.pop()); // Saída: 20

// Verificando se a pilha está vazia
console.log("A pilha está vazia?", stack.isEmpty()); // Saída: false

// Obtendo o tamanho da pilha
console.log("Tamanho da pilha:", stack.size()); // Saída: 1
