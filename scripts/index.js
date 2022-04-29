window.onload = () => {
  console.log("JS Loaded in the client");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  /*
const player = new Player(ctx);
const background = new Background(ctx);
const pizza = new Pizza(ctx);
*/
  const game = new Game(ctx);

  const startArea = document.getElementsByClassName("game-area");
  startArea[0].addEventListener("click", () => {
    startArea.textContent = "RESTART";
    //startArea.blur();
    game.start.bind(game);
  });
  game.start.call(game);
};
