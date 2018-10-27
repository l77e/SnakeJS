var screen;
var screenSize = 600;
var snake = new Snake(screenSize);
var currentKeyPressed;

function setup(){
    snake.createFood();
}

function draw(){
    screenSize = window.innerWidth / 1.5;
    screen = createCanvas(screenSize, screenSize);
    background(snake.tailLength * 4);
    snake.drawIt();
    snake.previousPath.push([snake.x,snake.y]);
    frameRate(snake.tailLength / 2);
}

function keyPressed(){
    switch(keyCode){
        case UP_ARROW:
        if(currentKeyPressed != keyCode || currentKeyPressed != DOWN_ARROW) {
        snake.moveUp();
        currentKeyPressed = keyCode;
        }
        break;
        case DOWN_ARROW: 
        if(currentKeyPressed != keyCode || currentKeyPressed != UP_ARROW) {
        snake.moveDown();
        currentKeyPressed = keyCode;
        }
        break; 
        case LEFT_ARROW: 
        if(currentKeyPressed != keyCode && currentKeyPressed != RIGHT_ARROW) {
        snake.moveLeft();
        currentKeyPressed = keyCode;
        }
        break;
        case RIGHT_ARROW: 
        if(currentKeyPressed != keyCode && currentKeyPressed != LEFT_ARROW) {
        snake.moveRight();
        currentKeyPressed = keyCode;
        }
        break;
    }
}