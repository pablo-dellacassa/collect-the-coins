class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 150;
    this.height = 200;
    this.y = this.ctx.canvas.height - this.height;
    this.x = 20;
    this.spritesCount = 3;
    this.spriteNumber = 0;
    this.img = new Image();
    this.img.src = "/module-1/project-1/mario-example-game/images/marco.png";
    this.speedY = 0;
  }
}
