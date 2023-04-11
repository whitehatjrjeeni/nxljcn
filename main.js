status="";
img="";
object=[];

function preload()
{
img=loadImage("home.webp");
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
video=createCapture(VIDEO);
video.size(640,420);
video.hide();
object_detector=ml5.objectDetector('cocossd',modalloaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}

function modalloaded()
{
console.log("ml"); 
status=true;
object_detector.detect(img,gotresult);
}

function gotresult(error,results)
{
  if(error){console.log(error);
}  
object=results;
console.log(results);
}

function draw()
{
image(video,0,0,640,420);
if(status!=""){
  objectDetector.detect(video,gotresult);
  for (i=0;i<object.length;i++){
  
fill(r,g,b);
percent=floor(object[i].confidence*100);
text(object[i].label+" "+ percent+"%",object[i].x,object[i].y);
noFill();
stroke(r,g,b);
rect(object[i].x,object[i].y,object[i].width,object[i].height);}
}}
