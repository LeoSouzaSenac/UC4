## Sistema de Gerenciamento de Biblioteca

Você foi contratado para desenvolver um sistema de gerenciamento de uma biblioteca. O sistema deve permitir aos usuários realizar operações como empréstimo e devolução de livros, além de consultar o status dos mesmos.

Para facilitar o controle dos livros, você decide utilizar enums para representar o status de cada exemplar. Cada livro pode estar em um dos seguintes estados:

- **Disponível:** Significa que o livro está disponível para empréstimo.
- **Emprestado:** Indica que o livro foi emprestado a um usuário.
- **Atrasado:** Quando o livro não é devolvido dentro do prazo estipulado.
- **Reservado:** Quando um usuário solicita reservar o livro, mas ainda não o pegou.

Além disso, cada livro possui informações como título, autor,  e uma lista de gêneros aos quais pertence (ficção científica, romance, fantasia, etc.). Os gêneros também devem ser representados por enums para facilitar a categorização e consulta.

O seu código também deve retornar as seguintes listas:

- **Lista de Livros Disponíveis:** Os usuários podem visualizar uma lista de todos os livros disponíveis na biblioteca.
- **Lista de Livros Emprestados:** Uma lista de todos os livros atualmente emprestados.
- **Lista de Livros Atrasados:** Uma lista de todos os livros que estão emprestados e estão atrasados para devolução.

O seu código também deve incluir as seguintes funcionalidades:

- **Cadastro de Usuários:** Os usuários podem ser cadastrados no sistema, com informações como nome, ID e contato.
- **Histórico de Empréstimos por Usuário:** Deve ser mantido um histórico de empréstimos por usuário, para que seja possível rastrear quais livros cada usuário pegou emprestado.
- **Empréstimo de Livro:** Os usuários podem solicitar o empréstimo de um livro, desde que o mesmo esteja disponível.
- **Reserva de Livro:** Os usuários podem reservar um livro que não está disponível no momento. Quando o livro estiver disponível, o usuário será notificado para retirá-lo.
- **Verificação de Multa:** Caso um usuário esteja com um livro atrasado para devolução, o sistema deve calcular o valor da multa com base nos dias de atraso e notificar o usuário.
- **Listagem de Livros por Gênero:** Os usuários podem visualizar uma lista de livros disponíveis por gênero, facilitando a busca por obras de interesse.

Seu desafio é implementar as classes necessárias para representar esse sistema de gerenciamento de biblioteca, utilizando enums de forma adequada para representar os estados dos livros e os gêneros literários. Certifique-se de que as operações de empréstimo, devolução e reserva funcionem corretamente, e que seja possível consultar o status de um livro a qualquer momento.
