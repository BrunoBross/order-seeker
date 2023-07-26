import {
  Text,
  TextInput as RNTextInput,
  View,
  TextInputProps as RNTextInputProps,
} from "react-native";
import colors from "tailwindcss/colors";

export interface TextInputProps extends RNTextInputProps {
  title?: string;
  obs?: string;
}

export default function TextInput(props: TextInputProps) {
  const { title, obs, ...rest } = props;

  return (
    <View className="w-[80vw] -z-10 mt-2">
      <View className="flex-row justify-between">
        <Text className="text-base font-semibold text-white">{title}</Text>
        {obs && (
          <Text className="text-base font-semibold text-zinc-500">{obs}</Text>
        )}
      </View>
      <RNTextInput
        className="h-12 pl-3 text-base font-bold text-white rounded-lg bg-zinc-500"
        placeholderTextColor={colors.zinc[400]}
        {...rest}
      />
    </View>
  );
}
