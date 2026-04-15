# Requirements

## Purpose

A reusable p5.js template for SVG file generation. The template provides a starting point for sketches where the user configures parameters and generates artwork that can be exported as SVG or PNG.

## Layout

Two-panel UI using Bootstrap:
- **Settings panel** — left side, contains all controls
- **Canvas panel** — right side, displays the p5.js sketch

## Settings Panel Controls (defaults)

| Control | Type | Default |
|---|---|---|
| Canvas width | number input | e.g. 800 |
| Canvas height | number input | e.g. 600 |
| Line width | number input | .3 |
| Generate | button | — |
| Save PNG | button | — |
| Save SVG | button | — |

## Canvas Behavior

- Canvas does **not** update in real time
- Canvas re-renders **only** when the "Generate" button is clicked
- Canvas size can be changed via the settings panel inputs

## SVG Support

- Use a dedicated library for SVG creation and export (e.g. `p5.svg` or `svg.js`)
- "Save SVG" exports the current canvas as a `.svg` file
- "Save PNG" exports the current canvas as a `.png` file

## Default Sketch

- A square centered on the canvas, side = 80% of the shortest canvas dimension
- A circle inscribed inside the square (diameter = square side)
- Both shapes use the configured line width, no fill (stroke only)

## Styling

- Bootstrap CSS for all UI (panels, inputs, buttons)
- No inline CSS
- Simple, clean code; comment only when necessary
