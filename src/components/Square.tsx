import clsx from "clsx";
import { Text, TouchableOpacity } from "react-native";

export interface SquareProps {
  isMarked: boolean;
  isAnswered: boolean;
  isHit: boolean;
  isMistake: boolean;
  isSeeTurn: boolean;
  isGameRunning: boolean;
  seeLayout?: number[][];
  handleMakePlay: (idx: number[]) => void;
  buttonSize: number;
  idx: number[];
  lineIdx: number;
  colIdx: number;
}

export default function Square(props: SquareProps) {
  const {
    isMarked,
    isAnswered,
    isHit,
    isMistake,
    isSeeTurn,
    isGameRunning,
    seeLayout,
    handleMakePlay,
    buttonSize,
    idx,
    lineIdx,
    colIdx,
  } = props;

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
