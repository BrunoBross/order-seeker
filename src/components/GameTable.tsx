import { View } from "react-native";
import Square from "./Square";
import { useGame } from "../contexts/GameContext";

export default function GameTable() {
  const { layout } = useGame();

  return (
    <View className="h-[80vw] w-[80vw] justify-between">
      {layout.map((line, lineIdx) => {
        return (
          <View className="flex-row justify-between" key={lineIdx}>
            {line.map((_, colIdx) => {
              return (
                <Square
                  lineIdx={lineIdx}
                  colIdx={colIdx}
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
