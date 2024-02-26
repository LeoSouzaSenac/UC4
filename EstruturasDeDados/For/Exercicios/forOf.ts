/*
O loop for...of é usado para iterar sobre os elementos de um objeto iterável,
como arrays, strings ou objetos semelhantes a arrays (por exemplo, objetos semelhantes a arrays retornados por NodeList).
Ele extrai os valores dos elementos em vez dos índices ou chaves.
*/


let meuArray2:Array<string> = ["a","b","c","d","e"];

for (const item of meuArray2) {
console.log(item); // passa por todas as posições
}


const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}