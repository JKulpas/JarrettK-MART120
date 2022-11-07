var headX = 190;
var headY = 100;
var hMovement;

var leftarmX = 90;
var leftarmY = 160;
var laMovement;

var rightarmX = 260;
var rightarmY = 160;
var raMovement;

var rightlegX = 200; 
var rightlegY = 320;
var rlMovement;

var torsoX = 115;
var torsoY = 160;
var tMovement;

var tSize = 22;
var count = 0;
var tSizeDirection = 1;


function setup() {
  createCanvas(400, 400);
  hMovement = floor(random() * 10) + 1;
  laMovement = floor(random() * 10) + 1;
  raMovement = floor(random() * 10) + 1;
  rlMovement = floor(random() * 10) + 1;
  tMovement = floor(random() * 10) + 1;
}

function draw() {
  background(220);
  background(220);
    textSize(22)
      text("Picture Portrait",0,25)
    
    strokeWeight(10);
    fill(255,0 ,0)
    rect(torsoX, torsoY, 150)
    
    fill(255,160,100);
      circle(headX,headY,120)
    triangle(170,160,205,160,190,180)
    strokeWeight(4);
    line(190,105,190,110)
    line(150,80,230,80)
    line(190,80,190,100)
    line(150,100,230,100)
    line(150,100,150,80)
    line(230,100,230,80)
    line(230,80,250,70)
    line(150,80,130,70)
    fill(160,82,45)
    ellipse(190,55,100,35)
    fill(255,0,0)
    
   strokeWeight(10);
      fill(0);
      point(165,90);
      point(215,90);
    
    strokeWeight(10);
    ellipse(190,135,25,10)
    fill(255,0,0)
    rect(leftarmX,leftarmY,30,150)
    rect(rightarmX,rightarmY,30,150)
    
    fill(0,0,255)
    rect(130,320,50,150)
    rect(rightlegX,rightlegY,50,150)
    strokeWeight(10);
    strokeWeight(2);
    fill(255,0,0)
    ellipse(190,140,25,10)
    strokeWeight(10);
     fill(0)
  
  headX += hMovement;
  if(headX >= 400 || headX <= 0)
    {
        hMovement *= -1;
    }
  leftarmY += laMovement;
  if(leftarmY >= 275 || leftarmY <= 0)
    {
        laMovement *= -1;
    }
  rightarmX += raMovement;
  if(rightarmX >= 300 || rightarmX <= 0)
    {
        raMovement *= -1;
    }
  rightlegY += rlMovement;
  if(rightlegY >= 400 || rightlegY <=0)
    {
      rlMovement *= -1;
    }
  torsoX=torsoX + tMovement;
  torsoY=torsoY + tMovement;
  torsoX += tMovement;
  if(torsoX >= 400 || torsoY >=400)
    {
    tMovement *= -1;
    }
  if(torsoX <= 0 || torsoY <= 0)
    {
      tMovement *= -1;
    }
  textSize(tSize);
    tSize+= tSizeDirection;
    count++;
    if(count > 5)
    {
        tSizeDirection *=-1;
        count = 0;}
  text("Jarrett Kulpas",260,375)
}

