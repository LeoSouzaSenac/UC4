import axios from 'axios';
//npm install axios

/*
A API JSONPlaceholder é uma API de teste gratuita que simula um servidor RESTful. Ela fornece endpoints para criar, ler, atualizar e excluir recursos fictícios, como posts, usuários, comentários, etc. Aqui estão alguns exemplos de endpoints disponíveis:

/posts: Retorna uma lista de postagens.
/users: Retorna uma lista de usuários.
/comments: Retorna uma lista de comentários.
/todos: Retorna uma lista de tarefas a fazer.
/albums: Retorna uma lista de álbuns.

*/
// Define a URL da API
//URL da API: É o endereço da internet onde a nossa aplicação vai buscar informações. No exemplo, estamos pegando posts de uma API chamada JSONPlaceholder.
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// Função para buscar dados da API
//Função fetchData(): É a função onde pedimos para ir até a URL da API e trazer os dados de lá.

//async/await: São ferramentas que usamos para lidar com a espera enquanto os dados estão sendo buscados. Dizemos para o programa: "espere um pouco até os dados chegarem".
async function fetchData() {

    //Tratamento de erros (try/catch): Se algo der errado na busca dos dados, nós estaremos prontos para lidar com isso. 
    //É uma forma de lidar com problemas que podem surgir durante a busca dos dados. Se algo der errado, como uma conexão de internet ruim, o try/catch nos permite capturar esse erro e lidar com ele de uma maneira controlada.
    try {
        // Faz uma solicitação GET para a API
        const response = await axios.get(apiUrl);
        // Retorna os dados da resposta
        return response.data;
    } catch (error) {
        // Lida com erros
        console.error('Erro ao buscar dados da API:', error);
        throw error;
    }
}
// Chama a função fetchData e lida com os dados retornados
fetchData()
    
    //.then() e .catch(): São maneiras de lidar com o resultado da busca dos dados. Se a busca for bem-sucedida, usamos .then() para lidar com os dados retornados. Se algo der errado durante a busca, usamos .catch() para lidar com o erro de forma adequada.
    
    .then(data => {
        console.log('Dados da API:', data);
    })
    .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
    });
