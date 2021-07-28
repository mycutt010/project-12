      var garden,rabbit;
      var gardenImg,rabbitImg;
      var leaves,leaf1,leaf2,leaf3;
      var appleImage,apple;

      function preload(){
      gardenImg = loadImage("garden.png");
      rabbitImg = loadImage("rabbit.png");
      appleImage = loadImage("apple.png");
      leaf1 = loadImage("leaf.png");
      leaf2 = loadImage("orangeLeaf.png");
      leaf3 = loadImage("redImage.png");
      }

      function setup(){
      createCanvas(400,400);
        
      garden=createSprite(200,200);
      garden.addImage(gardenImg);

      rabbit = createSprite(180,340,30,30);
      rabbit.scale =0.09;
      rabbit.addImage(rabbitImg);
      }


      function draw() {

      background("white");

      rabbit.x = World.mouseX;

      edges= createEdgeSprites();
      rabbit.collide(edges);
      spawnApple();
      spawnleaves();
      drawSprites();

      }

      function spawnApple(){
    

      if(frameCount % 80 ==0){
      var rand = Math.round (random(1,1))       
      apple = createSprite(random(50,350),40,10,10);
      apple.addImage("appleImage",appleImage);
      apple.scale = 0.07;
      apple.velocityY = 4;
      apple.lifetime = 200;
      }
      }
      function spawnleaves(){

      if(frameCount % 60 == 0){

      leaves = createSprite(random(50,250),38,14,17);
     
      leaves.velocityY = 4;
      leaves.scale = 0.07;
      leaves.lifetime = 200;
      var rand = Math.round (random(1,3)) 

      switch(rand){
      case 1:leaves.addImage(leaf1)
      break;
      case 2:leaves.addImage(leaf2)
      break;
      case 3:leaves.addImage(leaf3)
      break;

          
      }
}          }
 
 
      
           
            
                  
           


           
   
 


