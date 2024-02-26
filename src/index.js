window.onload = function (){

const startBtn = document.querySelector("#start-game");
const musicBtn = document.querySelector("#music")
const game = new Game();

startBtn.addEventListener("click", function (){
    console.log("Start Game");
    game.startGame();
});

musicBtn.addEventListener("click", () => {
    console.log("clicked");
});
        /*Make the player jump */
document.addEventListener("keydown", (event) =>{
    console.log("event")
    if (event.code === "ArrowUp") {
        game.player.directionY = -30;
      }
});

document.addEventListener("keyup", () =>{ 
    game.player.directionY = 0;
});
}