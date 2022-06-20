let stage = 0;
let score = 0;

let tt = 0.0;

let timelimit = 180;
let timecount;
let previousT = 0;
let lastT = 0;
let intervalT = 0; 
let Time = 0;

let c = 0;

let Red;
let Green;
let Blue;

let value = 0;
let Red_slider = 0;
let Green_slider = 0;
let Blue_slider = 0;

let r;
let g;
let b;
let X,Y,Z;

let point = 0;

let LEVEL = 1;

let BSound;
let pick;
let pick2;


function preload()
{
   BSound = loadSound('media/Skyline.mp3')
   pick = loadImage('media/city4.JPG')
   pick2 = loadImage('media/wincity.JPG')
}


function setup() 
{
  createCanvas(600,700);
  background(pick);
  slidermake();
  BSound.loop();
}

function draw() 
{ 
  if(stage == 0)
  {
    mainstage();
  }

  if(stage == 1)
  {
    gamestage1();
  }
}

function mousePressed() 
{
   if(stage == 0)
   {
     startgame(); //mainstage
   }
}

function startgame()
{
   stage = 1;
}

function mainstage() //stage = 0 
{
  textAlign(CENTER);
  textSize(30);
  textSize(50);
  text('<<COLOR MAKER>>', 300, 100);
  fill(255);
  textSize(50);
  text('"Click to start"', 300, 430);
  textSize(15);
  text('<HOW TO PLAY>', 300, 150);
  textSize(15);
  text('Move the slide so that the wave color is exactly the same as the background color.',300,180);
  text('You can get points when the wave color and the background color are the same.',300,200);
  text('ex:) if the background is orange, Move the "Red" and "Green" slides.',300,220);
  text('The time limit is 3min.',300, 240); 
  textSize(25);
  text("Find the color of the world you've lost!",300,290);
  text('Complete the mission given by the evil spirit!',300,315);
  text("Bring back the bright world!",300,340);

  push();
  noStroke();
  rectMode(LEFT);
  fill(255,100);
  rect(0,600,600,800);
  pop();

  push();
  textSize(15);
  fill(0);
  text('Red:',30,630);
  text('Green:',220,630);
  text('Blue:', 410, 630);
  pop();

  text(Red_slider.value(), 52, 630);
  text(Green_slider.value(),250,630);
  text(Blue_slider.value(), 435,630);
}


function gamestage1()  //stage = 1 -> startgame
{
  background(X,Y,Z);
  // print(X,Y,Z);
  // print(r,g,b);
  everyset();
  pointer();

  if(point == 0)  //yellow
  {
  X = 255;
  Y = 255;
  Z = 0;
  pointer1();
  }
 
  if(point == 1) //purple
  {
    X = 255;
    Y = 0;
    Z = 255;
    pointer2();  
  }

  if(point == 2) //White
  {
    X = 255;
    Y = 255;
    Z = 255;
    pointer3();
  }

  if(point == 3) //skyblue
  {
    X = 0;
    Y = 255;
    Z = 255;
    pointer4();
  }
  
  if(point == 4) //deep purple
  {
    X = 50;
    Y = 30;
    Z = 70;
    LEVEL = 2;
    pointer5();
  }

  if(point == 5) //Burgundy
  {
    X =90;
    Y =10;
    Z =0;
    pointer6();
  }

  if(point == 6) //Orange
  {
    X =245;
    Y =200;
    Z =80;
    pointer7();
  }

  if(point == 7) //pink
  {
    LEVEL = 3;
    X =255;
    Y =150;
    Z =255;
    pointer8();
  }

  if(point == 8) //deep blue
  {
    X = 100;
    Y = 0;
    Z = 220;
    pointer9();
  }

  if(point == 9) //deep green
  {
    X = 115;
    Y = 160;
    Z = 0;
    pointer10();
  }

  if(point == 10) //deep pink
  {
    X = 210;
    Y = 85;
    Z = 115;
    pointer11();
  }  

  if(point == 11)
  {
    winscreen();
  }
}

function timer() 
{
  lastT = millis();

  if(Time==0)
  {
    timecount = millis();

    intervalT = lastT - previousT - timecount;

  }

  else
  {
    intervalT = lastT - previousT - timecount;
  }

  Time++;
  intervalT = int(intervalT/1000);

  textAlign(CENTER);
  textSize(30);
  fill(0);
  text('TIME:', 45, 35);
  text(timelimit-intervalT, 115, 35);
  
  if(timelimit-intervalT < 0)
  {
    GameOver();
  }
}

function wave()
{
   let t = tt;

   fill(c);

   beginShape();
   vertex(0, 600);

   for (let x = 0; x <= width; x += 10) 
   {
   let y = 400 + 100 * noise(t);
   vertex(x, y);
   t += 0.01;
   }

   vertex(width, 600);
   endShape();

   tt += 0.01; 
   noStroke();
}
  

function slidermake()
{
  Red_slider = createSlider(0, 255, 0, 5);
  Red_slider.position(10, 650);     
  Red_slider.size(180);

  Green_slider = createSlider(0, 255, 0, 5);
  Green_slider.position(200, 650);      
  Green_slider.size(180);

  Blue_slider = createSlider(0, 255, 0, 5);
  Blue_slider.position(390, 650);     
  Blue_slider.size(180);
}

function slide()
{
  r = Red_slider.value();
  g = Green_slider.value();
  b = Blue_slider.value();
  c = color(r,g,b);
}


function pointer()
{
  textSize(30);
  textAlign(LEFT);
  text('POINT:', 7, 70);
  text(point, 110, 70);
}

function everyset()
{
  push();
  noStroke();
  rectMode(LEFT);
  fill(255);
  rect(0,600,600,700);
  pop();

  textSize(15);
  text('Red:',20,630);
  text('Green:',200,630);
  text('Blue:', 390, 630);
  text(Red_slider.value(), 55, 630);
  text(Green_slider.value(),250,630);
  text(Blue_slider.value(), 430,630);

  textSize(30);
  text('LEVEL:', 8, 100)
  text(LEVEL, 110, 100);

  pointer();
  wave();
  slide();
  timer();
}


function pointer1() //level1
{
 if((r == 255 || r == 250) && (g ==255 || g == 250) && (b == 0 || b == 5))
  {
    point = 1;
  }
}

function pointer2() //보라색 만들기
{
 if((r == 255 || r == 250) && (g == 0 || g == 5) && (b == 255 || b == 250))
 {
   point = 2;
 }
}

function pointer3() //하얀색 만들기
{
  if((r == 255 || r == 250) && (g == 255 || g == 250) && (b == 255 || b== 250))
   {
   point = 3;
   }
}

function pointer4() //하늘색 만들기
{
  if((r == 0 || r ==5) && (g == 255 || g == 250) && (b == 255 || b == 250))
   {
    point = 4;
   }
}


function pointer5() //level2 - 진한 보라색 만들기
{
  if((r == 45 || r == 50 || r == 55) && (g == 25 || g == 30 || g == 35) && (b == 60 || b == 65 || b==70))
  {
    point = 5;
  }
}

function pointer6() //버건디 만들기 
{
  if((r == 85 || r == 90 || r == 95) && (g == 5 ||g == 10||g == 15 ) && (b == 0 || b == 5))
  {
    point = 6;
  }
}

function pointer7() //오렌지 만들기
{
  if((r == 240 || r == 245 || r == 250) && (g == 195 || g == 200 || g == 205) && (b == 75 || b ==80))
  {
    point = 7;
  }
}

function pointer8()//level3 분홍색 만들기
{
  if((r == 250 || r == 255) && (g == 145 || g == 150 || g == 155) && (b == 250 || b ==255))
  {
    point = 8;
  }
}

function pointer9()//찐파랑 만들기
{
  if((r == 95 || r == 100 || r == 105) && (g == 0 || g == 5) && (b ==  215 || b ==220))
  {
    point = 9;
  }
}

function pointer10()//풀색 만들기
{
  if((r == 110 || r == 115 || r == 120) && (g ==  155 || g == 160 || g == 165) && (b == 5 || b == 0))
  {
    point = 10;
  }
}

function pointer11()//진분홍 만들기
{
  if((r == 205 || r == 210 || r == 215) && (g == 80 || g == 85 || g == 90) && (b ==110|| b== 115 || b == 120))
  {
    point = 11;
  }
}

function winscreen()
{
  BSound.pause();
  background(pick2);
  textAlign(CENTER);
  textSize(30);
  strokeWeight(255);
  fill(0);
  text('YOUR WIN!',300,30);
  text("You've regained the light of the world!", 300, 60);

  push();
  noStroke();
  rectMode(LEFT);
  fill(255);
  rect(0,600,600,700);
  pop();

  textSize(15);
  text('Red',30,630);
  text('Green',220,630);
  text('Blue', 410,630);
}

function GameOver()
{
  BSound.pause();
  background(pick);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text('GAMEOVER',300,300);
  textSize(15);
  text('if you wnat to play again, Plz Press the F5 or Command-R key', 300, 350);

  push();
  noStroke();
  rectMode(LEFT);
  fill(255);
  rect(0,600,600,700);
  pop();

  textSize(15);
  text('Red',30,630);
  text('Green',220,630);
  text('Blue', 410,630);
}