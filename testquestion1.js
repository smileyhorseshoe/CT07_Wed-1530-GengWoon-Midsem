let ball;
function setup() {
createCanvas(600,400)
background(220)
world.gravity.y = 5;
}
function draw() {
    if (mouse.presses()) {
        ball = new Sprite();
        ball.diameter = 25;
        ball.x = mouseX
        ball.y = mouseY
    }
    background(220)
        

}
