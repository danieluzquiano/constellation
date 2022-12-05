let zoff=1000000;
let mX, mY

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
//noLoop()
 //frameRate(120);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(250);
  let mm = map(mX, 0, width, -1, 1);
  let my = map(mY, 0, height, -1, 1);
  noStroke();
  fill(255);
  noFill()

  
  //for (let a = 0; a < map(mouseY,0,height,0.1,3); a += map(mouseY,0,height,0.01,0.00126)) {

    
  for (let a = 0; a < 2.5; a += 0.0004) {
    
    stroke(255)
    strokeWeight(0.0151)

    //let x = cos(a) * sin(a);
    
    //let x = tan(a)+a;
        
    let x = a*10000;



    let y = (a)/tan(x+zoff)+mm;
    
    //let y = cos(a) / sin(zoff/x);

    //let e = noise(cos(x*a)) * cos(y) / noise(sin(a));
    
    //let e = cos(x*a) * cos(y) + sin(a);
    
    let e = (cos(x))*1.3;
    
    //let f = noise(tan(e))*2

    
        //let e = noise(cos(x*a)) * cos(y) / noise(sin(a));


    //cuadrado con vertices redondeados
    point(sin(tan(cos(y))+mm)*e, sin(tan(sin(y))+mm)*e);
    
    //point(sin(sin(cos(y))+mm)*e, sin(sin(sin(y))+mm)*e);


    //circle(cos(tan(sin(y+my)))*y, sin(tan(cos(y-my)))*y, 0.0031);


    //point(sin(a+my)+e+a+y, cos(a-my)+e+a-y);

    
    //musical signature
   // circle(y/2, a*2*e, 0.031);

    
  }
  zoff += 0.035;
  
  //zoff += map(mouseX,0,width,-0.035,+0.035);

}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
}

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
