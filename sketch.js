//declarando as variáveis
var trex,trexRunning
var edges

//preload carrega as mídias do jogo
function preload(){
  trexRunning = loadAnimation('./images/trex3.png','./images/trex4.png')
}


//setup faz a configuração
function setup(){
  createCanvas(600,200);

  //sprite trex
  trex = createSprite(50,170,20,40);
  trex.addAnimation('Running',trexRunning);
  trex.scale = 0.5


  //sprite Solo
  
  
  //criando bordas
  edges = createEdgeSprites()
  
}

//draw faz o movimento, a ação do jogo
function draw(){
  background("lightgray");

  //pulo do trex
  if (keyDown('space')) {
    trex.velocityY = -10;
  }
  gravity()

  trex.collide(edges[3])


 
  //coordenadas do mouse na tela
  text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY)
  drawSprites();
}

function gravity(){
  trex.velocityY += 0.5
}
