// Importando a biblioteca Axios para fazer requisições HTTP
import axios from 'axios';

// Definindo uma função para consultar a previsão do tempo de uma cidade
async function consultarPrevisaoTempo(cidade: string): Promise<void> {
    try {
        // Substitua 'API_KEY' pela sua chave de API do OpenWeatherMap
        const API_KEY = '01a5511480073de5a3ecc66534d25e02';

        // Fazendo uma requisição GET para a API do OpenWeatherMap
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`);

        // Extraindo os dados da resposta
        const { main, weather } = response.data;

        // Exibindo a previsão do tempo
        console.log(`Previsão do tempo em ${cidade}:`);
        console.log(`- Temperatura: ${main.temp}°C`);
        console.log(`- Condição: ${weather[0].description}`);
    } catch (error) {
        // Tratando erros
        console.error('Ocorreu um erro ao consultar a previsão do tempo:', error.response.data.message);
    }
}
// Definindo a cidade para consultar a previsão do tempo
const cidadeConsulta: string = 'São Leopoldo'; // Substitua pelo nome da cidade desejada
// Consultando a previsão do tempo
consultarPrevisaoTempo(cidadeConsulta);
