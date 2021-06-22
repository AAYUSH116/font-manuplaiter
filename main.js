leftWristX="";
rightWristX="";
difference1="";

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.center();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
    
}

function draw(){
    background('#ffcccc');
    text('Aayush',difference1);
    fill('#ffcccc');
    
}

function modelLoaded(){
    console.log('POSE NET IS INTIALIZED');
}




function gotPose(results){
if(results.length>0){
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.y;
    difference1= floor(rightWristX-leftWristX);
    console.log("leftWristX"+leftWristX+"rightWristX"+rightWristX+"difference1"+difference1);
}
}