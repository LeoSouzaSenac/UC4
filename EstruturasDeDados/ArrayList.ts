import { IList } from "./IList";

export class ArrayList implements IList {
    private items: any[];

    constructor() {
        this.items = [];
    }

    add(item: any): void {
        this.items.push(item);
    }

    addFirst(item: any): void {
        this.items.unshift(item);
    }

    addAt(index: number, item: any): void {
        if (index >= 0 && index <= this.items.length) {
            this.items.splice(index, 0, item);
        } else {
            throw new Error("Index out of bounds.");
        }
    }

    remove(item: any): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    removeFirst(): void {
        if (!this.isEmpty()) {
            this.items.shift();
        }
    }

    removeLast(): void {
        if (!this.isEmpty()) {
            this.items.pop();
        }
    }

    removeAt(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        } else {
            throw new Error("Index out of bounds.");
        }
    }

    get(index: number): any | null {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        return null;
    }

    indexOf(item: any): number {
        return this.items.indexOf(item);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}


// Criando uma nova lista
const list = new ArrayList();

// Adicionando elementos à lista
list.add(10);
list.add(20);
list.add(30);
console.log("Lista após adição de elementos:", list); // Saída: [10, 20, 30]

// Adicionando um elemento no início da lista
list.addFirst(5);
console.log("Lista após adição no início:", list); // Saída: [5, 10, 20, 30]

// Adicionando um elemento na posição específica
list.addAt(2, 15);
console.log("Lista após adição na posição 2:", list); // Saída: [5, 10, 15, 20, 30]

// Removendo um elemento específico da lista
list.remove(15);
console.log("Lista após remoção do elemento 15:", list); // Saída: [5, 10, 20, 30]

// Removendo o primeiro elemento da lista
list.removeFirst();
console.log("Lista após remoção do primeiro elemento:", list); // Saída: [10, 20, 30]

// Removendo o último elemento da lista
list.removeLast();
console.log("Lista após remoção do último elemento:", list); // Saída: [10, 20]

// Removendo um elemento na posição específica
list.removeAt(1);
console.log("Lista após remoção do elemento na posição 1:", list); // Saída: [10]

// Acessando um elemento em uma posição específica
const element = list.get(0);
console.log("Elemento na posição 0:", element); // Saída: 10

// Verificando se a lista está vazia
const isEmpty = list.isEmpty();
console.log("A lista está vazia?", isEmpty); // Saída: false

// Obtendo o tamanho total da lista
const size = list.size();
console.log("Tamanho da lista:", size); // Saída: 1