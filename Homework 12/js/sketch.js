var playerX = 200;
var playerY = 25;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var obstacle1X = 200;
var obstacle1Y = 200;
var obstacle1Xspeed;
var obstacle1Yspeed;

var obstacle2X = 200;
var obstacle2Y = 400;
var obstacle2Xspeed;
var obstacle2Yspeed; 

var clickObstacleX;
var clickObstacleY;

function setup() {
  createCanvas(400, 600);
  obstacle1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  obstacle1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  obstacle2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * -5)) - 1);
  obstacle2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * -5)) - 1);
}

function draw() {
  background(255,255,0);
  //function calls and start of draw function
wallBorder();
wallExit();
createCharacter();
moveCharacter();
youWin();
randomSpeeds();
twoObstacles();
obstacleLoop();
createObstacle();
}
//end of draw function

function wallBorder()
  {
  fill(0)
  rect(0,0,10,600)
  rect(0,0,400,10)
  rect(390,0,10,600)
  }

function twoObstacles()
  {
  fill(0,0,255);
  circle(obstacle1X,obstacle1Y,50)
  fill(255,0,0);
  circle(obstacle2X,obstacle2Y,75)
  }

function createCharacter()
{ 
  fill(0,255,0)
  circle(playerX,playerY,15)
}

function obstacleLoop()
  {
  if(obstacle1X > width)
    {
        obstacle1X = 0;
    }
    if(obstacle1X < 0)
    {
        obstacle1X = width;
    }
    if(obstacle1Y > height)
    {
        obstacle1Y = 0;
    }
    if(obstacle1Y < 0)
    {
        obstacle1Y = height;
    }
  if(obstacle2X > width)
    {
        obstacle2X = 0;
    }
    if(obstacle2X < 0)
    {
        obstacle2X = width;
    }
    if(obstacle2Y > height)
    {
        obstacle2Y = 0;
    }
    if(obstacle2Y < 0)
    {
        obstacle2Y = height;
    }
  }

function wallExit()
{
  rect(0,590,170,10)
  rect(230,590,400,10)
  text("Exit", 190,570)
}

function randomSpeeds()
  {
  obstacle1X += obstacle1XSpeed;
  obstacle1Y += obstacle1YSpeed;
  
  obstacle2X += obstacle2XSpeed;
  obstacle2Y += obstacle2YSpeed;
  }

  function moveCharacter() 
{
    if(keyIsDown(w))
    {
      playerY -= 2;   
    }
   if(keyIsDown(s))
    {
        playerY += 2;   
    }
    if(keyIsDown(a))
    {
        playerX -= 2;   
    }
    if(keyIsDown(d))
    {
        playerX += 2;   
    }
}

function youWin()
{
   if(playerY > height && playerX < height-50)
    {
        fill(0);
        textSize(26);
        text("You Win", width/2-50, height/2-50);
    }
}

function createObstacle()
  {
  fill(255,0,255)
  circle(clickObstacleX,clickObstacleY,50)
  }

  function mouseClicked()
  {
    clickObstacleX = mouseX;
    clickObstacleY = mouseY;
  }
