class Game {
    constructor (){
        this.splashScreen = document.querySelector("#splash-screen");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameOverScreen = document.querySelector("#game-over");
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
        this.lives = 2;
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
        document.body.style.backgroundImage = "url(../img/countryside-landscape-farm-day.jpg)";
        document.body.style.backgroundPosition = "0 -7.91em";
    }

    gameLoop(){
        // console.log("hello")
        this.update();
        if(this.gameIsOver === true){
            clearInterval(this.gameIntervalId);
        }
    }

    update(){
        // console.log("update");
        this.player.move();
        /*Add gameover */
    }
}