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
}

function modelLoaded(){
    console.log('POSE NET IS INTIALIZED');
}

function gotPose(results){
if(results.length>0){
}
}