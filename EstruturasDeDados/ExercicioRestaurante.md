# Exercício: Gerenciamento de Pedidos em um Restaurante

Um restaurante deseja implementar um sistema para gerenciar os pedidos dos clientes. O sistema deve ser capaz de adicionar pedidos, preparar os pedidos na ordem em que foram recebidos e informar quando um pedido estiver pronto para ser entregue aos clientes.

O restaurante possui três áreas distintas para o preparo dos pedidos: cozinha, bar e sobremesas. Cada área é responsável por preparar um tipo específico de pedido:

- A cozinha prepara os pratos principais.
- O bar prepara as bebidas alcoólicas e não alcoólicas.
- A área de sobremesas prepara as sobremesas.

Implemente um sistema em TypeScript que utilize listas, filas e pilhas para gerenciar os pedidos do restaurante. O sistema deve fornecer as seguintes funcionalidades:

1. **Adicionar um pedido:** O sistema deve permitir que o garçom adicione um pedido à lista de espera do restaurante. Cada pedido deve conter as informações sobre o tipo de pedido (prato principal, bebida ou sobremesa) e os detalhes específicos do pedido (por exemplo, nome do prato, tipo de bebida, etc.).

2. **Preparar pedidos:** O sistema deve preparar os pedidos na ordem em que foram recebidos. Cada área de preparo (cozinha, bar e sobremesas) deve ter sua própria fila para garantir que os pedidos sejam preparados na ordem correta. Quando um pedido estiver pronto, ele deve ser removido da fila correspondente.

3. **Informar quando um pedido estiver pronto:** O sistema deve ser capaz de informar quando um pedido estiver pronto para ser entregue aos clientes. Isso pode ser feito mostrando o próximo pedido na fila de preparo correspondente.

Implemente as classes e métodos necessários para satisfazer os requisitos acima, utilizando listas para armazenar os pedidos, filas para gerenciar a preparação dos pedidos e pilhas para o preparo de cada área do restaurante (cozinha, bar e sobremesas).
