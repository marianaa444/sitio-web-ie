function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  square(15,15,380)
  square(17,19,370)
  square(18,20,350)
  square(25,25,340)
  square(29,50,330)
  angleMode(DEGREES)
  rotate(5);
  square(33,55,325);
  
  angleMode(DEGREES)
  rotate(-5)
  square(38,66,315)
  square(44,70,308)
  
  angleMode(DEGREES)
  rotate(-3)
  square(55,80,300)
  
  angleMode(DEGREES)
  rotate(2)
  square(70,90,280)
  
  angleMode(DEGREES)
  rotate(1)
  square(100,125,180)
  
  
  angleMode(DEGREES)
  rotate(1)
  square(105,130,170)
  
  
  //centro
  angleMode(DEGREES)
  rotate(-1)
  square(150,140,150) 
  square(155,145,145)
  square(135,150,130)
  square(135,153,127)
  square(136,157,124)
  
  //mas pequeños
  angleMode(DEGREES)
  rotate(-1)
  square(150,170,100)
  square(160,175,87)
  square(150,180,80)
  
  //aun mas pequeños
  square(160,195,50)
  square(165,205,40)
  square(180,215,30)
  square(180,215,25)
  square(180,220,20)
  square(185,225,15)
  square(187,226,10)
  square(190,230,7)
  
}
