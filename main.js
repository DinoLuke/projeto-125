
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
video.size(550, 500);


canvas = createCanvas(550, 500);
canvas.position(560,80);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw() {
    background('yellow');
    textSize(difference);
    document.getElementById("fonte_size").innerHTML = "tamanho da fonte será = " + difference +"px";
    fill('#90ee90');
    stroke('cyan');
text("dino", 50, 400); }
function modelLoaded() {
    console.log('poseNet Is Initiazed!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}