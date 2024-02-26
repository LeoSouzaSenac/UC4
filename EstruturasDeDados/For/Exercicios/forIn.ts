/*
O loop for...in é usado para iterar sobre as propriedades de um objeto JavaScript.
Ele itera sobre todas as propriedades enumeráveis de um objeto, incluindo as herdadas.


*/ 


const meuArray:Array<string> = ["a","b","c","d","e"];

for (const letra in meuArray) {
    console.log(meuArray[letra]); // passa por todas as posições
}



const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}