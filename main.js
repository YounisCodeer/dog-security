video = "";

function preload(){
    video = createVideo("video.mp4")
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    Image(video, 0, 0, 480, 380);
}

function start()
{
    objcetDetector = ml5.objcetDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects"
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    video.loop();
    video.speed(1)
    video.volume(0)
}