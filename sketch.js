let canvasWidth = 800;
let canvasHeight = 600;
let lineWidth = 0.3;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight, SVG);
  canvas.parent('canvas-container');
  noLoop();

  document.getElementById('btnGenerate').addEventListener('click', generate);
  document.getElementById('btnSavePNG').addEventListener('click', exportPNG);
  document.getElementById('btnSaveSVG').addEventListener('click', exportSVG);

  redraw();
}

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

function generate() {
  let w = parseInt(document.getElementById('canvasWidth').value) || canvasWidth;
  let h = parseInt(document.getElementById('canvasHeight').value) || canvasHeight;
  lineWidth = parseFloat(document.getElementById('lineWidth').value) || lineWidth;

  if (w !== canvasWidth || h !== canvasHeight) {
    canvasWidth = w;
    canvasHeight = h;
    resizeCanvas(canvasWidth, canvasHeight);
  }

  redraw();
}

function exportSVG() {
  let svgEl = document.querySelector('#canvas-container svg');
  if (!svgEl) return;
  let blob = new Blob([new XMLSerializer().serializeToString(svgEl)], { type: 'image/svg+xml' });
  downloadBlob(blob, 'sketch.svg');
}

function exportPNG() {
  let svgEl = document.querySelector('#canvas-container svg');
  if (!svgEl) return;
  let img = new Image();
  img.onload = function () {
    let offscreen = document.createElement('canvas');
    offscreen.width = canvasWidth;
    offscreen.height = canvasHeight;
    offscreen.getContext('2d').drawImage(img, 0, 0);
    offscreen.toBlob(blob => downloadBlob(blob, 'sketch.png'));
  };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svgEl));
}

function downloadBlob(blob, filename) {
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
