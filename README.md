# Clone of Generals.io

This project is meant to clone the game generals.io using React in live on [twitch.tv/dhyegocalota](https://twitch.tv/dhyegocalota)

![Demo](https://raw.githubusercontent.com/dhyegocalota/generals-io-webapp/master/demo.png)

## Backend

You can find out more about the backend application created using Elixir as well: [dhyegocalota/generals-io-webapi](https://github.com/dhyegocalota/generals-io-webapi)

## Prerequisites

- Git
- Node v14+
- Yarn _(optional)_

## How to run

1. Clone using `git clone git@github.com:dhyegocalota/generals-io-webapp.git`
2. Install using `yarn install` or `npm install`
3. Run using `yarn dev ` or `npm run dev`

## Episodes

### Ep. 1 (06/22/20)

// TODO: Add description

### Ep. 2 (06/29/20)

// TODO: Add description

### Ep. 3 (07/06/20)

// TODO: Add description

### Ep. 4 (07/13/20)

- [x] Map tile looks closer to the original application
- [x] Static demo game state looks closer like a real game
- [x] Map tile supports revealed/unrevealed state
- [x] Map tile supports hovering by cursor style set as pointer

### Ep. 5 (07/20/20)

- [x] Added unities count to the spawner tiles (in the static game data)
- [x] Map tile can be selected
- [x] Possible next map positions are highlighted

### Ep. 6 (07/27/20)

- [x] Added turns count
- [x] Added player list
- [x] Added surrender dialog
- [x] Added win dialog

### Ep. 7 (08/03/20)

- [ ] Add chat
- [ ] Create the "welcome" page
- [ ] Create the "waiting in the room" page
- [ ] Support divide army before moving
- [ ] Support enqueing moves
- [ ] Support zooming

## FAQ

### how to fix konva not work with nextjs

https://github.com/konvajs/konva/issues/1458

### mac install canvas problem

canvas don't have a prebuilt arm64 version, so directly `npm install canvas` will fail on macos.
you should install dependency first:

```
brew install pkg-config cairo pango libpng jpeg giflib librsvg
npm install canvas
```

see https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X#homebrew
