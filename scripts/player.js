class Player {
  constructor(ctx, initialCol, initalRow, imgPaths) {
    this.ctx = ctx;
    this.col = initialCol;
    this.row = initalRow;
    this.orientation = "down";
    //this.score = score
    //this.img = new Image();
    //this.img.src = imgPaths;
    // Save all the images in the character
    
    this.imgs = {};
    // Loop keys of object
    for (let orientation in imgPaths) {
      this.imgs[orientation] = new Image();
      this.imgs[orientation].src = imgPaths[orientation];
    }
  }

  moveUp() {
    this.row--;
    this.orientation = "up";
    console.log('up')
  }
  moveDown() {
    this.row++;
    this.orientation = "down";
    console.log('down')
  }
  moveLeft() {
    this.col--;
    this.orientation = "left";
    console.log('left')
  }
  moveRight() {
    this.col++;
    this.orientation = "right";
    console.log('right')
  }
}
