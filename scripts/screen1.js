

let ctx = canvas.getContext("2d");
let width = 300;
let height = 300;
const score = document.getElementById("score");
const countdown = 30; // Countdown timer (in seconds)
let id = null; // ID to track the setTimeout
//let sounds = new Sounds();


let player = new Player(0, 0, {
  left: "/module-1/project-1/pizza-time/images/marcoLeft.png",
  up: "/module-1/project-1/pizza-time/images/marcoBack.png",
  right: "/module-1/project-1/pizza-time/images/marcoRight.png",
  down: "/module-1/project-1/pizza-time/images/marcoFront.png",
});

let pizza = new Pizza(9, 4, "/module-1/project-1/pizza-time/images/pizza-slice.png");

// Some constants
let NB_OF_TILES = 10;
let TILE_SIZE = width / NB_OF_TILES;

function drawEverything() {
  ctx.clearRect(0, 0, width, height);
  pizza.drawPizza();
  player.drawPlayer();
}



function updateEverything(keyCode) {
  switch (keyCode) {
    case 37:
      if (player.col > 0) player.moveLeft();
      break;
    case 38:
      if (player.row > 0) player.moveUp();
      break;
    case 39:
      if (player.col < 9) player.moveRight();
      break;
    case 40:
      if (player.row < 4) player.moveDown();
      break;
  }
  // Check if the user is on the pizza
  if (player.row === pizza.row && player.col === pizza.col) {
    player.score++;
    score.innerText = player.score;
    pizza.setRandomPosition();
  }
}

function reset() {
  this.background = new Background(this.ctx);
  this.player = new Player(this.ctx);
}

// The first drawEverything is triggered after 500ms, to be sure that all pictures are loaded
setTimeout(() => {
  drawEverything();
}, 500);






document.onkeydown = function (e) {
  e.preventDefault(); // Stop the default behavior (moving the screen to the left/up/right/down)

  // 1st part: Update player and pizza
  updateEverything(e.keyCode);

  // 2nd part: draw everything
  drawEverything();
};
