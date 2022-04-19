function setup(){
    canvas = createCanvas(350,350);
    canvas.position(800,210);
    video = createCapture(VIDEO);
    video.size(450,350);
    video.position(300,240)
    classifier = ml5.poseNet(video,modelLoaded);
    classifier.on('Pose',gotResult);
}

function modelLoaded(){
    console.log("Model Is Loaded");
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);

    }
}