# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A p5.js template for SVG file generation. The UI is split into a **settings panel** (controls) and a **canvas panel** (sketch output). The canvas only re-renders when the user clicks "Generate".

## Common Commands

- **Live server (VS Code extension):** Open `index.html` with Live Server

## Project Structure

- `index.html` — entry point, loads Bootstrap, p5.js 1.11.3, and p5.js-svg 1.6.0 from CDN
- `sketch.js` — p5.js sketch: `setup()`, `draw()`, and export logic
- `requirements.md` — full feature requirements

## Architecture

- **Global p5.js mode** — p5 functions available without a prefix
- **p5.js-svg 1.6.0** renders to SVG via `createCanvas(w, h, SVG)`; compatible with p5.js 1.11.3
- `draw()` calls `clear()` before drawing to prevent SVG element accumulation (p5.js-svg quirk)
- `setup()` creates the canvas; `draw()` only runs when "Generate" is clicked (via `noLoop()` + `redraw()`)
- "Save SVG" and "Save PNG" both use p5.js-svg's built-in `save('file.svg')` / `save('file.png')`

## Default Sketch

- Square centered on canvas, side = 80% of shortest canvas dimension
- Circle inscribed in the square (same diameter as square side)
- Stroke only (no fill), using the configured line width

## Conventions

- Bootstrap CSS for all UI — no inline CSS
- Prefer simple, clean code; comment only when necessary
