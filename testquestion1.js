let ball;
function setup() {
createCanvas(600,400)
background(220)
ball = new Sprite();
ball.diameter = 25;

world.gravity.y = 2;
}
function draw() {
    if (mouse.presses()) {
        ball.x = mouseX
        ball.y = mouseY
        
        
    }
    background(220)
}