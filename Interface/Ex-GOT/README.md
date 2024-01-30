# Exercício 1: Criação de Casas Nobres

1. **Crie uma classe `NobleHouse`** com os seguintes atributos privados:
   - uma string representando o nome da casa nobre.
   - uma string representando o lema da casa nobre.
   

2. **Defina um método construtor** na classe `NobleHouse` que aceita os parâmetros que você criou e os atribui aos atributos correspondentes.

3. **Crie uma interface `HouseHeir`** que contenha o seguinte:
   - uma string representando o nome do herdeiro.
   - um número representando a idade do herdeiro.
   - um número representando a posição do herdeiro na linha de sucessão da casa nobre.
   

4. **Crie uma classe `Heir`** que implementa a interface `HerdeiroCasa`que contenha o seguinte:
   - os atributos devem ser public


# Exercício 2: Extensão das Casas Nobres

1. **Crie uma interface chamada `HouseRules`** que representa as características comuns de todas as casas nobres de Westeros. Essa interface pode conter métodos ou atributos compartilhados por todas as casas nobres.

2. **Crie pelo menos 5 classes filhas** que estendem a classe `NobleHouse` e que implementam a interface acima, para representar casas nobres específicas de Westeros, como Casa Stark, Casa Lannister, etc.

2. **Implemente um método na classe `NobleHouse`** para adicionar herdeiros à casa nobre. Esse método deve aceitar um parâmetro do tipo `Heir` e adicionar o herdeiro à lista de herdeiros da casa.

4. **Crie um método na classe `NobleHouse`** para imprimir informações sobre a casa e seus herdeiros, como o nome da casa, o lema e os nomes dos herdeiros.



# Exercício 3: Batalha das Casas

1. **Crie um arquivo chamado `Battle.ts`**, onde serão feitas as instâncias, chamadas de métodos, etc.

1. **Crie uma função chamada `BattleOfTheHouses`** que aceita como parâmetros as instâncias das `NobleHouse`s e o número de soldados de cada casa.

2. **Dentro da função `BattleOfTheHouses`**, compare o número de soldados de cada casa e retorne o nome da casa com o maior número de soldados como a vencedora.

3. **Utilize as classes e métodos definidos nos exercícios anteriores** para simular uma batalha entre as casas e imprimir o resultado da batalha no console.
