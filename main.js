var noseX=0;
var noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/44857Vg3/455-4557163-icon-clown-nose-circle-hd-png-download.png');
}
function draw(){
    image(video, 0,0,300,300);
    image(clown_nose, noseX, noseY, 20, 20);
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    var posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function take_snapshot(){
    save('photo.png');
}
function modelloaded(){
    console.log('postnet is initalized');   
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-8;
        noseY=results[0].pose.nose.y-8;
    }
}