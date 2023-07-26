import { Text, View } from "react-native";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { useLanguage } from "../contexts/LanguageContext";
import { ReactNode } from "react";

interface HowTextProps {
  children: ReactNode;
}

const HowText = (props: HowTextProps) => {
  return (
    <Text className="text-base font-semibold text-white">{props.children}</Text>
  );
};

export default function HowToPlay() {
  const { navigate } = useNavigation();
  const { text } = useLanguage();

  return (
    <View className="w-full h-full bg-zinc-900">
      <BackButton onPress={() => navigate("Home")} />

      <View className="items-center w-full h-full pt-16 ">
        <Title text={text.t("howToPlay")} />
        <View className="w-[80vw] bg-zinc-700 p-5 rounded-lg">
          <HowText>{text.t("howGameWorks")}</HowText>
          <View className="pl-4 border-l-2 border-green-600">
            <HowText>{text.t("how-1-1")}</HowText>
            <HowText>{text.t("how-1-2")}</HowText>
          </View>
          <HowText>{text.t("howToConfigureGame")}</HowText>
          <View className="pl-4 border-l-2 border-green-600">
            <HowText>{text.t("how-2-1")}</HowText>
            <HowText> {text.t("how-2-2")} </HowText>
            <HowText>{text.t("how-2-3")}</HowText>
          </View>
        </View>
      </View>
    </View>
  );
}
