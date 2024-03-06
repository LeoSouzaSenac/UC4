// Definição da interface IList, que define um contrato para operações comuns em uma lista
export interface IList {
    // Adicionar elementos
    add(item: any): void; // Adiciona um elemento no final da lista
    addFirst(item: any): void; // Adiciona um elemento no início da lista
    addAt(index: number, item: any): void; // Adiciona um elemento em uma posição específica da lista

    // Remover elementos
    remove(item: any): void; // Remove um elemento específico da lista
    removeFirst(): void; // Remove o primeiro elemento da lista
    removeLast(): void; // Remove o último elemento da lista
    removeAt(index: number): void; // Remove o elemento em uma posição específica da lista

    // Acessar elementos
    get(index: number): any | null; // Retorna o elemento em uma posição específica da lista
    indexOf(item: any): number; // Retorna o índice da primeira ocorrência de um elemento na lista

    // Verificar se a lista está vazia
    isEmpty(): boolean; // Retorna verdadeiro se a lista estiver vazia, caso contrário, retorna falso

    // Obter o tamanho total da lista
    size(): number; // Retorna o número total de elementos na lista
}















export class ArrayList implements IList {
    private items: any[]; // Array que armazena os itens da lista

    constructor() {
        this.items = []; // Inicializa a lista como um array vazio
    }

    // Adiciona um elemento ao final da lista
    add(item: any): void {
        this.items.push(item);
    }

    // Adiciona um elemento no início da lista
    addFirst(item: any): void {
        this.items.unshift(item); //unshift adiciona ao início
    }

    // Adiciona um elemento em uma posição específica da lista
    addAt(index: number, item: any): void {
        // Verifica se o índice está dentro dos limites da lista
        if (index >= 0 && index <= this.items.length) {
            this.items.splice(index, 0, item); // Insere o item na posição especificada
        } else {
            throw new Error("Index out of bounds."); // Lança um erro se o índice estiver fora dos limites
        }
    }

    // Remove a primeira ocorrência do elemento especificado da lista
    remove(item: any): void {
        const index = this.items.indexOf(item); // Encontra o índice do item
        if (index !== -1) {
            this.items.splice(index, 1); // Remove o item se encontrado
        }
    }

    // Remove o primeiro elemento da lista
    removeFirst(): void {
        if (!this.isEmpty()) {
            this.items.shift();
        }
    }

    // Remove o último elemento da lista
    removeLast(): void {
        if (!this.isEmpty()) {
            this.items.pop();
        }
    }

    // Remove o elemento na posição específica da lista
    removeAt(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1); // Remove o item na posição especificada
        } else {
            throw new Error("Index out of bounds."); // Lança um erro se o índice estiver fora dos limites
        }
    }

    // Retorna o elemento na posição específica da lista
    get(index: number): any | null {
        if (index >= 0 && index < this.items.length) {
            return this.items[index]; // Retorna o item se o índice estiver dentro dos limites
        }
        return null; // Retorna null se o índice estiver fora dos limites
    }

    // Retorna o índice da primeira ocorrência do elemento especificado na lista
    indexOf(item: any): number {
        return this.items.indexOf(item); // Retorna -1 se o elemento não for encontrado
    }

    // Verifica se a lista está vazia
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Retorna o número de elementos na lista
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
