const showMsg = () => {
  push()
  noStroke()
  fill(0)
  translate(22,16)
  rect(0,0,53,31)
  fill(154,169,149)
  rect(1,7,51,23)
  push()
  translate(8,1)
  rect(0,0,1,5) // B
  rect(1,0,1,1)
  rect(1,2,1,1)
  rect(1,4,1,1)
  rect(2,1,1,1)
  rect(2,3,1,1)
  rect(4,0,2,1) // l
  rect(5,1,1,4)
  rect(7,2,1,2) // o
  rect(8,1,1,1)
  rect(8,4,1,1)
  rect(9,2,1,2)
  rect(11,2,1,2) // c
  rect(12,1,2,1)
  rect(12,4,2,1)
  rect(15,0,1,5) // k
  rect(16,3,1,1)
  rect(17,2,1,1)
  rect(17,4,1,1)
  translate(21,0)
  rect(0,0,1,5) // D
  rect(1,0,1,1)
  rect(1,4,1,1)
  rect(2,1,1,3)
  rect(4,1,1,4) // u
  rect(5,4,1,1)
  rect(6,1,1,4)
  rect(8,2,1,2) // d
  rect(9,1,1,1)
  rect(9,4,1,1)
  rect(10,0,1,5)
  rect(12,2,1,2) // e
  rect(13,1,1,1)
  rect(13,3,1,2)
  rect(14,2,1,1)
  rect(14,4,1,1)
  pop()
  push()
  fill(0)
  if (!done) {
    translate(5,12)
    rect(0,0,1,5) // L
    rect(1,4,2,1)
    rect(4,2,1,2) // e
    rect(5,1,1,1)
    rect(5,3,1,2)
    rect(6,2,1,1)
    rect(6,4,1,1)
    rect(8,1,1,2) // v
    rect(9,3,1,2)
    rect(10,1,1,2)
    rect(12,2,1,2) // e
    rect(13,1,1,1)
    rect(13,3,1,2)
    rect(14,2,1,1)
    rect(14,4,1,1)
    rect(16,0,2,1) // l
    rect(17,1,1,4)
    rect(19,1,1,1) // :
    rect(19,3,1,1)
    push()
    translate(22,0)
    switch (level) {
      case 1:
      case 10:
      case 11:
        rect(0,1,1,1)
        rect(0,4,3,1)
        rect(1,0,1,4)
        break
      case 2:
        rect(0,0,2,1)
        rect(0,3,1,2)
        rect(1,2,1,1)
        rect(1,4,2,1)
        rect(2,1,1,1)
        break
      case 3:
        rect(0,0,2,1)
        rect(1,2,1,1)
        rect(0,4,2,1)
        rect(2,1,1,1)
        rect(2,3,1,1)
        break
      case 4:
        rect(0,0,1,3)
        rect(1,2,1,1)
        rect(2,1,1,4)
        break
      case 5:
        rect(0,0,1,3)
        rect(0,4,2,1)
        rect(1,0,2,1)
        rect(1,2,1,1)
        rect(2,3,1,1)
        break
      case 6:
        rect(1,0,2,1)
        rect(0,1,1,4)
        rect(1,2,2,1)
        rect(1,4,2,1)
        rect(2,3,1,1)
        break
      case 7:
        rect(0,0,3,1)
        rect(2,1,1,1)
        rect(1,2,1,1)
        rect(0,3,1,2)
        break
      case 8:
        rect(0,0,1,5)
        rect(2,0,1,5)
        rect(1,0,1,1)
        rect(1,2,1,1)
        rect(1,4,1,1)
        break
      case 9:
        rect(0,0,2,1)
        rect(0,1,1,2)
        rect(2,0,1,4)
        rect(1,2,1,1)
        rect(0,4,2,1)
        break
      default:
        break
    }
    switch (level) {
      case 10:
        rect(4,1,1,3)
        rect(5,0,1,1)
        rect(5,4,1,1)
        rect(6,1,1,3)
        break
      case 11:
        rect(4,1,1,1)
        rect(4,4,3,1)
        rect(5,0,1,4)
        break
      default:
        break
    }
    pop()
    translate(0,9)
    rect(0,0,1,5) // P
    rect(1,0,1,1)
    rect(1,2,1,1)
    rect(2,1,1,1)
    rect(4,1,1,4) // r
    rect(5,2,1,1)
    rect(6,1,1,1)
    rect(8,2,1,2) // e
    rect(9,1,1,1)
    rect(9,3,1,2)
    rect(10,2,1,1)
    rect(10,4,1,1)
    rect(12,1,1,2) // s
    rect(12,4,1,1)
    rect(13,1,1,1)
    rect(13,3,1,2)
    rect(15,1,1,2) // s
    rect(15,4,1,1)
    rect(16,1,1,1)
    rect(16,3,1,2)
    translate(19,0)
    rect(0,2,1,2) // a
    rect(1,1,1,1)
    rect(1,4,1,1)
    rect(2,1,1,4)
    rect(4,1,1,4) // n
    rect(5,1,1,1)
    rect(6,2,1,3)
    rect(8,1,1,2) // y
    rect(8,4,1,1)
    rect(9,3,1,1)
    rect(10,1,1,2)
    rect(13,0,1,5) // k
    rect(14,3,1,1)
    rect(15,2,1,1)
    rect(15,4,1,1)
    rect(17,2,1,2) // e
    rect(18,1,1,1)
    rect(18,3,1,2)
    rect(19,2,1,1)
    rect(19,4,1,1)
    rect(21,1,1,2) // y
    rect(21,4,1,1)
    rect(22,3,1,1)
    rect(23,1,1,2)
  } else {
    translate(10,10)
    rect(0,0,1,5) // W
    rect(1,3,1,1)
    rect(2,0,1,5)
    rect(4,2,1,2) // e
    rect(5,1,1,1)
    rect(5,3,1,2)
    rect(6,2,1,1)
    rect(6,4,1,1)
    rect(8,0,2,1) // l
    rect(9,1,1,4)
    rect(11,0,2,1) // l
    rect(12,1,1,4)
    rect(15,2,1,2) // d
    rect(16,1,1,1)
    rect(16,4,1,1)
    rect(17,0,1,5)
    rect(19,2,1,2) // o
    rect(20,1,1,1)
    rect(20,4,1,1)
    rect(21,2,1,2)
    rect(23,1,1,4) // n
    rect(24,1,1,1)
    rect(25,2,1,3)
    rect(27,2,1,2) // e
    rect(28,1,1,1)
    rect(28,3,1,2)
    rect(29,2,1,1)
    rect(29,4,1,1)
    rect(31,0,1,3) // !
    rect(31,4,1,1)
    translate(-3,6)
    rect(0,0,1,2) // Y
    rect(1,2,1,3)
    rect(2,0,1,2)
    rect(4,2,1,2) // o
    rect(5,1,1,1)
    rect(5,4,1,1)
    rect(6,2,1,2)
    rect(8,1,1,4) // u
    rect(9,4,1,1)
    rect(10,1,1,4)
    rect(13,0,1,5) // b
    rect(14,1,1,1)
    rect(14,4,1,1)
    rect(15,2,1,2)
    rect(17,2,1,2) // e
    rect(18,1,1,1)
    rect(18,3,1,2)
    rect(19,2,1,1)
    rect(19,4,1,1)
    rect(21,2,1,2) // a
    rect(22,1,1,1)
    rect(22,4,1,1)
    rect(23,1,1,4)
    rect(25,0,1,4) // t
    rect(26,1,1,1)
    rect(26,4,1,1)
    rect(29,2,1,2) // a
    rect(30,1,1,1)
    rect(30,4,1,1)
    rect(31,1,1,4)
    rect(33,0,2,1) // l
    rect(34,1,1,4)
    rect(36,0,2,1) // l
    rect(37,1,1,4)
    translate(2,6)
    rect(0,0,1,4) // t
    rect(1,1,1,1)
    rect(1,4,1,1)
    rect(3,0,1,5) // h
    rect(4,1,1,1)
    rect(5,2,1,3)
    rect(7,2,1,2) // e
    rect(8,1,1,1)
    rect(8,3,1,2)
    rect(9,2,1,1)
    rect(9,4,1,1)
    rect(12,0,2,1) // l
    rect(13,1,1,4)
    translate(11,0)
    rect(4,2,1,2) // e
    rect(5,1,1,1)
    rect(5,3,1,2)
    rect(6,2,1,1)
    rect(6,4,1,1)
    rect(8,1,1,2) // v
    rect(9,3,1,2)
    rect(10,1,1,2)
    rect(12,2,1,2) // e
    rect(13,1,1,1)
    rect(13,3,1,2)
    rect(14,2,1,1)
    rect(14,4,1,1)
    rect(16,0,2,1) // l
    rect(17,1,1,4)
    rect(19,1,1,2) // s
    rect(19,4,1,1)
    rect(20,1,1,1)
    rect(20,3,1,2)
    rect(22,0,1,3) // !
    rect(22,4,1,1)
  }
  pop()
  pop()
}