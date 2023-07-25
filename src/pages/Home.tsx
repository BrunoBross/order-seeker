import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  const navigate = useNavigation();
  return (
    <View className="w-full h-full p-5 bg-zinc-900">
      <View className="w-full h-full items-center justify-center gap-y-2">
        <Text className="text-white font-extrabold text-4xl mb-5">
          OrderSeeker
        </Text>
        <TouchableOpacity
          className="w-[80vw] h-14 rounded-md items-center justify-center bg-green-600"
          activeOpacity={0.7}
          onPress={() => navigate.navigate("GameConfig")}
        >
          <Text className="text-white text-base font-semibold">Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
