console.log("JS Loaded in the client");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const player = new Player(ctx);
const background = new Background(ctx);
const pizza = new pizza(ctx);

const game = new Game(ctx, player, pizza, background);
window.onload = () => {
  game.init();
};

const startArea = document.getElementsByClassName("game-area");

startArea.addEventListener("click", () => {
  startArea.textContent = "RESTART";
  startArea.blur();
  game.start();
});
