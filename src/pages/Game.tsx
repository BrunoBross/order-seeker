import { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { arrayEstaNaLista } from "../utils/arrayVerify";
import GameTable from "../components/GameTable";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function generateMatrix(size: number) {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  return matrix;
}

export default function Game({ route }: any) {
  const navigation = useNavigation();

  const [layout, setLayout] = useState<number[][]>(
    generateMatrix(route.params.gameOptions.layoutSize)
  );
  const [seeLayout, setSeeLayout] = useState<number[][]>();
  const qtdToGenerate = route.params.gameOptions.itemsNum;

  const buttonSize = (Dimensions.get("screen").width - 100) / layout[0].length;

  const [defaultIndexes, setDefaultIndexes] = useState<number[][]>([]);
  const [answerIndexes, setAnswerIndexes] = useState<number[][]>([]);
  const [hitIndexes, setHitIndexes] = useState<number[][]>([]);
  const [mistakeIndexes, setMistakeIndexes] = useState<number[][]>([]);
  const [plays, setPlays] = useState(0);

  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isSeeTurn, setIsSeeTurn] = useState(false);

  // faz uma jogada
  const handleMakePlay = (idx: number[]) => {
    // verifica se o jogo nao esta rolando
    if (!isGameRunning) {
      return;
    }
    setPlays((prev) => prev + 1);
    if (seeLayout && seeLayout[idx[0]][idx[1]] === plays + 1) {
      let newHitIndexes = [...hitIndexes, idx];
      newHitIndexes && setHitIndexes(newHitIndexes);
    } else {
      let newMistakeIndexes = [...mistakeIndexes, idx];
      newMistakeIndexes && setMistakeIndexes(newMistakeIndexes);
    }
    const newAnswerIndexes = [...answerIndexes, idx];
    newAnswerIndexes && setAnswerIndexes(newAnswerIndexes);
  };

  // verifica ganhador
  const verifyWin = () => {
    setIsGameRunning(false);
    return hitIndexes.length;
  };

  const generateIndexes = () => {
    let newIndexes: number[][] = [];
    let seeLayout = layout;
    for (let i = 0; i < qtdToGenerate; i++) {
      let condition = true;
      // while para nao repetir indices
      while (condition) {
        const lineIdx = Math.floor(Math.random() * layout.length);
        const colIdx = Math.floor(Math.random() * layout[0].length);
        const idx = [lineIdx, colIdx];
        if (!arrayEstaNaLista(idx, newIndexes)) {
          newIndexes.push([lineIdx, colIdx]);
          seeLayout[lineIdx][colIdx] = i + 1;
          condition = false;
        }
      }
    }
    setSeeLayout(seeLayout);
    setDefaultIndexes(newIndexes);
  };

  // configuracao inicial do jogo
  const initGame = () => {
    setIsGameRunning(true);
    setIsSeeTurn(true);

    setLayout(generateMatrix(route.params.gameOptions.layoutSize));
    setAnswerIndexes([]);
    setHitIndexes([]);
    setMistakeIndexes([]);
    setPlays(0);

    generateIndexes();

    setTimeout(() => {
      setIsSeeTurn(false);
    }, route.params.gameOptions.timeView * 1000);
  };

  // verifica a cada jogada se deu a quantidade certa e faz as verificacoes
  useEffect(() => {
    if (plays === qtdToGenerate) {
      verifyWin();
    }
  }, [plays]);

  return (
    <View className="w-full h-full bg-zinc-900">
      <TouchableOpacity
        className="mt-8 ml-4"
        onPress={() => navigation.navigate("GameConfig")}
      >
        <Ionicons name="arrow-back-outline" size={50} color="white" />
      </TouchableOpacity>
      <View className="w-full h-full gap-y-5 mt-16 items-center">
        <View>
          <GameTable
            layout={layout}
            seeLayout={seeLayout}
            defaultIndexes={defaultIndexes}
            answerIndexes={answerIndexes}
            hitIndexes={hitIndexes}
            mistakeIndexes={mistakeIndexes}
            isGameRunning={isGameRunning}
            isSeeTurn={isSeeTurn}
            handleMakePlay={handleMakePlay}
            buttonSize={buttonSize}
          />
        </View>

        <View className="w-full h-14 items-center">
          {!isGameRunning && (
            <TouchableOpacity
              className="w-[80vw] h-14 rounded-md items-center justify-center bg-green-600"
              activeOpacity={0.7}
              onPress={initGame}
            >
              <Entypo name="controller-play" size={30} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
