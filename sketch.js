function setup() {
    createCanvas(600, 600);
  background("BLACK");
  }
  
  function draw() {
    stroke("BLUE");
    fill ("RED");
  
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
    }
  }
  