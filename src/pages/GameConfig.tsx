import { useState } from "react";
import { Alert, View } from "react-native";
import DropDownPickerInput from "../components/form/DropDownPickerInput";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../components/form/TextInput";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Title from "../components/Title";

const defaultLayoutSizeItems = [
  { label: "3x3", value: 3 },
  { label: "5x5", value: 5 },
  { label: "7x7", value: 7 },
];

export default function GameConfig() {
  const { navigate } = useNavigation();

  const [itemsNum, setItemsNum] = useState("");
  const [timeView, setTimeView] = useState("");
  const [layoutSizeValue, setLayoutSizeValue] = useState(0);
  const [layoutSizeItems, setLayoutSizeItems] = useState(
    defaultLayoutSizeItems
  );

  const handleNavigate = () => {
    if (!layoutSizeValue) {
      return Alert.alert("Error", "Select an layout size");
    }

    const itemsNumNumber = Number(itemsNum);

    if (!itemsNumNumber) {
      return Alert.alert("Error", "Insert number of items");
    }

    if (itemsNumNumber <= 1) {
      return Alert.alert("Error", "Number of items must be greater than 1");
    }

    if (Number(timeView) <= 0) {
      return Alert.alert("Error", "Time to visualize bust me greater than 1");
    }

    switch (layoutSizeValue) {
      case 3:
        if (itemsNumNumber >= 10) {
          return Alert.alert("Error", "Number of items must be less than 10");
        }
        break;
      case 5:
        if (itemsNumNumber >= 36) {
          return Alert.alert("Error", "Number of items must be less than 36");
        }
        break;
      case 7:
        if (itemsNumNumber >= 50) {
          return Alert.alert("Error", "Number of items must be less than 50");
        }
        break;
      default:
        break;
    }

    navigate("Game", {
      gameOptions: {
        layoutSize: layoutSizeValue,
        itemsNum: itemsNumNumber,
        timeView: Number(timeView),
      },
    });
  };

  const sizeValueObs =
    layoutSizeValue === 3
      ? "9"
      : layoutSizeValue === 5
      ? "35"
      : layoutSizeValue === 7 && "49";

  const itemsNumObs = layoutSizeValue ? `Max. ${sizeValueObs}` : "";

  return (
    <View className="w-full h-full bg-zinc-900">
      <BackButton onPress={() => navigate("Home")} />

      <View className="items-center w-full h-full pt-16 ">
        <Title text="Game Config" />
        <DropDownPickerInput
          value={layoutSizeValue}
          setValue={setLayoutSizeValue}
          items={layoutSizeItems}
          setItems={setLayoutSizeItems}
          title="Select Layout Size"
        />
        <TextInput
          title="Number of items"
          inputMode="numeric"
          value={itemsNum}
          onChangeText={setItemsNum}
          placeholder="3"
          obs={itemsNumObs}
        />
        <TextInput
          title="Time to visualize (seconds)"
          inputMode="numeric"
          value={timeView}
          onChangeText={setTimeView}
          placeholder="5"
        />
        <Button onPress={handleNavigate} text="Start" />
      </View>
    </View>
  );
}
