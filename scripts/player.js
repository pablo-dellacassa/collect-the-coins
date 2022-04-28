class Player {
  constructor(initialCol,initalRow,imgPaths) {
    this.ctx = ctx;
    this.col = initialCol
    this.row = initalRow
    this.orientation = 'down'
    this.score = 0

    // Save all the images in the character 
    
    this.imgs = {}
    
    
    
    // Loop keys of object
    for (let orientation in imgPaths) {
      this.imgs[orientation] = new Image()
      this.imgs[orientation].src = imgPaths[orientation]
    }
  }
  
  drawPlayer() {
    ctx.drawImage(
      player.imgs[player.orientation],
      player.col * TILE_SIZE,
      player.row * TILE_SIZE,
      TILE_SIZE, // Find the right ratio
      TILE_SIZE
    );
  }
  moveUp(){
    this.row--
    this.orientation = 'up'
  }
  moveDown(){
    this.row++
    this.orientation = 'down'
  }
  moveLeft(){
    this.col--
    this.orientation = 'left'
  }
  moveRight(){
    this.col++
    this.orientation = 'right'
  }
}

