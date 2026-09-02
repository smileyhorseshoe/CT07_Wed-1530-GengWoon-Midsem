let ball;
function setup() {
createCanvas(600,400)
ball = new Sprite();
ball.diameter = 25;
world.gravity.y = 10;
}
function draw() {
    if (mouse.presses()) {
        background("black")
        ball.x = mouseX
        ball.y = mouseY
    }
}