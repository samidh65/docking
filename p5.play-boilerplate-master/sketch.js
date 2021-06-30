var bg,spacecraft,craft;


function preload(){
bg = loadImage("Docking-undocking/spacebg.jpg")
iss = loadImage("Docking-undocking/iss.png")
craft1 = loadImage("Docking-undocking/spacecraft1.png")
craft2= loadImage("Docking-undocking/spacecraft2.png")
craft3 = loadImage("Docking-undocking/spacecraft3.png")
craft4 = loadImage("Docking-undocking/spacecraft4.png")

}

function setup() {
  createCanvas(800,800);
 var spacecraft =  createSprite(400, 280, 50, 50);
 spacecraft.addImage("spacecraft1",iss)
 craft = createSprite(380,450,50,50);

 craft.scale = 0.5;
}

function draw() {
  background(bg);
  craft.velocityX = 0;
  craft.velocityY = 0; 
  craft.addImage("craft",craft1)
  if(keyDown(LEFT_ARROW)){
   craft.velocityX = -5;
   craft.velocityY = 0 ;
   craft.addImage("craft",craft4)
  }
   if(keyDown(RIGHT_ARROW)){
    craft.velocityX = 5;
    craft.velocityY = 0 ;
    craft.addImage("craft",craft3)

  }
   if(keyDown(UP_ARROW)){
    craft.velocityX = 0;
   craft.velocityY = -5; 
   craft.addImage("craft",craft2)
  }
  if(keyDown(DOWN_ARROW)){
    craft.velocityX = 0;
    craft.velocityY = 5; 
  }
if(craft.y=280 && craft.x=400){
text("docking successful")


}


  
  

  drawSprites()
}


