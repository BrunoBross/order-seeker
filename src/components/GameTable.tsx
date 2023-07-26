import { View } from "react-native";
import { arrayEstaNaLista } from "../utils/arrayVerify";
import Square from "./Square";

interface GameTableProps {
  layout: number[][];
  seeLayout?: number[][];
  defaultIndexes: number[][];
  answerIndexes: number[][];
  hitIndexes: number[][];
  mistakeIndexes: number[][];
  isGameRunning: boolean;
  isSeeTurn: boolean;
  handleMakePlay: (idx: number[]) => void;
  buttonSize: number;
}

export default function GameTable(props: GameTableProps) {
  const {
    layout,
    seeLayout,
    defaultIndexes,
    answerIndexes,
    hitIndexes,
    mistakeIndexes,
    isGameRunning,
    isSeeTurn,
    handleMakePlay,
    buttonSize,
  } = props;
  return (
    <View className="h-[80vw] w-[80vw] justify-between">
      {layout.map((line, lineIdx) => {
        return (
          <View className="flex-row justify-between" key={lineIdx}>
            {line.map((_, colIdx) => {
              const idx = [lineIdx, colIdx];
              const isMarked = arrayEstaNaLista(idx, defaultIndexes);
              const isAnswered = arrayEstaNaLista(idx, answerIndexes);
              const isHit = arrayEstaNaLista(idx, hitIndexes);
              const isMistake = arrayEstaNaLista(idx, mistakeIndexes);

              return (
                <Square
                  buttonSize={buttonSize}
                  colIdx={colIdx}
                  handleMakePlay={handleMakePlay}
                  idx={idx}
                  isAnswered={isAnswered}
                  isGameRunning={isGameRunning}
                  isHit={isHit}
                  isMarked={isMarked}
                  isMistake={isMistake}
                  isSeeTurn={isSeeTurn}
                  lineIdx={lineIdx}
                  seeLayout={seeLayout}
                  key={`line:${lineIdx}-col:${colIdx}`}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
