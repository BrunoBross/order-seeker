import { useState } from "react";
import { Alert, View } from "react-native";
import DropDownPickerInput from "../components/form/DropDownPickerInput";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../components/form/TextInput";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Title from "../components/Title";
import { useLanguage } from "../contexts/LanguageContext";
import useGameConfig from "../hooks/useGameConfig";

export default function GameConfig() {
  const { navigate } = useNavigation();
  const { text } = useLanguage();
  const {
    layoutSizeItems,
    layoutSizeValue,
    handleNavigate,
    setItemsNum,
    setLayoutSizeItems,
    setLayoutSizeValue,
    setTimeView,
    itemsNumObs,
    itemsNum,
    timeView,
  } = useGameConfig();

  return (
    <View className="w-full h-full bg-zinc-900">
      <BackButton onPress={() => navigate("Home")} />
      <View className="items-center w-full h-full pt-16 ">
        <Title text={text.t("gameConfig")} />
        <DropDownPickerInput
          title={text.t("selectLayoutSize")}
          value={layoutSizeValue}
          setValue={setLayoutSizeValue}
          items={layoutSizeItems}
          setItems={setLayoutSizeItems}
        />
        <TextInput
          title={text.t("numberOfItems")}
          inputMode="numeric"
          value={itemsNum}
          onChangeText={setItemsNum}
          placeholder="3"
          obs={itemsNumObs}
        />
        <TextInput
          title={text.t("timeToVisualize")}
          inputMode="numeric"
          value={timeView}
          onChangeText={setTimeView}
          placeholder="5"
        />
        <Button onPress={handleNavigate} text={text.t("start")} />
      </View>
    </View>
  );
}
