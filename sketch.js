function setup() {
    createCanvas(600, 600);
    background("blue");
  }
  
  function draw() {
    stroke("black");
    fill("pink");
  
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 20,20)
    }
  
  }