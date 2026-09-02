let ball;
function setup() {
createCanvas(600,400)
background(220)
ball = new Sprite();
ball.diameter = 25;
ball.visible = false;
world.gravity.y = 5;
}
function draw() {
    ball.visible = true;
    background(220)
    if (mouse.presses()) {
        ball.x = mouseX
        ball.y = mouseY
        
        
    }
}