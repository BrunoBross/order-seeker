import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { navigate } = useNavigation();
  const { text } = useLanguage();

  return (
    <View className="w-full h-full p-5 bg-zinc-900">
      <View className="items-center justify-center w-full h-full gap-y-2">
        <Title text="OrderSeeker" />
        <Button onPress={() => navigate("GameConfig")} text={text.t("play")} />
        <Button
          onPress={() => navigate("HowToPlay")}
          text={text.t("howToPlay")}
        />
        <Button
          onPress={() => navigate("AppConfig")}
          text={text.t("appConfig")}
        />
      </View>
    </View>
  );
}
