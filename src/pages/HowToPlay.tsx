import { Text, View } from "react-native";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { useLanguage } from "../contexts/LanguageContext";

export default function HowToPlay() {
  const { navigate } = useNavigation();
  const { text } = useLanguage();

  return (
    <View className="w-full h-full bg-zinc-900">
      <BackButton onPress={() => navigate("Home")} />

      <View className="items-center w-full h-full pt-16 ">
        <Title text={text.t("howToPlay")} />
        <View className="w-[80vw] bg-zinc-700 p-5 rounded-lg">
          <Text className="text-base font-semibold text-white">
            {text.t("howGameWorks")}
          </Text>
          <View className="pl-4 border-l-2 border-green-600">
            <Text className="text-base font-semibold text-white">
              {text.t("how-1-1")}
            </Text>
            <Text className="text-base font-semibold text-white">
              {text.t("how-1-2")}
            </Text>
          </View>
          <Text className="mt-4 text-base font-semibold text-white">
            {text.t("howToConfigureGame")}
          </Text>
          <View className="pl-4 border-l-2 border-green-600">
            <Text className="text-base font-semibold text-white">
              {text.t("how-2-1")}
            </Text>
            <Text className="text-base font-semibold text-white">
              {text.t("how-2-2")}{" "}
            </Text>
            <Text className="text-base font-semibold text-white">
              {text.t("how-2-3")}{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
