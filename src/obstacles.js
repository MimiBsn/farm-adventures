class Obstacles {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        this.top =  Math.floor(Math.random() * (420 - 100) + 100);
        this.left = 1100;
        this.obstacle = document.createElement("img");
        this.obstacleArr =["./img/racoon.png",
        "./img/angry-cat.png",
        "./img/joker.png",
        "./img/strong-cow.png",
        "./img/farmer.png",
        "./img/bat-rob.png"] ;
        this.obstacle.src = this.obstacleArr[Math.floor(Math.random()* this.obstacleArr.length)];
        this.obstacle.style.position = "absolute";
        this.obstacle.style.left = `${this.left}px`;
        this.obstacle.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.obstacle);
        }

        
        randomObstacles(img){
            const length = img.length;
            const randomIndex = Math.floor(length * Math.random())
            return img[randomIndex]
        }

        move(){
            this.left -= 4;
            this.updatePosition();
        }

        updatePosition(){
            this.obstacle.style.left = `${this.left}px`
        }
        
}