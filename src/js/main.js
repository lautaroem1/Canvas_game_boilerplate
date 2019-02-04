//! Do not change this block
const canvas = document.getElementById("canvas");
const WIDTH = 800;
const HEIGHT = 450;
canvas.width = WIDTH;
canvas.height = HEIGHT;


window.onload = () => {
    displayGame();
    const game = new Game(canvas);
    
    //* Add your game logic
    //! Remember to call `game.start()`!


}

function displayGame() {
    document.getElementById("game").style.display = 'flex';
    document.getElementById("loading").style.display = 'none';
}