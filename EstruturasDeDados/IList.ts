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
