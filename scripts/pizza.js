class Pizza {
  constructor(ctx, maxCol, maxRow, src) {
    this.ctx = ctx;
    this.maxCol = maxCol;
    this.maxRow = maxRow;
    this.setRandomPosition(); // to set `this.col` and `this.row`

    this.img = new Image();
    this.img.src = src;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * this.maxCol);
    this.row = Math.floor(Math.random() * this.maxRow);
  }
}
