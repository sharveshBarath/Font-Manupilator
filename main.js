difference=0;
leftWristX = 0;
rightWristX = 0;
function setup(){
    canvas = createCanvas(550,550);
    canvas.position(560,150)
    
    video = createCapture(VIDEO)
    video.size(550,550)
    
    poseNet = ml5.poseNet(video,modelLoaded)
        poseNet.on("pose", goPoses);
    }
    
    function modelLoaded(){
    console.log("model Loaded");
    }
    
    function goPoses(results){
    
    if(results.length > 0){
    
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor( leftWristX - rightWristX );

    }
    }
    function draw(){
        background('#6C91C2');
    document.getElementById('font_size').innerHTML = "font size of the text = " + difference + "  px";
    textSize(difference);
    fill('#FFE787');
text("Sharvesh", 50,400);
    
    
    
    
    }