import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin, // configura a fonte de entrada para a interface de leitura, nesse caso o terminal
  output: process.stdout //configura a saída, ou seja, o terminal também
});

function exibirMenu() {
  console.log("Bem-vindo ao Menu:");
  console.log("1. Opção 1");
  console.log("2. Opção 2");
  console.log("3. Opção 3");
  console.log("0. Sair");
}

//O método question recebe dois argumentos: a pergunta que será exibida ao usuário e uma função de retorno de chamada (callback) que será invocada quando o usuário fornecer uma resposta.
function solicitarOpcao() {
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case '0':
        console.log("Saindo do menu...");
        rl.close();
        break;
      case '1':
        console.log("Você selecionou a Opção 1");
        exibirMenu();
        solicitarOpcao();
        break;
      case '2':
        console.log("Você selecionou a Opção 2");
        exibirMenu();
        solicitarOpcao();
        break;
      case '3':
        console.log("Você selecionou a Opção 3");
        exibirMenu();
        solicitarOpcao();
        break;
      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        exibirMenu();
        solicitarOpcao();
        break;
    }
  });
}

exibirMenu();
solicitarOpcao();
