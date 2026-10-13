function setup() {
  createCanvas(600, 500);
}

function draw() {
  let topoY = constrain(mouseY, 90, 120);
  background(245, 215, 205);
  noStroke();

  // sole 
  fill(244, 196, 48); // sole
  stroke("rgb(255 216 119)"); 
  strokeWeight(10);
  circle(550, 50, 80);
 
  noStroke();
  
  // prato 
  fill(128, 128, 0);
  rect(0, 400, 600, 200);

  // ippo
  fill(160, 140, 130);
  rect(130, 150, 260, 200); //corpo
  rect(270, 140, 220, 130, 70); //muso
  rect(110, 150, 35, 15, 50); //coda
  rect(290, 125, 80, 90, 60); //testa

  //zampe
  rect(130, 350, 30, 50);
  rect(180, 350, 30, 50);
  rect(310, 350, 30, 50);
  rect(360, 350, 30, 50);

  //orecchie 
  ellipse(290, 140, 14, 25);
  ellipse(320, 125, 14, 25);

  //occhi
  fill(255); //bianco
  ellipse(325, 150, 10, 10);
  ellipse(345, 150, 10, 10);
  
  fill(0); //nero
  ellipse(322, 150, 5, 5);
  ellipse(342, 150, 5, 5);

  //guancia rossa
  fill(220, 30, 60);
  ellipse(305, 160, 15, 15);

  // narici
  fill(0);
  ellipse(438, 160, 4, 4);
  ellipse(445, 160, 4, 4);

  //bocca
  stroke(0);
  strokeWeight(2);
  line(400, 215, 450, 215);
  
  // topo
  noStroke();
  fill(160, 180, 220);
  ellipse(174, topoY - 5, 16, 20); // orecchia dx
  ellipse(152, topoY - 5, 16, 20); // orecchia sx
  rect(153, topoY, 20, 30); // corpo
  triangle(163, topoY + 8, 
           146, topoY + 14, 
           160, topoY + 20); // muso 

  fill(0);
  ellipse(146, topoY + 14, 3.5, 3.5); // naso
  ellipse(164, topoY + 8, 2.5, 2.5); //occhi
  ellipse(160, topoY + 8, 2.5, 2.5); 

  fill(240, 150, 160);
  ellipse(164, topoY + 14, 3, 3); // guancia
  rect(172, topoY + 28, 30, 2, 90); // coda
}