import { Text, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
}

export default function Button(props: ButtonProps) {
  const { text, children, ...rest } = props;
  return (
    <TouchableOpacity
      className="w-[80vw] h-14 rounded-md items-center justify-center mt-2 bg-green-600"
      activeOpacity={0.7}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Text className="text-base font-semibold text-white">{text}</Text>
      )}
    </TouchableOpacity>
  );
}
