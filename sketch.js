function draw() {
  // clear() prevents SVG element accumulation across redraws
  clear();
  background(255);
  noFill();
  stroke(0);
  strokeWeight(lineWidth);

  let size = min(canvasWidth, canvasHeight) * 0.8;
  let cx = canvasWidth / 2;
  let cy = canvasHeight / 2;

  rectMode(CENTER);
  rect(cx, cy, size, size);
  ellipse(cx, cy, size, size);
}
