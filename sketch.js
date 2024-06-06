let xbola = 200;
let ybola = 200;
let di = 20;
let raio = di / 2;
let xvb = 7;
let yvb = 7;
let xr=5;
let yr=150;
let lr=7;
let ar=80;
let xri=585;
let yri=150;
let meuspontos = 0;
let pontosinimigo = 0;

let colidiu = false;
let ponto;
let raquetada;
let fundo;

let imagem;

function setup() {
  createCanvas(600,450);
  fundo.loop();
}

function draw() {
  background(0)
  image(imagem,0,0,600,450);
  mostrabola();
  mexebola();
  quicabola();
  mostrandoraquete(xr,yr);
  mostrandoraquete(xri,yri);
  mexeraquete();
  mexeraqueteinimigo();
  quicaraquetebola(xri,yri);
  quicaraquetebola(xr,yr);
  pontos();
  placar();
  texto();
}

function preload(){
  imagem = loadImage("Space.jpg")
  fundo = loadSound("SpiderDance.mp3")
  ponto = loadSound("Ponto.wav")
  raquetada = loadSound("PingPongHit.wav")
}

function mostrabola() {
  circle(xbola, ybola, di);
}

function mexebola(){
  xbola += xvb;
  ybola += yvb;
}
function quicabola(){
  if (xbola + raio > width || xbola - raio < 0) {
    xvb *= -1;
  }
  if (ybola + raio > height || ybola - raio < 0) {
    yvb *= -1;
    
  }
}

function mostrandoraquete(x,y){
  rect(x,y,lr,ar);
}  
  function mexeraquete(){
    if (keyIsDown(87))
      yr-=10;
        
    if(keyIsDown(83))
      yr+=10;
    
  }
function mexeraqueteinimigo(){
   if (keyIsDown(UP_ARROW))
      yri -= 10;
    
    if(keyIsDown(DOWN_ARROW))
      yri += 10;
}

function quicaraquetebola(x,y){
colidiu = collideRectCircle(x,y,lr,ar,xbola,ybola,raio);
  
  if(colidiu){
    xvb *= -1;
    raquetada.play();
   }
  }

function pontos(){
  if (xbola > 590){
meuspontos += 1  
  ponto.play();
  }
if (xbola < 10){
  pontosinimigo += 1
ponto.play(); 
 }
}

function placar(){
  stroke("rgb(255,255,255)");
  textAlign(CENTER);
  textSize(15);
  fill("rgb(77,77,199)");
  rect(150,10,40,20);
  fill("white");
  text(meuspontos,170,14);
  fill("rgb(199,27,27)");
  rect(430,10,40,20);
  fill("white");
  text(pontosinimigo,450,14);
}

  function texto(){
  let frase = "PONTOS JEDI"
  let xf = 90;
  let yf = 40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase,xf,yf);
    
  let frase2 = "PONTOS SITH"
  let xf2 = 360;
  let yf2 = 40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase2,xf2,yf2)
    
    fill("black")
    
  
}