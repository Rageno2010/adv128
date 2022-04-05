var song1 = "";
var song2 = "";
var lefthandx = "0";
var lefthandy = "0";
var righthandx = "0";
var righthandy = "0";

function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}
function draw(){
image(video,0,0,600,500);
}
function play25(){
    song.play();
    
} 
function modelloaded(){
    console.log("The model is working confirmed");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftwristx = "+leftwristx+"leftwristy = "+leftwristy);
    }
}