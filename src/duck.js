class Duck {
    constructor (
        gameScreen,
        playerLeft,
        playerTop,
        playerWidth,
        playerHeight,
        imgSrc
        ) {
        this.gameScreen = gameScreen;
        this.left = playerLeft;
        this.top = playerTop;
        this.width = playerWidth;
        this.height = playerHeight;
        this.directionY = 0;
        //creating the element, setting the src and everything else
        this.duckPlayer = document.createElement("img");
        this.duckPlayer.src = imgSrc;
        this.duckPlayer.style.position = "absolute";
        this.duckPlayer.style.width = `${this.width}px`;
        this.duckPlayer.style.height = `${this.height}px`;
        this.duckPlayer.style.left = `${this.left}px`;
        this.duckPlayer.style.top = `${this.top}px`;
        // put the player on the screen after we set all the properties
        this.gameScreen.appendChild(this.duckPlayer);
        // this.isJumping = false;
    }

    move(){
        if (this.left >= 30 && this.left + this.width <= 500) {
           
            this.top += this.directionY;
        this.updatePosition();
    }   
    }

    updatePosition(){
        console.log(this.top)
        this.duckPlayer.top = `${this.top}px`;
    }

    didCollide(obstacles){
        const duckRect = this.duckPlayer.getBoundingClientRect();
        const ennemiesRect = obstacles.element.getBoundingClientRect();

        if (
            duckRect.left < ennemiesRect.right &&
            duckRect.right > ennemiesRect.left &&
            duckRect.top < ennemiesRect.bottom &&
            duckRect.bottom > ennemiesRect.top
          ) {
            return true;
          } else {
            return false;
          }
    }

    didCollect(collectibles){
        const duckRect = this.duckPlayer.getBoundingClientRect();
        const collectRect = collectibles.element.getBoundingClientRect();

        if (
            duckRect.left < collectRect.right &&
            duckRect.right > collectRect.left &&
            duckRect.top < collectRect.bottom &&
            duckRect.bottom > collectRect.top
          ) {
            return true;
          } else {
            return false;
          }
    }
}