let ball;
let floor;
function setup() {
createCanvas(600,400);
background(220);
world.gravity.y = 5;
floor.x= width/2;
floor.y = 30;
floor = new Sprite(floor.x,floor.y,600,2);
floor.collider=  'static';
floor.color = 'black';

}
function draw() {
    if (mouse.presses()) {
        ball = new Sprite();
        ball.diameter = 25;
        ball.x = mouseX;
        ball.y = mouseY;
    }
    background(220);
        

}

