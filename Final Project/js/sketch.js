
var Xs = [];
var Ys = [];
var diameters = [];

var xSpeeds = [];
var ySpeeds = [];

function setup() {
  createCanvas(400, 400);
  
  Xs[0] = 50;
  Ys[0] = 50;
  diameters[0] = 30;
  
  Xs[1] = 50;
  Ys[1] = 50;
  diameters[1] = 25;
  for (var i = 0; i < 60; i++) {
        xSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
        ySpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
        Xs[i] = getRandomNumber(400);
        Ys[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(15);
    }
}

function draw() {
  background(0,0,50);
treeCreation();
treeStar();
treeLights();
treePresents();
   textSize(30);
  fill(255,255,255)
  text('Merry Christmas',95,50)
  
  for(var i = 0; i < Xs.length; i++)
  {
    fill(255,255,255)
    circle(Xs[i], Ys[i], diameters [i]);
     
    xSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ySpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        Xs[i] += xSpeeds[i];
        Ys[i] += ySpeeds[i];
    
        if (Xs[i] > width) {
            Xs[i] = 0;
        }
        if (Xs[i] < 0) {
            Xs[i] = width;
        }
        if (Ys[i] > height) {
            Ys[i] = 0;
        }
        if (Ys[i] < 0) {
            Ys[i] = height;
        }
  }
}

function treeStar()
{
  fill(255,255,0)
  noStroke();
  triangle(175,85,200,130,225,85)
  triangle(175,115,200,70,225,115)
  stroke(1);
}
function treeLights()
{
  line(160,150,175,155)
  line(175,155,225,155)
  line(225,155,240,150)
  fill(Ys,Xs,diameters)
  triangle(170,153,170,165,180,155)
  triangle(195,155,200,168,205,155)
  triangle(230,153,230,165,220,155)
  line(140,200,165,205)
  line(165,205,235,205)
  line(235,205,260,200)
  triangle(150,203,160,205,150,215)
  triangle(180,205,185,218,190,205)
  triangle(220,205,215,218,210,205)
  triangle(250,203,240,205,250,215)
  line(133,250,165,255)
  line(165,255,235,255)
  line(235,255,267,250)
  triangle(143,252,153,253,143,265)
  triangle(170,255,172,270,180,255)
  triangle(195,255,200,270,205,255)
  triangle(230,255,228,270,220,255)
  triangle(257,252,247,253,257,265)
  line(125,300,160,305)
  line(160,305,240,305)
  line(240,305,275,300)
  triangle(135,302,140,318,145,304)
  triangle(160,305,165,320,170,305)
  triangle(183,305,188,320,193,305)
  triangle(217,305,212,320,207,305)
  triangle(240,305,235,320,230,305)
  triangle(265,302,260,318,255,304)
}
function treeCreation()
{
    fill(46,24,1)
  rect(175,325,50,75)
  fill(0,100,0)
  triangle(100,325,200,225,300,325)
  triangle(110,275,200,175,290,275)
  triangle(120,225,200,120,280,225)
  triangle(140,175,200,100,260,175)
}
function treePresents()
{
  fill(255,0,0)
rect(125,350,50,50)
  fill(0,255,0)
rect(175,350,50,50)
  fill(0,0,255)
rect(225,350,50,50)
  fill(255, 210, 0)
  rect(125,370,50,10)
  rect(145,350,10,50)
  rect(175,370,50,10)
  rect(195,350,10,50)
  rect(225,370,50,10)
  rect(245,350,10,50)
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
