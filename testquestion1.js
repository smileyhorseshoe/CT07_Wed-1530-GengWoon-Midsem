let ball;
function setup() {
createCanvas(600,400)
background(220)
world.gravity.y = 5;
}
function draw() {
    ball = new Sprite();
    ball.diameter = 25;
    if (mouse.presses()) {
        ball.x = mouseX
        ball.y = mouseY
        background(220)
    }
        

}
