class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image(this.ctx.canvas.width, this.ctx.canvas.height);
  }

  drawGrid() {
    ctx.lineWidth = 0.01; // Change the border width of lines
    ctx.fillStyle = "black";
  
    // Draw the vertical lines
    for (let x = 0; x <= height; x += TILE_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
  
    // Draw the horizontal lines
    for (let y = 0; y <= width; y += TILE_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }  

}
