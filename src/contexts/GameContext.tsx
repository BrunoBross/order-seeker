import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { generateMatrix } from "../utils/generateMatrix";
import { arrayEstaNaLista } from "../utils/arrayVerify";
import { Dimensions } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ParamList } from "../@types/navigation";

interface GameProviderProps {
  children: ReactNode;
}

export interface GameContextInterface {
  isGameRunning: boolean;
  initGame: () => void;
  layout: number[][];
  seeLayout?: number[][];
  defaultIndexes: number[][];
  answerIndexes: number[][];
  hitIndexes: number[][];
  mistakeIndexes: number[][];
  isSeeTurn: boolean;
  handleMakePlay: (idx: number[]) => void;
  buttonSize: number;
}

const GameContext = createContext({} as GameContextInterface);

export default function GameProvider(props: GameProviderProps) {
  const { children } = props;

  const {
    params: {
      gameOptions: { itemsNum, layoutSize, timeView },
    },
  } = useRoute<RouteProp<ParamList, "Game">>();

  const [layout, setLayout] = useState<number[][]>(generateMatrix(layoutSize));
  const [seeLayout, setSeeLayout] = useState<number[][]>();
  const qtdToGenerate = itemsNum;

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

    setLayout(generateMatrix(layoutSize));
    setAnswerIndexes([]);
    setHitIndexes([]);
    setMistakeIndexes([]);
    setPlays(0);

    generateIndexes();

    setTimeout(() => {
      setIsSeeTurn(false);
    }, timeView * 1000 - 1000);
  };

  // verifica a cada jogada se deu a quantidade certa e faz as verificacoes
  useEffect(() => {
    if (plays === qtdToGenerate) {
      verifyWin();
    }
  }, [plays]);

  return (
    <GameContext.Provider
      value={{
        isGameRunning,
        initGame,
        answerIndexes,
        buttonSize,
        defaultIndexes,
        handleMakePlay,
        hitIndexes,
        isSeeTurn,
        layout,
        mistakeIndexes,
        seeLayout,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
