let colorR, colorG, colorB;
const bgColor = 220;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
}

function mouseClicked() {
  colorR = random(0, 255);
  colorG = random(0, 255);
  colorB = random(0, 255);
}

function doubleClicked() {
  background(bgColor);
}

function draw() {
  fill(colorR, colorG, colorB);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}