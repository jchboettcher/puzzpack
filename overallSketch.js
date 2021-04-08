function setup() {
  const str = window.location.search
  switch (str.substring(1,3)) {
    case 'bl':
      if (str.substring(1,10) === 'blockdude') {
        bd_setup()
      }
      break
    case 'pe':
      pegs_setup()
      break
    default:
      break
  }
}

function keyPressed() {
  const str = window.location.search
  switch (str.substring(1,3)) {
    case 'bl':
      if (str.substring(1,10) === 'blockdude') {
        bd_keyPressed()
      }
      break
    default:
      break
  }
}

function draw() {
  const str = window.location.search
  switch (str.substring(1,3)) {
    case 'bl':
      if (str.substring(1,10) === 'blockdude') {
        bd_draw()
      }
      break
    case 'pe':
      pegs_draw()
      break
    default:
      break
  }
}