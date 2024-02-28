class Obstacles {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        
        this.top =  Math.floor(Math.random() * (380 - 100) + 100);
        this.left = 1100;
        this.width = 100;
        this.height = 100;
        this.obstacle = document.createElement("img");
        this.obstacle.src = "../img/attacking-goose.png";
        this.obstacle.style.position = "absolute";
        this.obstacle.style.width = `${this.width}px`;
        this.obstacle.style.height = `${this.height}px`;
        this.obstacle.style.left = `${this.left}px`;
        this.obstacle.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.obstacle);
        }

        move(){
            this.left -= 4;
            this.updatePosition();
        }

        updatePosition(){
            this.obstacle.style.left = `${this.left}px`
        }

}