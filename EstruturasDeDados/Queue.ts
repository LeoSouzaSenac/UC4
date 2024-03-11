import { IQueue } from "./IQueue"; // Importa a interface IQueue

export class Queue implements IQueue {
    private items: any[]; // Array para armazenar os elementos da fila

    constructor() {
        this.items = []; // Inicializa a fila como um array vazio
    }

    // Adiciona um elemento ao final da fila
    enqueue(item: any): void {
        this.items.push(item); // Adiciona o item ao final da fila utilizando o método push do array
    }

    // Remove e retorna o elemento do início da fila
    dequeue(): any | null {
        if (this.isEmpty()) {
            return null; // Retorna null se a fila estiver vazia
        }
        return this.items.shift(); // Remove e retorna o elemento do início da fila utilizando o método shift do array
    }

    // Retorna o elemento do início da fila sem removê-lo
    peek(): any | null {
        if (this.isEmpty()) {
            return null; // Retorna null se a fila estiver vazia
        }
        return this.items[0]; // Retorna o elemento do início da fila sem removê-lo, acessando diretamente o primeiro elemento do array
    }

    // Retorna o número de elementos na fila
    getSize(): number {
        return this.items.length; // Retorna o número de elementos na fila utilizando a propriedade length do array
    }

    // Verifica se a fila está vazia
    isEmpty(): boolean {
        return this.items.length === 0; // Verifica se a fila está vazia comparando o tamanho do array com zero
    }
}
