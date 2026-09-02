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
    if (mouse.presses()) {
        ball.visible = true;
        ball.x = mouseX
        ball.y = mouseY
        background(220)
        
        
    }
}
function clear() {
    
}