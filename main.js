nosex=0
nosey=0
function preload(){
lipstick=loadImage("lips.png")    
}
function setup(){
canvas=createCanvas(400,300)   
canvas.center()
video=createCapture(VIDEO)
video.size(400,300)
 video.hide()
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses)
}
function modelloaded(){
 console.log("model is loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") ;  
}
function gotPoses(results){
 console.log(results)
if(results.length>0)  
{nosex=results[0].pose.nose.x -30
 nosey=results[0].pose.nose.y +10
}
}
function draw(){
 image(video,0,0,400,300)   
 image(lipstick,nosex,nosey,70,50)
}