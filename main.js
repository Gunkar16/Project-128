song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("Sorry By Alan Walker.mp3");
    song2 = loadSound("Dance Monkey By Tones and I.mp3");
}

function setup(){
    Canvas = createCanvas(1000,500);
    Canvas.position(0,170);
    Video = createCapture(VIDEO);
    Video.hide();

    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

    }
}

function draw(){
    image(Video,20,100,320,230);
}