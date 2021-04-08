class Dude {

  constructor(x, y, dir) {
    this.x = x
    this.y = y
    this.dir = dir
    this.hasBlock = false
  }

  move(dir) {
    this.dir = dir
    const x = this.x + dir
    if (checkSq(x,this.y)) {
      return
    }
    if (this.hasBlock) {
      if (checkSq(x,this.y-1)) {
        blocks.push(new Block(this.x,this.y))
        this.hasBlock = false
      }
    }
    this.x = x
    this.y = getDown(x,this.y)
  }

  up() {
    const x = this.x + this.dir
    const y = this.y - 1
    if (!checkSq(x,this.y)) {
      return
    }
    if (checkSq(x,y)) {
      return
    }
    if (checkSq(this.x,y)) {
      return
    }
    if (this.hasBlock) {
      if (checkSq(this.x,y-1)) {
        return
      }
      if (checkSq(x,y-1)) {
        return
      }
    }
    this.x = x
    this.y = y
  }

  pickUp() {
    if (this.hasBlock) {
      const x = this.x + this.dir
      if (checkSq(x,this.y-1)) {
        return
      }
      this.hasBlock = false
      if (checkSq(x,this.y)) {
        blocks.push(new Block(x,this.y-1))
      } else {
        blocks.push(new Block(x,getDown(x,this.y)))
      }
    } else {
      if (checkSq(this.x,this.y-1)) {
        return
      }
      const x = this.x + this.dir
      if (checkSq(x,this.y-1)) {
        return
      }
      const bl = checkObj(blocks,x,this.y)
      if (!bl) {
        return
      }
      blocks.splice(blocks.indexOf(bl),1)
      this.hasBlock = true
    }
  }

  updateView() {
    if (this.x > viewx+1) {
      viewx = ti84 ? this.x-1 : viewx + 1
    }
    if (this.x < viewx-2) {
      viewx = ti84 ? this.x+2 : viewx - 1
    }
    if (this.y > viewy+1) {
      viewy = ti84 ? this.y-1 : viewy + 1
    }
    if (this.y < viewy) {
      viewy = ti84 ? this.y : viewy - 1
    }
    constrainView()
  }

  show() {
    push()
    translate(this.x*8,(this.y)*8)
    if (this.dir === RIGHT) {
      translate(8,0)
      scale(-1,1)
    }
    rect(3,0,3,1)
    rect(1,1,6,1)
    rect(3,2,1,1)
    rect(6,2,1,2)
    rect(2,3,1,1)
    rect(3,4,1,1)
    rect(5,4,1,1)
    rect(2,5,1,1)
    rect(4,5,1,2)
    rect(6,5,1,1)
    rect(2,7,2,1)
    rect(5,7,2,1)
    pop()
    if (this.hasBlock) {
      drawBlock(this.x,this.y-1)
    }
  }

}
