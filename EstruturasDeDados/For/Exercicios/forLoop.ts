/*
O loop for é uma estrutura de controle que permite executar um bloco de código
repetidamente até que uma condição seja atendida.

É útil quando você sabe o número exato de iterações que deseja executar.
Você especifica três partes: inicialização, condição de continuação e expressão de incremento/decremento.
*/






    let array:Array<string> = ["a","b","c","d","e"];

    for (let i:number = 0; i < array.length; i++) {
        console.log(array[i]); // passa por todas as posições
    }

    for (let i:number = 1; i < 4; i++) {
        console.log(i); // imprime 1, 2 e 3
    }
    
    for (let i:string = "a"; i!= "abababa"; i+= "ba"){
        console.log(i); // imprime a, aba, ababa 
    }