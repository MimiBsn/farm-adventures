class Duck {
    constructor (
        gameScreen,
        playerLeft,
        playerTop,
        playerWidth,
        playerHeight,
        ) {
        this.gameScreen = gameScreen;
        this.left = playerLeft;
        this.top = playerTop;
        this.width = playerWidth;
        this.height = playerHeight;
        this.directionY = 0;
        //creating the element, setting the src and everything else
        this.duckImg = ["../img/yellow-duck.png", "../img/yellow-duck-moving.png"];
        this.duckPlayer = document.createElement("img");
        this.duckImgIndex = 0;
        this.duckPlayer.src = this.duckImg[this.duckImgIndex];
        this.duckPlayer.style.position = "absolute";
        this.duckPlayer.style.width = `${this.width}px`;
        this.duckPlayer.style.height = `${this.height}px`;
        this.duckPlayer.style.left = `${this.left}px`;
        this.duckPlayer.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.duckPlayer);
        this.isJumping = false;
    }

    move(){
          if(this.isJumping && this.top > 100) //Set a top limit for the duck's jump
          {
            this.directionY = -4;
          } else {
           if(this.top < 420){
            this.directionY = 5;
           }else{
            this.directionY = 0;
           }
          }
          this.top += this.directionY;
        this.updatePosition();  
    }

    updatePosition(){
        this.duckPlayer.style.top = `${this.top}px`;
    }

    didCollide(obstacle){
        const duckRect = this.duckPlayer.getBoundingClientRect();
        const ennemiesRect = obstacle.obstacle.getBoundingClientRect();

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

    didCollect(collectible){
        const duckRect = this.duckPlayer.getBoundingClientRect();
        const collectRect = collectible.collectible.getBoundingClientRect();

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