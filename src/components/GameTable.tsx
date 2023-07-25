import clsx from "clsx";
import { Text, TouchableOpacity, View } from "react-native";
import { arrayEstaNaLista } from "../utils/arrayVerify";

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
            {line.map((col, colIdx) => {
              const idx = [lineIdx, colIdx];
              const isMarked = arrayEstaNaLista(idx, defaultIndexes);
              const isAnswered = arrayEstaNaLista(idx, answerIndexes);
              const isHit = arrayEstaNaLista(idx, hitIndexes);
              const isMistake = arrayEstaNaLista(idx, mistakeIndexes);

              return (
                <TouchableOpacity
                  className={clsx(
                    "items-center bg-zinc-500 justify-center rounded-md",
                    {
                      ["bg-zinc-200"]:
                        isMarked && (isSeeTurn || !isGameRunning),
                      ["bg-green-600"]: isAnswered || isHit,
                      ["bg-red-600"]: isMistake && !isGameRunning,
                    }
                  )}
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
                      {seeLayout[lineIdx][colIdx] !== 0 &&
                        seeLayout[lineIdx][colIdx]}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
