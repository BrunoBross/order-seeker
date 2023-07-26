import clsx from "clsx";
import { Text, TouchableOpacity } from "react-native";
import { useGame } from "../contexts/GameContext";
import { arrayEstaNaLista } from "../utils/arrayVerify";

export interface SquareProps {
  lineIdx: number;
  colIdx: number;
}

export default function Square(props: SquareProps) {
  const { lineIdx, colIdx } = props;

  const {
    isSeeTurn,
    isGameRunning,
    seeLayout,
    handleMakePlay,
    buttonSize,
    defaultIndexes,
    answerIndexes,
    hitIndexes,
    mistakeIndexes,
  } = useGame();

  const idx = [lineIdx, colIdx];
  const isMarked = arrayEstaNaLista(idx, defaultIndexes);
  const isAnswered = arrayEstaNaLista(idx, answerIndexes);
  const isHit = arrayEstaNaLista(idx, hitIndexes);
  const isMistake = arrayEstaNaLista(idx, mistakeIndexes);

  return (
    <TouchableOpacity
      className={clsx("items-center bg-zinc-500 justify-center rounded-md", {
        ["bg-zinc-200"]: isMarked && (isSeeTurn || !isGameRunning),
        ["bg-green-600"]: isAnswered || isHit,
        ["bg-red-600"]: isMistake && !isGameRunning,
      })}
      style={{ width: buttonSize, height: buttonSize }}
      key={`${lineIdx}-${colIdx}`}
      activeOpacity={0.7}
      onPress={() => !isAnswered && handleMakePlay(idx)}
      disabled={isSeeTurn || !isGameRunning}
    >
      {(isSeeTurn || !isGameRunning) && seeLayout && (
        <Text
          className={clsx("font-bold text-xl", {
            ["text-white"]: isHit || isMistake,
          })}
        >
          {seeLayout[lineIdx][colIdx] !== 0 && seeLayout[lineIdx][colIdx]}
        </Text>
      )}
    </TouchableOpacity>
  );
}
