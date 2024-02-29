class Collectibles {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        
        this.top =  Math.floor(Math.random() * (-520 - -780) + 100);
        this.left = 1100;
        this.collectible = document.createElement("img");
        this.collectibleArr = ["../img/apple.png",
                                "../img/pizza.png",
                                "../img/jam.png",
                                "../img/mushroom.png",
                                "../img/pumpkin.png",
                                "../img/vegetables.png"]
        this.collectible.src = this.collectibleArr[Math.floor(Math.random()* this.collectibleArr.length)];
        this.collectible.style.position = "absolute";
        this.collectible.style.left = `${this.left}px`;
        this.collectible.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.collectible);
        }

        move(){
            this.left -= 4;
            this.updatePosition();
        }

        updatePosition(){
            this.collectible.style.left = `${this.left}px`
        }

}