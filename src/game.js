class Game {
    constructor (){
        this.splashScreen = document.querySelector("#splash-screen");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameOverScreen = document.querySelector("#gameover-screen");
        this.restartBtn = document.querySelector("#restart-game")
        /*TO DO: create score and lives in the HTML */
        this.scoreElement = document.getElementById("score");
        this.livesElement = document.getElementById("lives");
        this.player = new Duck (
            this.gameScreen,
            400,
            380,
            92,
            72,
            "../img/yellow-duck-moving.png");
        this.collectibles = [];
        this.obstacles = [];
        this.lives = 1;
        this.score = 0;
        this.gameIsOver = false;
        this.gameIntervalId = 0;
        this.gameLoopFrequency = Math.round(1000 / 60);
        this.counter = 0;

    }

    startGame(){
        this.splashScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
            this.counter++;
        }, this.gameLoopFrequency);

        /* TO DO : Loop all backgrounds */
        // document.body.style.backgroundImage = "url(../img/countryside-landscape-farm-day.jpg)";
        // document.body.style.backgroundPosition = "0 -7.91em";
    }

    restart(){
        this.gameIsOver = false;
        this.lives = 1;
        this.score = 0;
        this.gameOverScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.startGame();     
    }

    gameLoop(){
        this.update();

        if(this.gameIsOver){
            clearInterval(this.gameIntervalId);
            this.gameOver();
            this.scoreElement.innerText = this.score = 0;
            this.livesElement.innerText = this.lives = 1;
            this.player.top = 380;
        }
    }

    update(){
        this.player.move();

        if (this.counter % 150 === 0) {
            this.collectibles.push(new Collectibles(this.gameScreen));
          } else if (this.counter % 170 === 0){
            this.obstacles.push(new Obstacles(this.gameScreen));
          };

        this.collectibles.forEach((oneCollectible, index) => {
            oneCollectible.move();
                     /* IF a collectible is collected */
            if (this.player.didCollect(oneCollectible)){
                this.collectibles.splice(index, 1);
                oneCollectible.collectible.remove();
                this.score++;
                this.scoreElement.innerText = this.score;
             }           
        })

          this.obstacles.forEach((oneObstacle, index) => {
            oneObstacle.move();
                    /* IF collision occurs */
        if (this.player.didCollide(oneObstacle)){
            this.obstacles.splice(index, 1);
            oneObstacle.obstacle.remove(); 
            this.lives--;
            this.livesElement.innerText = this.lives;
            if (this.lives === 0) {
            this.gameIsOver = true;
            }
        }
    });       
}

    gameOver(){
        this.restartBtn.style.display = "flex";
        this.restartBtn.style.justifyContent = "center";
        this.restartBtn.style.alignItems = "center";
        this.gameScreen.style.display = "none";
        this.gameOverScreen.style.display = "block";

        this.obstacles.forEach((oneObstacle) => {
            oneObstacle.obstacle.remove();
        })
        this.collectibles.forEach((oneCollectible) => {
            oneCollectible.collectible.remove();
        })
        this.collectibles = [];
        this.obstacles = [];     
    }


}