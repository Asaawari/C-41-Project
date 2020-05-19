var girl,canvas,manhole1;

function preload(){
    track = loadImage("track.jpg");
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    girl = new Player(300,200,100,100);
}
function draw(){
    background(track);
    girl.display();
}