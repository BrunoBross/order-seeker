import { Text, View } from "react-native";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";

export default function HowToPlay() {
  const { navigate } = useNavigation();

  return (
    <View className="w-full h-full bg-zinc-900">
      <BackButton onPress={() => navigate("Home")} />

      <View className="items-center w-full h-full pt-16 ">
        <Title text="How to Play" />
        <View className="w-[80vw] bg-zinc-700 p-5 rounded-lg">
          <Text className="text-base font-semibold text-white">
            How game works?
          </Text>
          <View className="pl-4 border-l-2 border-green-600">
            <Text className="text-base font-semibold text-white">
              1. The game will reveal some dots in a numerical order and then
              hide the dots.
            </Text>
            <Text className="text-base font-semibold text-white">
              2. The objective is to click on the dots in the order they were
              revealed.
            </Text>
          </View>
          <Text className="mt-4 text-base font-semibold text-white">
            How to configure the game?
          </Text>
          <View className="pl-4 border-l-2 border-green-600">
            <Text className="text-base font-semibold text-white">
              1. Choose the size of matrix
            </Text>
            <Text className="text-base font-semibold text-white">
              2. Choose how many dots you want to be generated.
            </Text>
            <Text className="text-base font-semibold text-white">
              3. Choose the duration you want the dots to be visible.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
