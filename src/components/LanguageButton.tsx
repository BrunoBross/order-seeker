import { Text, View } from "react-native";
import Brasil from "../assets/brazil.svg";
import Usa from "../assets/usa.svg";
import Button from "./Button";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageButton() {
  const { locale, toggleLanguage, text } = useLanguage();
  return (
    <Button onPress={toggleLanguage} className="flex-row">
      <Text className="text-base font-bold text-white">
        {text.t("language")}
      </Text>
      <View className="p-1 bg-white rounded-lg">
        {locale === "pt-BR" ? <Brasil /> : <Usa />}
      </View>
    </Button>
  );
}
