class Collectibles {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        
        this.top =  Math.floor(Math.random() * (-380 - -580) + 100);
        this.left = 1100;
        this.width = 100;
        this.height = 100;
        this.collectible = document.createElement("img");
        this.collectible.src = "../img/cute-duck-player.png";
        this.collectible.style.position = "absolute";
        this.collectible.style.width = `${this.width}px`;
        this.collectible.style.height = `${this.height}px`;
        this.collectible.style.left = `${this.left}px`;
        this.collectible.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.collectible);
        }

        move(){
            this.left -= 3;
            this.updatePosition();
        }

        updatePosition(){
            this.collectible.style.left = `${this.left}px`
        }

}