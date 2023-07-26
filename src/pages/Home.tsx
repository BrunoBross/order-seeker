import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <View className="w-full h-full p-5 bg-zinc-900">
      <View className="items-center justify-center w-full h-full gap-y-2">
        <Title text="OrderSeeker" />
        <Button onPress={() => navigate("GameConfig")} text="Play" />
        <Button onPress={() => navigate("HowToPlay")} text="How to Play" />
      </View>
    </View>
  );
}
