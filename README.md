# p5 SVG Generator Template

A minimal p5.js template for creating and exporting generative artwork as SVG or PNG.

## Stack

- [p5.js](https://p5js.org/) 1.11.3 — drawing and canvas management
- [p5.js-svg](https://github.com/zenozeng/p5.js-svg) 1.6.0 — SVG renderer for p5.js
- [Bootstrap](https://getbootstrap.com/) 5.3 — UI layout and controls

## Getting Started

Open `index.html` with a local server. The recommended way is the **Live Server** extension for VS Code — right-click `index.html` → *Open with Live Server*.

> Opening `index.html` directly as a `file://` URL will not work due to browser security restrictions on local scripts.

## Usage

| Control | Description |
|---|---|
| Canvas Width / Height | Set the output dimensions in pixels |
| Line Width | Stroke width applied to all shapes |
| Generate | Re-render the sketch with the current settings |
| Save PNG | Download the canvas as a timestamped `.png` file |
| Save SVG | Download the canvas as a timestamped `.svg` file |

Exported files are named `sketch-yyMMdd-hhmm.ext` (e.g. `sketch-260416-1430.svg`).

## Project Structure

```
index.html   — layout and controls (Bootstrap)
sketch.js    — draw() function: edit this to change the artwork
main.js      — setup, generate, and export logic (rarely needs editing)
```

## Creating Your Own Sketch

Edit `sketch.js`. The `draw()` function has access to all p5.js globals and the following variables defined in `main.js`:

| Variable | Description |
|---|---|
| `canvasWidth` | Current canvas width in pixels |
| `canvasHeight` | Current canvas height in pixels |
| `lineWidth` | Current line width from the settings panel |

**Example — replacing the default circle-in-square with a grid of dots:**

```js
function draw() {
  clear();
  background(255);
  noStroke();
  fill(0);

  let cols = 10;
  let spacing = canvasWidth / cols;
  for (let x = spacing / 2; x < canvasWidth; x += spacing) {
    for (let y = spacing / 2; y < canvasHeight; y += spacing) {
      circle(x, y, lineWidth * 10);
    }
  }
}
```

To add custom settings (e.g. a color picker or a count input), add the HTML control to the settings panel in `index.html` and read its value inside `draw()` or `generate()` in `main.js`.
