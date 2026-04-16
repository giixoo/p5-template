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

function stampedFilename(ext) {
  let d = new Date();
  let yy = String(d.getFullYear()).slice(-2);
  let MM = String(d.getMonth() + 1).padStart(2, '0');
  let dd = String(d.getDate()).padStart(2, '0');
  let hh = String(d.getHours()).padStart(2, '0');
  let mm = String(d.getMinutes()).padStart(2, '0');
  return `sketch-${yy}${MM}${dd}-${hh}${mm}.${ext}`;
}

function exportSVG() {
  let svgEl = document.querySelector('#canvas-container svg');
  if (!svgEl) return;
  let blob = new Blob([new XMLSerializer().serializeToString(svgEl)], { type: 'image/svg+xml' });
  downloadBlob(blob, stampedFilename('svg'));
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
    offscreen.toBlob(blob => downloadBlob(blob, stampedFilename('png')));
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
