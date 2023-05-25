"use client";

import Game from '@/components/Game';
import "./game.css";
import { map, players } from "./static-demo-game-state.js";

export default function TextHome() {

  return (
    <>
      <Game turnsCount={192} map={map} players={players} />
    </>
  )
}