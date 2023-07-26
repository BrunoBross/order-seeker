import { View } from "react-native";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import LanguageButton from "../components/LanguageButton";
import { useLanguage } from "../contexts/LanguageContext";

export default function AppConfig() {
  const { navigate } = useNavigation();
  const { text } = useLanguage();

  return (
    <View className="w-full h-full bg-zinc-900">
      <BackButton onPress={() => navigate("Home")} />

      <View className="items-center w-full h-full pt-16 ">
        <Title text={text.t("appConfig")} />
        <LanguageButton />
      </View>
    </View>
  );
}
