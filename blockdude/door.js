class Door {

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  show() {
    push()
    translate(this.x*8,(this.y)*8)
    rect(1,0,6,1)
    rect(1,1,1,6)
    rect(6,1,1,6)
    rect(1,7,6,1)
    rect(5,4,1,1)
    pop()
  }
}
