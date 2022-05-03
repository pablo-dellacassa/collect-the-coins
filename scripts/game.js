class Game {
  constructor(ctx, sounds) {
    this.ctx = ctx;
    this.screen = 0; // 0= splash start, 1 = game, 2 = gamover
    this.score = 0;
    this.countDown = 30;
    this.player = null;
    this.NB_OF_TILES = 10;
    this.TILE_SIZE = this.ctx.canvas.width / this.NB_OF_TILES;
    this.printedScore = document.getElementById("score");
    this.printedTimeRemaining = document.getElementById("timeRemaining");
  }

  init() {
    document.onkeydown = (e) => {
      e.preventDefault(); // Stop the default behavior (moving the screen to the left/up/right/down)

      this.updateEverything(e.keyCode); // 1st part: Update player and treasure

      this.drawEverything(); // 2nd part: draw everything
    };
    /*if (this.ctx === ctx) {
      this.ctx = document.getElementById("canvas").getContext("2d");
    }*/
    //this.setCanvasToFullScreen();
    this.start();
  }

  start() {
    switch (this.screen) {
      case 0:
        console.log("screen 0");
        document.getElementById("textScore").style.display = "none";
        document.getElementById("textTimeRemaining").style.display = "none";
        const splashItalyFlag = new Image();
        const splashMarco = new Image();
        const splashPizza = new Image();
        splashItalyFlag.src = "./images/italyFlag.png";
        splashMarco.src = "./images/marcoFace.png";
        splashPizza.src = "./images/pizza-slice.png";
        splashItalyFlag.onload = () => {
          this.ctx.drawImage(splashItalyFlag, 70, 10, 200, 150);
        };
        splashMarco.onload = () => {
          this.ctx.drawImage(splashMarco, 100, 200, 350, 350);
        };
        splashPizza.onload = () => {
          this.ctx.drawImage(splashPizza, 250, -90, 350, 350);
        };
        this.displaySplashStart();
        break;
      case 1:
        console.log("screen 1");
        this.reset();
        //this.displaySplashResume()
        break;
      case 2:
        console.log("screen 2");
        this.gameOver();
        break;
      default:
        console.log("This screen code is unknow!");
    }
  }

  /*setCanvasToFullScreen() {
    this.ctx.canvas.height = window.innerHeight;
    this.ctx.canvas.width = window.innerWidth;
  }*/

  displaySplashStart() {
    const startMessage = document.getElementById("img-game-start");
    startMessage.onclick = () => {
      this.screen = 1;
      this.start();
      startMessage.remove();
    };
  }

  gameTime(intervalId) {
    this.countDown--;
    console.log(this.countDown)
    this.printedTimeRemaining.innerText = this.countDown;
    
    if(this.countDown === 0){
      this.countDown = 30
      console.log ('helooooooooo')
      clearInterval(intervalId);
      intervalId = null;
      this.screen = 2;
      this.start();
    }
    
    //this.ctx.removeEventListener("click", this.play());
    //this.printedTimeRemaining.innerText = this.countDown;
  }

  drawGrid() {
    this.ctx.lineWidth = 0.01; // Change the border width of lines

    // Draw the vertical lines
    for (var x = 0; x <= this.ctx.canvas.height; x += this.TILE_SIZE) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.ctx.canvas.height);
      this.ctx.stroke();
    }

    // Draw the horizontal lines
    for (var y = 0; y <= this.ctx.canvas.width; y += this.TILE_SIZE) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.ctx.canvas.width, y);
      this.ctx.stroke();
    }
  }

  drawPlayer() {
    //this.ctx.fillRect(this.player.col * this.TILE_SIZE, this.player.row * this.TILE_SIZE, this.TILE_SIZE, this.TILE_SIZE*2)
    this.player.imgs[this.player.orientation].onload = () =>
      this.ctx.drawImage(
        this.player.imgs[this.player.orientation],
        this.player.col * this.TILE_SIZE,
        this.player.row * this.TILE_SIZE,
        this.TILE_SIZE, // Find the right ratio
        this.TILE_SIZE
      );

      this.ctx.drawImage(
        this.player.imgs[this.player.orientation],
        this.player.col * this.TILE_SIZE,
        this.player.row * this.TILE_SIZE,
        this.TILE_SIZE, // Find the right ratio
        this.TILE_SIZE
      )

    console.log(this.player.col, this.player.row);
  }

  drawPizza() {
    this.ctx.drawImage(
      this.pizza.img,
      this.pizza.col * this.TILE_SIZE,
      this.pizza.row * this.TILE_SIZE,
      this.TILE_SIZE, // Find the right ratio
      this.TILE_SIZE
    );
  }

  drawEverything() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawGrid();
    this.drawPizza();
    this.drawPlayer();
  }

  gameOver() {
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillText('GAME OVER', this.ctx.canvas.width/2, this.ctx.canvas.height/2)
  }

  updateEverything(keyCode) {
    switch (keyCode) {
      case 37:
        if (this.player.col > 0) this.player.moveLeft();
        break;
      case 38:
        if (this.player.row > 0) this.player.moveUp();
        break;
      case 39:
        if (this.player.col < 9) this.player.moveRight();
        break;
      case 40:
        if (this.player.row < 9) this.player.moveDown();
        break;
    }
    // Check if the user is on the pizza
    if (
      this.player.row === this.pizza.row &&
      this.player.col === this.pizza.col
    ) {
      this.score++;
      this.printedScore.innerText = this.score;
      this.pizza.setRandomPosition();
    }
  }

  reset() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    document.getElementById("textScore").style.display = "";
    document.getElementById("textTimeRemaining").style.display = "";
    this.player = new Player(this.ctx, 0, 0, {
      left: "./images/marcoLeft.png",
      up: "./images/marcoBack.png",
      right: "./images/marcoRight.png",
      down: "./images/marcoFront.png",
    });
    this.pizza = new Pizza(this.ctx, 9, 4, "./images/pizza-slice.png");
    let NB_OF_TILES = 100;
    let TILE_SIZE = this.ctx.canvas.width / NB_OF_TILES;
    this.updateEverything();
    this.drawEverything();
    //this.gameTime();

    let intervalId = setInterval(() => {
      this.gameTime(intervalId);
    }, 1000);
  }
}
