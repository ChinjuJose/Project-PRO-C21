var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    block1 = createSprite(30, 500, 200, 30);
    block1.shapeColor = "red";

    block2 = createSprite(280, 500, 200, 30);
    block2.shapeColor = "orange";

    block3 = createSprite(530, 500, 200, 30);
    block3.shapeColor = "green";

    block4 = createSprite(770, 500, 200, 30);
    block4.shapeColor = "purple";

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background("gray");
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if (block1.isTouching(ball) && ball.bounceOff(block1)) {
        ball.shapeColor = "red";
        music.play();
    }

    if (block2.isTouching(ball) && ball.bounceOff(block2)) {
        ball.shapeColor = "orange";
        music.stop();
    }

    if (block3.isTouching(ball) && ball.bounceOff(block3)) {
        ball.shapeColor = "green";
    }

    if (block4.isTouching(ball) && ball.bounceOff(block4)) {
        ball.shapeColor = "purple";
    }

    drawSprites();
}
