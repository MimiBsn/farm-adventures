window.onload = function (){

const startBtn = document.querySelector("#start-game");
const restartBtn = document.querySelector("#restart-game");
const musicBtn = document.querySelector("#music")
const game = new Game();

startBtn.addEventListener("click", function (){
    game.startGame();
    startBtn.style.display = "none";
});

restartBtn.addEventListener("click", function (){
    game.restart();
    restartBtn.style.display = "none";
});

musicBtn.addEventListener("click", () => {
    game.song.pause();
});
        /*Make the player jump */
document.addEventListener("keydown", (event) =>{
    if (event.code === "ArrowUp") {
        game.player.isJumping = true;
      }
});

document.addEventListener("keyup", () =>{ 
    game.player.isJumping = false;
});

}