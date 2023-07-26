import Game from "./Game";
import GameProvider from "../contexts/GameContext";

export default function GameWrapper() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}
