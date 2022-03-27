var noseX = 0;
var noseY = 0;
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
   video.position(50,150)

    canvas = createCanvas(550,500);
    canvas.position(850,140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet is ready!");
}

function gotPoses(results){
 if(results.length > 0){
     nosex  = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;

     rightWristX = results[0].pose.rightWrist.x;
     leftWristX = results[0].pose.leftWrist.x;

     difference = floor(leftWristX - rightWristX)
 }else{
     alert("Please turn on your camera");
 }
}

function draw(){
    background("#969A97");
    document.getElementById("square").innerHTML = "Side of the square is - "+difference+" px";
    fill("#66ff33");
    stroke("#ff9900");
    square(noseX, noseY, difference);
}

