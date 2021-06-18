song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Sorry By Alan Walker.mp3");
    song2 = loadSound("Dance Monkey By Tones and I.mp3");
}

function setup(){
    Canvas = createCanvas(1000,500);
    Canvas.position(0,170);
    Video = createCapture(VIDEO);
    Video.hide();
}

function draw(){
    image(Video,20,100,320,230);
}