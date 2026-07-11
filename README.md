# DELATRAP — Neon Trap Train

An endless low-poly **neon synthwave "trap train"** music visualizer built with [Three.js](https://threejs.org/).
A black steam train rolls forever through a neon desert while the singer's lyrics materialize word-by-word as glowing 3D clouds, cowboys gallop alongside firing tracer rounds, eagles glide overhead, and lyric-themed roadside props pop in as the track plays.

## ▶ Play it

Open **`index.html`** — it's fully static (no build step). Everything except the Three.js CDN import runs locally.

- **Drag** to orbit • **scroll / pinch** to zoom • **Space** to pause
- Tap **START THE RIDE** to begin (audio needs a user gesture, especially on mobile)

## Features

- Orbiting, always-above-ground camera around an infinitely looping train
- Lyrics synced to the audio, revealed word-by-word (Bilderberg font) and drifting off as smoke
- Bass-reactive neon, striped synthwave sun, parallax mountains, shooting stars
- 20 lyric-themed roadside objects that spawn beside the track
- Procedural sound design: train rumble, steam chuffs, rail clacks, whistle, gunshots
- Glowing particle atmosphere with real 3D-depth parallax

## Local dev

`server.mjs` is a tiny local static server with HTTP range support (handy for audio scrubbing):

```bash
node server.mjs   # then open http://localhost:8013
```

GitHub Pages serves the static files directly, so `server.mjs` is not used when hosted.

## Fonts

Custom fonts live in `fonts/`: **Urban Starblues** (the DELATRAP tag), **Bilderberg** (lyrics), plus Sacra Spina. Signboards use a system geometric font.

---
🚂 Built with Three.js • hosted on GitHub Pages
