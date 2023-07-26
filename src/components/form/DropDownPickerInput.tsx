import { Dispatch, SetStateAction, useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";
import colors from "tailwindcss/colors";
import { useLanguage } from "../../contexts/LanguageContext";

interface DropDownPickerInputProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  items: ItemType<number>[];
  setItems: Dispatch<SetStateAction<{ label: string; value: number }[]>>;
  title: string;
}

export default function DropDownPickerInput(props: DropDownPickerInputProps) {
  const { value, setValue, items, setItems, title } = props;
  const { text } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <View className="w-[80vw]">
      <Text className="text-base font-semibold text-white">{title}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={text.t("pickAnOption")}
        placeholderStyle={{
          color: colors.zinc[400],
        }}
        style={{
          backgroundColor: colors.zinc[500],
          borderWidth: 0,
        }}
        listItemContainerStyle={{
          backgroundColor: colors.zinc[500],
          borderWidth: 0,
        }}
        textStyle={{
          color: colors.white,
          fontWeight: "bold",
        }}
        tickIconStyle={{
          backgroundColor: colors.white,
        }}
        zIndex={3000}
      />
    </View>
  );
}
