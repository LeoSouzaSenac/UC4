/*
O método forEach() é usado para executar uma função para cada elemento de um array.
É uma forma mais concisa e legível de iterar sobre os elementos de um array em comparação com o loop for.

*/



let meuArray3:Array<string> = ["a","b","c","d","e"];

meuArray3.forEach(item => {
console.log(item); // passa por todas as posições
});




const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});



const numbers = [1, 2, 3, 4, 5];

// Definindo a função que será executada para cada elemento
function printNumber(number: number) {
    console.log(number);
}

// Passando a função como argumento para o método forEach()
numbers.forEach(printNumber);