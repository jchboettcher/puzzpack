class Block {

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  show() {
    drawBlock(this.x,this.y)
  }

}
