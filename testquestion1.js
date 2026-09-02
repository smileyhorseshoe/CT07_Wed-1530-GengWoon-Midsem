let ball;
function setup() {
createCanvas(600,400)
background(220)
ball = new Sprite();
ball.diameter = 25;

world.gravity.y = 10;
}
function draw() {
    if (mouse.presses()) {
        ball.x = mouseX
        ball.y = mouseY
        ball.layer =1000
        background(220)
        
    }
}