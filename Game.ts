// Classe Player para representar o jogador
class Player {
    x: number; // Posição horizontal do jogador
    y: number; // Posição vertical do jogador
    width: number; // Largura do jogador
    height: number; // Altura do jogador

    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null) {
        // Inicializa a posição, largura e altura do jogador
        this.x = canvas.width / 2; // Posiciona o jogador no centro horizontal do canvas
        this.y = canvas.height - 20; // Posiciona o jogador no fundo do canvas
        this.width = 50; // Define a largura do jogador
        this.height = 20; // Define a altura do jogador
    }

    // Método para desenhar o jogador na tela
    draw(): void {
        if (this.ctx === null) return; // Verifica se o contexto de renderização está disponível
        this.ctx.fillStyle = 'blue'; // Define a cor de preenchimento do jogador como azul
        // Desenha um retângulo representando o jogador nas coordenadas especificadas
        this.ctx.fillRect(this.x - this.width / 2, this.y, this.width, this.height);
    }
}


// Classe Obstacle para representar os obstáculos
class Obstacle {
    x: number; // Posição horizontal do obstáculo
    y: number; // Posição vertical do obstáculo
    width: number; // Largura do obstáculo
    height: number; // Altura do obstáculo

    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null) {
        // Inicializa a posição, largura e altura do obstáculo
        this.x = Math.random() * (canvas.width - 50); // Gera uma posição horizontal aleatória para o obstáculo
        this.y = 0; // Inicializa o obstáculo no topo do canvas
        this.width = 50; // Define a largura do obstáculo
        this.height = 20; // Define a altura do obstáculo
    }

    // Método para desenhar o obstáculo na tela
    draw(): void {
        if (this.ctx === null) return; // Verifica se o contexto de renderização está disponível
        this.ctx.fillStyle = 'red'; // Define a cor de preenchimento do obstáculo como vermelho
        // Desenha um retângulo representando o obstáculo nas coordenadas especificadas
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // Método para atualizar a posição do obstáculo com base na velocidade
    update(speed: number): void {
        this.y += speed; // Move o obstáculo para baixo com base na velocidade
        // Verifica se o obstáculo saiu da tela e o reposiciona no topo com uma nova posição horizontal aleatória
        if (this.y > this.canvas.height) {
            this.y = 0;
            this.x = Math.random() * (this.canvas.width - this.width);
        }
    }
}

// Classe Game para controlar o jogo
class Game {
    private player: Player; // Instância do jogador
    private obstacles: Obstacle[]; // Array de obstáculos
    private speed: number; // Velocidade dos obstáculos
    private obstacleInterval: number; // Intervalo entre a criação de novos obstáculos
    private lastObstacleTime: number; // Último momento em que um obstáculo foi criado
    private score: number; // Pontuação do jogador
    private gameOver: boolean; // Indica se o jogo acabou
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(canvas, ctx); // Inicializa o jogador
        this.obstacles = []; // Inicializa o array de obstáculos vazio
        this.speed = 2; // Define a velocidade inicial dos obstáculos
        this.obstacleInterval = 2000; // Define o intervalo inicial entre a criação de novos obstáculos (em milissegundos)
        this.lastObstacleTime = 0; // Inicializa o último momento em que um obstáculo foi criado
        this.score = 0; // Inicializa a pontuação do jogador
        this.gameOver = false; // Define o estado inicial do jogo como não finalizado
        canvas.addEventListener('mousemove', this.movePlayer.bind(this)); // Adiciona um ouvinte de evento para mover o jogador com o mouse

        // Chamamos o método para criar os obstáculos
        this.createObstacles();
    }

    // Método para criar os obstáculos
    createObstacles(): void {
        const currentTime = Date.now();
        if (currentTime - this.lastObstacleTime > this.obstacleInterval) {
            // Adiciona um novo obstáculo
            this.obstacles.push(new Obstacle(this.canvas, this.ctx));
            // Atualiza o último momento em que um obstáculo foi criado
            this.lastObstacleTime = currentTime;
            // Reduz o intervalo entre a criação de novos obstáculos para aumentar a frequência com o tempo
            this.obstacleInterval *= 0.95; // Por exemplo, reduzimos o intervalo em 5% a cada novo obstáculo criado
        }
    }

    // Método para mover o jogador com base no movimento do mouse
    movePlayer(event: MouseEvent): void {
        this.player.x = event.clientX - this.canvas.offsetLeft; // Define a posição horizontal do jogador com base na posição do mouse
    }

    // Método para iniciar o jogo
    start(): void {
        // Chama repetidamente a função update() para atualizar o estado do jogo
        setInterval(this.update.bind(this), 1000 / 60); // 60 FPS
    }

    // Método para atualizar o estado do jogo
update(): void {
    if (this.gameOver) return; // Se o jogo acabou, não atualiza mais

    // Variável para controlar se um obstáculo passou sem colidir
    let obstaclePassed = false;

    // Atualiza a posição dos obstáculos
    for (const obstacle of this.obstacles) {
        obstacle.update(this.speed);
        // Verifica se houve uma colisão entre o jogador e um obstáculo
        if (this.checkCollision(obstacle)) {
            this.gameOver = true; // Marca o jogo como finalizado
            alert('Game Over! Pontuação: ' + this.score); // Exibe mensagem de Game Over com a pontuação no alerta
            return; // Sai da função de atualização, pois o jogo acabou
        }
        // Verifica se o obstáculo ultrapassou o jogador sem colidir
        if (obstacle.y > this.canvas.height - 20 && !this.checkCollision(obstacle)) {
            obstaclePassed = true;
        }
    }

    // Incrementa a pontuação se um obstáculo passou sem colidir
    if (obstaclePassed) {
        this.score++;
    }

    // Limpa o canvas
    this.clearCanvas();

    // Desenha o jogador
    this.player.draw();

    // Desenha os obstáculos
    for (const obstacle of this.obstacles) {
        obstacle.draw();
    }

    // Desenha a pontuação na tela
    this.drawScore();

    // Chamamos o método para criar os obstáculos
    this.createObstacles();
}



    // Método para desenhar a pontuação na tela
    drawScore(): void {
        if (this.ctx === null) return; // Verifica se o contexto de renderização está disponível
        this.ctx.fillStyle = 'black'; // Define a cor de preenchimento como preto
        this.ctx.font = '20px Arial'; // Define a fonte do texto
        this.ctx.fillText('Pontuação: ' + this.score, 10, 30); // Desenha o texto da pontuação na posição especificada
    }

    // Método para verificar colisões entre o jogador e os obstáculos
    checkCollision(obstacle: Obstacle): boolean {
        // Verifica se houve uma colisão entre os retângulos delimitados pelo jogador e pelo obstáculo
        return this.player.x < obstacle.x + obstacle.width &&
               this.player.x + this.player.width > obstacle.x &&
               this.player.y < obstacle.y + obstacle.height &&
               this.player.y + this.player.height > obstacle.y;
    }

    // Método para limpar o canvas
    clearCanvas(): void {
        if (this.ctx === null) return; // Verifica se o contexto de renderização está disponível
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa o canvas
    }
}

// Adiciona um ouvinte de evento para iniciar o jogo quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement; // Obtém a referência ao elemento <canvas>
    const ctx = canvas.getContext('2d'); // Obtém o contexto de renderização 2D do canvas
    if (ctx === null) {
        throw new Error('canvas'); // Lança um erro se o contexto de renderização não estiver disponível
    }
    const game = new Game(canvas, ctx); // Cria uma instância da classe Game com o elemento <canvas> e o contexto de renderização como argumentos
    game.start(); // Inicia o jogo
});
