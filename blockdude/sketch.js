
const sc = 4
let w = 0
let h = 0
let viewx
let viewy
const offset = 7

const LEFT = -1
const RIGHT = 1

let bricks = []
let blocks = []
let dude
let door

let level
let levelStr

let ti84 = false
let changeOnce = true

let started = false
let done = false

const bd_setup = () => {
  const canvas = createCanvas((96+offset*2)*sc,(64+offset*2)*sc);
  console.log(width)
  canvas.parent("centered")
  pixelDensity(0.8)
  level = parseInt(window.location.search.substring(11)) || 1
  reset()
}

const newPage = (lev) => {
  window.location.search = '?blockdude-'+String(lev)
}

const reset = () => {
  w = 0
  h = 0
  started = false
  done = false
  levelStr = levels[level]
  const grid = levelStr.substring(1,levelStr.length-1).split("\n")
  bricks = []
  blocks = []
  grid.forEach(row => {
    w = 0
    row.split("").forEach(cell => {
      switch (cell) {
        case "X":
          bricks.push(new Brick(w,h))
          break
        case "B":
          blocks.push(new Block(w,h))
          break
        case "R":
        case "L":
          dude = new Dude(w,h,cell === "R" ? RIGHT : LEFT)
          break
        case "D":
          door = new Door(w,h)
          break
        default:
          break
      }
      w++
    })
    h++
  })
  viewx = dude.x
  viewy = dude.y
  constrainView()
  console.log(bricks,blocks,door,dude)
}

const bd_keyPressed = () => {
  if (key === 'r' || key === 'R') {
    reset()
    return
  } else if (keyCode === ENTER) {
    if (ti84) {
      pixelDensity(displayDensity())
      frameRate(60)
      ti84 = false
    } else {
      pixelDensity(0.8)
      changeOnce = true
    }
    return
  }
  if (done) {
    return
  }
  started = true
  if (!keyIsDown(SHIFT)) {
    switch (keyCode) {
      case LEFT_ARROW:
        dude.move(LEFT)
        break
      case RIGHT_ARROW:
        dude.move(RIGHT)
        break
      case UP_ARROW:
        dude.up()
        break
      case DOWN_ARROW:
        dude.pickUp()
        break
      default:
        break
    }
  } else {
    switch (keyCode) {
      case LEFT_ARROW:
        viewx--
        break
      case RIGHT_ARROW:
        viewx++
        break
      case UP_ARROW:
        viewy--
        break
      case DOWN_ARROW:
        viewy++
        break
      default:
        break
    }
    constrainView()
  }
}

const constrainView = () => {
  // vx = min(0,max(12-w,6-viewx))*8
  // vy = min(0,max(8-h,4-viewy))*8
  viewx = constrain(viewx,6,w-6)
  viewy = constrain(viewy,4,h-4)
}

const checkObj = (arr,x,y) => {
  return arr.reduce((acc,el) => acc || ((el.x === x && el.y === y) ? el : null), null)
}

const checkSq = (x,y) => {
  return (checkObj(bricks,x,y) || checkObj(blocks,x,y))
}

const drawBlock = (x,y) => {
  push()
  translate(x*8,(y)*8)
  rect(0,0,8,1)
  rect(0,1,1,6)
  rect(7,1,1,6)
  rect(0,7,8,1)
  pop()
}

const getDown = (x,y) => {
  let filled = false
  while (!filled) {
    filled = checkSq(x,y+1)
    if (!filled) {
      y++
    }
  }
  return y
}

const checkWin = () => {
  if (dude.x === door.x && dude.y === door.y) {
    if (level < 11) {
      newPage(level+1)
    } else {
      started = false
      done = true
    }
  }
}

const bd_draw = () => {
  checkWin()
  background(147,161,141,ti84 ? 130 : 255)
  // background(147,161,141)
  push()
  scale(sc)
  if (!keyIsDown(SHIFT)) {
    dude.updateView()
  }
  translate(offset,offset)
  push()
  translate((6-viewx)*8,(4-viewy)*8)
  noStroke()
  fill(1,3,2)
  bricks.forEach(brick => brick.show())
  blocks.forEach(block => block.show())
  dude.show()
  door.show()
  pop()
  if (!started) {
    showMsg()
  }
  pop()
  noStroke()
  fill(255)
  rect(0,0,width,offset*sc-3)
  rect(0,height-offset*sc+3,width,offset*sc-3)
  fill(154,169,149)
  const r = 10
  const ex = (ti84 || changeOnce) ? 0.5 : 0
  rect(0,0,width,offset*sc+ex,r)
  rect(0,height-offset*sc-ex,width,offset*sc+ex,r)
  rect(0,0,offset*sc+ex,height,r)
  rect(width-offset*sc-ex,0,offset*sc+ex,height,r)
  // noFill()
  // stroke(0)
  // strokeWeight(2)
  // rect(0,0,width,height)
  if (changeOnce) {
    changeOnce = false
    ti84 = true
    frameRate(15)
  }
}
