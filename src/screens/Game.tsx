import { View } from "react-native";
import GameTable from "../components/GameTable";
import { Entypo } from "@expo/vector-icons";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useGame } from "../contexts/GameContext";

export default function Game() {
  const { navigate } = useNavigation();
  const { isGameRunning, initGame } = useGame();

  return (
    <View className="w-full h-full bg-zinc-900">
      <BackButton onPress={() => navigate("GameConfig")} />
      <View className="items-center w-full h-full pt-16">
        <GameTable />
        <View className="items-center w-full h-14">
          {!isGameRunning && (
            <Button onPress={initGame}>
              <Entypo name="controller-play" size={30} color="white" />
            </Button>
          )}
        </View>
      </View>
    </View>
  );
}
