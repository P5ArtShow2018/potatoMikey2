var x1 = 75
var y1 = 75
var x2 = 50
var y2 = 50

function preload() {
  potato = loadImage("assets/potato.png")
}
function setup() {
 createCanvas(windowWidth,windowHeight)
  imageMode(CENTER)
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
function draw() {
  noCursor()
  image(potato,x1,y1,50)
  image(potato, x1 + 50,y1 + 50,50)
  image(potato, x1 - 50,y1 - 50,50)
  image(potato, x1 + 100,y1 + 100,50)
  if (keyIsDown(LEFT_ARROW)) 
x1 -= 5;
  
  if (keyIsDown(RIGHT_ARROW)) 
x1 += 5;
  
  if (keyIsDown(UP_ARROW)) 
y1 -= 5;
  
  if (keyIsDown(DOWN_ARROW)) 
y1 += 5;
  if(keyIsDown(65)) { background(255) }
  if(keyIsDown(32)) { background(random(1,255),random(1,255),random(1,255)) }
  
}

