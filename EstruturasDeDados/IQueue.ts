export interface IQueue {
    enqueue(item: any): void; // Adiciona um elemento ao final da fila
    dequeue(): any | null; // Remove e retorna o elemento do início da fila
    peek(): any | null; // Retorna o elemento do início da fila sem removê-lo
    getSize(): number; // Retorna o número de elementos na fila
    isEmpty(): boolean; // Verifica se a fila está vazia
}
