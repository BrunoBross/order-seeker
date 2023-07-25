import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import DropDownPickerInput from "../components/DropDownPickerInput";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export default function GameConfig() {
  const navigation = useNavigation();

  const [itemsNum, setItemsNum] = useState("");
  const [timeView, setTimeView] = useState("");
  const [layoutSizeValue, setLayoutSizeValue] = useState(0);
  const [layoutSizeItems, setLayoutSizeItems] = useState([
    { label: "3x3", value: 3 },
    { label: "5x5", value: 5 },
    { label: "7x7", value: 7 },
  ]);

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

    navigation.navigate("Game", {
      gameOptions: {
        layoutSize: layoutSizeValue,
        itemsNum: itemsNumNumber,
        timeView: Number(timeView),
      },
    });
  };

  return (
    <View className="w-full h-full bg-zinc-900">
      <TouchableOpacity
        className="mt-8 ml-4"
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="arrow-back-outline" size={50} color="white" />
      </TouchableOpacity>
      <View className="w-full h-full items-center pt-16 gap-y-4">
        <View>
          <DropDownPickerInput
            value={layoutSizeValue}
            setValue={setLayoutSizeValue}
            items={layoutSizeItems}
            setItems={setLayoutSizeItems}
            title="Select Layout Size"
          />
        </View>
        <View className="w-[80vw] -z-10">
          <View className="flex-row justify-between">
            <Text className="text-white text-base font-semibold">
              Number of Items
            </Text>

            <Text className="text-zinc-500 text-base font-semibold">
              {layoutSizeValue ? "Max. " : ""}
              {layoutSizeValue === 3
                ? "9"
                : layoutSizeValue === 5
                ? "35"
                : layoutSizeValue === 7 && "49"}
            </Text>
          </View>
          <TextInput
            className="bg-zinc-500 h-12 rounded-lg pl-3 text-white text-base font-bold"
            inputMode="numeric"
            value={itemsNum}
            onChangeText={setItemsNum}
            placeholder="3"
            placeholderTextColor={colors.zinc[400]}
          />
        </View>
        <View className="w-[80vw] -z-10">
          <Text className="text-white text-base font-semibold">
            Time to visualize (seconds)
          </Text>
          <TextInput
            className="bg-zinc-500 h-12 rounded-lg pl-3 text-white text-base font-bold"
            inputMode="numeric"
            value={timeView}
            onChangeText={setTimeView}
            placeholder="5"
            placeholderTextColor={colors.zinc[400]}
          />
        </View>
        <TouchableOpacity
          className="w-[80vw] h-14 rounded-md items-center justify-center bg-green-600 -z-10"
          activeOpacity={0.7}
          onPress={handleNavigate}
        >
          <Text className="text-white text-base font-semibold">Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
